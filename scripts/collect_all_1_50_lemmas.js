// scripts/collect_all_1_50_lemmas.js
import fs from 'fs';
import path from 'path';

export async function getAll1to50Lemmas() {
  const lemmas = new Set();
  for (let d = 1; d <= 50; d++) {
    const file = path.join(process.cwd(), 'content_builder', `day${d}.js`);
    if (fs.existsSync(file)) {
      const mod = await import(`../content_builder/day${d}.js`);
      const data = mod[`day${d}`];
      if (data && data.learn && data.learn.vocabulary) {
        data.learn.vocabulary.forEach(v => {
          if (v.lemma) {
            lemmas.add(v.lemma.toLowerCase().trim());
          }
        });
      }
    }
  }
  return lemmas;
}

if (process.argv[1] && process.argv[1].endsWith('collect_all_1_50_lemmas.js')) {
  getAll1to50Lemmas().then(lemmas => {
    console.log(`Successfully collected ${lemmas.size} unique lemmas from Days 1-50.`);
  });
}
