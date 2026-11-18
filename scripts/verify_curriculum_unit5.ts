import { CurriculumService } from '../src/services/CurriculumService';
import { LessonService } from '../src/services/LessonService';
import { CURIOSITY_UNITS } from '../src/data/curiosityCurriculum';
import { DetailedLessonData, Exercise } from '../src/types';
import { normalizeExerciseType, evaluateExercise, EXERCISE_EVALUATOR_REGISTRY } from '../src/services/ExerciseRegistry';

async function runComprehensiveAudit75() {
  console.log('============================================================');
  console.log('EXECUTING COMPREHENSIVE CURRICULUM AUDIT: UNITS 1–5 (LESSONS 1–75)');
  console.log('============================================================\n');

  // 1. LESSON REGISTRATION AUDIT
  const u1Lessons: DetailedLessonData[] = [];
  const u2Lessons: DetailedLessonData[] = [];
  const u3Lessons: DetailedLessonData[] = [];
  const u4Lessons: DetailedLessonData[] = [];
  const u5Lessons: DetailedLessonData[] = [];
  const allLessons: DetailedLessonData[] = [];
  const lessonIdsSeen = new Set<string>();
  let missingLessonIds = 0;
  let duplicateLessonIds = 0;

  for (let i = 1; i <= 75; i++) {
    const unitNum = i <= 15 ? 1 : i <= 30 ? 2 : i <= 45 ? 3 : i <= 60 ? 4 : 5;
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
      else if (unitNum === 4) u4Lessons.push(fromCurr);
      else u5Lessons.push(fromCurr);
    }
  }

  console.log(`Registration Audit:
  Unit 1: ${u1Lessons.length}/15 lessons
  Unit 2: ${u2Lessons.length}/15 lessons
  Unit 3: ${u3Lessons.length}/15 lessons
  Unit 4: ${u4Lessons.length}/15 lessons
  Unit 5: ${u5Lessons.length}/15 lessons
  Total: ${allLessons.length}/75 lessons
  Missing Lesson IDs: ${missingLessonIds}
  Duplicate Lesson IDs: ${duplicateLessonIds}
  `);

  // 2. 18-STAGE PEDAGOGICAL SEQUENCE AUDIT
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

  console.log(`18-Stage Architecture Verification:
  18/18 Stages Passed: ${pass18Count}/75
  Failed: ${fail18Count}
  `);

  // 3. EXERCISE INVENTORY
  let u1P = 0, u1R = 0, u1A = 0;
  let u2P = 0, u2R = 0, u2A = 0;
  let u3P = 0, u3R = 0, u3A = 0;
  let u4P = 0, u4R = 0, u4A = 0;
  let u5P = 0, u5R = 0, u5A = 0;

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
  for (const l of u5Lessons) {
    u5P += (l.practiceExercises || []).length;
    u5R += (l.reviewExercises || []).length;
    u5A += (l.assessmentExercises || []).length;
  }

  const grandTotal = (u1P + u1R + u1A) + (u2P + u2R + u2A) + (u3P + u3R + u3A) + (u4P + u4R + u4A) + (u5P + u5R + u5A);

  console.log(`Exercise Inventory:
  Unit 1: ${u1P} Practice + ${u1R} Review + ${u1A} Assessment = ${u1P + u1R + u1A}
  Unit 2: ${u2P} Practice + ${u2R} Review + ${u2A} Assessment = ${u2P + u2R + u2A}
  Unit 3: ${u3P} Practice + ${u3R} Review + ${u3A} Assessment = ${u3P + u3R + u3A}
  Unit 4: ${u4P} Practice + ${u4R} Review + ${u4A} Assessment = ${u4P + u4R + u4A}
  Unit 5: ${u5P} Practice + ${u5R} Review + ${u5A} Assessment = ${u5P + u5R + u5A}
  Grand Total Active Exercises: ${grandTotal}
  `);

  // 4. EXERCISE EVALUATOR & DATA QUALITY AUDIT
  let evaluatorPasses = 0;
  let evaluatorFails = 0;
  const evaluatorErrors: string[] = [];

  for (const l of allLessons) {
    const allEx = [
      ...(l.practiceExercises || []),
      ...(l.reviewExercises || []),
      ...(l.assessmentExercises || [])
    ];

    for (const ex of allEx) {
      const normType = normalizeExerciseType(ex.type);
      const def = EXERCISE_EVALUATOR_REGISTRY[normType];
      if (!def) {
        evaluatorFails++;
        evaluatorErrors.push(`[${l.id}] Exercise ${ex.id} has unrecognized type "${ex.type}"`);
        continue;
      }

      // Check essential fields
      if (!ex.prompt) {
        evaluatorFails++;
        evaluatorErrors.push(`[${l.id}] Exercise ${ex.id} (${normType}) missing prompt`);
      }

      if ((normType === 'listen_and_type' || normType === 'listening_match' || normType === 'speak_sentence') && !ex.audioText && !ex.targetSentence) {
        evaluatorFails++;
        evaluatorErrors.push(`[${l.id}] Audio/Speaking exercise ${ex.id} missing audioText and targetSentence`);
      }

      if ((normType === 'multiple_choice' || normType === 'picture_choice' || normType === 'dialogue_completion' || normType === 'fill_blank') && (!ex.options || ex.options.length === 0)) {
        evaluatorFails++;
        evaluatorErrors.push(`[${l.id}] Choice exercise ${ex.id} (${normType}) has no options`);
      }

      evaluatorPasses++;
    }
  }

  console.log(`Exercise Evaluator Audit:
  Passed Quality Checks: ${evaluatorPasses}
  Failed Quality Checks: ${evaluatorFails}
  `);

  if (evaluatorErrors.length > 0) {
    console.error('Errors found:');
    evaluatorErrors.slice(0, 10).forEach(e => console.error('  - ' + e));
  }

  // 5. CURIOSITY UNITS CHECK
  const units = CURIOSITY_UNITS.filter(u => u.id.startsWith('unit_a1_'));
  console.log(`Curiosity Units in A1: ${units.length} units`);
  units.forEach(u => {
    console.log(`  - ${u.id}: "${u.title}" (${u.lessons.length} lessons registered)`);
  });

  const finalStatus = (missingLessonIds === 0 && duplicateLessonIds === 0 && fail18Count === 0 && evaluatorFails === 0 && units.length === 5);
  console.log('\n============================================================');
  console.log(`FINAL AUDIT RESULT: ${finalStatus ? 'SUCCESS (ALL CRITERIA VERIFIED)' : 'FAILURE'}`);
  console.log('============================================================');

  if (!finalStatus) {
    process.exit(1);
  }
}

runComprehensiveAudit75().catch(err => {
  console.error(err);
  process.exit(1);
});
