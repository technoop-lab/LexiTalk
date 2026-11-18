import { LESSON_A2_7_91_DATA } from '../src/data/lessons/lesson_a2_7_91';
import { LESSON_A2_7_92_DATA } from '../src/data/lessons/lesson_a2_7_92';
import { LESSON_A2_7_93_DATA } from '../src/data/lessons/lesson_a2_7_93';
import { LESSON_A2_7_94_DATA } from '../src/data/lessons/lesson_a2_7_94';
import { LESSON_A2_7_95_DATA } from '../src/data/lessons/lesson_a2_7_95';
import { LESSON_A2_7_96_DATA } from '../src/data/lessons/lesson_a2_7_96';
import { LESSON_A2_7_97_DATA } from '../src/data/lessons/lesson_a2_7_97';
import { LESSON_A2_7_98_DATA } from '../src/data/lessons/lesson_a2_7_98';
import { LESSON_A2_7_99_DATA } from '../src/data/lessons/lesson_a2_7_99';
import { LESSON_A2_7_100_DATA } from '../src/data/lessons/lesson_a2_7_100';
import { LESSON_A2_7_101_DATA } from '../src/data/lessons/lesson_a2_7_101';
import { LESSON_A2_7_102_DATA } from '../src/data/lessons/lesson_a2_7_102';
import { LESSON_A2_7_103_DATA } from '../src/data/lessons/lesson_a2_7_103';
import { LESSON_A2_7_104_DATA } from '../src/data/lessons/lesson_a2_7_104';
import { LESSON_A2_7_105_DATA } from '../src/data/lessons/lesson_a2_7_105';

const lessons = [
  { id: 91, data: LESSON_A2_7_91_DATA },
  { id: 92, data: LESSON_A2_7_92_DATA },
  { id: 93, data: LESSON_A2_7_93_DATA },
  { id: 94, data: LESSON_A2_7_94_DATA },
  { id: 95, data: LESSON_A2_7_95_DATA },
  { id: 96, data: LESSON_A2_7_96_DATA },
  { id: 97, data: LESSON_A2_7_97_DATA },
  { id: 98, data: LESSON_A2_7_98_DATA },
  { id: 99, data: LESSON_A2_7_99_DATA },
  { id: 100, data: LESSON_A2_7_100_DATA },
  { id: 101, data: LESSON_A2_7_101_DATA },
  { id: 102, data: LESSON_A2_7_102_DATA },
  { id: 103, data: LESSON_A2_7_103_DATA },
  { id: 104, data: LESSON_A2_7_104_DATA },
  { id: 105, data: LESSON_A2_7_105_DATA },
];

console.log("=== UNIT 7 (LESSONS 91-105) COMPREHENSIVE AUDIT ===");

let totalUnitExercises = 0;
const globalTypeCounts: Record<string, number> = {};

lessons.forEach(({ id, data }) => {
  const pCount = data.practiceExercises?.length || 0;
  const rCount = data.reviewExercises?.length || 0;
  const aCount = data.assessmentExercises?.length || 0;
  const total = pCount + rCount + aCount;
  totalUnitExercises += total;

  const typeCounts: Record<string, number> = {};
  const allExercises = [
    ...(data.practiceExercises || []),
    ...(data.reviewExercises || []),
    ...(data.assessmentExercises || []),
  ];

  allExercises.forEach(ex => {
    typeCounts[ex.type] = (typeCounts[ex.type] || 0) + 1;
    globalTypeCounts[ex.type] = (globalTypeCounts[ex.type] || 0) + 1;
  });

  console.log(`Lesson ${id} [${data.title}]: Total=${total} (Practice=${pCount}, Review=${rCount}, Assessment=${aCount})`);
  console.log(`   Types: ${JSON.stringify(typeCounts)}`);
  console.log(`   Grammar points: ${data.grammarPoints?.length || 0}, Vocab items: ${data.vocabularyItems?.length || 0}, Chunks: ${data.lexicalChunks?.length || 0}`);
});

console.log("\n==========================================");
console.log(`TOTAL UNIT 7 MEANINGFUL EXERCISES: ${totalUnitExercises}`);
console.log(`AVERAGE EXERCISES PER LESSON: ${(totalUnitExercises / lessons.length).toFixed(1)}`);
console.log(`GLOBAL EXERCISE TYPE DISTRIBUTION:`, globalTypeCounts);
console.log("==========================================");
