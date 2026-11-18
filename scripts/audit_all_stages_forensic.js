// scripts/audit_all_stages_forensic.js
import fs from 'fs';
import path from 'path';

async function auditAll() {
  console.log("================================================================================");
  console.log("                 FORENSIC AUDIT OF ALL 6 STAGES (DAYS 1–60)                      ");
  console.log("================================================================================");

  let grandVocab = 0;
  let grandExemplars = 0;
  let grandExercises = 0;
  let grandTranslations = 0;
  const globalLemmaMap = new Map();
  const globalDuplicates = [];

  for (let d = 1; d <= 60; d++) {
    const num = String(d).padStart(2, '0');
    const filePath = path.join(process.cwd(), 'content_builder', `day${num}.js`);
    const altPath = path.join(process.cwd(), 'content_builder', `day${d}.js`);
    const actualPath = fs.existsSync(filePath) ? filePath : (fs.existsSync(altPath) ? altPath : null);

    if (!actualPath) {
      console.error(`MISSING FILE: content_builder/day${num}.js`);
      continue;
    }

    const mod = await import(`../content_builder/day${num}.js`);
    const day = mod[`day${num}`] || mod.default;

    const vocab = day.learn?.vocabulary || [];
    const exemplars = Array.isArray(day.examples) ? day.examples : (day.examples?.bilingualExemplars || []);
    const exercises = Array.isArray(day.practice) ? day.practice : (day.practice?.exercises || []);
    const translations = day.practice?.translationSet || [];
    const phrases = (day.learn?.phrases || day.learn?.spokenPhrases) || [];
    const dialogues = day.use?.dialogue?.turns || [];
    const assess = Array.isArray(day.assess) ? day.assess : (day.assess?.benchmarks || []);

    grandVocab += vocab.length;
    grandExemplars += exemplars.length;
    grandExercises += exercises.length;
    grandTranslations += translations.length;

    vocab.forEach(v => {
      const lemma = (v.lemma || v.wordForm || "").toLowerCase().trim();
      if (!lemma) return;
      if (globalLemmaMap.has(lemma)) {
        globalDuplicates.push({ lemma, firstSeenDay: globalLemmaMap.get(lemma), duplicateDay: d });
      } else {
        globalLemmaMap.set(lemma, d);
      }
    });

    console.log(`Day ${String(d).padStart(2, '0')} (Stage ${Math.ceil(d/10)}): "${day.titleEn?.slice(0, 30)}" | Vocab: ${vocab.length} | Examples: ${exemplars.length} | Exercises: ${exercises.length} | Trans: ${translations.length} | Phrases: ${phrases.length} | Turns: ${dialogues.length} | Assess: ${assess.length}`);
  }

  console.log("\n================================================================================");
  console.log("GRAND AGGREGATE TOTALS:");
  console.log(`- Total Vocabulary Entries: ${grandVocab}`);
  console.log(`- Total Unique Lemmata: ${globalLemmaMap.size}`);
  console.log(`- Total Exemplars: ${grandExemplars}`);
  console.log(`- Total Practice Exercises: ${grandExercises}`);
  console.log(`- Total Translations: ${grandTranslations}`);
  console.log(`- Total Duplicates Across All 60 Days: ${globalDuplicates.length}`);
  console.log("================================================================================");
}

auditAll().catch(console.error);
