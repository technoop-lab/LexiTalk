// scripts/verify_key_days_integration.js
import {
  getAllRegistryDays,
  getRegistryDayByNumber,
  getRegistryDaysCount,
  STAGES_METADATA
} from '../src/data/curriculumRegistry.ts';

console.log("================================================================================");
console.log("TESTING 60-DAY CURRICULUM REGISTRY INTEGRATION");
console.log("================================================================================");

console.log(`Total Stages in Metadata: ${STAGES_METADATA.length}`);
console.log(`Total Days Loaded in Registry: ${getRegistryDaysCount()}`);

const testDayNumbers = [1, 10, 20, 21, 30, 40, 50, 60];

testDayNumbers.forEach((dayNum) => {
  const day = getRegistryDayByNumber(dayNum);
  if (!day) {
    throw new Error(`CRITICAL: Day ${dayNum} returned null from registry!`);
  }

  // Verify all 9 sections
  const checks = {
    metadata: Boolean(day.id && day.titleEn && day.titleHi && day.cefr && day.objectivesEn?.length && day.objectivesHi?.length),
    teach: Boolean(day.teach?.hindiExplanation && day.teach?.englishExplanation && day.teach?.grammarRules?.length && day.teach?.hindiSpeakerTrap),
    learnVocab: Boolean(day.learn?.vocabulary?.length > 0),
    learnPhrases: Boolean(day.learn?.phrases?.length > 0),
    examples: Boolean(day.examples?.length > 0),
    pronunciation: Boolean(day.pronunciation?.targetSounds?.length > 0 && day.pronunciation?.drills?.length > 0),
    practice: Boolean(day.practice?.length > 0),
    use: Boolean(day.use?.dialogue?.turns?.length > 0 && day.use?.speakingTask),
    assess: Boolean(day.assess?.length > 0),
    review: Boolean(day.review?.spacedRepetitionTag && day.review?.recommendedIntervalDays?.length > 0)
  };

  const allPassed = Object.values(checks).every(Boolean);
  if (!allPassed) {
    console.error(`Day ${dayNum} failed checks:`, checks);
    throw new Error(`Day ${dayNum} failed section verification`);
  }

  console.log(`✓ Day ${dayNum < 10 ? '0' + dayNum : dayNum} [Stage ${Math.ceil(dayNum / 10)}]: "${day.titleEn}"`);
  console.log(`   - CEFR: ${day.cefr} | Minutes: ${day.estMinutes}m | Vocab: ${day.learn.vocabulary.length} | Phrases: ${day.learn.phrases.length}`);
  console.log(`   - Examples: ${day.examples.length} | Exercises: ${day.practice.length} | Dialogue Turns: ${day.use.dialogue.turns.length} | Assess: ${day.assess.length}`);
});

console.log("================================================================================");
console.log("ALL TEST DAYS (1, 10, 20, 21, 30, 40, 50, 60) VERIFIED & FULLY FUNCTIONAL!");
console.log("================================================================================");
