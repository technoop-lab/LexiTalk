// scripts/test_add_d36.js
import { getPriorLemmas } from './stage4_lexicon_helper.js';

const prior = await getPriorLemmas();
for (let d = 31; d <= 34; d++) {
  const mod = (await import(`../content_builder/day${d}.js`))[`day${d}`];
  mod.learn.vocabulary.forEach(v => prior.add(v.lemma));
}

const cand36 = [
  "diplomatic", "diplomacy", "refusal", "concur", "dissent", "consensus",
  "acquiesce", "acquiescence", "tacit", "tacitly", "unanimous", "unanimously",
  "unanimity", "caveat", "stipulate", "demur", "demurral", "conciliatory",
  "placate", "implacable", "equivocate", "equivocation", "recalcitrant",
  "recalcitrance", "concession", "concede", "rebuff", "demurrer", "dissenting",
  "dissension", "non-committal", "reprobation", "accede", "accession",
  "concurring", "inadmissible", "inadmissibility", "peremptorily", "implacably",
  "assent", "assenting", "dissentient", "unassailable", "reconciliation",
  "reconcile", "irreconcilable", "irreconcilability", "repudiate", "repudiation",
  "disavow", "disavowal", "disapprobation", "non-compliance", "untenable",
  "forbearance", "forbear", "tactful", "tactfully", "untactful", "equivocator", "acceding",
  // additional rich refusal & consent terms
  "unacceptable", "unacceptability", "non-acceptance", "unconditional",
  "unconditionally", "reluctance", "unwillingness", "protestation",
  "unyielding", "uncompromising", "intransigent", "intransigence",
  "obstinacy", "refractory", "non-negotiation", "disaccord", "discordance",
  "repudiative", "conciliative", "conciliator", "placatory", "demurring",
  "assentive", "acquiescent", "unanimousness", "stipulatory"
];

const unique = [];
const dupes = [];
for (const w of cand36) {
  if (prior.has(w.toLowerCase())) {
    dupes.push(w);
  } else {
    unique.push(w);
  }
}
console.log(`Day 36 test: Unique = ${unique.length}, Dupes = ${dupes.length}`);
