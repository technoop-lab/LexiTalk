// Script to merge the 100 long-form dialogues for Days 1 to 10 into DAYS_01_10_CONTENT.json
import fs from 'fs';
import path from 'path';

import { stage1Days1To5 } from './stage1_day1_data.js';
import { day2Dialogues } from './stage1_day2_data.js';
import { day3Dialogues } from './stage1_day3_data.js';
import { day4Dialogues } from './stage1_day4_data.js';
import { day5Dialogues } from './stage1_day5_data.js';
import { day6Dialogues } from './stage1_day6_data.js';
import { day7Dialogues } from './stage1_day7_data.js';
import { day8Dialogues } from './stage1_day8_data.js';
import { day9Dialogues } from './stage1_day9_data.js';
import { day10Dialogues } from './stage1_day10_data.js';

const allDaysData = [
  { dayNum: 1, dialogues: stage1Days1To5.day1 },
  { dayNum: 2, dialogues: day2Dialogues },
  { dayNum: 3, dialogues: day3Dialogues },
  { dayNum: 4, dialogues: day4Dialogues },
  { dayNum: 5, dialogues: day5Dialogues },
  { dayNum: 6, dialogues: day6Dialogues },
  { dayNum: 7, dialogues: day7Dialogues },
  { dayNum: 8, dialogues: day8Dialogues },
  { dayNum: 9, dialogues: day9Dialogues },
  { dayNum: 10, dialogues: day10Dialogues },
];

const contentFilePath = path.join(process.cwd(), 'DAYS_01_10_CONTENT.json');

const rawContent = fs.readFileSync(contentFilePath, 'utf8');
const fileObj = JSON.parse(rawContent);

const daysArray = Array.isArray(fileObj) ? fileObj : fileObj.days;

console.log(`Loaded ${daysArray.length} days from DAYS_01_10_CONTENT.json`);

allDaysData.forEach(({ dayNum, dialogues }) => {
  const dayIndex = daysArray.findIndex(d => (d.dayNumber === dayNum || d.day === dayNum));
  if (dayIndex === -1) {
    console.error(`Day ${dayNum} not found in content file!`);
    return;
  }

  const targetDay = daysArray[dayIndex];
  
  if (!targetDay.use) {
    targetDay.use = {};
  }
  
  targetDay.use.dialogues = dialogues;

  const totalTurns = dialogues.reduce((sum, d) => sum + (d.turns ? d.turns.length : 0), 0);
  console.log(`Day ${dayNum} ('${targetDay.titleEn || targetDay.title}'): injected ${dialogues.length} dialogues with a total of ${totalTurns} turns.`);
});

fs.writeFileSync(contentFilePath, JSON.stringify(fileObj, null, 2), 'utf8');
console.log('Successfully wrote updated DAYS_01_10_CONTENT.json with 100 comprehensive dialogues across Days 01–10!');
