import fs from 'fs';

const contentPath = './DAYS_01_10_CONTENT.json';
const packData = JSON.parse(fs.readFileSync(contentPath, 'utf8'));
const days = packData.days;

console.log('============================================================');
console.log('BATCH 1 (DAYS 01-10) POST-REPAIR COMPREHENSIVE VALIDATION');
console.log('============================================================\n');

// 1. Check Day Count & Dialogues Count
let totalDialogues = 0;
let totalTurns = 0;
const ids = new Set();
const duplicateIds = [];
const shortTurnDialogues = [];
const unalignedEnHi = [];
const flaggedWords = [
  'credentials', 'bilateral', 'plenary', 'protocol', 'delegation', 'dossier',
  'communique', 'symposium', 'sommelier', 'decanter', 'curator', 'provenance',
  'connoisseur', 'procurement', 'synergy', 'methodology', 'infrastructure',
  'preliminary', 'sustainable', 'paradigms', 'paradigm', 'jurisdiction', 'statutory',
  'remuneration', 'discrepancy', 'escalation', 'disposition', 'countermeasure',
  'contingency', 'subsequently', 'nevertheless', 'aforementioned', 'heretofore'
];
const foundFlaggedWords = [];

days.forEach((day, dIdx) => {
  const dayNum = day.dayNumber;
  const dialogues = day.use.dialogues;
  
  console.log(`Checking Day ${dayNum.toString().padStart(2, '0')} - "${day.titleEn}":`);
  console.log(`  - Target Grammar: ${day.targetGrammar || day.grammarTarget || 'N/A'}`);
  console.log(`  - Dialogues count: ${dialogues.length}`);

  dialogues.forEach((diag, idx) => {
    totalDialogues++;
    totalTurns += diag.turns.length;

    // Duplicate ID check
    if (ids.has(diag.id)) {
      duplicateIds.push(diag.id);
    }
    ids.add(diag.id);

    // Turn depth check
    if (diag.turns.length < 20) {
      shortTurnDialogues.push({ id: diag.id, turns: diag.turns.length });
    }

    // Check turns for concordance & flagged words
    diag.turns.forEach((turn, tIdx) => {
      if (!turn.textEn || !turn.textHi || turn.textEn.trim() === '' || turn.textHi.trim() === '') {
        unalignedEnHi.push({ id: diag.id, turnIndex: tIdx });
      }

      // Check flagged advanced words
      const lowerEn = turn.textEn.toLowerCase();
      flaggedWords.forEach(w => {
        const regex = new RegExp(`\\b${w}\\b`, 'i');
        if (regex.test(lowerEn)) {
          foundFlaggedWords.push({ id: diag.id, word: w, turn: tIdx + 1, text: turn.textEn });
        }
      });
    });
  });
});

console.log('\n============================================================');
console.log('AUDIT SUMMARY & RESULTS');
console.log('============================================================');
console.log(`Total Days: ${days.length}`);
console.log(`Total Dialogues: ${totalDialogues} / 100`);
console.log(`Total Dialogue Turns: ${totalTurns}`);
console.log(`Average Turns per Dialogue: ${(totalTurns / totalDialogues).toFixed(1)}`);
console.log(`Unique Dialogue IDs: ${ids.size}`);
console.log(`Duplicate IDs: ${duplicateIds.length === 0 ? 'NONE (PASS)' : duplicateIds.join(', ')}`);
console.log(`Dialogues with < 20 turns: ${shortTurnDialogues.length === 0 ? 'NONE (PASS)' : JSON.stringify(shortTurnDialogues)}`);
console.log(`Missing/Unaligned En/Hi pairs: ${unalignedEnHi.length === 0 ? 'NONE (PASS)' : JSON.stringify(unalignedEnHi)}`);
console.log(`Banned/Specialist High-Register Lexemes Found: ${foundFlaggedWords.length === 0 ? '0 FOUND (PASS)' : JSON.stringify(foundFlaggedWords, null, 2)}`);

if (
  totalDialogues === 100 &&
  duplicateIds.length === 0 &&
  shortTurnDialogues.length === 0 &&
  unalignedEnHi.length === 0 &&
  foundFlaggedWords.length === 0
) {
  console.log('\n>>> BATCH 1 REPAIR VALIDATION STATUS: 100% PASSED <<<');
} else {
  console.log('\n>>> BATCH 1 REPAIR VALIDATION STATUS: FAILED <<<');
  process.exit(1);
}
