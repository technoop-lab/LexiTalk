import { day01 } from '../content_builder/day01.js';
import { day02 } from '../content_builder/day02.js';
import { day03 } from '../content_builder/day03.js';
import { day04 } from '../content_builder/day04.js';
import { day05 } from '../content_builder/day05.js';
import { day06 } from '../content_builder/day06.js';
import { day07 } from '../content_builder/day07.js';
import { day08 } from '../content_builder/day08.js';
import { day09 } from '../content_builder/day09.js';
import { day10 } from '../content_builder/day10.js';

const days = [day01, day02, day03, day04, day05, day06, day07, day08, day09, day10];

console.log("================================================================================");
console.log("                    STAGE 1 (DAYS 1–10) MASTER ENRICHMENT AUDIT                 ");
console.log("================================================================================");

let totalVocab = 0;
let totalExemplars = 0;
let totalExercises = 0;
let totalTranslations = 0;
const lemmaMap = new Map();
const duplicates = [];

days.forEach((day, index) => {
  const dNum = index + 1;
  const vocab = day.learn?.vocabulary || [];
  const exemplars = day.examples?.bilingualExemplars || [];
  const exercises = day.practice?.exercises || [];
  const translations = day.practice?.translationSet || [];

  totalVocab += vocab.length;
  totalExemplars += exemplars.length;
  totalExercises += exercises.length;
  totalTranslations += translations.length;

  vocab.forEach(v => {
    const lemma = (v.lemma || v.wordForm || "").toLowerCase().trim();
    if (!lemma) return;
    if (lemmaMap.has(lemma)) {
      duplicates.push({ lemma, firstSeenDay: lemmaMap.get(lemma), duplicateDay: dNum });
    } else {
      lemmaMap.set(lemma, dNum);
    }
  });

  const hasPhonetics = !!day.phonetics?.targetSound && !!day.phonetics?.articulatoryMechanics;
  const hasHindiTeach = !!day.teach?.hindiExplanation && !!day.teach?.formulaTable;
  const hasTrap = !!day.teach?.hindiSpeakerTrap;
  const hasDialogue = !!day.use?.dialogue?.turns && day.use.dialogue.turns.length >= 4;

  console.log(`DAY ${String(dNum).padStart(2, '0')}: [${day.titleEn}]`);
  console.log(`  - Vocab: ${vocab.length} | Exemplars: ${exemplars.length} | Exercises: ${exercises.length} | Translations: ${translations.length}`);
  console.log(`  - Quality Gates: Phonetics [${hasPhonetics ? 'PASS' : 'FAIL'}] | Teach [${hasHindiTeach ? 'PASS' : 'FAIL'}] | Trap [${hasTrap ? 'PASS' : 'FAIL'}] | Dialogue [${hasDialogue ? 'PASS' : 'FAIL'}]`);
  
  if (vocab.length < 60 || exemplars.length < 100 || exercises.length < 65 || translations.length < 25) {
    console.warn(`  >>> WARNING: Day ${dNum} falls below target metric threshold!`);
  }
});

console.log("================================================================================");
console.log(`STAGE 1 GLOBAL METRICS (DAYS 1–10):`);
console.log(`  - Total Vocabulary Entries:  ${totalVocab} (Unique Lemmas: ${lemmaMap.size})`);
console.log(`  - Total Bilingual Exemplars: ${totalExemplars}`);
console.log(`  - Total Practice Exercises:  ${totalExercises}`);
console.log(`  - Total Translation Items:   ${totalTranslations}`);
console.log(`  - Total Global Exercise Sum: ${totalExercises + totalTranslations}`);
console.log(`  - Vocabulary Duplicates:     ${duplicates.length}`);

if (duplicates.length > 0) {
  console.log("  >>> Duplicate Lemmas Detected:");
  duplicates.slice(0, 10).forEach(d => console.log(`      * '${d.lemma}' in Day ${d.firstSeenDay} and Day ${d.duplicateDay}`));
} else {
  console.log("  >>> ZERO DUPLICATES: All vocabulary items across Stage 1 are 100% unique.");
}
console.log("================================================================================");
