import { CurriculumService } from '../src/services/CurriculumService';
import { LessonService } from '../src/services/LessonService';
import { CURIOSITY_UNITS } from '../src/data/curiosityCurriculum';
import { normalizeExercise, evaluateAnswer } from '../src/utils/exerciseUtils';
import { DetailedLessonData } from '../src/types';

async function verifyAllCurriculum() {
  console.log('============================================================');
  console.log('VERIFYING CURRICULUM HEALTH: ALL 135 LESSONS ACROSS UNITS 1-9');
  console.log('============================================================\n');

  const status = CurriculumService.getCurriculumStatus('en');
  console.log('Curriculum Status:', status);

  let totalLessonsChecked = 0;
  let totalVocab = 0;
  let totalChunks = 0;
  let totalGrammar = 0;
  let totalExercises = 0;
  let totalDialogues = 0;
  let errors = 0;

  for (let i = 1; i <= 135; i++) {
    let lessonId: string;
    if (i <= 15) lessonId = `lesson_a1_1_${i}`;
    else if (i <= 30) lessonId = `lesson_a1_2_${i}`;
    else if (i <= 45) lessonId = `lesson_a1_3_${i}`;
    else if (i <= 60) lessonId = `lesson_a1_4_${i}`;
    else if (i <= 75) lessonId = `lesson_a1_5_${i}`;
    else if (i <= 90) lessonId = `lesson_a1_6_${i}`;
    else if (i <= 105) lessonId = `lesson_a2_7_${i}`;
    else if (i <= 120) lessonId = `lesson_a2_8_${i}`;
    else lessonId = `lesson_a2_9_${i}`;

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

    // Check each exercise can be normalized
    for (const ex of allExercises) {
      try {
        const norm = normalizeExercise(ex);
        if (!norm.prompt && !norm.question) {
          console.error(`[ERROR] Exercise in ${lessonId} has neither prompt nor question:`, ex.id);
          errors++;
        }
      } catch (err) {
        console.error(`[ERROR] Exercise normalization failure in ${lessonId} (ex ${ex.id}):`, err);
        errors++;
      }
    }
  }

  // Check CURIOSITY_UNITS
  const unit9 = CURIOSITY_UNITS.find((u) => u.id === 'unit_a2_9');
  if (!unit9) {
    console.error('[ERROR] unit_a2_9 not found in CURIOSITY_UNITS');
    errors++;
  } else {
    console.log(`Unit 9 found in CURIOSITY_UNITS with ${unit9.lessons.length} lessons.`);
  }

  console.log('\n============================================================');
  console.log(`SUMMARY:`);
  console.log(`Total Lessons Verified: ${totalLessonsChecked}/135`);
  console.log(`Total Vocabulary Items: ${totalVocab}`);
  console.log(`Total Lexical Chunks: ${totalChunks}`);
  console.log(`Total Grammar Patterns: ${totalGrammar}`);
  console.log(`Total Dialogues: ${totalDialogues}`);
  console.log(`Total Exercises: ${totalExercises}`);
  console.log(`Total Errors Detected: ${errors}`);
  console.log('============================================================\n');

  if (errors > 0) {
    process.exit(1);
  }
}

verifyAllCurriculum();
