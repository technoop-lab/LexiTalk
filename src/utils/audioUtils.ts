// Standard web & native Android speech audio utilities - 100% Client-Side & Offline Compatible

// ---------------------------------------------------------------------------
// Active teaching accent
// The learner chooses Indian / American / British English during onboarding.
// Every English sentence is spoken in that accent. Hindi is always hi-IN.
// ---------------------------------------------------------------------------
export type EnglishAccent = 'en-IN' | 'en-US' | 'en-GB';

const ACCENT_ALIASES: Record<string, EnglishAccent> = {
  'en-in': 'en-IN',
  indian: 'en-IN',
  india: 'en-IN',
  'en-us': 'en-US',
  american: 'en-US',
  us: 'en-US',
  usa: 'en-US',
  'en-gb': 'en-GB',
  british: 'en-GB',
  uk: 'en-GB',
};

let activeEnglishAccent: EnglishAccent = 'en-IN';

/**
 * Set the accent used for all spoken English.
 * Safe to call with undefined (keeps the current accent).
 */
export const setActiveEnglishAccent = (accent?: string | null): void => {
  if (!accent) return;
  const resolved = ACCENT_ALIASES[String(accent).toLowerCase()];
  if (resolved) activeEnglishAccent = resolved;
};

export const getActiveEnglishAccent = (): EnglishAccent => activeEnglishAccent;

let sharedAudioContext: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  try {
    if (!sharedAudioContext) {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioContextClass) {
        sharedAudioContext = new AudioContextClass();
      }
    }
    if (sharedAudioContext && sharedAudioContext.state === 'suspended') {
      sharedAudioContext.resume().catch(() => {});
    }
    return sharedAudioContext;
  } catch {
    return null;
  }
}

const MALE_VOICE_HINTS = ['male', 'david', 'mark', 'daniel', 'james', 'george', 'ravi', 'rishi'];
const FEMALE_VOICE_HINTS = ['female', 'veena', 'heera', 'zira', 'samantha', 'karen', 'moira', 'tessa', 'fiona', 'susan', 'hazel', 'sangeeta'];

/**
 * Pick a female voice for the requested language when the browser has one.
 * Order: exact locale + female name, then any same-language female, then any
 * same-language voice that is not clearly male, then the first matching voice.
 */
export const pickFemaleVoice = (voices: SpeechSynthesisVoice[], lang: string): SpeechSynthesisVoice | undefined => {
  const wanted = lang.replace('_', '-').toLowerCase();
  const base = wanted.split('-')[0];
  const isMale = (v: SpeechSynthesisVoice) => MALE_VOICE_HINTS.some((h) => v.name.toLowerCase().includes(h));
  const isFemale = (v: SpeechSynthesisVoice) => FEMALE_VOICE_HINTS.some((h) => v.name.toLowerCase().includes(h));
  const sameLang = (v: SpeechSynthesisVoice) => v.lang.replace('_', '-').toLowerCase() === wanted;
  const sameBase = (v: SpeechSynthesisVoice) => v.lang.toLowerCase().startsWith(base);

  if (base === 'hi') {
    return voices.find((v) => sameBase(v) && isFemale(v)) || voices.find((v) => sameBase(v));
  }
  return (
    voices.find((v) => sameLang(v) && isFemale(v)) ||
    voices.find((v) => sameBase(v) && isFemale(v)) ||
    voices.find((v) => sameLang(v) && !isMale(v)) ||
    voices.find((v) => sameBase(v) && !isMale(v)) ||
    voices.find((v) => sameBase(v))
  );
};

/**
 * Check if the native Android TextToSpeech bridge is present in WebView
 */
export const isNativeAndroidTTSAvailable = (): boolean => {
  if (typeof window === 'undefined') return false;
  const bridge = (window as any).AndroidTTSBridge;
  return !!(bridge && typeof bridge.speak === 'function');
};

/**
 * Check if native Android TextToSpeech is currently speaking
 */
export const isNativeAndroidTTSSpeaking = (): boolean => {
  if (typeof window === 'undefined') return false;
  const bridge = (window as any).AndroidTTSBridge;
  if (bridge && typeof bridge.isSpeaking === 'function') {
    try {
      return bridge.isSpeaking();
    } catch {
      return false;
    }
  }
  return false;
};

