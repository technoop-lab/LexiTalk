import * as fs from 'fs';
import * as path from 'path';
import { buildDetailedLessonA2_Unit8, writeLessonToDiskA2_Unit8 } from './unit8_builder_helper';

import { LESSON_106_CONFIG, LESSON_107_CONFIG, LESSON_108_CONFIG } from './unit8_def_106_108';
import { LESSON_109_CONFIG, LESSON_110_CONFIG, LESSON_111_CONFIG } from './unit8_def_109_111';
import { LESSON_112_CONFIG, LESSON_113_CONFIG, LESSON_114_CONFIG } from './unit8_def_112_114';
import { LESSON_115_CONFIG, LESSON_116_CONFIG, LESSON_117_CONFIG } from './unit8_def_115_117';
import { LESSON_118_CONFIG, LESSON_119_CONFIG, LESSON_120_CONFIG } from './unit8_def_118_120';

const allUnit8Configs = [
  LESSON_106_CONFIG, LESSON_107_CONFIG, LESSON_108_CONFIG,
  LESSON_109_CONFIG, LESSON_110_CONFIG, LESSON_111_CONFIG,
  LESSON_112_CONFIG, LESSON_113_CONFIG, LESSON_114_CONFIG,
  LESSON_115_CONFIG, LESSON_116_CONFIG, LESSON_117_CONFIG,
  LESSON_118_CONFIG, LESSON_119_CONFIG, LESSON_120_CONFIG
];

export function buildAllUnit8() {
  console.log('============================================================');
  console.log('BUILDING PRODUCTION UNIT 8 LESSONS (106 TO 120)');
  console.log('============================================================\n');

  for (const cfg of allUnit8Configs) {
    console.log(`Processing Lesson ${cfg.num}: ${cfg.title}...`);
    const detailed = buildDetailedLessonA2_Unit8(cfg);
    writeLessonToDiskA2_Unit8(detailed);
  }

  console.log(`\n✅ Successfully generated all ${allUnit8Configs.length} Unit 8 lesson files in src/data/lessons/!`);
}

buildAllUnit8();
