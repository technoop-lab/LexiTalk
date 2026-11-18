// scripts/stage3_complete_generator.js
import fs from 'fs';
import path from 'path';

// 1. Gather all locked vocabulary from Days 01 to 20
async function getLockedVocab() {
  const existing = new Set();
  for (let i = 1; i <= 20; i++) {
    const num = i < 10 ? '0' + i : '' + i;
    const mod = await import(`../content_builder/day${num}.js`);
    const day = mod[`day${num}`] || mod.default;
    if (day.learn && day.learn.vocabulary) {
      day.learn.vocabulary.forEach(v => {
        const w = (v.lemma || v.word || v.term || v.wordForm || '').toLowerCase().trim();
        if (w) existing.add(w);
      });
    }
  }
  return existing;
}

export async function buildStage3() {
  const lockedVocab = await getLockedVocab();
  console.log(`[LOCKED BASELINE] Loaded ${lockedVocab.size} unique lemmas from Days 01-20.`);

  const stage3VocabRegistry = new Set(lockedVocab);

  // We will define comprehensive day configurations for Days 21 to 30
  // Each day will have curated candidates, ensure 60 unique terms per day,
  // 100 exemplars, 65 exercises, 10 minimal pairs, dialogue, assessment, review.
}
