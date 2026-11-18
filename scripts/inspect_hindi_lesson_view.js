const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'components', 'hindi', 'HindiLessonView.tsx');
const content = fs.readFileSync(filePath, 'utf8');
const lines = content.split('\n');

lines.forEach((line, idx) => {
  if (/assessment|checklist|benchmark|model|evaluation|assessmentitem/i.test(line)) {
    console.log(`${idx + 1}: ${line.trim()}`);
  }
});
