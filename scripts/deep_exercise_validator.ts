import { LessonService } from '../src/services/LessonService';
import { CurriculumService } from '../src/services/CurriculumService';
import { DetailedLessonData, Exercise } from '../src/types';
import { normalizeExerciseType } from '../src/utils/exerciseUtils';

function getLessonIdForNumber(num: number): string {
  let unitNum = 1;
  let level = 'a1';
  if (num <= 15) unitNum = 1;
  else if (num <= 30) unitNum = 2;
  else if (num <= 45) unitNum = 3;
  else if (num <= 60) unitNum = 4;
  else if (num <= 75) unitNum = 5;
  else if (num <= 90) unitNum = 6;
  else {
    level = 'a2';
    unitNum = 7 + Math.floor((num - 91) / 15);
  }
  return `lesson_${level}_${unitNum}_${num}`;
}

async function runValidation() {
  const LESSONS: DetailedLessonData[] = [];
  for (let i = 1; i <= 270; i++) {
    const lessonId = getLessonIdForNumber(i);
    const lesson = (await LessonService.getLessonById(lessonId)) || CurriculumService.getDetailedLesson(lessonId);
    if (lesson) {
      LESSONS.push(lesson);
    }
  }

  interface Finding {
    lessonId: string;
    exId: string;
    type: string;
    issue: string;
    severity: 'CRITICAL' | 'WARN';
  }

  const findings: Finding[] = [];

  for (const lesson of LESSONS) {
    const exList: Exercise[] = [
      ...(lesson.practiceExercises || []),
      ...(lesson.reviewExercises || []),
      ...(lesson.assessmentExercises || []),
    ];

    for (const ex of exList) {
      const cType = normalizeExerciseType(ex.type);

      // 1. Multiple Choice / Recognition / Fill Blank / Listening (Choice types)
      if (['multiple_choice', 'recognition', 'fill_blank', 'listening', 'dialogue_completion', 'error_correction', 'reading', 'mediation'].includes(cType)) {
        if (!ex.options || ex.options.length === 0) {
          // If it's fill_blank and has correctAnswer without options, it's valid free-typing, otherwise it needs options
          if (!ex.correctAnswer && !ex.targetSentence) {
            findings.push({ lessonId: lesson.id, exId: ex.id, type: cType, issue: 'Missing options or correctAnswer', severity: 'CRITICAL' });
          }
        } else {
          const correctCount = ex.options.filter(o => o.isCorrect === true).length;
          if (correctCount === 0 && !ex.correctAnswer && !ex.targetSentence) {
            findings.push({ lessonId: lesson.id, exId: ex.id, type: cType, issue: 'No option marked isCorrect: true and no correctAnswer/targetSentence', severity: 'CRITICAL' });
          }
        }
      }

      // 2. Word Ordering / Translation Word Banks
      if (['word_ordering', 'sentence_construction', 'translation', 'translate_tiles'].includes(cType)) {
        if (ex.targetSentence && ex.wordBank && ex.wordBank.length > 0) {
          const targetWords = ex.targetSentence.toLowerCase().replace(/[^a-z0-9' -]/gi, '').split(/\s+/).filter(Boolean);
          const bankWords = ex.wordBank.map(w => w.toLowerCase().replace(/[^a-z0-9' -]/gi, '').trim());

          const bankCopy = [...bankWords];
          const missingInBank: string[] = [];

          for (const tw of targetWords) {
            const idx = bankCopy.indexOf(tw);
            if (idx !== -1) {
              bankCopy.splice(idx, 1);
            } else {
              // Also check if any bank token contains tw (multi-word tile)
              const multiIdx = bankCopy.findIndex(bw => bw.split(/\s+/).includes(tw));
              if (multiIdx !== -1) {
                // matched in multi-word tile
              } else {
                missingInBank.push(tw);
              }
            }
          }

          if (missingInBank.length > 0 && cType === 'word_ordering') {
            findings.push({
              lessonId: lesson.id,
              exId: ex.id,
              type: cType,
              issue: `wordBank missing target tokens: [${missingInBank.join(', ')}] for targetSentence "${ex.targetSentence}"`,
              severity: 'WARN',
            });
          }
        }
      }
    }
  }

  console.log('=== DEEP EXERCISE VALIDATION REPORT (LESSONS 1–270) ===');
  console.log(`Total Lessons Audited: ${LESSONS.length}/270`);
  console.log(`Total Findings: ${findings.length}`);
  const criticals = findings.filter(f => f.severity === 'CRITICAL');
  console.log(`Critical Findings: ${criticals.length}`);
  for (const f of criticals) {
    console.log(`[${f.severity}] [${f.lessonId}] [${f.type}] Ex: ${f.exId} -> ${f.issue}`);
  }
}

runValidation();
