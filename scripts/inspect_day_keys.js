// scripts/inspect_day_keys.js
import fs from 'fs';
import path from 'path';

for (let d = 31; d <= 40; d++) {
  const mod = (await import(`../content_builder/day${d}.js`))[`day${d}`];
  console.log(`Day ${d}: keys = ${Object.keys(mod).join(', ')}`);
  if (mod.learn) {
    console.log(`  learn keys = ${Object.keys(mod.learn).join(', ')}`);
    console.log(`  vocab = ${mod.learn.vocabulary?.length}`);
  }
  if (mod.practice) {
    console.log(`  practice keys = ${Object.keys(mod.practice).join(', ')}`);
    console.log(`  exercises = ${mod.practice.exercises?.length}`);
  }
  if (mod.assess) {
    console.log(`  assess keys = ${Object.keys(mod.assess).join(', ')}`);
  }
  if (mod.practiceExercises) {
    console.log(`  practiceExercises = ${mod.practiceExercises.length}`);
  }
  if (mod.milestoneQuiz) {
    console.log(`  milestoneQuiz = ${mod.milestoneQuiz.length}`);
  }
}
