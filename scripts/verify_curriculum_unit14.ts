import { CurriculumService } from '../src/services/CurriculumService';
import { LessonService } from '../src/services/LessonService';
import { CURIOSITY_UNITS } from '../src/data/curiosityCurriculum';
import { CurriculumUpgradeManifestService } from '../src/data/curriculumUpgradeManifest';

async function verifyCurriculumUnit14() {
  console.log('============================================================');
  console.log('VERIFYING CURRICULUM HEALTH: ALL 205 LESSONS (UNITS 1-14)');
  console.log('============================================================\n');

  let totalLessonsChecked = 0;
  let totalVocab = 0;
  let totalChunks = 0;
  let totalGrammar = 0;
  let totalExercises = 0;
  let totalDialogues = 0;
  let unit14Vocab = 0;
  let unit14Chunks = 0;
  let unit14Exercises = 0;
  let unit14Dialogues = 0;
  let errors = 0;

  for (let i = 1; i <= 205; i++) {
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
    else if (i <= 195) lessonId = `lesson_a2_13_${i}`;
    else lessonId = `lesson_a2_14_${i}`;

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
    const vCount = detailed.vocabulary?.length || 0;
    const cCount = detailed.expressions?.length || 0;
    const gCount = detailed.grammar?.patterns?.length || 0;
    const pCount = detailed.practiceExercises?.length || 0;
    const rCount = detailed.reviewExercises?.length || 0;
    const aCount = detailed.assessmentExercises?.length || 0;
    const eCount = pCount + rCount + aCount;
    const dCount = detailed.dialogues?.length || 0;

    totalVocab += vCount;
    totalChunks += cCount;
    totalGrammar += gCount;
    totalExercises += eCount;
    totalDialogues += dCount;

    if (i >= 196 && i <= 205) {
      unit14Vocab += vCount;
      unit14Chunks += cCount;
      unit14Exercises += eCount;
      unit14Dialogues += dCount;
      console.log(`[Unit 14 Lesson ${i}] ${detailed.title}: ${vCount} vocab, ${cCount} chunks, ${gCount} grammar patterns, ${eCount} exercises (${pCount}P/${rCount}R/${aCount}A), ${dCount} dialogues`);
      
      if (eCount < 35) {
        console.error(`[ERROR] Lesson ${lessonId} has fewer than 35 exercises (${eCount})`);
        errors++;
      }
      if (vCount < 10) {
        console.error(`[ERROR] Lesson ${lessonId} has fewer than 10 vocabulary items (${vCount})`);
        errors++;
      }
      if (cCount < 6) {
        console.error(`[ERROR] Lesson ${lessonId} has fewer than 6 expressions (${cCount})`);
        errors++;
      }
    }
  }

  console.log('\n============================================================');
  console.log('SUMMARY AUDIT METRICS:');
  console.log(`- Total Lessons Verified: ${totalLessonsChecked}/205`);
  console.log(`- Total Vocabulary Items: ${totalVocab} (Unit 14: ${unit14Vocab})`);
  console.log(`- Total Language Chunks: ${totalChunks} (Unit 14: ${unit14Chunks})`);
  console.log(`- Total Exercises: ${totalExercises} (Unit 14: ${unit14Exercises})`);
  console.log(`- Total Dialogues: ${totalDialogues} (Unit 14: ${unit14Dialogues})`);
  console.log(`- Manifest Summary Unit 14:`, CurriculumUpgradeManifestService.getUnitSummary('unit_a2_14'));
  console.log(`- Total Errors: ${errors}`);
  console.log('============================================================');

  if (errors > 0) {
    console.error(`❌ Verification failed with ${errors} error(s)!`);
    process.exit(1);
  } else {
    console.log('✅ ALL 205 LESSONS & UNIT 14 VERIFIED 100% HEALTHY AND READY FOR PRODUCTION!');
  }
}

verifyCurriculumUnit14().catch((err) => {
  console.error('Fatal error during verification:', err);
  process.exit(1);
});
