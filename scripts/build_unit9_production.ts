import * as fs from 'fs';
import * as path from 'path';
import { buildDetailedLessonA2_Unit9, writeLessonToDiskA2_Unit9 } from './unit9_builder_helper';

import { LESSON_121_CONFIG, LESSON_122_CONFIG, LESSON_123_CONFIG } from './unit9_def_121_123';
import { LESSON_124_CONFIG, LESSON_125_CONFIG, LESSON_126_CONFIG } from './unit9_def_124_126';
import { LESSON_127_CONFIG, LESSON_128_CONFIG, LESSON_129_CONFIG } from './unit9_def_127_129';
import { LESSON_130_CONFIG, LESSON_131_CONFIG, LESSON_132_CONFIG } from './unit9_def_130_132';
import { LESSON_133_CONFIG, LESSON_134_CONFIG, LESSON_135_CONFIG } from './unit9_def_133_135';

const allUnit9Configs = [
  LESSON_121_CONFIG, LESSON_122_CONFIG, LESSON_123_CONFIG,
  LESSON_124_CONFIG, LESSON_125_CONFIG, LESSON_126_CONFIG,
  LESSON_127_CONFIG, LESSON_128_CONFIG, LESSON_129_CONFIG,
  LESSON_130_CONFIG, LESSON_131_CONFIG, LESSON_132_CONFIG,
  LESSON_133_CONFIG, LESSON_134_CONFIG, LESSON_135_CONFIG
];

export function buildAllUnit9() {
  console.log('============================================================');
  console.log('BUILDING PRODUCTION UNIT 9 LESSONS (121 TO 135)');
  console.log('============================================================\n');

  for (const cfg of allUnit9Configs) {
    console.log(`Processing Lesson ${cfg.num}: ${cfg.title}...`);
    const detailed = buildDetailedLessonA2_Unit9(cfg);
    writeLessonToDiskA2_Unit9(detailed);
  }

  console.log(`\n✅ Successfully generated all ${allUnit9Configs.length} Unit 9 lesson files in src/data/lessons/!`);
}

buildAllUnit9();
