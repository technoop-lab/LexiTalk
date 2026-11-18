// scripts/test_more_d36.js
import { getPriorLemmas } from './stage4_lexicon_helper.js';

const prior = await getPriorLemmas();
for (let d = 31; d <= 35; d++) {
  const mod = (await import(`../content_builder/day${d}.js`))[`day${d}`];
  mod.learn.vocabulary.forEach(v => prior.add(v.lemma));
}

const list36 = [
  "reprobative", "unyieldingness", "non-consensual", "unconciliatory",
  "tactfulness", "untactfully", "tactlessness", "tactless",
  "acceder", "assenter", "dissentingly", "conciliatoriness", "placation", "irreconcilably"
];

const valid = [];
for (const w of list36) {
  if (!prior.has(w.toLowerCase())) {
    valid.push(w);
  }
}
console.log(`Valid for Day 36: ${valid.length} ->`, valid);
