import fs from 'fs';
import path from 'path';

import { day41 } from '../content_builder/day41.js';
import { day42 } from '../content_builder/day42.js';
import { day43 } from '../content_builder/day43.js';
import { day44 } from '../content_builder/day44.js';
import { day45 } from '../content_builder/day45.js';
import { day46 } from '../content_builder/day46.js';
import { day47 } from '../content_builder/day47.js';
import { day48 } from '../content_builder/day48.js';
import { day49 } from '../content_builder/day49.js';
import { day50 } from '../content_builder/day50.js';

const days = [day41, day42, day43, day44, day45, day46, day47, day48, day49, day50];

console.log("=================================================");
console.log("STAGE 5 (DAYS 41-50) COMPILATION & VERIFICATION");
console.log("=================================================");

let totalVocab = 0;
let totalPhrases = 0;
let totalExamples = 0;
let totalExercises = 0;
let totalBenchmarks = 0;
let totalDialogues = 0;

days.forEach((day, index) => {
  const expectedDayNum = 41 + index;
  if (day.dayNumber !== expectedDayNum) {
    throw new Error(`Day number mismatch: expected ${expectedDayNum}, got ${day.dayNumber}`);
  }
  
  // Verify core schema
  if (!day.id || !day.titleEn || !day.titleHi || !day.cefr || !day.estMinutes || !day.objectivesEn || !day.objectivesHi) {
    throw new Error(`Day ${day.dayNumber} missing core metadata`);
  }
  
  // Verify teach
  if (!day.teach.hindiExplanation || !day.teach.englishExplanation || !day.teach.grammarRules || !day.teach.formulaTable || !day.teach.hindiSpeakerTrap) {
    throw new Error(`Day ${day.dayNumber} missing teach components`);
  }
  
  // Verify learn
  const vocabCount = day.learn.vocabulary.length;
  const phraseCount = day.learn.spokenPhrases.length;
  totalVocab += vocabCount;
  totalPhrases += phraseCount;
  
  // Verify examples
  const exampleCount = day.examples.bilingualExemplars.length;
  totalExamples += exampleCount;
  
  // Verify pronunciation
  if (!day.pronunciation.focusSound || !day.pronunciation.minimalPairs || !day.pronunciation.drills) {
    throw new Error(`Day ${day.dayNumber} missing pronunciation components`);
  }
  
  // Verify practice
  const exCount = day.practice.exercises.length;
  totalExercises += exCount;
  
  // Verify use
  const dialoguesList = day.use.dialogues || (day.use.dialogue ? [day.use.dialogue] : []);
  if (dialoguesList.length === 0 || !day.use.speakingPrompt || !day.use.roleplay) {
    throw new Error(`Day ${day.dayNumber} missing use components`);
  }
  totalDialogues += dialoguesList.length;
  
  // Verify assess
  const bmCount = day.assess.benchmarks.length;
  totalBenchmarks += bmCount;
  
  // Verify review
  if (!day.review.quickRecall || !day.review.spacedTips) {
    throw new Error(`Day ${day.dayNumber} missing review components`);
  }

  console.log(`✓ Day ${day.dayNumber} (${day.titleEn}): ${vocabCount} vocab, ${phraseCount} phrases, ${exampleCount} examples, ${exCount} exercises, ${dialoguesList.length} dialogues, ${bmCount} benchmarks`);
});

console.log("-------------------------------------------------");
console.log(`TOTALS FOR DAYS 41-50 (STAGE 5 PRODUCTION UPGRADE):`);
console.log(`- Vocabulary items: ${totalVocab}`);
console.log(`- Spoken phrases: ${totalPhrases}`);
console.log(`- Bilingual exemplars: ${totalExamples}`);
console.log(`- Interactive exercises: ${totalExercises}`);
console.log(`- Situational dialogues: ${totalDialogues}`);
console.log(`- Assessment benchmarks: ${totalBenchmarks}`);
console.log("-------------------------------------------------");

