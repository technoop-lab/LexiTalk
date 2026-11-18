import { Exercise } from '../types';
import {
  CanonicalExerciseType,
  normalizeExerciseType,
  normalizeExercise,
  normalizeExercises,
  getCorrectAnswerDisplay,
  evaluateExercise,
  ExerciseUserResponse,
  ExerciseEvaluationResult,
} from '../services/ExerciseRegistry';

export {
  normalizeExerciseType,
  normalizeExercise,
  normalizeExercises,
  getCorrectAnswerDisplay,
  evaluateExercise,
};

export type {
  CanonicalExerciseType,
  ExerciseUserResponse,
  ExerciseEvaluationResult,
};
