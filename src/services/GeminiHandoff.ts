import { registerPlugin } from '@capacitor/core';
import { Share } from '@capacitor/share';

interface GeminiHandoffPlugin {
  open(options: { prompt: string }): Promise<{ launched: string }>;
}

const NativeGeminiHandoff = registerPlugin<GeminiHandoffPlugin>('GeminiHandoff');

const wasCancelled = (err: unknown): boolean =>
  /cancel/i.test(String((err as any)?.message || err || ''));

export type HandoffResult = 'native' | 'share' | 'web-share' | 'clipboard' | 'failed';

/**
 * Opens the phone's INSTALLED Gemini app with the prompt pre-typed —
 * no API key, no server, zero cost (GEM-H1 primary path).
 *
 * Fallbacks: native targeted intent → share sheet → Web Share → clipboard.
 * Never throws.
 */
export const handoffToGemini = async (prompt: string): Promise<HandoffResult> => {
  // 1) Native: straight into the Gemini composer (no chooser)
  try {
    const res = await NativeGeminiHandoff.open({ prompt });
    if (res && res.launched) return 'native';
  } catch {
    /* web build, plugin not registered, or no target — fall through */
  }

  // 2) Android / iOS share sheet
  try {
    await Share.share({ text: prompt, title: 'Ask Gemini' });
    return 'share';
  } catch (err) {
    if (wasCancelled(err)) return 'share'; // user closed the sheet — stop here
  }

  // 3) Web Share API (desktop browsers)
  try {
    if (typeof navigator !== 'undefined' && navigator.share) {
      await navigator.share({ text: prompt });
      return 'web-share';
    }
  } catch (err) {
    if (wasCancelled(err)) return 'web-share';
  }

  // 4) Clipboard — the learner pastes into Gemini themselves
  try {
    await navigator.clipboard.writeText(prompt);
    return 'clipboard';
  } catch {
    return 'failed';
  }
};
