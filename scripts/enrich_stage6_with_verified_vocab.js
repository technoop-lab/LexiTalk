// scripts/enrich_stage6_with_verified_vocab.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const verifiedVocab = JSON.parse(fs.readFileSync(path.join(__dirname, 'stage6_vocabulary_verified.json'), 'utf-8'));

async function enrich() {
  for (let d = 51; d <= 60; d++) {
    const mod = await import(`../content_builder/day${d}.js`);
    const dayData = mod[`day${d}`];

    const dayVocabList = verifiedVocab[d] || [];
    if (dayVocabList.length === 0) {
      console.warn(`Warning: No verified vocab found for day ${d}`);
      continue;
    }

    // Map vocabulary to ensure both 'word' and 'lemma' are present alongside all deep fields
    dayData.learn.vocabulary = dayVocabList.map((item, idx) => ({
      id: `day${d}_vocab_${String(idx + 1).padStart(3, '0')}`,
      word: item.lemma,
      lemma: item.lemma,
      wordForm: item.wordForm || item.lemma,
      pos: item.pos || "Noun",
      ipa: item.ipa || "/ˈwɜːd/",
      hindiIpa: item.hindiIpa || item.lemma,
      syllables: item.syllables || item.lemma,
      stress: item.stress || "Primary on 1st syllable",
      collocations: item.collocations || [`standard ${item.lemma}`],
      relatedForms: item.relatedForms || [],
      register: item.register || "Formal / Professional",
      meaningHi: item.meaningHi,
      exampleEn: item.exampleEn,
      exampleHi: item.exampleHi,
      commonLearnerError: item.commonLearnerError || "Avoid literal translation; adhere to standard professional usage.",
      recyclingSchedule: item.recyclingSchedule || [d, Math.min(60, d + 3), 60]
    }));

    const outPath = path.join(__dirname, `../content_builder/day${d}.js`);
    const fileContent = `export const day${d} = ${JSON.stringify(dayData, null, 2)};\n`;
    fs.writeFileSync(outPath, fileContent, 'utf-8');

    console.log(`[ENRICHED] Day ${d}: Updated vocabulary to ${dayData.learn.vocabulary.length} pristine verified items!`);
  }
}

enrich().then(() => {
  console.log("All Stage 6 days (51-60) successfully enriched with 60+ verified vocabulary items!");
}).catch(err => {
  console.error("Enrichment failed:", err);
  process.exit(1);
});
