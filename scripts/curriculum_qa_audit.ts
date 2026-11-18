import { LESSON_A1_1_1_DATA } from '../src/data/lessons/lesson_a1_1_1';
import { LESSON_A1_1_2_DATA } from '../src/data/lessons/lesson_a1_1_2';
import { LESSON_A1_1_3_DATA } from '../src/data/lessons/lesson_a1_1_3';
import { LESSON_A1_1_4_DATA } from '../src/data/lessons/lesson_a1_1_4';
import { LESSON_A1_1_5_DATA } from '../src/data/lessons/lesson_a1_1_5';
import { LESSON_A1_1_6_DATA } from '../src/data/lessons/lesson_a1_1_6';
import { LESSON_A1_1_7_DATA } from '../src/data/lessons/lesson_a1_1_7';
import { LESSON_A1_1_8_DATA } from '../src/data/lessons/lesson_a1_1_8';
import { LESSON_A1_1_9_DATA } from '../src/data/lessons/lesson_a1_1_9';
import { LESSON_A1_1_10_DATA } from '../src/data/lessons/lesson_a1_1_10';
import { LESSON_A1_1_11_DATA } from '../src/data/lessons/lesson_a1_1_11';
import { LESSON_A1_1_12_DATA } from '../src/data/lessons/lesson_a1_1_12';
import { LESSON_A1_1_13_DATA } from '../src/data/lessons/lesson_a1_1_13';
import { LESSON_A1_1_14_DATA } from '../src/data/lessons/lesson_a1_1_14';
import { LESSON_A1_1_15_DATA } from '../src/data/lessons/lesson_a1_1_15';
import { DetailedLessonData, Exercise } from '../src/types';
import { normalizeExercise, normalizeExerciseType, CanonicalExerciseType } from '../src/utils/exerciseUtils';

const LESSONS: DetailedLessonData[] = [
  LESSON_A1_1_1_DATA,
  LESSON_A1_1_2_DATA,
  LESSON_A1_1_3_DATA,
  LESSON_A1_1_4_DATA,
  LESSON_A1_1_5_DATA,
  LESSON_A1_1_6_DATA,
  LESSON_A1_1_7_DATA,
  LESSON_A1_1_8_DATA,
  LESSON_A1_1_9_DATA,
  LESSON_A1_1_10_DATA,
  LESSON_A1_1_11_DATA,
  LESSON_A1_1_12_DATA,
  LESSON_A1_1_13_DATA,
  LESSON_A1_1_14_DATA,
  LESSON_A1_1_15_DATA,
];

interface AuditIssue {
  lessonId: string;
  category: string;
  exerciseId?: string;
  severity: 'ERROR' | 'WARNING';
  message: string;
}

const issues: AuditIssue[] = [];

console.log('====================================================');
console.log('CURRICULUM QA AUDIT: UNIT 1 (LESSONS 1 TO 5)');
console.log('====================================================\n');

// 1. LESSON METADATA & 18 STAGE AUDIT
console.log('--- PHASE 1 & 3: 18-STAGE COMPLETENESS AUDIT ---');
for (const lesson of LESSONS) {
  console.log(`\nLesson: [${lesson.id}] "${lesson.title}" (${lesson.cefr})`);
  console.log(`  - Can-Do Goals: ${lesson.learningObjective.canDoStatements.length}`);
  console.log(`  - Core Vocabulary: ${lesson.vocabulary.length} items`);
  console.log(`  - Expressions/Chunks: ${lesson.expressions.length} items`);
  console.log(`  - Grammar Patterns: ${lesson.grammar.patterns.length}`);
  console.log(`  - Common Mistakes: ${lesson.commonMistakes?.length || 0}`);
  console.log(`  - Mini Dialogues: ${lesson.dialogues.length}`);
  console.log(`  - Practice Exercises: ${lesson.practiceExercises.length}`);
  console.log(`  - Review Exercises: ${lesson.reviewExercises.length}`);
  console.log(`  - Assessment Exercises: ${lesson.assessmentExercises.length}`);
  const totalInteractive = lesson.practiceExercises.length + lesson.reviewExercises.length + lesson.assessmentExercises.length;
  console.log(`  - Total Interactive Exercises: ${totalInteractive}`);

  if (lesson.vocabulary.length === 0) {
    issues.push({ lessonId: lesson.id, category: 'VOCABULARY', severity: 'ERROR', message: 'No vocabulary items' });
  }
  if (lesson.practiceExercises.length === 0) {
    issues.push({ lessonId: lesson.id, category: 'PRACTICE', severity: 'ERROR', message: 'No practice exercises' });
  }
  if (lesson.assessmentExercises.length === 0) {
    issues.push({ lessonId: lesson.id, category: 'ASSESSMENT', severity: 'ERROR', message: 'No assessment exercises' });
  }
}

// 2. DETAILED EXERCISE AUDIT
console.log('\n--- PHASE 4 & 5: EXERCISE SYSTEM AUDIT ---');

