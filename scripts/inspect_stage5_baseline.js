// scripts/inspect_stage5_baseline.js
import fs from 'fs';
import path from 'path';

async function inspectStage5() {
  console.log('====================================================');
  console.log('INSPECTING EXISTING DAYS 41-50 BASELINE METRICS');
  console.log('====================================================\n');

  for (let d = 41; d <= 50; d++) {
    const filePath = path.join(process.cwd(), 'content_builder', `day${d}.js`);
    if (!fs.existsSync(filePath)) {
      console.log(`Day ${d}: FILE NOT FOUND`);
      continue;
    }
    const stats = fs.statSync(filePath);
    const mod = (await import(`../content_builder/day${d}.js`))[`day${d}`];

    const vocabCount = mod.learn?.vocabulary?.length || 0;
    const phrasesCount = mod.learn?.spokenPhrases?.length || mod.learn?.phrases?.length || 0;
    const exampleCount = mod.examples?.length || 0;
    const exerciseCount = mod.practice?.exercises?.length || (Array.isArray(mod.practice) ? mod.practice.length : 0);
    const transCount = mod.practice?.translationSet?.length || 0;
    const hasPhonetics = !!mod.phonetics;
    const hasUse = !!mod.use;
    const dialogueTurns = mod.use?.dialogue?.turns?.length || 0;

    console.log(`Day ${d} (${(stats.size / 1024).toFixed(1)} KB):`);
    console.log(`  Title: ${mod.titleEn || mod.title}`);
    console.log(`  Vocabulary: ${vocabCount}`);
    console.log(`  Phrases: ${phrasesCount}`);
    console.log(`  Exemplars/Examples: ${exampleCount}`);
    console.log(`  Practice Exercises: ${exerciseCount}`);
    console.log(`  Translations: ${transCount}`);
    console.log(`  Phonetics/Accent: ${hasPhonetics ? 'YES' : 'NO'}`);
    console.log(`  Dialogue Turns: ${dialogueTurns}`);
    console.log('----------------------------------------------------');
  }
}

inspectStage5();
