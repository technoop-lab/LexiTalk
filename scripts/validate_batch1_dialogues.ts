import { getAllRegistryDays, getRegistryDayByNumber } from '../src/data/curriculumRegistry';

console.log('============================================================');
console.log('BATCH 1 FORENSIC VALIDATION: DAYS 01 TO 10 EXPANSION REPORT');
console.log('============================================================\n');

const allLessons = getAllRegistryDays();
console.log(`Total 60-day curriculum loaded: ${allLessons.length} lessons.\n`);

let totalBatch1Dialogues = 0;
let totalBatch1Turns = 0;
const reportRows: any[] = [];

for (let day = 1; day <= 10; day++) {
  const lesson = getRegistryDayByNumber(day);
  if (!lesson) {
    console.error(`FATAL: Day ${day} not found in registry!`);
    process.exit(1);
  }

  const dialogues = lesson.use?.dialogues || [];
  const dialogueCount = dialogues.length;
  const turnsCount = dialogues.reduce((sum, d) => sum + (d.turns ? d.turns.length : 0), 0);

  totalBatch1Dialogues += dialogueCount;
  totalBatch1Turns += turnsCount;

  // Validate each dialogue
  dialogues.forEach((d, idx) => {
    if (!d.id || !d.title || !d.titleHi || !d.turns || d.turns.length === 0) {
      console.error(`ERROR in Day ${day}, Dialogue ${idx + 1}: Incomplete structure!`, d);
    }
    d.turns.forEach((t, tIdx) => {
      if (!t.speaker || !t.textEn || !t.textHi) {
        console.error(`ERROR in Day ${day}, Dialogue ${idx + 1}, Turn ${tIdx + 1}: Missing speaker or text!`, t);
      }
    });
  });

  reportRows.push({
    Day: `Day ${day.toString().padStart(2, '0')}`,
    Title: lesson.titleEn.slice(0, 45),
    Dialogues: dialogueCount,
    'Total Turns': turnsCount,
    'Avg Turns/Dialogue': (turnsCount / dialogueCount).toFixed(1),
    Status: dialogueCount === 10 ? '✅ PASSED (10/10)' : '❌ FAILED'
  });
}

console.table(reportRows);
console.log(`\n------------------------------------------------------------`);
console.log(`TOTAL BATCH 1 DIALOGUES : ${totalBatch1Dialogues} (Target: 100)`);
console.log(`TOTAL BATCH 1 TURNS     : ${totalBatch1Turns}`);
console.log(`AVERAGE TURNS PER DAY   : ${(totalBatch1Turns / 10).toFixed(1)} turns/day`);
console.log(`------------------------------------------------------------\n`);

if (totalBatch1Dialogues === 100) {
  console.log('✅ ALL BATCH 1 CRITERIA SATISFIED WITH 100% PASS RATE.');
} else {
  console.error('❌ BATCH 1 CRITERIA FAILED: Expected 100 dialogues.');
  process.exit(1);
}
