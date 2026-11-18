// scripts/forensic_audit.js
import fs from 'fs';
import path from 'path';

async function audit() {
  console.log("=== SCANNING SCRIPTS DIRECTORY FOR ENRICHED DAYS & STAGE BUILDERS ===");
  const files = fs.readdirSync('./scripts');
  const stageFiles = files.filter(f => f.includes('stage') || f.includes('day') || f.includes('enrich') || f.includes('build') || f.includes('verify'));
  console.log("Relevant script files:", stageFiles);

  // Check build_day01_enriched.js
  if (fs.existsSync('./scripts/build_day01_enriched.js')) {
    console.log("\n--- Checking scripts/build_day01_enriched.js ---");
    try {
      const mod = await import('../scripts/build_day01_enriched.js');
      console.log("Keys in build_day01_enriched:", Object.keys(mod));
      const d1 = mod.day01 || mod.day1 || mod.default;
      if (d1) {
        console.log("Day 1 in build_day01_enriched:", {
          vocab: d1.learn?.vocabulary?.length,
          phrases: (d1.learn?.phrases || d1.learn?.spokenPhrases)?.length,
          examples: (Array.isArray(d1.examples) ? d1.examples.length : d1.examples?.bilingualExemplars?.length),
          exercises: (Array.isArray(d1.practice) ? d1.practice.length : d1.practice?.exercises?.length)
        });
      }
    } catch (e) {
      console.log("Error loading build_day01_enriched:", e.message);
    }
  }

  // Check build_stage1_days01_02.js
  if (fs.existsSync('./scripts/build_stage1_days01_02.js')) {
    console.log("\n--- Checking scripts/build_stage1_days01_02.js ---");
    try {
      const mod = await import('../scripts/build_stage1_days01_02.js');
      console.log("Keys in build_stage1_days01_02:", Object.keys(mod));
    } catch (e) {
      console.log("Error loading build_stage1_days01_02:", e.message);
    }
  }

  // Check verify_stage1_master.js
  if (fs.existsSync('./scripts/verify_stage1_master.js')) {
    console.log("\n--- Checking scripts/verify_stage1_master.js ---");
    const content = fs.readFileSync('./scripts/verify_stage1_master.js', 'utf-8');
    console.log("Lines 1-50 of verify_stage1_master.js:\n", content.slice(0, 1500));
  }
}

audit().catch(console.error);
