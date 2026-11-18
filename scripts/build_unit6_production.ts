import * as fs from 'fs';
import * as path from 'path';
import { DetailedLessonData } from '../src/types';
import { buildDetailedLesson, writeLessonToDisk } from './unit6_builder_helper';

import { CONFIG_76, CONFIG_77, CONFIG_78 } from './unit6_def_76_78';
import { CONFIG_79, CONFIG_80, CONFIG_81 } from './unit6_def_79_81';
import { CONFIG_82, CONFIG_83, CONFIG_84 } from './unit6_def_82_84';
import { CONFIG_85, CONFIG_86, CONFIG_87 } from './unit6_def_85_87';
import { CONFIG_88, CONFIG_89, CONFIG_90 } from './unit6_def_88_90';

const allConfigs = [
  CONFIG_76, CONFIG_77, CONFIG_78,
  CONFIG_79, CONFIG_80, CONFIG_81,
  CONFIG_82, CONFIG_83, CONFIG_84,
  CONFIG_85, CONFIG_86, CONFIG_87,
  CONFIG_88, CONFIG_89, CONFIG_90
];

export function buildAllUnit6() {
  console.log('============================================================');
  console.log('BUILDING PRODUCTION UNIT 6 LESSONS (76 TO 90)');
  console.log('============================================================\n');

  for (const cfg of allConfigs) {
    console.log(`Processing Lesson ${cfg.num}: ${cfg.title}...`);
    const detailed = buildDetailedLesson(cfg);
    writeLessonToDisk(detailed);
  }

  console.log(`\n✅ Successfully generated all ${allConfigs.length} Unit 6 lesson files in src/data/lessons/!`);
}

buildAllUnit6();
