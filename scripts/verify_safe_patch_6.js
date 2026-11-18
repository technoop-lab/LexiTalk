const fs = require('fs');
const path = require('path');

const FORBIDDEN_STRINGS = [
  "MODEL RESPONSE",
  "Reveal Evaluation Model",
  "Assessment Item",
];

function searchDir(dir, matches = []) {
  const list = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of list) {
    const full = path.join(dir, item.name);
    if (item.isDirectory()) {
      if (!item.name.includes('node_modules') && !item.name.includes('.git') && !item.name.includes('dist')) {
        searchDir(full, matches);
      }
    } else if (item.isFile() && (item.name.endsWith('.tsx') || item.name.endsWith('.ts'))) {
      const content = fs.readFileSync(full, 'utf8');
      FORBIDDEN_STRINGS.forEach((str) => {
        if (content.includes(str)) {
          matches.push({ file: full, string: str });
        }
      });
    }
  }
  return matches;
}

const matches = searchDir(path.join(__dirname, '..', 'src'));

console.log('--- VERIFICATION FOR SAFE PATCH #6 ---');
console.log(`Forbidden Strings Found: ${matches.length}`);
if (matches.length > 0) {
  console.table(matches);
} else {
  console.log('✅ ZERO legacy strings ("MODEL RESPONSE", "Reveal Evaluation Model", "Assessment Item") found in src/!');
}
