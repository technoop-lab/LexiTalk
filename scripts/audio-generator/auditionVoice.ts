import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import { VOICE_MAP, getGeminiVoiceName, GEMINI_TTS_MODEL } from './voiceDirector';
import { GeminiTTSClient } from './ttsClient';
import { processAudioOutput } from './converter';
import { validateAudioFile } from './validator';

dotenv.config();

export async function runVoiceAudition() {
  const args = process.argv.slice(2);
  let voiceId = 'EN_DIALOGUE_F_01';
  let geminiVoiceOverride: string | undefined;
  let customText: string | undefined;

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === '--voice' && args[i + 1]) {
      voiceId = args[++i];
    } else if (arg === '--gemini-voice' && args[i + 1]) {
      geminiVoiceOverride = args[++i];
    } else if (arg === '--text' && args[i + 1]) {
      customText = args[++i];
    }
  }

  const profile = VOICE_MAP[voiceId];
  if (!profile) {
    console.error(`❌ [Audition Error]: Unknown voice ID "${voiceId}".`);
    console.log(`Available Voice IDs: ${Object.keys(VOICE_MAP).join(', ')}`);
    process.exit(1);
  }

  const geminiVoice = geminiVoiceOverride || getGeminiVoiceName(voiceId);
  const sampleText = customText || `Hello! My name is ${profile.displayName.split(' ')[0]}. I'm pleased to meet you in Curiosity English Academy.`;

  console.log(`\n==========================================================`);
  console.log(` CURIOSITY VOICE CAST AUDITION`);
  console.log(`==========================================================`);
  console.log(`Voice ID        : ${voiceId}`);
  console.log(`Role            : ${profile.role}`);
  console.log(`Status          : ${profile.status}`);
  console.log(`Gemini Voice    : ${geminiVoice}`);
  console.log(`Audition Text   : "${sampleText}"`);
  console.log(`==========================================================\n`);

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.warn(`⚠️ WARNING: GEMINI_API_KEY environment variable is not set.`);
    console.warn(`Please set GEMINI_API_KEY in your environment to perform live TTS audition generation.`);
    return;
  }

  const ttsClient = new GeminiTTSClient({
    apiKey,
    model: GEMINI_TTS_MODEL,
    maxRetries: 3,
  });

  const outputDir = path.join(process.cwd(), 'audio-output', 'auditions');
  fs.mkdirSync(outputDir, { recursive: true });

  const masterWavPath = path.join(outputDir, `${voiceId.toLowerCase()}_${geminiVoice.toLowerCase()}_audition.wav`);
  const optimizedMp3Path = path.join(outputDir, `${voiceId.toLowerCase()}_${geminiVoice.toLowerCase()}_audition.mp3`);

  try {
    console.log(`[Audition] Requesting TTS generation from Gemini (${GEMINI_TTS_MODEL})...`);
    const { audioBuffer, attemptCount } = await ttsClient.generateAudioBuffer(sampleText, voiceId, false);

    await processAudioOutput(audioBuffer, masterWavPath, optimizedMp3Path);
    const check = await validateAudioFile(optimizedMp3Path);

    if (check.isValid) {
      console.log(`\n✅ AUDITION GENERATION SUCCESSFUL!`);
      console.log(`Master WAV   : ${masterWavPath}`);
      console.log(`Optimized MP3: ${optimizedMp3Path}`);
      console.log(`Duration     : ${check.durationSeconds.toFixed(2)}s`);
      console.log(`Size         : ${(check.sizeBytes / 1024).toFixed(1)} KB`);
      console.log(`Attempts     : ${attemptCount}`);
    } else {
      console.error(`❌ Audition validation failed: ${check.reason}`);
    }
  } catch (err: any) {
    console.error(`❌ Audition failed:`, err?.message || err);
  }
}

if (process.argv[1] && process.argv[1].endsWith('auditionVoice.ts')) {
  runVoiceAudition().catch((err) => {
    console.error('Fatal audition error:', err);
    process.exit(1);
  });
}
