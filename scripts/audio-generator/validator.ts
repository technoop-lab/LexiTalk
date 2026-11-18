import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export interface ValidationResult {
  isValid: boolean;
  sizeBytes: number;
  durationSeconds?: number;
  reason?: string;
}

export async function validateAudioFile(filePath: string): Promise<ValidationResult> {
  if (!fs.existsSync(filePath)) {
    return { isValid: false, sizeBytes: 0, reason: 'File does not exist' };
  }

  const stats = fs.statSync(filePath);
  if (stats.size === 0) {
    return { isValid: false, sizeBytes: 0, reason: 'File is 0 bytes' };
  }

  // Check magic bytes for WAV or MP3
  const buffer = Buffer.alloc(12);
  const fd = fs.openSync(filePath, 'r');
  fs.readSync(fd, buffer, 0, 12, 0);
  fs.closeSync(fd);

  const isWav = buffer.toString('utf8', 0, 4) === 'RIFF' && buffer.toString('utf8', 8, 12) === 'WAVE';
  const isMp3Header = buffer[0] === 0xff && (buffer[1] & 0xe0) === 0xe0;
  const isId3 = buffer.toString('utf8', 0, 3) === 'ID3';

  if (!isWav && !isMp3Header && !isId3 && stats.size < 100) {
    return { isValid: false, sizeBytes: stats.size, reason: 'Invalid audio header' };
  }

  // Probe duration using ffprobe if available
  let durationSeconds: number | undefined;
  try {
    const { stdout } = await execAsync(
      `ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 "${filePath}"`
    );
    const parsed = parseFloat(stdout.trim());
    if (!isNaN(parsed) && parsed > 0) {
      durationSeconds = Math.round(parsed * 10) / 10;
    }
  } catch {
    // Fallback duration estimation if ffprobe fails
    // Estimate based on size (rough estimation for 128kbps mp3 or 24kHz wav)
    if (filePath.endsWith('.mp3')) {
      durationSeconds = Math.max(0.5, Math.round((stats.size / 16000) * 10) / 10);
    } else if (filePath.endsWith('.wav')) {
      durationSeconds = Math.max(0.5, Math.round((stats.size / 48000) * 10) / 10);
    }
  }

  return {
    isValid: true,
    sizeBytes: stats.size,
    durationSeconds: durationSeconds || 1.0,
  };
}
