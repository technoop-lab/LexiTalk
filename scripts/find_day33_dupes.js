// scripts/find_day33_dupes.js
import { getPriorLemmas } from './stage4_lexicon_helper.js';

const d31 = (await import('../content_builder/day31.js')).day31;
const d32 = (await import('../content_builder/day32.js')).day32;
const prior = await getPriorLemmas();
d31.learn.vocabulary.forEach(v => prior.add(v.lemma));
d32.learn.vocabulary.forEach(v => prior.add(v.lemma));

const cand = [
  "deduction", "deduce", "plausible", "plausibility", "improbable", "indispensable", "prerequisite",
  "compulsory", "needless", "stipulation", "stipulate", "ascertain", "infer", "inference",
  "postulate", "premise", "fallacy", "fallacious", "conjectural", "presumptive", "irrefutable",
  "incontrovertible", "verifiable", "unassailable", "specious", "tenable", "untenable", "cogent",
  "cogency", "dubious", "unequivocal", "axiom", "axiomatic", "postulation", "proscriptive",
  "precondition", "non-negotiable", "compulsorily", "unavoidable", "inescapable", "irrevocable",
  "statutory", "enforceable", "corroborate", "corroboration", "extrapolate", "extrapolation",
  "presupposition", "presuppose", "syllogism", "syllogistic", "ratiocination", "ineluctable",
  "indubitable", "indubitably", "infallible", "infallibility", "surmise", "unimpeachable",
  "tautology", "tautological", "peremptory", "incumbent", "requisition", "exigency", "exigent",
  "indispensability", "proscription", "substantiate", "substantiation", "unsubstantiated", "inexorable"
];

const dupes = [];
const unique = [];
for (const w of cand) {
  if (prior.has(w.toLowerCase())) {
    dupes.push(w);
  } else {
    unique.push(w);
  }
}
console.log(`Unique (${unique.length}):`, unique);
console.log(`Dupes (${dupes.length}):`, dupes);