// Write DAYS_41_50_CONTENT.json
const jsonOutput = {
  stage: 5,
  stageTitle: "Domain-Specific Expansion & World Communication",
  cefrLevel: "A2.2",
  daysCount: days.length,
  totalVocabulary: totalVocab,
  totalPhrases: totalPhrases,
  totalExamples: totalExamples,
  totalExercises: totalExercises,
  totalDialogues: totalDialogues,
  totalBenchmarks: totalBenchmarks,
  days: days
};

fs.writeFileSync(path.join(process.cwd(), 'DAYS_41_50_CONTENT.json'), JSON.stringify(jsonOutput, null, 2), 'utf-8');
console.log("[SUCCESS] Generated DAYS_41_50_CONTENT.json");

// Generate Markdown documentation
let md = `# Stage 5 Master Production Content (Days 41–50) — High-Depth Master Edition
**Curriculum Stage**: Stage 5 — Domain-Specific Expansion & World Communication  
**CEFR Target Level**: A2.2  
**Total Days**: 10 (Days 41 to 50)  
**Total Vocabulary**: ${totalVocab}  
**Total Spoken Phrases**: ${totalPhrases}  
**Total Bilingual Exemplars**: ${totalExamples}  
**Total Exercises**: ${totalExercises} (55–60 per day)  
**Total Situational Dialogues**: ${totalDialogues}  
**Total Assessment Benchmarks**: ${totalBenchmarks}  

---

`;

days.forEach((day) => {
  const dialoguesList = day.use.dialogues || (day.use.dialogue ? [day.use.dialogue] : []);
  md += `## Day ${day.dayNumber}: ${day.titleEn} (${day.titleHi})
**CEFR**: ${day.cefr} | **Est. Duration**: ${day.estMinutes} mins | **Prerequisites**: ${day.prerequisites}

### 🎯 Learning Objectives
${day.objectivesEn.map((obj, i) => `- **EN**: ${obj}\n  - **HI**: ${day.objectivesHi[i]}`).join('\n')}

### 📖 TEACH (शिक्षण)
#### Hindi Explanation
${day.teach.hindiExplanation}

#### English Explanation
${day.teach.englishExplanation}

#### Core Grammar Rules
${day.teach.grammarRules.map(r => `1. **Rule ${r.ruleNumber}: ${r.title}** (${r.register})\n   - ${r.description}`).join('\n')}

#### Formula Table
| Subject / Domain Group | Formula Pattern | Example (EN) | Meaning (HI) |
| :--- | :--- | :--- | :--- |
${day.teach.formulaTable.map(f => `| **${f.subjectGroup}** | \`${f.formula}\` | "${f.exampleEn}" | ${f.meaningHi} |`).join('\n')}

#### ⚠️ L1 Hindi Speaker Trap & Remediation
- **Trap**: ${day.teach.hindiSpeakerTrap.trapTitle}
- **Common Indian English Pattern**: \n  \`\`\`\n  ${day.teach.hindiSpeakerTrap.hindiPattern}\n  \`\`\`
- **Explanation**: ${day.teach.hindiSpeakerTrap.explanation}
- **Natural Global Standard**: \n  \`\`\`\n  ${day.teach.hindiSpeakerTrap.naturalSolution}\n  \`\`\`

### 📚 LEARN (शब्दावली एवं वाक्यांश)
#### High-Frequency Vocabulary (${day.learn.vocabulary.length} items)
| Word | POS | IPA | Meaning (HI) | Example (EN) | Example (HI) |
| :--- | :--- | :--- | :--- | :--- | :--- |
${day.learn.vocabulary.map(v => `| **${v.word}** | *${v.pos}* | \`${v.ipa}\` | ${v.meaningHi} | ${v.exampleEn} | ${v.exampleHi} |`).join('\n')}

