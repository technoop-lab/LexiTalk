/**
 * Adapter: builds Skill module practice from the content the app already has.
 *  - Listening and Reading: the scripted dialogues (teach.dialogueExamples) and the
 *    multiple-choice questions attached to them (controlledPractice).
 *  - Speaking: vocabulary example sentences (read aloud), partner lines from the
 *    conversation turns (answer), and conversation scenarios (describe).
 * Reuse: any screen can import these getters. Nothing here is a new copy of content.
 * Level gate: A2 is included only when SHOW_A2_LEVEL is on (config/freeAccess).
 */
import { ALL_CONVERSATIONS } from '../conversations';
import { VOCAB_BANK_A1 } from '../vocabBank';
import { SHOW_A2_LEVEL } from '../../config/freeAccess';
import {
  SPEAKING_PROMPTS,
  LISTENING_SETS,
  READING_PASSAGES,
  SpeakingPrompt,
  ListeningSet,
  ReadingPassage,
  ReadingQuestion,
} from './skillContent';

const SOURCED_LISTENING = 15;
const SOURCED_READING = 15;
const SOURCED_READ_ALOUD = 20;
const SOURCED_ANSWER = 15;
const SOURCED_DESCRIBE = 10;

/** Take up to `n` items spread evenly across the list, so every unit is represented. */
const spread = <T,>(items: T[], n: number): T[] => {
  if (items.length <= n) return items;
  const step = items.length / n;
  const out: T[] = [];
  for (let i = 0; i < n; i++) out.push(items[Math.floor(i * step)]);
  return out;
};

const allowedLevel = (cefr: string): boolean => cefr === 'A1' || (SHOW_A2_LEVEL && cefr === 'A2');

const conversations = ALL_CONVERSATIONS.filter((c) => allowedLevel(c.cefr));

