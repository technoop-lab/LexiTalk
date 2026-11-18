import * as fs from 'fs';
import * as path from 'path';
import { DetailedLessonData, Exercise } from '../src/types';

export interface Unit4LessonRaw {
  num: number;
  id: string;
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

export function compileUnit4Lesson(raw: Unit4LessonRaw): DetailedLessonData {
  const lessonId = raw.id;
  const unitId = 'unit_a1_4';

  return {
    id: lessonId,
    unitId: unitId,
    title: raw.title,
    cefr: 'A1',
    icon: raw.icon,
    estimatedMinutes: raw.estMin,
    learningObjective: {
      title: raw.objTitle,
      description: raw.objDesc,
      descriptionsByLang: {
        hi: raw.objHi,
        es: raw.objEs,
        fr: raw.objDesc,
        de: raw.objDesc,
        pt: raw.objDesc,
        zh: raw.objDesc,
        ar: raw.objDesc,
        ja: raw.objDesc,
        ru: raw.objDesc,
      },
      canDoStatements: raw.canDo,
      canDoByLang: {
        hi: raw.canDoHi,
        es: raw.canDoEs,
      },
    },
    vocabulary: raw.vocab.map((v, idx) => ({
      id: `v_u04_l${raw.num}_${idx + 1}`,
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
      audioId: `en_a1_u04_l${raw.num}_v_${idx + 1}`,
      slowAudioId: `en_a1_u04_l${raw.num}_v_${idx + 1}_slow`,
      voiceId: 'EN_TEACHER_01',
      icon: v.ic,
      difficulty: 'A1 Beginner',
    })),
    expressions: raw.chunks.map((c, idx) => ({
      id: `c_u04_l${raw.num}_${idx + 1}`,
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
      audioId: `en_a1_u04_l${raw.num}_c_${idx + 1}`,
      slowAudioId: `en_a1_u04_l${raw.num}_c_${idx + 1}_slow`,
      voiceId: 'EN_TEACHER_01',
      icon: c.ic,
    })),
    grammar: {
      title: raw.grammar.title,
      concept: raw.grammar.concept,
      patterns: raw.grammar.patterns.map((gp, idx) => ({
        id: `gp_u04_l${raw.num}_${idx + 1}`,
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
          audioId: `en_a1_u04_l${raw.num}_g_ex_${idx + 1}_${eIdx + 1}`,
        })),
      })),
    },
    commonMistakes: raw.mistakes.map((m, idx) => ({
      id: `cm_u04_l${raw.num}_${idx + 1}`,
      incorrect: m.inc,
      correct: m.cor,
      explanation: m.exp,
      explanationsByLang: {
        hi: m.hi,
        es: m.es,
      },
    })),
    dialogues: raw.dialogues.map((d, dIdx) => ({
      id: `d_u04_l${raw.num}_${dIdx + 1}`,
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
        audioId: `en_a1_u04_l${raw.num}_d${dIdx + 1}_l${tIdx + 1}`,
      })),
    })),
    practiceExercises: raw.practice,
    reviewExercises: raw.review,
    assessmentExercises: raw.assessment,
  };
}

export function saveUnit4LessonFile(data: DetailedLessonData) {
  const filePath = path.join(process.cwd(), `src/data/lessons/${data.id}.ts`);
  const varName = `${data.id.toUpperCase()}_DATA`;
  const code = `import { DetailedLessonData } from '../../types';\n\nexport const ${varName}: DetailedLessonData = ${JSON.stringify(data, null, 2)};\n`;
  fs.writeFileSync(filePath, code, 'utf-8');
  console.log(`[SAVED] ${filePath}`);
}
