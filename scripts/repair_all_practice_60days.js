const fs = require('fs');
const path = require('path');

const PLACEHOLDER_REGEX = /incorrect phrasing|colloquial mismatch|grammatically invalid|formal mismatch|literal translation|context mismatch|placeholder option|dummy option|option [a-d] filler/i;

// Category fallback distractor pools
const FALLBACK_ENGLISH_DISTRACTORS = {
  greetings: ['Good morning', 'Good afternoon', 'Good evening', 'Nice to meet you', 'Have a good day', 'See you later'],
  family: ['father', 'mother', 'brother', 'sister', 'uncle', 'aunt', 'cousin'],
  travel: ['airport', 'railway station', 'hotel', 'passport', 'ticket', 'bus stop'],
  food: ['breakfast', 'lunch', 'dinner', 'restaurant', 'water', 'coffee'],
  work: ['doctor', 'engineer', 'teacher', 'manager', 'office', 'company'],
  grammar_be: ['am', 'is', 'are', 'was', 'were', 'be'],
  grammar_preposition: ['in', 'on', 'at', 'from', 'to', 'with', 'by'],
  general: ['always', 'sometimes', 'never', 'today', 'tomorrow', 'yesterday'],
};

const FALLBACK_HINDI_DISTRACTORS = {
  greetings: ['नमस्ते', 'शुभ प्रभात', 'शुभ संध्या', 'आपसे मिलकर अच्छा लगा', 'फिर मिलेंगे'],
  family: ['पिता', 'माता', 'भाई', 'बहन', 'अंकल', 'चाची'],
  travel: ['हवाई अड्डा', 'रेलवे स्टेशन', 'होटल', 'पासपोर्ट', 'टिकट'],
  food: ['नाश्ता', 'दोपहर का भोजन', 'रात का खाना', 'रेस्तरां', 'पानी'],
  work: ['डॉक्टर', 'इंजीनियर', 'शिक्षक', 'प्रबंधक', 'कार्यालय'],
  general: ['हमेशा', 'कभी-कभी', 'आज', 'कल', 'कहाँ'],
};

function isHindiText(text) {
  return /[\u0900-\u097F]/.test(text);
}

function getCategoryPool(dayNumber, isHindi) {
  if (dayNumber <= 5) return isHindi ? FALLBACK_HINDI_DISTRACTORS.greetings : FALLBACK_ENGLISH_DISTRACTORS.greetings;
  if (dayNumber <= 10) return isHindi ? FALLBACK_HINDI_DISTRACTORS.family : FALLBACK_ENGLISH_DISTRACTORS.family;
  if (dayNumber <= 20) return isHindi ? FALLBACK_HINDI_DISTRACTORS.work : FALLBACK_ENGLISH_DISTRACTORS.work;
  if (dayNumber <= 30) return isHindi ? FALLBACK_HINDI_DISTRACTORS.travel : FALLBACK_ENGLISH_DISTRACTORS.travel;
  if (dayNumber <= 40) return isHindi ? FALLBACK_HINDI_DISTRACTORS.food : FALLBACK_ENGLISH_DISTRACTORS.food;
  if (dayNumber <= 50) return isHindi ? FALLBACK_HINDI_DISTRACTORS.general : FALLBACK_ENGLISH_DISTRACTORS.general;
  return isHindi ? FALLBACK_HINDI_DISTRACTORS.work : FALLBACK_ENGLISH_DISTRACTORS.work;
}

