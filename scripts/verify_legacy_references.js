const fs = require('fs');
const path = require('path');

const FORBIDDEN_STRINGS = [
  "Assessment Item",
  "MODEL RESPONSE",
  "Reveal Evaluation Model",
  "Written Checklist",
  "Benchmark",
  "Mastery Standard",
  "WRITTEN CHECKLIST",
  "BENCHMARK",
  "ORAL PRODUCTION",
];

function searchFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  const matches = [];
  lines.forEach((line, idx) => {
    FORBIDDEN_STRINGS.forEach((str) => {
      if (line.includes(str)) {
        matches.push({ line: idx + 1, string: str, text: line.trim() });
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

console.log('--- LEGACY ASSESSMENT RENDERER STRINGS SEARCH RESULTS ---');
console.log(`Matching Files Count: ${results.length}`);
if (results.length > 0) {
  results.forEach((r) => {
    console.log(`\nFile: ${r.file}`);
    r.matches.forEach((m) => {
      console.log(`  Line ${m.line}: [${m.string}] -> ${m.text}`);
    });
  });
} else {
  console.log('🎉 ZERO legacy assessment renderer references found in entire src/ codebase!');
}