const canonicalTypeCounts: Record<string, number> = {};
let totalExercisesAudited = 0;

for (const lesson of LESSONS) {
  const allExercises: { pool: string; ex: Exercise }[] = [
    ...lesson.practiceExercises.map((ex) => ({ pool: 'PRACTICE', ex })),
    ...lesson.reviewExercises.map((ex) => ({ pool: 'REVIEW', ex })),
    ...lesson.assessmentExercises.map((ex) => ({ pool: 'ASSESSMENT', ex })),
  ];

  for (const { pool, ex } of allExercises) {
    totalExercisesAudited++;
    const canonicalType = normalizeExerciseType(ex.type);
    canonicalTypeCounts[canonicalType] = (canonicalTypeCounts[canonicalType] || 0) + 1;

    // Check Prompt
    if (!ex.prompt || ex.prompt.trim() === '') {
      issues.push({
        lessonId: lesson.id,
        category: 'EXERCISE_PROMPT',
        exerciseId: ex.id,
        severity: 'ERROR',
        message: `Empty prompt in ${pool} exercise ${ex.id}`,
      });
    }

    // Check Multiple Choice / Recognition / Fill Blank / Listening / Dialogue / Error
    if (
      canonicalType === 'multiple_choice' ||
      canonicalType === 'recognition' ||
      canonicalType === 'fill_blank' ||
      canonicalType === 'listening' ||
      canonicalType === 'error_correction' ||
      canonicalType === 'dialogue_completion'
    ) {
      if (!ex.options || ex.options.length === 0) {
        issues.push({
          lessonId: lesson.id,
          category: 'EXERCISE_OPTIONS',
          exerciseId: ex.id,
          severity: 'ERROR',
          message: `${canonicalType} exercise ${ex.id} has no options array`,
        });
      } else {
        const correctOpts = ex.options.filter((o) => o.isCorrect === true);
        if (correctOpts.length === 0) {
          issues.push({
            lessonId: lesson.id,
            category: 'EXERCISE_ANSWER_KEY',
            exerciseId: ex.id,
            severity: 'ERROR',
            message: `${canonicalType} exercise ${ex.id} has NO correct option marked (isCorrect: true missing)`,
          });
        }
        for (const opt of ex.options) {
          if (!opt.id || !opt.text) {
            issues.push({
              lessonId: lesson.id,
              category: 'EXERCISE_OPTION_MALFORMED',
              exerciseId: ex.id,
              severity: 'ERROR',
              message: `Option missing id or text in ${ex.id}`,
            });
          }
        }
      }
    }

    // Check Word Ordering / Sentence Construction
    if (canonicalType === 'word_ordering' || canonicalType === 'sentence_construction') {
      if (!ex.targetSentence && !ex.correctAnswer) {
        issues.push({
          lessonId: lesson.id,
          category: 'EXERCISE_TARGET',
          exerciseId: ex.id,
          severity: 'ERROR',
          message: `${canonicalType} exercise ${ex.id} missing targetSentence/correctAnswer`,
        });
      }
      if ((!ex.wordBank || ex.wordBank.length === 0) && !ex.targetSentence) {
        issues.push({
          lessonId: lesson.id,
          category: 'EXERCISE_WORDBANK',
          exerciseId: ex.id,
          severity: 'ERROR',
          message: `${canonicalType} exercise ${ex.id} has no wordBank and no targetSentence to split`,
        });
      }
    }

    // Check Listening / Listen and Type
    if (canonicalType === 'listening' || canonicalType === 'listen_and_type') {
      if (!ex.audioText && !ex.targetSentence) {
        issues.push({
          lessonId: lesson.id,
          category: 'EXERCISE_AUDIO',
          exerciseId: ex.id,
          severity: 'ERROR',
          message: `Listening exercise ${ex.id} missing audioText`,
        });
      }
    }

    // Check Speaking
    if (canonicalType === 'speaking') {
      if (!ex.targetSentence && !ex.audioText) {
        issues.push({
          lessonId: lesson.id,
          category: 'EXERCISE_SPEAKING',
          exerciseId: ex.id,
          severity: 'ERROR',
          message: `Speaking exercise ${ex.id} missing targetSentence`,
        });
      }
    }

    // Check Error Correction
    if (canonicalType === 'error_correction') {
      if (!ex.errorSentence && !ex.sourceSentence) {
        issues.push({
          lessonId: lesson.id,
          category: 'EXERCISE_ERROR_SENTENCE',
          exerciseId: ex.id,
          severity: 'WARNING',
          message: `Error correction ${ex.id} missing errorSentence/sourceSentence field`,
        });
      }
    }

    // Check Dialogue Completion
    if (canonicalType === 'dialogue_completion') {
      if (!ex.dialogueContext && !ex.prompt) {
        issues.push({
          lessonId: lesson.id,
          category: 'EXERCISE_DIALOGUE',
          exerciseId: ex.id,
          severity: 'WARNING',
          message: `Dialogue completion ${ex.id} missing dialogueContext`,
        });
      }
    }

    // Check "Meaning of this sentence" display issue
    if (ex.prompt && ex.prompt.toLowerCase().includes('meaning of this sentence')) {
      if (!ex.sourceSentence && !ex.targetSentence && !ex.sourceTranslations) {
        issues.push({
          lessonId: lesson.id,
          category: 'PROMPT_SOURCE_MISSING',
          exerciseId: ex.id,
          severity: 'ERROR',
          message: `Exercise ${ex.id} asks for meaning of sentence but provides no source/target sentence`,
        });
      }
    }
  }
}

