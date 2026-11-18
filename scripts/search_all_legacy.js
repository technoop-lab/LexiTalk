const fs = require('fs');
const path = require('path');

const STRINGS = [
  "Assessment Item",
  "Written Checklist",
  "Benchmark",
  "Model Response",
  "Reveal Evaluation Model",
  "WRITTEN CHECKLIST",
  "BENCHMARK",
  "ORAL PRODUCTION",
];

function walk(dir) {
  const list = fs.readdirSync(dir, { withFileTypes: true });
  for (const f of list) {
    const full = path.join(dir, f.name);
    if (f.isDirectory()) {
      if (!f.name.includes('node_modules') && !f.name.includes('.git') && !f.name.includes('dist')) {
        walk(full);
      }
    } else if (f.isFile() && (f.name.endsWith('.tsx') || f.name.endsWith('.ts') || f.name.endsWith('.json'))) {
      const content = fs.readFileSync(full, 'utf8');
      STRINGS.forEach((s) => {
        if (content.includes(s)) {
          console.log(`MATCH [${s}]: ${full}`);
        }
      });
    }
  }
}

walk(path.join(__dirname, '..', 'src'));
