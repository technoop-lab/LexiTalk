import { CurriculumService } from '../src/services/CurriculumService';
import { LessonService } from '../src/services/LessonService';
import { CURIOSITY_UNITS } from '../src/data/curiosityCurriculum';
import { normalizeExercise } from '../src/utils/exerciseUtils';

async function verifyAllCurriculum() {
  console.log('============================================================');
  console.log('VERIFYING CURRICULUM HEALTH: ALL 195 LESSONS ACROSS UNITS 1-13');
  console.log('============================================================\n');

  const status = CurriculumService.getCurriculumStatus('en');
  console.log('Curriculum Status:', status);

  let totalLessonsChecked = 0;
  let totalVocab = 0;
  let totalChunks = 0;
  let totalGrammar = 0;
  let totalExercises = 0;
  let totalDialogues = 0;
  let unit13Vocab = 0;
  let unit13Chunks = 0;
  let unit13Exercises = 0;
  let unit13Dialogues = 0;
  let errors = 0;

  for (let i = 1; i <= 195; i++) {
    let lessonId: string;
    if (i <= 15) lessonId = `lesson_a1_1_${i}`;
    else if (i <= 30) lessonId = `lesson_a1_2_${i}`;
    else if (i <= 45) lessonId = `lesson_a1_3_${i}`;
    else if (i <= 60) lessonId = `lesson_a1_4_${i}`;
    else if (i <= 75) lessonId = `lesson_a1_5_${i}`;
    else if (i <= 90) lessonId = `lesson_a1_6_${i}`;
    else if (i <= 105) lessonId = `lesson_a2_7_${i}`;
    else if (i <= 120) lessonId = `lesson_a2_8_${i}`;
    else if (i <= 135) lessonId = `lesson_a2_9_${i}`;
    else if (i <= 150) lessonId = `lesson_a2_10_${i}`;
    else if (i <= 165) lessonId = `lesson_a2_11_${i}`;
    else if (i <= 180) lessonId = `lesson_a2_12_${i}`;
    else lessonId = `lesson_a2_13_${i}`;

    const detailed = CurriculumService.getDetailedLesson(lessonId);
    const fromLessonService = await LessonService.getLessonById(lessonId);

    if (!detailed) {
      console.error(`[ERROR] Missing detailed lesson in CurriculumService for ${lessonId}`);
      errors++;
      continue;
    }

    if (!fromLessonService) {
      console.error(`[ERROR] Missing lesson in LessonService for ${lessonId}`);
      errors++;
      continue;
    }

    totalLessonsChecked++;
    totalVocab += detailed.vocabulary.length;
    totalChunks += detailed.expressions.length;
    totalGrammar += detailed.grammar?.patterns?.length || 0;
    totalDialogues += detailed.dialogues.length;

    const allExercises = [
      ...(detailed.practiceExercises || []),
      ...(detailed.reviewExercises || []),
      ...(detailed.assessmentExercises || []),
    ];
    totalExercises += allExercises.length;

    if (i >= 181 && i <= 195) {
      unit13Vocab += detailed.vocabulary.length;
      unit13Chunks += detailed.expressions.length;
      unit13Exercises += allExercises.length;
      unit13Dialogues += detailed.dialogues.length;
    }

    // Validate 18-stage definition
    const stages = CurriculumService.getLessonStageSequence(lessonId);
    if (!stages || stages.length !== 18) {
      console.error(`[ERROR] Lesson ${lessonId} does not have exactly 18 stages. Has: ${stages?.length}`);
      errors++;
    }

    // Validate exercises normalization
    for (const ex of allExercises) {
      try {
        const norm = normalizeExercise(ex);
        if (!norm || !norm.id || !norm.type) {
          console.error(`[ERROR] Exercise normalization failed for lesson ${lessonId}, exercise ${ex.id}`);
          errors++;
        }
      } catch (err) {
        console.error(`[ERROR] Normalization exception in ${lessonId}:`, err);
        errors++;
      }
    }
  }

  console.log('\n------------------------------------------------------------');
  console.log(`TOTAL PRODUCTION LESSONS CHECKED: ${totalLessonsChecked}/195`);
  console.log(`TOTAL VOCABULARY ITEMS:          ${totalVocab}`);
  console.log(`TOTAL PHRASAL / LEXICAL CHUNKS:  ${totalChunks}`);
  console.log(`TOTAL GRAMMAR PATTERNS:          ${totalGrammar}`);
  console.log(`TOTAL DIALOGUES:                 ${totalDialogues}`);
  console.log(`TOTAL EXERCISES (NORMALIZED):    ${totalExercises}`);
  console.log('------------------------------------------------------------');
  console.log(`UNIT 13 VOCABULARY (181-195):     ${unit13Vocab}`);
  console.log(`UNIT 13 CHUNKS (181-195):         ${unit13Chunks}`);
  console.log(`UNIT 13 DIALOGUES (181-195):      ${unit13Dialogues}`);
  console.log(`UNIT 13 EXERCISES (181-195):      ${unit13Exercises}`);
  console.log(`TOTAL VALIDATION ERRORS:         ${errors}`);
  console.log('------------------------------------------------------------\n');

  // Verify Unit in CURIOSITY_UNITS
  const unit13 = CURIOSITY_UNITS.find(u => u.id === 'unit_a2_13');
  if (!unit13) {
    console.error('[ERROR] unit_a2_13 not found in CURIOSITY_UNITS');
    errors++;
  } else {
    console.log(`✅ unit_a2_13 found in CURIOSITY_UNITS with ${unit13.lessons.length} lessons registered.`);
  }

  if (errors === 0) {
    console.log('🎉 UNIT 13 AND FULL A1-A2 CURRICULUM (195 LESSONS ACROSS 13 UNITS) VERIFIED 100% HEALTHY!');
  } else {
    console.error(`❌ FOUND ${errors} VALIDATION ERRORS.`);
    process.exit(1);
  }
}

verifyAllCurriculum().catch((err) => {
  console.error('Validation script fatal error:', err);
  process.exit(1);
});
