// GrammarLibraryService — aggregates every grammar corpus already in the app
// into one searchable topic list for the Grammar Studio "Library" tab and the
// in-depth unit Grammar Handbook.
//
// Sources:
//   1. lesson    — the structured `grammar` block of all 270 detailed lessons
//                  (title, concept EN/HI, patterns, contraction tables)
//   2. hindi_day — the 194 bilingual grammar rules of the Hindi course days
//   3. guidebook — the per-unit guidebook key rule (18 units)
//   4. blueprint — the CEFR grammar progression of the master curriculum

import { CURIOSITY_UNITS } from '../data/curiosityCurriculum';
import { MASTER_CURRICULUM_BLUEPRINT } from '../data/masterCurriculumBlueprint';
import { CurriculumService } from './CurriculumService';
import { HindiCourseService } from './HindiCourseService';

export type GrammarTopicSource = 'lesson' | 'hindi_day' | 'guidebook' | 'blueprint';

export interface GrammarTopicContractions {
  full: string;
  contracted: string;
  meaningHi?: string;
}

export interface GrammarTopic {
  id: string;
  source: GrammarTopicSource;
  cefr: string;
  title: string;
  concept?: string;
  conceptHi?: string;
  /** Short display strings extracted from lesson grammar patterns */
  patterns?: string[];
  contractions?: GrammarTopicContractions[];
  commonErrors?: string[];
  structure?: string;
  register?: string;
  unitId?: string;
  unitNumber?: number;
  lessonId?: string;
  lessonTitle?: string;
  dayNumber?: number;
}

export interface GrammarTopicCounts {
  total: number;
  bySource: Record<GrammarTopicSource, number>;
  byLevel: Record<string, number>;
}

const SOURCE_LABELS: Record<GrammarTopicSource, string> = {
  lesson: 'Lesson',
  hindi_day: 'Hindi Course',
  guidebook: 'Unit Guidebook',
  blueprint: 'Curriculum Blueprint',
};

export const getGrammarSourceLabel = (source: GrammarTopicSource): string =>
  SOURCE_LABELS[source];

const patternToString = (p: unknown): string => {
  const anyP = p as { title?: string; rule?: string; formula?: string; structure?: string };
  return (anyP?.title || anyP?.rule || anyP?.formula || anyP?.structure || '').trim();
};

let cachedTopics: GrammarTopic[] | null = null;

const buildTopics = (): GrammarTopic[] => {
  const topics: GrammarTopic[] = [];

  // 1 + 3 — per-unit guidebook rules + every lesson's grammar block
  for (const unit of CURIOSITY_UNITS) {
    topics.push({
      id: `gb_${unit.id}`,
      source: 'guidebook',
      cefr: unit.cefr,
      title: unit.guidebook.title,
      concept: unit.guidebook.keyGrammarRule,
      conceptHi: unit.guidebook.rulesByLang?.hi,
      patterns: unit.guidebook.examples.map((ex) => ex.english),
      unitId: unit.id,
      unitNumber: unit.unitNumber,
    });

    for (const lesson of unit.lessons) {
      const data = CurriculumService.getDetailedLesson(lesson.id, 'en');
      const grammar = data?.grammar;
      if (!grammar?.title) continue;

      const patterns = (grammar.patterns || [])
        .map(patternToString)
        .filter(Boolean)
        .slice(0, 8);

      const contractions = (grammar.verbBeExplanation?.contractionsTable || []).map((row) => ({
        full: row.full,
        contracted: row.contracted,
        meaningHi: row.meaningByLang?.hi,
      }));

      topics.push({
        id: `ls_${lesson.id}`,
        source: 'lesson',
        cefr: unit.cefr,
        title: grammar.title,
        concept: grammar.concept,
        conceptHi: grammar.conceptsByLang?.hi,
        patterns: patterns.length ? patterns : undefined,
        contractions: contractions.length ? contractions : undefined,
        unitId: unit.id,
        unitNumber: unit.unitNumber,
        lessonId: lesson.id,
        lessonTitle: lesson.title,
      });
    }
  }

  // 2 — Hindi course bilingual grammar rules
  for (const day of HindiCourseService.getAllAvailableDays()) {
    const rules = day.teach?.grammarRules || [];
    for (const rule of rules) {
      topics.push({
        id: `hi_d${day.dayNumber}_r${rule.ruleNumber}`,
        source: 'hindi_day',
        cefr: day.cefr || 'A1',
        title: rule.title,
        concept: rule.description,
        register: rule.register,
        dayNumber: day.dayNumber,
      });
    }
  }

  // 4 — master blueprint grammar progression
  for (const item of MASTER_CURRICULUM_BLUEPRINT.grammarProgression) {
    topics.push({
      id: `bp_${item.id}`,
      source: 'blueprint',
      cefr: String(item.cefr || 'A1'),
      title: item.topic,
      concept: item.explanation,
      structure: item.structure,
      patterns: item.sentencePatterns,
      commonErrors: item.commonErrors?.length ? item.commonErrors : undefined,
      unitId: item.unitId,
      lessonId: item.introductionLessonId,
    });
  }

  return topics;
};

/** All grammar topics in the app (built once, then cached). */
export const getAllGrammarTopics = (): GrammarTopic[] => {
  if (!cachedTopics) cachedTopics = buildTopics();
  return cachedTopics;
};

/** Topics that belong to a specific unit (lessons + guidebook + blueprint). */
export const getGrammarTopicsForUnit = (unitId: string): GrammarTopic[] =>
  getAllGrammarTopics().filter((t) => t.unitId === unitId);

/** Case-insensitive multi-word search across title/concept/patterns/errors. */
export const searchGrammarTopics = (
  query: string,
  base: GrammarTopic[] = getAllGrammarTopics(),
): GrammarTopic[] => {
  const q = query.trim().toLowerCase();
  if (!q) return base;
  const tokens = q.split(/\s+/);
  return base.filter((t) => {
    const haystack = [
      t.title,
      t.concept || '',
      t.conceptHi || '',
      t.structure || '',
      t.register || '',
      (t.patterns || []).join(' '),
      (t.commonErrors || []).join(' '),
    ]
      .join(' ')
      .toLowerCase();
    return tokens.every((tok) => haystack.includes(tok));
  });
};

/** Counts for the Studio hero / Library stat cards. */
export const getGrammarTopicCounts = (): GrammarTopicCounts => {
  const topics = getAllGrammarTopics();
  const bySource: Record<GrammarTopicSource, number> = {
    lesson: 0,
    hindi_day: 0,
    guidebook: 0,
    blueprint: 0,
  };
  const byLevel: Record<string, number> = {};
  for (const t of topics) {
    bySource[t.source] += 1;
    const level = (t.cefr || '?').toUpperCase();
    byLevel[level] = (byLevel[level] || 0) + 1;
  }
  return { total: topics.length, bySource, byLevel };
};
