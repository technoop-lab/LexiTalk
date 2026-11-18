// scripts/test_lexicon_candidates.js
import { getPriorLemmas } from './stage4_lexicon_helper.js';

export async function testCandidates(name, words) {
  const prior = await getPriorLemmas();
  const d31 = (await import('../content_builder/day31.js')).day31;
  const d32 = (await import('../content_builder/day32.js')).day32;
  d31.learn.vocabulary.forEach(v => prior.add(v.lemma));
  d32.learn.vocabulary.forEach(v => prior.add(v.lemma));

  const unique = [];
  const dupes = [];
  for (const w of words) {
    const lemma = w[0].toLowerCase().trim();
    if (prior.has(lemma)) {
      dupes.push(lemma);
    } else {
      unique.push(lemma);
      prior.add(lemma);
    }
  }
  console.log(`[TEST ${name}] Candidates: ${words.length} | Unique: ${unique.length} | Dupes (${dupes.length}): ${dupes.join(', ')}`);
  return { count: unique.length, unique };
}
