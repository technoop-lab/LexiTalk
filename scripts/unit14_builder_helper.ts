import * as fs from 'fs';
import * as path from 'path';
import { DetailedLessonData, Exercise } from '../src/types';

export interface LessonConfigA2 {
  num: number;
  title: string;
  icon: string;
  estMin: number;
  objTitle: string;
  objDesc: string;
  objHi: string;
  objEs: string;
  canDo: string[];
  canDoHi: string[];
  canDoEs: string[];
  vocab: Array<{
    w: string;
    p: string;
    m: string;
    hi: string;
    es: string;
    fr: string;
    de: string;
    pt: string;
    zh: string;
    ar: string;
    ja: string;
    ru: string;
    ex?: string;
    exHi?: string;
    exEs?: string;
    ic: string;
  }>;
  chunks: Array<{
    phrase: string;
    meaning: string;
    hi: string;
    es: string;
    fr: string;
    de: string;
    pt: string;
    zh: string;
    ar: string;
    ja: string;
    ru: string;
    note: string;
    ic: string;
  }>;
  grammar: {
    title: string;
    concept: string;
    patterns: Array<{
      title: string;
      structure: string;
      rule: string;
      examples: Array<{ en: string; hi: string; es: string }>;
    }>;
  };
  mistakes: Array<{
    inc: string;
    cor: string;
    exp: string;
    hi: string;
    es: string;
    incExp?: string;
    corExp?: string;
  }>;
  dialogues: Array<{
    title: string;
    context: string;
    charA: { name: string; av: string; role: string };
    charB: { name: string; av: string; role: string };
    turns: Array<{ spk: string; text: string; hi: string; es: string }>;
  }>;
  practice: Exercise[];
  review: Exercise[];
  assessment: Exercise[];
}

function sanitizeExercise(ex: any): Exercise {
  const result: any = { ...ex };

  // Map non-standard exercise types to canonical ExerciseType / ExtendedExerciseType
  if (result.type === 'reading_comprehension') {
    result.type = 'reading';
  } else if (result.type === 'dictation') {
    result.type = 'listen_type';
  } else if (result.type === 'word_order' || result.type === 'sentence_order') {
    result.type = 'word_ordering';
  } else if (result.type === 'writing_prompt' || result.type === 'free_writing') {
    result.type = 'writing';
  } else if (result.type === 'gap_fill' || result.type === 'fill_in_the_blank') {
    result.type = 'fill_blank';
  }

  // Handle question -> prompt
  if (result.question && !result.prompt) {
    result.prompt = result.question;
  }
  delete result.question;

  // Handle context -> sourceSentence or prompt
  if (result.context) {
    if (!result.sourceSentence) {
      result.sourceSentence = result.context;
    }
    delete result.context;
  }

  // Handle sentence -> errorSentence or targetSentence
  if (result.sentence) {
    if (!result.errorSentence && result.type === 'error_correction') {
      result.errorSentence = result.sentence;
    } else if (!result.targetSentence) {
      result.targetSentence = result.sentence;
    }
    delete result.sentence;
  }

  // Handle correctSentence -> correctAnswer & targetSentence
  if (result.correctSentence) {
    if (!result.correctAnswer) {
      result.correctAnswer = result.correctSentence;
    }
    if (!result.targetSentence) {
      result.targetSentence = result.correctSentence;
    }
  }

  // Handle categorization -> match_pairs
  if (result.type === 'categorization' && result.categories) {
    result.type = 'match_pairs';
    result.options = result.categories.flatMap((cat: any) =>
      cat.items.map((item: string, idx: number) => ({
        id: `${cat.id}_${idx + 1}`,
        text: `${item} → [${cat.name}]`,
      }))
    );
  }
  delete result.categories;

  // Handle string array options -> ExerciseOption[]
  if (Array.isArray(result.options) && result.options.length > 0) {
    if (typeof result.options[0] === 'string') {
      result.options = result.options.map((opt: string, idx: number) => ({
        id: String(idx + 1),
        text: opt,
        isCorrect: result.correctAnswer ? opt === result.correctAnswer : idx === 0,
      }));
    }
  }

  return result as Exercise;
}

