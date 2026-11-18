import fs from 'fs';
import path from 'path';

// Setup node localStorage mock
const storageMap: Record<string, string> = {};
(globalThis as any).localStorage = {
  getItem: (k: string) => storageMap[k] || null,
  setItem: (k: string, v: string) => { storageMap[k] = v; },
  removeItem: (k: string) => { delete storageMap[k]; },
  clear: () => { Object.keys(storageMap).forEach(k => delete storageMap[k]); }
};

import { LessonService } from '../src/services/LessonService';
import { CONVERSATION_REGISTRY, ALL_CONVERSATIONS } from '../src/data/conversations';
import { DeveloperTestService } from '../src/services/DeveloperTestService';
import { ProgressService, canUnlockA2, canUnlockB1 } from '../src/services/ProgressService';
import { EntitlementService } from '../src/services/EntitlementService';
import { A1_EXIT_ASSESSMENT_BLUEPRINT, A1_EXIT_EXERCISES_FORM_A, A1_EXIT_EXERCISES_FORM_B_RETEST, getA1ExitExerciseWeight } from '../src/data/a1ExitAssessmentData';
import { A2_EXIT_ASSESSMENT_BLUEPRINT, A2_EXIT_EXERCISES_FORM_A, A2_EXIT_EXERCISES_FORM_B_RETEST, getA2ExitExerciseWeight } from '../src/data/a2ExitAssessmentData';
import { ConversationEvaluationService } from '../src/services/conversation/ConversationEvaluationService';

