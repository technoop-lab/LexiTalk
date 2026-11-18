// scripts/check_stage1_to_4_lemmas.js
import fs from 'fs';

async function getExistingLemmas() {
  const existingLemmas = new Set();
  for (let d = 1; d <= 40; d++) {
    try {
      const paddedDay = String(d).padStart(2, '0');
      const mod = (await import(`../content_builder/day${paddedDay}.js`))[`day${paddedDay}`] || (await import(`../content_builder/day${paddedDay}.js`))[`day${d}`];
      if (mod?.learn?.vocabulary) {
        mod.learn.vocabulary.forEach(v => {
          if (v.word) existingLemmas.add(v.word.toLowerCase().trim());
          if (v.en) existingLemmas.add(v.en.toLowerCase().trim());
        });
      }
    } catch (e) {
      console.error(`Error loading Day ${d}:`, e.message);
    }
  }
  console.log(`Loaded ${existingLemmas.size} unique lemmas from Days 1-40.`);
  return existingLemmas;
}

getExistingLemmas();
