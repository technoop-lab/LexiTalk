// scripts/test_d37_38_candidates.js
import { getPriorLemmas } from './stage4_lexicon_helper.js';

const prior = await getPriorLemmas();
for (let d = 31; d <= 36; d++) {
  const mod = (await import(`../content_builder/day${d}.js`))[`day${d}`];
  mod.learn.vocabulary.forEach(v => prior.add(v.lemma));
}
console.log('Prior count (up to Day 36):', prior.size);

// Day 37 Candidates: Encouragement, Praise, Congratulations & Good Wishes
const cand37 = [
  "commendable", "commendation", "exemplary", "laudable", "laudatory", "accolade",
  "congratulatory", "plaudits", "felicitate", "felicitation", "felicitous",
  "felicitously", "eulogize", "eulogy", "eulogistic", "applaud", "applauded",
  "unwavering", "unflagging", "indomitable", "unflinching", "resilience",
  "resilient", "resiliently", "tenacity", "tenacious", "tenaciously", "heartfelt",
  "heartening", "reassuring", "reassuringly", "bolster", "fortitude",
  "valiant", "valiantly", "meritorious", "meritoriously", "illustrious",
  "kudos", "applause", "approbation", "approbatory", "encomium", "panegyric",
  "complimentary", "complimented", "salutary", "salute", "salutation",
  "adulation", "adulatory", "exaltation", "exalt", "exalted", "lionize",
  "lionization", "celebrated", "revered", "revere", "reverence", "reverential",
  "unflinchingly", "indomitably", "commendably", "exemplarily", "laudably",
  // additional
  "homage", "panegyrist", "laudation", "exaltedly", "lionized",
  "reinvigorate", "reinvigoration", "hearteningly", "unwaveringly", "unflaggingly",
  "indomitability", "valiance", "meritoriousness", "laudability", "exemplariness",
  "commendableness", "approbative", "congratulator", "felicitator", "felicitousness",
  "eulogizer", "plaudit", "panegyrical", "encomiastic", "adulator"
];

// Day 38 Candidates: Emotional Communication & Constructive Apology
const cand38 = [
  "remorse", "remorseful", "remorsefully", "contrition", "contrite", "contritely",
  "penitence", "penitent", "penitently", "reparation", "redress", "amends",
  "recompense", "atonement", "atone", "unreservedly",
  "culpability", "culpable", "culpably", "grievance", "aggrieved", "conciliate",
  "conciliator", "placate", "propitiate", "propitiation", "propitiatory",
  "expiate", "expiation", "expiatory", "contriteness", "remorseless",
  "penitential", "apologetic", "apologetically", "repentance", "repentant",
  "repentantly", "chagrin", "rueful", "ruefully", "ruefulness", "mortification",
  "mortify", "mortified", "vulnerability", "vulnerable", "vulnerably",
  "empathize", "empathetic", "empathetically", "sympathize", "consolation",
  "console", "inconsolable", "inconsolably", "forgiveness", "forgiving",
  "clemency", "magnanimity", "magnanimous", "magnanimously", "pardonable",
  // additional
  "pardonably", "unpardonable", "unpardonably", "expiator",
  "chagrined", "remorsefulness", "aggrievement", "exculpate",
  "exculpation", "exculpatory", "vindicate", "vindication", "vindicatory",
  "absolution", "absolve", "forgivingly", "forgivingness",
  "magnanimousness", "compunction", "unrepentant", "unrepentantly", "unatoned"
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

testUnique('Day 37', cand37);
testUnique('Day 38', cand38);
