// LexiTALK Audio Recording Service for Section E Real Microphone Capture & Playback
// Uses browser / Capacitor MediaRecorder API to record user microphone audio and play it back via HTML5 Audio.

export class AudioRecordingService {
  private mediaRecorder: MediaRecorder | null = null;
  private audioChunks: Blob[] = [];
  private currentAudioStream: MediaStream | null = null;
  private audioElement: HTMLAudioElement | null = null;

  /**
   * Request microphone permission and start recording user's voice.
   */
  public async startRecording(): Promise<boolean> {
    try {
      this.stopPlayback();
      this.cleanup();

      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        console.warn('MediaDevices API not supported on this platform');
        return false;
      }

      this.currentAudioStream = await navigator.mediaDevices.getUserMedia({ audio: true });
      this.audioChunks = [];

      const options = MediaRecorder.isTypeSupported('audio/webm')
        ? { mimeType: 'audio/webm' }
        : MediaRecorder.isTypeSupported('audio/mp4')
        ? { mimeType: 'audio/mp4' }
        : undefined;

      this.mediaRecorder = new MediaRecorder(this.currentAudioStream, options);

      this.mediaRecorder.ondataavailable = (event: BlobEvent) => {
        if (event.data && event.data.size > 0) {
          this.audioChunks.push(event.data);
        }
      };

      this.mediaRecorder.start(100);
      return true;
    } catch (err) {
      console.error('Failed to start microphone recording:', err);
      return false;
    }
  }

  /**
   * Stop recording and return the recorded audio Blob URL.
   */
  public async stopRecording(): Promise<string | null> {
    return new Promise((resolve) => {
      if (!this.mediaRecorder || this.mediaRecorder.state === 'inactive') {
        this.stopStream();
        resolve(null);
        return;
      }

      this.mediaRecorder.onstop = () => {
        const mimeType = this.mediaRecorder?.mimeType || 'audio/webm';
        const audioBlob = new Blob(this.audioChunks, { type: mimeType });
        const audioUrl = URL.createObjectURL(audioBlob);
        this.stopStream();
        resolve(audioUrl);
      };

      try {
        this.mediaRecorder.stop();
      } catch (err) {
        console.error('Error stopping MediaRecorder:', err);
        this.stopStream();
        resolve(null);
      }
    });
  }

  /**
   * Play the user's recorded audio URL.
   */
  public playRecordedAudio(
    audioUrl: string,
    onEnded?: () => void,
    onTimeUpdate?: (currentTime: number, duration: number) => void
  ): boolean {
    try {
      this.stopPlayback();

      this.audioElement = new Audio(audioUrl);

      if (onEnded) {
        this.audioElement.onended = () => {
          onEnded();
        };
      }

      if (onTimeUpdate) {
        this.audioElement.ontimeupdate = () => {
          if (this.audioElement) {
            onTimeUpdate(this.audioElement.currentTime, this.audioElement.duration || 0);
          }
        };
      }

      this.audioElement.play().catch((err) => {
        console.error('Error playing recorded audio:', err);
        if (onEnded) onEnded();
      });

      return true;
    } catch (err) {
      console.error('Error setting up audio playback:', err);
      if (onEnded) onEnded();
      return false;
    }
  }

  /**
   * Pause playback of the user's recording.
   */
  public pausePlayback(): void {
    if (this.audioElement && !this.audioElement.paused) {
      this.audioElement.pause();
    }
  }

  /**
   * Resume playback of the user's recording.
   */
  public resumePlayback(): void {
    if (this.audioElement && this.audioElement.paused) {
      this.audioElement.play().catch((err) => console.error('Resume playback error:', err));
    }
  }

  /**
   * Stop playing recorded audio.
   */
  public stopPlayback(): void {
    if (this.audioElement) {
      try {
        this.audioElement.pause();
        this.audioElement.currentTime = 0;
      } catch {}
      this.audioElement = null;
    }
  }

  /**
   * Revoke object URL to free memory.
   */
  public deleteRecording(audioUrl: string | null): void {
    this.stopPlayback();
    if (audioUrl && audioUrl.startsWith('blob:')) {
      try {
        URL.revokeObjectURL(audioUrl);
      } catch {}
    }
  }

  /**
   * Stop all active microphone tracks.
   */
  private stopStream(): void {
    if (this.currentAudioStream) {
      this.currentAudioStream.getTracks().forEach((track) => track.stop());
      this.currentAudioStream = null;
    }
  }

  /**
   * Clean up all media streams and recorders.
   */
  public cleanup(): void {
    this.stopPlayback();
    if (this.mediaRecorder && this.mediaRecorder.state !== 'inactive') {
      try {
        this.mediaRecorder.stop();
      } catch {}
    }
    this.stopStream();
    this.mediaRecorder = null;
    this.audioChunks = [];
  }
}

export const AudioRecorderService = new AudioRecordingService();
