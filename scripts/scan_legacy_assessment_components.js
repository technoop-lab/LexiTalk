const fs = require('fs');
const path = require('path');

const TARGETS = [
  "MODEL RESPONSE",
  "Reveal Evaluation Model",
  "Assessment Item",
  "Proceed to Final Review",
  "Proceed to Final",
  "assessmentItems"
];

function scanDirectory(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  for (const f of files) {
    const full = path.join(dir, f.name);
    if (f.isDirectory()) {
      if (!f.name.includes('node_modules') && !f.name.includes('.git') && !f.name.includes('dist') && !f.name.includes('build')) {
        scanDirectory(full);
      }
    } else if (f.isFile() && (f.name.endsWith('.ts') || f.name.endsWith('.tsx') || f.name.endsWith('.json'))) {
      const txt = fs.readFileSync(full, 'utf8');
      TARGETS.forEach((t) => {
        if (txt.includes(t)) {
          console.log(`MATCH "${t}": ${full}`);
        }
      });
    }
  }
}

scanDirectory(path.join(__dirname, '..', 'src'));
