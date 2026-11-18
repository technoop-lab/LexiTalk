import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import { day11Dialogues } from './repair_a1_batch2/day11_dialogues.js';
import { day12Dialogues } from './repair_a1_batch2/day12_dialogues.js';
import { day13Dialogues } from './repair_a1_batch2/day13_dialogues.js';
import { day14Dialogues } from './repair_a1_batch2/day14_dialogues.js';
import { day15Dialogues } from './repair_a1_batch2/day15_dialogues.js';
import { day16Dialogues } from './repair_a1_batch2/day16_dialogues.js';
import { day17Dialogues } from './repair_a1_batch2/day17_dialogues.js';
import { day18Dialogues } from './repair_a1_batch2/day18_dialogues.js';
import { day19Dialogues } from './repair_a1_batch2/day19_dialogues.js';
import { day20Dialogues } from './repair_a1_batch2/day20_dialogues.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const jsonPath = path.resolve(__dirname, '../DAYS_11_20_CONTENT.json');
const rawData = fs.readFileSync(jsonPath, 'utf8');
const daysData = JSON.parse(rawData);

const dialoguesMap = {
  11: day11Dialogues,
  12: day12Dialogues,
  13: day13Dialogues,
  14: day14Dialogues,
  15: day15Dialogues,
  16: day16Dialogues,
  17: day17Dialogues,
  18: day18Dialogues,
  19: day19Dialogues,
  20: day20Dialogues,
};

let totalInjected = 0;

for (const dayObj of daysData.days) {
  const day = dayObj.dayNumber;
  if (day >= 11 && day <= 20) {
    const dialogues = dialoguesMap[day];
    if (!dialogues || dialogues.length !== 10) {
      console.error(`Day ${day} does not have exactly 10 dialogues (has ${dialogues ? dialogues.length : 0})!`);
      continue;
    }
    if (!dayObj.use) {
      dayObj.use = {};
    }
    dayObj.use.dialogues = dialogues;
    dayObj.use.dialogue = dialogues[0];
    if (dayObj.dialogues) {
      delete dayObj.dialogues;
    }
    totalInjected += dialogues.length;
    console.log(`Injected 10 dialogues into Day ${day}`);
  }
}

fs.writeFileSync(jsonPath, JSON.stringify(daysData, null, 2), 'utf8');
console.log(`Successfully updated ${jsonPath} with ${totalInjected} dialogues!`);
