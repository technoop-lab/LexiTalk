import * as fs from 'fs';
import * as path from 'path';
import { buildDetailedLessonA2, writeLessonToDiskA2 } from './unit7_builder_helper';

import { LESSON_91_CONFIG, LESSON_92_CONFIG, LESSON_93_CONFIG } from './unit7_def_91_93';
import { LESSON_94_CONFIG, LESSON_95_CONFIG, LESSON_96_CONFIG } from './unit7_def_94_96';
import { LESSON_97_CONFIG, LESSON_98_CONFIG } from './unit7_def_97_98';
import { LESSON_99_CONFIG, LESSON_100_CONFIG } from './unit7_def_99_100';
import { LESSON_101_CONFIG, LESSON_102_CONFIG } from './unit7_def_101_102';
import { LESSON_103_CONFIG, LESSON_104_CONFIG, LESSON_105_CONFIG } from './unit7_def_103_105';

const allUnit7Configs = [
  LESSON_91_CONFIG, LESSON_92_CONFIG, LESSON_93_CONFIG,
  LESSON_94_CONFIG, LESSON_95_CONFIG, LESSON_96_CONFIG,
  LESSON_97_CONFIG, LESSON_98_CONFIG,
  LESSON_99_CONFIG, LESSON_100_CONFIG,
  LESSON_101_CONFIG, LESSON_102_CONFIG,
  LESSON_103_CONFIG, LESSON_104_CONFIG, LESSON_105_CONFIG
];

export function buildAllUnit7() {
  console.log('============================================================');
  console.log('BUILDING PRODUCTION UNIT 7 LESSONS (91 TO 105)');
  console.log('============================================================\n');

  for (const cfg of allUnit7Configs) {
    console.log(`Processing Lesson ${cfg.num}: ${cfg.title}...`);
    const detailed = buildDetailedLessonA2(cfg);
    writeLessonToDiskA2(detailed);
  }

  console.log(`\n✅ Successfully generated all ${allUnit7Configs.length} Unit 7 lesson files in src/data/lessons/!`);
}

buildAllUnit7();
