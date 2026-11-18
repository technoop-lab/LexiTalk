import { CurriculumService } from '../src/services/CurriculumService';
import { LessonService } from '../src/services/LessonService';
import { CURIOSITY_UNITS } from '../src/data/curiosityCurriculum';
import { DetailedLessonData, Exercise } from '../src/types';
import { normalizeExerciseType } from '../src/utils/exerciseUtils';

async function runUnit12DeepQA() {
  console.log('================================================================');
  console.log('CURIOSITY ENGLISH ACADEMY: UNIT 12 DEEP QA (LESSONS 166–180)');
  console.log('================================================================\n');

  const unit12 = CURIOSITY_UNITS.find(u => u.id === 'unit_a2_12');
  if (!unit12) {
    console.error('CRITICAL: unit_a2_12 not found in CURIOSITY_UNITS!');
    process.exit(1);
  }

  console.log(`Unit 12 Title: "${unit12.title}"`);
  console.log(`Unit 12 Lessons Count in CURIOSITY_UNITS: ${unit12.lessons.length}`);
  console.log(`Guidebook: ${unit12.guidebook ? 'PRESENT' : 'MISSING'}`);
  console.log(`Guidebook Hindi translation: ${unit12.guidebook?.rulesByLang?.hi ? 'PRESENT' : 'MISSING'}`);

  let errors = 0;
  let warnings = 0;

  for (let i = 166; i <= 180; i++) {
    const lessonId = `lesson_a2_12_${i}`;
    const detailed = CurriculumService.getDetailedLesson(lessonId);
    const serviceLesson = await LessonService.getLessonById(lessonId);
    const unitManifestEntry = unit12.lessons.find(l => l.id === lessonId);

    console.log(`\n--- Auditing Lesson ${i}: [${lessonId}] ---`);
    if (!detailed) {
      console.error(`[ERROR] Missing detailed lesson in CurriculumService for ${lessonId}`);
      errors++;
      continue;
    }
    if (!serviceLesson) {
      console.error(`[ERROR] Missing lesson in LessonService for ${lessonId}`);
      errors++;
      continue;
    }
    if (!unitManifestEntry) {
      console.error(`[ERROR] Missing lesson entry in CURIOSITY_UNITS for ${lessonId}`);
      errors++;
      continue;
    }

    console.log(`  Title: "${detailed.title}"`);
    console.log(`  CEFR: ${detailed.cefr}`);
    console.log(`  Objectives: ${detailed.learningObjective?.canDoStatements?.length || 0} can-do statements`);
    console.log(`  Vocab: ${detailed.vocabulary.length} items`);
    console.log(`  Expressions: ${detailed.expressions.length} items`);
    console.log(`  Grammar: ${detailed.grammar?.patterns?.length || 0} patterns`);
    console.log(`  Dialogues: ${detailed.dialogues.length} dialogues`);
    console.log(`  Common Mistakes: ${detailed.commonMistakes?.length || 0}`);
    console.log(`  Speaking Activities: ${detailed.speakingActivities?.length || 0}`);

    // Verify 18 stages
    const stages = CurriculumService.getLessonStageSequence(lessonId);
    if (!stages || stages.length !== 18) {
      console.error(`  [ERROR] Lesson does not have 18 stages. Has: ${stages?.length}`);
      errors++;
    } else {
      console.log(`  18-Stage Sequence: VERIFIED`);
    }

    const allExercises: Exercise[] = [
      ...(detailed.practiceExercises || []),
      ...(detailed.reviewExercises || []),
      ...(detailed.assessmentExercises || []),
    ];
    console.log(`  Total Exercises: ${allExercises.length}`);

    // Validate exercises
    for (const ex of allExercises) {
      const cType = normalizeExerciseType(ex.type);
      if (!ex.id) {
        console.error(`  [ERROR] Exercise missing id in ${lessonId}`);
        errors++;
      }

      // Check choice-based exercises
      if (['multiple_choice', 'recognition', 'fill_blank', 'listening', 'dialogue_completion', 'error_correction'].includes(cType)) {
        if (!ex.options || ex.options.length === 0) {
          if (!ex.correctAnswer) {
            console.error(`  [ERROR] Exercise ${ex.id} (${cType}) has neither options nor correctAnswer`);
            errors++;
          }
        } else {
          const correctCount = ex.options.filter(o => o.isCorrect === true).length;
          if (correctCount === 0 && !ex.correctAnswer) {
            console.error(`  [ERROR] Exercise ${ex.id} (${cType}) has no option marked isCorrect`);
            errors++;
          }
        }
      }

      // Check word ordering exercises
      if (['word_ordering', 'sentence_construction', 'translation'].includes(cType)) {
        if (ex.targetSentence && ex.wordBank && ex.wordBank.length > 0) {
          const targetWords = ex.targetSentence.toLowerCase().replace(/[^a-z0-9' -]/gi, '').split(/\s+/).filter(Boolean);
          const bankWords = ex.wordBank.map(w => w.toLowerCase().replace(/[^a-z0-9' -]/gi, '').trim());

          const bankCopy = [...bankWords];
          const missingInBank: string[] = [];

          for (const tw of targetWords) {
            const idx = bankCopy.indexOf(tw);
            if (idx !== -1) {
              bankCopy.splice(idx, 1);
            } else {
              missingInBank.push(tw);
            }
          }

          if (missingInBank.length > 0) {
            console.error(`  [ERROR] Exercise ${ex.id} wordBank missing target words: [${missingInBank.join(', ')}] for "${ex.targetSentence}"`);
            errors++;
          }
        }
      }
    }
  }

  console.log('\n================================================================');
  console.log(`UNIT 12 DEEP QA COMPLETE: ${errors} ERRORS, ${warnings} WARNINGS`);
  console.log('================================================================');

  if (errors > 0) {
    process.exit(1);
  }
}

runUnit12DeepQA();
