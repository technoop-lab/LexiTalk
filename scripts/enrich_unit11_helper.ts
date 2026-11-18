import fs from 'fs';
import path from 'path';
import { Exercise } from '../src/types';

export function enrichUnit11LessonData(
  lessonId: string,
  baseData: any,
  newPractice: Exercise[],
  newReview: Exercise[],
  newAssessment: Exercise[]
) {
  const pMap = new Map<string, Exercise>();
  (baseData.practiceExercises || []).forEach((e: Exercise) => pMap.set(e.id, e));
  newPractice.forEach((e: Exercise) => pMap.set(e.id, e));

  const rMap = new Map<string, Exercise>();
  (baseData.reviewExercises || []).forEach((e: Exercise) => rMap.set(e.id, e));
  newReview.forEach((e: Exercise) => rMap.set(e.id, e));

  const aMap = new Map<string, Exercise>();
  (baseData.assessmentExercises || []).forEach((e: Exercise) => aMap.set(e.id, e));
  newAssessment.forEach((e: Exercise) => aMap.set(e.id, e));

  const updated = {
    ...baseData,
    practiceExercises: Array.from(pMap.values()),
    reviewExercises: Array.from(rMap.values()),
    assessmentExercises: Array.from(aMap.values()),
  };

  const num = lessonId.split('_').pop();
  const varName = `LESSON_A2_11_${num}_DATA`;
  const fileContent = `import { DetailedLessonData } from '../../types';\n\nexport const ${varName}: DetailedLessonData = ${JSON.stringify(updated, null, 2)};\n`;
  const filePath = path.join(process.cwd(), 'src', 'data', 'lessons', `${lessonId}.ts`);
  fs.writeFileSync(filePath, fileContent, 'utf-8');
  console.log(
    `✅ Saved ${lessonId}: ${updated.practiceExercises.length} practice, ${updated.reviewExercises.length} review, ${updated.assessmentExercises.length} assess -> Total: ${
      updated.practiceExercises.length + updated.reviewExercises.length + updated.assessmentExercises.length
    }`
  );
}
