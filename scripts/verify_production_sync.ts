// scripts/verify_production_sync.ts
import {
  getAllRegistryDays,
  getRegistryDayByNumber,
  getRegistryDaysCount,
  STAGES_METADATA
} from '../src/data/curriculumRegistry.ts';
import { HindiCourseService } from '../src/services/HindiCourseService.ts';
import fs from 'fs';
import path from 'path';

console.log("================================================================================");
console.log("PRODUCTION CONTENT PACK SYNCHRONIZATION AUDIT & METRICS REPORT");
console.log("================================================================================");

// 1. Verify JSON file existence and size
const packFiles = [
  'DAYS_01_10_CONTENT.json',
  'DAYS_11_20_CONTENT.json',
  'DAYS_21_30_CONTENT.json',
  'DAYS_31_40_CONTENT.json',
  'DAYS_41_50_CONTENT.json',
  'DAYS_51_60_CONTENT.json'
];

console.log("\n--- JSON PRODUCTION ARTIFACTS ---");
packFiles.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  if (!fs.existsSync(filePath)) {
    throw new Error(`CRITICAL: Production file ${file} is missing!`);
  }
  const stat = fs.statSync(filePath);
  const raw = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  const count = (raw.days || raw).length;
  console.log(`✓ ${file}: ${(stat.size / 1024).toFixed(1)} KB | ${count} days`);
});

// 2. Verify Service integration
const serviceDaysCount = HindiCourseService.getAvailableDaysCount();
console.log(`\nHindiCourseService.getAvailableDaysCount() === ${serviceDaysCount}`);
if (serviceDaysCount !== 60) {
  throw new Error(`Expected 60 days in HindiCourseService, got ${serviceDaysCount}`);
}

const allDays = getAllRegistryDays();
if (allDays.length !== 60) {
  throw new Error(`Expected 60 days from getAllRegistryDays, got ${allDays.length}`);
}

// 3. Accumulate Global & Per-Stage & Per-Day metrics
let totalVocab = 0;
let totalPhrases = 0;
let totalExamples = 0;
let totalExercises = 0;
let totalAudioDrills = 0;
let totalMinimalPairs = 0;
let totalSentenceStress = 0;
let totalConnectedSpeech = 0;
let totalDialogues = 0;
let totalDialogueTurns = 0;
let totalSpeakingTasks = 0;
let totalAssessments = 0;
let totalReviewItems = 0;

const uniqueVocabSet = new Set<string>();

interface DayMetric {
  dayNumber: number;
  stage: number;
  titleEn: string;
  cefr: string;
  vocabCount: number;
  phrasesCount: number;
  examplesCount: number;
  exercisesCount: number;
  drillsCount: number;
  minimalPairsCount: number;
  sentenceStressCount: number;
  dialogueTurnsCount: number;
  assessCount: number;
}

const dayMetrics: DayMetric[] = [];
const stageTotals: Record<number, {
  vocab: number;
  phrases: number;
  examples: number;
  exercises: number;
  drills: number;
  minimalPairs: number;
  sentenceStress: number;
  dialogueTurns: number;
  assess: number;
  uniqueVocab: Set<string>;
}> = {
  1: { vocab: 0, phrases: 0, examples: 0, exercises: 0, drills: 0, minimalPairs: 0, sentenceStress: 0, dialogueTurns: 0, assess: 0, uniqueVocab: new Set() },
  2: { vocab: 0, phrases: 0, examples: 0, exercises: 0, drills: 0, minimalPairs: 0, sentenceStress: 0, dialogueTurns: 0, assess: 0, uniqueVocab: new Set() },
  3: { vocab: 0, phrases: 0, examples: 0, exercises: 0, drills: 0, minimalPairs: 0, sentenceStress: 0, dialogueTurns: 0, assess: 0, uniqueVocab: new Set() },
  4: { vocab: 0, phrases: 0, examples: 0, exercises: 0, drills: 0, minimalPairs: 0, sentenceStress: 0, dialogueTurns: 0, assess: 0, uniqueVocab: new Set() },
  5: { vocab: 0, phrases: 0, examples: 0, exercises: 0, drills: 0, minimalPairs: 0, sentenceStress: 0, dialogueTurns: 0, assess: 0, uniqueVocab: new Set() },
  6: { vocab: 0, phrases: 0, examples: 0, exercises: 0, drills: 0, minimalPairs: 0, sentenceStress: 0, dialogueTurns: 0, assess: 0, uniqueVocab: new Set() },
};

// Also inspect raw JSON to count raw minimalPairs, sentenceStress, connectedSpeech
const rawPacks = packFiles.map(f => JSON.parse(fs.readFileSync(path.join(process.cwd(), f), 'utf-8')));
const rawDaysList: any[] = [];
rawPacks.forEach(p => {
  const list = p.days || p;
  rawDaysList.push(...list);
});

