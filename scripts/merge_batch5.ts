import fs from 'fs';
import path from 'path';
import { day41Dialogues } from './dialogues_batch5/day41';
import { day42Dialogues } from './dialogues_batch5/day42';
import { day43Dialogues } from './dialogues_batch5/day43';
import { day44Dialogues } from './dialogues_batch5/day44';
import { day45Dialogues } from './dialogues_batch5/day45';
import { day46Dialogues } from './dialogues_batch5/day46';
import { day47Dialogues } from './dialogues_batch5/day47';
import { day48Dialogues } from './dialogues_batch5/day48';
import { day49Dialogues } from './dialogues_batch5/day49';
import { day50Dialogues } from './dialogues_batch5/day50';

const allDaysDialogues: { [key: number]: any[] } = {
  41: day41Dialogues,
  42: day42Dialogues,
  43: day43Dialogues,
  44: day44Dialogues,
  45: day45Dialogues,
  46: day46Dialogues,
  47: day47Dialogues,
  48: day48Dialogues,
  49: day49Dialogues,
  50: day50Dialogues,
};

console.log('=== BATCH 5 (DAYS 41-50) DIALOGUE MERGE & VALIDATION ===\n');

let totalDialogues = 0;
let totalTurns = 0;
let minTurns = Infinity;
let maxTurns = 0;
let dialoguesGte20 = 0;
let dialoguesGte25 = 0;
let dialoguesGte30 = 0;
let dialoguesLt20 = 0;
let hindiMissing = 0;
let englishMissing = 0;
const allIds = new Set<string>();
let duplicateIds = 0;

const dayStats: any[] = [];

for (let d = 41; d <= 50; d++) {
  const dialogues = allDaysDialogues[d] || [];
  let dayTurns = 0;
  let dayMin = Infinity;
  let dayMax = 0;

  dialogues.forEach((diag, idx) => {
    totalDialogues++;
    const turnCount = diag.turns.length;
    dayTurns += turnCount;
    totalTurns += turnCount;
    if (turnCount < minTurns) minTurns = turnCount;
    if (turnCount > maxTurns) maxTurns = turnCount;
    if (turnCount < dayMin) dayMin = turnCount;
    if (turnCount > dayMax) dayMax = turnCount;

    if (turnCount >= 20) dialoguesGte20++;
    if (turnCount >= 25) dialoguesGte25++;
    if (turnCount >= 30) dialoguesGte30++;
    if (turnCount < 20) {
      dialoguesLt20++;
      console.error(`ERROR: Day ${d} Dialogue ${idx + 1} (${diag.id}) has only ${turnCount} turns!`);
    }

    if (allIds.has(diag.id)) {
      duplicateIds++;
      console.error(`ERROR: Duplicate dialogue ID found: ${diag.id}`);
    }
    allIds.add(diag.id);

    diag.turns.forEach((turn: any, tIdx: number) => {
      if (!turn.textEn || turn.textEn.trim() === '') {
        englishMissing++;
        console.error(`ERROR: Missing English text in Day ${d} ${diag.id} Turn ${tIdx + 1}`);
      }
      if (!turn.textHi || turn.textHi.trim() === '') {
        hindiMissing++;
        console.error(`ERROR: Missing Hindi text in Day ${d} ${diag.id} Turn ${tIdx + 1}`);
      }
    });
  });

  dayStats.push({
    day: d,
    dialogueCount: dialogues.length,
    totalTurns: dayTurns,
    avgTurns: (dayTurns / dialogues.length).toFixed(1),
    minTurns: dayMin,
    maxTurns: dayMax,
  });
}

console.log('--- PER-DAY STATS ---');
console.table(dayStats);

console.log('\n--- OVERALL BATCH 5 METRICS ---');
console.log(`Total Dialogues: ${totalDialogues}`);
console.log(`Total Turns: ${totalTurns}`);
console.log(`Average Turns per Dialogue: ${(totalTurns / totalDialogues).toFixed(2)}`);
console.log(`Min Turns: ${minTurns}`);
console.log(`Max Turns: ${maxTurns}`);
console.log(`Dialogues >= 20 Turns: ${dialoguesGte20} (Target: 100/100)`);
console.log(`Dialogues >= 25 Turns: ${dialoguesGte25}`);
console.log(`Dialogues >= 30 Turns: ${dialoguesGte30}`);
console.log(`Dialogues < 20 Turns: ${dialoguesLt20} (Target: 0)`);
console.log(`Missing English: ${englishMissing}`);
console.log(`Missing Hindi: ${hindiMissing}`);
console.log(`Duplicate IDs: ${duplicateIds}`);

if (totalDialogues !== 100 || dialoguesLt20 > 0 || hindiMissing > 0 || englishMissing > 0 || duplicateIds > 0) {
  console.error('\nFAILED VALIDATION CHECKS. Aborting merge.');
  process.exit(1);
}

console.log('\nALL 100 DIALOGUES PASSED RIGOROUS VALIDATION!');

// Read and update DAYS_41_50_CONTENT.json
const contentFilePath = path.join(process.cwd(), 'DAYS_41_50_CONTENT.json');
const contentData = JSON.parse(fs.readFileSync(contentFilePath, 'utf8'));

let daysUpdated = 0;
contentData.days.forEach((dayObj: any) => {
  const dayNum = dayObj.dayNumber;
  if (dayNum >= 41 && dayNum <= 50 && allDaysDialogues[dayNum]) {
    if (!dayObj.use) {
      dayObj.use = {};
    }
    dayObj.use.dialogues = allDaysDialogues[dayNum];
    dayObj.use.dialogue = allDaysDialogues[dayNum][0];

    // Clean up any legacy root properties
    if (dayObj.dialogues) {
      delete dayObj.dialogues;
    }
    if (dayObj.dialogue) {
      delete dayObj.dialogue;
    }
    daysUpdated++;
  }
});

fs.writeFileSync(contentFilePath, JSON.stringify(contentData, null, 2), 'utf8');
console.log(`\nSuccessfully updated ${daysUpdated} days in ${contentFilePath}!`);
