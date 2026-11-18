import { GoogleGenAI, Modality } from '@google/genai';
import { buildTTSPrompt, getGeminiVoiceName, GEMINI_TTS_MODEL } from './voiceDirector';

export interface TTSClientOptions {
  apiKey: string;
  model?: string;
  maxRetries?: number;
}

export class GeminiTTSClient {
  private ai: GoogleGenAI;
  private model: string;
  private maxRetries: number;

  constructor(options: TTSClientOptions) {
    if (!options.apiKey) {
      throw new Error(
        '[GeminiTTSClient] Missing API Key. Set GEMINI_API_KEY in process.env or .env before running.'
      );
    }

    this.ai = new GoogleGenAI({
      apiKey: options.apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });

    this.model = (options.model && options.model.startsWith('gemini-')) ? options.model : GEMINI_TTS_MODEL;
    this.maxRetries = options.maxRetries || 6;
  }

  public async generateAudioBuffer(
    text: string,
    voiceId: string,
    isSlowVersion = false
  ): Promise<{ audioBuffer: Buffer; geminiVoiceName: string; attemptCount: number }> {
    const geminiVoiceName = getGeminiVoiceName(voiceId);
    const promptText = buildTTSPrompt(text, isSlowVersion);

    let lastError: any;
    for (let attempt = 1; attempt <= this.maxRetries; attempt++) {
      try {
        const response = await this.ai.models.generateContent({
          model: this.model,
          contents: [{ parts: [{ text: promptText }] }],
          config: {
            responseModalities: [Modality.AUDIO],
            speechConfig: {
              voiceConfig: {
                prebuiltVoiceConfig: { voiceName: geminiVoiceName },
              },
            },
          },
        });

        const part = response.candidates?.[0]?.content?.parts?.[0];
        const base64Data = part?.inlineData?.data;

        if (!base64Data) {
          throw new Error('Gemini TTS response did not contain inline audio data');
        }

        const audioBuffer = Buffer.from(base64Data, 'base64');
        if (audioBuffer.length === 0) {
          throw new Error('Generated audio buffer was empty (0 bytes)');
        }

        return { audioBuffer, geminiVoiceName, attemptCount: attempt };
      } catch (err: any) {
        lastError = err;
        const errStr = typeof err?.message === 'string' ? err.message : JSON.stringify(err);
        const maskedMsg = errStr.replace(
          /AIza[0-9A-Za-z-_]{35}/g,
          'AIza***[REDACTED]***'
        );
        console.warn(
          `[GeminiTTSClient] Attempt ${attempt}/${this.maxRetries} failed for voice ${geminiVoiceName}: ${maskedMsg}`
        );

        if (attempt < this.maxRetries) {
          const isRateLimit = errStr.includes('429') || errStr.includes('RESOURCE_EXHAUSTED') || errStr.includes('Quota exceeded');
          const isDailyLimit = errStr.includes('GenerateRequestsPerDayPerProjectPerModel-FreeTier');
          
          if ((isRateLimit || isDailyLimit) && this.model !== 'gemini-2.5-flash-preview-tts') {
            console.warn(`[GeminiTTSClient] ⚠️ Daily Free-Tier Quota Limit reached for ${this.model}. Falling back to gemini-2.5-flash-preview-tts.`);
            this.model = 'gemini-2.5-flash-preview-tts';
            await new Promise((res) => setTimeout(res, 2000));
            continue;
          }

          let delayMs = attempt * 2000;
          if (isRateLimit) {
            const match = errStr.match(/retry in ([0-9.]+)s/i) || errStr.match(/retryDelay"?:\s*"([0-9.]+)s?"/i);
            const retrySeconds = match ? Math.ceil(parseFloat(match[1])) + 3 : 25;
            delayMs = retrySeconds * 1000;
            console.log(`[GeminiTTSClient] Rate limit / quota hit (429). Waiting ${retrySeconds}s before retrying (attempt ${attempt}/${this.maxRetries})...`);
          }
          await new Promise((res) => setTimeout(res, delayMs));
        }
      }
    }

    const finalMessage = (lastError?.message || String(lastError)).replace(
      /AIza[0-9A-Za-z-_]{35}/g,
      'AIza***[REDACTED]***'
    );
    throw new Error(`Failed to generate TTS after ${this.maxRetries} attempts: ${finalMessage}`);
  }
}
