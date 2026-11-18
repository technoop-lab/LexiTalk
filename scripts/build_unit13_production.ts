import { buildDetailedLessonA2_Unit13, writeLessonToDiskA2_Unit13 } from './unit13_builder_helper';

import { LESSON_181_CONFIG, LESSON_182_CONFIG, LESSON_183_CONFIG } from './unit13_def_181_183';
import { LESSON_184_CONFIG, LESSON_185_CONFIG, LESSON_186_CONFIG } from './unit13_def_184_186';
import { LESSON_187_CONFIG, LESSON_188_CONFIG, LESSON_189_CONFIG } from './unit13_def_187_189';
import { LESSON_190_CONFIG, LESSON_191_CONFIG, LESSON_192_CONFIG } from './unit13_def_190_192';
import { LESSON_193_CONFIG, LESSON_194_CONFIG, LESSON_195_CONFIG } from './unit13_def_193_195';

const allUnit13Configs = [
  LESSON_181_CONFIG, LESSON_182_CONFIG, LESSON_183_CONFIG,
  LESSON_184_CONFIG, LESSON_185_CONFIG, LESSON_186_CONFIG,
  LESSON_187_CONFIG, LESSON_188_CONFIG, LESSON_189_CONFIG,
  LESSON_190_CONFIG, LESSON_191_CONFIG, LESSON_192_CONFIG,
  LESSON_193_CONFIG, LESSON_194_CONFIG, LESSON_195_CONFIG
];

export function buildAllUnit13() {
  console.log('============================================================');
  console.log('BUILDING PRODUCTION UNIT 13 LESSONS (181 TO 195)');
  console.log('============================================================\n');

  for (const cfg of allUnit13Configs) {
    console.log(`Processing Lesson ${cfg.num}: ${cfg.title}...`);
    const detailed = buildDetailedLessonA2_Unit13(cfg);
    writeLessonToDiskA2_Unit13(detailed);
  }

  console.log(`\n✅ Successfully generated all ${allUnit13Configs.length} Unit 13 lesson files in src/data/lessons/!`);
}

buildAllUnit13();