/**
 * Speak text via native Android TextToSpeech engine with fallback
 */
export const speakNativeAndroidTTS = (text: string, lang: string = getActiveEnglishAccent(), rate = 0.9): Promise<boolean> => {
  return new Promise((resolve) => {
    if (!text || typeof window === 'undefined') {
      resolve(false);
      return;
    }

    const bridge = (window as any).AndroidTTSBridge;
    if (!bridge || typeof bridge.speak !== 'function') {
      resolve(false);
      return;
    }

    let isFinished = false;
    const finish = (success: boolean) => {
      if (!isFinished) {
        isFinished = true;
        resolve(success);
      }
    };

    // Listen for completion callback from AndroidTTSBridge
    const prevOnEnd = (window as any).onAndroidTTSEnd;
    const prevOnError = (window as any).onAndroidTTSError;

    (window as any).onAndroidTTSEnd = (utteranceId: string) => {
      if (typeof prevOnEnd === 'function') prevOnEnd(utteranceId);
      finish(true);
    };

    (window as any).onAndroidTTSError = (utteranceId: string, error: string) => {
      if (typeof prevOnError === 'function') prevOnError(utteranceId, error);
      finish(false);
    };

    // Safety timeout in case callback doesn't fire
    const timeoutMs = Math.max(3000, Math.ceil(text.length * 130));
    setTimeout(() => finish(true), timeoutMs);

    try {
      const success = bridge.speak(text, lang, rate);
      if (!success) {
        finish(false);
      }
    } catch (err) {
      console.warn('[AndroidTTSBridge] speak invocation error:', err);
      finish(false);
    }
  });
};

/**
 * Sanitize text before sending to Speech Synthesis / Native TTS.
 * Strips UI labels, IPA slash/bracket notations, markdown symbols, parentheticals, and metadata.
 */
/**
 * Titles are spoken the way the learner hears them: Mr. = Mister, Mrs. = Missus, Ms. = Mizz.
 * Exported so every direct speech call (not only sanitizeSpokenAudioText) can use it.
 */
export const expandTitlesForSpeech = (text: string): string => {
  return text
    .replace(/\bMrs\./gi, 'Missus')
    .replace(/\bMr\./gi, 'Mister')
    .replace(/\bMs\./gi, 'Mizz');
};

