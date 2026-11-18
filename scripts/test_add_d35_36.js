// scripts/test_add_d35_36.js
import { getPriorLemmas } from './stage4_lexicon_helper.js';

const prior = await getPriorLemmas();
for (let d = 31; d <= 34; d++) {
  const mod = (await import(`../content_builder/day${d}.js`))[`day${d}`];
  mod.learn.vocabulary.forEach(v => prior.add(v.lemma));
}
console.log('Prior count:', prior.size);

const moreTimeWords = [
  "punctual", "punctuality", "reschedule", "postpone", "postponement", "deadline",
  "itinerary", "procrastinate", "procrastination", "prioritize", "prioritization",
  "agenda", "convene", "adjourn", "adjournment", "simultaneous", "simultaneously",
  "chronological", "chronology", "synchronize", "synchronization", "provisional",
  "provisionally", "backlog", "bottleneck", "concurrent", "concurrently",
  "consecutive", "consecutively", "expedite", "expeditious", "expeditiously",
  "punctually", "tardiness", "tardy", "interval", "fortnight", "fortnightly",
  "biennial", "triennial", "overtime", "workload", "timeslot", "timeframe",
  "interim", "duration", "elapsed", "punctilious", "punctiliousness", "unpunctual",
  "unpunctuality", "prepone", "preponement", "rescheduling", "calendarize",
  "timekeeping", "downtime", "lead-time", "turnaround", "time-sensitive",
  "out-of-office", "concurrence", "diurnal", "nocturnal", "ephemeral",
  "transitory", "perennial", "perennially",
  // additional rich candidates
  "centennial", "sesquicentennial", "bicentennial", "millennium", "millennial",
  "fleeting", "fleetingness", "intermission", "prolongation", "prolong",
  "prolonged", "overdue", "punctilio", "timekeeper", "chronometer", "chronometry",
  "anachronism", "anachronistic", "synchrony", "asynchronous", "asynchronously",
  "asynchrony", "bimonthly", "semiannual", "semiannually", "quadrennial",
  "centenary", "perpetuity", "perpetuate", "perpetuation", "uninterrupted",
  "interrupted", "interruption", "resumption", "resume", "deferral", "defer",
  "deferment", "punctiliously", "time-consuming", "time-bound", "timeliness"
];

const unique = [];
const dupes = [];
for (const w of moreTimeWords) {
  if (prior.has(w.toLowerCase())) {
    dupes.push(w);
  } else {
    unique.push(w);
  }
}
console.log(`Day 35 test: Unique = ${unique.length}, Dupes = ${dupes.length}`);
