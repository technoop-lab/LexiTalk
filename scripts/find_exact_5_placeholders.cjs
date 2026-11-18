const fs = require('fs');
const path = require('path');

const PLACEHOLDER_PATTERNS = [
  /incorrect phrasing/i,
  /colloquial mismatch/i,
  /grammatically invalid/i,
  /formal mismatch/i,
  /literal translation/i,
  /context mismatch/i,
  /placeholder option/i,
  /dummy option/i,
];

function searchInFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  lines.forEach((line, idx) => {
    PLACEHOLDER_PATTERNS.forEach((p) => {
      if (p.test(line)) {
        console.log(`${filePath}:${idx + 1}: ${line.trim()}`);
      }
    });
  });
}

const lessonsDir = path.join(__dirname, '..', 'src', 'data', 'lessons');
const files = fs.readdirSync(lessonsDir).filter((f) => f.endsWith('.ts'));

files.forEach((fileName) => {
  searchInFile(path.join(lessonsDir, fileName));
});

const jsonPacks = [
  'DAYS_01_10_CONTENT.json',
  'DAYS_11_20_CONTENT.json',
  'DAYS_21_30_CONTENT.json',
  'DAYS_31_40_CONTENT.json',
  'DAYS_41_50_CONTENT.json',
  'DAYS_51_60_CONTENT.json',
];

jsonPacks.forEach((p) => {
  const full = path.join(__dirname, '..', p);
  if (fs.existsSync(full)) {
    searchInFile(full);
  }
});
