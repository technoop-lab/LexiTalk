// scripts/audit_all_sources.js
import fs from 'fs';
import path from 'path';

async function auditSources() {
  console.log("=== AUDIT OF PRODUCTION JSON FILES VS CONTENT_BUILDER FILES ===");

  // 1. Check production JSON packs
  const packs = [
    'DAYS_01_10_CONTENT.json',
    'DAYS_11_20_CONTENT.json',
    'DAYS_21_30_CONTENT.json',
    'DAYS_31_40_CONTENT.json',
    'DAYS_41_50_CONTENT.json',
    'DAYS_51_60_CONTENT.json'
  ];

  for (let i = 0; i < packs.length; i++) {
    const packFile = packs[i];
    if (fs.existsSync(packFile)) {
      const raw = fs.readFileSync(packFile, 'utf-8');
      const data = JSON.parse(raw);
      const days = Array.isArray(data) ? data : data.days;
      let totalVocab = 0, totalExercises = 0, totalExamples = 0, totalPhrases = 0;
      days.forEach(d => {
        totalVocab += (d.learn?.vocabulary?.length || 0);
        totalPhrases += ((d.learn?.phrases || d.learn?.spokenPhrases)?.length || 0);
        totalExercises += (Array.isArray(d.practice) ? d.practice.length : d.practice?.exercises?.length || 0);
        totalExamples += (Array.isArray(d.examples) ? d.examples.length : d.examples?.bilingualExemplars?.length || 0);
      });
      console.log(`[PACK ${i+1}] ${packFile}: ${days.length} days | Vocab: ${totalVocab} | Phrases: ${totalPhrases} | Examples: ${totalExamples} | Exercises: ${totalExercises}`);
    } else {
      console.log(`[PACK ${i+1}] ${packFile}: NOT FOUND`);
    }
  }

  // 2. Check content_builder day01 .. day60
  console.log("\n=== CHECKING content_builder/day01.js .. day60.js ===");
  let cbVocab = 0, cbPhrases = 0, cbExercises = 0, cbExamples = 0;
  for (let d = 1; d <= 60; d++) {
    const dStr = d < 10 ? `0${d}` : `${d}`;
    const cbPath = `./content_builder/day${dStr}.js`;
    const cbPathAlt = `./content_builder/day${d}.js`;
    const actualPath = fs.existsSync(cbPath) ? cbPath : (fs.existsSync(cbPathAlt) ? cbPathAlt : null);
    
    if (actualPath) {
      try {
        const mod = await import(`../${actualPath}`);
        const day = mod[`day${dStr}`] || mod[`day${d}`] || mod.default;
        if (day) {
          const v = day.learn?.vocabulary?.length || 0;
          const p = (day.learn?.phrases || day.learn?.spokenPhrases)?.length || 0;
          const e = (Array.isArray(day.examples) ? day.examples.length : day.examples?.bilingualExemplars?.length || 0);
          const ex = (Array.isArray(day.practice) ? day.practice.length : day.practice?.exercises?.length || 0);
          cbVocab += v; cbPhrases += p; cbExamples += e; cbExercises += ex;
          if (d === 1 || d === 10 || d === 11 || d === 20 || d === 21 || d === 30 || d === 31 || d === 40 || d === 41 || d === 50 || d === 51 || d === 60) {
            console.log(`  content_builder Day ${d}: Vocab=${v}, Phrases=${p}, Examples=${e}, Exercises=${ex}`);
          }
        }
      } catch (err) {
        console.error(`Error importing ${actualPath}:`, err.message);
      }
    } else {
      console.log(`  content_builder Day ${d}: FILE NOT FOUND`);
    }
  }
  console.log(`content_builder TOTALS: Vocab=${cbVocab}, Phrases=${cbPhrases}, Examples=${cbExamples}, Exercises=${cbExercises}`);
}

auditSources().catch(console.error);
