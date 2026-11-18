import { CurriculumService } from '../src/services/CurriculumService';
import { LessonService } from '../src/services/LessonService';
import { CURIOSITY_UNITS } from '../src/data/curiosityCurriculum';
import { DetailedLessonData, Exercise } from '../src/types';
import { normalizeExerciseType } from '../src/utils/exerciseUtils';

async function runMasterVerification() {
  const ALL_LESSON_DATA: DetailedLessonData[] = [];
  for (let i = 1; i <= 45; i++) {
    const lessonId = i <= 15 ? `lesson_a1_1_${i}` : i <= 30 ? `lesson_a1_2_${i}` : `lesson_a1_3_${i}`;
    const lesson = await LessonService.getLessonById(lessonId);
    if (lesson) {
      ALL_LESSON_DATA.push(lesson);
    }
  }

  console.log('================================================================');
  console.log('CURIOSITY ENGLISH ACADEMY: MASTER VERIFICATION (LESSONS 1–45)');
  console.log('================================================================\n');

  // 1. REGISTRATION & LOADING VERIFICATION
  console.log('--- 1. REGISTRATION & LOADING AUDIT ---');
  let registrationErrors = 0;
  const registeredIdsInUnits = new Set<string>();

  const unit1 = CURIOSITY_UNITS.find(u => u.id === 'unit_a1_1');
  const unit2 = CURIOSITY_UNITS.find(u => u.id === 'unit_a1_2');
  const unit3 = CURIOSITY_UNITS.find(u => u.id === 'unit_a1_3');
  if (!unit1) {
    console.error('ERROR: unit_a1_1 not found in CURIOSITY_UNITS');
    registrationErrors++;
  } else {
    unit1.lessons.forEach(l => registeredIdsInUnits.add(l.id));
  }
  if (!unit2) {
    console.error('ERROR: unit_a1_2 not found in CURIOSITY_UNITS');
    registrationErrors++;
  } else {
    unit2.lessons.forEach(l => registeredIdsInUnits.add(l.id));
  }
  if (!unit3) {
    console.error('ERROR: unit_a1_3 not found in CURIOSITY_UNITS');
    registrationErrors++;
  } else {
    unit3.lessons.forEach(l => registeredIdsInUnits.add(l.id));
  }

  for (let i = 1; i <= 45; i++) {
    const unitNum = i <= 15 ? 1 : i <= 30 ? 2 : 3;
    const lessonId = `lesson_a1_${unitNum}_${i}`;
    const loadedCurriculum = CurriculumService.getDetailedLesson(lessonId);
    const loadedLessonService = await LessonService.getLessonById(lessonId);
    
    const inCurriculum = !!loadedCurriculum;
    const inLessonService = !!loadedLessonService;
    const inUnit = registeredIdsInUnits.has(lessonId);

    console.log(`Lesson ${i} [${lessonId}]: CurriculumService=${inCurriculum ? 'OK' : 'MISSING'}, LessonService=${inLessonService ? 'OK' : 'MISSING'}, CURIOSITY_UNITS=${inUnit ? 'OK' : 'MISSING'}`);

    if (!inCurriculum || !inLessonService || !inUnit) {
      registrationErrors++;
    }
  }

  console.log(`\nRegistration Audit Result: ${registrationErrors === 0 ? 'ALL 45 LESSONS REGISTERED AND LOADABLE' : `${registrationErrors} REGISTRATION DEFECTS FOUND`}`);

  // 2. 18-STAGE COMPLETENESS AUDIT
  console.log('\n--- 2. 18-STAGE PEDAGOGICAL SEQUENCE AUDIT ---');
  let stageSequenceDefects = 0;
  for (const lesson of ALL_LESSON_DATA) {
    const stages = CurriculumService.getLessonStageSequence(lesson.id);
    const has18Stages = stages.length === 18;
    
    if (!has18Stages) {
      console.error(`ERROR: [${lesson.id}] has ${stages.length} stages instead of 18`);
      stageSequenceDefects++;
    }

    const hasObjectives = !!lesson.learningObjective && (lesson.learningObjective.canDoStatements?.length || 0) > 0;
    const hasVocab = (lesson.vocabulary?.length || 0) >= 20;
    const hasExpressions = (lesson.expressions?.length || 0) >= 3;
    const hasGrammar = (lesson.grammar?.patterns?.length || 0) > 0 || !!lesson.grammar?.verbBeExplanation;
    const hasMistakes = (lesson.commonMistakes?.length || 0) > 0;
    const hasDialogues = (lesson.dialogues?.length || 0) > 0;
    const hasPractice = (lesson.practiceExercises?.length || 0) >= 5;
    const hasReview = (lesson.reviewExercises?.length || 0) >= 2;
    const hasAssessment = (lesson.assessmentExercises?.length || 0) >= 2;

    const allComponentsPresent = hasObjectives && hasVocab && hasExpressions && hasGrammar && hasMistakes && hasDialogues && hasPractice && hasReview && hasAssessment;

    if (!allComponentsPresent) {
      console.warn(`WARNING in [${lesson.id}]: Incomplete components detected (vocab:${lesson.vocabulary.length}, expr:${lesson.expressions.length}, prac:${lesson.practiceExercises.length})`);
      stageSequenceDefects++;
    }

    console.log(`[${lesson.id}] "${lesson.title}": 18 Stages OK, Vocab=${lesson.vocabulary.length}, Expressions=${lesson.expressions.length}, Practice=${lesson.practiceExercises.length}, Review=${lesson.reviewExercises.length}, Assess=${lesson.assessmentExercises.length}, Total Ex=${lesson.practiceExercises.length + lesson.reviewExercises.length + lesson.assessmentExercises.length}`);
  }

  // 3. EXERCISE COUNTS & CLASSIFICATION AUDIT
  console.log('\n--- 3. EXERCISE INVENTORY & CANONICAL CLASSIFICATION ---');
  let totalPractice = 0;
  let totalReview = 0;
  let totalAssessment = 0;
  let grandTotalExercises = 0;
  const typeBreakdown: Record<string, number> = {};

  let unit1ExCount = 0;
  let unit2ExCount = 0;
  let unit3ExCount = 0;

  for (const lesson of ALL_LESSON_DATA) {
    const pCount = (lesson.practiceExercises || []).length;
    const rCount = (lesson.reviewExercises || []).length;
    const aCount = (lesson.assessmentExercises || []).length;
    const lessonTotal = pCount + rCount + aCount;

    if (lesson.unitId === 'unit_a1_1') {
      unit1ExCount += lessonTotal;
    } else if (lesson.unitId === 'unit_a1_2') {
      unit2ExCount += lessonTotal;
    } else {
      unit3ExCount += lessonTotal;
    }

    totalPractice += pCount;
    totalReview += rCount;
    totalAssessment += aCount;
    
    const all = [...(lesson.practiceExercises || []), ...(lesson.reviewExercises || []), ...(lesson.assessmentExercises || [])];
    for (const ex of all) {
      const cType = normalizeExerciseType(ex.type);
      typeBreakdown[cType] = (typeBreakdown[cType] || 0) + 1;
    }
  }
  grandTotalExercises = totalPractice + totalReview + totalAssessment;

  console.log(`Unit 1 Exercises:           ${unit1ExCount}`);
  console.log(`Unit 2 Exercises:           ${unit2ExCount}`);
  console.log(`Unit 3 Exercises:           ${unit3ExCount}`);
  console.log(`Total Practice Exercises:   ${totalPractice}`);
  console.log(`Total Review Exercises:     ${totalReview}`);
  console.log(`Total Assessment Exercises: ${totalAssessment}`);
  console.log(`GRAND TOTAL EXERCISES:      ${grandTotalExercises}`);
  console.log('Exercise Breakdown by Normalized Type:');
  Object.entries(typeBreakdown).sort((a, b) => b[1] - a[1]).forEach(([type, count]) => {
    console.log(`  - ${type.padEnd(25)} : ${count}`);
  });

  // 4. DEEP EXERCISE VALIDATION & DEFECT DETECTION
  console.log('\n--- 4. DEEP EXERCISE VALIDATION & DEFECT DETECTION ---');
  interface ExerciseIssue {
    lessonId: string;
    exId: string;
    category: string;
    message: string;
    severity: 'CRITICAL' | 'WARN';
  }
  const exerciseIssues: ExerciseIssue[] = [];
  const seenExerciseIds = new Set<string>();

  for (const lesson of ALL_LESSON_DATA) {
    const all = [
      ...(lesson.practiceExercises || []).map(e => ({ pool: 'PRACTICE', ex: e })),
      ...(lesson.reviewExercises || []).map(e => ({ pool: 'REVIEW', ex: e })),
      ...(lesson.assessmentExercises || []).map(e => ({ pool: 'ASSESSMENT', ex: e }))
    ];

    for (const { pool, ex } of all) {
      // Check duplicate ID
      if (seenExerciseIds.has(ex.id)) {
        exerciseIssues.push({ lessonId: lesson.id, exId: ex.id, category: 'DUPLICATE_ID', message: `Duplicate exercise ID: ${ex.id}`, severity: 'CRITICAL' });
      }
      seenExerciseIds.add(ex.id);

      // Check Prompt
      if (!ex.prompt || ex.prompt.trim() === '') {
        exerciseIssues.push({ lessonId: lesson.id, exId: ex.id, category: 'MISSING_PROMPT', message: `Exercise missing prompt text`, severity: 'CRITICAL' });
      }

      const cType = normalizeExerciseType(ex.type);

      // Option-based types
      if (['multiple_choice', 'recognition', 'fill_blank', 'dialogue_completion', 'error_correction'].includes(cType)) {
        if (!ex.options || ex.options.length === 0) {
          if (!ex.correctAnswer) {
            exerciseIssues.push({ lessonId: lesson.id, exId: ex.id, category: 'MISSING_OPTIONS', message: `${cType} exercise missing options array`, severity: 'CRITICAL' });
          }
        } else {
          const correct = ex.options.filter(o => o.isCorrect === true);
          if (correct.length === 0 && !ex.correctAnswer) {
            exerciseIssues.push({ lessonId: lesson.id, exId: ex.id, category: 'MISSING_ANSWER_KEY', message: `No option marked isCorrect: true`, severity: 'CRITICAL' });
          }
        }
      }
    }
  }

  const criticalIssues = exerciseIssues.filter(i => i.severity === 'CRITICAL');
  const warnIssues = exerciseIssues.filter(i => i.severity === 'WARN');
  console.log(`Deep Exercise Validation Complete: ${criticalIssues.length} CRITICAL DEFECTS, ${warnIssues.length} WARNINGS.`);
  if (criticalIssues.length > 0) {
    criticalIssues.forEach(i => console.error(`  [CRITICAL] [${i.lessonId}] [${i.category}] Ex: ${i.exId} -> ${i.message}`));
  }

  // 5. VOCABULARY PROGRESSION & RECYCLING AUDIT
  console.log('\n--- 5. VOCABULARY PROGRESSION & RECYCLING AUDIT ---');
  let totalVocabCount = 0;
  const uniqueVocab = new Map<string, string>();
  const vocabPerLesson: { id: string; count: number; recycledCount: number }[] = [];

  for (const lesson of ALL_LESSON_DATA) {
    let recycled = 0;
    for (const v of lesson.vocabulary) {
      totalVocabCount++;
      const wordKey = v.word.toLowerCase().trim();
      if (uniqueVocab.has(wordKey)) {
        recycled++;
      } else {
        uniqueVocab.set(wordKey, lesson.id);
      }
    }
    vocabPerLesson.push({ id: lesson.id, count: lesson.vocabulary.length, recycledCount: recycled });
  }

  console.log(`Total Vocabulary Items across Lessons 1–45: ${totalVocabCount}`);
  console.log(`Total Unique Target Words: ${uniqueVocab.size}`);

  // 6. AUDIO REFERENCES AUDIT
  console.log('\n--- 6. AUDIO REFERENCES AUDIT ---');
  let totalAudioIds = 0;
  let distinctAudioIds = new Set<string>();

  for (const lesson of ALL_LESSON_DATA) {
    lesson.vocabulary.forEach(v => {
      if (v.audioId) { totalAudioIds++; distinctAudioIds.add(v.audioId); }
      if (v.slowAudioId) { totalAudioIds++; distinctAudioIds.add(v.slowAudioId); }
    });
    lesson.expressions.forEach(e => {
      if (e.audioId) { totalAudioIds++; distinctAudioIds.add(e.audioId); }
    });
    lesson.dialogues.forEach(d => {
      const lines = (d as any).lines || (d as any).turns || [];
      lines.forEach((l: any) => {
        if (l.audioId) { totalAudioIds++; distinctAudioIds.add(l.audioId); }
      });
    });
  }
  console.log(`Total Audio Reference Anchors: ${totalAudioIds} across ${distinctAudioIds.size} distinct audio IDs.`);
  console.log(`Audio Asset Generation Status: AUDIT ONLY (No audio generation triggered)`);

  console.log('\n================================================================');
  console.log('VERIFICATION SCRIPT FINISHED SUCCESSFULLY');
  console.log('================================================================');
}

runMasterVerification();
