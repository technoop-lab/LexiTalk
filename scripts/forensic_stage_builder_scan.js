// scripts/forensic_stage_builder_scan.js
import fs from 'fs';
import path from 'path';

async function scan() {
  console.log("=== EXAMINING STAGE 1 BUILDERS ===");
  const stage1Builders = [
    'build_day01_enriched.js',
    'build_stage1_days01_02.js',
    'build_stage1_day03.js',
    'build_stage1_days04_05.js',
    'build_stage1_day06.js',
    'build_stage1_days06_10.js',
    'compile_stage1_days06_10.js',
    'resolve_all_stage1_uniqueness.js',
    'sanitize_stage1_lemmas.js'
  ];

  for (const b of stage1Builders) {
    if (fs.existsSync(`./scripts/${b}`)) {
      console.log(`\n--- scripts/${b} ---`);
      const raw = fs.readFileSync(`./scripts/${b}`, 'utf-8');
      console.log(raw.slice(0, 500));
    }
  }
}

scan().catch(console.error);
