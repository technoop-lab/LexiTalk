// Automated Comprehensive Exercise Engine & Evaluation Audit
// Curiosity English Academy - All 270 Lessons (Units 1–18)

import { LessonService } from '../src/services/LessonService';
import { CurriculumService } from '../src/services/CurriculumService';
import { UNIT_1_REVIEW_EXERCISES } from '../src/data/unit1ReviewData';
import { UNIT_1_MASTERY_ASSESSMENT_EXERCISES } from '../src/data/unit1MasteryAssessmentData';
import {
  normalizeExercise,
  normalizeExerciseType,
  evaluateExercise,
  CanonicalExerciseType,
} from '../src/services/ExerciseRegistry';
import { Exercise } from '../src/types';

interface AuditStats {
  totalExercises: number;
  byType: Record<string, number>;
  byCanonicalType: Record<string, number>;
  evaluationPassed: number;
  evaluationFailed: number;
  failures: { id: string; type: string; reason: string; exercise: Exercise }[];
}

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

async function runGlobalAudit() {
  console.log('============================================================');
  console.log('STARTING FULL AUDIT: EXERCISE ENGINE & ANSWER EVALUATION (1–270)');
  console.log('============================================================\n');

  const stats: AuditStats = {
    totalExercises: 0,
    byType: {},
    byCanonicalType: {},
    evaluationPassed: 0,
    evaluationFailed: 0,
    failures: [],
  };

  const allExercises: { source: string; ex: Exercise }[] = [];

  // 1. Collect all 270 lessons (Units 1–18)
  for (let i = 1; i <= 270; i++) {
    const lessonId = getLessonIdForNumber(i);
    const lesson = (await LessonService.getLessonById(lessonId)) || CurriculumService.getDetailedLesson(lessonId);
    if (!lesson) {
      console.error(`❌ Missing lesson: ${lessonId}`);
      continue;
    }

    (lesson.practiceExercises || []).forEach((ex) =>
      allExercises.push({ source: `${lessonId}:practice`, ex })
    );
    (lesson.reviewExercises || []).forEach((ex) =>
      allExercises.push({ source: `${lessonId}:review`, ex })
    );
    (lesson.assessmentExercises || []).forEach((ex) =>
      allExercises.push({ source: `${lessonId}:assessment`, ex })
    );
  }

  // 2. Collect Unit 1 Review & Assessment items
  UNIT_1_REVIEW_EXERCISES.forEach((ex) =>
    allExercises.push({ source: 'unit_1_review', ex })
  );
  UNIT_1_MASTERY_ASSESSMENT_EXERCISES.forEach((ex) =>
    allExercises.push({ source: 'unit_1_mastery_assessment', ex })
  );

  stats.totalExercises = allExercises.length;
  console.log(`Auditing total ${stats.totalExercises} exercises across curriculum (Lessons 1–270)...\n`);

  for (const item of allExercises) {
    const raw = item.ex;
    const rawType = raw.type || 'unknown';
    stats.byType[rawType] = (stats.byType[rawType] || 0) + 1;

    // Normalization test
    const normalized = normalizeExercise(raw);
    const canonical = normalizeExerciseType(normalized.type);
    stats.byCanonicalType[canonical] = (stats.byCanonicalType[canonical] || 0) + 1;

    // Verify Prompt exists
    if (!normalized.prompt || normalized.prompt.trim() === '') {
      stats.evaluationFailed++;
      stats.failures.push({
        id: normalized.id,
        type: normalized.type,
        reason: 'Empty prompt',
        exercise: normalized,
      });
      continue;
    }

    // Simulate intended correct answer according to normalized exercise structure
    let correctResponse: any = {};

    if (
      canonical === 'recognition' ||
      canonical === 'multiple_choice' ||
      canonical === 'listening' ||
      canonical === 'error_correction' ||
      canonical === 'dialogue_completion' ||
      canonical === 'reading' ||
      canonical === 'mediation'
    ) {
      if (normalized.options && normalized.options.length > 0) {
        const correctOpt = normalized.options.find((o) => o.isCorrect);
        if (correctOpt) {
          correctResponse = { selectedOptionId: correctOpt.id };
        } else {
          // If no option has isCorrect: true, check if target/correctAnswer exists
          const correctAns = normalized.correctAnswer || normalized.targetSentence;
          if (correctAns) {
            const matchingOpt = normalized.options.find(
              (o) => o.text.trim().toLowerCase() === String(correctAns).trim().toLowerCase()
            );
            if (matchingOpt) {
              correctResponse = { selectedOptionId: matchingOpt.id };
            }
          }
        }
      }
      if (!correctResponse.selectedOptionId) {
        const target = normalized.targetSentence || (Array.isArray(normalized.correctAnswer) ? normalized.correctAnswer[0] : normalized.correctAnswer) || '';
        correctResponse = { typedAnswer: target };
      }
    } else if (canonical === 'fill_blank') {
      if (normalized.options && normalized.options.length > 0) {
        const correctOpt = normalized.options.find((o) => o.isCorrect);
        if (correctOpt) {
          correctResponse = { selectedOptionId: correctOpt.id };
        }
      }
      if (!correctResponse.selectedOptionId) {
        const answer = Array.isArray(normalized.correctAnswer)
          ? normalized.correctAnswer[0]
          : normalized.correctAnswer || normalized.targetSentence || '';
        correctResponse = { typedAnswer: answer };
      }
    } else if (canonical === 'word_ordering' || canonical === 'sentence_construction' || canonical === 'reorder' || canonical === 'translate_tiles') {
      const target = normalized.targetSentence || (Array.isArray(normalized.correctAnswer) ? normalized.correctAnswer[0] : normalized.correctAnswer) || '';
      const words = target.replace(/[.,?!]/g, '').split(' ').filter(Boolean);
      correctResponse = { constructedWords: words, typedAnswer: target };
    } else if (canonical === 'translation' || canonical === 'listen_and_type' || canonical === 'listen_type' || canonical === 'writing') {
      const target = normalized.targetSentence || (Array.isArray(normalized.correctAnswer) ? normalized.correctAnswer[0] : normalized.correctAnswer) || '';
      correctResponse = { typedAnswer: target };
    } else if (canonical === 'speaking' || canonical === 'speak_sentence') {
      const target = normalized.targetSentence || normalized.audioText || (Array.isArray(normalized.correctAnswer) ? normalized.correctAnswer[0] : normalized.correctAnswer) || '';
      correctResponse = { spokenText: target, speechTranscript: target };
    } else if (canonical === 'personal_production') {
      correctResponse = {
        typedAnswer: normalized.targetSentence || normalized.correctAnswer || 'I am learning English in this lesson.',
        personalProduction: {
          name: 'Priya',
          country: 'India',
          city: 'Bangalore',
        },
      };
    } else if (canonical === 'match_pairs') {
      if (normalized.pairs && normalized.pairs.length > 0) {
        const matched: Record<string, string> = {};
        normalized.pairs.forEach(p => {
          matched[p.left] = p.right;
        });
        correctResponse = { matchedPairs: matched };
      } else {
        const pairsCount = normalized.options?.length || 4;
        const matched = Array.from({ length: pairsCount }, (_, idx) => ({
          leftId: `l_${idx}`,
          rightId: `r_${idx}`,
        }));
        correctResponse = { matchedPairs: matched };
      }
    }

    // Evaluate with Engine
    try {
      const result = evaluateExercise(normalized, correctResponse);
      if (result.isCorrect) {
        stats.evaluationPassed++;
      } else {
        stats.evaluationFailed++;
        stats.failures.push({
          id: normalized.id,
          type: normalized.type,
          reason: `Failed evaluation: matchedAnswer="${result.matchedAnswer}", expected="${result.correctAnswerDisplay}"`,
          exercise: normalized,
        });
      }
    } catch (err: any) {
      stats.evaluationFailed++;
      stats.failures.push({
        id: normalized.id,
        type: normalized.type,
        reason: `Exception thrown during evaluation: ${err.message}`,
        exercise: normalized,
      });
    }
  }

  console.log('============================================================');
  console.log('AUDIT RESULTS SUMMARY (LESSONS 1–270)');
  console.log('============================================================');
  console.log(`Total Exercises Audited: ${stats.totalExercises}`);
  console.log(`✅ Successfully Evaluated: ${stats.evaluationPassed}`);
  console.log(`❌ Failures Detected: ${stats.evaluationFailed}`);
  console.log('\n--- Exercises by Raw Type ---');
  console.table(stats.byType);
  console.log('\n--- Exercises by Canonical Type ---');
  console.table(stats.byCanonicalType);

  if (stats.failures.length > 0) {
    console.log('\n--- Failure Details (First 10) ---');
    console.log(stats.failures.slice(0, 10));
    process.exit(1);
  } else {
    console.log('\n🎉 100% EXERCISE ENGINE EVALUATION PASSED ON ALL 270 LESSONS!');
    process.exit(0);
  }
}

runGlobalAudit();
