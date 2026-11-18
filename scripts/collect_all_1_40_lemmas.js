// scripts/collect_all_1_40_lemmas.js
import fs from 'fs';
import path from 'path';

export async function getAll1to40Lemmas() {
  const lemmas = new Set();
  for (let d = 1; d <= 40; d++) {
    const padded = String(d).padStart(2, '0');
    const filePath = path.join(process.cwd(), 'content_builder', `day${padded}.js`);
    if (!fs.existsSync(filePath)) {
      console.warn(`File not found: day${padded}.js`);
      continue;
    }
    const modExport = await import(`../content_builder/day${padded}.js`);
    const mod = modExport[`day${padded}`] || modExport[`day${d}`];
    if (mod?.learn?.vocabulary) {
      mod.learn.vocabulary.forEach(v => {
        if (v.lemma) lemmas.add(v.lemma.toLowerCase().trim());
        if (v.word) lemmas.add(v.word.toLowerCase().trim());
        if (v.en) lemmas.add(v.en.toLowerCase().trim());
      });
    }
  }
  return lemmas;
}

if (process.argv[1] && process.argv[1].endsWith('collect_all_1_40_lemmas.js')) {
  getAll1to40Lemmas().then(lemmas => {
    console.log(`Successfully collected ${lemmas.size} unique lemmas from Days 1-40.`);
  });
}
