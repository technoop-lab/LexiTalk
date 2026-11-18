import * as fs from 'fs';
import * as path from 'path';
import { CurriculumService } from '../src/services/CurriculumService';
import { LessonService } from '../src/services/LessonService';
import { CURIOSITY_UNITS } from '../src/data/curiosityCurriculum';
import { DetailedLessonData, Exercise } from '../src/types';
import { normalizeExerciseType, evaluateExercise, normalizeExercise } from '../src/services/ExerciseRegistry';

function getLessonIdForNumber(num: number): string {
  let unitNum = 1;
  let level = 'a1';
  if (num <= 15) unitNum = 1;
  else if (num <= 30) unitNum = 2;
  else if (num <= 45) unitNum = 3;
  else if (num <= 60) unitNum = 4;
  else if (num <= 75) unitNum = 5;
  else if (num <= 90) unitNum = 6;
  else {
    level = 'a2';
    unitNum = 7 + Math.floor((num - 91) / 15);
  }
  return `lesson_${level}_${unitNum}_${num}`;
}

async function runComprehensiveAudit() {
  console.log('============================================================');
  console.log('EXECUTING COMPREHENSIVE FINAL RELEASE GATE AUDIT: LESSONS 1–270');
  console.log('============================================================\n');

  // 1. LESSON REGISTRATION (1-270 across Units 1-18)
  const unitLessons: Record<number, DetailedLessonData[]> = {};
  for (let u = 1; u <= 18; u++) {
    unitLessons[u] = [];
  }
  const allLessons: DetailedLessonData[] = [];
  const lessonIdsSeen = new Set<string>();
  let missingLessonIds = 0;
  let duplicateLessonIds = 0;

  for (let i = 1; i <= 270; i++) {
    const lessonId = getLessonIdForNumber(i);
    const unitNum = i <= 90 ? Math.ceil(i / 15) : 7 + Math.floor((i - 91) / 15);

    if (lessonIdsSeen.has(lessonId)) {
      duplicateLessonIds++;
    }
    lessonIdsSeen.add(lessonId);

    const fromCurr = CurriculumService.getDetailedLesson(lessonId);
    const fromLessonService = await LessonService.getLessonById(lessonId);

    if (!fromCurr || !fromLessonService) {
      console.error(`Missing lesson load for ${lessonId}: Curr=${!!fromCurr}, Service=${!!fromLessonService}`);
      missingLessonIds++;
    } else {
      allLessons.push(fromCurr);
      unitLessons[unitNum].push(fromCurr);
    }
  }

  console.log(`Registration Audit:
  Total Lessons Loaded: ${allLessons.length}/270
  Missing Lesson IDs: ${missingLessonIds}
  Duplicate Lesson IDs: ${duplicateLessonIds}
  A1 Lessons (1–90): ${allLessons.filter(l => l.cefr === 'A1').length}/90
  A2 Lessons (91–270): ${allLessons.filter(l => l.cefr === 'A2').length}/180
  Units populated (1–18): ${Object.keys(unitLessons).filter(u => unitLessons[Number(u)].length === 15).length}/18
  `);

  // 2. 18-STAGE VERIFICATION
  let pass18Count = 0;
  let fail18Count = 0;
  const stageResults: { id: string; num: number; title: string; status: 'PASS' | 'FAIL'; stageCount: number }[] = [];

  for (let i = 0; i < allLessons.length; i++) {
    const l = allLessons[i];
    const stages = CurriculumService.getLessonStageSequence(l.id);
    const pass = stages.length === 18;
    if (pass) pass18Count++;
    else fail18Count++;
    stageResults.push({ id: l.id, num: i + 1, title: l.title, status: pass ? 'PASS' : 'FAIL', stageCount: stages.length });
  }

  // 3. EXERCISE INVENTORY
  let totalPractice = 0;
  let totalReview = 0;
  let totalAssessment = 0;
  const unitStats: Record<number, { practice: number; review: number; assessment: number; total: number; avg: number }> = {};

  for (let u = 1; u <= 18; u++) {
    let p = 0, r = 0, a = 0;
    for (const l of unitLessons[u]) {
      p += (l.practiceExercises || []).length;
      r += (l.reviewExercises || []).length;
      a += (l.assessmentExercises || []).length;
    }
    totalPractice += p;
    totalReview += r;
    totalAssessment += a;
    const tot = p + r + a;
    unitStats[u] = {
      practice: p,
      review: r,
      assessment: a,
      total: tot,
      avg: Math.round((tot / (unitLessons[u].length || 1)) * 10) / 10,
    };
  }

  const grandTotalEx = totalPractice + totalReview + totalAssessment;

  // 4. EXERCISE REGISTRY & EVALUATOR COVERAGE
  const allExercises: Exercise[] = [];
  for (const l of allLessons) {
    allExercises.push(...(l.practiceExercises || []), ...(l.reviewExercises || []), ...(l.assessmentExercises || []));
  }

  const typeCounts: Record<string, number> = {};
  const knownSupportedTypes = new Set([
    'multiple_choice',
    'fill_blank',
    'fill_in_blank',
    'word_ordering',
    'sentence_construction',
    'sentence_ordering',
    'reorder',
    'translation',
    'translate_tiles',
    'error_correction',
    'listening',
    'listen_and_type',
    'listen_type',
    'speaking',
    'speak_sentence',
    'dialogue_completion',
    'match_pairs',
    'recognition',
    'reading',
    'mediation',
    'writing',
    'personal_production',
  ]);

  let unsupportedRenderers = 0;
  let unsupportedEvaluators = 0;

  for (const ex of allExercises) {
    const cType = normalizeExerciseType(ex.type);
    typeCounts[cType] = (typeCounts[cType] || 0) + 1;
    if (!knownSupportedTypes.has(cType)) {
      unsupportedRenderers++;
      unsupportedEvaluators++;
    }
  }

  // 5. DEEP EXERCISE DEFECT AUDIT
  let missingPrompts = 0;
  let missingAnswers = 0;
  let invalidTypes = 0;
  let duplicateExIds = 0;
  const exIdSet = new Set<string>();
  let malformedWordBanks = 0;
  let missingTargetTokens = 0;
  let listeningDefects = 0;
  let speakingDefects = 0;
  let translationDefects = 0;
  let dialogueDefects = 0;
  let evalPassCount = 0;
  let evalFailCount = 0;
  let falseNegatives = 0;
  let falsePositives = 0;
  let incompleteStateDefects = 0;

  for (const rawEx of allExercises) {
    const ex = normalizeExercise(rawEx);
    if (exIdSet.has(ex.id)) duplicateExIds++;
    exIdSet.add(ex.id);

    if (!ex.prompt || ex.prompt.trim() === '') missingPrompts++;

    const cType = normalizeExerciseType(ex.type);
    if (!knownSupportedTypes.has(cType)) invalidTypes++;

    // Answer key checks
    if (['multiple_choice', 'recognition', 'fill_blank', 'dialogue_completion', 'error_correction', 'reading', 'mediation'].includes(cType)) {
      if (ex.options && ex.options.length > 0) {
        const correct = ex.options.filter(o => o.isCorrect === true);
        if (correct.length === 0 && !ex.correctAnswer) missingAnswers++;
      } else if (!ex.correctAnswer) {
        missingAnswers++;
      }
    } else if (['word_ordering', 'translation', 'listening', 'listen_and_type', 'speaking', 'translate_tiles'].includes(cType)) {
      if (!ex.targetSentence && !ex.correctAnswer && !ex.options?.some(o => o.isCorrect)) {
        missingAnswers++;
      }
    } else if (cType === 'match_pairs') {
      if (!ex.pairs || ex.pairs.length === 0) {
        missingAnswers++;
      }
    }

    // Specific defect checks
    if (cType === 'word_ordering') {
      if (!ex.wordBank || ex.wordBank.length === 0) malformedWordBanks++;
      if (!ex.targetSentence && !ex.correctAnswer) missingTargetTokens++;
    }
    if (cType === 'listening') {
      if (!ex.audioText && !ex.targetSentence && !ex.sourceSentence && !ex.options) listeningDefects++;
    }
    if (cType === 'speaking') {
      if (!ex.targetSentence && !ex.audioText && !ex.correctAnswer && !ex.prompt) speakingDefects++;
    }
    if (cType === 'translation') {
      if (!ex.targetSentence && !ex.correctAnswer) translationDefects++;
    }
    if (cType === 'dialogue_completion') {
      if (!ex.dialogueContext && !ex.prompt && !ex.sourceSentence) dialogueDefects++;
    }

    // Dynamic answer evaluator test
    let testResponse: any = {};
    if (
      cType === 'recognition' ||
      cType === 'multiple_choice' ||
      cType === 'listening' ||
      cType === 'error_correction' ||
      cType === 'dialogue_completion' ||
      cType === 'reading' ||
      cType === 'mediation'
    ) {
      if (ex.options && ex.options.length > 0) {
        const correctOpt = ex.options.find((o) => o.isCorrect);
        if (correctOpt) {
          testResponse = { selectedOptionId: correctOpt.id };
        } else {
          const correctAns = ex.correctAnswer || ex.targetSentence;
          if (correctAns) {
            const matchingOpt = ex.options.find(
              (o) => o.text.trim().toLowerCase() === String(correctAns).trim().toLowerCase()
            );
            if (matchingOpt) {
              testResponse = { selectedOptionId: matchingOpt.id };
            }
          }
        }
      }
    } else if (cType === 'fill_blank') {
      if (ex.options && ex.options.length > 0) {
        const correctOpt = ex.options.find((o) => o.isCorrect);
        if (correctOpt) {
          testResponse = { selectedOptionId: correctOpt.id };
        }
      }
      if (!testResponse.selectedOptionId) {
        const answer = Array.isArray(ex.correctAnswer)
          ? ex.correctAnswer[0]
          : ex.correctAnswer || ex.targetSentence || '';
        testResponse = { typedAnswer: answer };
      }
    } else if (cType === 'word_ordering' || cType === 'sentence_construction' || cType === 'reorder' || cType === 'translate_tiles') {
      const target = ex.targetSentence || (Array.isArray(ex.correctAnswer) ? ex.correctAnswer[0] : ex.correctAnswer) || '';
      const words = target.replace(/[.,?!]/g, '').split(' ').filter(Boolean);
      testResponse = { constructedWords: words, typedAnswer: target };
    } else if (cType === 'translation' || cType === 'listen_and_type' || cType === 'listen_type' || cType === 'writing') {
      const target = ex.targetSentence || (Array.isArray(ex.correctAnswer) ? ex.correctAnswer[0] : ex.correctAnswer) || '';
      testResponse = { typedAnswer: target };
    } else if (cType === 'match_pairs') {
      const matched: Record<string, string> = {};
      ex.pairs?.forEach(p => {
        matched[p.left] = p.right;
      });
      testResponse = { matchedPairs: matched };
    } else if (cType === 'speaking' || cType === 'speak_sentence') {
      testResponse = { speechTranscript: ex.targetSentence || ex.audioText || (Array.isArray(ex.correctAnswer) ? ex.correctAnswer[0] : ex.correctAnswer) || '' };
    } else if (cType === 'personal_production') {
      testResponse = { typedAnswer: ex.targetSentence || ex.correctAnswer || 'I am learning English.' };
    } else {
      testResponse = { typedAnswer: ex.targetSentence || ex.correctAnswer || '' };
    }

    try {
      const evalRes = evaluateExercise(ex, testResponse);
      if (evalRes.isCorrect) {
        evalPassCount++;
      } else {
        evalFailCount++;
        falseNegatives++;
      }
    } catch {
      evalFailCount++;
    }

    // Test Incomplete state behavior
    try {
      const emptyRes = evaluateExercise(ex, {});
      if (emptyRes.isCorrect) {
        falsePositives++;
        incompleteStateDefects++;
      }
    } catch {
      // safe
    }
  }

  // 6. AUDIO AUDIT
  let totalAudioRefs = 0;
  const audioIdSet = new Set<string>();
  for (const l of allLessons) {
    l.vocabulary?.forEach(v => {
      if (v.audioId) { totalAudioRefs++; audioIdSet.add(v.audioId); }
      if (v.slowAudioId) { totalAudioRefs++; audioIdSet.add(v.slowAudioId); }
    });
    l.expressions?.forEach(e => {
      if (e.audioId) { totalAudioRefs++; audioIdSet.add(e.audioId); }
    });
    l.dialogues?.forEach(d => {
      const lines = (d as any).lines || (d as any).turns || [];
      lines.forEach((line: any) => {
        if (line.audioId) { totalAudioRefs++; audioIdSet.add(line.audioId); }
      });
    });
  }

  console.log('\n--- MASTER AUDIT DATA EXPORT ---');
  console.log(JSON.stringify({
    allLessonsCount: allLessons.length,
    missingLessonIds,
    duplicateLessonIds,
    pass18Count,
    fail18Count,
    totalPractice,
    totalReview,
    totalAssessment,
    grandTotalEx,
    averageExercisesPerLesson: Math.round((grandTotalEx / allLessons.length) * 100) / 100,
    unitStats,
    typeCounts,
    unsupportedRenderers,
    unsupportedEvaluators,
    missingPrompts,
    missingAnswers,
    invalidTypes,
    duplicateExIds,
    malformedWordBanks,
    missingTargetTokens,
    listeningDefects,
    speakingDefects,
    translationDefects,
    dialogueDefects,
    evalPassCount,
    evalFailCount,
    falseNegatives,
    falsePositives,
    incompleteStateDefects,
    totalAudioRefs,
    distinctAudioIds: audioIdSet.size,
  }, null, 2));
}

runComprehensiveAudit();
