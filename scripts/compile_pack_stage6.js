// scripts/compile_pack_stage6.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function compileStage6Json() {
  const days = [];
  let totalVocab = 0;
  let totalPhrases = 0;
  let totalExamples = 0;
  let totalExercises = 0;
  let totalDialogues = 0;
  let totalBenchmarks = 0;

  for (let d = 51; d <= 60; d++) {
    const mod = await import(`../content_builder/day${d}.js`);
    const day = mod[`day${d}`];
    days.push(day);

    totalVocab += day.learn?.vocabulary?.length || 0;
    totalPhrases += day.learn?.spokenPhrases?.length || 0;
    totalExamples += day.examples?.bilingualExemplars?.length || 0;
    totalExercises += day.practice?.exercises?.length || 0;
    totalDialogues += (day.use?.dialogues?.length || (day.use?.dialogue ? 1 : 0));
    totalBenchmarks += day.assess?.benchmarks?.length || 0;
  }

  const stage6Pack = {
    stage: 6,
    stageTitle: "Real-World Fluency, Institutional Discourse & Mastery Capstone",
    cefrLevel: "B1+",
    daysCount: days.length,
    totalVocabulary: totalVocab,
    totalPhrases: totalPhrases,
    totalExamples: totalExamples,
    totalExercises: totalExercises,
    totalDialogues: totalDialogues,
    totalBenchmarks: totalBenchmarks,
    days: days
  };

  const outPath = path.join(__dirname, '../DAYS_51_60_CONTENT.json');
  fs.writeFileSync(outPath, JSON.stringify(stage6Pack, null, 2), 'utf-8');
  console.log(`Successfully compiled DAYS_51_60_CONTENT.json with ${days.length} days, ${totalVocab} vocabulary items, and ${totalExercises} exercises!`);
}

compileStage6Json().catch(err => {
  console.error("Compilation error:", err);
  process.exit(1);
});
