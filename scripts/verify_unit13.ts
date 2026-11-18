import { LESSONS_A2_UNIT_13 } from '../src/data/lessons/unit_a2_13';

console.log(`Verifying Unit 13 lessons... Total lessons: ${LESSONS_A2_UNIT_13.length}`);

let allPassed = true;

for (const lesson of LESSONS_A2_UNIT_13) {
  const pCount = lesson.practice?.length || 0;
  const rCount = lesson.review?.length || 0;
  const aCount = lesson.assessment?.length || 0;
  const total = pCount + rCount + aCount;

  console.log(`${lesson.id}: ${pCount} practice, ${rCount} review, ${aCount} assess -> Total: ${total}`);

  if (total < 35) {
    console.error(`❌ ${lesson.id} has fewer than 35 exercises (${total})`);
    allPassed = false;
  }
  if (pCount < 18 || rCount < 7 || aCount < 8) {
    console.error(`❌ ${lesson.id} has unbalanced distribution (P:${pCount}, R:${rCount}, A:${aCount})`);
    allPassed = false;
  }
}

if (allPassed) {
  console.log("🎉 ALL UNIT 13 LESSONS PASSED FULL PEDAGOGICAL DEEP RENOVATION VERIFICATION!");
} else {
  console.error("⚠️ SOME LESSONS FAILED VERIFICATION");
  process.exit(1);
}
