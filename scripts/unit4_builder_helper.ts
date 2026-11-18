import * as fs from 'fs';
import * as path from 'path';
import { DetailedLessonData, Exercise } from '../src/types';

export interface LessonConfig {
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
    ex: string;
    exHi: string;
    exEs: string;
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

export function buildDetailedLesson(cfg: LessonConfig): DetailedLessonData {
  const lessonId = `lesson_a1_4_${cfg.num}`;
  const unitId = 'unit_a1_4';

  return {
    id: lessonId,
    unitId: unitId,
    title: cfg.title,
    cefr: 'A1',
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
      id: `v_u04_l${cfg.num}_${idx + 1}`,
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
      exampleSentence: v.ex,
      exampleTranslationByLang: {
        hi: v.exHi,
        es: v.exEs,
      },
      audioText: v.w,
      audioId: `en_a1_u04_l${cfg.num}_v_${idx + 1}`,
      slowAudioId: `en_a1_u04_l${cfg.num}_v_${idx + 1}_slow`,
      voiceId: 'EN_TEACHER_01',
      icon: v.ic,
      difficulty: 'A1 Beginner',
    })),
    expressions: cfg.chunks.map((c, idx) => ({
      id: `c_u04_l${cfg.num}_${idx + 1}`,
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
      audioId: `en_a1_u04_l${cfg.num}_c_${idx + 1}`,
      slowAudioId: `en_a1_u04_l${cfg.num}_c_${idx + 1}_slow`,
      voiceId: 'EN_TEACHER_01',
      icon: c.ic,
    })),
    grammar: {
      title: cfg.grammar.title,
      concept: cfg.grammar.concept,
      patterns: cfg.grammar.patterns.map((gp, idx) => ({
        id: `gp_u04_l${cfg.num}_${idx + 1}`,
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
          audioId: `en_a1_u04_l${cfg.num}_g_ex_${idx + 1}_${eIdx + 1}`,
        })),
      })),
    },
    commonMistakes: cfg.mistakes.map((m, idx) => ({
      id: `cm_u04_l${cfg.num}_${idx + 1}`,
      incorrect: m.inc,
      correct: m.cor,
      explanation: m.exp,
      explanationsByLang: {
        hi: m.hi,
        es: m.es,
      },
    })),
    dialogues: cfg.dialogues.map((d, dIdx) => ({
      id: `d_u04_l${cfg.num}_${dIdx + 1}`,
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
        audioId: `en_a1_u04_l${cfg.num}_d${dIdx + 1}_l${tIdx + 1}`,
      })),
    })),
    practiceExercises: cfg.practice,
    reviewExercises: cfg.review,
    assessmentExercises: cfg.assessment,
  };
}

export function writeLessonToDisk(data: DetailedLessonData) {
  const filePath = path.join(process.cwd(), `src/data/lessons/${data.id}.ts`);
  const varName = `${data.id.toUpperCase()}_DATA`;
  const code = `import { DetailedLessonData } from '../../types';\n\nexport const ${varName}: DetailedLessonData = ${JSON.stringify(data, null, 2)};\n`;
  fs.writeFileSync(filePath, code, 'utf-8');
  console.log(`[GENERATED] ${data.id} -> ${filePath}`);
}
