import fs from 'fs';
import path from 'path';
import { DetailedLessonData, Exercise } from '../src/types';

export function saveUnit14Lesson(data: DetailedLessonData) {
  const num = data.id.split('_').pop();
  const varName = `LESSON_A2_14_${num}_DATA`;
  const fileContent = `import { DetailedLessonData } from '../../types';\n\nexport const ${varName}: DetailedLessonData = ${JSON.stringify(data, null, 2)};\n`;
  const filePath = path.join(process.cwd(), 'src', 'data', 'lessons', `${data.id}.ts`);
  fs.writeFileSync(filePath, fileContent, 'utf-8');
  const total = (data.practiceExercises?.length || 0) + (data.reviewExercises?.length || 0) + (data.assessmentExercises?.length || 0);
  console.log(
    `✅ [UNIT 14] Saved ${data.id} (${data.title}): ${data.practiceExercises?.length} practice, ${data.reviewExercises?.length} review, ${data.assessmentExercises?.length} assess -> Total: ${total}`
  );
}
