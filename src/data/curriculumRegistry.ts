import {
  HindiDayLesson,
  HindiCourseStageMeta,
  HindiVocabItem,
  HindiPhraseItem,
  HindiExampleItem,
  HindiPracticeExercise,
  HindiAssessItem,
  HindiPronunciationDrill,
  HindiMinimalPair,
  HindiDialogueScenario,
  HindiDialogueTurn,
  HindiSpeakingTask
} from '../types/hindiCourse';

import stage1Pack from '../../DAYS_01_10_CONTENT.json';
import stage2Pack from '../../DAYS_11_20_CONTENT.json';
import stage3Pack from '../../DAYS_21_30_CONTENT.json';
import stage4Pack from '../../DAYS_31_40_CONTENT.json';
import stage5Pack from '../../DAYS_41_50_CONTENT.json';
import stage6Pack from '../../DAYS_51_60_CONTENT.json';

export const STAGES_METADATA: HindiCourseStageMeta[] = [
  {
    stageNumber: 1,
    stageTitleEn: 'Stage 1: Foundation & Essential Communication',
    stageTitleHi: 'स्टेज 1: बुनियादी नींव और दैनिक बातचीत',
    startDay: 1,
    endDay: 10,
    cefrSpan: 'A1.1 → A1.2',
    descriptionEn: 'Daily greetings, identities, verb to be, family, possession, present habits, adjectives & numbers.',
    descriptionHi: 'अभिवादन, व्यक्तिगत पहचान, be क्रिया, परिवार, संबंध, वर्तमान आदतें, विशेषण और संख्याएँ।',
  },
  {
    stageNumber: 2,
    stageTitleEn: 'Stage 2: Core Functional Communication',
    stageTitleHi: 'स्टेज 2: व्यावहारिक संवाद और दैनिक जीवन',
    startDay: 11,
    endDay: 20,
    cefrSpan: 'A1.2 → A2.1',
    descriptionEn: 'Questions, negatives, food & ordering, hobbies, modals (can), home existence (there is/are), routines & travel.',
    descriptionHi: 'नकारात्मक वाक्य, प्रश्न पूछना, रेस्टोरेंट में ऑर्डर, पसंद-नापसंद, क्षमता (Can), घर, दैनिक दिनचर्या और यात्रा।',
  },
  {
    stageNumber: 3,
    stageTitleEn: 'Stage 3: Past Narratives & Time Sequencing',
    stageTitleHi: 'स्टेज 3: भूतकाल की कहानियाँ और घटनाएँ',
    startDay: 21,
    endDay: 30,
    cefrSpan: 'A2.1',
    descriptionEn: 'Past simple regular/irregular verbs, yesterday stories, time markers, question formulation in past, childhood anecdotes.',
    descriptionHi: 'भूतकाल के नियम, पिछली घटनाएँ, समय संकेतक, भूतकाल में प्रश्न निर्माण और जीवन के अनुभव।',
  },
  {
    stageNumber: 4,
    stageTitleEn: 'Stage 4: Future Plans, Modals & Interpersonal Nuance',
    stageTitleHi: 'स्टेज 4: भविष्य की योजनाएँ, मॉडल्स और व्यवहार कुशलता',
    startDay: 31,
    endDay: 40,
    cefrSpan: 'A2.1 → A2.2',
    descriptionEn: 'Future intentions, predictions, telephone etiquette, polite requests, conditionals, comparisons & social nuance.',
    descriptionHi: 'भविष्य की योजनाएं (Will vs Going to), टेलीफोन शिष्टाचार, विनम्र अनुरोध, शर्तें (Conditionals) और तुलनाएं।',
  },
  {
    stageNumber: 5,
    stageTitleEn: 'Stage 5: Planned Course Content',
    stageTitleHi: 'स्टेज 5: प्रस्तावित पाठ्यक्रम सामग्री',
    startDay: 41,
    endDay: 50,
    cefrSpan: 'Planned; not released',
    descriptionEn: 'Days 41–50 are planned and not released in this version.',
    descriptionHi: 'दिन 41–50 की सामग्री प्रस्तावित है; इस संस्करण में जारी नहीं हुई है।',
  },
  {
    stageNumber: 6,
    stageTitleEn: 'Stage 6: Planned Course Endpoint',
    stageTitleHi: 'स्टेज 6: प्रस्तावित पाठ्यक्रम का अंतिम पड़ाव',
    startDay: 51,
    endDay: 60,
    cefrSpan: 'Planned; not released',
    descriptionEn: 'Days 51–60 are planned and not released in this version.',
    descriptionHi: 'दिन 51–60 की सामग्री प्रस्तावित है; इस संस्करण में जारी नहीं हुई है।',
  },
];

/**
 * Normalize raw day payload from JSON / code generator into standard runtime HindiDayLesson
 */
