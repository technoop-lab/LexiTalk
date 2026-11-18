const fs = require('fs');
const path = require('path');

const PLACEHOLDER_REGEX = /incorrect phrasing|colloquial mismatch|grammatically invalid|formal mismatch|literal translation|context mismatch|placeholder option|dummy option/i;

const DAY_DISTRACTOR_POOLS = {
  1: ['Good afternoon', 'Good evening', 'Good night', 'Where do you live?', 'What is your name?'],
  2: ['Could I have a menu?', 'May I sit here?', 'Would you mind helping?', 'Please call a taxi.'],
  3: ['What a wonderful morning!', 'How fast time flies!', 'How beautiful this place is!'],
  4: ['Please close the door.', 'Turn off the lights.', 'Please sit down.', 'Open your book.'],
  5: ['See you tomorrow.', 'Have a nice weekend.', 'Take care.', 'Good night.'],
  6: ['my book', 'your car', 'his house', 'her desk'],
  7: ['ten', 'twenty', 'fifty', 'hundred'],
  8: ['father', 'mother', 'brother', 'sister', 'uncle', 'aunt'],
  9: ['in the morning', 'at noon', 'in the evening', 'at night'],
  10: ['living room', 'kitchen', 'bedroom', 'bathroom', 'balcony'],
};

function isHindi(text) {
  return /[\u0900-\u097F]/.test(text || '');
}

function getFallbackDistractors(dayNum, isHindiText) {
  if (isHindiText) {
    return ['शुभ प्रभात', 'शुभ संध्या', 'नमस्ते', 'आप कैसे हैं?', 'फिर मिलेंगे'];
  }
  return DAY_DISTRACTOR_POOLS[dayNum] || ['Good morning', 'Nice to meet you', 'Where do you live?', 'I am a student'];
}

const beforeAfterSnapshots = {};
const dayModifiedCounts = {};

for (let d = 1; d <= 60; d++) {
  dayModifiedCounts[d] = 0;
}

// 1. REPAIR TS LESSON FILES
const lessonsDir = path.join(__dirname, '..', 'src', 'data', 'lessons');
const files = fs.readdirSync(lessonsDir).filter((f) => f.endsWith('.ts'));

files.forEach((fileName) => {
  const match = fileName.match(/lesson_a1_\d+_(\d+)\.ts/);
  if (!match) return;
  const dayNum = parseInt(match[1], 10);
  if (dayNum > 60) return;

  const filePath = path.join(lessonsDir, fileName);
  let content = fs.readFileSync(filePath, 'utf8');

  let modifiedCount = 0;

  // Capture BEFORE snapshot for Days 1..10
  if (dayNum <= 10 && !beforeAfterSnapshots[dayNum]) {
    const beforeMatches = content.match(/text:\s*['"](Incorrect phrasing|Grammatically invalid|Colloquial mismatch|Context mismatch)['"]/gi) || [];
    beforeAfterSnapshots[dayNum] = {
      file: fileName,
      beforeCount: beforeMatches.length,
      beforeSamples: [],
      afterSamples: [],
    };

    const lines = content.split('\n');
    lines.forEach((line, idx) => {
      if (PLACEHOLDER_REGEX.test(line) && beforeAfterSnapshots[dayNum].beforeSamples.length < 2) {
        beforeAfterSnapshots[dayNum].beforeSamples.push({
          lineNum: idx + 1,
          code: line.trim(),
        });
      }
    });
  }

  let newContent = content;
  const fallbacksEn = getFallbackDistractors(dayNum, false);

  let fallbackIdx = 0;
  newContent = newContent.replace(/text:\s*['"](Incorrect phrasing|Grammatically invalid|Colloquial mismatch|Context mismatch|Formal mismatch|Literal translation)['"]/gi, (match) => {
    modifiedCount++;
    const replacement = fallbacksEn[fallbackIdx % fallbacksEn.length];
    fallbackIdx++;
    return `text: "${replacement}"`;
  });

  if (newContent !== content) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    dayModifiedCounts[dayNum] = (dayModifiedCounts[dayNum] || 0) + modifiedCount;

    if (dayNum <= 10 && beforeAfterSnapshots[dayNum]) {
      const lines = newContent.split('\n');
      lines.forEach((line, idx) => {
        if (beforeAfterSnapshots[dayNum].beforeSamples.some(s => Math.abs(s.lineNum - (idx + 1)) <= 2)) {
          beforeAfterSnapshots[dayNum].afterSamples.push({
            lineNum: idx + 1,
            code: line.trim(),
          });
        }
      });
    }
  }
});

// 2. REPAIR JSON CONTENT PACKS
const jsonPacks = [
  'DAYS_01_10_CONTENT.json',
  'DAYS_11_20_CONTENT.json',
  'DAYS_21_30_CONTENT.json',
  'DAYS_31_40_CONTENT.json',
  'DAYS_41_50_CONTENT.json',
  'DAYS_51_60_CONTENT.json',
];

jsonPacks.forEach((packName) => {
  const fullPath = path.join(__dirname, '..', packName);
  if (!fs.existsSync(fullPath)) return;

  const data = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
  let modifiedPack = false;

  if (data.days && Array.isArray(data.days)) {
    data.days.forEach((dayData) => {
      const dayNum = dayData.dayNumber || 1;
      const vocab = dayData.teach?.vocabulary || dayData.vocabulary || [];

      let practice = [];
      if (Array.isArray(dayData.practice)) {
        practice = dayData.practice;
      } else if (dayData.practice && Array.isArray(dayData.practice.exercises)) {
        practice = dayData.practice.exercises;
      } else if (Array.isArray(dayData.practiceExercises)) {
        practice = dayData.practiceExercises;
      }

      practice.forEach((ex) => {
        if (ex && ex.options && Array.isArray(ex.options)) {
          const correctOpt = ex.options.find((o) => o.isCorrect) || ex.options[0];
          const isHindiAns = isHindi(correctOpt ? correctOpt.text : '');
          const fallbacks = getFallbackDistractors(dayNum, isHindiAns);

          let fIdx = 0;
          ex.options.forEach((opt) => {
            if (opt && opt.text && PLACEHOLDER_REGEX.test(opt.text)) {
              opt.text = fallbacks[fIdx % fallbacks.length];
              fIdx++;
              modifiedPack = true;
              dayModifiedCounts[dayNum] = (dayModifiedCounts[dayNum] || 0) + 1;
            }
          });
        }
      });
    });
  }

  if (modifiedPack) {
    fs.writeFileSync(fullPath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`Updated JSON Content Pack: ${packName}`);
  }
});

const reportData = {
  dayModifiedCounts,
  beforeAfterSnapshots,
};

fs.writeFileSync(
  path.join(__dirname, 'patch10b_report_summary.json'),
  JSON.stringify(reportData, null, 2),
  'utf8'
);

console.log('\n--- REAL CONTENT REPAIR EXECUTED SUCCESSFULLY ---');
console.log('Modified Practice Questions Count Per Day Summary (Days 1–60):');
console.table(dayModifiedCounts);
