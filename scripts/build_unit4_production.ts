import * as fs from 'fs';
import * as path from 'path';
import { DetailedLessonData } from '../src/types';
import { buildDetailedLesson, writeLessonToDisk } from './unit4_builder_helper';

import { CONFIG_46, CONFIG_47, CONFIG_48 } from './unit4_def_46_48';
import { CONFIG_49, CONFIG_50, CONFIG_51 } from './unit4_def_49_51';
import { CONFIG_52, CONFIG_53, CONFIG_54 } from './unit4_def_52_54';
import { CONFIG_55, CONFIG_56, CONFIG_57 } from './unit4_def_55_57';
import { CONFIG_58, CONFIG_59, CONFIG_60 } from './unit4_def_58_60';

const allConfigs = [
  CONFIG_46, CONFIG_47, CONFIG_48,
  CONFIG_49, CONFIG_50, CONFIG_51,
  CONFIG_52, CONFIG_53, CONFIG_54,
  CONFIG_55, CONFIG_56, CONFIG_57,
  CONFIG_58, CONFIG_59, CONFIG_60
];

export function buildAllUnit4() {
  console.log('============================================================');
  console.log('BUILDING PRODUCTION UNIT 4 LESSONS (46 TO 60)');
  console.log('============================================================\n');

  for (const cfg of allConfigs) {
    console.log(`Processing Lesson ${cfg.num}: ${cfg.title}...`);
    const detailed = buildDetailedLesson(cfg);
    writeLessonToDisk(detailed);
  }

  console.log(`\n✅ Successfully generated all ${allConfigs.length} Unit 4 lesson files in src/data/lessons/!`);
}

buildAllUnit4();
