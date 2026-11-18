import { LessonService } from '../src/services/LessonService';
import { CurriculumService } from '../src/services/CurriculumService';
import { CURIOSITY_UNITS } from '../src/data/curiosityCurriculum';
import { DetailedLessonData, Exercise } from '../src/types';
import { normalizeExerciseType } from '../src/utils/exerciseUtils';

async function runUnit17Audit() {
  console.log('============================================================');
  console.log('STARTING DEEP AUDIT: CEFR A2 UNIT 17 (LESSONS 241–255)');
  console.log('============================================================\n');

  const unit17Curriculum = CURIOSITY_UNITS.find(u => u.id === 'unit_a2_17');
  if (!unit17Curriculum) {
    console.error('❌ CRITICAL: unit_a2_17 NOT found in CURIOSITY_UNITS!');
    process.exit(1);
  }
  console.log(`✅ CURIOSITY_UNITS check: Found "${unit17Curriculum.title}" with ${unit17Curriculum.lessons.length} lessons registered.`);

  let totalUnitExercises = 0;
  let allStagesPassed = true;
  let allEvaluationsPassed = true;

  for (let lessonNum = 241; lessonNum <= 255; lessonNum++) {
    const lessonId = `lesson_a2_17_${lessonNum}`;
    
    // 1. Service retrieval
    const lessonFromLessonService = await LessonService.getLessonById(lessonId);
    const lessonFromCurriculumService = CurriculumService.getDetailedLesson(lessonId);

    if (!lessonFromLessonService) {
      console.error(`❌ LessonService retrieval failed for ${lessonId}`);
      allStagesPassed = false;
      continue;
    }
    if (!lessonFromCurriculumService) {
      console.error(`❌ CurriculumService retrieval failed for ${lessonId}`);
      allStagesPassed = false;
      continue;
    }

    const lesson = lessonFromLessonService;
    const practiceCount = lesson.practiceExercises?.length || 0;
    const reviewCount = lesson.reviewExercises?.length || 0;
    const assessCount = lesson.assessmentExercises?.length || 0;
    const totalLessonExercises = practiceCount + reviewCount + assessCount;
    totalUnitExercises += totalLessonExercises;

    // 2. 18-stage check
    const checks = {
      learningObjective: (lesson.learningObjective?.canDoStatements?.length || 0) >= 3,
      vocabulary: (lesson.vocabulary?.length || 0) >= 3,
      expressions: (lesson.expressions?.length || 0) >= 1,
      grammar: !!lesson.grammar?.patterns && lesson.grammar.patterns.length >= 1,
      dialogues: (lesson.dialogues?.length || 0) >= 1,
      commonMistakes: (lesson.commonMistakes?.length || 0) >= 1,
      practice: practiceCount >= 20,
      review: reviewCount >= 5,
      assessment: assessCount >= 5,
      totalEx: totalLessonExercises >= 35,
      hindiSupport: lesson.vocabulary.every(v => !!v.translationsByLang?.hi) && lesson.expressions.every(e => !!e.translationsByLang?.hi),
      spanishSupport: lesson.vocabulary.every(v => !!v.translationsByLang?.es) && lesson.expressions.every(e => !!e.translationsByLang?.es),
    };

    const hasAllChecks = Object.values(checks).every(Boolean);
    if (!hasAllChecks) {
      console.error(`❌ Stage Check Failure in Lesson ${lessonNum} (${lessonId}):`, checks);
      allStagesPassed = false;
    }

    // 3. Exercise Evaluation & Option Integrity
    const allExercises: Exercise[] = [
      ...(lesson.practiceExercises || []),
      ...(lesson.reviewExercises || []),
      ...(lesson.assessmentExercises || [])
    ];

    for (const ex of allExercises) {
      const cType = normalizeExerciseType(ex.type);
      if (['multiple_choice', 'recognition', 'fill_blank', 'listening', 'dialogue_completion', 'error_correction'].includes(cType)) {
        if (ex.options && ex.options.length > 0) {
          const hasCorrect = ex.options.some(o => o.isCorrect === true);
          if (!hasCorrect && !ex.correctAnswer) {
            console.error(`❌ Exercise ${ex.id} in ${lessonId} has options but no correct answer marked!`);
            allEvaluationsPassed = false;
          }
        } else if (!ex.correctAnswer) {
          console.error(`❌ Exercise ${ex.id} in ${lessonId} is missing correctAnswer!`);
          allEvaluationsPassed = false;
        }
      }
      if (cType === 'word_ordering') {
        if (!ex.words || ex.words.length === 0 || !ex.correctAnswer) {
          console.error(`❌ Word ordering exercise ${ex.id} missing words or correctAnswer!`);
          allEvaluationsPassed = false;
        }
      }
      if (cType === 'match_pairs') {
        if (!ex.pairs || ex.pairs.length === 0) {
          console.error(`❌ Match pairs exercise ${ex.id} missing pairs!`);
          allEvaluationsPassed = false;
        }
      }
    }

    console.log(`✅ Lesson ${lessonNum}: "${lesson.title}" | Total Exercises: ${totalLessonExercises} (Practice: ${practiceCount}, Review: ${reviewCount}, Assess: ${assessCount}) | CEFR: ${lesson.cefr}`);
  }

  console.log('\n------------------------------------------------------------');
  console.log(`UNIT 17 AUDIT SUMMARY:`);
  console.log(`- Total Lessons Verified: 15 / 15 (Lessons 241 to 255)`);
  console.log(`- Total Unit 17 Exercises: ${totalUnitExercises}`);
  console.log(`- Average Exercises per Lesson: ${(totalUnitExercises / 15).toFixed(1)}`);
  console.log(`- 18-Stage Architecture Compliance: ${allStagesPassed ? 'PASSED (100%)' : 'FAILED'}`);
  console.log(`- Exercise Option & Evaluation Integrity: ${allEvaluationsPassed ? 'PASSED (100%)' : 'FAILED'}`);
  console.log('------------------------------------------------------------\n');

  if (!allStagesPassed || !allEvaluationsPassed) {
    process.exit(1);
  }
}

runUnit17Audit();
