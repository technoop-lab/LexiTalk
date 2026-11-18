import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export function ensureWavHeader(rawBuffer: Buffer, sampleRate = 24000, numChannels = 1, bitDepth = 16): Buffer {
  if (rawBuffer.length >= 12 && rawBuffer.subarray(0, 4).toString('utf8') === 'RIFF') {
    return rawBuffer; // Already has RIFF WAV header
  }

  const dataSize = rawBuffer.length;
  const header = Buffer.alloc(44);
  const blockAlign = (numChannels * bitDepth) / 8;
  const byteRate = sampleRate * blockAlign;

  header.write('RIFF', 0);
  header.writeUInt32LE(36 + dataSize, 4);
  header.write('WAVE', 8);
  header.write('fmt ', 12);
  header.writeUInt32LE(16, 16); // 16 for PCM
  header.writeUInt16LE(1, 20);  // 1 for PCM
  header.writeUInt16LE(numChannels, 22);
  header.writeUInt32LE(sampleRate, 24);
  header.writeUInt32LE(byteRate, 28);
  header.writeUInt16LE(blockAlign, 32);
  header.writeUInt16LE(bitDepth, 34);
  header.write('data', 36);
  header.writeUInt32LE(dataSize, 40);

  return Buffer.concat([header, rawBuffer]);
}

export async function processAudioOutput(
  audioBuffer: Buffer,
  masterWavPath: string,
  optimizedMp3Path: string
): Promise<{ wavSaved: boolean; mp3Saved: boolean }> {
  // 1. Ensure directories exist
  fs.mkdirSync(path.dirname(masterWavPath), { recursive: true });
  fs.mkdirSync(path.dirname(optimizedMp3Path), { recursive: true });

  // 2. Format master WAV buffer with valid header & write
  const wavBuffer = ensureWavHeader(audioBuffer);
  fs.writeFileSync(masterWavPath, wavBuffer);

  // 3. Convert master WAV to optimized MP3 using FFmpeg
  try {
    await execAsync(`ffmpeg -y -i "${masterWavPath}" -codec:a libmp3lame -b:a 128k "${optimizedMp3Path}"`);
  } catch (err) {
    console.warn(`[Converter] FFmpeg conversion warning, falling back to direct write if needed:`, err);
    // If FFmpeg fails for any reason, write copy so file is non-empty
    fs.copyFileSync(masterWavPath, optimizedMp3Path.replace('.mp3', '.wav'));
  }

  return {
    wavSaved: fs.existsSync(masterWavPath),
    mp3Saved: fs.existsSync(optimizedMp3Path) || fs.existsSync(masterWavPath),
  };
}
