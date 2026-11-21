import { Capacitor, registerPlugin } from '@capacitor/core';
import { Share } from '@capacitor/share';

interface GeminiHandoffPlugin {
  open(options: { prompt: string }): Promise<{ launched: string }>;
}

/** Native Android plugin (GeminiHandoffPlugin.java). Absent on the web. */
const NativeGeminiHandoff = registerPlugin<GeminiHandoffPlugin>('GeminiHandoff');

/** Gemini on the web. Used by the "Open Gemini" link on the website. */
export const GEMINI_WEB_URL = 'https://gemini.google.com/app';

const wasCancelled = (err: unknown): boolean =>
  /cancel/i.test(String((err as any)?.message || err || ''));

/**
 * 'native'    — Android opened the installed Gemini app with the prompt
 * 'share'     — Android share sheet opened (or the learner closed it)
 * 'clipboard' — prompt copied; the web button then offers the Gemini link
 * 'failed'    — nothing worked; the button shows the prompt to copy by hand
 */
export type HandoffResult = 'native' | 'share' | 'clipboard' | 'failed';

/** True inside the installed Android app, false on the website. */
export const isNativeApp = (): boolean => Capacitor.isNativePlatform();

/** Never throws. No API key, no server call. */
export const handoffToGemini = async (prompt: string): Promise<HandoffResult> => {
  if (isNativeApp()) {
    // 1) Native plugin: installed Gemini app, else its own share-sheet fallback
    try {
      const res = await NativeGeminiHandoff.open({ prompt });
      if (res && res.launched) return res.launched === 'chooser' ? 'share' : 'native';
    } catch {
      /* plugin missing or failed — fall through */
    }

    // 2) Capacitor Share plugin
    try {
      await Share.share({ text: prompt, title: 'Ask Gemini' });
      return 'share';
    } catch (err) {
      if (wasCancelled(err)) return 'share';
    }
  }

  // 3) Website (or native fallback): copy the prompt; the button shows the Gemini link
  try {
    await navigator.clipboard.writeText(prompt);
    return 'clipboard';
  } catch {
    return 'failed';
  }
};
