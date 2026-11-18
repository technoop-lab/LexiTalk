import { buildDetailedLessonA2_Unit12, writeLessonToDiskA2_Unit12 } from './unit12_builder_helper';

import { LESSON_166_CONFIG, LESSON_167_CONFIG, LESSON_168_CONFIG } from './unit12_def_166_168';
import { LESSON_169_CONFIG, LESSON_170_CONFIG, LESSON_171_CONFIG } from './unit12_def_169_171';
import { LESSON_172_CONFIG, LESSON_173_CONFIG, LESSON_174_CONFIG } from './unit12_def_172_174';
import { LESSON_175_CONFIG, LESSON_176_CONFIG, LESSON_177_CONFIG } from './unit12_def_175_177';
import { LESSON_178_CONFIG, LESSON_179_CONFIG, LESSON_180_CONFIG } from './unit12_def_178_180';

const allUnit12Configs = [
  LESSON_166_CONFIG, LESSON_167_CONFIG, LESSON_168_CONFIG,
  LESSON_169_CONFIG, LESSON_170_CONFIG, LESSON_171_CONFIG,
  LESSON_172_CONFIG, LESSON_173_CONFIG, LESSON_174_CONFIG,
  LESSON_175_CONFIG, LESSON_176_CONFIG, LESSON_177_CONFIG,
  LESSON_178_CONFIG, LESSON_179_CONFIG, LESSON_180_CONFIG
];

export function buildAllUnit12() {
  console.log('============================================================');
  console.log('BUILDING PRODUCTION UNIT 12 LESSONS (166 TO 180)');
  console.log('============================================================\n');

  for (const cfg of allUnit12Configs) {
    console.log(`Processing Lesson ${cfg.num}: ${cfg.title}...`);
    const detailed = buildDetailedLessonA2_Unit12(cfg);
    writeLessonToDiskA2_Unit12(detailed);
  }

  console.log(`\n✅ Successfully generated all ${allUnit12Configs.length} Unit 12 lesson files in src/data/lessons/!`);
}

buildAllUnit12();
