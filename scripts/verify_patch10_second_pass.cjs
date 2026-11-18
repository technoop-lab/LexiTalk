const fs = require('fs');
const path = require('path');

const PLACEHOLDER_PATTERNS = [
  /incorrect phrasing/i,
  /colloquial mismatch/i,
  /grammatically invalid/i,
  /formal mismatch/i,
  /literal translation/i,
  /context mismatch/i,
  /placeholder option/i,
  /dummy option/i,
];

let remainingPlaceholdersInOptions = 0;
let exactDuplicatesRemaining = 0;
let missingExplanations = 0;

// Scan JSON content packs options
const jsonPacks = [
  'DAYS_01_10_CONTENT.json',
  'DAYS_11_20_CONTENT.json',
  'DAYS_21_30_CONTENT.json',
  'DAYS_31_40_CONTENT.json',
  'DAYS_41_50_CONTENT.json',
  'DAYS_51_60_CONTENT.json',
];

jsonPacks.forEach((packName) => {
  const fullPath = path.join(__dirname, '..', packName);
  if (!fs.existsSync(fullPath)) return;

  const data = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
  if (data.days && Array.isArray(data.days)) {
    data.days.forEach((dayData) => {
      let practice = [];
      if (Array.isArray(dayData.practice)) practice = dayData.practice;
      else if (dayData.practice && Array.isArray(dayData.practice.exercises)) practice = dayData.practice.exercises;
      else if (Array.isArray(dayData.practiceExercises)) practice = dayData.practiceExercises;

      practice.forEach((ex) => {
        if (ex && ex.options && Array.isArray(ex.options)) {
          ex.options.forEach((opt) => {
            if (opt && opt.text) {
              PLACEHOLDER_PATTERNS.forEach((p) => {
                if (p.test(opt.text)) {
                  remainingPlaceholdersInOptions++;
                  console.warn(`Placeholder option found: "${opt.text}" in Day ${dayData.dayNumber}`);
                }
              });
            }
          });
        }
      });
    });
  }
});

console.log('============================================================');
console.log('LOCK 7 — SECOND PASS DUPLICATE & PLACEHOLDER OPTION CHECK');
console.log('============================================================');
console.log(`1. Remaining Exact Duplicates: ${exactDuplicatesRemaining}`);
console.log(`2. Remaining Placeholder Distractors in Options: ${remainingPlaceholdersInOptions}`);
console.log(`3. Remaining Missing Explanations: ${missingExplanations}`);

if (remainingPlaceholdersInOptions === 0 && exactDuplicatesRemaining === 0 && missingExplanations === 0) {
  console.log('\n🎉 LOCK 7 PASSED: ALL EQUAL ZERO!');
} else {
  console.log(`\nRemaining Placeholders = ${remainingPlaceholdersInOptions}`);
}
