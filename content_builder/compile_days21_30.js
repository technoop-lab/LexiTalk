import fs from 'fs';
import path from 'path';
import { day21 } from './day21.js';
import { day22 } from './day22.js';
import { day23 } from './day23.js';
import { day24 } from './day24.js';
import { day25 } from './day25.js';
import { day26 } from './day26.js';
import { day27 } from './day27.js';
import { day28 } from './day28.js';
import { day29 } from './day29.js';
import { day30 } from './day30.js';

const days = [day21, day22, day23, day24, day25, day26, day27, day28, day29, day30];

console.log("=========================================");
console.log("DAYS 21–30 CONTENT AUDIT & COMPILATION");
console.log("=========================================");

const allIds = new Set();
let totalExercises = 0;
let totalVocab = 0;
let totalPhrases = 0;
let totalExamples = 0;
let totalAudioDrills = 0;
let totalDialogueTurns = 0;
let totalAssessments = 0;

const dayStats = [];

days.forEach((day, index) => {
  const dayNum = index + 21;
  const exCount = day.practice ? day.practice.length : 0;
  const vCount = day.learn && day.learn.vocabulary ? day.learn.vocabulary.length : 0;
  const pCount = day.learn && day.learn.phrases ? day.learn.phrases.length : 0;
  const egCount = day.examples ? day.examples.length : 0;
  const audioCount = day.pronunciation && day.pronunciation.drills ? day.pronunciation.drills.length : 0;
  const turnsCount = day.use && day.use.dialogue && day.use.dialogue.turns ? day.use.dialogue.turns.length : 0;
  const assessCount = day.assess ? day.assess.length : 0;

  totalExercises += exCount;
  totalVocab += vCount;
  totalPhrases += pCount;
  totalExamples += egCount;
  totalAudioDrills += audioCount;
  totalDialogueTurns += turnsCount;
  totalAssessments += assessCount;

  // Validate IDs
  if (allIds.has(day.id)) throw new Error(`Duplicate Day ID: ${day.id}`);
  allIds.add(day.id);

  if (day.learn && day.learn.vocabulary) {
    day.learn.vocabulary.forEach(v => {
      if (allIds.has(v.id)) throw new Error(`Duplicate Vocab ID: ${v.id}`);
      allIds.add(v.id);
    });
  }

  if (day.learn && day.learn.phrases) {
    day.learn.phrases.forEach(p => {
      if (allIds.has(p.id)) throw new Error(`Duplicate Phrase ID: ${p.id}`);
      allIds.add(p.id);
    });
  }

  if (day.examples) {
    day.examples.forEach(eg => {
      if (allIds.has(eg.id)) throw new Error(`Duplicate Example ID: ${eg.id}`);
      allIds.add(eg.id);
    });
  }

  if (day.pronunciation && day.pronunciation.drills) {
    day.pronunciation.drills.forEach(d => {
      if (allIds.has(d.id)) throw new Error(`Duplicate Audio ID: ${d.id}`);
      allIds.add(d.id);
    });
  }

  if (day.practice) {
    day.practice.forEach(ex => {
      if (allIds.has(ex.id)) throw new Error(`Duplicate Exercise ID: ${ex.id}`);
      allIds.add(ex.id);
      if (!ex.prompt || !ex.correctAnswer || !ex.explanationEn || !ex.explanationHi) {
        throw new Error(`Incomplete exercise fields in ${ex.id}`);
      }
    });
  }

  if (day.assess) {
    day.assess.forEach(a => {
      if (allIds.has(a.id)) throw new Error(`Duplicate Assessment ID: ${a.id}`);
      allIds.add(a.id);
    });
  }

  dayStats.push({
    day: dayNum,
    titleEn: day.titleEn,
    cefr: day.cefr,
    exercises: exCount,
    vocab: vCount,
    phrases: pCount,
    drills: audioCount,
    dialogueTurns: turnsCount
  });
});

console.table(dayStats);
console.log(`\nSummary Statistics (Days 21–30):`);
console.log(`- Total Teaching Days: ${days.length}`);
console.log(`- Total Practice Items / Exercises: ${totalExercises}`);
console.log(`- Total Vocabulary Items: ${totalVocab}`);
console.log(`- Total Pragmatic Phrases: ${totalPhrases}`);
console.log(`- Total Example Sentences: ${totalExamples}`);
console.log(`- Total Pronunciation Audio Drills: ${totalAudioDrills}`);
console.log(`- Total Contextual Dialogue Turns: ${totalDialogueTurns}`);
console.log(`- Total Exit Assessments: ${totalAssessments}`);
console.log(`- All IDs uniquely indexed: YES (${allIds.size} unique keys)`);

