/**
 * GeminiClient — one entry point for every in-app AI feature
 * (Hint Pills, Tone Switcher, Explain-in-Hindi).
 *
 * Resolution order:
 *   1. Direct calls from the device with an API key:
 *        - localStorage override  (lexitalk.gemini.key), else
 *        - VITE_GEMINI_API_KEY baked into the bundle at build time
 *   2. The app's Express server proxy (`POST /api/gemini/proxy`)
 *        - works in web dev (server key in .env); on the packaged phone it
 *          fails fast because there is no server to reach
 *   3. null — every feature falls back to local/offline content
 *
 * The phone path never depends on a backend being deployed.
 */

const LS_KEY = 'lexitalk.gemini.key';

/** Newest model first; older names kept as fallbacks. */
const MODELS = ['gemini-3.6-flash', 'gemini-2.5-flash', 'gemini-2.0-flash'];

const DEFAULT_TIMEOUT_MS = 14000;

export const getGeminiKey = (): string => {
  try {
    const stored = localStorage.getItem(LS_KEY);
    if (stored && stored.trim()) return stored.trim();
  } catch {
    /* localStorage unavailable */
  }
  try {
    const envKey = (import.meta as any)?.env?.VITE_GEMINI_API_KEY;
    if (typeof envKey === 'string' && envKey.trim()) return envKey.trim();
  } catch {
    /* env unavailable */
  }
  return '';
};

export const setGeminiKey = (key: string): void => {
  try {
    localStorage.setItem(LS_KEY, key.trim());
  } catch {
    /* ignore */
  }
};

/** True when device-direct AI is possible (key present). */
export const isAiConfigured = (): boolean => getGeminiKey().length > 0;

const fetchWithTimeout = async (url: string, init: RequestInit, timeoutMs: number): Promise<Response> => {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, { ...init, signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
};

const stripCodeFences = (text: string): string =>
  text
    .replace(/^```(?:json)?\s*/i, '')
    .replace(/```\s*$/i, '')
    .trim();

const directGenerate = async (
  key: string,
  model: string,
  prompt: string,
  json: boolean,
  timeoutMs: number,
): Promise<string | null> => {
  try {
    const res = await fetchWithTimeout(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(key)}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ role: 'user', parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0.6,
            ...(json ? { responseMimeType: 'application/json' } : {}),
          },
        }),
      },
      timeoutMs,
    );
    if (!res.ok) return null;
    const data = await res.json();
    const text: string =
      data?.candidates?.[0]?.content?.parts
        ?.map((p: any) => (typeof p?.text === 'string' ? p.text : ''))
        .join('') || '';
    return text.trim() ? text.trim() : null;
  } catch {
    return null;
  }
};

const proxyGenerate = async (prompt: string, json: boolean, timeoutMs: number): Promise<string | null> => {
  try {
    const res = await fetchWithTimeout(
      '/api/gemini/proxy',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt, json }),
      },
      Math.min(timeoutMs, 12000),
    );
    if (!res.ok) return null;
    const data = await res.json();
    return typeof data?.text === 'string' && data.text.trim() ? data.text.trim() : null;
  } catch {
    return null;
  }
};

/** Plain-text generation. Returns null when AI is unreachable. */
export const askGemini = async (
  prompt: string,
  options: { json?: boolean; timeoutMs?: number } = {},
): Promise<string | null> => {
  const json = options.json ?? false;
  const timeoutMs = options.timeoutMs ?? DEFAULT_TIMEOUT_MS;

  const key = getGeminiKey();
  if (key) {
    for (const model of MODELS) {
      const text = await directGenerate(key, model, prompt, json, timeoutMs);
      if (text !== null) return text;
    }
  }

  // Server proxy — instant success in web dev, fast failure on the device.
  return proxyGenerate(prompt, json, timeoutMs);
};

/** JSON generation with fence-stripping and object-extraction fallbacks. */
export const askGeminiJson = async <T>(
  prompt: string,
  options: { timeoutMs?: number } = {},
): Promise<T | null> => {
  const text = await askGemini(prompt, { ...options, json: true });
  if (!text) return null;

  const cleaned = stripCodeFences(text);
  try {
    return JSON.parse(cleaned) as T;
  } catch {
    /* fall through to object extraction */
  }
  const match = cleaned.match(/\{[\s\S]*\}/);
  if (match) {
    try {
      return JSON.parse(match[0]) as T;
    } catch {
      /* give up */
    }
  }
  return null;
};
