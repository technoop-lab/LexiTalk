import { buildDetailedLessonA2_Unit11, writeLessonToDiskA2_Unit11 } from './unit11_builder_helper';

import { LESSON_151_CONFIG, LESSON_152_CONFIG, LESSON_153_CONFIG } from './unit11_def_151_153';
import { LESSON_154_CONFIG, LESSON_155_CONFIG, LESSON_156_CONFIG } from './unit11_def_154_156';
import { LESSON_157_CONFIG, LESSON_158_CONFIG, LESSON_159_CONFIG } from './unit11_def_157_159';
import { LESSON_160_CONFIG, LESSON_161_CONFIG, LESSON_162_CONFIG } from './unit11_def_160_162';
import { LESSON_163_CONFIG, LESSON_164_CONFIG, LESSON_165_CONFIG } from './unit11_def_163_165';

const allConfigs = [
  LESSON_151_CONFIG,
  LESSON_152_CONFIG,
  LESSON_153_CONFIG,
  LESSON_154_CONFIG,
  LESSON_155_CONFIG,
  LESSON_156_CONFIG,
  LESSON_157_CONFIG,
  LESSON_158_CONFIG,
  LESSON_159_CONFIG,
  LESSON_160_CONFIG,
  LESSON_161_CONFIG,
  LESSON_162_CONFIG,
  LESSON_163_CONFIG,
  LESSON_164_CONFIG,
  LESSON_165_CONFIG,
];

console.log('Generating Unit 11 lessons...');
for (const cfg of allConfigs) {
  const lessonData = buildDetailedLessonA2_Unit11(cfg);
  writeLessonToDiskA2_Unit11(lessonData);
}

console.log('All Unit 11 lessons (151–165) successfully created!');
