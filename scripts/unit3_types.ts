import * as fs from 'fs';
import * as path from 'path';

export interface LessonSpec {
  id: string;
  unitId: string;
  title: string;
  cefr: 'A1';
  icon: string;
  estimatedMinutes: number;
  learningObjective: {
    title: string;
    description: string;
    descriptionsByLang: Record<string, string>;
    canDoStatements: string[];
    canDoByLang: Record<string, string[]>;
  };
  vocabulary: Array<{
    id: string;
    word: string;
    phonetic: string;
    meaning: string;
    translationsByLang: Record<string, string>;
    exampleSentence: string;
    exampleTranslationByLang: Record<string, string>;
    audioText: string;
    audioId: string;
    slowAudioId: string;
    voiceId: string;
    icon: string;
    difficulty: string;
  }>;
  expressions: Array<{
    id: string;
    expression: string;
    meaning: string;
    translationsByLang: Record<string, string>;
    usageNote: string;
    audioText: string;
    audioId: string;
    slowAudioId: string;
    voiceId: string;
    icon: string;
  }>;
  grammar: {
    title: string;
    concept: string;
    patterns: Array<{
      id: string;
      title: string;
      structure: string;
      rule: string;
      examples: Array<{
        english: string;
        translation: string;
        translationByLang: Record<string, string>;
        audioText: string;
        audioId: string;
      }>;
    }>;
  };
  commonMistakes: Array<{
    id: string;
    incorrect: string;
    correct: string;
    explanation: string;
    explanationsByLang: Record<string, string>;
  }>;
  dialogues: Array<{
    id: string;
    title: string;
    context: string;
    characters: Array<{ name: string; avatar: string; role: string }>;
    lines: Array<{
      speaker: string;
      text: string;
      translationsByLang: Record<string, string>;
      audioText: string;
      audioId: string;
    }>;
  }>;
  practiceExercises: any[];
  reviewExercises: any[];
  assessmentExercises: any[];
}

export function writeLessonFile(spec: LessonSpec, outDir: string = 'src/data/lessons'): void {
  const exportVarName = spec.id.toUpperCase() + '_DATA';
  const filePath = path.join(outDir, `${spec.id}.ts`);

  const fileContent = `import { DetailedLessonData } from '../../types';

export const ${exportVarName}: DetailedLessonData = ${JSON.stringify(spec, null, 2)};
`;

  fs.writeFileSync(filePath, fileContent, 'utf-8');
  console.log(`Successfully generated: ${filePath}`);
}
