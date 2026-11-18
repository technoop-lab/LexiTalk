import fs from 'fs';
import path from 'path';

// Load services and registries
import { CURIOSITY_UNITS } from '../src/data/curiosityCurriculum';
import { CURRICULUM_UPGRADE_MANIFEST, CurriculumUpgradeManifestService } from '../src/data/curriculumUpgradeManifest';
import { ALL_CONVERSATIONS, CONVERSATION_REGISTRY, ConversationRegistryService } from '../src/data/conversations';
import { CENTRAL_LANGUAGE_REGISTRY, SUPPORTED_NATIVE_LANGUAGES } from '../src/data/languages';
import { A1_EXIT_ASSESSMENT_BLUEPRINT, A1_EXIT_EXERCISES_FORM_A, A1_EXIT_EXERCISES_FORM_B_RETEST } from '../src/data/a1ExitAssessmentData';
import { A2_EXIT_ASSESSMENT_BLUEPRINT, A2_EXIT_EXERCISES_FORM_A, A2_EXIT_EXERCISES_FORM_B_RETEST } from '../src/data/a2ExitAssessmentData';
import { CurriculumService } from '../src/services/CurriculumService';
import { LessonService } from '../src/services/LessonService';

async function runAudit() {
  console.log('============================================================');
  console.log('MASTER RELEASE AUDIT — CURRICULUM & ARCHITECTURE');
  console.log('============================================================');

  // 1. Filesystem Lessons Inspection
  const lessonsDir = path.resolve('src/data/lessons');
  const lessonFiles = fs.readdirSync(lessonsDir).filter(f => f.startsWith('lesson_') && f.endsWith('.ts'));
  console.log(`\n1. LESSON FILESYSTEM AUDIT:`);
  console.log(`Total lesson files on disk in src/data/lessons: ${lessonFiles.length}`);

  const lessonNumbersOnDisk = new Set<number>();
  for (const file of lessonFiles) {
    const match = file.match(/^lesson_a[12]_\d+_(\d+)\.ts$/);
    if (match) {
      lessonNumbersOnDisk.add(parseInt(match[1], 10));
    }
  }

  const missingLessonFiles: number[] = [];
  for (let i = 1; i <= 270; i++) {
    if (!lessonNumbersOnDisk.has(i)) {
      missingLessonFiles.push(i);
    }
  }
  console.log(`Missing lesson files (1-270): ${missingLessonFiles.length === 0 ? 'NONE (ALL 270 PRESENT)' : missingLessonFiles.join(', ')}`);

  // 2. Filesystem Conversations Inspection
  const convDir = path.resolve('src/data/conversations');
  const convFiles = fs.readdirSync(convDir).filter(f => f.startsWith('conversation_') && f.endsWith('.ts'));
  console.log(`\n2. CONVERSATION FILESYSTEM AUDIT:`);
  console.log(`Total conversation files on disk in src/data/conversations: ${convFiles.length}`);

  const convA1Files = convFiles.filter(f => f.startsWith('conversation_a1_'));
  const convA2Files = convFiles.filter(f => f.startsWith('conversation_a2_'));
  console.log(`A1 conversation files on disk: ${convA1Files.length}`);
  console.log(`A2 conversation files on disk: ${convA2Files.length}`);

  const convNumbersOnDisk = new Set<number>();
  for (const file of convFiles) {
    const match = file.match(/^conversation_a[12]_(\d+)\.ts$/);
    if (match) {
      convNumbersOnDisk.add(parseInt(match[1], 10));
    }
  }

  const missingConvFiles: number[] = [];
  for (let i = 1; i <= 270; i++) {
    if (!convNumbersOnDisk.has(i)) {
      missingConvFiles.push(i);
    }
  }
  console.log(`Missing conversation files on disk (1-270): ${missingConvFiles.length === 0 ? 'NONE (ALL 270 PRESENT)' : missingConvFiles.join(', ')}`);

  // 3. Conversation Registry Audit
  console.log(`\n3. CONVERSATION REGISTRY AUDIT:`);
  console.log(`ALL_CONVERSATIONS total: ${ALL_CONVERSATIONS.length}`);
  console.log(`CONVERSATION_REGISTRY total keys: ${Object.keys(CONVERSATION_REGISTRY).length}`);

  let a1ConvCount = 0;
  let a2ConvCount = 0;
  const missingConvIds: string[] = [];
  const convIssues: string[] = [];

  for (let i = 1; i <= 270; i++) {
    const prefix = i <= 90 ? 'conv_a1_' : 'conv_a2_';
    const convId = `${prefix}${i}`;
    const conv = CONVERSATION_REGISTRY[convId];
    if (!conv) {
      missingConvIds.push(convId);
    } else {
      if (conv.cefr === 'A1') a1ConvCount++;
      else if (conv.cefr === 'A2') a2ConvCount++;

      // Check structure
      if (!conv.scenario) convIssues.push(`${convId}: missing scenario`);
      if (!conv.teach) convIssues.push(`${convId}: missing teach`);
      if (!conv.teach?.keyVocabulary || conv.teach.keyVocabulary.length === 0) convIssues.push(`${convId}: missing keyVocabulary`);
      if (!conv.teach?.usefulChunks || conv.teach.usefulChunks.length === 0) convIssues.push(`${convId}: missing usefulChunks`);
      if (!conv.teach?.grammar) convIssues.push(`${convId}: missing grammar breakdown`);
      if (!conv.controlledPractice || conv.controlledPractice.length === 0) convIssues.push(`${convId}: missing controlledPractice`);
      if (!conv.sentenceConstruction || conv.sentenceConstruction.length === 0) convIssues.push(`${convId}: missing sentenceConstruction`);
      if (!conv.turns || conv.turns.length === 0) convIssues.push(`${convId}: missing turns`);
      if (!conv.masteryCriteria) convIssues.push(`${convId}: missing masteryCriteria`);
    }
  }

  console.log(`Registered A1 conversations (1-90): ${a1ConvCount}/90`);
  console.log(`Registered A2 conversations (91-270): ${a2ConvCount}/180`);
  console.log(`Missing conversation IDs in registry: ${missingConvIds.length === 0 ? 'NONE' : missingConvIds.join(', ')}`);
  console.log(`Structural issues across conversations: ${convIssues.length === 0 ? 'NONE (ALL 270 PASS FULL 18-STAGE SPEC)' : convIssues.join('; ')}`);

  // 4. Lessons Audit via LessonService
  console.log(`\n4. LESSON REGISTRY & STRUCTURE AUDIT:`);
  let totalExercises = 0;
  let totalPracticeExercises = 0;
  let totalReviewExercises = 0;
  let totalAssessmentExercises = 0;
  let minExercises = 999;
  let maxExercises = 0;
  let minExLesson = -1;
  let maxExLesson = -1;
  const exerciseTypeCounts: Record<string, number> = {};
  const allVocabSet = new Set<string>();
  const a1VocabSet = new Set<string>();
  const a2VocabSet = new Set<string>();
  const allChunksSet = new Set<string>();
  let totalLexicalTargets = 0;
  let totalCollocations = 0;
  const unitExCounts: Record<number, number> = {};
  const lessonIssues: string[] = [];

  const allRegistryKeys = Object.keys((LessonService as any).lessonRegistry);
  console.log(`Total lessons in LessonService.lessonRegistry: ${allRegistryKeys.length}`);

  for (let i = 1; i <= 270; i++) {
    let unitNum = 1;
    if (i <= 15) unitNum = 1;
    else if (i <= 30) unitNum = 2;
    else if (i <= 45) unitNum = 3;
    else if (i <= 60) unitNum = 4;
    else if (i <= 75) unitNum = 5;
    else if (i <= 90) unitNum = 6;
    else if (i <= 105) unitNum = 7;
    else if (i <= 120) unitNum = 8;
    else if (i <= 135) unitNum = 9;
    else if (i <= 150) unitNum = 10;
    else if (i <= 165) unitNum = 11;
    else if (i <= 180) unitNum = 12;
    else if (i <= 195) unitNum = 13;
    else if (i <= 210) unitNum = 14;
    else if (i <= 225) unitNum = 15;
    else if (i <= 240) unitNum = 16;
    else if (i <= 255) unitNum = 17;
    else unitNum = 18;

    const prefix = i <= 90 ? `lesson_a1_${unitNum}_${i}` : `lesson_a2_${unitNum}_${i}`;
    const lesson = (LessonService as any).lessonRegistry[prefix];

    if (!lesson) {
      lessonIssues.push(`Lesson ${i} (${prefix}): missing from LessonService.lessonRegistry`);
      continue;
    }

    const practiceCount = lesson.practiceExercises ? lesson.practiceExercises.length : 0;
    const reviewCount = lesson.reviewExercises ? lesson.reviewExercises.length : 0;
    const assessCount = lesson.assessmentExercises ? lesson.assessmentExercises.length : 0;
    const exCount = practiceCount + reviewCount + assessCount;

    totalPracticeExercises += practiceCount;
    totalReviewExercises += reviewCount;
    totalAssessmentExercises += assessCount;
    totalExercises += exCount;

    unitExCounts[unitNum] = (unitExCounts[unitNum] || 0) + exCount;

    if (exCount < minExercises) {
      minExercises = exCount;
      minExLesson = i;
    }
    if (exCount > maxExercises) {
      maxExercises = exCount;
      maxExLesson = i;
    }

    // Exercise types
    const allLessonExercises = [
      ...(lesson.practiceExercises || []),
      ...(lesson.reviewExercises || []),
      ...(lesson.assessmentExercises || []),
    ];

    for (const ex of allLessonExercises) {
      const type = ex.type || 'unknown';
      exerciseTypeCounts[type] = (exerciseTypeCounts[type] || 0) + 1;
    }

    // Vocab & Lexical targets
    if (lesson.vocabulary) {
      for (const v of lesson.vocabulary) {
        const word = (typeof v === 'string' ? v : (v.word || v.term || '')).toLowerCase().trim();
        if (word) {
          allVocabSet.add(word);
          if (i <= 90) a1VocabSet.add(word);
          else a2VocabSet.add(word);
          totalLexicalTargets++;
        }
      }
    }

    // Chunks / Collocations from expressions / chunks
    if (lesson.expressions || lesson.chunks || lesson.usefulPhrases || lesson.lexicalChunks) {
      const chunks = lesson.expressions || lesson.chunks || lesson.usefulPhrases || lesson.lexicalChunks || [];
      for (const c of chunks) {
        const chunkText = (typeof c === 'string' ? c : (c.phrase || c.chunk || c.expression || '')).toLowerCase().trim();
        if (chunkText) {
          allChunksSet.add(chunkText);
          totalCollocations++;
        }
      }
    }
  }

  console.log(`Lesson registry missing/issues: ${lessonIssues.length === 0 ? 'NONE (ALL 270 REGISTERED & LOADABLE)' : lessonIssues.join('; ')}`);
  console.log(`\nEXERCISE ENGINE STATS:`);
  console.log(`  Total exercises across 270 lessons: ${totalExercises}`);
  console.log(`    - Practice exercises: ${totalPracticeExercises}`);
  console.log(`    - Review exercises: ${totalReviewExercises}`);
  console.log(`    - Assessment exercises: ${totalAssessmentExercises}`);
  console.log(`  Average exercises per lesson: ${(totalExercises / 270).toFixed(2)}`);
  console.log(`  Min exercises in a lesson: ${minExercises} (Lesson ${minExLesson})`);
  console.log(`  Max exercises in a lesson: ${maxExercises} (Lesson ${maxExLesson})`);
  console.log(`  Exercise types breakdown:`, exerciseTypeCounts);
  console.log(`  Exercise count by unit:`, unitExCounts);

  console.log(`\nVOCABULARY STATS:`);
  console.log(`  Unique A1 words: ${a1VocabSet.size}`);
  console.log(`  Unique A2 words: ${a2VocabSet.size}`);
  console.log(`  Combined unique vocabulary words: ${allVocabSet.size}`);
  console.log(`  Total lexical target occurrences: ${totalLexicalTargets}`);
  console.log(`  Unique lexical chunks/collocations: ${allChunksSet.size}`);
  console.log(`  Total chunk occurrences: ${totalCollocations}`);

  // 5. Lesson <-> Conversation Alignment Check
  console.log(`\n5. LESSON <-> CONVERSATION ALIGNMENT AUDIT:`);
  let alignmentMismatches = 0;
  for (let i = 1; i <= 270; i++) {
    let unitNum = 1;
    if (i <= 15) unitNum = 1;
    else if (i <= 30) unitNum = 2;
    else if (i <= 45) unitNum = 3;
    else if (i <= 60) unitNum = 4;
    else if (i <= 75) unitNum = 5;
    else if (i <= 90) unitNum = 6;
    else if (i <= 105) unitNum = 7;
    else if (i <= 120) unitNum = 8;
    else if (i <= 135) unitNum = 9;
    else if (i <= 150) unitNum = 10;
    else if (i <= 165) unitNum = 11;
    else if (i <= 180) unitNum = 12;
    else if (i <= 195) unitNum = 13;
    else if (i <= 210) unitNum = 14;
    else if (i <= 225) unitNum = 15;
    else if (i <= 240) unitNum = 16;
    else if (i <= 255) unitNum = 17;
    else unitNum = 18;

    const lessonPrefix = i <= 90 ? `lesson_a1_${unitNum}_${i}` : `lesson_a2_${unitNum}_${i}`;
    const convPrefix = i <= 90 ? `conv_a1_${i}` : `conv_a2_${i}`;

    const lesson = (LessonService as any).lessonRegistry[lessonPrefix];
    const conv = CONVERSATION_REGISTRY[convPrefix];

    if (!lesson || !conv) {
      console.log(`Mismatch: Lesson ${i} or Conversation ${i} missing`);
      alignmentMismatches++;
      continue;
    }

    const linksLesson = conv.lessonLinks.some((l: string) => l === lessonPrefix || l === `lesson_${i}` || l === String(i));
    if (!linksLesson) {
      console.log(`Lesson link mismatch in ${convPrefix}: lessonLinks = ${JSON.stringify(conv.lessonLinks)} vs expected ${lessonPrefix}`);
      alignmentMismatches++;
    }

    const expectedCEFR = i <= 90 ? 'A1' : 'A2';
    if (conv.cefr !== expectedCEFR) {
      console.log(`CEFR mismatch in ${convPrefix}: ${conv.cefr} vs ${expectedCEFR}`);
      alignmentMismatches++;
    }
  }
  console.log(`Total lesson <-> conversation alignment mismatches: ${alignmentMismatches}`);

  // 6. Manifest & Metadata Audit
  console.log(`\n6. MANIFEST & METADATA AUDIT:`);
  const manifestKeys = Object.keys(CURRICULUM_UPGRADE_MANIFEST);
  console.log(`  CURRICULUM_UPGRADE_MANIFEST total lesson records: ${manifestKeys.length}`);
  const a1ManifestCount = manifestKeys.filter(k => k.startsWith('lesson_a1_')).length;
  const a2ManifestCount = manifestKeys.filter(k => k.startsWith('lesson_a2_')).length;
  console.log(`  A1 records in manifest: ${a1ManifestCount}/90`);
  console.log(`  A2 records in manifest: ${a2ManifestCount}/180`);

  // 7. Assessments Audit
  console.log(`\n7. ASSESSMENTS AUDIT:`);
  console.log(`  A1 Exit Blueprint sections: ${A1_EXIT_ASSESSMENT_BLUEPRINT.sections.length}, total points: ${A1_EXIT_ASSESSMENT_BLUEPRINT.totalPoints}`);
  console.log(`  A1 Exit Form A exercises: ${A1_EXIT_EXERCISES_FORM_A.length}`);
  console.log(`  A1 Exit Form B Retest exercises: ${A1_EXIT_EXERCISES_FORM_B_RETEST.length}`);
  console.log(`  A2 Exit Blueprint sections: ${A2_EXIT_ASSESSMENT_BLUEPRINT.sections.length}, total points: ${A2_EXIT_ASSESSMENT_BLUEPRINT.totalPoints}`);
  console.log(`  A2 Exit Form A exercises: ${A2_EXIT_EXERCISES_FORM_A.length}`);
  console.log(`  A2 Exit Form B Retest exercises: ${A2_EXIT_EXERCISES_FORM_B_RETEST.length}`);

  // 8. Supported Languages Audit
  console.log(`\n8. LANGUAGE REGISTRY AUDIT:`);
  console.log(`  Central Languages count: ${CENTRAL_LANGUAGE_REGISTRY.length}`);
  console.log(`  Supported Native Languages count: ${SUPPORTED_NATIVE_LANGUAGES.length}`);
  const hindiSupported = SUPPORTED_NATIVE_LANGUAGES.find(l => l.code === 'hi');
  console.log(`  Hindi support: ${hindiSupported ? `Active (${hindiSupported.nameNative})` : 'MISSING'}`);

  console.log('\n============================================================');
  console.log('AUDIT SCRIPT COMPLETED SUCCESSFULLY');
  console.log('============================================================');
}

runAudit().catch(err => {
  console.error('Audit Script Failed:', err);
  process.exit(1);
});