export function normalizeDayLesson(rawDay: any): HindiDayLesson {
  if (!rawDay) {
    throw new Error('Attempted to normalize null or undefined lesson payload');
  }

  const dayNumber = Number(rawDay.dayNumber || (rawDay.id ? rawDay.id.replace(/\D/g, '') : 1));
  const id = rawDay.id || `day_${dayNumber < 10 ? '0' + dayNumber : dayNumber}`;

  // Canonical Normalized Vocabulary
  const rawVocabList = rawDay.learn?.vocabulary || [];
  const vocabulary: HindiVocabItem[] = rawVocabList.map((v: any, idx: number) => {
    const word = String(v.word || v.lemma || v.wordForm || '').trim();
    const lemma = String(v.lemma || v.word || v.wordForm || '').trim();
    const partOfSpeech = String(v.partOfSpeech || v.pos || 'Word').trim();
    const ipa = String(v.ipa || '').trim();
    const hindiMeaning = String(v.hindiMeaning || v.meaningHi || v.meaning || '').trim();
    const hindiPronunciation = String(v.hindiPronunciation || v.devanagari || v.hindiIpa || '').trim();
    const syllables = String(v.syllables || '').trim();
    const stress = String(v.stress || '').trim();
    const collocations = Array.isArray(v.collocations) ? v.collocations : [];
    const example = String(v.example || v.exampleEn || v.exampleSentenceEn || '').trim();
    const hindiExample = String(v.hindiExample || v.exampleHi || v.exampleSentenceHi || '').trim();
    const register = String(v.register || '').trim();
    const commonError = String(v.commonError || v.commonMistake || v.commonLearnerError || '').trim();
    const relatedForms = Array.isArray(v.relatedForms) ? v.relatedForms : [];

    return {
      ...v,
      id: v.id || `v_${dayNumber}_${idx + 1}`,
      word,
      lemma,
      partOfSpeech,
      pos: partOfSpeech,
      ipa,
      hindiMeaning,
      meaningHi: hindiMeaning,
      hindiPronunciation,
      devanagari: hindiPronunciation,
      hindiIpa: hindiPronunciation,
      syllables,
      stress,
      collocations,
      example,
      exampleEn: example,
      hindiExample,
      exampleHi: hindiExample,
      register,
      commonError,
      commonMistake: commonError,
      commonLearnerError: commonError,
      relatedForms
    };
  });
  // 2. Pragmatic & Spoken Phrases
  const rawPhrases = rawDay.learn?.phrases || rawDay.learn?.spokenPhrases || rawDay.spokenPhrases || rawDay.phrases || [];
  const phrases: HindiPhraseItem[] = rawPhrases.map((p: any, idx: number) => {
    const phrase = String(p.phrase || p.phraseEn || p.en || p.expression || p.spokenPhrase || p.textEn || p.text || '').trim();
    const meaningHi = String(p.hindiMeaning || p.meaningHi || p.phraseHi || p.hi || p.hindi || p.meaning || p.textHi || '').trim();
    const explanation = String(p.explanation || p.context || p.usageContext || p.use || p.contextualUsage || '').trim();
    const register = String(p.register || p.tone || 'Spoken English').trim();
    const exampleEn = String(p.example || p.exampleEn || p.exemplarEn || p.contextualUsage || '').trim();
    const exampleHi = String(p.hindiExample || p.exampleHi || p.exemplarHi || '').trim();
    const ipa = String(p.ipa || '').trim();
    const pronunciation = String(p.pronunciation || p.intonationPattern || p.intonation || '').trim();
    const audio = String(p.audio || p.audioCue || phrase).trim();

    return {
      ...p,
      id: p.id || `phr_${dayNumber}_${idx + 1}`,
      phrase,
      meaningHi,
      hindiMeaning: meaningHi,
      explanation,
      contextualUsage: explanation || exampleEn,
      register,
      example: exampleEn,
      exampleEn,
      hindiExample: exampleHi,
      exampleHi,
      ipa,
      pronunciation,
      audio
    };
  });

  // Contextual Model Sentences
  let rawExamplesList: any[] = [];
  if (Array.isArray(rawDay.examples)) {
    rawExamplesList = rawDay.examples;
  } else if (rawDay.examples?.bilingualExemplars && Array.isArray(rawDay.examples.bilingualExemplars)) {
    rawExamplesList = rawDay.examples.bilingualExemplars;
  }

  const seenExamples = new Set<string>();
  const examples: HindiExampleItem[] = [];
  rawExamplesList.forEach((eg: any, idx: number) => {
    const en = String(eg.en || eg.english || eg.textEn || eg.sentenceEn || eg.exampleEn || '').trim();
    const hi = String(eg.hi || eg.hindi || eg.textHi || eg.sentenceHi || eg.exampleHi || '').trim();
    if (en && !seenExamples.has(en.toLowerCase())) {
      seenExamples.add(en.toLowerCase());
      examples.push({
        id: eg.id || `eg_${dayNumber}_${examples.length + 1}`,
        en,
        hi,
        notes: eg.notes || (eg.grammaticalFocus ? `Focus: ${eg.grammaticalFocus}` : undefined),
        register: eg.register,
        grammaticalFocus: eg.grammaticalFocus
      });
    }
  });

  // Pronunciation, Sounds, and Minimal Pairs
  const rawPron = rawDay.pronunciation || rawDay.phonetics || {};
  let targetSounds: string[] = [];
  if (Array.isArray(rawPron.targetSounds) && rawPron.targetSounds.length > 0) {
    targetSounds = rawPron.targetSounds.map((s: any) => String(s));
  } else if (rawPron.targetSound) {
    targetSounds = [String(rawPron.targetSound)];
  } else if (rawPron.focusSound) {
    targetSounds = [String(rawPron.focusSound)];
  } else {
    targetSounds = ['Acoustic Clarity & Connected Speech'];
  }

  const traps =
    rawPron.traps ||
    rawPron.hindiSpeakerPhoneticTrap ||
    rawPron.phoneticNotes ||
    rawPron.articulatoryMechanics ||
    'Focus on smooth natural intonation and distinct vowel lengths.';

  // Helpers for extracting clean text & ipa from minimal pairs
  const extractWordText = (w: any): string => {
    if (!w) return '';
    if (typeof w === 'string') return w.trim();
    if (typeof w === 'object') return String(w.text || w.word || w.p || '').trim();
    return String(w).trim();
  };
  const extractWordIpa = (w: any, fallbackIpa?: string): string => {
    if (typeof w === 'object' && w.ipa) return String(w.ipa).trim();
    return fallbackIpa ? String(fallbackIpa).trim() : '';
  };

  // Structured Minimal Pairs
  let minimalPairs: HindiMinimalPair[] = [];
  if (Array.isArray(rawPron.minimalPairs)) {
    minimalPairs = rawPron.minimalPairs
      .map((mp: any, idx: number) => {
        if (typeof mp === 'string') {
          const parts = mp.split(/\s+(?:vs\.?|versus|VS)\s+/i);
          return {
            id: `mp_${dayNumber}_${idx + 1}`,
            wordA: parts[0]?.trim() || mp.trim(),
            wordB: parts[1]?.trim() || '',
            ipaA: '',
            ipaB: '',
            distinctionNote: 'Pronunciation and acoustic discrimination contrast.'
          };
        }
        if (typeof mp === 'object' && mp !== null) {
          const wordA = extractWordText(mp.wordA || mp.word1 || mp.p1 || mp.a || mp.left);
          const wordB = extractWordText(mp.wordB || mp.word2 || mp.p2 || mp.b || mp.right);
          const ipaA = extractWordIpa(mp.wordA, mp.ipaA || mp.ipa1 || mp.ipa);
          const ipaB = extractWordIpa(mp.wordB, mp.ipaB || mp.ipa2 || mp.ipa);
          const meaningA = mp.meaningHi1 || mp.meaningA || mp.hi1 || '';
          const meaningB = mp.meaningHi2 || mp.meaningB || mp.hi2 || '';
          const distinctionNote = mp.discriminationNote || mp.distinctionNote || mp.note || mp.cue || mp.tip || '';

          return {
            id: mp.id || `mp_${dayNumber}_${idx + 1}`,
            wordA,
            wordB,
            ipaA,
            ipaB,
            meaningA,
            meaningB,
            distinctionNote
          };
        }
        return null;
      })
      .filter((mp): mp is HindiMinimalPair => mp !== null && Boolean(mp.wordA && mp.wordB));
  }

  // Audio Drills
  let drills: HindiPronunciationDrill[] = [];
  if (Array.isArray(rawPron.drills) && rawPron.drills.length > 0) {
    drills = rawPron.drills.map((d: any, idx: number) => ({
      id: d.id || `drill_${dayNumber}_${idx + 1}`,
      text: typeof d === 'string' ? d.trim() : String(d.text || d.sentence || d.phrase || d.word || '').trim(),
      voiceRole: d.voiceRole || 'Standard Accent',
      tip: d.tip || d.focusTip || ''
    }));
  }

  // If minimal pairs exist and drills are empty, synthesize interactive drill entries
  if (drills.length === 0 && minimalPairs.length > 0) {
    minimalPairs.forEach((mp, idx) => {
      drills.push({
        id: `mp_drill_${dayNumber}_${idx + 1}`,
        text: `${mp.wordA} vs ${mp.wordB}`,
        voiceRole: 'Minimal Pair Contrast',
        tip: mp.distinctionNote || (mp.ipaA && mp.ipaB ? `${mp.wordA} (${mp.ipaA}) vs ${mp.wordB} (${mp.ipaB})` : `Contrast ${mp.wordA} with ${mp.wordB}`)
      });
    });
  }

  // If sentence stress exists, include drills
  const rawSentenceStress = rawPron.sentenceStress || rawPron.sentenceStressPatterns || [];
  if (Array.isArray(rawSentenceStress) && rawSentenceStress.length > 0) {
    rawSentenceStress.forEach((st: any, idx: number) => {
      const sentenceText = st.sentence || st.s || st.text;
      if (sentenceText) {
        drills.push({
          id: `stress_drill_${dayNumber}_${idx + 1}`,
          text: String(sentenceText).trim(),
          voiceRole: 'Sentence Rhythm & Stress',
          tip: st.rhythmNote || st.focus || st.explanation || 'Emphasize stressed content words.'
        });
      }
    });
  }

  // If connected speech exists, include drills
  const rawConnectedSpeech = rawPron.connectedSpeech || rawPron.connectedSpeechExamples || rawPron.connectedSpeechRules || [];
  if (Array.isArray(rawConnectedSpeech) && rawConnectedSpeech.length > 0) {
    rawConnectedSpeech.forEach((cs: any, idx: number) => {
      const phraseText = cs.en || cs.phrase || cs.text || cs.rule;
      if (phraseText) {
        drills.push({
          id: `cs_drill_${dayNumber}_${idx + 1}`,
          text: String(phraseText).trim(),
          voiceRole: 'Connected Speech & Linking',
          tip: `${cs.ipa ? cs.ipa + ' — ' : ''}${cs.note || cs.explanation || cs.context || 'Smooth connected speech linking.'}`
        });
      }
    });
  }

  // Practice Exercises
  let rawExercisesList: any[] = [];
  if (Array.isArray(rawDay.practice)) {
    rawExercisesList = rawDay.practice;
  } else if (rawDay.practice && typeof rawDay.practice === 'object') {
    if (Array.isArray(rawDay.practice.exercises)) {
      rawExercisesList.push(...rawDay.practice.exercises);
    }
    if (Array.isArray(rawDay.practice.translationSet)) {
      rawDay.practice.translationSet.forEach((tr: any, tIdx: number) => {
        rawExercisesList.push({
          id: tr.id || `tr_${dayNumber}_${tIdx + 1}`,
          type: tr.type === 'hi_to_en' ? 'translation' : 'multiple_choice',
          prompt: tr.source || tr.prompt || 'Translate accurately between Hindi and English:',
          correctAnswer: tr.target || tr.correctAnswer || '',
          options: tr.options || [tr.target || tr.correctAnswer || '', 'Incorrect phrasing', 'Colloquial mismatch', 'Grammatically invalid'],
          targetText: tr.target,
          explanationEn: tr.explanation || tr.explanationEn || 'Select or type the grammatically precise translation.',
          explanationHi: tr.explanation || tr.explanationHi || 'उचित और सटीक अनुवाद का चयन करें।',
          difficulty: tr.difficulty || 'medium',
          skillTag: tr.type || 'translation_practice'
        });
      });
    }
    if (Array.isArray(rawDay.practice.listeningTasks)) {
      rawDay.practice.listeningTasks.forEach((lt: any, lIdx: number) => {
        rawExercisesList.push({
          id: lt.id || `lt_${dayNumber}_${lIdx + 1}`,
          type: 'listening',
          prompt: lt.prompt || lt.text || 'Listen to the audio and choose the accurate transcription/meaning:',
          correctAnswer: lt.correctAnswer || lt.text || '',
          options: lt.options || [],
          explanationEn: lt.explanation || 'Active listening discrimination.',
          explanationHi: 'सुनकर सही उत्तर पहचानें।',
          difficulty: 'medium',
          skillTag: 'listening_comprehension'
        });
      });
    }
    if (Array.isArray(rawDay.practice.shadowingPrompts)) {
      rawDay.practice.shadowingPrompts.forEach((sp: any, sIdx: number) => {
        rawExercisesList.push({
          id: sp.id || `sp_${dayNumber}_${sIdx + 1}`,
          type: 'shadowing',
          prompt: sp.prompt || sp.textEn || sp.text || 'Shadow and vocalize with matching cadence:',
          correctAnswer: sp.textEn || sp.text || '',
          options: [],
          explanationEn: sp.focusTip || 'Vocal shadowing and pacing match.',
          explanationHi: 'ध्वनि और तालमेल का अनुसरण करते हुए उच्चारण करें।',
          difficulty: 'medium',
          skillTag: 'shadowing_practice'
        });
      });
    }
  }

  const seenPrompts = new Set<string>();
  const practice: HindiPracticeExercise[] = [];
  rawExercisesList.forEach((ex: any, idx: number) => {
    const prompt = String(ex.prompt || ex.question || 'Choose the correct English response:').trim();
    const promptKey = prompt.toLowerCase();
    if (!seenPrompts.has(promptKey)) {
      seenPrompts.add(promptKey);
      practice.push({
        id: ex.id || `ex_${dayNumber}_${practice.length + 1}`,
        type: ex.type || 'multiple_choice',
        prompt,
        options: ex.options || [],
        correctAnswer: ex.correctAnswer || ex.targetText || ex.expectedAnswer || (ex.options ? ex.options[0] : ''),
        acceptableAlternatives: ex.acceptableAlternatives || [],
        targetText: ex.targetText,
        pairs: ex.pairs,
        expectedAnswer: ex.expectedAnswer,
        explanationEn: ex.explanationEn || 'Select the grammatically accurate and natural communicative choice.',
        explanationHi: ex.explanationHi || 'उचित व्याकरण और स्वाभाविक अभिव्यक्ति का चयन करें।',
        difficulty: ex.difficulty || 'medium',
        skillTag: ex.skillTag || 'core_grammar'
      });
    }
  });

  // Helper text sanitizers to eliminate artificial template phrases and preserve natural language
  const cleanDialogueNaturalText = (text: any): string => {
    if (!text) return '';
    return String(text)
      .replace(/\s+in this specific situation[\.\,\;]?/gi, '.')
      .replace(/\s+in this particular situation[\.\,\;]?/gi, '.')
      .replace(/\s+in this particular context[\.\,\;]?/gi, '.')
      .replace(/\s+in the given situation[\.\,\;]?/gi, '.')
      .replace(/\s+in the given scenario[\.\,\;]?/gi, '.')
      .replace(/\s+as mentioned above[\.\,\;]?/gi, '.')
      .replace(/\s+in this situation[\.\,\;]?/gi, '.')
      .replace(/\s{2,}/g, ' ')
      .replace(/\.\./g, '.')
      .replace(/\s+\./g, '.')
      .trim();
  };

  const cleanDialogueNaturalHindiText = (text: any): string => {
    if (!text) return '';
    return String(text)
      .replace(/\s*इस विशिष्ट स्थिति में\s*/gi, ' ')
      .replace(/\s*इस विशेष स्थिति में\s*/gi, ' ')
      .replace(/\s*इस स्थिति में\s*/gi, ' ')
      .replace(/\s*दिए गए परिदृश्य में\s*/gi, ' ')
      .replace(/\s*जैसा कि ऊपर उल्लेख किया गया है\s*/gi, ' ')
      .replace(/\s{2,}/g, ' ')
      .replace(/\|\s*\|/g, '|')
      .trim();
  };

  // Conversational Use & Dialogue Scenarios
  const rawUse = rawDay.use || {};
  const globalSituation =
    rawUse.situation ||
    (typeof rawUse.speakingPrompt?.situation === 'string' ? rawUse.speakingPrompt.situation : '') ||
    rawUse.roleplay?.scenario ||
    'Real-World Practical Conversation (दैनिक जीवन में बातचीत)';

  let rawScenarioList: any[] = [];
  // Explicit Precedence:
  // 1. Canonical source: rawUse.dialogues
  // 2. Defensive compatibility fallback: rawDay.dialogues
  // 3. Legacy single dialogue structure: rawUse.dialogue
  // 4. Defensive fallback: rawDay.dialogue
  if (Array.isArray(rawUse.dialogues) && rawUse.dialogues.length > 0) {
    rawScenarioList = rawUse.dialogues;
  } else if (Array.isArray(rawDay.dialogues) && rawDay.dialogues.length > 0) {
    rawScenarioList = rawDay.dialogues;
  } else if (rawUse.dialogue) {
    if (Array.isArray(rawUse.dialogue)) {
      rawScenarioList = [
        {
          id: `scenario_${dayNumber}_1`,
          title: `Day ${dayNumber} Conversation`,
          context: globalSituation,
          turns: rawUse.dialogue
        }
      ];
    } else {
      rawScenarioList = [rawUse.dialogue];
    }
  } else if (rawDay.dialogue) {
    if (Array.isArray(rawDay.dialogue)) {
      rawScenarioList = [
        {
          id: `scenario_${dayNumber}_1`,
          title: `Day ${dayNumber} Conversation`,
          context: globalSituation,
          turns: rawDay.dialogue
        }
      ];
    } else {
      rawScenarioList = [rawDay.dialogue];
    }
  }

  // Fallback if no scenario list found at all
  if (rawScenarioList.length === 0) {
    rawScenarioList = [
      {
        id: `dialogue_${dayNumber}`,
        title: `Day ${dayNumber} Conversation`,
        context: globalSituation,
        turns: []
      }
    ];
  }

  const normalizedScenarios: HindiDialogueScenario[] = rawScenarioList.map((sc: any, scIdx: number) => {
    let rawTurns: any[] = [];
    if (Array.isArray(sc.turns)) {
      rawTurns = sc.turns;
    } else if (Array.isArray(sc.lines)) {
      rawTurns = sc.lines;
    } else if (Array.isArray(sc)) {
      rawTurns = sc;
    }

    let prevSpeaker = '';
    let normalizedTurns: HindiDialogueTurn[] = rawTurns
      .filter((turn: any) => turn && (turn.textEn || turn.english || turn.text || turn.en || turn.hi || turn.textHi))
      .map((turn: any, tIdx: number) => {
        const rawSpk = (turn.speaker || turn.name || (tIdx % 2 === 0 ? 'Speaker A' : 'Speaker B')).trim();
        const isContinuation = prevSpeaker !== '' && prevSpeaker.toLowerCase() === rawSpk.toLowerCase();
        prevSpeaker = rawSpk;

        const rawEn = turn.textEn || turn.english || turn.text || turn.en || '';
        const rawHi = turn.textHi || turn.hindi || turn.hi || '';

        const cleanEn = cleanDialogueNaturalText(rawEn);
        const cleanHi = cleanDialogueNaturalHindiText(rawHi);

        return {
          id: turn.id || `turn_${dayNumber}_${scIdx + 1}_${tIdx + 1}`,
          speaker: rawSpk,
          avatar: turn.avatar || (tIdx % 2 === 0 ? '👤' : '👥'),
          textEn: cleanEn,
          textHi: cleanHi,
          audioCue: turn.audioCue,
          focus: turn.focus || turn.phoneticNote,
          isContinuation
        };
      });

    // Fallback ONLY if genuine dialogue data is completely empty and no turns exist anywhere in this scenario
    if (normalizedTurns.length === 0 && rawTurns.length === 0 && rawScenarioList.length === 1 && examples.length >= 2) {
      normalizedTurns = [
        {
          id: `turn_${dayNumber}_${scIdx + 1}_1`,
          speaker: 'Speaker A',
          avatar: '👤',
          textEn: cleanDialogueNaturalText(examples[0].en),
          textHi: cleanDialogueNaturalHindiText(examples[0].hi),
          audioCue: undefined,
          isContinuation: false
        },
        {
          id: `turn_${dayNumber}_${scIdx + 1}_2`,
          speaker: 'Speaker B',
          avatar: '👥',
          textEn: cleanDialogueNaturalText(examples[1].en),
          textHi: cleanDialogueNaturalHindiText(examples[1].hi),
          audioCue: undefined,
          isContinuation: false
        }
      ];
    }

    const titleEn = sc.title || sc.scenarioTitleEn || (rawScenarioList.length > 1 ? `Scenario ${scIdx + 1}` : `Day ${dayNumber} Conversation`);
    const titleHi = sc.scenarioTitleHi || sc.titleHi;
    const contextStr = sc.context || sc.contextDescription || sc.situation || globalSituation;

    return {
      id: sc.id || `scenario_${dayNumber}_${scIdx + 1}`,
      title: titleEn,
      titleHi,
      context: contextStr,
      situation: contextStr,
      characters: sc.characters || sc.speakers || [],
      turns: normalizedTurns
    };
  });

  const primaryDialogue = normalizedScenarios[0];

  // Speaking Task
  let speakingTask: HindiSpeakingTask = {
    promptEn: 'Practice speaking the key model sentences aloud with natural pacing.',
    promptHi: 'मुख्य वाक्यों को स्वाभाविक गति और आत्मविश्वास के साथ ज़ोर से बोलकर अभ्यास करें।',
    sampleResponseEn: cleanDialogueNaturalText(examples[0]?.en || phrases[0]?.phrase || 'I am learning English step by step.'),
    sampleResponseHi: cleanDialogueNaturalHindiText(examples[0]?.hi || phrases[0]?.meaningHi || 'मैं कदम दर कदम अंग्रेज़ी सीख रहा हूँ।')
  };

  if (rawUse.speakingTask) {
    speakingTask = {
      promptEn: cleanDialogueNaturalText(rawUse.speakingTask.promptEn || speakingTask.promptEn),
      promptHi: cleanDialogueNaturalHindiText(rawUse.speakingTask.promptHi || speakingTask.promptHi),
      sampleResponseEn: cleanDialogueNaturalText(rawUse.speakingTask.sampleResponseEn || speakingTask.sampleResponseEn),
      sampleResponseHi: cleanDialogueNaturalHindiText(rawUse.speakingTask.sampleResponseHi || speakingTask.sampleResponseHi),
      targetExpressions: rawUse.speakingTask.targetExpressions
    };
  } else if (rawUse.speakingPrompt) {
    const pEn =
      (typeof rawUse.speakingPrompt.situation === 'string' ? rawUse.speakingPrompt.situation : '') ||
      rawUse.speakingPrompt.taskEn ||
      rawUse.speakingPrompt.promptEn ||
      (Array.isArray(rawUse.speakingPrompt.prompts) ? rawUse.speakingPrompt.prompts.join(' ') : '') ||
      speakingTask.promptEn;

    const pHi =
      rawUse.speakingPrompt.situationHi ||
      rawUse.speakingPrompt.taskHi ||
      rawUse.speakingPrompt.promptHi ||
      speakingTask.promptHi;

    const sEn =
      rawUse.speakingPrompt.sampleResponseEn ||
      rawUse.speakingPrompt.modelAnswerEn ||
      (Array.isArray(rawUse.speakingPrompt.targetExpressions) ? rawUse.speakingPrompt.targetExpressions.join(' ') : '') ||
      speakingTask.sampleResponseEn;

    const sHi =
      rawUse.speakingPrompt.sampleResponseHi ||
      rawUse.speakingPrompt.modelAnswerHi ||
      speakingTask.sampleResponseHi;

    speakingTask = {
      promptEn: cleanDialogueNaturalText(pEn),
      promptHi: cleanDialogueNaturalHindiText(pHi),
      sampleResponseEn: cleanDialogueNaturalText(sEn),
      sampleResponseHi: cleanDialogueNaturalHindiText(sHi),
      targetExpressions: rawUse.speakingPrompt.targetExpressions,
      roleplay: rawUse.roleplay
    };
  } else if (rawUse.roleplay) {
    speakingTask = {
      promptEn: cleanDialogueNaturalText(rawUse.roleplay.scenario || rawUse.roleplay.task || speakingTask.promptEn),
      promptHi: cleanDialogueNaturalHindiText(rawUse.roleplay.taskHi || rawUse.roleplay.promptHi || speakingTask.promptHi),
      sampleResponseEn: cleanDialogueNaturalText(rawUse.roleplay.sampleResponseEn || rawUse.roleplay.sampleDialogue || rawUse.roleplay.suggestedSpeech || speakingTask.sampleResponseEn),
      sampleResponseHi: cleanDialogueNaturalHindiText(rawUse.roleplay.sampleResponseHi || speakingTask.sampleResponseHi),
      roleplay: rawUse.roleplay
    };
  }

  // Assessment Tasks / Exit Exit Standards
  let rawAssessList: any[] = [];
  const rawAssess = rawDay.assess || rawDay.assessment || rawDay.eval || {};

  if (Array.isArray(rawAssess)) {
    rawAssessList = rawAssess;
  } else if (rawAssess && typeof rawAssess === 'object') {
    // 1. Written / Structural Checklists & Questions (Primary Assessment Questions)
    if (Array.isArray(rawAssess.writtenChecklist)) {
      rawAssess.writtenChecklist.forEach((chk: any) => {
        if (typeof chk === 'string' && chk.trim()) {
          let cleanQ = chk.replace(/^Mastered all 60\+ domain-specific vocabulary terms for\s*/i, 'Demonstrate mastery of vocabulary for ');
          rawAssessList.push({
            type: 'written_checklist',
            question: cleanQ,
            answer: 'Complete written self-evaluation checklist.',
            skill: 'Written / Structural Competency'
          });
        } else if (chk && typeof chk === 'object') {
          let qStr = (chk.question || chk.prompt || chk.text || chk.title || chk.task || '').trim();
          let aStr = (chk.correctAnswer || chk.answer || chk.modelAnswer || 'Complete written self-evaluation checklist.').trim();
          if (qStr) {
            if (aStr.toLowerCase() === qStr.toLowerCase()) {
              aStr = 'Demonstrate written structural accuracy in practical usage.';
            }
            rawAssessList.push({
              ...chk,
              type: chk.type || (chk.options ? 'multiple_choice' : 'written_checklist'),
              question: qStr,
              answer: aStr,
              correctAnswer: chk.correctAnswer || aStr
            });
          }
        }
      });
    }

    // 2. Oral Production Tasks (Speaking Tasks)
    if (typeof rawAssess.oralProductionTask === 'string' && rawAssess.oralProductionTask.trim()) {
      rawAssessList.push({
        type: 'oral_production',
        question: rawAssess.oralProductionTask,
        answer: 'Demonstrate fluent verbal articulation aligned with CEFR criteria.',
        criteria: 'Scored on fluency, phonetic accuracy, lexical variety, and grammatical precision.',
        skill: 'Spoken Production Task'
      });
    } else if (rawAssess.oralProductionTask && typeof rawAssess.oralProductionTask === 'object') {
      const opt = rawAssess.oralProductionTask;
      let promptStr = (opt.prompt || opt.task || opt.instructions || opt.question || opt.text || '').trim();
      let rubricStr = (opt.evaluationRubric || opt.evaluationCriteria || opt.criteria || 'Scored on fluency, phonetic accuracy, and grammar.').trim();

      if (promptStr) {
        rawAssessList.push({
          ...opt,
          type: 'oral_production',
          question: promptStr,
          answer: 'Demonstrate fluent verbal articulation aligned with CEFR criteria.',
          criteria: rubricStr,
          targetStructures: opt.targetStructures || [],
          targetPhonemes: opt.targetPhonemes || [],
          skill: 'Spoken Production Task'
        });
      }
    }

    // 3. Standards & Knowledge Items (Filter out non-item threshold metadata)
    if (Array.isArray(rawAssess.benchmarks)) {
      rawAssess.benchmarks.forEach((bm: any) => {
        let qStr = (bm.question || bm.prompt || bm.text || bm.title || bm.task || '').trim();
        qStr = qStr.replace(/^CEFR [A-Z0-9.]+ Mastery Standard:\s*/i, '').replace(/^Mastery Standard:\s*/i, '');
        let criteriaStr = (bm.benchmark || bm.criteria || bm.descriptor || '').trim();

        if (qStr) {
          rawAssessList.push({
            ...bm,
            type: bm.type || (bm.options ? 'multiple_choice' : 'benchmark'),
            question: qStr,
            correctAnswer: bm.correctAnswer || bm.answer || bm.expectedAnswer,
            answer: bm.correctAnswer || bm.answer || bm.expectedAnswer || 'Demonstrate mastery of targeted CEFR skills.',
            criteria: criteriaStr || undefined
          });
        } else if (criteriaStr && !bm.accuracyThreshold) {
          // If only benchmark descriptor exists without a question, generate clean learner question
          rawAssessList.push({
            ...bm,
            type: bm.type || 'benchmark',
            question: `Demonstrate core communicative competency for Day ${dayNumber}.`,
            correctAnswer: bm.correctAnswer || bm.answer || 'Demonstrate mastery of targeted CEFR skills.',
            answer: bm.correctAnswer || bm.answer || 'Demonstrate mastery of targeted CEFR skills.',
            criteria: criteriaStr
          });
        }
      });
    } else if (rawAssess.benchmarks && typeof rawAssess.benchmarks === 'object' && !rawAssess.benchmarks.accuracyThreshold) {
      Object.entries(rawAssess.benchmarks).forEach(([lvl, desc]) => {
        if (typeof desc === 'string') {
          rawAssessList.push({
            level: lvl,
            type: 'benchmark',
            question: `Demonstrate CEFR ${lvl} communicative mastery for Day ${dayNumber}.`,
            answer: `Demonstrate spontaneous CEFR ${lvl} oral and written mastery.`,
            criteria: String(desc),
            skill: `CEFR ${lvl} Standard`
          });
        }
      });
    }
  }

  // If assess list is empty, generate structured exit assessment from objectives
  if (rawAssessList.length === 0 && Array.isArray(rawDay.objectivesEn) && rawDay.objectivesEn.length > 0) {
    rawDay.objectivesEn.slice(0, 3).forEach((obj: string, oIdx: number) => {
      rawAssessList.push({
        type: 'written_checklist',
        question: `Exit Competency #${oIdx + 1}: ${obj}`,
        answer: 'Demonstrate practical application of this competency.',
        skill: 'Objective Mastery'
      });
    });
  }

  const assess: HindiAssessItem[] = rawAssessList.map((item: any, idx: number) => {
    let questionStr = '';
    let answerStr = '';
    let skillStr = 'Exit Standard';

    if (typeof item === 'string') {
      questionStr = item;
      answerStr = 'Demonstrate accurate practical usage in communicative context.';
    } else if (item && typeof item === 'object') {
      // Priority: item.question ?? item.prompt ?? item.task ?? item.text
      questionStr = String(item.question || item.prompt || item.task || item.text || item.title || `Day ${dayNumber} Core Competency #${idx + 1}`).trim();
      questionStr = questionStr.replace(/^CEFR [A-Z0-9.]+ Mastery Standard:\s*/i, '').replace(/^Mastery Standard:\s*/i, '').replace(/^Communicative Competency:\s*/i, '');

      answerStr = String(item.correctAnswer || item.answer || item.expectedAnswer || 'Demonstrate mastery.').trim();
      answerStr = answerStr.replace(/^CEFR [A-Z0-9.]+ Mastery Standard:\s*/i, '').replace(/^Mastery Standard:\s*/i, '');

      // Ensure answer is NEVER identical to question
      if (answerStr.toLowerCase() === questionStr.toLowerCase()) {
        if (item.type === 'oral_production') {
          answerStr = 'Demonstrate fluent verbal articulation according to CEFR criteria.';
        } else if (item.type === 'written_checklist') {
          answerStr = 'Demonstrate written structural accuracy in practical usage.';
        } else {
          answerStr = 'Demonstrate accurate practical usage in communicative context.';
        }
      }

      skillStr = String(item.skill || item.title || item.level || item.cefrDescriptor || 'Communicative Competency');
    }

    return {
      id: (item && item.id) ? String(item.id) : `assess_${dayNumber}_${idx + 1}`,
      type: item?.type || (item?.options ? 'multiple_choice' : 'written_checklist'),
      question: questionStr.trim(),
      answer: answerStr.trim(),
      correctAnswer: item?.correctAnswer || answerStr.trim(),
      options: item?.options || undefined,
      explanationEn: item?.explanationEn || undefined,
      explanationHi: item?.explanationHi || undefined,
      skill: skillStr.trim(),
      criteria: item?.criteria || item?.evaluationRubric,
      targetStructures: item?.targetStructures,
      targetPhonemes: item?.targetPhonemes
    };
  });
  // Spaced Review & Quick Recall
  const rawReview = rawDay.review || {};
  const quickRecall = rawReview.quickRecall || rawReview.retrievalDrill || [];
  const spacedTips = rawReview.spacedTips || [
    `Review this lesson again in ${rawReview.recommendedIntervalDays?.[0] || 1} day to solidify retention.`,
    'Practice vocalizing the key phrases in everyday real-world interactions.'
  ];

  const review = {
    spacedRepetitionTag: rawReview.spacedRepetitionTag || `Stage ${Math.ceil(dayNumber / 10)} - Day ${dayNumber}`,
    recommendedIntervalDays: rawReview.recommendedIntervalDays || [1, 3, 7, 14, 30],
    quickRecall: Array.isArray(quickRecall) ? quickRecall : [quickRecall],
    spacedTips: Array.isArray(spacedTips) ? spacedTips : [spacedTips]
  };

  return {
    dayNumber,
    id,
    titleEn: rawDay.titleEn || `Day ${dayNumber} Curriculum Lesson`,
    titleHi: rawDay.titleHi || `डे ${dayNumber} मुख्य पाठ`,
    cefr: rawDay.cefr || (dayNumber <= 10 ? 'A1.1' : dayNumber <= 20 ? 'A1.2' : dayNumber <= 40 ? 'A2.1' : 'A2.2'),
    estMinutes: rawDay.estMinutes || 60,
    prerequisites: rawDay.prerequisites || (dayNumber === 1 ? 'None (Start here)' : `Day ${dayNumber - 1} Foundation`),
    objectivesEn: Array.isArray(rawDay.objectivesEn) ? rawDay.objectivesEn : ['Master the core communicative and grammatical concepts for today.'],
    objectivesHi: Array.isArray(rawDay.objectivesHi) ? rawDay.objectivesHi : ['आज के मुख्य भाषाई नियमों और व्यावहारिक बातचीत में दक्षता प्राप्त करें।'],
    teach: {
      hindiExplanation: rawDay.teach?.hindiExplanation || 'सिद्धांत का विस्तार से अध्ययन करें।',
      englishExplanation: rawDay.teach?.englishExplanation || 'Detailed conceptual explanation.',
      grammarRules: rawDay.teach?.grammarRules || [],
      formulaTable: rawDay.teach?.formulaTable || [],
      hindiSpeakerTrap: rawDay.teach?.hindiSpeakerTrap || {
        trapTitle: 'Hindi Interference Prevention',
        hindiPattern: 'Literal word-by-word translation',
        potentialInterference: 'Direct translation error',
        explanation: 'Avoid word-by-word structural transfer from Hindi to English.',
        naturalSolution: 'Use idiomatic and natural English collocations.'
      }
    },
    learn: {
      vocabulary,
      phrases,
      spokenPhrases: phrases
    },
    examples,
    pronunciation: {
      targetSounds,
      traps,
      drills,
      focusSound: rawPron.focusSound,
      phoneticNotes: rawPron.phoneticNotes,
      minimalPairs,
      sentenceStress: rawPron.sentenceStress,
      connectedSpeech: rawPron.connectedSpeech
    },
    practice,
    use: {
      situation: globalSituation,
      dialogue: primaryDialogue,
      dialogues: normalizedScenarios,
      speakingTask,
      speakingPrompt: rawUse.speakingPrompt,
      roleplay: rawUse.roleplay
    },
    assess,
    review
  };
}

