import * as fs from 'fs';
import * as path from 'path';
import { DetailedLessonData } from '../src/types';
import { compileLesson, saveLessonFile } from './generate_all_unit3';

// Import all 15 lesson raw definitions
import { RAW_LESSON_31 } from './gen_lessons_31_33';
import { LESSON_32 } from './lesson_defs_31_35';
import { RAW_LESSON_33 } from './unit3_lessons_31_35';
import { RAW_LESSON_34 } from './gen_lessons_34_36';
import { RAW_LESSON_35 } from './gen_lessons_35_36';
import { RAW_LESSON_36 } from './gen_lessons_36_38';
import { RAW_LESSON_37 } from './gen_lessons_37_38';
import { RAW_LESSON_38, RAW_LESSON_39 } from './gen_lessons_38_39';
import { RAW_LESSON_40, RAW_LESSON_41 } from './gen_lessons_40_41';
import { RAW_LESSON_42, RAW_LESSON_43 } from './gen_lessons_42_43';
import { RAW_LESSON_44, RAW_LESSON_45 } from './gen_lessons_44_45';

async function buildAllUnit3() {
  console.log('============================================================');
  console.log('BUILDING PRODUCTION UNIT 3 LESSONS (31 TO 45)');
  console.log('============================================================\n');

  // Lesson 31
  console.log('Processing Lesson 31...');
  const l31 = compileLesson(RAW_LESSON_31);
  saveLessonFile(l31);

  // Lesson 32 (already DetailedLessonData spec)
  console.log('Processing Lesson 32...');
  saveLessonFile(LESSON_32 as DetailedLessonData);

  // Lesson 33
  console.log('Processing Lesson 33...');
  const l33 = compileLesson(RAW_LESSON_33);
  saveLessonFile(l33);

  // Lesson 34
  console.log('Processing Lesson 34...');
  const l34 = compileLesson(RAW_LESSON_34);
  saveLessonFile(l34);

  // Lesson 35
  console.log('Processing Lesson 35...');
  const l35 = compileLesson(RAW_LESSON_35);
  saveLessonFile(l35);

  // Lesson 36
  console.log('Processing Lesson 36...');
  const l36 = compileLesson(RAW_LESSON_36);
  saveLessonFile(l36);

  // Lesson 37
  console.log('Processing Lesson 37...');
  const l37 = compileLesson(RAW_LESSON_37);
  saveLessonFile(l37);

  // Lesson 38
  console.log('Processing Lesson 38...');
  const l38 = compileLesson(RAW_LESSON_38);
  saveLessonFile(l38);

  // Lesson 39
  console.log('Processing Lesson 39...');
  const l39 = compileLesson(RAW_LESSON_39);
  saveLessonFile(l39);

  // Lesson 40
  console.log('Processing Lesson 40...');
  const l40 = compileLesson(RAW_LESSON_40);
  saveLessonFile(l40);

  // Lesson 41
  console.log('Processing Lesson 41...');
  const l41 = compileLesson(RAW_LESSON_41);
  saveLessonFile(l41);

  // Lesson 42
  console.log('Processing Lesson 42...');
  const l42 = compileLesson(RAW_LESSON_42);
  saveLessonFile(l42);

  // Lesson 43
  console.log('Processing Lesson 43...');
  const l43 = compileLesson(RAW_LESSON_43);
  saveLessonFile(l43);

  // Lesson 44
  console.log('Processing Lesson 44...');
  const l44 = compileLesson(RAW_LESSON_44);
  saveLessonFile(l44);

  // Lesson 45
  console.log('Processing Lesson 45...');
  const l45 = compileLesson(RAW_LESSON_45);
  saveLessonFile(l45);

  console.log('\n✅ All 15 Unit 3 Lessons (31–45) successfully written to src/data/lessons/');
}

buildAllUnit3();
