import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import { day1ExpandedDialogues } from './expand_stage1_day1_data.js';
import { day2ExpandedDialogues } from './expand_stage1_day2_data.js';
import { day3ExpandedDialogues } from './expand_stage1_day3_data.js';
import { day4ExpandedDialogues } from './expand_stage1_day4_data.js';
import { day5ExpandedDialogues } from './expand_stage1_day5_data.js';
import { day6ExpandedDialogues } from './expand_stage1_day6_data.js';
import { day7ExpandedDialogues } from './expand_stage1_day7_data.js';
import { day8ExpandedDialogues } from './expand_stage1_day8_data.js';
import { day9ExpandedDialogues } from './expand_stage1_day9_data.js';
import { day10ExpandedDialogues } from './expand_stage1_day10_data.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const contentPath = path.resolve(__dirname, '../DAYS_01_10_CONTENT.json');
const raw = fs.readFileSync(contentPath, 'utf-8');
const data = JSON.parse(raw);

const allDayExpansions = [
  day1ExpandedDialogues,
  day2ExpandedDialogues,
  day3ExpandedDialogues,
  day4ExpandedDialogues,
  day5ExpandedDialogues,
  day6ExpandedDialogues,
  day7ExpandedDialogues,
  day8ExpandedDialogues,
  day9ExpandedDialogues,
  day10ExpandedDialogues
];

let totalTurnsBefore = 0;
let totalTurnsAfter = 0;

data.days.forEach((dayObj, dayIndex) => {
  const expandedList = allDayExpansions[dayIndex];
  if (!expandedList || expandedList.length !== 10) {
    throw new Error(`Day ${dayIndex + 1} expanded list length is ${expandedList ? expandedList.length : 0}, expected 10!`);
  }

  const existingDialogues = (dayObj.use && dayObj.use.dialogues) || [];
  const turnsBeforeDay = existingDialogues.reduce((sum, d) => sum + (d.turns ? d.turns.length : 0), 0);
  totalTurnsBefore += turnsBeforeDay;

  // Replace with expanded dialogues
  dayObj.use.dialogues = expandedList;

  const turnsAfterDay = expandedList.reduce((sum, d) => sum + (d.turns ? d.turns.length : 0), 0);
  totalTurnsAfter += turnsAfterDay;

  console.log(`Day ${dayObj.day || dayIndex + 1}: ${turnsBeforeDay} turns -> ${turnsAfterDay} turns (Avg: ${(turnsAfterDay / 10).toFixed(1)} turns/dialogue)`);
});

fs.writeFileSync(contentPath, JSON.stringify(data, null, 2), 'utf-8');
console.log(`\nSuccessfully merged!`);
console.log(`Total Turns in Batch 1: Before = ${totalTurnsBefore}, After = ${totalTurnsAfter}`);
console.log(`Average Turns per Dialogue: ${(totalTurnsAfter / 100).toFixed(1)}`);