export const sanitizeSpokenAudioText = (rawText: string): string => {
  if (!rawText || typeof rawText !== 'string') return '';

  let text = rawText;

  // Speak titles in full before anything else touches the text
  text = expandTitlesForSpeech(text);

  // Remove markdown formatting
  text = text.replace(/[*_#`~]/g, '');

  // Remove IPA notations e.g. /v/, [vest], /θæŋk/
  text = text.replace(/\/[^/]+\//g, '');
  text = text.replace(/\[[^\]]+\]/g, '');

  // Remove common UI prefixes / metadata labels / contrast words
  text = text.replace(/^(Minimal Pair Contrast|Minimal Pair|Target Sound|L1 Trap|Common Error|Tip|Note|Dialogue Turn|Example|Sentence \d+):/i, '');
  text = text.replace(/\s+(?:vs\.?|versus|VS)\s+/gi, ' . ');

  // Remove parenthetical notes e.g. "(teeth on lip)", "(Hindi Meaning)", "(Noun)", "(Verb)"
  text = text.replace(/\([^)]*\)/g, '');

  // Normalize curly/smart single quotes to a straight apostrophe FIRST so
  // contractions ("you're", "he's", "don't") survive sanitization intact.
  text = text.replace(/[\u2018\u2019\u02BC\u00B4]/g, "'");

  // Remove double quotes only. NEVER strip apostrophes here: stripping turns
  // "he's" into "he s" and TTS engines then read letters ("you're" -> "you r e").
  text = text.replace(/["“”]/g, ' ');

  // Clean extra whitespace
  text = text.replace(/\s+/g, ' ').trim();

  return text;
};

export interface ScriptChunk {
  text: string;
  lang: 'hi-IN' | EnglishAccent;
}

/**
 * Splits mixed-script text into contiguous English and Hindi chunks
 * to ensure English words are spoken with Native English TTS (en-US)
 * and Hindi words are spoken with Native Hindi TTS (hi-IN).
 */
export const splitMixedScriptText = (text: string, defaultLang: string = getActiveEnglishAccent()): ScriptChunk[] => {
  if (!text) return [];

  const hasHindi = /[\u0900-\u097F]/.test(text);
  const hasEnglish = /[a-zA-Z]/.test(text);

  if (hasHindi && !hasEnglish) {
    return [{ text: text.trim(), lang: 'hi-IN' }];
  }
  if (hasEnglish && !hasHindi) {
    return [{ text: text.trim(), lang: (defaultLang as EnglishAccent) || getActiveEnglishAccent() }];
  }

  const tokens = text.match(/([\u0900-\u097F]+|[a-zA-Z0-9']+|[^\u0900-\u097Fa-zA-Z0-9']+)/g) || [text];
  const chunks: ScriptChunk[] = [];
  let currentText = '';
  let currentLang: 'hi-IN' | EnglishAccent | null = null;

  for (const token of tokens) {
    const isTokenHindi = /[\u0900-\u097F]/.test(token);
    const isTokenEnglish = /[a-zA-Z]/.test(token);

    let tokenLang: 'hi-IN' | EnglishAccent | null = null;
    if (isTokenHindi) tokenLang = 'hi-IN';
    else if (isTokenEnglish) tokenLang = (defaultLang as EnglishAccent) || getActiveEnglishAccent();

    if (tokenLang !== null) {
      if (currentLang === null) {
        currentLang = tokenLang;
        currentText += token;
      } else if (currentLang === tokenLang) {
        currentText += token;
      } else {
        if (currentText.trim()) {
          chunks.push({ text: currentText.trim(), lang: currentLang });
        }
        currentText = token;
        currentLang = tokenLang;
      }
    } else {
      currentText += token;
    }
  }

  if (currentText.trim()) {
    chunks.push({ text: currentText.trim(), lang: currentLang || getActiveEnglishAccent() });
  }

  return chunks.length > 0 ? chunks : [{ text: text.trim(), lang: getActiveEnglishAccent() }];
};

/**
 * Universal speech function: Prioritizes Native Android TextToSpeech on APK, then Web Speech API in browser
 */
export const speakTextOffline = async (text: string, lang: string = getActiveEnglishAccent(), rate = 0.9): Promise<void> => {
  const sanitized = sanitizeSpokenAudioText(text);
  if (!sanitized || typeof window === 'undefined') return;

  const chunks = splitMixedScriptText(sanitized, lang);

  for (const chunk of chunks) {
    if (!chunk.text) continue;

    // PRIORITY 1: Native Android TextToSpeech Bridge (Physical APK)
    if (isNativeAndroidTTSAvailable()) {
      const spoken = await speakNativeAndroidTTS(chunk.text, chunk.lang, rate);
      if (spoken) continue;
    }

    // PRIORITY 2: Browser Web Speech API (Web Preview / Desktop)
    await new Promise<void>((resolve) => {
      if (!('speechSynthesis' in window)) {
        resolve();
        return;
      }

      try {
        if (window.speechSynthesis.paused) {
          window.speechSynthesis.resume();
        }

        if (window.speechSynthesis.speaking || window.speechSynthesis.pending) {
          window.speechSynthesis.cancel();
        }

        const utterance = new SpeechSynthesisUtterance(chunk.text);
        utterance.lang = chunk.lang;
        utterance.rate = rate;
        utterance.pitch = 1.0;

        const voices = window.speechSynthesis.getVoices();
        if (voices && voices.length > 0) {
          const matchingVoice = pickFemaleVoice(voices, chunk.lang);
          if (matchingVoice) {
            utterance.voice = matchingVoice;
          }
        }

        let isCompleted = false;
        const finish = () => {
          if (!isCompleted) {
            isCompleted = true;
            resolve();
          }
        };

        utterance.onend = () => finish();
        utterance.onerror = () => finish();

        const timeoutMs = Math.max(2500, Math.ceil(sanitized.length * 120));
        setTimeout(finish, timeoutMs);

        setTimeout(() => {
          try {
            window.speechSynthesis.speak(utterance);
          } catch {
            finish();
          }
        }, 20);
      } catch {
        resolve();
      }
    });

    if (chunks.length > 1) {
      await new Promise((r) => setTimeout(r, 200));
    }
  }
};

/**
 * Speak minimal pair sequentially: speaks Word A, waits a brief natural pause, then speaks Word B.
 * NEVER speaks "vs", "versus", or labels.
 */
export const speakMinimalPair = async (
  rawWordA: string,
  rawWordB: string,
  lang: string = getActiveEnglishAccent(),
  rate = 0.88
): Promise<void> => {
  const wordA = sanitizeSpokenAudioText(rawWordA);
  const wordB = sanitizeSpokenAudioText(rawWordB);

  if (!wordA && !wordB) return;
  if (wordA && !wordB) {
    await speakTextOffline(wordA, lang, rate);
    return;
  }
  if (!wordA && wordB) {
    await speakTextOffline(wordB, lang, rate);
    return;
  }

  // Speak Word A
  await speakTextOffline(wordA, lang, rate);

  // Natural pause between contrasting items
  await new Promise((r) => setTimeout(r, 450));

  // Speak Word B
  await speakTextOffline(wordB, lang, rate);
};

/**
 * Smart speaker helper: If input contains " vs " or " versus ", splits and speaks sequentially without reading "vs".
 * Otherwise speaks the sanitized text.
 */
export const speakCleanAudio = async (
  text: string,
  lang: string = getActiveEnglishAccent(),
  rate = 0.9
): Promise<void> => {
  if (!text || typeof text !== 'string') return;

  // Check if string contains minimal pair contrast e.g. "Vest vs West" or "Vest vs. West" or "Vest versus West"
  const vsPattern = /\s+(?:vs\.?|versus|VS)\s+/i;
  if (vsPattern.test(text)) {
    const parts = text.split(vsPattern);
    if (parts.length >= 2) {
      await speakMinimalPair(parts[0], parts[1], lang, rate);
      return;
    }
  }

  await speakTextOffline(text, lang, rate);
};

/**
 * Stop all active speech across Native Android TTS and Web Speech
 */
export const stopAllSpeech = () => {
  if (typeof window === 'undefined') return;
  try {
    if (isNativeAndroidTTSAvailable()) {
      (window as any).AndroidTTSBridge.stop();
    }
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  } catch (err) {
    console.warn('Error stopping speech:', err);
  }
};

export const playSoundEffectEffect = (type: 'correct' | 'wrong' | 'tap' | 'victory' | 'heart_loss' | 'gem') => {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;

    if (type === 'tap') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.type = 'sine';
      osc.frequency.setValueAtTime(400, now);
      osc.frequency.exponentialRampToValueAtTime(800, now + 0.05);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.linearRampToValueAtTime(0.001, now + 0.05);
      osc.start(now);
      osc.stop(now + 0.05);
    } else if (type === 'correct') {
      // Pleasant dual tone chime
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.setValueAtTime(659.25, now + 0.08); // E5
      osc.frequency.setValueAtTime(783.99, now + 0.16); // G5
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.linearRampToValueAtTime(0.001, now + 0.35);
      osc.start(now);
      osc.stop(now + 0.35);
    } else if (type === 'wrong') {
      // Low buzz tone
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(180, now);
      osc.frequency.setValueAtTime(140, now + 0.1);
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.linearRampToValueAtTime(0.001, now + 0.25);
      osc.start(now);
      osc.stop(now + 0.25);
    } else if (type === 'victory') {
      // Fanfare
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.setValueAtTime(554.37, now + 0.1);
      osc.frequency.setValueAtTime(659.25, now + 0.2);
      osc.frequency.setValueAtTime(880, now + 0.3);
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.linearRampToValueAtTime(0.001, now + 0.6);
      osc.start(now);
      osc.stop(now + 0.6);
    } else if (type === 'heart_loss') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.type = 'sine';
      osc.frequency.setValueAtTime(300, now);
      osc.frequency.linearRampToValueAtTime(150, now + 0.25);
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.linearRampToValueAtTime(0.001, now + 0.25);
      osc.start(now);
      osc.stop(now + 0.25);
    } else if (type === 'gem') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.type = 'sine';
      osc.frequency.setValueAtTime(987.77, now); // B5
      osc.frequency.setValueAtTime(1318.51, now + 0.08); // E6
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.linearRampToValueAtTime(0.001, now + 0.25);
      osc.start(now);
      osc.stop(now + 0.25);
    }
  } catch {
    // AudioContext blocked or unsupported
  }
};
