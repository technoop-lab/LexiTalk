// scripts/reconcile_and_compile_production_packs.js
import fs from 'fs';
import path from 'path';

async function compileAllPacks() {
  console.log("================================================================================");
  console.log("   RECONCILING & REBUILDING ALL 6 PRODUCTION JSON PACKS (DAYS 1–60)            ");
  console.log("================================================================================");

  const daysByStage = {
    stage1: [],
    stage2: [],
    stage3: [],
    stage4: [],
    stage5: [],
    stage6: []
  };

  for (let d = 1; d <= 60; d++) {
    const num = String(d).padStart(2, '0');
    const mod = await import(`../content_builder/day${num}.js`);
    const dayObj = mod[`day${num}`] || mod.default;

    if (!dayObj) {
      throw new Error(`Failed to load day${num} from content_builder/day${num}.js`);
    }

    const stageNum = Math.ceil(d / 10);
    daysByStage[`stage${stageNum}`].push(dayObj);
  }

  // Define pack definitions
  const packs = [
    { name: 'DAYS_01_10_CONTENT.json', days: daysByStage.stage1, label: 'Stage 1 (Days 1–10)' },
    { name: 'DAYS_11_20_CONTENT.json', days: daysByStage.stage2, label: 'Stage 2 (Days 11–20)' },
    { name: 'DAYS_21_30_CONTENT.json', days: daysByStage.stage3, label: 'Stage 3 (Days 21–30)' },
    { name: 'DAYS_31_40_CONTENT.json', days: daysByStage.stage4, label: 'Stage 4 (Days 31–40)' },
    { name: 'DAYS_41_50_CONTENT.json', days: daysByStage.stage5, label: 'Stage 5 (Days 41–50)' },
    { name: 'DAYS_51_60_CONTENT.json', days: daysByStage.stage6, label: 'Stage 6 (Days 51–60)' }
  ];

  for (const pack of packs) {
    const filePath = path.join(process.cwd(), pack.name);
    const payload = {
      version: '2.0.0',
      timestamp: new Date().toISOString(),
      stageTitle: pack.label,
      daysCount: pack.days.length,
      days: pack.days
    };

    fs.writeFileSync(filePath, JSON.stringify(payload, null, 2), 'utf-8');
    const stats = fs.statSync(filePath);
    console.log(`[SAVED] ${pack.name.padEnd(26)} | Days: ${pack.days.length} | Size: ${(stats.size / 1024).toFixed(1)} KB`);
  }

  console.log("\n[SUCCESS] All 6 production JSON packs compiled and persisted successfully!");
}

compileAllPacks().catch(err => {
  console.error("FATAL ERROR compiling production packs:", err);
  process.exit(1);
});
