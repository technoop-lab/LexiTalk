import fs from 'fs';
import { day01Dialogues } from './repair_a1_batch1/day01_dialogues.js';
import { day02Dialogues } from './repair_a1_batch1/day02_dialogues.js';
import { day03Dialogues } from './repair_a1_batch1/day03_dialogues.js';
import { day04Dialogues } from './repair_a1_batch1/day04_dialogues.js';
import { day05Dialogues } from './repair_a1_batch1/day05_dialogues.js';
import { day06Dialogues } from './repair_a1_batch1/day06_dialogues.js';
import { day07Dialogues } from './repair_a1_batch1/day07_dialogues.js';
import { day08Dialogues } from './repair_a1_batch1/day08_dialogues.js';
import { day09Dialogues } from './repair_a1_batch1/day09_dialogues.js';
import { day10Dialogues } from './repair_a1_batch1/day10_dialogues.js';

const allRepaired = [
  day01Dialogues,
  day02Dialogues,
  day03Dialogues,
  day04Dialogues,
  day05Dialogues,
  day06Dialogues,
  day07Dialogues,
  day08Dialogues,
  day09Dialogues,
  day10Dialogues
];

const contentPath = './DAYS_01_10_CONTENT.json';
const packData = JSON.parse(fs.readFileSync(contentPath, 'utf8'));
const daysData = packData.days;

console.log(`Loaded ${daysData.length} days from ${contentPath}`);

let totalDialoguesReplaced = 0;
let totalTurnsReplaced = 0;

for (let i = 0; i < 10; i++) {
  const day = daysData[i];
  const repairedList = allRepaired[i];

  if (!day) {
    console.error(`Missing day ${i + 1} in DAYS_01_10_CONTENT.json`);
    process.exit(1);
  }

  if (!repairedList || repairedList.length !== 10) {
    console.error(`Day ${i + 1} repaired dialogues count is ${repairedList?.length}, expected 10`);
    process.exit(1);
  }

  day.use.dialogues = repairedList;
  totalDialoguesReplaced += repairedList.length;
  totalTurnsReplaced += repairedList.reduce((sum, d) => sum + d.turns.length, 0);

  console.log(`Day ${day.dayNumber.toString().padStart(2, '0')} (${day.titleEn}): ${repairedList.length} dialogues, ${repairedList.reduce((sum, d) => sum + d.turns.length, 0)} turns.`);
}

fs.writeFileSync(contentPath, JSON.stringify(packData, null, 2), 'utf8');
console.log(`\nSuccessfully updated ${contentPath}!`);
console.log(`Total Dialogues: ${totalDialoguesReplaced}`);
console.log(`Total Turns: ${totalTurnsReplaced}`);
