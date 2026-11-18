import * as fs from 'fs';
import * as path from 'path';
import { DetailedLessonData } from '../src/types';
import { buildDetailedLesson, writeLessonToDisk } from './unit5_builder_helper';

import { CONFIG_61, CONFIG_62, CONFIG_63 } from './unit5_def_61_63';
import { CONFIG_64, CONFIG_65, CONFIG_66 } from './unit5_def_64_66';
import { CONFIG_67, CONFIG_68, CONFIG_69 } from './unit5_def_67_69';
import { CONFIG_70, CONFIG_71, CONFIG_72 } from './unit5_def_70_72';
import { CONFIG_73, CONFIG_74, CONFIG_75 } from './unit5_def_73_75';

const allConfigs = [
  CONFIG_61, CONFIG_62, CONFIG_63,
  CONFIG_64, CONFIG_65, CONFIG_66,
  CONFIG_67, CONFIG_68, CONFIG_69,
  CONFIG_70, CONFIG_71, CONFIG_72,
  CONFIG_73, CONFIG_74, CONFIG_75
];

export function buildAllUnit5() {
  console.log('============================================================');
  console.log('BUILDING PRODUCTION UNIT 5 LESSONS (61 TO 75)');
  console.log('============================================================\n');

  for (const cfg of allConfigs) {
    console.log(`Processing Lesson ${cfg.num}: ${cfg.title}...`);
    const detailed = buildDetailedLesson(cfg);
    writeLessonToDisk(detailed);
  }

  console.log(`\n✅ Successfully generated all ${allConfigs.length} Unit 5 lesson files in src/data/lessons/!`);
}

buildAllUnit5();
