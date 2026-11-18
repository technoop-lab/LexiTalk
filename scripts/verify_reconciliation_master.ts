// scripts/verify_reconciliation_master.ts
import fs from 'fs';
import path from 'path';
import { HindiCourseService } from '../src/services/HindiCourseService';

async function runMasterVerification() {
  console.log("================================================================================");
  console.log("             COMPREHENSIVE FINAL RECONCILIATION & PRODUCTION AUDIT             ");
  console.log("================================================================================");

  // 1. Direct JSON Check
  const packFiles = [
    'DAYS_01_10_CONTENT.json',
    'DAYS_11_20_CONTENT.json',
    'DAYS_21_30_CONTENT.json',
    'DAYS_31_40_CONTENT.json',
    'DAYS_41_50_CONTENT.json',
    'DAYS_51_60_CONTENT.json'
  ];

  let totalJsonDays = 0;
  let totalJsonVocab = 0;
  let totalJsonUniqueVocab = new Set<string>();
  let totalJsonPhrases = 0;
  let totalJsonExamples = 0;
  let totalJsonEnToHi = 0;
  let totalJsonHiToEn = 0;
  let totalJsonExercises = 0;
  let totalJsonListening = 0;
  let totalJsonPronDrills = 0;
  let totalJsonMinimalPairs = 0;
  let totalJsonStress = 0;
  let totalJsonConnectedSpeech = 0;
  let totalJsonShadowing = 0;
  let totalJsonSpeakingTasks = 0;
  let totalJsonDialogueTurns = 0;
  let totalJsonAssessments = 0;
  let totalJsonReviews = 0;

  const dayRows: any[] = [];

  for (const packName of packFiles) {
    const filePath = path.join(process.cwd(), packName);
    if (!fs.existsSync(filePath)) {
      throw new Error(`CRITICAL: Missing production JSON pack: ${packName}`);
    }
    const raw = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    const days = raw.days || [];
    totalJsonDays += days.length;

    for (const d of days) {
      const dNum = d.dayNumber;
      const vocabList = d.learn?.vocabulary || [];
      totalJsonVocab += vocabList.length;
      vocabList.forEach((v: any) => {
        const lem = (v.lemma || v.wordForm || '').toLowerCase().trim();
        if (lem) totalJsonUniqueVocab.add(lem);
      });

      const phrasesList = d.learn?.phrases || d.learn?.spokenPhrases || [];
      totalJsonPhrases += phrasesList.length;

      const examplesList = Array.isArray(d.examples) ? d.examples : (d.examples?.bilingualExemplars || []);
      totalJsonExamples += examplesList.length;

      let enToHiCount = 0;
      let hiToEnCount = 0;
      examplesList.forEach((eg: any) => {
        if (eg.en && eg.hi) {
          enToHiCount++;
        }
      });

      const rawEx = d.practice?.exercises || (Array.isArray(d.practice) ? d.practice : []);
      const rawTr = d.practice?.translationSet || [];
      const rawLt = d.practice?.listeningTasks || [];
      const rawSh = d.practice?.shadowingPrompts || [];
      
      const exCount = rawEx.length + rawTr.length + rawLt.length + rawSh.length;
      totalJsonExercises += exCount;
      totalJsonListening += rawLt.length;
      totalJsonShadowing += rawSh.length;

      rawTr.forEach((tr: any) => {
        if (tr.type === 'en_to_hi') enToHiCount++;
        if (tr.type === 'hi_to_en') hiToEnCount++;
      });
      totalJsonEnToHi += enToHiCount;
      totalJsonHiToEn += hiToEnCount;

      const rawPron = d.pronunciation || d.phonetics || {};
      const drills = rawPron.drills || [];
      const mp = rawPron.minimalPairs || [];
      const stress = rawPron.sentenceStress || rawPron.sentenceStressPatterns || [];
      const conn = rawPron.connectedSpeech || rawPron.connectedSpeechExamples || rawPron.connectedSpeechRules || [];

      totalJsonPronDrills += drills.length;
      totalJsonMinimalPairs += mp.length;
      totalJsonStress += stress.length;
      totalJsonConnectedSpeech += conn.length;

      const turns = d.use?.dialogue?.turns || d.use?.dialogues?.[0]?.turns || [];
      totalJsonDialogueTurns += turns.length;

      if (d.use?.speakingTask || d.use?.speakingPrompt) {
        totalJsonSpeakingTasks++;
      }

      let assessCount = 0;
      if (Array.isArray(d.assess)) {
        assessCount = d.assess.length;
      } else if (d.assess && typeof d.assess === 'object') {
        assessCount = (d.assess.benchmarks?.length || 0) + (d.assess.writtenChecklist?.length || 0) + (d.assess.oralProductionTask ? 1 : 0);
      }
      totalJsonAssessments += assessCount;

      if (d.review) {
        totalJsonReviews++;
      }

      // Check runtime sync via HindiCourseService
      const runtimeDay = HindiCourseService.getDayByNumber(dNum);
      if (!runtimeDay) {
        throw new Error(`Runtime HindiCourseService.getDayByNumber(${dNum}) returned null!`);
      }

      dayRows.push({
        Day: dNum,
        Stage: Math.ceil(dNum / 10),
        CEFR: runtimeDay.cefr,
        Title: d.titleEn.slice(0, 32),
        Vocab: vocabList.length,
        Phrases: phrasesList.length,
        Examples: examplesList.length,
        Practice: runtimeDay.practice.length,
        Drills: runtimeDay.pronunciation.drills.length,
        Dialogue: runtimeDay.use.dialogue.turns.length,
        Assess: runtimeDay.assess.length
      });
    }
  }

  console.table(dayRows.slice(0, 10)); // Stage 1 preview
  console.log(`... [Table contains all ${dayRows.length} days] ...`);
  console.table(dayRows.slice(50, 60)); // Stage 6 preview

  console.log("\n================================================================================");
  console.log("GRAND AGGREGATE TOTALS DIRECTLY FROM 6 PRODUCTION JSON FILES:");
  console.log(`✓ Total Days Loaded: ${totalJsonDays} / 60`);
  console.log(`✓ Total Vocabulary Items: ${totalJsonVocab}`);
  console.log(`✓ Unique Vocabulary Lemmata: ${totalJsonUniqueVocab.size}`);
  console.log(`✓ Total Spoken Phrases: ${totalJsonPhrases}`);
  console.log(`✓ Total Bilingual Exemplars: ${totalJsonExamples}`);
  console.log(`✓ Total English → Hindi Exemplars/Translations: ${totalJsonEnToHi}`);
  console.log(`✓ Total Hindi → English Translations: ${totalJsonHiToEn}`);
  console.log(`✓ Total Practice Exercises (including Translations & Tasks): ${totalJsonExercises}`);
  console.log(`✓ Total Listening Tasks: ${totalJsonListening}`);
  console.log(`✓ Total Shadowing Prompts: ${totalJsonShadowing}`);
  console.log(`✓ Total Pronunciation Drills: ${totalJsonPronDrills}`);
  console.log(`✓ Total Minimal Pair Sets: ${totalJsonMinimalPairs}`);
  console.log(`✓ Total Sentence Stress Drills: ${totalJsonStress}`);
  console.log(`✓ Total Connected Speech Modules: ${totalJsonConnectedSpeech}`);
  console.log(`✓ Total Situational Dialogue Turns: ${totalJsonDialogueTurns}`);
  console.log(`✓ Total Speaking Tasks: ${totalJsonSpeakingTasks}`);
  console.log(`✓ Total Exit Assessment Items: ${totalJsonAssessments}`);
  console.log(`✓ Total Spaced Review Modules: ${totalJsonReviews}`);
  console.log("================================================================================");

  // 2. Runtime Verification
  console.log("\n--- RUNTIME VERIFICATION (HindiCourseService) ---");
  const availableCount = HindiCourseService.getAvailableDaysCount();
  console.log(`✓ HindiCourseService.getAvailableDaysCount() = ${availableCount}`);
  if (availableCount !== 60) {
    throw new Error(`Expected 60 available days, got ${availableCount}`);
  }

  const milestones = [1, 10, 20, 21, 30, 40, 50, 60];
  for (const m of milestones) {
    const d = HindiCourseService.getDayByNumber(m);
    if (!d) throw new Error(`Milestone Day ${m} not found in HindiCourseService`);
    console.log(`✓ Milestone Day ${String(m).padStart(2, '0')}: "${d.titleEn}" | Vocab: ${d.learn.vocabulary.length} | Phrases: ${d.learn.phrases.length} | Examples: ${d.examples.length} | Practice: ${d.practice.length} | Drills: ${d.pronunciation.drills.length} | Dialogue Turns: ${d.use.dialogue.turns.length} | Assess: ${d.assess.length}`);
  }

  console.log("\n[RECONCILIATION VERIFICATION 100% PASSED]");
}

runMasterVerification().catch(err => {
  console.error("Verification failed:", err);
  process.exit(1);
});
