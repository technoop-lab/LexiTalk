// scripts/test_add_d33.js
import { getPriorLemmas } from './stage4_lexicon_helper.js';

const d31 = (await import('../content_builder/day31.js')).day31;
const d32 = (await import('../content_builder/day32.js')).day32;
const prior = await getPriorLemmas();
d31.learn.vocabulary.forEach(v => prior.add(v.lemma));
d32.learn.vocabulary.forEach(v => prior.add(v.lemma));

const cand = [
  "deduction", "improbable", "needless", "inference", "premise", "fallacy",
  "incontrovertible", "verifiable", "unassailable", "tenable", "untenable", "cogent",
  "cogency", "dubious", "axiom", "postulation", "proscriptive", "precondition",
  "non-negotiable", "compulsorily", "unavoidable", "inescapable", "irrevocable",
  "statutory", "enforceable", "corroboration", "extrapolation", "presupposition",
  "presuppose", "syllogism", "syllogistic", "ratiocination", "ineluctable",
  "indubitably", "infallible", "infallibility", "unimpeachable", "tautological",
  "peremptory", "incumbent", "requisition", "exigency", "exigent",
  "indispensability", "proscription", "substantiation", "unsubstantiated", "inexorable",
  // New candidates:
  "indisputable", "indisputably", "disprovable", "disproof", "counterfactual",
  "probative", "probabilistic", "necessitate", "necessitation", "apodictic",
  "abductive", "entailment", "entail", "ineluctability", "bindingness",
  "enforceability", "unassailability", "untenability", "conclusiveness", "inconclusive",
  "inconclusiveness", "factuality", "verifiability", "unverifiable", "coerciveness",
  "defeasible", "defeasibility", "categorical", "categorically", "implicative"
];

const unique = [];
const dupes = [];
for (const w of cand) {
  if (prior.has(w.toLowerCase())) {
    dupes.push(w);
  } else {
    unique.push(w);
  }
}
console.log(`Day 33 candidate test: Unique = ${unique.length}, Dupes = ${dupes.length}`);
