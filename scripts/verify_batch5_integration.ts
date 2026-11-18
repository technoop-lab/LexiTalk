import { getRegistryDayByNumber } from '../src/data/curriculumRegistry';

console.log('=== BATCH 5 (DAYS 41-50) REGISTRY DEEP VERIFICATION ===\n');

let totalBatch5Dialogues = 0;
let totalBatch5Turns = 0;
let minBatch5Turns = Infinity;
let maxBatch5Turns = 0;
let dialoguesGte20 = 0;
let dialoguesLt20 = 0;

for (let dayNum = 41; dayNum <= 50; dayNum++) {
  const day = getRegistryDayByNumber(dayNum);
  if (!day) {
    throw new Error(`Day ${dayNum} failed to load from registry!`);
  }

  const scenarios = day.use.dialogues || [];
  console.log(`Day ${dayNum} (${day.titleEn}): ${scenarios.length} dialogues`);

  scenarios.forEach((sc: any, idx: number) => {
    totalBatch5Dialogues++;
    const turns = sc.turns.length;
    totalBatch5Turns += turns;
    if (turns < minBatch5Turns) minBatch5Turns = turns;
    if (turns > maxBatch5Turns) maxBatch5Turns = turns;

    if (turns >= 20) dialoguesGte20++;
    else {
      dialoguesLt20++;
      console.error(`  [FAIL] ${sc.id} has only ${turns} turns!`);
    }

    if (idx === 0) {
      console.log(`  Sample Dialogue 1: "${sc.title}" (${turns} turns, speakers: ${sc.characters?.join(', ') || 'N/A'})`);
      console.log(`    Turn 1 EN: ${sc.turns[0]?.speaker}: "${sc.turns[0]?.textEn?.slice(0, 60)}..."`);
      console.log(`    Turn 1 HI: "${sc.turns[0]?.textHi?.slice(0, 60)}..."`);
      console.log(`    Turn ${turns} EN: ${sc.turns[turns - 1]?.speaker}: "${sc.turns[turns - 1]?.textEn?.slice(0, 60)}..."`);
    }
  });
}

console.log('\n--- BATCH 5 FINAL AUDIT SUMMARY ---');
console.log(`Total Days: 10 (Days 41–50)`);
console.log(`Total Dialogues: ${totalBatch5Dialogues} (Target: 100)`);
console.log(`Total Turns: ${totalBatch5Turns}`);
console.log(`Average Turns: ${(totalBatch5Turns / totalBatch5Dialogues).toFixed(2)}`);
console.log(`Min Turns: ${minBatch5Turns}`);
console.log(`Max Turns: ${maxBatch5Turns}`);
console.log(`Dialogues >= 20 Turns: ${dialoguesGte20} (Target: 100/100)`);
console.log(`Dialogues < 20 Turns: ${dialoguesLt20} (Target: 0)`);

if (totalBatch5Dialogues === 100 && dialoguesLt20 === 0) {
  console.log('\n✓ ALL STAGE 5 (DAYS 41-50) DIALOGUES FULLY INTEGRATED & VERIFIED!');
} else {
  console.error('\n✗ STAGE 5 VERIFICATION FAILED.');
  process.exit(1);
}
