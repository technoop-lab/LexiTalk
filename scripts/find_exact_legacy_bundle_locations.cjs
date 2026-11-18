const fs = require('fs');
const path = require('path');

const STRINGS = ["Assessment Item", "Benchmark"];

function searchFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  lines.forEach((line, idx) => {
    STRINGS.forEach((s) => {
      if (line.includes(s)) {
        console.log(`[${s}] in ${filePath}:${idx + 1} -> ${line.trim()}`);
      }
    });
  });
}

function walk(dir) {
  const list = fs.readdirSync(dir, { withFileTypes: true });
  for (const f of list) {
    const full = path.join(dir, f.name);
    if (f.isDirectory()) {
      if (!f.name.includes('node_modules') && !f.name.includes('.git') && !f.name.includes('dist')) {
        walk(full);
      }
    } else if (f.isFile() && (f.name.endsWith('.tsx') || f.name.endsWith('.ts') || f.name.endsWith('.json'))) {
      searchFile(full);
    }
  }
}

walk(path.join(__dirname, '..', 'src'));
