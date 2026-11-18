// scripts/test_d39_40_candidates.js
import { getPriorLemmas } from './stage4_lexicon_helper.js';

const prior = await getPriorLemmas();
for (let d = 31; d <= 38; d++) {
  const mod = (await import(`../content_builder/day${d}.js`))[`day${d}`];
  mod.learn.vocabulary.forEach(v => prior.add(v.lemma));
}
console.log('Prior count (up to Day 38):', prior.size);

// Day 39 Candidates: Degrees of Adjective Comparison & Sentence Transformations
const cand39 = [
  "incomparable", "incomparably", "peerless", "peerlessly", "unrivaled", "unmatched",
  "unsurpassed", "matchless", "matchlessly", "preeminent", "preeminence", "paramount",
  "transcendent", "transcendence", "transcendental", "consummate", "consummately",
  "unparalleled", "superlative", "superlatively", "infinitesimal", "infinitesimally",
  "colossal", "colossally", "mammoth", "diminutive", "diminutiveness", "sublime",
  "sublimely", "sublimity", "paramountcy", "predominant", "predominantly",
  "predominance", "ineffable", "ineffably", "peerlessness", "transcend",
  "transcending", "inestimable", "inestimably", "quintessential", "quintessentially",
  "quintessence", "unsurpassable", "unsurpassably", "magnificent", "magnificence",
  "magnificently", "unequaled", "incommensurate", "incommensurable", "incomparability",
  "preponderant", "preponderance", "preponderate", "outweigh", "outweighed",
  "outshine", "outshone", "outstrip", "outstripped", "eclipsed", "unexcelled",
  "unapproachable", "nonpareil", "preeminently", "consummateness", "sublimeness",
  "infiniteness", "colossality", "mammothness", "unequalled", "transcendently"
];

// Day 40 Candidates: Cumulative Mastery Review & Linguistic Synthesis
const cand40 = [
  "synthesize", "synthesis", "synthesizer", "pedagogical", "pedagogically", "pedagogy",
  "proficiency", "proficient", "proficiently", "benchmark", "diagnostic",
  "diagnostician", "competency", "competence", "competently", "fluency", "fluent",
  "fluently", "nuance", "nuanced", "articulate", "articulately", "articulateness",
  "coherence", "coherent", "coherently", "diction", "lexicon", "syntactic",
  "syntactically", "pragmatic", "pragmatically", "pragmatics", "repertoire",
  "mastery", "evaluation", "evaluative", "evaluator", "summative", "formative",
  "rubric", "metacognition", "metacognitive", "retention", "consolidate",
  "consolidation", "linguistic", "linguistics", "linguist", "cumulative",
  "cumulatively", "comprehension", "comprehensive", "comprehensively", "discourse",
  "vernacular", "intonation", "cadence", "enunciation", "enunciate",
  "enunciated", "articulatory", "interlocutor", "polyglot", "fluencies",
  "metacognitively", "synthesizing", "lexical", "lexicography", "lexicographer",
  // additional
  "sociolinguistics", "sociolinguistic", "sociolinguist", "orthography",
  "orthographic", "orthographically", "pedagogue", "semantics",
  "semanticist", "semantically", "etymology", "etymological",
  "etymologist", "morphology", "morphological", "morphologically",
  "phonology", "phonological", "phonologist", "prosody", "prosodic",
  "elocution", "elocutionist", "circumlocution", "rhetorician",
  "vernacularly", "articulative", "proficientness", "interlocution",
  "interlocutory", "paralinguistic", "metalinguistic", "sociocultural",
  "socioculturally"
];

function testUnique(name, cand) {
  const unique = [];
  const dupes = [];
  for (const w of cand) {
    if (prior.has(w.toLowerCase())) {
      dupes.push(w);
    } else {
      unique.push(w);
    }
  }
  console.log(`${name}: Unique = ${unique.length}, Dupes = ${dupes.length}`);
}

testUnique('Day 39', cand39);
testUnique('Day 40', cand40);
