import { CurriculumService } from '../src/services/CurriculumService';
import { LessonService } from '../src/services/LessonService';
import { CURIOSITY_UNITS } from '../src/data/curiosityCurriculum';
import { DetailedLessonData, Exercise } from '../src/types';
import { normalizeExerciseType } from '../src/utils/exerciseUtils';
import { ALL_A2_LESSON_IDS, ALL_CURRICULUM_LESSON_IDS } from '../src/services/ProgressService';
import { CurriculumUpgradeManifestService } from '../src/data/curriculumUpgradeManifest';

async function runUnit18Audit() {
  console.log('================================================================');
  console.log('CURIOSITY ENGLISH ACADEMY: A2 UNIT 18 DEEP VERIFICATION (LESSONS 256–270)');
  console.log('================================================================\n');

  // 1. Check Unit 18 Definition in CURIOSITY_UNITS
  console.log('--- 1. UNIT 18 REGISTRATION AUDIT ---');
  const unit18 = CURIOSITY_UNITS.find((u) => u.id === 'unit_a2_18');
  if (!unit18) {
    throw new Error('CRITICAL ERROR: unit_a2_18 not found in CURIOSITY_UNITS');
  }
  console.log(`Unit 18 Title: ${unit18.title}`);
  console.log(`Unit 18 CEFR: ${unit18.cefr}, Unit Number: ${unit18.unitNumber}`);
  console.log(`Unit 18 Lessons in Curriculum Tree: ${unit18.lessons.length}`);

  let registrationErrors = 0;
  const lessons: DetailedLessonData[] = [];

  for (let i = 256; i <= 270; i++) {
    const lessonId = `lesson_a2_18_${i}`;
    const inUnitTree = unit18.lessons.some((l) => l.id === lessonId);
    const curriculumLesson = CurriculumService.getDetailedLesson(lessonId);
    const lessonServiceLesson = await LessonService.getLessonById(lessonId);

    if (!inUnitTree) {
      console.error(`ERROR: ${lessonId} missing in CURIOSITY_UNITS unit_a2_18 lessons list`);
      registrationErrors++;
    }
    if (!curriculumLesson) {
      console.error(`ERROR: ${lessonId} missing in CurriculumService registry`);
      registrationErrors++;
    }
    if (!lessonServiceLesson) {
      console.error(`ERROR: ${lessonId} missing in LessonService registry`);
      registrationErrors++;
    }

    if (curriculumLesson) {
      lessons.push(curriculumLesson);
    }
  }

  console.log(`Registration Audit: ${registrationErrors === 0 ? 'PASS (15/15 lessons correctly registered)' : 'FAIL'}`);

  // 2. Exercise & Component Audits
  console.log('\n--- 2. EXERCISE INVENTORY & STRUCTURE AUDIT ---');
  let totalPractice = 0;
  let totalReview = 0;
  let totalAssessment = 0;
  let totalVocab = 0;
  let totalMistakes = 0;
  const seenExerciseIds = new Set<string>();
  let duplicateIds = 0;
  let missingPrompts = 0;
  let invalidOptions = 0;
  const typeCounts: Record<string, number> = {};

  for (const l of lessons) {
    const p = l.practiceExercises.length;
    const r = l.reviewExercises.length;
    const a = l.assessmentExercises.length;
    const totalEx = p + r + a;
    totalPractice += p;
    totalReview += r;
    totalAssessment += a;
    totalVocab += l.vocabulary.length;
    totalMistakes += (l.commonMistakes || []).length;

    console.log(`[${l.id}] "${l.title}": Vocab=${l.vocabulary.length}, Practice=${p}, Review=${r}, Assessment=${a}, Total Ex=${totalEx}`);

    const allExercises: Exercise[] = [...l.practiceExercises, ...l.reviewExercises, ...l.assessmentExercises];
    for (const ex of allExercises) {
      if (seenExerciseIds.has(ex.id)) {
        console.error(`DUPLICATE ID: ${ex.id} in ${l.id}`);
        duplicateIds++;
      }
      seenExerciseIds.add(ex.id);

      if (!ex.prompt || ex.prompt.trim() === '') {
        console.error(`MISSING PROMPT in ${l.id} ex ${ex.id}`);
        missingPrompts++;
      }

      const cType = normalizeExerciseType(ex.type);
      typeCounts[cType] = (typeCounts[cType] || 0) + 1;

      if (['multiple_choice', 'fill_blank', 'error_correction', 'dialogue_completion'].includes(cType)) {
        if (ex.options && ex.options.length > 0) {
          const hasCorrect = ex.options.some((o) => o.isCorrect === true);
          if (!hasCorrect && !ex.correctAnswer) {
            console.error(`MISSING CORRECT OPTION in ${l.id} ex ${ex.id}`);
            invalidOptions++;
          }
        }
      }
    }
  }

  console.log(`\nExercise Summary for Unit 18:`);
  console.log(`- Total Practice Exercises:   ${totalPractice}`);
  console.log(`- Total Review Exercises:     ${totalReview}`);
  console.log(`- Total Assessment Exercises: ${totalAssessment}`);
  console.log(`- Total Unit 18 Exercises:    ${totalPractice + totalReview + totalAssessment}`);
  console.log(`- Total Vocabulary Items:     ${totalVocab}`);
  console.log(`- Exercise Types Breakdown:`);
  for (const [type, count] of Object.entries(typeCounts)) {
    console.log(`    ${type.padEnd(25)} : ${count}`);
  }

  // 3. ProgressService Checks
  console.log('\n--- 3. PROGRESS SERVICE INTEGRATION ---');
  console.log(`Total A2 Lesson IDs in ALL_A2_LESSON_IDS: ${ALL_A2_LESSON_IDS.length} (Expected: 180)`);
  console.log(`Total Curriculum Lesson IDs in ALL_CURRICULUM_LESSON_IDS: ${ALL_CURRICULUM_LESSON_IDS.length} (Expected: 270)`);

  const hasAllUnit18InA2 = lessons.every((l) => ALL_A2_LESSON_IDS.includes(l.id));
  const hasAllUnit18InCurriculum = lessons.every((l) => ALL_CURRICULUM_LESSON_IDS.includes(l.id));
  console.log(`ALL_A2_LESSON_IDS includes all Unit 18: ${hasAllUnit18InA2 ? 'PASS' : 'FAIL'}`);
  console.log(`ALL_CURRICULUM_LESSON_IDS includes all Unit 18: ${hasAllUnit18InCurriculum ? 'PASS' : 'FAIL'}`);

  // 4. Manifest Check
  console.log('\n--- 4. UPGRADE MANIFEST INTEGRATION ---');
  const unit18Summary = CurriculumUpgradeManifestService.getUnitSummary('unit_a2_18');
  console.log(`Unit 18 Manifest Summary:`, unit18Summary);

  if (duplicateIds === 0 && missingPrompts === 0 && invalidOptions === 0 && registrationErrors === 0) {
    console.log('\n================================================================');
    console.log('UNIT 18 AUDIT SUCCESS: 100% CLEAN WITH 0 DEFECTS');
    console.log('================================================================');
  } else {
    console.error('\nAUDIT FAILED with defects!');
  }
}

runUnit18Audit();