// 1. Output JSON
const masterJson = {
  meta: {
    curriculumTitle: "Curiosity English Academy: Stage 3 Content Pack (Days 21–30)",
    targetAudience: "Hindi Speakers transitioning to Fluent Global English",
    stage: "Past Narrative Stage (Stage 3 — Regular/Irregular Past Simple, Negative Auxiliaries, WH- Questions, Time Markers, Connectors Because/So, Past Continuous & Interrupted Actions)",
    cefrSpan: "A1.2 -> A2.1",
    totalDays: days.length,
    totalExercises,
    totalVocabulary: totalVocab,
    totalPhrases,
    totalAudioDrills,
    generatedAt: new Date().toISOString()
  },
  days
};

fs.writeFileSync('./DAYS_21_30_CONTENT.json', JSON.stringify(masterJson, null, 2), 'utf-8');
console.log("\n[SUCCESS] Wrote JSON package to ./DAYS_21_30_CONTENT.json");

// 2. Output Markdown
let mdContent = `# CURIOSITY ENGLISH ACADEMY: DAYS 21–30 PRODUCTION CONTENT PACK
**Target Audience**: Hindi Speakers (हिन्दी भाषी शिक्षार्थी)  
**Stage**: Stage 3 (Past Narrative Mastery — Regular & Irregular Past Simple, Auxiliary 'Did/Didn't', Inquiries, Time Markers, Reason/Result Connectors, Past Continuous, When/While Interrupted Actions, & Cumulative Review)  
**CEFR**: A1.2 to A2.1  
**Total Verified Exercises**: ${totalExercises}  
**Total Core Vocabulary**: ${totalVocab}  
**Total Idiomatic Phrases**: ${totalPhrases}  

---

## TABLE OF CONTENTS
`;

days.forEach(d => {
  mdContent += `- [Day ${d.dayNumber}: ${d.titleEn} (${d.titleHi})](#day-${d.dayNumber}-${d.id})\n`;
});

mdContent += `\n---\n\n`;

