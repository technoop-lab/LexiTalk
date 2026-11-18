import * as fs from 'fs';
import * as path from 'path';
import { buildDetailedLessonA2_Unit10, writeLessonToDiskA2_Unit10 } from './unit10_builder_helper';

import { LESSON_136_CONFIG, LESSON_137_CONFIG, LESSON_138_CONFIG } from './unit10_def_136_138';
import { LESSON_139_CONFIG, LESSON_140_CONFIG, LESSON_141_CONFIG } from './unit10_def_139_141';
import { LESSON_142_CONFIG, LESSON_143_CONFIG } from './unit10_def_142_144';
import { LESSON_144_CONFIG, LESSON_145_CONFIG, LESSON_146_CONFIG } from './unit10_def_144_146';
import { LESSON_147_CONFIG, LESSON_148_CONFIG } from './unit10_def_147_148';
import { LESSON_149_CONFIG, LESSON_150_CONFIG } from './unit10_def_149_150';

const allUnit10Configs = [
  LESSON_136_CONFIG, LESSON_137_CONFIG, LESSON_138_CONFIG,
  LESSON_139_CONFIG, LESSON_140_CONFIG, LESSON_141_CONFIG,
  LESSON_142_CONFIG, LESSON_143_CONFIG,
  LESSON_144_CONFIG, LESSON_145_CONFIG, LESSON_146_CONFIG,
  LESSON_147_CONFIG, LESSON_148_CONFIG,
  LESSON_149_CONFIG, LESSON_150_CONFIG
];

export function buildAllUnit10() {
  console.log('============================================================');
  console.log('BUILDING PRODUCTION UNIT 10 LESSONS (136 TO 150)');
  console.log('============================================================\n');

  for (const cfg of allUnit10Configs) {
    console.log(`Processing Lesson ${cfg.num}: ${cfg.title}...`);
    const detailed = buildDetailedLessonA2_Unit10(cfg);
    writeLessonToDiskA2_Unit10(detailed);
  }

  console.log(`\n✅ Successfully generated all ${allUnit10Configs.length} Unit 10 lesson files in src/data/lessons/!`);
}

buildAllUnit10();
