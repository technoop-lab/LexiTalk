import * as fs from 'fs';
import * as path from 'path';

import { day21Dialogues } from './dialogues_batch3/day21';
import { day22Dialogues } from './dialogues_batch3/day22';
import { day23Dialogues } from './dialogues_batch3/day23';
import { day24Dialogues } from './dialogues_batch3/day24';
import { day25Dialogues } from './dialogues_batch3/day25';
import { day26Dialogues } from './dialogues_batch3/day26';
import { day27Dialogues } from './dialogues_batch3/day27';
import { day28Dialogues } from './dialogues_batch3/day28';
import { day29Dialogues } from './dialogues_batch3/day29';
import { day30Dialogues } from './dialogues_batch3/day30';

const batch3Map: Record<number, any[]> = {
  21: day21Dialogues,
  22: day22Dialogues,
  23: day23Dialogues,
  24: day24Dialogues,
  25: day25Dialogues,
  26: day26Dialogues,
  27: day27Dialogues,
  28: day28Dialogues,
  29: day29Dialogues,
  30: day30Dialogues
};

const contentFilePath = path.join(process.cwd(), 'DAYS_21_30_CONTENT.json');
console.log(`Reading ${contentFilePath}...`);
const rawData = JSON.parse(fs.readFileSync(contentFilePath, 'utf-8'));
const daysArray = Array.isArray(rawData) ? rawData : (rawData.days || []);

let updatedCount = 0;

for (const day of daysArray) {
  const dayNum = typeof day.dayNumber === 'number' ? day.dayNumber : parseInt(day.dayNumber, 10);
  if (batch3Map[dayNum]) {
    if (!day.use) {
      day.use = {};
    }
    
    // Set canonical use.dialogues and use.dialogue pointing to Scenario 1
    day.use.dialogues = batch3Map[dayNum];
    day.use.dialogue = batch3Map[dayNum][0];
    
    // Ensure no root-level dialogues field
    if (day.dialogues) {
      delete day.dialogues;
    }
    
    updatedCount++;
    console.log(`✓ Updated Day ${dayNum} with ${batch3Map[dayNum].length} dialogue scenarios`);
  }
}

console.log(`Writing back to ${contentFilePath}...`);
fs.writeFileSync(contentFilePath, JSON.stringify(rawData, null, 2), 'utf-8');
console.log(`Successfully merged Batch 3 (Days 21-30)! Updated ${updatedCount} days.`);

