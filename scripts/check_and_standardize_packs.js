// scripts/check_and_standardize_packs.js
import fs from 'fs';

const packs = [
  'DAYS_01_10_CONTENT.json',
  'DAYS_11_20_CONTENT.json',
  'DAYS_21_30_CONTENT.json',
  'DAYS_31_40_CONTENT.json',
  'DAYS_41_50_CONTENT.json',
  'DAYS_51_60_CONTENT.json'
];

packs.forEach((p, idx) => {
  const raw = fs.readFileSync(p, 'utf-8');
  const parsed = JSON.parse(raw);
  const days = Array.isArray(parsed) ? parsed : parsed.days;
  console.log(`Pack ${idx + 1} (${p}): Array? ${Array.isArray(parsed)}, Days count: ${days?.length}, First day: ${days?.[0]?.dayNumber}, Last day: ${days?.[days?.length - 1]?.dayNumber}`);
  
  if (Array.isArray(parsed)) {
    console.log(`Wrapping ${p} into standard { stage: ${idx + 1}, daysCount: ${days.length}, days: [...] } structure...`);
    const standardized = {
      stage: idx + 1,
      stageTitle: "Stage " + (idx + 1),
      daysCount: days.length,
      days: days
    };
    fs.writeFileSync(p, JSON.stringify(standardized, null, 2), 'utf-8');
    console.log(`Standardized ${p} successfully.`);
  }
});
