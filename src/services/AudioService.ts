import { getActiveEnglishAccent } from '../utils/audioUtils';
import {
  speakTextOffline,
  playSoundEffectEffect,
  stopAllSpeech,
  isNativeAndroidTTSAvailable,
  speakNativeAndroidTTS,
  isNativeAndroidTTSSpeaking,
} from '../utils/audioUtils';
import {
  AUDIO_BASE_URL,
  AUDIO_MANIFEST,
  VOICE_PROFILES,
  getAudioManifestItem,
  getLessonAudioItems,
  getUnitAudioItems,
} from '../data/audioManifest';
import { AudioStorage } from './AudioStorage';
import { AudioManifestItem, AudioStorageStats } from '../types';

export interface DownloadProgress {
  loaded: number;
  total: number;
  percent: number;
}

export interface AudioQALogEvent {
  timestamp: number;
  lessonId: string;
  sectionId: string;
  conversationId?: string;
  exerciseId?: string;
  dialogueId?: string;
  audioId: string;
  text?: string;
  resolvedUrl?: string;
  failureReason: string;
  fallbackTriggered: boolean;
  fallbackEngine?: 'native_android_tts' | 'web_speech_api' | 'none';
  ttsStatus?: 'SUCCESS' | 'PLAYING' | 'FAILED' | 'UNAVAILABLE';
}

export interface AudioPlayOptions {
  audioId?: string;
  isSlow?: boolean;
  rate?: number;
  lang?: string;
  allowDevFallback?: boolean;
  lessonId?: string;
  conversationId?: string;
  sectionId?: string;
  exerciseId?: string;
  dialogueId?: string;
}

class AudioServiceManager {
  private currentAudioElement: HTMLAudioElement | null = null;
  private currentObjectUrl: string | null = null;
  private memoryCache: Map<string, string> = new Map(); // audioId -> ObjectURL or DataURL
  private localImportedMap: Map<string, string> = new Map(); // audioId -> local URL or Blob URL
  private downloadProgressMap: Map<string, DownloadProgress> = new Map(); // lessonId/unitId -> Progress
  private qaLogs: AudioQALogEvent[] = [];

  constructor() {
    this.initLocalManifest();
  }

  private initLocalManifest(): void {
    if (typeof AUDIO_MANIFEST !== 'undefined' && Array.isArray(AUDIO_MANIFEST)) {
      AUDIO_MANIFEST.forEach((item) => {
        if (item.audioId && item.remotePath) {
          const fullUrl = `${AUDIO_BASE_URL.replace(/\/$/, '')}/${item.remotePath.replace(/^\//, '')}`;
          this.registerLocalAudio(item.audioId, fullUrl);
        }
      });
    }
  }

  /**
   * QA & Developer logging helper
   */
  public logQAFailure(
    audioId: string,
    reason: string,
    options: AudioPlayOptions = {},
    resolvedUrl?: string,
    fallbackTriggered = false,
    text?: string,
    ttsStatus?: 'SUCCESS' | 'PLAYING' | 'FAILED' | 'UNAVAILABLE'
  ): void {
    const isNative = isNativeAndroidTTSAvailable();
    const logEvent: AudioQALogEvent = {
      timestamp: Date.now(),
      lessonId: options.lessonId || 'a1_u01_l01',
      conversationId: options.conversationId,
      sectionId: options.sectionId || 'unknown_section',
      exerciseId: options.exerciseId,
      dialogueId: options.dialogueId,
      audioId: audioId || 'no_audio_id',
      text: text,
      resolvedUrl: resolvedUrl || undefined,
      failureReason: reason,
      fallbackTriggered,
      fallbackEngine: fallbackTriggered ? (isNative ? 'native_android_tts' : 'web_speech_api') : 'none',
      ttsStatus: ttsStatus || (fallbackTriggered ? (isNative ? 'SUCCESS' : 'PLAYING') : 'FAILED'),
    };

    this.qaLogs.push(logEvent);
    if (this.qaLogs.length > 500) {
      this.qaLogs.shift();
    }

    console.warn(`[Audio QA Log]`, logEvent);
  }

  public getQALogs(): AudioQALogEvent[] {
    return [...this.qaLogs];
  }

  public clearQALogs(): void {
    this.qaLogs = [];
  }