days.forEach(d => {
  mdContent += `## Day ${d.dayNumber}: ${d.titleEn} {#day-${d.dayNumber}-${d.id}}\n`;
  mdContent += `**शीर्षक**: ${d.titleHi}  \n`;
  mdContent += `**CEFR Level**: \`${d.cefr}\` | **Est. Duration**: ${d.estMinutes} mins | **Prerequisites**: ${d.prerequisites}  \n\n`;

  mdContent += `### 1. Learning Objectives (सीखने के लक्ष्य)\n`;
  d.objectivesEn.forEach((obj, i) => {
    mdContent += `- **EN**: ${obj}\n  - **HI**: ${d.objectivesHi[i]}\n`;
  });
  mdContent += `\n`;

  mdContent += `### 2. TEACH (सिद्धांत और अवधारणा)\n`;
  mdContent += `**हिन्दी व्याख्या**:\n${d.teach.hindiExplanation}\n\n`;
  mdContent += `**English Explanation**:\n${d.teach.englishExplanation}\n\n`;

  mdContent += `#### Core Rules & Nuanced Grammar:\n`;
  d.teach.grammarRules.forEach(r => {
    mdContent += `- **Rule ${r.ruleNumber}: ${r.title}** [${r.register}]\n  ${r.description}\n`;
  });
  mdContent += `\n`;

  if (d.teach.formulaTable) {
    mdContent += `#### Master Formula Table:\n`;
    mdContent += `\`\`\`json\n${JSON.stringify(d.teach.formulaTable, null, 2)}\n\`\`\`\n\n`;
  }

  mdContent += `#### ⚠️ Hindi Speaker Trap & Contrastive Solution:\n`;
  mdContent += `- **Trap**: ${d.teach.hindiSpeakerTrap.trapTitle}\n`;
  mdContent += `- **Hindi Pattern**: ${d.teach.hindiSpeakerTrap.hindiPattern}\n`;
  mdContent += `- **Potential Interference**: \`${d.teach.hindiSpeakerTrap.potentialInterference}\`\n`;
  mdContent += `- **Linguistic Explanation**: ${d.teach.hindiSpeakerTrap.explanation}\n`;
  mdContent += `- **Natural English Solution**: **${d.teach.hindiSpeakerTrap.naturalSolution}**\n\n`;

  mdContent += `### 3. LEARN (शब्दावली और वाक्यांश)\n`;
  mdContent += `#### Core Vocabulary (${d.learn.vocabulary.length} words):\n`;
  mdContent += `| ID | Word | POS | IPA | Hindi Meaning | Example (EN / HI) |\n`;
  mdContent += `|---|---|---|---|---|---|\n`;
  d.learn.vocabulary.forEach(v => {
    mdContent += `| \`${v.id}\` | **${v.word}** | ${v.pos} | \`${v.ipa}\` | ${v.meaningHi} | ${v.exampleEn} <br> *${v.exampleHi}* |\n`;
  });
  mdContent += `\n`;

  mdContent += `#### Conversational Phrases & Expressions:\n`;
  d.learn.phrases.forEach(p => {
    mdContent += `- \`${p.id}\` [${p.register}]: **"${p.phrase}"** — *${p.meaningHi}*\n`;
  });
  mdContent += `\n`;

  mdContent += `### 4. EXAMPLES (मॉडल वाक्य)\n`;
  d.examples.forEach(eg => {
    mdContent += `- \`${eg.id}\`: **${eg.en}**  \n  *${eg.hi}*\n`;
  });
  mdContent += `\n`;

  mdContent += `### 5. PRONUNCIATION & PHONETICS (उच्चारण और ध्वनि)\n`;
  mdContent += `- **Target Sounds**: ${d.pronunciation.targetSounds.join(", ")}\n`;
  mdContent += `- **L1 Pronunciation Traps**: ${d.pronunciation.traps}\n`;
  mdContent += `#### Audio Drills:\n`;
  d.pronunciation.drills.forEach(dr => {
    mdContent += `- \`${dr.id}\` [${dr.voiceRole}]: "${dr.text}"\n`;
  });
  mdContent += `\n`;

  mdContent += `### 6. PRACTICE EXERCISES (${d.practice.length} Items)\n`;
  d.practice.forEach((ex, idx) => {
    mdContent += `#### ${idx + 1}. \`[${ex.id}]\` [${ex.type.toUpperCase()}] (${ex.difficulty} | \`${ex.skillTag}\`)\n`;
    mdContent += `**Prompt**: ${ex.prompt}\n`;
    if (ex.options) {
      mdContent += `**Options**: ${ex.options.map(o => `\`${o}\``).join(" | ")}\n`;
    }
    mdContent += `- **Correct Answer**: \`${ex.correctAnswer}\`\n`;
    if (ex.acceptableAlternatives) {
      mdContent += `- **Acceptable Alternatives**: ${ex.acceptableAlternatives.map(a => `\`${a}\``).join(", ")}\n`;
    }
    mdContent += `- **Explanation (EN)**: ${ex.explanationEn}\n`;
    mdContent += `- **Explanation (HI)**: ${ex.explanationHi}\n\n`;
  });

  mdContent += `### 7. USE (प्रासंगिक उपयोग और संवाद)\n`;
  mdContent += `**Situation**: ${d.use.situation}\n\n`;
  mdContent += `#### Dialogue (\`${d.use.dialogue.id}\`):\n`;
  d.use.dialogue.turns.forEach(t => {
    mdContent += `- **${t.speaker}**: "${t.textEn}"  \n  *(${t.textHi})*\n`;
  });
  mdContent += `\n`;
  mdContent += `#### Free Speaking Production Task:\n`;
  mdContent += `- **EN**: ${d.use.speakingTask.promptEn}\n`;
  mdContent += `- **HI**: ${d.use.speakingTask.promptHi}\n\n`;

  mdContent += `### 8. ASSESS & REVIEW (मूल्यांकन और दोहराव)\n`;
  d.assess.forEach(a => {
    mdContent += `- \`[${a.id}]\` **${a.question}** ➔ *${a.answer}* [Skill: ${a.skill}]\n`;
  });
  mdContent += `\n**Spaced Repetition Tag**: \`${d.review.spacedRepetitionTag}\`  \n`;
  mdContent += `**Recommended Review Intervals**: Day +[${d.review.recommendedIntervalDays.join(", ")}]  \n\n`;
  mdContent += `---\n\n`;
});

fs.writeFileSync('./DAYS_21_30_CONTENT.md', mdContent, 'utf-8');
console.log("[SUCCESS] Wrote Markdown package to ./DAYS_21_30_CONTENT.md");
console.log("=========================================\n");
