import { getActiveEnglishAccent } from '../../utils/audioUtils';
import {
  ISpeechRecognitionProvider,
  SpeechRecognitionResult,
  SpeechError,
} from '../../types/conversation';

declare global {
  interface Window {
    AndroidSpeechBridge?: {
      isAvailable: () => boolean;
      startListening: (language: string) => void;
      stopListening: () => void;
    };
    webkitSpeechRecognition?: any;
    SpeechRecognition?: any;
  }
}

export class OnDeviceAndroidSpeechProvider implements ISpeechRecognitionProvider {
  private resultCallback: ((result: SpeechRecognitionResult) => void) | null = null;
  private errorCallback: ((error: SpeechError) => void) | null = null;
  private endCallback: (() => void) | null = null;
  private webRecognition: any = null;
  private isListening = false;

  constructor() {
    this.setupGlobalBridgeCallbacks();
  }

  private setupGlobalBridgeCallbacks() {
    if (typeof window !== 'undefined') {
      (window as any).onAndroidSpeechResult = (transcript: string, isFinal: boolean) => {
        if (this.resultCallback) {
          this.resultCallback({
            transcript,
            confidence: 0.95,
            isFinal,
          });
        }
      };

      (window as any).onAndroidSpeechError = (code: string, message: string) => {
        this.isListening = false;
        if (this.errorCallback) {
          this.errorCallback({
            code: (code as any) || 'device_offline',
            message: message || 'Offline speech recognition is not available on this device.',
          });
        }
      };

      (window as any).onAndroidSpeechEnd = () => {
        this.isListening = false;
        if (this.endCallback) {
          this.endCallback();
        }
      };
    }
  }

  public async isAvailable(): Promise<boolean> {
    if (typeof window === 'undefined') return false;

    // Check Android native bridge
    if (window.AndroidSpeechBridge && typeof window.AndroidSpeechBridge.isAvailable === 'function') {
      try {
        return window.AndroidSpeechBridge.isAvailable();
      } catch (e) {
        console.warn('AndroidSpeechBridge check failed', e);
      }
    }

    // Check standard Web Speech API support
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    return !!SpeechRecognition;
  }

  public async start(config?: { language?: string; interimResults?: boolean }): Promise<void> {
    const lang = config?.language || getActiveEnglishAccent();

    if (window.AndroidSpeechBridge && typeof window.AndroidSpeechBridge.startListening === 'function') {
      try {
        this.isListening = true;
        window.AndroidSpeechBridge.startListening(lang);
        return;
      } catch (err: any) {
        if (this.errorCallback) {
          this.errorCallback({
            code: 'device_offline',
            message: 'Offline speech recognition is not available on this device.',
          });
        }
        return;
      }
    }

    const SpeechRecClass = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecClass) {
      if (this.errorCallback) {
        this.errorCallback({
          code: 'device_offline',
          message: 'Offline speech recognition is not available on this device.',
        });
      }
      return;
    }

    try {
      if (this.webRecognition) {
        this.webRecognition.abort();
      }

      this.webRecognition = new SpeechRecClass();
      this.webRecognition.continuous = true;
      this.webRecognition.interimResults = config?.interimResults ?? true;
      this.webRecognition.lang = lang;

      this.webRecognition.onresult = (event: any) => {
        let transcript = '';
        let isFinal = false;

        for (let i = event.resultIndex; i < event.results.length; ++i) {
          const res = event.results[i];
          transcript += res[0].transcript;
          if (res.isFinal) isFinal = true;
        }

        if (this.resultCallback && transcript.trim()) {
          this.resultCallback({
            transcript: transcript.trim(),
            confidence: 0.9,
            isFinal,
          });
        }
      };

      this.webRecognition.onerror = (event: any) => {
        this.isListening = false;
        let code: SpeechError['code'] = 'network';
        let message = 'Speech recognition encountered an issue.';

        if (event.error === 'not-allowed') {
          code = 'permission_denied';
          message = 'Microphone permission was denied. Please allow microphone access.';
        } else if (event.error === 'no-speech') {
          code = 'no_speech';
          message = 'No speech detected. Please speak clearly.';
        } else if (event.error === 'network' || event.error === 'audio-capture') {
          code = 'device_offline';
          message = 'Offline speech recognition is not available on this device.';
        }

        if (this.errorCallback) {
          this.errorCallback({ code, message });
        }
      };

      this.webRecognition.onend = () => {
        this.isListening = false;
        if (this.endCallback) {
          this.endCallback();
        }
      };

      this.webRecognition.start();
      this.isListening = true;
    } catch (err: any) {
      this.isListening = false;
      if (this.errorCallback) {
        this.errorCallback({
          code: 'device_offline',
          message: 'Offline speech recognition is not available on this device.',
        });
      }
    }
  }

  public async stop(): Promise<void> {
    this.isListening = false;
    if (window.AndroidSpeechBridge && typeof window.AndroidSpeechBridge.stopListening === 'function') {
      try {
        window.AndroidSpeechBridge.stopListening();
      } catch (e) {
        console.warn('Android stopListening failed', e);
      }
    }

    if (this.webRecognition) {
      try {
        this.webRecognition.stop();
      } catch (e) {
        console.warn('Web recognition stop failed', e);
      }
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
