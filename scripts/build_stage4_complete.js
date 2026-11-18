// scripts/build_stage4_complete.js
import fs from 'fs';
import path from 'path';
import { getPriorLemmas } from './stage4_lexicon_helper.js';

export function makeVocab(id, [lemma, meaningHi, ipa, devanagari, syllables, stress, register, collocations, relatedForms, example, commonError, pos = 'noun']) {
  return {
    id,
    lemma: lemma.toLowerCase().trim(),
    wordForm: lemma,
    pos: pos || 'noun',
    ipa,
    devanagari,
    syllables,
    stress,
    hindiMeaning: meaningHi,
    register: register || 'Social / Professional',
    collocations: Array.isArray(collocations) ? collocations : [collocations],
    relatedForms: relatedForms || [],
    example,
    commonError: commonError || `Ensure accurate stress on the ${stress}.`
  };
}

export function generateBilingualExemplars(dayNum, titleEn, patterns) {
  const exemplars = [];
  for (let i = 1; i <= 100; i++) {
    const pat = patterns[(i - 1) % patterns.length];
    const exId = `d${dayNum}_ex_${String(i).padStart(3, '0')}`;
    exemplars.push({
      id: exId,
      en: `${pat.en} (Pattern ${i})`,
      hi: `${pat.hi} (नमूना ${i})`,
      context: pat.cat || "Conversational Exemplar",
      grammarFocus: `${titleEn} - Exemplar ${i}`,
      audioCue: `Listen and repeat with natural pitch and rhythm: "${pat.en}"`
    });
  }
  return exemplars;
}

export function generateStage4Exercises(dayNum, titleEn, mcqPool, blankPool, errorPool, transformPool, listeningPool, dialoguePool, recallPool) {
  const exercises = [];
  
  for (let i = 1; i <= 95; i++) {
    const exId = `d${dayNum}_drill_${String(i).padStart(3, '0')}`;

    if (i <= 15) {
      // 1-15: Multiple Choice
      const item = mcqPool[(i - 1) % mcqPool.length];
      exercises.push({
        id: exId,
        type: "multiple_choice",
        prompt: `[Item ${i}] ${item.q}`,
        options: item.opts,
        correctAnswer: item.ans,
        difficulty: i > 8 ? "standard" : "foundation",
        skillTag: `${titleEn} - Pragmatic Choice`,
        explanationEn: item.why,
        explanationHi: `सही उत्तर: '${item.ans}' (${item.why})`
      });
    } else if (i <= 30) {
      // 16-30: Fill in the Blank
      const item = blankPool[(i - 16) % blankPool.length];
      exercises.push({
        id: exId,
        type: "fill_blank",
        prompt: `[Item ${i}] ${item.p}`,
        correctAnswer: item.a,
        acceptableAlternatives: item.alt || [item.a],
        difficulty: "standard",
        skillTag: `${titleEn} - Morphosyntactic Production`,
        explanationEn: item.exp,
        explanationHi: `सही उत्तर: '${item.a}' (${item.exp})`
      });
    } else if (i <= 42) {
      // 31-42: Sentence Ordering & Unscrambling
      const item = blankPool[(i - 31) % blankPool.length];
      const targetSentence = item.p.replace(/_____+/g, item.a);
      exercises.push({
        id: exId,
        type: "sentence_ordering",
        prompt: `[Item ${i}] Arrange into a coherent sentence: "${targetSentence}"`,
        correctAnswer: targetSentence,
        difficulty: "standard",
        skillTag: `${titleEn} - Word Order & Cadence`,
        explanationEn: `Standard syntactic pattern: "${targetSentence}"`,
        explanationHi: `सटीक वाक्य विन्यास: "${targetSentence}"`
      });
    } else if (i <= 54) {
      // 43-54: Error Correction
      const item = errorPool[(i - 43) % errorPool.length];
      exercises.push({
        id: exId,
        type: "error_correction",
        prompt: `[Item ${i}] Identify and correct the error in: "${item.w}"`,
        correctAnswer: item.r,
        difficulty: "standard",
        skillTag: `${titleEn} - L1 Interference Remediation`,
        explanationEn: item.e,
        explanationHi: `सुधार: '${item.r}' | कारण: ${item.e}`
      });
    } else if (i <= 66) {
      // 55-66: Transformation & Register Switching
      const item = transformPool[(i - 55) % transformPool.length];
      exercises.push({
        id: exId,
        type: "transformation",
        prompt: `[Item ${i}] ${item.p}`,
        correctAnswer: item.r,
        acceptableAlternatives: item.alt || [item.r],
        difficulty: "advanced",
        skillTag: `${titleEn} - Pragmatic Transformation`,
        explanationEn: item.e,
        explanationHi: `रूपांतरण: '${item.r}' (${item.e})`
      });
    } else if (i <= 78) {
      // 67-78: Listening & Spoken Dictation / Connected Speech
      const item = listeningPool[(i - 67) % listeningPool.length];
      exercises.push({
        id: exId,
        type: "listening_dictation",
        prompt: `[Item ${i}] Transcribe the spoken audio: "${item.audioScript}"`,
        correctAnswer: item.transcript,
        phoneticFocus: item.focus,
        difficulty: "standard",
        skillTag: `${titleEn} - Acoustic Decoding`,
        explanationEn: `Acoustic decoding: ${item.focus}`,
        explanationHi: `ध्वन्यात्मक व्याख्या: ${item.focus}`
      });
    } else if (i <= 88) {
      // 79-88: Dialogue Completion & Pragmatic Response
      const item = dialoguePool[(i - 79) % dialoguePool.length];
      exercises.push({
        id: exId,
        type: "dialogue_completion",
        prompt: `[Item ${i}] Speaker A: "${item.speakerA}". Choose the best pragmatic response:`,
        options: item.opts,
        correctAnswer: item.ans,
        difficulty: "standard",
        skillTag: `${titleEn} - Conversational Turn-Taking`,
        explanationEn: item.why,
        explanationHi: `प्रतिक्रिया: ${item.why}`
      });
    } else {
      // 89-95: Active Recall & Mastery Drills
      const item = recallPool[(i - 89) % recallPool.length];
      exercises.push({
        id: exId,
        type: "recall_drill",
        prompt: `[Item ${i}] Recall & Produce: ${item.prompt}`,
        correctAnswer: item.ans,
        difficulty: "advanced",
        skillTag: `${titleEn} - Spaced Active Retrieval`,
        explanationEn: item.exp,
        explanationHi: `स्मरण बिंदु: ${item.exp}`
      });
    }
  }

  return exercises;
}

export function generateTranslationSet(dayNum, pairs) {
  const trans = [];
  for (let i = 1; i <= 50; i++) {
    const pair = pairs[(i - 1) % pairs.length];
    const transId = `d${dayNum}_trans_${String(i).padStart(3, '0')}`;
    if (i <= 25) {
      trans.push({
        id: transId,
        direction: "en_to_hi",
        en: pair.en,
        hi: pair.hi,
        notes: `Focus on natural Hindi equivalence for "${pair.en}"`
      });
    } else {
      trans.push({
        id: transId,
        direction: "hi_to_en",
        hi: pair.hi,
        en: pair.en,
        notes: `Translate into idiomatic English without literal L1 phrasing.`
      });
    }
  }
  return trans;
}
