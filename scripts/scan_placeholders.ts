// Scan all 60 days for placeholder/template strings in practice exercises

import { LessonService } from '../src/services/LessonService';
import { CurriculumService } from '../src/services/CurriculumService';
import * as fs from 'fs';
import * as path from 'path';

const PLACEHOLDER_PATTERNS = [
  /incorrect phrasing/i,
  /colloquial mismatch/i,
  /grammatically invalid/i,
  /formal mismatch/i,
  /literal translation/i,
  /context mismatch/i,
  /placeholder option/i,
  /dummy option/i,
  /option [a-d] filler/i,
];

function getLessonIdForNumber(num: number): string {
  let unitNum = 1;
  let level = 'a1';
  if (num <= 15) unitNum = 1;
  else if (num <= 30) unitNum = 2;
  else if (num <= 45) unitNum = 3;
  else if (num <= 60) unitNum = 4;
  else if (num <= 75) unitNum = 5;
  else if (num <= 90) unitNum = 6;
  else {
    level = 'a2';
    unitNum = 7 + Math.floor((num - 91) / 15);
  }
  return `lesson_${level}_${unitNum}_${num}`;
}

async function scanAllPlaceholders() {
  console.log('Scanning Days 1–60 for placeholder option strings...\n');

  let totalPlaceholdersFound = 0;
  const placeholderOccurrences: { day: number; lessonId: string; exId: string; optionText: string }[] = [];

  for (let day = 1; day <= 60; day++) {
    const lessonId = getLessonIdForNumber(day);
    const lesson = (await LessonService.getLessonById(lessonId)) || CurriculumService.getDetailedLesson(lessonId);

    if (!lesson) {
      console.error(`Day ${day}: Lesson missing (${lessonId})`);
      continue;
    }

    const practiceExercises = lesson.practiceExercises || [];

    for (const ex of practiceExercises) {
      const options = ex.options || [];
      for (const opt of options) {
        for (const pattern of PLACEHOLDER_PATTERNS) {
          if (pattern.test(opt.text)) {
            totalPlaceholdersFound++;
            placeholderOccurrences.push({
              day,
              lessonId,
              exId: ex.id,
              optionText: opt.text,
            });
          }
        }
      }
    }
  }

  console.log(`Total Placeholder Options Found in Practice Exercises (Days 1–60): ${totalPlaceholdersFound}`);
  if (placeholderOccurrences.length > 0) {
    console.log('\nSample occurrences (first 20):');
    console.table(placeholderOccurrences.slice(0, 20));
  }

  // Also scan JSON content packs if any exist
  const jsonPacks = [
    'DAYS_01_10_CONTENT.json',
    'DAYS_11_20_CONTENT.json',
    'DAYS_21_30_CONTENT.json',
    'DAYS_31_40_CONTENT.json',
    'DAYS_41_50_CONTENT.json',
    'DAYS_51_60_CONTENT.json',
  ];

  let jsonPlaceholdersCount = 0;
  for (const pack of jsonPacks) {
    const fullPath = path.join(process.cwd(), pack);
    if (fs.existsSync(fullPath)) {
      const raw = fs.readFileSync(fullPath, 'utf8');
      for (const pattern of PLACEHOLDER_PATTERNS) {
        const matches = raw.match(new RegExp(pattern.source, 'gi'));
        if (matches) {
          jsonPlaceholdersCount += matches.length;
        }
      }
    }
  }

  console.log(`Total Placeholder Strings Found in JSON Content Packs: ${jsonPlaceholdersCount}`);
}

scanAllPlaceholders();
