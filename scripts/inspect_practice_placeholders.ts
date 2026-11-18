import { LessonService } from '../src/services/LessonService';
import { CurriculumService } from '../src/services/CurriculumService';
import * as fs from 'fs';
import * as path from 'path';

function getLessonIdForNumber(num: number): string {
  let unitNum = 1;
  let level = 'a1';
  if (num <= 15) unitNum = 1;
  else if (num <= 30) unitNum = 2;
  else if (num <= 45) unitNum = 3;
  else if (num <= 60) unitNum = 4;
  else if (num <= 75) unitNum = 5;
  else if (num <= 90) unitNum = 6;
  else {
    level = 'a2';
    unitNum = 7 + Math.floor((num - 91) / 15);
  }
  return `lesson_${level}_${unitNum}_${num}`;
}

async function inspectPlaceholders() {
  console.log('Inspecting practice placeholders across Days 1–60...\n');

  const placeholderExamples: any[] = [];

  for (let day = 1; day <= 60; day++) {
    const lessonId = getLessonIdForNumber(day);
    const lesson = (await LessonService.getLessonById(lessonId)) || CurriculumService.getDetailedLesson(lessonId);

    if (!lesson) continue;

    const practiceExercises = lesson.practiceExercises || [];

    for (const ex of practiceExercises) {
      const options = ex.options || [];
      const hasPlaceholder = options.some((o) =>
        /incorrect phrasing|colloquial mismatch|grammatically invalid|formal mismatch|literal translation|context mismatch|placeholder option/i.test(o.text)
      );

      if (hasPlaceholder) {
        placeholderExamples.push({
          day,
          lessonId,
          exId: ex.id,
          prompt: ex.prompt,
          options: options.map((o) => o.text),
          vocabWords: (lesson.vocabulary || []).map((v) => v.word),
        });
      }
    }
  }

  console.log(`Total practice exercises with placeholder options: ${placeholderExamples.length}`);
  if (placeholderExamples.length > 0) {
    console.log('\nSample exercise with placeholders:');
    console.log(JSON.stringify(placeholderExamples[0], null, 2));
  }
}

inspectPlaceholders();
