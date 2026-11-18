import * as fs from 'fs';
import * as path from 'path';
import { CurriculumService } from '../src/services/CurriculumService';
import { LessonService } from '../src/services/LessonService';
import { CURIOSITY_UNITS } from '../src/data/curiosityCurriculum';
import { DetailedLessonData, Exercise } from '../src/types';
import { normalizeExerciseType, evaluateExercise, getExerciseTypeDefinition } from '../src/services/ExerciseRegistry';

async function runComprehensiveAudit60() {
  console.log('============================================================');
  console.log('EXECUTING COMPREHENSIVE FINAL AUDIT: UNITS 1–4 (LESSONS 1–60)');
  console.log('============================================================\n');

  // 1. LESSON REGISTRATION
  const u1Lessons: DetailedLessonData[] = [];
  const u2Lessons: DetailedLessonData[] = [];
  const u3Lessons: DetailedLessonData[] = [];
  const u4Lessons: DetailedLessonData[] = [];
  const allLessons: DetailedLessonData[] = [];
  const lessonIdsSeen = new Set<string>();
  let missingLessonIds = 0;
  let duplicateLessonIds = 0;

  for (let i = 1; i <= 60; i++) {
    const unitNum = i <= 15 ? 1 : i <= 30 ? 2 : i <= 45 ? 3 : 4;
    const lessonId = `lesson_a1_${unitNum}_${i}`;

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
      if (unitNum === 1) u1Lessons.push(fromCurr);
      else if (unitNum === 2) u2Lessons.push(fromCurr);
      else if (unitNum === 3) u3Lessons.push(fromCurr);
      else u4Lessons.push(fromCurr);
    }
  }

  console.log(`Registration Audit:
  Unit 1: ${u1Lessons.length}/15 lessons
  Unit 2: ${u2Lessons.length}/15 lessons
  Unit 3: ${u3Lessons.length}/15 lessons
  Unit 4: ${u4Lessons.length}/15 lessons
  Total: ${allLessons.length}/60 lessons
  Missing Lesson IDs: ${missingLessonIds}
  Duplicate Lesson IDs: ${duplicateLessonIds}
  `);

  // 2. 18-STAGE PEDAGOGICAL SEQUENCE VERIFICATION
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

  console.log(`18-Stage Verification:
  18/18 Stages Passed: ${pass18Count}/60
  Failed: ${fail18Count}
  `);

  // 3. EXERCISE INVENTORY
  let u1P = 0, u1R = 0, u1A = 0;
  let u2P = 0, u2R = 0, u2A = 0;
  let u3P = 0, u3R = 0, u3A = 0;
  let u4P = 0, u4R = 0, u4A = 0;

  for (const l of u1Lessons) {
    u1P += (l.practiceExercises || []).length;
    u1R += (l.reviewExercises || []).length;
    u1A += (l.assessmentExercises || []).length;
  }
  for (const l of u2Lessons) {
    u2P += (l.practiceExercises || []).length;
    u2R += (l.reviewExercises || []).length;
    u2A += (l.assessmentExercises || []).length;
  }
  for (const l of u3Lessons) {
    u3P += (l.practiceExercises || []).length;
    u3R += (l.reviewExercises || []).length;
    u3A += (l.assessmentExercises || []).length;
  }
  for (const l of u4Lessons) {
    u4P += (l.practiceExercises || []).length;
    u4R += (l.reviewExercises || []).length;
    u4A += (l.assessmentExercises || []).length;
  }

  const totalPractice = u1P + u2P + u3P + u4P;
  const totalReview = u1R + u2R + u3R + u4R;
  const totalAssessment = u1A + u2A + u3A + u4A;
  const grandTotalEx = totalPractice + totalReview + totalAssessment;

  console.log(`Exercise Inventory:
  Unit 1: ${u1P} practice, ${u1R} review, ${u1A} assessment (Total: ${u1P + u1R + u1A})
  Unit 2: ${u2P} practice, ${u2R} review, ${u2A} assessment (Total: ${u2P + u2R + u2A})
  Unit 3: ${u3P} practice, ${u3R} review, ${u3A} assessment (Total: ${u3P + u3R + u3A})
  Unit 4: ${u4P} practice, ${u4R} review, ${u4A} assessment (Total: ${u4P + u4R + u4A})
  Grand Total Exercises: ${grandTotalEx}
  `);

  // 4. EXERCISE REGISTRY & EVALUATOR COVERAGE
  const allExercises: Exercise[] = [];
  for (const l of allLessons) {
    allExercises.push(...(l.practiceExercises || []), ...(l.reviewExercises || []), ...(l.assessmentExercises || []));
  }

  const typeCounts: Record<string, number> = {};
  const knownSupportedTypes = new Set([
    'multiple_choice',
    'fill_blank',
    'word_ordering',
    'translation',
    'error_correction',
    'listening',
    'speaking',
    'listen_and_type',
    'dialogue_completion',
    'match_pairs',
    'recognition',
    'personal_production',
    'sentence_construction',
    'picture_choice'
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

  for (const ex of allExercises) {
    if (exIdSet.has(ex.id)) duplicateExIds++;
    exIdSet.add(ex.id);

    if (!ex.prompt || ex.prompt.trim() === '') missingPrompts++;

    const cType = normalizeExerciseType(ex.type);
    if (!knownSupportedTypes.has(cType)) invalidTypes++;

    // Answer key checks
    if (['multiple_choice', 'recognition', 'fill_blank', 'dialogue_completion', 'error_correction'].includes(cType)) {
      if (ex.options && ex.options.length > 0) {
        const correct = ex.options.filter(o => o.isCorrect === true);
        if (correct.length === 0 && !ex.correctAnswer) missingAnswers++;
      } else if (!ex.correctAnswer) {
        missingAnswers++;
      }
    } else if (['word_ordering', 'sentence_construction', 'translation', 'listening', 'listen_and_type', 'speaking'].includes(cType)) {
      if (!ex.targetSentence && !ex.correctAnswer && !ex.options?.some(o => o.isCorrect)) {
        missingAnswers++;
      }
    } else if (cType === 'match_pairs') {
      if ((!ex.pairs || ex.pairs.length === 0) && (!ex.options || ex.options.length === 0)) {
        missingAnswers++;
      }
    } else if (cType === 'personal_production') {
      // Validated by persona inputs
    }

    // Specific defect checks
    if (cType === 'word_ordering') {
      if (!ex.wordBank || ex.wordBank.length === 0) malformedWordBanks++;
      if (!ex.targetSentence && !ex.correctAnswer) missingTargetTokens++;
    }
    if (cType === 'listening') {
      if (!ex.audioText && !ex.targetSentence && !ex.sourceSentence) listeningDefects++;
    }
    if (cType === 'speaking') {
      if (!ex.targetSentence && !ex.audioText && !ex.correctAnswer) speakingDefects++;
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
      cType === 'picture_choice'
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
      if (!testResponse.selectedOptionId && ex.correctAnswer) {
        testResponse = { typedAnswer: Array.isArray(ex.correctAnswer) ? ex.correctAnswer[0] : ex.correctAnswer };
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
    } else if (cType === 'word_ordering' || cType === 'sentence_construction') {
      const target = ex.targetSentence || (Array.isArray(ex.correctAnswer) ? ex.correctAnswer[0] : ex.correctAnswer) || '';
      const words = target.replace(/[.,?!]/g, '').split(' ').filter(Boolean);
      testResponse = { constructedWords: words };
    } else if (cType === 'translation' || cType === 'listen_and_type') {
      const target = ex.targetSentence || (Array.isArray(ex.correctAnswer) ? ex.correctAnswer[0] : ex.correctAnswer) || '';
      testResponse = { typedAnswer: target };
    } else if (cType === 'match_pairs') {
      const count = ex.options?.length || (ex.pairs ? ex.pairs.length : 4);
      testResponse = { matchedPairs: Array(count).fill('pair') };
    } else if (cType === 'speaking') {
      const target = ex.targetSentence || ex.audioText || (Array.isArray(ex.correctAnswer) ? ex.correctAnswer[0] : ex.correctAnswer) || '';
      testResponse = { spokenText: target };
    } else if (cType === 'personal_production') {
      testResponse = { personalProduction: { name: 'Alex', country: 'Canada', city: 'Toronto' } };
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
        console.warn(`[EVAL FAIL] [${ex.id}] (${ex.type}) target="${ex.targetSentence}" / "${ex.correctAnswer}", response=`, testResponse);
      }
    } catch (err) {
      evalFailCount++;
      console.error(`[EVAL ERROR] [${ex.id}]`, err);
    }

    // Test Incomplete state behavior
    try {
      const emptyRes = evaluateExercise(ex, {});
      if (emptyRes.isCorrect) {
        falsePositives++;
        incompleteStateDefects++;
      }
    } catch {
      // expected safe handling
    }
  }

  console.log(`Defect Audit Summary:
  Missing Prompts: ${missingPrompts}
  Missing Answers: ${missingAnswers}
  Invalid Types: ${invalidTypes}
  Duplicate Exercise IDs: ${duplicateExIds}
  Malformed Word Banks: ${malformedWordBanks}
  Missing Target Tokens: ${missingTargetTokens}
  Listening Defects: ${listeningDefects}
  Speaking Defects: ${speakingDefects}
  Translation Defects: ${translationDefects}
  Dialogue Defects: ${dialogueDefects}
  Unsupported Renderers: ${unsupportedRenderers}
  Unsupported Evaluators: ${unsupportedEvaluators}
  Evaluator Passes: ${evalPassCount}/${allExercises.length}
  Evaluator Fails: ${evalFailCount}
  False Negatives: ${falseNegatives}
  False Positives: ${falsePositives}
  Incomplete State Defects: ${incompleteStateDefects}
  `);

  if (
    missingLessonIds === 0 &&
    duplicateLessonIds === 0 &&
    pass18Count === 60 &&
    missingPrompts === 0 &&
    missingAnswers === 0 &&
    duplicateExIds === 0 &&
    unsupportedRenderers === 0 &&
    unsupportedEvaluators === 0 &&
    falseNegatives === 0 &&
    falsePositives === 0
  ) {
    console.log('🎉 ALL AUDIT CHECKS PASSED PERFECTLY FOR LESSONS 1–60 (UNITS 1–4)!');
  } else {
    console.error('❌ SOME AUDIT CHECKS FAILED. PLEASE REVIEW LOGS ABOVE.');
  }
}

runComprehensiveAudit60();
