import React, { useState } from 'react';
import {
  Award,
  Lock,
  Play,
  CheckCircle2,
  ShieldCheck,
  HelpCircle,
  Clock,
  AlertCircle,
  Trophy,
  BarChart3,
  RotateCcw,
  Sparkles,
  Check,
  AlertTriangle,
  ChevronRight,
  BookOpen,
  Zap,
  ArrowRight,
  FileCheck,
  ListOrdered
} from 'lucide-react';
import { UserAcademyProfile, Exercise, SkillTag, A1AssessmentAttempt, A1RemediationQueueItem } from '../../types';
import {
  UNIT_1_ASSESSMENT_BLUEPRINT,
  UNIT_1_MASTERY_ASSESSMENT_EXERCISES
} from '../../data/unit1MasteryAssessmentData';
import {
  A1_EXIT_ASSESSMENT_BLUEPRINT,
  A1_EXIT_ASSESSMENT_CONFIG,
  A1_EXIT_EXERCISES_FORM_A,
  A1_EXIT_EXERCISES_FORM_B_RETEST,
  getA1ExitExerciseWeight,
} from '../../data/a1ExitAssessmentData';
import { ExerciseRenderer } from '../lesson/ExerciseRenderer';
import { ProgressService, ALL_A1_LESSON_IDS, canUnlockA2 } from '../../services/ProgressService';
import { playSoundEffectEffect } from '../../utils/audioUtils';
import { normalizeExercise } from '../../utils/exerciseUtils';

interface AssessmentCenterViewProps {
  user: UserAcademyProfile;
  onStartAssessment?: (type: string) => void;
  onUpdateUser?: (updated: UserAcademyProfile) => void;
}

