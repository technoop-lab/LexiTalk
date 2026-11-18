const fs = require('fs');
const path = require('path');

const FORBIDDEN_STRINGS = [
  "Assessment Item",
  "Written Checklist",
  "Benchmark",
  "Model Response",
  "Reveal Evaluation Model",
  "assessmentItems",
];

function searchFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  lines.forEach((line, idx) => {
    FORBIDDEN_STRINGS.forEach((str) => {
      if (line.includes(str)) {
        console.log(`${filePath}:${idx + 1}: [${str}] -> ${line.trim()}`);
      }
    });
  });
}

function walk(dir) {
  const list = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of list) {
    const full = path.join(dir, item.name);
    if (item.isDirectory()) {
      if (!item.name.includes('node_modules') && !item.name.includes('.git') && !item.name.includes('dist')) {
        walk(full);
      }
    } else if (item.isFile() && (item.name.endsWith('.tsx') || item.name.endsWith('.ts') || item.name.endsWith('.json'))) {
      searchFile(full);
    }
  }
}

console.log('Searching all src/ files for legacy assessment strings...\n');
walk(path.join(__dirname, '..', 'src'));