/** Remove stage directions like "(Ring ring...)" and quote marks, keep the spoken words. */
const spokenOnly = (text: string): string =>
  text
    .replace(/\([^)]*\)/g, ' ')
    .replace(/[“”"]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const firstSentence = (text: string): string => {
  const cleaned = text.replace(/\s+/g, ' ').trim();
  const idx = cleaned.indexOf('. ');
  return idx > 0 ? cleaned.slice(0, idx + 1) : cleaned;
};

/** Controlled-practice questions that have a clear correct option. */
const usableQuestions = (c: (typeof ALL_CONVERSATIONS)[number]) =>
  (c.controlledPractice ?? [])
    .filter((p) => p.options && p.options.length >= 2 && p.correctAnswer)
    .map((p) => {
      const options = p.options.map((o) => o.text);
      return {
        prompt: p.prompt.replace(/\s+/g, ' ').trim(),
        options,
        answer: options.indexOf(p.correctAnswer),
      };
    })
    .filter((q) => q.answer >= 0);

// ---------- Listening: dialogue + its questions ----------

const sourcedListening = (): ListeningSet[] => {
  const usable = conversations.filter(
    (c) => (c.teach?.dialogueExamples?.length ?? 0) >= 3 && usableQuestions(c).length >= 2
  );
  return spread(usable, SOURCED_LISTENING).map((c) => ({
    id: `li_src_${c.id}`,
    title: c.title,
    setting: firstSentence(c.scenario),
    lines: (c.teach?.dialogueExamples ?? []).map((d) => ({ speaker: d.speaker, text: d.text })),
    questions: usableQuestions(c)
      .slice(0, 4)
      .map((q) => ({ question: q.prompt, options: q.options, answer: q.answer })),
  }));
};

// ---------- Reading: scenario + written dialogue, questions from the same conversation ----------

const sourcedReading = (): ReadingPassage[] => {
  const usable = conversations.filter(
    (c) => (c.teach?.dialogueExamples?.length ?? 0) >= 2 && usableQuestions(c).length >= 2
  );
  return spread(usable, SOURCED_READING).map((c) => {
    const qs = usableQuestions(c).slice(0, 4);
    const half = Math.ceil(qs.length / 2);
    const transcript = (c.teach?.dialogueExamples ?? [])
      .map((d) => `${d.speaker}: ${d.text}`)
      .join(' ');
    const toMcq = (q: (typeof qs)[number]): ReadingQuestion => ({
      kind: 'mcq',
      prompt: q.prompt,
      options: q.options,
      answer: q.answer,
    });
    return {
      id: `rd_src_${c.id}`,
      title: c.title,
      sections: [
        { label: 'Section A', text: c.scenario, questions: qs.slice(0, half).map(toMcq) },
        { label: 'Section B', text: transcript, questions: qs.slice(half).map(toMcq) },
      ],
    };
  });
};

// ---------- Speaking ----------

const sourcedSpeaking = (): SpeakingPrompt[] => {
  const readAloud: SpeakingPrompt[] = spread(
    VOCAB_BANK_A1.filter((v) => {
      const s = (v as { exampleSentence?: string }).exampleSentence ?? '';
      const words = s.trim().split(/\s+/).length;
      return words >= 6 && words <= 14 && /[.?!]$/.test(s.trim());
    }),
    SOURCED_READ_ALOUD
  ).map((v) => {
    const s = (v as { id: string; exampleSentence: string }).exampleSentence.trim();
    return {
      id: `sp_src_ra_${(v as { id: string }).id}`,
      kind: 'read_aloud' as const,
      prompt: s,
      minWords: 6,
    };
  });

  const turnPrompts: { id: string; text: string }[] = [];
  for (const c of conversations) {
    for (const t of c.turns ?? []) {
      const text = spokenOnly(t.partnerAudioText || t.partnerPrompt || '');
      if (text.length >= 30 && text.split(' ').length >= 6) {
        turnPrompts.push({ id: `${c.id}_${t.id}`, text });
      }
    }
  }
  const answer: SpeakingPrompt[] = spread(turnPrompts, SOURCED_ANSWER).map((p) => ({
    id: `sp_src_an_${p.id}`,
    kind: 'answer' as const,
    prompt: `Someone says: "${p.text}" Respond in your own words.`,
    minWords: 8,
  }));

  const describe: SpeakingPrompt[] = spread(
    conversations.filter((c) => c.scenario && c.scenario.length > 60),
    SOURCED_DESCRIBE
  ).map((c) => ({
    id: `sp_src_ds_${c.id}`,
    kind: 'describe' as const,
    prompt: `Describe this situation and what you would say: ${firstSentence(c.scenario)}`,
    minWords: 25,
  }));

  return [...readAloud, ...answer, ...describe];
};

// ---------- Public getters: hand-written sets first, then the app's own content ----------

let cache: {
  speaking: SpeakingPrompt[];
  listening: ListeningSet[];
  reading: ReadingPassage[];
} | null = null;

const load = () => {
  if (!cache) {
    cache = {
      speaking: [...SPEAKING_PROMPTS, ...sourcedSpeaking()],
      listening: [...LISTENING_SETS, ...sourcedListening()],
      reading: [...READING_PASSAGES, ...sourcedReading()],
    };
  }
  return cache;
};

export const getSpeakingPrompts = (): SpeakingPrompt[] => load().speaking;
export const getListeningSets = (): ListeningSet[] => load().listening;
export const getReadingPassages = (): ReadingPassage[] => load().reading;

// ---------- Dialogues tab (Review Center): the app's own scripted dialogues, shown as-is ----------

export interface DialogueScript {
  id: string;
  title: string;
  unitId: string;
  lines: { speaker: string; text: string }[];
}

export const getDialogueScripts = (): DialogueScript[] =>
  conversations
    .filter((c) => (c.teach?.dialogueExamples?.length ?? 0) >= 2)
    .map((c) => ({
      id: c.id,
      title: c.title,
      unitId: c.unitId,
      lines: (c.teach?.dialogueExamples ?? []).map((d) => ({ speaker: d.speaker, text: d.text })),
    }));
