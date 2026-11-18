// scripts/test_more_d40.js
import { getPriorLemmas } from './stage4_lexicon_helper.js';

const prior = await getPriorLemmas();
for (let d = 31; d <= 38; d++) {
  const mod = (await import(`../content_builder/day${d}.js`))[`day${d}`];
  mod.learn.vocabulary.forEach(v => prior.add(v.lemma));
}

const list40 = [
  "sociolinguistically", "phonetician", "phonemic", "phonemics", "allophone",
  "allophonic", "morpheme", "morphemic", "morphemically", "syntactician",
  "prosodist", "elocutionary", "polyglotism", "lexicological", "lexicologist"
];

const valid = [];
for (const w of list40) {
  if (!prior.has(w.toLowerCase())) {
    valid.push(w);
  }
}
console.log(`Valid for Day 40: ${valid.length} ->`, valid);