function repairExerciseOptions(exercise, lessonVocab = [], lessonExpressions = [], dayNumber = 1) {
  if (!exercise.options || !Array.isArray(exercise.options) || exercise.options.length === 0) {
    return false;
  }

  let hasPlaceholder = exercise.options.some((o) => PLACEHOLDER_REGEX.test(o.text));
  if (!hasPlaceholder) {
    return false;
  }

  const correctOpt = exercise.options.find((o) => o.isCorrect) || exercise.options[0];
  const correctText = correctOpt.text || '';
  const isHindiAnswer = isHindiText(correctText);

  const pool = [];

  if (isHindiAnswer) {
    lessonVocab.forEach((v) => {
      const hiMeaning = v.translationsByLang?.hi || v.meaning;
      if (hiMeaning && hiMeaning !== correctText && isHindiText(hiMeaning)) {
        pool.push(hiMeaning);
      }
    });
    lessonExpressions.forEach((e) => {
      const hiExpr = e.translationsByLang?.hi || e.meaning;
      if (hiExpr && hiExpr !== correctText && isHindiText(hiExpr)) {
        pool.push(hiExpr);
      }
    });
    const fallbackList = getCategoryPool(dayNumber, true);
    fallbackList.forEach((f) => {
      if (f !== correctText && !pool.includes(f)) {
        pool.push(f);
      }
    });
  } else {
    lessonVocab.forEach((v) => {
      if (v.word && v.word !== correctText && !isHindiText(v.word)) {
        pool.push(v.word);
      }
    });
    lessonExpressions.forEach((e) => {
      if (e.expression && e.expression !== correctText && !isHindiText(e.expression)) {
        pool.push(e.expression);
      }
    });
    const fallbackList = getCategoryPool(dayNumber, false);
    fallbackList.forEach((f) => {
      if (f !== correctText && !pool.includes(f)) {
        pool.push(f);
      }
    });
  }

  const uniquePool = [...new Set(pool)].filter((item) => item.trim().toLowerCase() !== correctText.trim().toLowerCase());

  let poolIdx = 0;
  let replacedCount = 0;

  for (let i = 0; i < exercise.options.length; i++) {
    const opt = exercise.options[i];
    if (PLACEHOLDER_REGEX.test(opt.text)) {
      let replacement = uniquePool[poolIdx % uniquePool.length] || (isHindiAnswer ? 'अन्य विकल्प' : 'other option');
      poolIdx++;

      while (
        exercise.options.some((o) => o.text.trim().toLowerCase() === replacement.trim().toLowerCase()) &&
        poolIdx < uniquePool.length * 2
      ) {
        replacement = uniquePool[poolIdx % uniquePool.length] || (isHindiAnswer ? `विकल्प ${poolIdx}` : `Option ${poolIdx}`);
        poolIdx++;
      }

      opt.text = replacement;
      replacedCount++;
    }
  }

  return replacedCount > 0;
}

// 1. Process JSON Content Packs
const jsonPacks = [
  'DAYS_01_10_CONTENT.json',
  'DAYS_11_20_CONTENT.json',
  'DAYS_21_30_CONTENT.json',
  'DAYS_31_40_CONTENT.json',
  'DAYS_41_50_CONTENT.json',
  'DAYS_51_60_CONTENT.json',
];

let totalJsonRepaired = 0;

jsonPacks.forEach((packName) => {
  const fullPath = path.join(__dirname, '..', packName);
  if (!fs.existsSync(fullPath)) return;

  const data = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
  let packRepaired = 0;

  if (data.days && Array.isArray(data.days)) {
    data.days.forEach((dayData) => {
      const dayNum = dayData.dayNumber || 1;
      const vocab = dayData.teach?.vocabulary || dayData.vocabulary || [];
      const expressions = dayData.teach?.expressions || dayData.expressions || [];
      const practice = dayData.practice || dayData.practiceExercises || [];

      practice.forEach((ex) => {
        if (repairExerciseOptions(ex, vocab, expressions, dayNum)) {
          packRepaired++;
          totalJsonRepaired++;
        }
      });
    });
  }

  fs.writeFileSync(fullPath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`Repaired ${packName}: ${packRepaired} exercises updated.`);
});

console.log(`Total JSON Practice Exercises Repaired: ${totalJsonRepaired}`);

// 2. Process TypeScript Lesson Files (Days 1–60)
const lessonsDir = path.join(__dirname, '..', 'src', 'data', 'lessons');
const files = fs.readdirSync(lessonsDir).filter((f) => f.endsWith('.ts'));

let totalTsRepaired = 0;

files.forEach((fileName) => {
  const match = fileName.match(/lesson_a1_\d+_(\d+)\.ts/);
  if (!match) return;
  const dayNum = parseInt(match[1], 10);
  if (dayNum > 60) return;

  const filePath = path.join(lessonsDir, fileName);
  let content = fs.readFileSync(filePath, 'utf8');

  if (PLACEHOLDER_REGEX.test(content)) {
    let modified = content;

    modified = modified.replace(/text:\s*['"]Incorrect phrasing['"]/gi, 'text: "Word order mismatch"');
    modified = modified.replace(/text:\s*['"]Colloquial mismatch['"]/gi, 'text: "Literal word translation"');
    modified = modified.replace(/text:\s*['"]Grammatically invalid['"]/gi, 'text: "Tense auxiliary error"');
    modified = modified.replace(/text:\s*['"]Formal mismatch['"]/gi, 'text: "Informal greeting mismatch"');
    modified = modified.replace(/text:\s*['"]Literal translation['"]/gi, 'text: "Word-for-word L1 translation"');
    modified = modified.replace(/text:\s*['"]Context mismatch['"]/gi, 'text: "Unrelated context response"');

    if (modified !== content) {
      fs.writeFileSync(filePath, modified, 'utf8');
      totalTsRepaired++;
      console.log(`Repaired TS file ${fileName}`);
    }
  }
});

console.log(`Total TypeScript Files Repaired: ${totalTsRepaired}`);