export const AssessmentCenterView: React.FC<AssessmentCenterViewProps> = ({
  user,
  onStartAssessment,
  onUpdateUser,
}) => {
  const isA1ExitUnlocked = ProgressService.isA1ExitAssessmentUnlocked(user);
  const a1Mastery = ProgressService.calculateA1Mastery(user);
  const isA2Unlocked = canUnlockA2(user);
  const isUnit1Unlocked = ProgressService.isUnit1AssessmentUnlocked(user);
  const unit1Mastery = ProgressService.calculateUnit1Mastery(user);

  const [activeExam, setActiveExam] = useState<{
    type: 'A1_EXIT_FORM_A' | 'A1_EXIT_FORM_B' | 'UNIT_1_MILESTONE' | 'REMEDIATION_SESSION';
    title: string;
    exercises: Exercise[];
    currentIndex: number;
    answersLog: { exerciseId: string; isCorrect: boolean; userResponse?: any }[];
    hasAnswered: boolean;
    isFinished: boolean;
    startTime: number;
    remediationConceptId?: string;
  } | null>(null);

  const [lastAttemptResult, setLastAttemptResult] = useState<A1AssessmentAttempt | null>(null);

  // Start the in-app A1 course exit assessment (Form A)
  const handleLaunchA1ExitExam = (formType: 'FORM_A' | 'FORM_B_RETEST' = 'FORM_A') => {
    playSoundEffectEffect('tap');
    const rawExercises = ProgressService.getA1ExitAssessmentExercises(formType);
    setActiveExam({
      type: formType === 'FORM_B_RETEST' ? 'A1_EXIT_FORM_B' : 'A1_EXIT_FORM_A',
      title: formType === 'FORM_B_RETEST' ? 'A1 Course Exit Assessment (Form B Retest)' : 'A1 Course Exit Assessment (Form A)',
      exercises: rawExercises.map(normalizeExercise),
      currentIndex: 0,
      answersLog: [],
      hasAnswered: false,
      isFinished: false,
      startTime: Date.now(),
    });
  };

  // Start Unit 1 Milestone Exam
  const handleLaunchUnit1Exam = () => {
    playSoundEffectEffect('tap');
    setActiveExam({
      type: 'UNIT_1_MILESTONE',
      title: 'A1 Unit 1 Course Assessment (Lessons 1–15)',
      exercises: UNIT_1_MASTERY_ASSESSMENT_EXERCISES.map(normalizeExercise),
      currentIndex: 0,
      answersLog: [],
      hasAnswered: false,
      isFinished: false,
      startTime: Date.now(),
    });
  };

  // Launch targeted remediation session
  const handleLaunchRemediation = (item: A1RemediationQueueItem) => {
    playSoundEffectEffect('tap');
    const exercises = (item.exercises || []).map(normalizeExercise);
    if (exercises.length === 0) {
      // Complete directly if no exercises attached
      const updated = ProgressService.completeRemediationConcept(item.conceptId);
      if (onUpdateUser) onUpdateUser(updated);
      return;
    }

    setActiveExam({
      type: 'REMEDIATION_SESSION',
      title: `Remediation: ${item.conceptTitle}`,
      exercises,
      currentIndex: 0,
      answersLog: [],
      hasAnswered: false,
      isFinished: false,
      startTime: Date.now(),
      remediationConceptId: item.conceptId,
    });
  };

  const handleAnswerSubmit = (isCorrect: boolean) => {
    if (!activeExam) return;
    const currentEx = activeExam.exercises[activeExam.currentIndex];

    setActiveExam((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        hasAnswered: true,
        answersLog: [
          ...prev.answersLog.filter((a) => a.exerciseId !== currentEx.id),
          { exerciseId: currentEx.id, isCorrect },
        ],
      };
    });
  };

  const handleNextQuestion = () => {
    if (!activeExam) return;
    playSoundEffectEffect('tap');

    if (activeExam.currentIndex < activeExam.exercises.length - 1) {
      setActiveExam((prev) => {
        if (!prev) return null;
        return {
          ...prev,
          currentIndex: prev.currentIndex + 1,
          hasAnswered: false,
        };
      });
    } else {
      // Completed Exam Evaluation
      const totalCorrect = activeExam.answersLog.filter((a) => a.isCorrect).length;
      const durationSeconds = Math.round((Date.now() - activeExam.startTime) / 1000);

      if (activeExam.type === 'REMEDIATION_SESSION') {
        // Complete remediation concept
        if (activeExam.remediationConceptId) {
          const updated = ProgressService.completeRemediationConcept(activeExam.remediationConceptId);
          if (onUpdateUser) onUpdateUser(updated);
        }
        playSoundEffectEffect('victory');
        setActiveExam(null);
        return;
      }

      if (activeExam.type === 'A1_EXIT_FORM_A' || activeExam.type === 'A1_EXIT_FORM_B') {
        // Compute 9-Skill Breakdown
        const skillBreakdown: Record<SkillTag, { correct: number; total: number; percent: number }> = {
          vocabulary: { correct: 0, total: 0, percent: 0 },
          grammar: { correct: 0, total: 0, percent: 0 },
          listening: { correct: 0, total: 0, percent: 0 },
          reading: { correct: 0, total: 0, percent: 0 },
          speaking: { correct: 0, total: 0, percent: 0 },
          writing: { correct: 0, total: 0, percent: 0 },
          mediation: { correct: 0, total: 0, percent: 0 },
          interaction: { correct: 0, total: 0, percent: 0 },
          pronunciation: { correct: 0, total: 0, percent: 0 },
        };

        const identifiedWeaknesses: string[] = [];

        activeExam.exercises.forEach((ex) => {
          const isCorrect = activeExam.answersLog.find((a) => a.exerciseId === ex.id)?.isCorrect ?? false;
          (ex.skillTags || ['grammar']).forEach((sk) => {
            if (sk in skillBreakdown) {
              skillBreakdown[sk].total += 1;
              if (isCorrect) skillBreakdown[sk].correct += 1;
            }
          });

          if (!isCorrect && (ex.grammarTarget || ex.vocabularyTarget)) {
            identifiedWeaknesses.push(ex.grammarTarget || ex.vocabularyTarget || 'Grammar Syntax');
          }
        });

        // Calculate skill percentages
        Object.keys(skillBreakdown).forEach((sk) => {
          const item = skillBreakdown[sk as SkillTag];
          if (item.total > 0) {
            item.percent = Math.round((item.correct / item.total) * 100);
          }
        });

        const formType = activeExam.type === 'A1_EXIT_FORM_B' ? 'FORM_B_RETEST' : 'FORM_A';
        const { user: updatedUser, attempt } = ProgressService.evaluateA1ExitAssessmentAttempt(
          totalCorrect,
          activeExam.exercises.length,
          durationSeconds,
          skillBreakdown,
          Array.from(new Set(identifiedWeaknesses)),
          activeExam.answersLog,
          formType
        );

        setLastAttemptResult(attempt);
        playSoundEffectEffect(attempt.passed ? 'victory' : 'wrong');

        setActiveExam((prev) => {
          if (!prev) return null;
          return {
            ...prev,
            isFinished: true,
          };
        });

        if (onUpdateUser) onUpdateUser(updatedUser);
      } else {
        // Unit 1 Milestone Evaluation
        const skillBreakdown: Record<SkillTag, { correct: number; total: number; percent: number }> = {
          vocabulary: { correct: 0, total: 0, percent: 0 },
          grammar: { correct: 0, total: 0, percent: 0 },
          listening: { correct: 0, total: 0, percent: 0 },
          reading: { correct: 0, total: 0, percent: 0 },
          speaking: { correct: 0, total: 0, percent: 0 },
          writing: { correct: 0, total: 0, percent: 0 },
          mediation: { correct: 0, total: 0, percent: 0 },
          interaction: { correct: 0, total: 0, percent: 0 },
          pronunciation: { correct: 0, total: 0, percent: 0 },
        };

        const identifiedWeaknesses: string[] = [];
        activeExam.exercises.forEach((ex) => {
          const isCorrect = activeExam.answersLog.find((a) => a.exerciseId === ex.id)?.isCorrect ?? false;
          (ex.skillTags || ['grammar']).forEach((sk) => {
            if (sk in skillBreakdown) {
              skillBreakdown[sk].total += 1;
              if (isCorrect) skillBreakdown[sk].correct += 1;
            }
          });
          if (!isCorrect && ex.grammarTarget) identifiedWeaknesses.push(ex.grammarTarget);
        });

        Object.keys(skillBreakdown).forEach((sk) => {
          const item = skillBreakdown[sk as SkillTag];
          if (item.total > 0) item.percent = Math.round((item.correct / item.total) * 100);
        });

        const { user: updatedUser } = ProgressService.recordUnit1AssessmentAttempt(
          totalCorrect,
          activeExam.exercises.length,
          durationSeconds,
          skillBreakdown,
          Array.from(new Set(identifiedWeaknesses)),
          activeExam.answersLog
        );

        playSoundEffectEffect(totalCorrect >= Math.round(activeExam.exercises.length * 0.8) ? 'victory' : 'correct');

        setActiveExam((prev) => {
          if (!prev) return null;
          return {
            ...prev,
            isFinished: true,
          };
        });

        if (onUpdateUser) onUpdateUser(updatedUser);
      }
    }
  };

  // --------------------------------------------------------------------------
  // ACTIVE EXAM VIEW (IN-PROGRESS OR FINISHED)
  // --------------------------------------------------------------------------
  if (activeExam) {
    if (activeExam.isFinished) {
      const isExitExam = activeExam.type === 'A1_EXIT_FORM_A' || activeExam.type === 'A1_EXIT_FORM_B';
      const attempt = lastAttemptResult;

      const totalCorrect = activeExam.answersLog.filter((a) => a.isCorrect).length;
      const totalQuestions = activeExam.exercises.length;
      const scorePercent = attempt ? attempt.scorePercent : totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;
      const passed = attempt ? attempt.passed : scorePercent >= 80;
      const distinction = attempt ? attempt.isMastered : scorePercent >= 90;
      const circumference = 2 * Math.PI * 44; // r=44
      const strokeDashoffset = circumference - (scorePercent / 100) * circumference;

      return (
        <div className="p-6 max-w-xl mx-auto space-y-5 bg-white dark:bg-slate-900 border border-[#D9E4FF] dark:border-slate-800 rounded-3xl shadow-sm dark:shadow-2xl my-6 text-slate-900 dark:text-slate-100 animate-fade-in">
          {/* Circular Score Gauge & Badge */}
          <div className="text-center space-y-3 pt-2">
            <div className="relative w-32 h-32 mx-auto flex items-center justify-center">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="44"
                  className="stroke-slate-200 dark:stroke-slate-800"
                  strokeWidth="8"
                  fill="transparent"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="44"
                  className={`transition-all duration-1000 ease-out ${
                    passed ? 'stroke-emerald-500 dark:stroke-emerald-400' : 'stroke-rose-500 dark:stroke-rose-400'
                  }`}
                  strokeWidth="8"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  fill="transparent"
                />
              </svg>
              <div className="absolute flex flex-col items-center justify-center">
                <span className="text-2xl font-black text-slate-900 dark:text-white">{scorePercent}%</span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Score</span>
              </div>
            </div>

            <div className="space-y-1">
              <div className={`inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wide border shadow-xs ${
                passed
                  ? distinction
                    ? 'bg-amber-100 dark:bg-amber-500/15 border-amber-300 dark:border-amber-500/30 text-amber-800 dark:text-amber-300'
                    : 'bg-emerald-100 dark:bg-emerald-500/15 border-emerald-300 dark:border-emerald-500/30 text-emerald-800 dark:text-emerald-300'
                  : 'bg-rose-100 dark:bg-rose-500/15 border-rose-300 dark:border-rose-500/30 text-rose-800 dark:text-rose-300'
              }`}>
                <span>{passed ? (distinction ? '🌟 90%+ Assessment Score' : 'Assessment Passed') : 'Assessment Not Passed'}</span>
              </div>
              <h2 className="text-xl font-black text-slate-900 dark:text-white pt-1">
                {isExitExam ? 'A1 Course Exit Assessment Results' : 'Unit 1 Assessment Results'}
              </h2>
              <p className="text-xs text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                {isExitExam
                  ? passed
                    ? distinction
                      ? 'You scored 90% or higher on the in-app A1 course exit assessment and met its configured skill minimums. A2 course content is unlocked. This is not an official CEFR proficiency result.'
                      : 'You passed the in-app A1 course exit assessment and met its configured skill minimums. A2 course content is unlocked. This is not an official CEFR proficiency result.'
                    : 'You did not meet the in-app assessment passing criteria. Review the unmet thresholds and available targeted practice before trying the Form B retest.'
                  : passed
                  ? 'You passed the in-app Unit 1 assessment.'
                  : 'The in-app Unit 1 assessment was not passed. Continue practicing Unit 1 concepts before trying again.'}
              </p>
            </div>
          </div>

          {/* Core Result Cards */}
          <div className="grid grid-cols-3 gap-2.5 text-center">
            <div className="p-3.5 bg-slate-50 dark:bg-slate-950/90 border border-[#D9E4FF] dark:border-slate-800 rounded-2xl shadow-inner">
              <span className="text-[9px] font-bold text-slate-500 dark:text-slate-400 uppercase block tracking-wider">Weighted Score</span>
              <span className={`text-xl font-black block mt-0.5 ${passed ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'}`}>
                {scorePercent}%
              </span>
              <span className="text-[9px] text-slate-500 dark:text-slate-400 block">{attempt ? `${attempt.totalScore} / ${attempt.maxScore} Pts` : `${totalCorrect}/${totalQuestions}`}</span>
            </div>

            <div className="p-3.5 bg-slate-50 dark:bg-slate-950/90 border border-[#D9E4FF] dark:border-slate-800 rounded-2xl shadow-inner">
              <span className="text-[9px] font-bold text-slate-500 dark:text-slate-400 uppercase block tracking-wider">Assessment Outcome</span>
              <span className={`text-xs font-black block mt-1.5 ${passed ? 'text-emerald-700 dark:text-emerald-300' : 'text-rose-700 dark:text-rose-300'}`}>
                {isExitExam ? (passed ? 'A2 COURSE GATE PASSED' : 'NOT PASSED') : (passed ? 'PASSED' : 'REVIEW NEEDED')}
              </span>
              <span className="text-[9px] text-slate-500 block">≥80% overall; skill mins apply</span>
            </div>

            <div className="p-3.5 bg-slate-50 dark:bg-slate-950/90 border border-[#D9E4FF] dark:border-slate-800 rounded-2xl shadow-inner">
              <span className="text-[9px] font-bold text-slate-500 dark:text-slate-400 uppercase block tracking-wider">A2 Course Content</span>
              <span className={`text-xs font-black block mt-1.5 ${isA2Unlocked || (isExitExam && passed) ? 'text-emerald-700 dark:text-emerald-400' : 'text-amber-600 dark:text-amber-400'}`}>
                {isA2Unlocked || (isExitExam && passed) ? 'UNLOCKED 🔓' : 'LOCKED 🔒'}
              </span>
              <span className="text-[9px] text-slate-500 block">{isA2Unlocked || (isExitExam && passed) ? 'Course content available' : isExitExam ? 'Exit requirements not met' : 'Unit 1 result only'}</span>
            </div>
          </div>

          {/* Unmet Thresholds Warning (if any) */}
          {attempt && attempt.unmetThresholds && attempt.unmetThresholds.length > 0 && (
            <div className="p-4 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-500/30 rounded-2xl space-y-2 text-xs">
              <div className="flex items-center space-x-2 text-rose-700 dark:text-rose-300 font-black uppercase text-[10px]">
                <AlertTriangle className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                <span>Unmet Assessment Thresholds ({attempt.unmetThresholds.length})</span>
              </div>
              <ul className="space-y-1 text-rose-800 dark:text-rose-200/90 text-[11px] list-disc list-inside">
                {attempt.unmetThresholds.map((msg, i) => (
                  <li key={i}>{msg}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Scored Skill-Tagged Assessment Results */}
          {attempt && attempt.skillBreakdown && (
            <div className="bg-slate-50 dark:bg-slate-950/90 border border-[#D9E4FF] dark:border-slate-800 rounded-2xl p-4 space-y-2.5 shadow-inner">
              <span className="text-[10px] font-black uppercase text-slate-500 dark:text-slate-400 block tracking-wider">
                Scored Assessment Items by Skill Tag
              </span>
              <p className="text-[10px] text-slate-500 dark:text-slate-400">Percentages show correct responses for items tagged to each area in this in-app assessment. Speaking-tag scores use transcript text matching, not acoustic pronunciation analysis or an official CEFR proficiency test.</p>
              <div className="grid grid-cols-3 gap-2">
                {Object.entries(attempt.skillBreakdown).filter(([, data]: [string, any]) => data?.total > 0 && Number.isFinite(data?.percent)).map(([skill, data]: [string, any]) => {
                  const min = A1_EXIT_ASSESSMENT_CONFIG.criticalSkillMinimums[skill as SkillTag] || 70;
                  const isOk = (data?.percent ?? 0) >= min;
                  return (
                    <div key={skill} className="p-2.5 bg-white dark:bg-slate-900 border border-[#D9E4FF] dark:border-slate-800/80 rounded-xl text-center space-y-1">
                      <span className="text-[9px] font-bold text-slate-500 dark:text-slate-400 capitalize block truncate">{skill}</span>
                      <span className={`text-xs font-black block ${isOk ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'}`}>
                        {data?.percent ?? 0}%
                      </span>
                      <div className="w-full bg-slate-200 dark:bg-slate-800 h-1 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${isOk ? 'bg-emerald-500' : 'bg-rose-500'}`}
                          style={{ width: `${Math.min(100, data?.percent ?? 0)}%` }}
                        />
                      </div>
                      <span className="text-[8px] text-slate-500 block">Min: {min}%</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Recommended Review Lessons */}
          {attempt && attempt.recommendedReviewLessonIds && attempt.recommendedReviewLessonIds.length > 0 && (
            <div className="p-4 bg-slate-50 dark:bg-slate-950/90 border border-[#D9E4FF] dark:border-slate-800 rounded-2xl space-y-2 shadow-inner">
              <span className="text-[10px] font-black uppercase text-amber-700 dark:text-amber-400 flex items-center space-x-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Recommended Pedagogical Review Lessons</span>
              </span>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {attempt.recommendedReviewLessonIds.map((lId) => (
                  <span key={lId} className="px-2.5 py-1 bg-white dark:bg-slate-900 border border-[#D9E4FF] dark:border-slate-700/80 text-slate-700 dark:text-slate-300 text-[10px] font-bold rounded-xl shadow-xs">
                    {lId.replace('lesson_a1_', 'Unit ').replace('_', ' • Lesson ')}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex space-x-2.5 pt-2">
            <button
              onClick={() => {
                setActiveExam(null);
                setLastAttemptResult(null);
              }}
              className="flex-1 py-3.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs rounded-2xl transition btn-press cursor-pointer border border-[#D9E4FF] dark:border-transparent"
            >
              Return to Assessment Center
            </button>

            {isExitExam && !passed && (
              <button
                onClick={() => handleLaunchA1ExitExam('FORM_B_RETEST')}
                className="flex-1 py-3.5 bg-gradient-to-r from-[#335CFF] to-[#6D5DF6] text-white font-black text-xs rounded-2xl shadow-lg hover:brightness-110 transition btn-press cursor-pointer border border-indigo-400/30"
              >
                Launch Form B Retest
              </button>
            )}

            {isExitExam && passed && (
              <button
                onClick={() => {
                  setActiveExam(null);
                  setLastAttemptResult(null);
                }}
                className="flex-1 py-3.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-black text-xs rounded-2xl shadow-lg hover:brightness-110 transition btn-press cursor-pointer"
              >
                Continue Learning
              </button>
            )}
          </div>
        </div>
      );
    }

    if (!activeExam.exercises || activeExam.exercises.length === 0) {
      return (
        <div className="max-w-xl mx-auto p-8 bg-slate-900 border border-slate-800 rounded-3xl text-center space-y-4">
          <Trophy className="w-12 h-12 text-indigo-400 mx-auto" />
          <h3 className="text-xl font-bold text-white">Assessment Complete</h3>
          <p className="text-sm text-slate-400">No assessment items are available for this session.</p>
          <button onClick={() => setActiveExam(null)} className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs uppercase rounded-xl">
            Return to Assessment Center
          </button>
        </div>
      );
    }

    const currentEx = activeExam.exercises[activeExam.currentIndex];
    const weight = getA1ExitExerciseWeight(currentEx.id);

    return (
      <div className="flex flex-col space-y-4 p-4 sm:p-6 pb-24 text-slate-900 dark:text-slate-100 max-w-xl mx-auto">
        <div className="flex items-center justify-between bg-white dark:bg-slate-900 border border-[#D9E4FF] dark:border-slate-800 p-3.5 rounded-2xl shadow-xs">
          <div>
            <span className="text-[10px] font-black uppercase text-emerald-600 dark:text-emerald-400 block tracking-wider">
              {activeExam.title}
            </span>
            <h3 className="text-xs font-bold text-slate-900 dark:text-white flex items-center space-x-2">
              <span>Item {activeExam.currentIndex + 1} of {activeExam.exercises.length}</span>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">({weight} pts)</span>
            </h3>
          </div>

          <button
            onClick={() => setActiveExam(null)}
            className="text-xs text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white px-2.5 py-1 bg-slate-100 dark:bg-slate-800 border border-[#D9E4FF] dark:border-transparent rounded-xl cursor-pointer"
          >
            Exit
          </button>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 transition-all duration-300"
            style={{ width: `${((activeExam.currentIndex + 1) / activeExam.exercises.length) * 100}%` }}
          />
        </div>

        {/* Exercise Card */}
        <div className="bg-white dark:bg-slate-900 border border-[#D9E4FF] dark:border-slate-800 rounded-3xl p-5 shadow-sm dark:shadow-xl space-y-4">
          <ExerciseRenderer
            exercise={currentEx}
            onAnswerSubmit={handleAnswerSubmit}
            disabled={activeExam.hasAnswered}
          />
        </div>

        {/* Next Question Navigation */}
        {activeExam.hasAnswered && (
          <button
            onClick={handleNextQuestion}
            className="w-full py-3.5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:brightness-110 text-slate-950 font-black text-sm rounded-2xl shadow-lg transition flex items-center justify-center space-x-2 cursor-pointer"
          >
            <span>
              {activeExam.currentIndex < activeExam.exercises.length - 1
                ? 'Next Question'
                : 'Submit & Finalize Assessment'}
            </span>
            <ChevronRight className="w-4 h-4" />
          </button>
        )}
      </div>
    );
  }

  // --------------------------------------------------------------------------
  // ASSESSMENT HUB MAIN VIEW
  // --------------------------------------------------------------------------
  return (
    <div className="flex flex-col space-y-5 p-4 sm:p-6 pb-24 text-slate-900 dark:text-slate-100 max-w-xl mx-auto">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-indigo-100 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-indigo-950 dark:to-slate-900 border border-[#D9E4FF] dark:border-indigo-500/30 rounded-3xl p-5 shadow-sm dark:shadow-xl space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-black uppercase text-indigo-700 dark:text-indigo-400 bg-indigo-200/60 dark:bg-indigo-500/10 px-2.5 py-0.5 rounded-full border border-indigo-300 dark:border-indigo-500/20">
            In-App Assessment Center
          </span>
          <span className="text-[10px] font-black uppercase text-slate-600 dark:text-slate-400">
            A1 Course Assessments
          </span>
        </div>
        <h2 className="text-xl font-black text-slate-900 dark:text-white">Course Assessments & Progress Checks</h2>
        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
          In-app assessments record results for tagged course items. After completing all 90 A1 lessons, pass the exit assessment (≥80% overall plus configured skill minimums) to unlock A2 course content. Results are not official CEFR proficiency determinations.
        </p>
      </div>

      {/* IN-APP A1 COURSE EXIT ASSESSMENT */}
      <div className={`p-5 rounded-3xl border shadow-sm dark:shadow-xl space-y-4 ${
        isA2Unlocked
          ? 'bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/80 dark:to-slate-900 border-emerald-300 dark:border-emerald-500/40'
          : isA1ExitUnlocked
          ? 'bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-950/90 dark:to-slate-900 border-indigo-300 dark:border-indigo-500/40'
          : 'bg-white dark:bg-slate-900 border-[#D9E4FF] dark:border-slate-800'
      }`}>
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-amber-500 dark:text-amber-400" />
              <h3 className="text-base font-black text-slate-900 dark:text-white">A1 Course Exit Assessment</h3>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              In-app exit assessment available after all 90 A1 course lessons are complete (45 items, 100 points).
            </p>
          </div>

          <span className={`text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full border ${
            isA2Unlocked
              ? 'bg-emerald-100 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 border-emerald-300 dark:border-emerald-500/30'
              : isA1ExitUnlocked
              ? 'bg-indigo-100 dark:bg-indigo-500/20 text-indigo-800 dark:text-indigo-300 border-indigo-300 dark:border-indigo-500/30'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-[#D9E4FF] dark:border-slate-700'
          }`}>
            {isA2Unlocked ? 'A2 COURSE CONTENT UNLOCKED' : isA1ExitUnlocked ? 'READY TO TAKE' : 'LOCKED 🔒'}
          </span>
        </div>

        {/* Exam Specs Table */}
        <div className="grid grid-cols-4 gap-2 bg-slate-50 dark:bg-slate-950/60 p-3 rounded-2xl border border-[#D9E4FF] dark:border-slate-800 text-center">
          <div>
            <span className="text-[9px] font-bold text-slate-500 uppercase block">Curriculum</span>
            <span className="text-xs font-black text-slate-800 dark:text-slate-200">Lessons 1–90</span>
          </div>
          <div>
            <span className="text-[9px] font-bold text-slate-500 uppercase block">Items</span>
            <span className="text-xs font-black text-slate-800 dark:text-slate-200">45 Questions</span>
          </div>
          <div>
            <span className="text-[9px] font-bold text-slate-500 uppercase block">Weight</span>
            <span className="text-xs font-black text-emerald-600 dark:text-emerald-400">100 Pts</span>
          </div>
          <div>
            <span className="text-[9px] font-bold text-slate-500 uppercase block">Passing Target</span>
            <span className="text-xs font-black text-amber-600 dark:text-amber-400">≥80% + skill minimums</span>
          </div>
        </div>

        {/* Launch Buttons / Prerequisites */}
        {isA1ExitUnlocked ? (
          <div className="space-y-2">
            <div className="flex space-x-2">
              <button
                onClick={() => handleLaunchA1ExitExam('FORM_A')}
                className="flex-1 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:brightness-110 text-slate-950 font-black text-xs rounded-2xl shadow-lg transition flex items-center justify-center space-x-2 cursor-pointer"
              >
                <Play className="w-4 h-4 fill-slate-950" />
                <span>Launch Form A Exam</span>
              </button>

              <button
                onClick={() => handleLaunchA1ExitExam('FORM_B_RETEST')}
                className="py-3 px-4 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs rounded-2xl transition flex items-center space-x-1.5 cursor-pointer border border-[#D9E4FF] dark:border-transparent"
                title="Alternative test form for retakes"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Form B Retest</span>
              </button>
            </div>

            {a1Mastery.bestExitScorePercent !== undefined && (
              <p className="text-[11px] text-center text-slate-600 dark:text-slate-400">
                Best saved in-app exit score: <strong className="text-emerald-600 dark:text-emerald-400">{a1Mastery.bestExitScorePercent}%</strong> ({a1Mastery.assessmentPassed ? 'Passed' : 'Not passed'})
              </p>
            )}
          </div>
        ) : (
          <div className="p-3 bg-slate-50 dark:bg-slate-950 border border-[#D9E4FF] dark:border-slate-800 rounded-2xl space-y-1.5">
            <div className="flex items-center justify-between text-xs font-bold text-slate-700 dark:text-slate-300">
              <span className="flex items-center space-x-1.5">
                <Lock className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
                <span>Prerequisite: Complete all 90 A1 Lessons</span>
              </span>
              <span className="text-amber-600 dark:text-amber-400 font-mono">{a1Mastery.lessonsCompletedCount} / 90</span>
            </div>
            <div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-amber-500 rounded-full transition-all duration-300"
                style={{ width: `${Math.min(100, Math.round((a1Mastery.lessonsCompletedCount / 90) * 100))}%` }}
              />
            </div>
          </div>
        )}
      </div>

      {/* ACTIVE REMEDIATION QUEUE (IF APPLICABLE) */}
      {a1Mastery.remediationQueue && a1Mastery.remediationQueue.length > 0 && (
        <div className="bg-white dark:bg-slate-900 border border-rose-200 dark:border-rose-500/30 rounded-3xl p-5 space-y-3 shadow-sm dark:shadow-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-rose-600 dark:text-rose-400">
              <AlertTriangle className="w-4 h-4" />
              <h3 className="text-xs font-black uppercase tracking-wider">
                Targeted Remediation Queue ({a1Mastery.remediationCompletedCount} / {a1Mastery.remediationQueue.length})
              </h3>
            </div>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 font-bold">Required for Form B Retest</span>
          </div>

          <div className="space-y-2">
            {a1Mastery.remediationQueue.map((item) => (
              <div
                key={item.conceptId}
                className="p-3 bg-slate-50 dark:bg-slate-950 border border-[#D9E4FF] dark:border-slate-800 rounded-2xl flex items-center justify-between"
              >
                <div className="space-y-0.5">
                  <span className="text-xs font-bold text-slate-900 dark:text-white block">{item.conceptTitle}</span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 block capitalize">{item.skill} • {item.sourceLessonIds.length} review lessons</span>
                </div>

                {item.completed ? (
                  <span className="px-2.5 py-1 bg-emerald-100 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 text-[10px] font-black rounded-xl border border-emerald-300 dark:border-emerald-500/30 flex items-center space-x-1">
                    <Check className="w-3 h-3" />
                    <span>Done</span>
                  </span>
                ) : (
                  <button
                    onClick={() => handleLaunchRemediation(item)}
                    className="px-3 py-1 bg-rose-500 hover:bg-rose-600 text-white font-bold text-xs rounded-xl transition cursor-pointer"
                  >
                    Practice
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* UNIT 1 MILESTONE CHECKPOINT (LESSONS 1–15) */}
      <div className="bg-white dark:bg-slate-900 border border-[#D9E4FF] dark:border-slate-800 rounded-3xl p-5 space-y-3 shadow-sm dark:shadow-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <div>
              <h3 className="text-sm font-black text-slate-900 dark:text-white">Unit 1 Foundations Milestone Exam</h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">32 items • 100 pts • Lessons 1–15 Core Foundations</p>
            </div>
          </div>

          <span className={`text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full border ${
            unit1Mastery.status === 'mastered'
              ? 'bg-amber-100 dark:bg-amber-500/20 text-amber-800 dark:text-amber-300 border-amber-300 dark:border-amber-500/30'
              : isUnit1Unlocked
              ? 'bg-indigo-100 dark:bg-indigo-500/20 text-indigo-800 dark:text-indigo-300 border-indigo-300 dark:border-indigo-500/30'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-[#D9E4FF] dark:border-slate-700'
          }`}>
            {unit1Mastery.status === 'mastered' ? 'Assessment passed' : isUnit1Unlocked ? 'Unlocked' : 'Locked 🔒'}
          </span>
        </div>

        {isUnit1Unlocked ? (
          <button
            onClick={handleLaunchUnit1Exam}
            className="w-full py-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs rounded-2xl transition flex items-center justify-center space-x-2 cursor-pointer border border-[#D9E4FF] dark:border-transparent"
          >
            <Play className="w-3.5 h-3.5 fill-slate-800 dark:fill-slate-200" />
            <span>Launch Unit 1 Milestone Exam</span>
          </button>
        ) : (
          <p className="text-[11px] text-slate-500">
            Complete Lessons 1–15 to unlock the Unit 1 Milestone Checkpoint ({unit1Mastery.lessonsCompletedCount}/15 completed).
          </p>
        )}
      </div>
    </div>
  );
};
