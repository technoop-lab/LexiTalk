import {
  ISpeechRecognitionProvider,
  SpeechRecognitionResult,
  SpeechError,
} from '../../types/conversation';

export class MockDevSpeechProvider implements ISpeechRecognitionProvider {
  private resultCallback: ((result: SpeechRecognitionResult) => void) | null = null;
  private errorCallback: ((error: SpeechError) => void) | null = null;
  private endCallback: (() => void) | null = null;
  private isListening = false;
  private timer: any = null;
  private cannedResponses: string[] = [
    'Hello, my name is Alex. Nice to meet you.',
    'I am looking forward to our project meeting.',
    'Could we please reschedule our appointment to Thursday at three o clock?',
    'I am afraid I have a conflict on Tuesday.',
    'That time works perfectly for me. Thank you for your flexibility.',
  ];
  private nextResponseIndex = 0;
  private simulateUnavailable = false;

  public setCannedResponses(responses: string[]) {
    this.cannedResponses = responses;
    this.nextResponseIndex = 0;
  }

  public setSimulateUnavailable(unavailable: boolean) {
    this.simulateUnavailable = unavailable;
  }

  public async isAvailable(): Promise<boolean> {
    return !this.simulateUnavailable;
  }

  public async start(config?: { language?: string; interimResults?: boolean }): Promise<void> {
    if (this.simulateUnavailable) {
      if (this.errorCallback) {
        this.errorCallback({
          code: 'device_offline',
          message: 'Offline speech recognition is not available on this device.',
        });
      }
      return;
    }

    this.isListening = true;
    const textToSimulate =
      this.cannedResponses[this.nextResponseIndex % this.cannedResponses.length];
    this.nextResponseIndex++;

    const words = textToSimulate.split(' ');
    let currentWordIndex = 0;

    // Simulate real-time word streaming
    this.timer = setInterval(() => {
      if (!this.isListening) {
        clearInterval(this.timer);
        return;
      }

      currentWordIndex++;
      const partial = words.slice(0, currentWordIndex).join(' ');
      const isFinal = currentWordIndex >= words.length;

      if (this.resultCallback) {
        this.resultCallback({
          transcript: partial,
          confidence: 0.98,
          isFinal,
        });
      }

      if (isFinal) {
        clearInterval(this.timer);
        this.isListening = false;
        if (this.endCallback) {
          this.endCallback();
        }
      }
    }, 280);
  }

  public async stop(): Promise<void> {
    this.isListening = false;
    if (this.timer) {
      clearInterval(this.timer);
    }
    if (this.endCallback) {
      this.endCallback();
    }
  }

  public onResult(callback: (result: SpeechRecognitionResult) => void): void {
    this.resultCallback = callback;
  }

  public onError(callback: (error: SpeechError) => void): void {
    this.errorCallback = callback;
  }

  public onEnd(callback: () => void): void {
    this.endCallback = callback;
  }
}