export function buildDetailedLessonA2_Unit14(cfg: LessonConfigA2): DetailedLessonData {
  const lessonId = `lesson_a2_14_${cfg.num}`;
  const unitId = 'unit_a2_14';

  return {
    id: lessonId,
    unitId: unitId,
    title: cfg.title,
    cefr: 'A2',
    icon: cfg.icon,
    estimatedMinutes: cfg.estMin,
    learningObjective: {
      title: cfg.objTitle,
      description: cfg.objDesc,
      descriptionsByLang: {
        hi: cfg.objHi,
        es: cfg.objEs,
        fr: cfg.objDesc,
        de: cfg.objDesc,
        pt: cfg.objDesc,
        zh: cfg.objDesc,
        ar: cfg.objDesc,
        ja: cfg.objDesc,
        ru: cfg.objDesc,
      },
      canDoStatements: cfg.canDo,
      canDoByLang: {
        hi: cfg.canDoHi,
        es: cfg.canDoEs,
      },
    },
    vocabulary: cfg.vocab.map((v, idx) => ({
      id: `v_u14_l${cfg.num}_${idx + 1}`,
      word: v.w,
      phonetic: v.p,
      meaning: v.m,
      translationsByLang: {
        hi: v.hi,
        es: v.es,
        fr: v.fr,
        de: v.de,
        pt: v.pt,
        zh: v.zh,
        ar: v.ar,
        ja: v.ja,
        ru: v.ru,
      },
      exampleSentence: v.ex || `We use "${v.w}" in administrative and daily communication.`,
      exampleTranslationByLang: {
        hi: v.exHi || `हम प्रशासनिक और दैनिक बातचीत में "${v.w}" का प्रयोग करते हैं।`,
        es: v.exEs || `Usamos "${v.w}" en la comunicación administrativa y diaria.`,
      },
      audioText: v.w,
      audioId: `en_a2_u14_l${cfg.num}_v_${idx + 1}`,
      slowAudioId: `en_a2_u14_l${cfg.num}_v_${idx + 1}_slow`,
      voiceId: 'EN_TEACHER_01',
      icon: v.ic,
      difficulty: 'A2 Elementary',
    })),
    expressions: cfg.chunks.map((c, idx) => ({
      id: `c_u14_l${cfg.num}_${idx + 1}`,
      expression: c.phrase,
      meaning: c.meaning,
      translationsByLang: {
        hi: c.hi,
        es: c.es,
        fr: c.fr,
        de: c.de,
        pt: c.pt,
        zh: c.zh,
        ar: c.ar,
        ja: c.ja,
        ru: c.ru,
      },
      usageNote: c.note,
      audioText: c.phrase,
      audioId: `en_a2_u14_l${cfg.num}_c_${idx + 1}`,
      slowAudioId: `en_a2_u14_l${cfg.num}_c_${idx + 1}_slow`,
      voiceId: 'EN_TEACHER_01',
      icon: c.ic,
    })),
    grammar: {
      title: cfg.grammar.title,
      concept: cfg.grammar.concept,
      patterns: cfg.grammar.patterns.map((gp, idx) => ({
        id: `gp_u14_l${cfg.num}_${idx + 1}`,
        title: gp.title,
        structure: gp.structure,
        rule: gp.rule,
        examples: gp.examples.map((exItem, eIdx) => ({
          english: exItem.en,
          translation: exItem.es,
          translationByLang: {
            hi: exItem.hi,
            es: exItem.es,
          },
          audioText: exItem.en,
          audioId: `en_a2_u14_l${cfg.num}_g_ex_${idx + 1}_${eIdx + 1}`,
        })),
      })),
    },
    commonMistakes: cfg.mistakes.map((m, idx) => ({
      id: `cm_u14_l${cfg.num}_${idx + 1}`,
      incorrect: m.inc,
      correct: m.cor,
      explanation: m.exp,
      explanationsByLang: {
        hi: m.hi,
        es: m.es,
      },
    })),
    dialogues: cfg.dialogues.map((d, dIdx) => ({
      id: `d_u14_l${cfg.num}_${dIdx + 1}`,
      title: d.title,
      context: d.context,
      characters: [
        { name: d.charA.name, avatar: d.charA.av, role: d.charA.role },
        { name: d.charB.name, avatar: d.charB.av, role: d.charB.role },
      ],
      lines: d.turns.map((t, tIdx) => ({
        speaker: t.spk,
        text: t.text,
        translationsByLang: {
          hi: t.hi,
          es: t.es,
        },
        audioText: t.text,
        audioId: `en_a2_u14_l${cfg.num}_d${dIdx + 1}_l${tIdx + 1}`,
      })),
    })),
    practiceExercises: cfg.practice.map(sanitizeExercise),
    reviewExercises: cfg.review.map(sanitizeExercise),
    assessmentExercises: cfg.assessment.map(sanitizeExercise),
  };
}

export function writeLessonToDiskA2_Unit14(data: DetailedLessonData) {
  const filePath = path.join(process.cwd(), `src/data/lessons/${data.id}.ts`);
  const varName = `${data.id.toUpperCase()}_DATA`;
  const code = `import { DetailedLessonData } from '../../types';\n\nexport const ${varName}: DetailedLessonData = ${JSON.stringify(data, null, 2)};\n`;
  fs.writeFileSync(filePath, code, 'utf-8');
  console.log(`[GENERATED A2 UNIT 14] ${data.id} -> ${filePath}`);
}
