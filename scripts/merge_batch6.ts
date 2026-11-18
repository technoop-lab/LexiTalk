import fs from 'fs';
import path from 'path';
import { day51Dialogues } from './dialogues_batch6/day51';
import { day52Dialogues } from './dialogues_batch6/day52';
import { day53Dialogues } from './dialogues_batch6/day53';
import { day54Dialogues } from './dialogues_batch6/day54';
import { day55Dialogues } from './dialogues_batch6/day55';
import { day56Dialogues } from './dialogues_batch6/day56';
import { day57Dialogues } from './dialogues_batch6/day57';
import { day58Dialogues } from './dialogues_batch6/day58';
import { day59Dialogues } from './dialogues_batch6/day59';
import { day60Dialogues } from './dialogues_batch6/day60';

const allDaysDialogues: { [key: number]: any[] } = {
  51: day51Dialogues,
  52: day52Dialogues,
  53: day53Dialogues,
  54: day54Dialogues,
  55: day55Dialogues,
  56: day56Dialogues,
  57: day57Dialogues,
  58: day58Dialogues,
  59: day59Dialogues,
  60: day60Dialogues,
};

console.log('=== BATCH 6 (DAYS 51-60) DIALOGUE MERGE & VALIDATION ===\n');

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

for (let d = 51; d <= 60; d++) {
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

console.log('\n--- OVERALL BATCH 6 METRICS ---');
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

// Read and update DAYS_51_60_CONTENT.json
const contentFilePath = path.join(process.cwd(), 'DAYS_51_60_CONTENT.json');
const contentData = JSON.parse(fs.readFileSync(contentFilePath, 'utf8'));

let daysUpdated = 0;
contentData.days.forEach((dayObj: any) => {
  const dayNum = dayObj.dayNumber;
  if (dayNum >= 51 && dayNum <= 60 && allDaysDialogues[dayNum]) {
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
