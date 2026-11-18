const fs = require('fs');
const path = require('path');

const TARGETS = [
  "MODEL RESPONSE",
  "Reveal Evaluation Model",
  "Assessment Item",
  "assessmentItems",
  "Model Response",
  "Reveal Evaluation"
];

function searchFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  lines.forEach((line, idx) => {
    TARGETS.forEach((t) => {
      if (line.includes(t)) {
        console.log(`${filePath}:${idx + 1}: [${t}] -> ${line.trim()}`);
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

walk(path.join(__dirname, '..', 'src'));
