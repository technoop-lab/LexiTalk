import { buildDetailedLessonA2_Unit11, writeLessonToDiskA2_Unit11 } from './unit11_builder_helper';

import { LESSON_151_CONFIG, LESSON_152_CONFIG, LESSON_153_CONFIG } from './unit11_def_151_153';
import { LESSON_154_CONFIG, LESSON_155_CONFIG, LESSON_156_CONFIG } from './unit11_def_154_156';
import { LESSON_157_CONFIG, LESSON_158_CONFIG, LESSON_159_CONFIG } from './unit11_def_157_159';
import { LESSON_160_CONFIG, LESSON_161_CONFIG, LESSON_162_CONFIG } from './unit11_def_160_162';
import { LESSON_163_CONFIG, LESSON_164_CONFIG, LESSON_165_CONFIG } from './unit11_def_163_165';

const allUnit11Configs = [
  LESSON_151_CONFIG, LESSON_152_CONFIG, LESSON_153_CONFIG,
  LESSON_154_CONFIG, LESSON_155_CONFIG, LESSON_156_CONFIG,
  LESSON_157_CONFIG, LESSON_158_CONFIG, LESSON_159_CONFIG,
  LESSON_160_CONFIG, LESSON_161_CONFIG, LESSON_162_CONFIG,
  LESSON_163_CONFIG, LESSON_164_CONFIG, LESSON_165_CONFIG
];

export function buildAllUnit11() {
  console.log('============================================================');
  console.log('BUILDING PRODUCTION UNIT 11 LESSONS (151 TO 165)');
  console.log('============================================================\n');

  for (const cfg of allUnit11Configs) {
    console.log(`Processing Lesson ${cfg.num}: ${cfg.title}...`);
    const detailed = buildDetailedLessonA2_Unit11(cfg);
    writeLessonToDiskA2_Unit11(detailed);
  }

  console.log(`\n✅ Successfully generated all ${allUnit11Configs.length} Unit 11 lesson files in src/data/lessons/!`);
}

buildAllUnit11();
