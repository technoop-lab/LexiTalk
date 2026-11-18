// scripts/test_normalization.js
import fs from 'fs';
import path from 'path';

function inspectAllDays() {
  const packs = [
    'DAYS_01_10_CONTENT.json',
    'DAYS_11_20_CONTENT.json',
    'DAYS_21_30_CONTENT.json',
    'DAYS_31_40_CONTENT.json',
    'DAYS_41_50_CONTENT.json',
    'DAYS_51_60_CONTENT.json'
  ];

  let totalDays = 0;

  packs.forEach((p, pIdx) => {
    const raw = fs.readFileSync(p, 'utf-8');
    const pack = JSON.parse(raw);
    console.log(`Pack ${pIdx + 1}: ${p} has ${pack.days.length} days`);
    totalDays += pack.days.length;

    pack.days.forEach(day => {
      // Check properties
      const vocabCount = day.learn?.vocabulary?.length || 0;
      const phraseCount = (day.learn?.phrases || day.learn?.spokenPhrases)?.length || 0;
      const exampleCount = (Array.isArray(day.examples) ? day.examples : day.examples?.bilingualExemplars)?.length || 0;
      const exCount = (Array.isArray(day.practice) ? day.practice : day.practice?.exercises)?.length || 0;
      const bmCount = (Array.isArray(day.assess) ? day.assess : day.assess?.benchmarks)?.length || 0;
      const dCount = (day.use?.dialogues?.length || (day.use?.dialogue ? 1 : 0));

      if (vocabCount === 0 || exampleCount === 0 || exCount === 0) {
        console.warn(`[WARNING] Day ${day.dayNumber} has missing items: vocab=${vocabCount}, examples=${exampleCount}, exercises=${exCount}`);
      }
    });
  });

  console.log(`Total Days verified across all 6 packs: ${totalDays}`);
}

inspectAllDays();