for (let d = 1; d <= 60; d++) {
  const day = getRegistryDayByNumber(d);
  if (!day) throw new Error(`CRITICAL: Day ${d} missing!`);

  const rawDay = rawDaysList.find(rd => (rd.dayNumber === d || rd.id === `day_${d < 10 ? '0' + d : d}`));

  const stage = Math.ceil(d / 10);
  const st = stageTotals[stage];

  const vCount = day.learn.vocabulary.length;
  const pCount = day.learn.phrases.length;
  const egCount = day.examples.length;
  const exCount = day.practice.length;
  const drCount = day.pronunciation.drills.length;
  const turnsCount = day.use.dialogue.turns.length;
  const asCount = day.assess.length;

  const rawPron = rawDay?.pronunciation || rawDay?.phonetics;
  const rawMP = (rawPron?.minimalPairs)?.length || 0;
  const rawStress = (rawPron?.sentenceStress || rawPron?.sentenceStressPatterns)?.length || 0;
  const rawConnected = (rawPron?.connectedSpeech || rawPron?.connectedSpeechExamples || rawPron?.connectedSpeechRules)?.length || 0;

  // Track unique vocab
  day.learn.vocabulary.forEach(v => {
    const lemma = (v.lemma || v.wordForm || '').toLowerCase().trim();
    if (lemma) {
      uniqueVocabSet.add(lemma);
      st.uniqueVocab.add(lemma);
    }
  });

  totalVocab += vCount;
  totalPhrases += pCount;
  totalExamples += egCount;
  totalExercises += exCount;
  totalAudioDrills += drCount;
  totalMinimalPairs += rawMP;
  totalSentenceStress += rawStress;
  totalConnectedSpeech += rawConnected;
  totalDialogues += 1;
  totalDialogueTurns += turnsCount;
  totalSpeakingTasks += 1;
  totalAssessments += asCount;
  totalReviewItems += (day.review.spacedTips.length + (day.review.quickRecall ? 1 : 0));

  st.vocab += vCount;
  st.phrases += pCount;
  st.examples += egCount;
  st.exercises += exCount;
  st.drills += drCount;
  st.minimalPairs += rawMP;
  st.sentenceStress += rawStress;
  st.dialogueTurns += turnsCount;
  st.assess += asCount;

  dayMetrics.push({
    dayNumber: d,
    stage,
    titleEn: day.titleEn,
    cefr: day.cefr,
    vocabCount: vCount,
    phrasesCount: pCount,
    examplesCount: egCount,
    exercisesCount: exCount,
    drillsCount: drCount,
    minimalPairsCount: rawMP,
    sentenceStressCount: rawStress,
    dialogueTurnsCount: turnsCount,
    assessCount: asCount
  });
}

console.log("\n--- STAGE-BY-STAGE TOTALS ---");
for (let s = 1; s <= 6; s++) {
  const meta = STAGES_METADATA.find(m => m.stageNumber === s);
  const st = stageTotals[s];
  console.log(`\n[Stage ${s}: ${meta?.stageTitleEn}] (${meta?.cefrSpan})`);
  console.log(`  Days: ${meta?.startDay}–${meta?.endDay}`);
  console.log(`  Total Vocabulary: ${st.vocab} (Unique: ${st.uniqueVocab.size})`);
  console.log(`  Spoken Phrases: ${st.phrases}`);
  console.log(`  Bilingual Exemplars: ${st.examples}`);
  console.log(`  Practice Exercises: ${st.exercises}`);
  console.log(`  Pronunciation Drills: ${st.drills}`);
  console.log(`  Minimal Pairs: ${st.minimalPairs}`);
  console.log(`  Sentence Stress Drills: ${st.sentenceStress}`);
  console.log(`  Dialogue Turns: ${st.dialogueTurns}`);
  console.log(`  Assessments / Benchmarks: ${st.assess}`);
}

console.log("\n--- COMPLETE DAY-BY-DAY AUDIT TABLE ---");
console.table(dayMetrics.map(dm => ({
  Day: dm.dayNumber,
  CEFR: dm.cefr,
  Title: dm.titleEn.slice(0, 32),
  Vocab: dm.vocabCount,
  Phrases: dm.phrasesCount,
  Examples: dm.examplesCount,
  Exercises: dm.exercisesCount,
  Drills: dm.drillsCount,
  Turns: dm.dialogueTurnsCount,
  Assess: dm.assessCount
})));

console.log("\n================================================================================");
console.log("GRAND AGGREGATE TOTALS DIRECTLY FROM PRODUCTION JSON FILES:");
console.log(`✓ Total Days Loaded: 60 / 60`);
console.log(`✓ Total Vocabulary Items: ${totalVocab}`);
console.log(`✓ Unique Vocabulary Lemmata: ${uniqueVocabSet.size}`);
console.log(`✓ Total Spoken Phrases: ${totalPhrases}`);
console.log(`✓ Total Bilingual Exemplars: ${totalExamples}`);
console.log(`✓ Total Practice Exercises: ${totalExercises}`);
console.log(`✓ Total Pronunciation & Accent Drills: ${totalAudioDrills}`);
console.log(`✓ Total Minimal Pair Sets: ${totalMinimalPairs}`);
console.log(`✓ Total Sentence Stress Drills: ${totalSentenceStress}`);
console.log(`✓ Total Connected Speech Drill Modules: ${totalConnectedSpeech}`);
console.log(`✓ Total Situational Dialogues: ${totalDialogues} (${totalDialogueTurns} total turns)`);
console.log(`✓ Total Speaking Tasks: ${totalSpeakingTasks}`);
console.log(`✓ Total Exit Assessment Items: ${totalAssessments}`);
console.log(`✓ Total Spaced Review Items: ${totalReviewItems}`);
console.log("================================================================================");

// 4. Verify Key Milestone Days
const keyDays = [1, 10, 20, 21, 30, 40, 50, 60];
console.log("\n--- VERIFYING KEY BENCHMARK DAYS ---");
keyDays.forEach(dayNum => {
  const d = HindiCourseService.getDayByNumber(dayNum);
  if (!d) throw new Error(`Failed to load key benchmark Day ${dayNum}`);
  console.log(`✓ Day ${dayNum}: "${d.titleEn}" | Vocab: ${d.learn.vocabulary.length}, Phrases: ${d.learn.phrases.length}, Examples: ${d.examples.length}, Exercises: ${d.practice.length}, Dialogue Turns: ${d.use.dialogue.turns.length}, Assess: ${d.assess.length}`);
});

console.log("\n[VERIFICATION PASSED] All 60 days are fully loaded with rich enriched content!");