/**
 * In-memory index cache for instant synchronous retrieval
 */
const allDaysCache: Map<number, HindiDayLesson> = new Map();
let isInitialized = false;

export function initializeCurriculumRegistry(): void {
  if (isInitialized) return;

  const rawPacks = [
    stage1Pack,
    stage2Pack,
    stage3Pack,
    stage4Pack,
    stage5Pack,
    stage6Pack
  ];

  rawPacks.forEach((pack: any) => {
    if (pack) {
      const daysList = Array.isArray(pack) ? pack : (pack.days || []);
      daysList.forEach((rawDay: any) => {
        try {
          const normalized = normalizeDayLesson(rawDay);
          allDaysCache.set(normalized.dayNumber, normalized);
        } catch (err) {
          console.error(`[CurriculumRegistry] Failed to normalize day:`, err);
        }
      });
    }
  });

  isInitialized = true;
}

/**
 * Get all 60 production days in strict sequential order
 */
export function getAllRegistryDays(): HindiDayLesson[] {
  if (!isInitialized) {
    initializeCurriculumRegistry();
  }
  return Array.from(allDaysCache.values()).sort((a, b) => a.dayNumber - b.dayNumber);
}

/**
 * Get a specific lesson by day number (1 to 60)
 */
export function getRegistryDayByNumber(dayNum: number): HindiDayLesson | null {
  if (!isInitialized) {
    initializeCurriculumRegistry();
  }
  return allDaysCache.get(dayNum) || null;
}

/**
 * Get total production days count (60)
 */
export function getRegistryDaysCount(): number {
  if (!isInitialized) {
    initializeCurriculumRegistry();
  }
  return allDaysCache.size;
}