console.log(`Total exercises audited: ${totalExercisesAudited}`);
console.log('Canonical Exercise Type Distribution:');
for (const [type, count] of Object.entries(canonicalTypeCounts)) {
  console.log(`  - ${type}: ${count}`);
}

// 3. VOCABULARY AUDIT
console.log('\n--- PHASE 7: VOCABULARY QA ---');
const globalVocab = new Map<string, string>();

for (const lesson of LESSONS) {
  const lessonWords = new Set<string>();
  let missingPhonetic = 0;
  let missingTranslations = 0;
  let missingAudio = 0;

  for (const v of lesson.vocabulary) {
    if (lessonWords.has(v.word.toLowerCase())) {
      issues.push({
        lessonId: lesson.id,
        category: 'VOCABULARY_DUPLICATE_IN_LESSON',
        severity: 'WARNING',
        message: `Word "${v.word}" duplicated within ${lesson.id}`,
      });
    }
    lessonWords.add(v.word.toLowerCase());

    if (!v.phonetic) missingPhonetic++;
    if (!v.translationsByLang || Object.keys(v.translationsByLang).length === 0) missingTranslations++;
    if (!v.audioId) missingAudio++;

    if (globalVocab.has(v.word.toLowerCase())) {
      // Recycled word across lessons
    } else {
      globalVocab.set(v.word.toLowerCase(), lesson.id);
    }
  }

  console.log(`Lesson ${lesson.id}: ${lesson.vocabulary.length} words (Missing Phonetic: ${missingPhonetic}, Missing Translations: ${missingTranslations}, Missing Audio: ${missingAudio})`);
}
console.log(`Total unique vocabulary words introduced across L1-L5: ${globalVocab.size}`);

// 4. SKILL MATRIX AUDIT
console.log('\n--- PHASE 9: SKILL COVERAGE MATRIX ---');
for (const lesson of LESSONS) {
  const allEx = [...lesson.practiceExercises, ...lesson.reviewExercises, ...lesson.assessmentExercises];
  const listening = allEx.filter((e) => ['listening', 'listen_and_type'].includes(normalizeExerciseType(e.type))).length;
  const speaking = allEx.filter((e) => normalizeExerciseType(e.type) === 'speaking').length;
  const translation = allEx.filter((e) => normalizeExerciseType(e.type) === 'translation').length;
  const wordOrdering = allEx.filter((e) => ['word_ordering', 'sentence_construction'].includes(normalizeExerciseType(e.type))).length;
  const choice = allEx.filter((e) => ['multiple_choice', 'recognition', 'fill_blank'].includes(normalizeExerciseType(e.type))).length;
  const dialogue = allEx.filter((e) => normalizeExerciseType(e.type) === 'dialogue_completion').length;
  const errorCorr = allEx.filter((e) => normalizeExerciseType(e.type) === 'error_correction').length;

  console.log(`\nLesson [${lesson.id}]:`);
  console.log(`  - Listening Items: ${listening}`);
  console.log(`  - Speaking Items: ${speaking}`);
  console.log(`  - Translation / Mediation: ${translation}`);
  console.log(`  - Sentence / Word Construction: ${wordOrdering}`);
  console.log(`  - Multiple Choice / Fill Blank: ${choice}`);
  console.log(`  - Dialogue Completion: ${dialogue}`);
  console.log(`  - Error Correction: ${errorCorr}`);
}

// 5. AUDIT SUMMARY
console.log('\n====================================================');
console.log(`AUDIT RESULTS: ${issues.length} ISSUES FOUND`);
console.log('====================================================');

if (issues.length === 0) {
  console.log('ALL CHECKS PASSED WITH ZERO DEFECTS!');
} else {
  const errors = issues.filter((i) => i.severity === 'ERROR');
  const warnings = issues.filter((i) => i.severity === 'WARNING');
  console.log(`ERRORS: ${errors.length}, WARNINGS: ${warnings.length}\n`);

  for (const issue of issues) {
    console.log(`[${issue.severity}] [${issue.lessonId}] ${issue.category}: ${issue.message} ${issue.exerciseId ? `(Ex: ${issue.exerciseId})` : ''}`);
  }
}