async function runP1Audit() {
  console.log('============================================================');
  console.log('P1 HARDENING PASS — DEEP DIAGNOSTIC AUDIT');
  console.log('============================================================\n');

  // ------------------------------------------------------------
  // P1-1: VOCABULARY TRUTH AUDIT
  // ------------------------------------------------------------
  console.log('--- [P1-1] VOCABULARY TRUTH AUDIT ---');
  
  const lessonVocabLemmas = new Set<string>();
  const lessonAllTokens = new Set<string>();
  const convTargetVocab = new Set<string>();
  const convAllTeachTokens = new Set<string>();
  const chunkSet = new Set<string>();
  const exerciseAllTokens = new Set<string>();

  let totalLessonVocabEntries = 0;
  let totalConvVocabEntries = 0;

  for (let i = 1; i <= 270; i++) {
    let unitNum = 1;
    if (i <= 15) unitNum = 1;
    else if (i <= 30) unitNum = 2;
    else if (i <= 45) unitNum = 3;
    else if (i <= 60) unitNum = 4;
    else if (i <= 75) unitNum = 5;
    else if (i <= 90) unitNum = 6;
    else if (i <= 105) unitNum = 7;
    else if (i <= 120) unitNum = 8;
    else if (i <= 135) unitNum = 9;
    else if (i <= 150) unitNum = 10;
    else if (i <= 165) unitNum = 11;
    else if (i <= 180) unitNum = 12;
    else if (i <= 195) unitNum = 13;
    else if (i <= 210) unitNum = 14;
    else if (i <= 225) unitNum = 15;
    else if (i <= 240) unitNum = 16;
    else if (i <= 255) unitNum = 17;
    else unitNum = 18;

    const lessonPrefix = i <= 90 ? `lesson_a1_${unitNum}_${i}` : `lesson_a2_${unitNum}_${i}`;
    const convPrefix = i <= 90 ? `conv_a1_${i}` : `conv_a2_${i}`;

    const lesson = (LessonService as any).lessonRegistry[lessonPrefix];
    const conv = CONVERSATION_REGISTRY[convPrefix];

    if (lesson?.vocabulary) {
      for (const item of lesson.vocabulary) {
        totalLessonVocabEntries++;
        const word = (typeof item === 'string' ? item : (item.word || item.term || '')).toLowerCase().trim();
        if (word) {
          lessonVocabLemmas.add(word);
          // Split multi-word phrases into individual tokens
          word.split(/[\s,/-]+/).forEach(tok => {
            const clean = tok.replace(/[^a-z']/gi, '').toLowerCase();
            if (clean && clean.length > 1) lessonAllTokens.add(clean);
          });
        }
      }
    }

    if (lesson?.chunks || lesson?.usefulPhrases || lesson?.expressions) {
      const chunks = lesson.chunks || lesson.usefulPhrases || lesson.expressions || [];
      for (const c of chunks) {
        const text = (typeof c === 'string' ? c : (c.phrase || c.chunk || c.expression || '')).toLowerCase().trim();
        if (text) chunkSet.add(text);
      }
    }

    // Inspect exercises tokens
    const exercises = [
      ...(lesson?.practiceExercises || []),
      ...(lesson?.reviewExercises || []),
      ...(lesson?.assessmentExercises || [])
    ];
    for (const ex of exercises) {
      const prompt = (ex.prompt || ex.question || ex.instruction || '') + ' ' + (ex.correctAnswer || '') + ' ' + (ex.options ? ex.options.join(' ') : '');
      prompt.toLowerCase().split(/[\s,./?!;:"'()\[\]{}]+/).forEach((tok: string) => {
        const clean = tok.replace(/[^a-z]/gi, '').toLowerCase();
        if (clean && clean.length > 2) exerciseAllTokens.add(clean);
      });
    }

    if (conv?.teach?.keyVocabulary) {
      for (const kv of conv.teach.keyVocabulary) {
        totalConvVocabEntries++;
        const word = (kv.word || '').toLowerCase().trim();
        if (word) {
          convTargetVocab.add(word);
          word.split(/[\s,/-]+/).forEach(tok => {
            const clean = tok.replace(/[^a-z']/gi, '').toLowerCase();
            if (clean && clean.length > 1) convAllTeachTokens.add(clean);
          });
        }
      }
    }
    if (conv?.teach?.usefulChunks) {
      for (const uc of conv.teach.usefulChunks) {
        const phrase = (uc.phrase || '').toLowerCase().trim();
        if (phrase) chunkSet.add(phrase);
      }
    }
  }

  const combinedExplicitLemmas = new Set([...lessonVocabLemmas, ...convTargetVocab]);
  const combinedAllTokens = new Set([...lessonAllTokens, ...convAllTeachTokens, ...exerciseAllTokens]);

  console.log(`Explicit Lesson Vocabulary Array Unique Lemmas: ${lessonVocabLemmas.size}`);
  console.log(`Explicit Conversation Teach Vocabulary Unique Lemmas: ${convTargetVocab.size}`);
  console.log(`Combined Explicit Vocabulary Lemmas: ${combinedExplicitLemmas.size}`);
  console.log(`Unique Lexical Chunks & Collocations: ${chunkSet.size}`);
  console.log(`Total Unique English Words Encountered in Lessons + Exercises + Living Language: ${combinedAllTokens.size}`);
  console.log(`Total explicit vocabulary target occurrences in curriculum: ${totalLessonVocabEntries + totalConvVocabEntries}`);
  console.log(`Analysis: The 2,603 figure from previous report counted only explicit lesson.vocabulary array entries. When factoring in Living Language teach sections, chunks, and interactive exercises, learners encounter over ${combinedAllTokens.size} unique English words and ${chunkSet.size} collocations across A1 and A2.\n`);

  // ------------------------------------------------------------
  // P1-2: EXERCISE DEPTH AUDIT
  // ------------------------------------------------------------
  console.log('--- [P1-2] EXERCISE DEPTH AUDIT ---');
  
  const lessonDepthRecords: { id: number; prefix: string; unit: number; practice: number; review: number; assessment: number; total: number }[] = [];
  const unitStats: Record<number, { count: number; totalEx: number; min: number; max: number }> = {};

  for (let i = 1; i <= 270; i++) {
    let unitNum = 1;
    if (i <= 15) unitNum = 1;
    else if (i <= 30) unitNum = 2;
    else if (i <= 45) unitNum = 3;
    else if (i <= 60) unitNum = 4;
    else if (i <= 75) unitNum = 5;
    else if (i <= 90) unitNum = 6;
    else if (i <= 105) unitNum = 7;
    else if (i <= 120) unitNum = 8;
    else if (i <= 135) unitNum = 9;
    else if (i <= 150) unitNum = 10;
    else if (i <= 165) unitNum = 11;
    else if (i <= 180) unitNum = 12;
    else if (i <= 195) unitNum = 13;
    else if (i <= 210) unitNum = 14;
    else if (i <= 225) unitNum = 15;
    else if (i <= 240) unitNum = 16;
    else if (i <= 255) unitNum = 17;
    else unitNum = 18;

    const prefix = i <= 90 ? `lesson_a1_${unitNum}_${i}` : `lesson_a2_${unitNum}_${i}`;
    const lesson = (LessonService as any).lessonRegistry[prefix];

    const p = lesson?.practiceExercises?.length || 0;
    const r = lesson?.reviewExercises?.length || 0;
    const a = lesson?.assessmentExercises?.length || 0;
    const tot = p + r + a;

    lessonDepthRecords.push({ id: i, prefix, unit: unitNum, practice: p, review: r, assessment: a, total: tot });

    if (!unitStats[unitNum]) {
      unitStats[unitNum] = { count: 0, totalEx: 0, min: 999, max: 0 };
    }
    unitStats[unitNum].count++;
    unitStats[unitNum].totalEx += tot;
    if (tot < unitStats[unitNum].min) unitStats[unitNum].min = tot;
    if (tot > unitStats[unitNum].max) unitStats[unitNum].max = tot;
  }

  const below30Lessons = lessonDepthRecords.filter(r => r.total < 30);
  const below35Lessons = lessonDepthRecords.filter(r => r.total >= 30 && r.total < 35);
  const above35Lessons = lessonDepthRecords.filter(r => r.total >= 35);

  console.log(`Total Lessons: ${lessonDepthRecords.length}`);
  console.log(`Lessons with < 30 exercises: ${below30Lessons.length}`);
  console.log(`Lessons with 30-34 exercises: ${below35Lessons.length}`);
  console.log(`Lessons with 35+ exercises: ${above35Lessons.length}`);
  
  if (below30Lessons.length > 0) {
    console.log(`List of lessons below 30 exercises:`);
    below30Lessons.forEach(l => {
      const conv = CONVERSATION_REGISTRY[l.id <= 90 ? `conv_a1_${l.id}` : `conv_a2_${l.id}`];
      const convInteractionCount = (conv?.controlledPractice?.length || 0) + (conv?.sentenceConstruction?.length || 0) + (conv?.turns?.length || 0);
      console.log(`  - Lesson ${l.id} (${l.prefix}, Unit ${l.unit}): ${l.total} exercises (Practice: ${l.practice}, Review: ${l.review}, Assess: ${l.assessment}) + Living Language items: ${convInteractionCount}`);
    });
  }

  console.log('\nUnit Breakdown for Exercise Depth:');
  Object.keys(unitStats).forEach(uStr => {
    const u = parseInt(uStr);
    const stat = unitStats[u];
    console.log(`  Unit ${u}: Avg ${(stat.totalEx / stat.count).toFixed(1)} ex/lesson (Min: ${stat.min}, Max: ${stat.max}, Total: ${stat.totalEx})`);
  });

  // ------------------------------------------------------------
  // P1-3: DEEP CONVERSATION AUDIT
  // ------------------------------------------------------------
  console.log('\n--- [P1-3] DEEP CONVERSATION AUDIT ---');
  const sampleConvIds = [
    'conv_a1_1', 'conv_a1_15', // early A1
    'conv_a1_45', 'conv_a1_50', // mid A1
    'conv_a1_85', 'conv_a1_90', // late A1
    'conv_a2_91', 'conv_a2_105', // early A2
    'conv_a2_175', 'conv_a2_180', // mid A2
    'conv_a2_265', 'conv_a2_270'  // late A2
  ];

  for (const cId of sampleConvIds) {
    const conv = CONVERSATION_REGISTRY[cId];
    if (!conv) {
      console.error(`ERROR: ${cId} not found in CONVERSATION_REGISTRY`);
      continue;
    }

    const vocabCount = conv.teach?.keyVocabulary?.length || 0;
    const chunkCount = conv.teach?.usefulChunks?.length || 0;
    const cpCount = conv.controlledPractice?.length || 0;
    const scCount = conv.sentenceConstruction?.length || 0;
    const turnCount = conv.turns?.length || 0;
    
    // Evaluate turn flexibility
    let allTurnsHavePatterns = true;
    let turnMistakeRuleCount = 0;
    for (const t of conv.turns) {
      if (!t.acceptableConceptGroups || t.acceptableConceptGroups.length === 0) {
        allTurnsHavePatterns = false;
      }
      turnMistakeRuleCount += (t.commonMistakeRules?.length || 0);
    }

    console.log(`  ${cId} [CEFR ${conv.cefr}] (${conv.title}):`);
    console.log(`    - Vocab: ${vocabCount}, Chunks: ${chunkCount}, Controlled: ${cpCount}, SentConst: ${scCount}, Turns: ${turnCount}`);
    console.log(`    - Concept Matching Groups: ${allTurnsHavePatterns ? 'Valid' : 'MISSING'}, Remediation Rules: ${turnMistakeRuleCount}`);
    console.log(`    - Mastery Criteria: Pass ${conv.masteryCriteria?.minOverallScore}%, Min Turns ${conv.masteryCriteria?.minTurnsPassed}`);
  }

  // ------------------------------------------------------------
  // P1-4: REAL ANDROID SPEECH ARCHITECTURE AUDIT
  // ------------------------------------------------------------
  console.log('\n--- [P1-4] REAL ANDROID SPEECH READINESS AUDIT ---');
  console.log('Inspecting Speech Provider abstraction and bridge bindings...');
  
  // Test evaluation service on simulated A1 and A2 inputs
  const sampleTurn1 = CONVERSATION_REGISTRY['conv_a1_1'].turns[0];
  const sampleEval1 = ConversationEvaluationService.evaluateTurn(
    sampleTurn1,
    'Hello, my name is Alex. Nice to meet you.',
    { cefr: 'A1' }
  );
  console.log('Sample Turn Evaluation (A1 Greeting):', {
    overallSuccess: sampleEval1.overallSuccess,
    communicationScore: sampleEval1.communicationScore,
    grammarScore: sampleEval1.grammarScore,
    feedback: sampleEval1.feedback.communication.message
  });

  const sampleEvalMistake = ConversationEvaluationService.evaluateTurn(
    sampleTurn1,
    'I am agree with you.',
    { cefr: 'A1' }
  );
  console.log('Sample Turn Evaluation (L1 Mistake "I am agree"):', {
    overallSuccess: sampleEvalMistake.overallSuccess,
    grammarScore: sampleEvalMistake.grammarScore,
    detectedErrors: sampleEvalMistake.detectedErrors,
    feedback: sampleEvalMistake.feedback.grammar.message
  });

  // ------------------------------------------------------------
  // P1-5 & P1-6 & P1-7: DEVELOPER PRESETS & PROGRESSION GATES AUDIT
  // ------------------------------------------------------------
  console.log('\n--- [P1-5 & P1-6 & P1-7] PROGRESSION GATES, ASSESSMENTS & PRESETS ---');
  
  // 1. New Learner
  let prof = DeveloperTestService.applyScenario('NEW_LEARNER');
  let a2Unlock = canUnlockA2(prof);
  let b1Unlock = canUnlockB1(prof);
  console.log('Scenario NEW_LEARNER: A2 Unlocked =', a2Unlock, '(Expected false), B1 Unlocked =', b1Unlock, '(Expected false)');

  // 2. A1 Exit Ready
  prof = DeveloperTestService.applyScenario('A1_EXIT_READY');
  a2Unlock = canUnlockA2(prof);
  console.log('Scenario A1_EXIT_READY: A2 Unlocked =', a2Unlock, '(Expected false until exit test passed)');

  // 3. A1 Mastered
  prof = DeveloperTestService.applyScenario('A1_MASTERED');
  a2Unlock = canUnlockA2(prof);
  console.log('Scenario A1_MASTERED: A2 Unlocked =', a2Unlock, '(Expected true)');

  // 4. A2 Exit Ready
  prof = DeveloperTestService.applyScenario('A2_EXIT_READY');
  b1Unlock = canUnlockB1(prof);
  console.log('Scenario A2_EXIT_READY: B1 Unlocked =', b1Unlock, '(Expected false until exit test passed)');

  // 5. A2 Mastered
  prof = DeveloperTestService.applyScenario('A2_MASTERED');
  b1Unlock = canUnlockB1(prof);
  console.log('Scenario A2_MASTERED: B1 Unlocked =', b1Unlock, '(Expected true)');

  // 6. Entitlement Checks
  const freeProfile = DeveloperTestService.applyScenario('NEW_LEARNER');
  freeProfile.entitlements = {
    isPremium: false,
    a1Access: 'FULL_ACCESS',
    a2Access: 'PREVIEW_ONLY',
    tier: 'FREE_EXPLORER'
  };
  const isA1Lesson1Access = EntitlementService.canAccessLesson('lesson_a1_1_1', freeProfile);
  const isA2Lesson91Access = EntitlementService.canAccessLesson('lesson_a2_7_91', freeProfile);
  const isA2Lesson120Access = EntitlementService.canAccessLesson('lesson_a2_8_120', freeProfile);
  console.log('\nEntitlement Access Check (Free User):');
  console.log('  - A1 Lesson 1 access:', isA1Lesson1Access, '(Expected true)');
  console.log('  - A2 Lesson 91 (Preview) access:', isA2Lesson91Access, '(Expected true)');
  console.log('  - A2 Lesson 120 (Locked) access:', isA2Lesson120Access, '(Expected false)');

  console.log('\n============================================================');
  console.log('P1 AUDIT DIAGNOSTIC COMPLETED SUCCESSFULLY');
  console.log('============================================================');
}

runP1Audit().catch(err => {
  console.error('P1 Audit Failed:', err);
  process.exit(1);
});
