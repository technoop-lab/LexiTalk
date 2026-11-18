const fs = require('fs');
const path = require('path');

const STRINGS_TO_FIND = [
  "Assessment Item",
  "MODEL RESPONSE",
  "Reveal Evaluation Model",
  "Written Checklist",
  "Benchmark",
  "Mastery Standard",
  "assessmentExercises",
  "AssessmentView",
  "activeStep === 'assessment'",
  "activeSection === 'assess'",
];

function searchFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  const matches = [];
  lines.forEach((line, idx) => {
    STRINGS_TO_FIND.forEach((s) => {
      if (line.includes(s)) {
        matches.push({ line: idx + 1, string: s, text: line.trim() });
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

console.log('--- ALL ASSESSMENT RENDERER LOCATIONS IN SRC/ ---');
results.forEach((r) => {
  console.log(`\nFile: ${r.file}`);
  r.matches.forEach((m) => {
    console.log(`  Line ${m.line}: [${m.string}] -> ${m.text}`);
  });
});