#### Essential Spoken Phrases (${day.learn.spokenPhrases.length} items)
${day.learn.spokenPhrases.map(p => `- **"${p.phrase}"** [${p.register || p.context || 'General'}]: ${p.meaningHi}`).join('\n')}

### 💬 EXAMPLES (द्विभाषी उदाहरण - ${day.examples.bilingualExemplars.length} Exemplars)
${day.examples.bilingualExemplars.map((ex, i) => `${i + 1}. **EN**: "${ex.english}"\n   - **HI**: ${ex.hindi}`).join('\n')}

### 🗣️ PRONUNCIATION (उच्चारण अभ्यास)
- **Focus Sound**: ${day.pronunciation.focusSound}
- **Phonetic Notes**: ${day.pronunciation.phoneticNotes}
- **Minimal Pairs**:
${day.pronunciation.minimalPairs.map(p => `  - **${p.wordA}** (\`${p.ipaA}\`) vs **${p.wordB}** (\`${p.ipaB}\`)`).join('\n')}
- **Rhythm & Connected Speech Drills**:
${day.pronunciation.drills.map(d => `  - *"${d.sentence}"* (Focus: ${d.focus})`).join('\n')}

### ✍️ PRACTICE (अभ्यास - ${day.practice.exercises.length} Exercises)
*Total ${day.practice.exercises.length} comprehensive exercises spanning Multiple Choice, Fill in the Blank, Error Correction (L1 interference remediation), Translation (HI->EN & EN->HI), Matching, Sentence Ordering, Sentence Building, Listening Comprehension, Dictation, Dialogue Completion, Speaking Pronunciation, Active Recall, and Mixed Cumulative Retrieval.*

### 🎭 USE (व्यावहारिक प्रयोग - ${dialoguesList.length} Dialogues)
${dialoguesList.map((d, dIdx) => `#### Dialogue ${dIdx + 1}: "${d.title}"
*Context: ${d.context}*  
*Characters: ${d.characters.join(', ')}*  
${d.lines.map(l => `- **${l.speaker}**: "${l.text}"  \n  *(HI: ${l.hindi})*`).join('\n')}`).join('\n\n')}

#### Speaking Prompt
- **Scenario**: ${day.use.speakingPrompt.situation}
- **Prompts**:
${day.use.speakingPrompt.prompts.map(p => `  - ${p}`).join('\n')}
- **Target Expressions**: ${day.use.speakingPrompt.targetExpressions.join(', ')}

#### Roleplay Simulation
- **Scenario**: ${day.use.roleplay.scenario}
- **Role A**: ${day.use.roleplay.roleA}
- **Role B**: ${day.use.roleplay.roleB}
- **Sample Interaction**: *"${day.use.roleplay.sampleDialogue}"*

### 📊 ASSESS (मूल्यांकन एवं मानक)
${day.assess.benchmarks.map(b => `#### Benchmark: ${b.title}
- **Prompt**: ${b.prompt}
- **Model Answer (EN)**: "${b.sampleAnswerEn}"
- **Model Answer (HI)**: "${b.sampleAnswerHi}"
- **Evaluation Criteria**: ${b.evaluationCriteria}`).join('\n\n')}

### 🔄 REVIEW & SPACED RETRIEVAL (पुनरावलोकन)
#### Quick Recall Questions
${day.review.quickRecall.map(q => `- **Q**: ${q.q}\n  - **A**: ${q.a}`).join('\n')}

#### Spaced Learning Tips
${day.review.spacedTips.map(t => `- ${t}`).join('\n')}

---

`;
});

fs.writeFileSync(path.join(process.cwd(), 'DAYS_41_50_CONTENT.md'), md, 'utf-8');
console.log("[SUCCESS] Generated DAYS_41_50_CONTENT.md");
console.log("=================================================");
console.log("STAGE 5 HIGH-DEPTH MASTER UPGRADE COMPLETED!");
console.log("=================================================");
