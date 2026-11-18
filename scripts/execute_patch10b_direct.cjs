const fs = require('fs');
const path = require('path');

const PLACEHOLDER_REGEX = /text:\s*['"](Incorrect phrasing|Grammatically invalid|Colloquial mismatch|Context mismatch|Formal mismatch|Literal translation|Placeholder option|Dummy option)['"]/gi;

const DAY_DISTRACTOR_MAP = {
  1: ['Good afternoon', 'Good evening', 'Good night', 'Where do you live?'],
  2: ['May I sit here?', 'Could I have a menu?', 'Would you mind helping?'],
  3: ['What a wonderful morning!', 'How fast time flies!', 'How beautiful!'],
  4: ['Please close the door.', 'Turn off the lights.', 'Please sit down.'],
  5: ['See you tomorrow.', 'Have a nice weekend.', 'Take care.'],
  6: ['my book', 'your car', 'his house', 'her desk'],
  7: ['ten', 'twenty', 'fifty', 'hundred'],
  8: ['father', 'mother', 'brother', 'sister'],
  9: ['in the morning', 'at noon', 'in the evening', 'at night'],
  10: ['living room', 'kitchen', 'bedroom', 'bathroom'],
};

const beforeAfterSnapshots = [];
const dayModifiedCounts = {};

for (let d = 1; d <= 60; d++) {
  dayModifiedCounts[d] = 0;
}

const lessonsDir = path.join(__dirname, '..', 'src', 'data', 'lessons');
const files = fs.readdirSync(lessonsDir).filter((f) => f.endsWith('.ts'));

files.forEach((fileName) => {
  const match = fileName.match(/lesson_a1_\d+_(\d+)\.ts/);
  if (!match) return;
  const dayNum = parseInt(match[1], 10);
  if (dayNum > 60) return;

  const filePath = path.join(lessonsDir, fileName);
  let content = fs.readFileSync(filePath, 'utf8');

  let modifiedInFile = 0;
  let beforeSample = '';
  let afterSample = '';

  const fallbacks = DAY_DISTRACTOR_MAP[dayNum] || ['Good morning', 'Nice to meet you', 'Where do you live?', 'I am a student'];

  let fIdx = 0;
  if (PLACEHOLDER_REGEX.test(content)) {
    // Capture Before Sample
    const matches = content.match(PLACEHOLDER_REGEX);
    if (matches && matches.length > 0) {
      beforeSample = matches[0];
    }

    content = content.replace(PLACEHOLDER_REGEX, () => {
      modifiedInFile++;
      const rep = fallbacks[fIdx % fallbacks.length];
      fIdx++;
      return `text: "${rep}"`;
    });

    afterSample = `text: "${fallbacks[0]}"`;

    fs.writeFileSync(filePath, content, 'utf8');
    dayModifiedCounts[dayNum] = (dayModifiedCounts[dayNum] || 0) + modifiedInFile;

    if (dayNum <= 10) {
      beforeAfterSnapshots.push({
        day: dayNum,
        file: fileName,
        original: beforeSample || 'text: "Incorrect phrasing"',
        replacement: afterSample || `text: "${fallbacks[0]}"`,
      });
    }
  }
});

console.log('--- DIRECT IN-PLACE CONTENT REPAIR EXECUTED ---');
console.log('Modified Practice Questions Count Per Day (Days 1–60):');
console.table(dayModifiedCounts);

if (beforeAfterSnapshots.length > 0) {
  console.log('\n--- BEFORE / AFTER PROOF OF CHANGE (DAYS 1–10) ---');
  console.table(beforeAfterSnapshots);
}
