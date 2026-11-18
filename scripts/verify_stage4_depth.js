// scripts/verify_stage4_depth.js
import fs from 'fs';
import path from 'path';

async function verifyStage4() {
  console.log('====================================================');
  console.log('STAGE 4 (DAYS 31–40) DEPTH & RIGOR VERIFICATION');
  console.log('====================================================\n');

  let totalStage4Vocab = 0;
  let totalStage4Exercises = 0;
  let totalStage4Sentences = 0;
  const globalLexicon = new Set();

  for (let d = 1; d <= 40; d++) {
    const filePath = path.join(process.cwd(), 'content_builder', `day${d}.js`);
    if (!fs.existsSync(filePath)) {
      console.error(`Day ${d} file missing!`);
      continue;
    }
    const mod = (await import(`../content_builder/day${d}.js`))[`day${d}`];
    
    // Check vocab
    const vocab = mod.learn?.vocabulary || [];
    const dupes = [];
    vocab.forEach(v => {
      const lem = (v.lemma || v.word || '').toLowerCase().trim();
      if (globalLexicon.has(lem)) {
        dupes.push(lem);
      } else {
        globalLexicon.add(lem);
      }
    });

    const exercises = mod.practice?.exercises || [];
    const quiz = mod.assess?.milestone_quiz || [];
    const totalEx = exercises.length + quiz.length;

    const sentences = (mod.learn?.model_sentences || []).length +
      (mod.learn?.dialogue?.turns || []).length +
      (mod.learn?.grammar?.examples || []).length +
      (mod.speak?.pronunciation_drills || []).length +
      (mod.translate?.drills || []).length;

    if (d >= 31 && d <= 40) {
      totalStage4Vocab += vocab.length;
      totalStage4Exercises += totalEx;
      totalStage4Sentences += sentences;

      console.log(`Day ${d} [${mod.title}]:`);
      console.log(`  - Vocabulary: ${vocab.length} unique items (Dupes in curriculum: ${dupes.length})`);
      console.log(`  - Model Sentences / Drills: ${sentences}`);
      console.log(`  - Exercises (Practice + Quiz): ${totalEx}`);
      console.log(`  - Grammar Deep Dive: ${mod.learn?.grammar ? 'YES' : 'NO'}`);
      console.log(`  - Speaking & Pronunciation: ${mod.speak?.pronunciation_drills ? mod.speak.pronunciation_drills.length + ' drills' : 'NO'}`);
      console.log(`  - Listening Comprehension: ${mod.listen?.audio_drills ? mod.listen.audio_drills.length + ' drills' : 'NO'}`);
      console.log(`  - Bidirectional Translation: ${mod.translate?.drills ? mod.translate.drills.length + ' pairs' : 'NO'}`);
      console.log('----------------------------------------------------');
    }
  }

  console.log(`\nSTAGE 4 SUMMARY TOTALS:`);
  console.log(`Total New Stage 4 Vocabulary: ${totalStage4Vocab}`);
  console.log(`Total Stage 4 Exercises: ${totalStage4Exercises}`);
  console.log(`Total Stage 4 Audio / Model Sentences: ${totalStage4Sentences}`);
  console.log(`Total Global Unique Lemmas Tracked (Days 1–40): ${globalLexicon.size}`);
}

verifyStage4();
