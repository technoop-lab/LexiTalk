// scripts/sync_production_packs.js
import fs from 'fs';
import path from 'path';

// Import all 60 days
import { day01 } from '../content_builder/day01.js';
import { day02 } from '../content_builder/day02.js';
import { day03 } from '../content_builder/day03.js';
import { day04 } from '../content_builder/day04.js';
import { day05 } from '../content_builder/day05.js';
import { day06 } from '../content_builder/day06.js';
import { day07 } from '../content_builder/day07.js';
import { day08 } from '../content_builder/day08.js';
import { day09 } from '../content_builder/day09.js';
import { day10 } from '../content_builder/day10.js';

import { day11 } from '../content_builder/day11.js';
import { day12 } from '../content_builder/day12.js';
import { day13 } from '../content_builder/day13.js';
import { day14 } from '../content_builder/day14.js';
import { day15 } from '../content_builder/day15.js';
import { day16 } from '../content_builder/day16.js';
import { day17 } from '../content_builder/day17.js';
import { day18 } from '../content_builder/day18.js';
import { day19 } from '../content_builder/day19.js';
import { day20 } from '../content_builder/day20.js';

import { day21 } from '../content_builder/day21.js';
import { day22 } from '../content_builder/day22.js';
import { day23 } from '../content_builder/day23.js';
import { day24 } from '../content_builder/day24.js';
import { day25 } from '../content_builder/day25.js';
import { day26 } from '../content_builder/day26.js';
import { day27 } from '../content_builder/day27.js';
import { day28 } from '../content_builder/day28.js';
import { day29 } from '../content_builder/day29.js';
import { day30 } from '../content_builder/day30.js';

import { day31 } from '../content_builder/day31.js';
import { day32 } from '../content_builder/day32.js';
import { day33 } from '../content_builder/day33.js';
import { day34 } from '../content_builder/day34.js';
import { day35 } from '../content_builder/day35.js';
import { day36 } from '../content_builder/day36.js';
import { day37 } from '../content_builder/day37.js';
import { day38 } from '../content_builder/day38.js';
import { day39 } from '../content_builder/day39.js';
import { day40 } from '../content_builder/day40.js';

import { day41 } from '../content_builder/day41.js';
import { day42 } from '../content_builder/day42.js';
import { day43 } from '../content_builder/day43.js';
import { day44 } from '../content_builder/day44.js';
import { day45 } from '../content_builder/day45.js';
import { day46 } from '../content_builder/day46.js';
import { day47 } from '../content_builder/day47.js';
import { day48 } from '../content_builder/day48.js';
import { day49 } from '../content_builder/day49.js';
import { day50 } from '../content_builder/day50.js';

import { day51 } from '../content_builder/day51.js';
import { day52 } from '../content_builder/day52.js';
import { day53 } from '../content_builder/day53.js';
import { day54 } from '../content_builder/day54.js';
import { day55 } from '../content_builder/day55.js';
import { day56 } from '../content_builder/day56.js';
import { day57 } from '../content_builder/day57.js';
import { day58 } from '../content_builder/day58.js';
import { day59 } from '../content_builder/day59.js';
import { day60 } from '../content_builder/day60.js';

const stageConfigs = [
  {
    stageNumber: 1,
    stageTitle: "Foundation & Essential Communication",
    cefrSpan: "A1.1 -> A1.2",
    file: "DAYS_01_10_CONTENT.json",
    days: [day01, day02, day03, day04, day05, day06, day07, day08, day09, day10]
  },
  {
    stageNumber: 2,
    stageTitle: "Core Functional Communication & Daily Life",
    cefrSpan: "A1.2 -> A2.1",
    file: "DAYS_11_20_CONTENT.json",
    days: [day11, day12, day13, day14, day15, day16, day17, day18, day19, day20]
  },
  {
    stageNumber: 3,
    stageTitle: "Past Narratives, Temporal Sequencing & Storytelling",
    cefrSpan: "A2.1",
    file: "DAYS_21_30_CONTENT.json",
    days: [day21, day22, day23, day24, day25, day26, day27, day28, day29, day30]
  },
  {
    stageNumber: 4,
    stageTitle: "Future Plans, Modals, Pragmatics & Nuance",
    cefrSpan: "A2.1 -> A2.2",
    file: "DAYS_31_40_CONTENT.json",
    days: [day31, day32, day33, day34, day35, day36, day37, day38, day39, day40]
  },
  {
    stageNumber: 5,
    stageTitle: "Domain-Specific Expansion & World Communication",
    cefrSpan: "A2.2",
    file: "DAYS_41_50_CONTENT.json",
    days: [day41, day42, day43, day44, day45, day46, day47, day48, day49, day50]
  },
  {
    stageNumber: 6,
    stageTitle: "Real-World Fluency, Executive Communication & Mastery Capstone",
    cefrSpan: "A2.2 -> B1+",
    file: "DAYS_51_60_CONTENT.json",
    days: [day51, day52, day53, day54, day55, day56, day57, day58, day59, day60]
  }
];

console.log("================================================================================");
console.log("SYNCHRONIZING PRODUCTION JSON PACKS (DAYS 01–60) FROM ENRICHED SOURCES");
console.log("================================================================================");

stageConfigs.forEach((stage) => {
  let totalVocab = 0;
  let totalPhrases = 0;
  let totalExamples = 0;
  let totalExercises = 0;

  stage.days.forEach((d) => {
    totalVocab += (d.learn?.vocabulary?.length || 0);
    totalPhrases += ((d.learn?.phrases || d.learn?.spokenPhrases)?.length || 0);
    totalExamples += (Array.isArray(d.examples) ? d.examples.length : d.examples?.bilingualExemplars?.length || 0);
    totalExercises += (Array.isArray(d.practice) ? d.practice.length : d.practice?.exercises?.length || 0);
  });

  const packPayload = {
    meta: {
      curriculumTitle: `Curiosity English Academy: Stage ${stage.stageNumber} Content Pack (Days ${stage.days[0].dayNumber}–${stage.days[stage.days.length - 1].dayNumber})`,
      targetAudience: "Hindi Speakers transitioning to Fluent Global English",
      stage: `Stage ${stage.stageNumber}: ${stage.stageTitle}`,
      cefrSpan: stage.cefrSpan,
      totalDays: stage.days.length,
      totalExercises,
      totalVocabulary: totalVocab,
      totalPhrases,
      totalExamples,
      synchronizedAt: new Date().toISOString()
    },
    days: stage.days
  };

  const targetPath = path.join(process.cwd(), stage.file);
  fs.writeFileSync(targetPath, JSON.stringify(packPayload, null, 2), 'utf-8');
  console.log(`✓ [SUCCESS] Synced ${stage.file}: ${stage.days.length} days | Vocab: ${totalVocab} | Phrases: ${totalPhrases} | Examples: ${totalExamples} | Exercises: ${totalExercises}`);
});

console.log("================================================================================");
console.log("ALL 6 PRODUCTION CONTENT PACKS SYNCHRONIZED SUCCESSFULLY!");
console.log("================================================================================");
