import fs from 'fs';
import path from 'path';

import { day51 } from '../content_builder/day51.js';
import { day52 } from '../content_builder/day52.js';
import { day53 } from '../content_builder/day53.js';
import { day54 } from '../content_builder/day54.js';
import { day55 } from '../content_builder/day55.js';
import { day56 } from '../content_builder/day56.js';
import { day57 } from '../content_builder/day57.js';
import { day58 } from '../content_builder/day58.js';
import { day59 } from '../content_builder/day59.js';
import { day60 } from '../content_builder/day60.js';

const days = [day51, day52, day53, day54, day55, day56, day57, day58, day59, day60];

console.log("=================================================");
console.log("STAGE 6 (DAYS 51-60) COMPILATION & VERIFICATION");
console.log("=================================================");

let totalVocab = 0;
let totalPhrases = 0;
let totalExamples = 0;
let totalExercises = 0;
let totalBenchmarks = 0;
let totalDialogues = 0;

days.forEach((day, index) => {
  const expectedDayNum = 51 + index;
  if (day.dayNumber !== expectedDayNum) {
    throw new Error(`Day number mismatch: expected ${expectedDayNum}, got ${day.dayNumber}`);
  }
  
  // Verify core metadata
  if (!day.id || !day.titleEn || !day.titleHi || !day.cefr || !day.estMinutes || !day.objectivesEn || !day.objectivesHi) {
    throw new Error(`Day ${day.dayNumber} missing core metadata`);
  }
  
  // Verify teach
  if (!day.teach.hindiExplanation || !day.teach.englishExplanation || !day.teach.grammarRules || !day.teach.formulaTable || !day.teach.hindiSpeakerTrap) {
    throw new Error(`Day ${day.dayNumber} missing teach components`);
  }
  
  // Verify learn
  const vocabCount = day.learn.vocabulary.length;
  const phraseCount = day.learn.spokenPhrases.length;
  totalVocab += vocabCount;
  totalPhrases += phraseCount;
  
  // Verify examples
  const exampleCount = day.examples.bilingualExemplars.length;
  totalExamples += exampleCount;
  
  // Verify pronunciation
  if (!day.pronunciation.focusSound || !day.pronunciation.minimalPairs || !day.pronunciation.drills) {
    throw new Error(`Day ${day.dayNumber} missing pronunciation components`);
  }
  
  // Verify practice
  const exCount = day.practice.exercises.length;
  totalExercises += exCount;
  
  // Verify exercise integrity
  day.practice.exercises.forEach((ex, exIdx) => {
    if (!ex.id || !ex.type || !ex.prompt || !ex.explanationEn || !ex.explanationHi) {
      throw new Error(`Day ${day.dayNumber} exercise #${exIdx + 1} (${ex.id || 'NO_ID'}) is missing required fields!`);
    }
    const hasAnswer = ex.correctAnswer || ex.targetText || ex.pairs || ex.expectedAnswer;
    if (!hasAnswer) {
      throw new Error(`Day ${day.dayNumber} exercise #${exIdx + 1} (${ex.id}) missing answer/target/pairs!`);
    }
  });

  // Verify dialogue
  const hasDialogue = (day.use && day.use.dialogue && day.use.dialogue.turns && day.use.dialogue.turns.length > 0) ||
                      (day.use && day.use.dialogues && day.use.dialogues.length > 0);
  if (hasDialogue) {
    totalDialogues++;
  } else {
    throw new Error(`Day ${day.dayNumber} missing dialogue scenario`);
  }

  // Verify benchmarks
  const bmCount = day.assess && day.assess.benchmarks ? day.assess.benchmarks.length : 0;
  totalBenchmarks += bmCount;

  console.log(`✓ Day ${day.dayNumber}: "${day.titleEn}" | Vocab: ${vocabCount} | Phrases: ${phraseCount} | Examples: ${exampleCount} | Exercises: ${exCount} | Benchmarks: ${bmCount}`);
});

console.log("-------------------------------------------------");
console.log(`STAGE 6 SUMMARY:`);
console.log(`Total Days: ${days.length}`);
console.log(`Total Vocabulary: ${totalVocab}`);
console.log(`Total Spoken Phrases: ${totalPhrases}`);
console.log(`Total Exemplars: ${totalExamples}`);
console.log(`Total Practice Exercises: ${totalExercises}`);
console.log(`Total Interactive Dialogues: ${totalDialogues}`);
console.log(`Total Exit Benchmarks: ${totalBenchmarks}`);
console.log("=================================================");
console.log("ALL STAGE 6 DAYS (51-60) SUCCESSFULLY VERIFIED!");
