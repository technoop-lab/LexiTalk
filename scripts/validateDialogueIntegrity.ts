import { getRegistryDayByNumber } from '../src/data/curriculumRegistry';
import * as fs from 'fs';

interface ValidationResult {
  dayNumber: number;
  hasUseDialogues: boolean;
  scenariosCount: number;
  totalTurns: number;
  minTurnsPerScenario: number;
  maxTurnsPerScenario: number;
  isSyntheticFallback: boolean;
  issues: string[];
}

export function validateAllDialogues(): { results: ValidationResult[]; summary: { totalErrors: number; multiScenarioDays: number } } {
  const results: ValidationResult[] = [];
  let totalErrors = 0;
  let multiScenarioDays = 0;

  for (let dayNum = 1; dayNum <= 60; dayNum++) {
    const day = getRegistryDayByNumber(dayNum);
    const issues: string[] = [];

    if (!day) {
      issues.push(`Day ${dayNum} not found in curriculum registry`);
      results.push({
        dayNumber: dayNum,
        hasUseDialogues: false,
        scenariosCount: 0,
        totalTurns: 0,
        minTurnsPerScenario: 0,
        maxTurnsPerScenario: 0,
        isSyntheticFallback: false,
        issues
      });
      totalErrors++;
      continue;
    }

    const dialogues = day.use?.dialogues || [];
    const hasUseDialogues = Array.isArray(dialogues) && dialogues.length > 0;
    const scenariosCount = dialogues.length;

    if (scenariosCount > 1) {
      multiScenarioDays++;
    }

    let totalTurns = 0;
    let minTurns = Infinity;
    let maxTurns = 0;
    let isSyntheticFallback = false;

    dialogues.forEach((sc, scIdx) => {
      if (!sc.id) issues.push(`Day ${dayNum} Scenario ${scIdx + 1} missing 'id'`);
      if (!sc.title) issues.push(`Day ${dayNum} Scenario ${scIdx + 1} missing 'title'`);
      if (!sc.context && !sc.situation) issues.push(`Day ${dayNum} Scenario ${scIdx + 1} missing 'context/situation'`);

      const turns = sc.turns || [];
      const turnCount = turns.length;
      totalTurns += turnCount;
      if (turnCount < minTurns) minTurns = turnCount;
      if (turnCount > maxTurns) maxTurns = turnCount;

      if (turnCount === 2 && turns[0]?.speaker === 'Speaker A' && turns[1]?.speaker === 'Speaker B' && turns[0]?.textEn === turns[1]?.textEn) {
        isSyntheticFallback = true;
        issues.push(`Day ${dayNum} Scenario ${scIdx + 1} triggered duplicate synthetic fallback!`);
      }

      turns.forEach((turn, tIdx) => {
        if (!turn.speaker || turn.speaker.trim() === '') {
          issues.push(`Day ${dayNum} Scenario ${scIdx + 1} Turn ${tIdx + 1} missing speaker`);
        }
        if (!turn.textEn || turn.textEn.trim() === '') {
          issues.push(`Day ${dayNum} Scenario ${scIdx + 1} Turn ${tIdx + 1} missing textEn`);
        }
        if (!turn.textHi || turn.textHi.trim() === '') {
          issues.push(`Day ${dayNum} Scenario ${scIdx + 1} Turn ${tIdx + 1} missing textHi`);
        }
      });
    });

    if (minTurns === Infinity) minTurns = 0;

    // Days 1-40 are expected to have 10 full scenarios with 10+ turns each
    if (dayNum >= 1 && dayNum <= 40) {
      if (scenariosCount !== 10) {
        issues.push(`Day ${dayNum} expected 10 scenarios, found ${scenariosCount}`);
      }
      if (minTurns < 10) {
        issues.push(`Day ${dayNum} expected 10+ turns per scenario, found minimum ${minTurns}`);
      }
    }

    if (issues.length > 0) {
      totalErrors += issues.length;
    }

    results.push({
      dayNumber: dayNum,
      hasUseDialogues,
      scenariosCount,
      totalTurns,
      minTurnsPerScenario: minTurns,
      maxTurnsPerScenario: maxTurns,
      isSyntheticFallback,
      issues
    });
  }

  return { results, summary: { totalErrors, multiScenarioDays } };
}

// Execute standalone check
const { results, summary } = validateAllDialogues();

console.log('============================================================');
console.log('DIALOGUE DATA INTEGRATION VALIDATION SUITE');
console.log('============================================================');

console.log('\n--- TARGET DAYS DETAILED VERIFICATION ---');
[1, 11, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40].forEach(dNum => {
  const res = results.find(r => r.dayNumber === dNum);
  console.log(`Day ${dNum}:`, {
    scenarios: res?.scenariosCount,
    totalTurns: res?.totalTurns,
    minTurns: res?.minTurnsPerScenario,
    maxTurns: res?.maxTurnsPerScenario,
    syntheticFallback: res?.isSyntheticFallback,
    issues: res?.issues
  });
});

console.log('\n--- 60-DAY CURRICULUM STRUCTURAL AUDIT ---');
let daysWithIssues = 0;
results.forEach(r => {
  if (r.issues.length > 0) {
    daysWithIssues++;
    console.log(`[ALERT] Day ${r.dayNumber}: ${r.issues.join(' | ')}`);
  } else {
    // console.log(`[OK] Day ${r.dayNumber}: ${r.scenariosCount} scenario(s), ${r.totalTurns} turns`);
  }
});

console.log('\n--- AUDIT SUMMARY ---');
console.log(`Total Days Audited: ${results.length}`);
console.log(`Multi-Scenario Days: ${summary.multiScenarioDays}`);
console.log(`Days with Issues: ${daysWithIssues}`);
console.log(`Total Errors / Schema Violations: ${summary.totalErrors}`);

if (summary.totalErrors === 0) {
  console.log('\n✅ ALL DIALOGUE INTEGRITY CHECKS PASSED PERFECTLY!');
} else {
  console.error(`\n❌ FOUND ${summary.totalErrors} ISSUES.`);
  process.exit(1);
}
