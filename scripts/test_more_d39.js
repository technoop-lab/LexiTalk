// scripts/test_more_d39.js
import { getPriorLemmas } from './stage4_lexicon_helper.js';

const prior = await getPriorLemmas();
for (let d = 31; d <= 38; d++) {
  const mod = (await import(`../content_builder/day${d}.js`))[`day${d}`];
  mod.learn.vocabulary.forEach(v => prior.add(v.lemma));
}

const list39 = [
  "unsurpassability", "matchlessness", "paramountness", "superlativeness",
  "infinitesimality", "preponderantly", "outweighing", "outshining",
  "outstripping", "eclipsing", "nonpareils", "incommensurability",
  "inestimableness", "unsurpassedness", "unequaledness", "unexcelledness"
];

const valid = [];
for (const w of list39) {
  if (!prior.has(w.toLowerCase())) {
    valid.push(w);
  }
}
console.log(`Valid for Day 39: ${valid.length} ->`, valid);
