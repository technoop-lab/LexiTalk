const fs = require('fs');
const path = require('path');

const SEARCH_STRINGS = [
  "MODEL RESPONSE",
  "Reveal Evaluation Model",
  "Assessment Item",
  "Proceed to Final Review",
];

function searchDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!entry.name.includes('node_modules') && !entry.name.includes('.git') && !entry.name.includes('.idea') && !entry.name.includes('build')) {
        searchDir(fullPath);
      }
    } else if (entry.isFile() && (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts') || entry.name.endsWith('.json'))) {
      const content = fs.readFileSync(fullPath, 'utf8');
      const lines = content.split('\n');
      lines.forEach((line, idx) => {
        for (const str of SEARCH_STRINGS) {
          if (line.includes(str)) {
            console.log(`${fullPath}:${idx + 1}: ${line.trim()}`);
          }
        }
      });
    }
  }
}

console.log('Searching for legacy assessment strings in src/...\n');
searchDir(path.join(process.cwd(), 'src'));
