import fs from 'fs';
import path from 'path';

export interface PublishedItem {
  audioId: string;
  lessonId?: string;
  unitId?: string;
  language?: string;
  voiceId: string;
  durationSeconds: number;
  sizeBytes: number;
  remotePath: string;
  text: string;
}

export function updateAudioManifestFile(items: PublishedItem[]) {
  const filePath = path.join(process.cwd(), 'src', 'data', 'audioManifest.ts');
  let content = fs.readFileSync(filePath, 'utf8');

  for (const item of items) {
    const audioId = item.audioId;
    const escapedAudioId = audioId.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
    
    // Pattern to match existing item block in AUDIO_MANIFEST
    const pattern = new RegExp(`{\\s*audioId:\\s*['"]${escapedAudioId}['"][\\s\\S]*?},?`, 'm');
    const existingMatch = content.match(pattern);

    const safeText = JSON.stringify(item.text);
    const newEntryCode = `  {
    audioId: '${item.audioId}',
    lessonId: '${item.lessonId || 'a1_u01_l01'}',
    unitId: '${item.unitId || 'a1_u01'}',
    language: '${item.language || 'en'}',
    voiceId: '${item.voiceId}',
    version: 1,
    format: 'mp3',
    durationSeconds: ${item.durationSeconds.toFixed(1)},
    sizeBytes: ${item.sizeBytes},
    remotePath: '${item.remotePath}',
    status: 'published',
    text: ${safeText},
  },`;

    if (existingMatch) {
      content = content.replace(existingMatch[0], newEntryCode.trim() + ',');
    } else {
      // Find where AUDIO_MANIFEST array ends (`];`)
      const arrayEndIdx = content.indexOf('];');
      if (arrayEndIdx !== -1) {
        content = content.slice(0, arrayEndIdx) + newEntryCode + '\n' + content.slice(arrayEndIdx);
      }
    }
  }

  fs.writeFileSync(filePath, content, 'utf8');
}
