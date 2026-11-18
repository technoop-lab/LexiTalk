// scripts/stage4_lexicon_helper.js
import fs from 'fs';
import path from 'path';

export async function getPriorLemmas() {
  const used = new Set();
  for (let i = 1; i <= 30; i++) {
    const num = i < 10 ? '0' + i : '' + i;
    try {
      const mod = await import(`../content_builder/day${num}.js`);
      const d = mod[`day${num}`] || mod.default;
      const list = (d.learn?.vocabulary || d.vocabulary || []);
      list.forEach(v => {
        const w = (v.lemma || v.word || v.term || v.wordForm || '').toLowerCase().trim();
        if (w) used.add(w);
      });
    } catch (e) {
      // ignore
    }
  }
  return used;
}
