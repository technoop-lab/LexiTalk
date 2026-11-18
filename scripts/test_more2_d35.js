// scripts/test_more2_d35.js
import { getPriorLemmas } from './stage4_lexicon_helper.js';

const prior = await getPriorLemmas();
for (let d = 31; d <= 34; d++) {
  const mod = (await import(`../content_builder/day${d}.js`))[`day${d}`];
  mod.learn.vocabulary.forEach(v => prior.add(v.lemma));
}

const list = [
  "intermission", "prolongation", "prolongedness", "postponing", "rescheduled",
  "chronologist", "synchronizer", "asynchronicity", "asynchronic", "synchronousness",
  "concurrentness", "consecutiveness", "provisionality", "expeditiousness", "tardily",
  "triennially", "quadrennially", "centennially", "millennially", "sesquicentenary",
  "bicentenary", "tricentennial", "tricentenary", "diurnally", "nocturnally",
  "ephemerality", "ephemeralness", "transitoriness", "perenniality"
];

const valid = [];
for (const w of list) {
  if (!prior.has(w.toLowerCase())) {
    valid.push(w);
  }
}
console.log(`Valid count: ${valid.length} ->`, valid);