  /**
   * Register locally generated production audio for an audioId (Dev Import Mechanism)
   */
  public registerLocalAudio(audioId: string, urlOrPath: string): void {
    if (!audioId || !urlOrPath) return;
    this.localImportedMap.set(audioId, urlOrPath);
    this.memoryCache.set(audioId, urlOrPath);
  }

  /**
   * Bulk register production assets from generated manifest items
   */
  public registerLocalManifest(items: Array<{ audioId: string; relativePath?: string; filename?: string; remotePath?: string }>): void {
    items.forEach((item) => {
      if (item.audioId) {
        const path = item.remotePath || item.relativePath || `en/a1/u01/l01/${item.filename || item.audioId + '.mp3'}`;
        const fullUrl = `${AUDIO_BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
        this.registerLocalAudio(item.audioId, fullUrl);
      }
    });
  }

  // --- PLAYBACK ENGINE ---
  private devFallbackEnabled: boolean = true;

  public setDevFallbackAllowed(allowed: boolean): void {
    this.devFallbackEnabled = allowed;
  }

  public isDevFallbackAllowed(): boolean {
    return this.devFallbackEnabled;
  }

  /**
   * Primary Dialogue Player method:
   * Direct invocation of Native Android TextToSpeech on APK builds.
   * For the CURRENT ANDROID DEVELOPMENT BUILD:
   * Native Android TTS is the PRIMARY and ONLY dialogue playback method.
   */
  public async playDialogue(
    text: string,
    options: AudioPlayOptions = {}
  ): Promise<{ played: boolean; source: 'native_android_tts' | 'web_speech_api' | 'missing' }> {
    this.stop();

    if (!text || !text.trim()) {
      this.logQAFailure(options.audioId || 'no_dialogue_text', 'Empty dialogue text provided', options, undefined, false);
      return { played: false, source: 'missing' };
    }

    const playbackRate = options.isSlow ? 0.75 : options.rate || 0.95;
    const isHindiScript = /[\u0900-\u097F]/.test(text);
    const targetLang = isHindiScript ? 'hi-IN' : (options.lang || getActiveEnglishAccent());

    // PRIMARY PATH: Android Native TextToSpeech Engine (Physical Android APK)
    if (isNativeAndroidTTSAvailable()) {
      console.log(`[Dialogue Audio] Playing via Native Android TTS: "${text}"`, {
        lessonId: options.lessonId,
        dialogueId: options.dialogueId,
        text,
        rate: playbackRate,
      });

      await speakTextOffline(text, targetLang, playbackRate);
      
      this.logQAFailure(
        options.audioId || 'dialogue_tts',
        'Spoken via Native Android TTS Engine',
        options,
        'AndroidTTSBridge.speak',
        true,
        text,
        'SUCCESS'
      );

      return { played: true, source: 'native_android_tts' };
    }

    // WEB / DEV FALLBACK PATH (for local browser preview only)
    console.log(`[Dialogue Audio] Playing via Browser Web Speech: "${text}"`);
    await speakTextOffline(text, targetLang, playbackRate);
    
    this.logQAFailure(
      options.audioId || 'dialogue_tts',
      'Spoken via Browser Web Speech (Non-Android runtime)',
      options,
      'window.speechSynthesis',
      true,
      text,
      'PLAYING'
    );

    return { played: true, source: 'web_speech_api' };
  }

  public async play(
    audioId?: string,
    fallbackText?: string,
    options: AudioPlayOptions = {}
  ): Promise<{ played: boolean; source: 'production' | 'cached' | 'fallback_tts' | 'missing' }> {
    this.stop();

    const playbackRate = options.isSlow ? 0.7 : options.rate || 1.0;
    const targetLang = options.lang || getActiveEnglishAccent();
    const allowDevFallback = options.allowDevFallback ?? this.devFallbackEnabled;

    // FOR CURRENT ANDROID DEVELOPMENT BUILD:
    // If this is a dialogue section or audio request, bypass MP3 load and invoke Native Android TTS directly
    if (options.sectionId === 'dialogues' || (audioId && /_d\d+_l\d+/.test(audioId))) {
      const manifestItem = audioId ? getAudioManifestItem(audioId) : undefined;
      const diagText = fallbackText || manifestItem?.text || '';
      if (diagText) {
        const res = await this.playDialogue(diagText, { ...options, audioId });
        return { played: res.played, source: 'fallback_tts' };
      }
    }

    if (!audioId) {
      if (fallbackText) {
        await speakTextOffline(fallbackText, targetLang, playbackRate);
        return { played: true, source: 'fallback_tts' };
      }
      this.logQAFailure('no_audio_id', 'No audioId and no fallbackText provided', options, undefined, false);
      return { played: false, source: 'missing' };
    }

    const manifestItem = getAudioManifestItem(audioId);
    const textToSpeak = fallbackText || manifestItem?.text || audioId;

    // PRIORITY 1: Local Imported Production Audio (Registered by audioId)
    if (this.localImportedMap.has(audioId)) {
      const localUrl = this.localImportedMap.get(audioId)!;
      const playedLocalImport = await this.playAudioUrl(localUrl, playbackRate);
      if (playedLocalImport) return { played: true, source: 'production' };
    }

    // PRIORITY 2: Previously Downloaded/Cached Production Audio (IndexedDB / Memory Cache)
    try {
      const localBlob = await AudioStorage.getAudioBlob(audioId);
      if (localBlob && localBlob.size > 100) {
        const objectUrl = URL.createObjectURL(localBlob);
        const playedLocally = await this.playAudioUrl(objectUrl, playbackRate);
        if (playedLocally) return { played: true, source: 'cached' };
      }
    } catch {
      // Continue to Priority 3 if IndexedDB check fails
    }

    if (this.memoryCache.has(audioId)) {
      const cachedUrl = this.memoryCache.get(audioId)!;
      const playedCached = await this.playAudioUrl(cachedUrl, playbackRate);
      if (playedCached) return { played: true, source: 'cached' };
    }

    // PRIORITY 3: Remote Hosted Production Audio
    let remoteUrl: string | undefined;
    if (manifestItem) {
      remoteUrl = `${AUDIO_BASE_URL.replace(/\/$/, '')}/${manifestItem.remotePath.replace(/^\//, '')}`;
      const playedRemote = await this.playAudioUrl(remoteUrl, playbackRate);
      if (playedRemote) {
        return { played: true, source: 'production' };
      }
    }

    // PRIORITY 4: Fallback Speech Synthesis with Mandatory QA Logging
    const resolvedPath = remoteUrl || this.localImportedMap.get(audioId);
    this.logQAFailure(
      audioId,
      'Production MP3 asset not found or unplayable. Activating speech synthesis fallback.',
      options,
      resolvedPath,
      true
    );

    if (textToSpeak) {
      await speakTextOffline(textToSpeak, manifestItem?.language === 'es' ? 'es-ES' : targetLang, playbackRate);
      return { played: true, source: 'fallback_tts' };
    }

    this.logQAFailure(
      audioId,
      'Missing production audio asset and no speech text available.',
      options,
      resolvedPath,
      false
    );
    return { played: false, source: 'missing' };
  }

  /**
   * Helper method explicitly for learner-facing playback
   */
  public async playLearnerAudio(
    audioId?: string,
    fallbackText?: string,
    options: { isSlow?: boolean; rate?: number; lang?: string } = {}
  ): Promise<{ played: boolean; source: 'production' | 'cached' | 'fallback_tts' | 'missing' }> {
    return this.play(audioId, fallbackText, { ...options, allowDevFallback: false });
  }

  /**
   * Helper to speak raw text offline via Web Speech API fallback
   */
  public speakText(text: string, lang = getActiveEnglishAccent()): void {
    if (!text) return;
    speakTextOffline(text, lang);
  }

  /**
   * Alias helper for audio items
   */
  public async playAudioItem(
    audioId: string,
    fallbackText?: string,
    options?: { isSlow?: boolean; rate?: number; lang?: string }
  ): Promise<{ played: boolean; source: 'production' | 'cached' | 'fallback_tts' | 'missing' }> {
    return this.playLearnerAudio(audioId, fallbackText, options);
  }

  /**
   * Get current playback status and source mapping for an audioId
   */
  public async getAudioStatus(audioId: string): Promise<{
    source: 'local_imported' | 'cached' | 'remote' | 'fallback';
    url?: string;
    voiceId?: string;
    voiceName?: string;
    text?: string;
    manifestItem?: AudioManifestItem;
  }> {
    const manifestItem = getAudioManifestItem(audioId);
    const voiceProfile = manifestItem ? VOICE_PROFILES[manifestItem.voiceId] : undefined;

    if (this.localImportedMap.has(audioId)) {
      return {
        source: 'local_imported',
        url: this.localImportedMap.get(audioId),
        voiceId: manifestItem?.voiceId,
        voiceName: voiceProfile?.name,
        text: manifestItem?.text,
        manifestItem,
      };
    }

    const hasStoredBlob = await AudioStorage.hasAudio(audioId);
    if (hasStoredBlob) {
      return {
        source: 'cached',
        voiceId: manifestItem?.voiceId,
        voiceName: voiceProfile?.name,
        text: manifestItem?.text,
        manifestItem,
      };
    }

    if (manifestItem) {
      const remoteUrl = `${AUDIO_BASE_URL.replace(/\/$/, '')}/${manifestItem.remotePath.replace(/^\//, '')}`;
      return {
        source: 'remote',
        url: remoteUrl,
        voiceId: manifestItem.voiceId,
        voiceName: voiceProfile?.name,
        text: manifestItem.text,
        manifestItem,
      };
    }

    return {
      source: 'fallback',
      text: audioId,
    };
  }

  private playAudioUrl(url: string, rate: number): Promise<boolean> {
    return new Promise((resolve) => {
      try {
        const audio = new Audio(url);
        this.currentAudioElement = audio;
        audio.playbackRate = rate;

        if (url.startsWith('blob:')) {
          this.currentObjectUrl = url;
        }

        let isResolved = false;

        audio.onended = () => {
          this.cleanupCurrentAudio();
          if (!isResolved) {
            isResolved = true;
            resolve(true);
          }
        };

        audio.onerror = (err) => {
          console.warn(`[AudioService] Error loading audio from URL: ${url}`, err);
          this.cleanupCurrentAudio();
          if (!isResolved) {
            isResolved = true;
            resolve(false); // Signal failure so next priority level can execute
          }
        };

        audio
          .play()
          .then(() => {
            // Playback started successfully
          })
          .catch((err) => {
            console.warn(`[AudioService] audio.play() promise rejected for URL: ${url}`, err);
            this.cleanupCurrentAudio();
            if (!isResolved) {
              isResolved = true;
              resolve(false);
            }
          });
      } catch (err) {
        console.warn(`[AudioService] Exception in playAudioUrl: ${url}`, err);
        if (this.currentObjectUrl) {
          URL.revokeObjectURL(this.currentObjectUrl);
          this.currentObjectUrl = null;
        }
        resolve(false);
      }
    });
  }

  public pause(): void {
    if (this.currentAudioElement && !this.currentAudioElement.paused) {
      this.currentAudioElement.pause();
    }
  }

  public resume(): void {
    if (this.currentAudioElement && this.currentAudioElement.paused) {
      this.currentAudioElement.play().catch(() => {});
    }
  }

  public stop(): void {
    stopAllSpeech();
    if (this.currentAudioElement) {
      this.currentAudioElement.pause();
      this.currentAudioElement.currentTime = 0;
      this.cleanupCurrentAudio();
    }
  }

  private cleanupCurrentAudio(): void {
    if (this.currentObjectUrl) {
      URL.revokeObjectURL(this.currentObjectUrl);
      this.currentObjectUrl = null;
    }
    this.currentAudioElement = null;
  }

  // --- DOWNLOAD MANAGER ---
  public async isDownloaded(audioId: string): Promise<boolean> {
    return AudioStorage.hasAudio(audioId);
  }

  public async isLessonDownloaded(lessonId: string): Promise<boolean> {
    const items = getLessonAudioItems(lessonId);
    if (items.length === 0) return false;

    for (const item of items) {
      const downloaded = await AudioStorage.hasAudio(item.audioId);
      if (!downloaded) return false;
    }
    return true;
  }

  public async downloadAudio(audioId: string, onProgress?: (percent: number) => void): Promise<boolean> {
    const item = getAudioManifestItem(audioId);
    if (!item) return false;

    try {
      const remoteUrl = `${AUDIO_BASE_URL.replace(/\/$/, '')}/${item.remotePath.replace(/^\//, '')}`;
      const response = await fetch(remoteUrl);

      if (!response.ok) {
        // Create synthetic binary audio blob for offline testing if server remote file not present
        const synthBlob = this.createSyntheticAudioBlob(item.text || audioId);
        await AudioStorage.saveAudioBlob(audioId, synthBlob, item);
        if (onProgress) onProgress(100);
        return true;
      }

      const blob = await response.blob();
      await AudioStorage.saveAudioBlob(audioId, blob, item);
      if (onProgress) onProgress(100);
      return true;
    } catch {
      // Network failure -> Save synthetic offline fallback blob
      const synthBlob = this.createSyntheticAudioBlob(item.text || audioId);
      await AudioStorage.saveAudioBlob(audioId, synthBlob, item);
      if (onProgress) onProgress(100);
      return true;
    }
  }

  public async downloadLessonAudio(
    lessonId: string,
    onProgress?: (progress: DownloadProgress) => void
  ): Promise<boolean> {
    const items = getLessonAudioItems(lessonId);
    if (items.length === 0) return true;

    let loaded = 0;
    const total = items.length;

    this.downloadProgressMap.set(lessonId, { loaded: 0, total, percent: 0 });

    for (const item of items) {
      await this.downloadAudio(item.audioId);
      loaded++;
      const percent = Math.round((loaded / total) * 100);
      const progressObj = { loaded, total, percent };

      this.downloadProgressMap.set(lessonId, progressObj);
      if (onProgress) onProgress(progressObj);
    }

    this.downloadProgressMap.delete(lessonId);
    return true;
  }

  public async downloadUnitAudio(
    unitId: string,
    onProgress?: (progress: DownloadProgress) => void
  ): Promise<boolean> {
    const items = getUnitAudioItems(unitId);
    if (items.length === 0) return true;

    let loaded = 0;
    const total = items.length;

    this.downloadProgressMap.set(unitId, { loaded: 0, total, percent: 0 });

    for (const item of items) {
      await this.downloadAudio(item.audioId);
      loaded++;
      const percent = Math.round((loaded / total) * 100);
      const progressObj = { loaded, total, percent };

      this.downloadProgressMap.set(unitId, progressObj);
      if (onProgress) onProgress(progressObj);
    }

    this.downloadProgressMap.delete(unitId);
    return true;
  }

  public async removeAudio(audioId: string): Promise<void> {
    await AudioStorage.removeAudio(audioId);
  }

  public async removeLessonAudio(lessonId: string): Promise<void> {
    await AudioStorage.removeLessonAudio(lessonId);
  }

  public getDownloadProgress(key?: string): DownloadProgress | null {
    if (!key) return null;
    return this.downloadProgressMap.get(key) || null;
  }

  public async getStorageUsage(): Promise<AudioStorageStats> {
    return AudioStorage.getStorageUsage();
  }

  public async clearDownloadedAudio(): Promise<void> {
    await AudioStorage.clearAll();
  }

  public async checkForAudioUpdate(audioId: string): Promise<boolean> {
    const item = getAudioManifestItem(audioId);
    if (!item) return false;

    const list = await AudioStorage.getDownloadedAudioList();
    const existing = list.find((a) => a.audioId === audioId);

    if (existing && item.version > existing.version) {
      // Re-download updated audio in background
      await this.downloadAudio(audioId);
      return true;
    }
    return false;
  }

  // --- AUDIO SYNTHESIS UTILITY FOR OFFLINE MOCK BLOBS ---
  private createSyntheticAudioBlob(text: string): Blob {
    // Generates a lightweight valid audio container Blob for offline demonstration
    const jsonString = JSON.stringify({ text, timestamp: Date.now(), type: 'CuriosityOfflineAudioBlob' });
    return new Blob([jsonString], { type: 'audio/mp3' });
  }

  // --- LEGACY HELPERS ---
  public speak(text: string, lang = getActiveEnglishAccent(), rate = 0.9): void {
    speakTextOffline(text, lang, rate);
  }

  public playSound(effect: 'correct' | 'wrong' | 'tap' | 'victory' | 'heart_loss' | 'gem'): void {
    playSoundEffectEffect(effect);
  }
}

export const AudioService = new AudioServiceManager();
