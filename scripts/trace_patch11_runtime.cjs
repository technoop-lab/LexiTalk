const fs = require('fs');
const path = require('path');

const LEGACY_PATTERNS = [
  "Assessment Item",
  "MODEL RESPONSE",
  "Reveal Evaluation Model",
  "Written Checklist",
  "Benchmark",
  "ORAL PRODUCTION",
  "LegacyAssessmentRenderer",
  "AssessmentCard",
  "BenchmarkCard",
  "WrittenChecklistCard",
  "assessmentExercises",
  "AssessmentView",
];

function searchFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  const matches = [];
  lines.forEach((line, idx) => {
    LEGACY_PATTERNS.forEach((p) => {
      if (line.includes(p)) {
        matches.push({ line: idx + 1, pattern: p, text: line.trim() });
      }
    });
  });
  return matches;
}

function walk(dir, results = []) {
  const list = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of list) {
    const full = path.join(dir, item.name);
    if (item.isDirectory()) {
      if (!item.name.includes('node_modules') && !item.name.includes('.git') && !item.name.includes('dist')) {
        walk(full, results);
      }
    } else if (item.isFile() && (item.name.endsWith('.tsx') || item.name.endsWith('.ts'))) {
      const matches = searchFile(full);
      if (matches.length > 0) {
        results.push({ file: full, matches });
      }
    }
  }
  return results;
}

const results = walk(path.join(__dirname, '..', 'src'));

console.log('--- ALL ASSESSMENT REFERENCES IN SRC/ ---');
results.forEach((r) => {
  console.log(`\nFile: ${r.file}`);
  r.matches.forEach((m) => {
    console.log(`  Line ${m.line}: [${m.pattern}] -> ${m.text}`);
  });
});
