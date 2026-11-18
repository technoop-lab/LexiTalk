// scripts/generate_stage3_vocab.js
import fs from 'fs';

async function main() {
  const existing = new Set();
  for (let i = 1; i <= 20; i++) {
    const num = i < 10 ? '0' + i : '' + i;
    const mod = await import(`../content_builder/day${num}.js`);
    const day = mod[`day${num}`] || mod.default;
    day.learn.vocabulary.forEach(v => {
      const w = (v.lemma || v.word || v.term || v.wordForm || '').toLowerCase().trim();
      if (w) existing.add(w);
    });
  }
  console.log(`Loaded ${existing.size} locked lemmas from Days 1-20.`);

  // Define candidate pools for Days 21-30
  // Each pool will have >70 candidates with full linguistic annotations
  // We will filter candidates to guarantee 0 collisions with existing and 0 internal collisions.

  // Let's create helper function to validate and export
  return existing;
}

main();
