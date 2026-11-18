import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  Sparkles,
  ChevronRight,
  RotateCcw,
  Play,
  BookOpen,
  CheckCircle2,
  Layers,
  Award
} from 'lucide-react';
import { DetailedLessonData, NativeLanguageCode, ExtendedExerciseType, UserAcademyProfile } from '../../types';
import { VocabCard } from './VocabCard';
import { ExpressionCard } from './ExpressionCard';
import { GrammarView } from './GrammarView';
import { CommonMistakesView } from './CommonMistakesView';
import { DialoguePlayer } from './DialoguePlayer';
import { ExerciseRenderer } from './ExerciseRenderer';
import { AssessmentView } from './AssessmentView';
import { MasteryCompletionCard } from './MasteryCompletionCard';
import { LessonAudioDownloader } from './LessonAudioDownloader';
import { WarmUpView } from './WarmUpView';
import { GrammarDiscoveryView } from './GrammarDiscoveryView';
import { ChunkedVocabView } from './ChunkedVocabView';
import { AudioService } from '../../services/AudioService';
import { playSoundEffectEffect } from '../../utils/audioUtils';

export type LessonSectionStep =
  | 'objective'
  | 'warmup'
  | 'vocabulary'
  | 'expressions'
  | 'discovery'
  | 'grammar'
  | 'mistakes'
  | 'dialogues'
  | 'practice'
  | 'review'
  | 'assessment'
  | 'complete';

interface LessonEngineProps {
  lessonData: DetailedLessonData;
  user: UserAcademyProfile;
  onExit: () => void;
  onLessonFinished: (updatedUser: UserAcademyProfile) => void;
}

const STEP_METADATA: Record<LessonSectionStep, { stepNum: number; title: string; subtitle: string }> = {
  objective: { stepNum: 1, title: 'Lesson Objectives', subtitle: 'Goals & Can-Do Targets' },
  warmup: { stepNum: 2, title: 'Warm-Up Activation', subtitle: 'Real-World Context' },
  vocabulary: { stepNum: 3, title: 'Chunked Vocabulary', subtitle: 'Target Lexical Items' },
  expressions: { stepNum: 4, title: 'Core Expressions', subtitle: 'Spoken Conversational Chunks' },
  discovery: { stepNum: 5, title: 'Pattern Discovery', subtitle: 'Inductive Grammar' },
  grammar: { stepNum: 6, title: 'Grammar Insights', subtitle: 'Subject Pronouns & Verb To Be' },
  mistakes: { stepNum: 7, title: 'Common Mistakes', subtitle: 'L1 Interference Prevention' },
  dialogues: { stepNum: 8, title: 'Realistic Dialogues', subtitle: 'Native Audio Interactions' },
  practice: { stepNum: 9, title: 'Targeted Practice', subtitle: 'Interactive Skill Application' },
  review: { stepNum: 10, title: 'Spaced Review', subtitle: 'Spaced Retrieval Questions' },
  assessment: { stepNum: 11, title: 'Final Assessment', subtitle: 'Mastery & Diagnostic Evaluation' },
  complete: { stepNum: 11, title: 'Lesson Complete', subtitle: 'Mastery Achievement' },
};

export const LessonEngine: React.FC<LessonEngineProps> = ({
  lessonData,
  user,
  onExit,
  onLessonFinished,
}) => {
  const [activeStep, setActiveStep] = useState<LessonSectionStep>('objective');
  const [savedStep, setSavedStep] = useState<LessonSectionStep | null>(null);

  const storageKey = `curiosity_lesson_state_${lessonData.id}`;

  // Practice tracking states
  const [practiceIndex, setPracticeIndex] = useState(0);
  const [practiceCorrectCount, setPracticeCorrectCount] = useState(0);
  const [hasAnsweredPracticeCurrent, setHasAnsweredPracticeCurrent] = useState(false);

  // Review tracking states
  const [reviewIndex, setReviewIndex] = useState(0);
  const [reviewCorrectCount, setReviewCorrectCount] = useState(0);
  const [hasAnsweredReviewCurrent, setHasAnsweredReviewCurrent] = useState(false);

  // Assessment results state
  const [assessmentScore, setAssessmentScore] = useState(0);
  const [assessmentTotal, setAssessmentTotal] = useState(lessonData.assessmentExercises.length);
  const [assessmentWeakTypes, setAssessmentWeakTypes] = useState<ExtendedExerciseType[]>([]);

  const nativeLang = user.nativeLanguage || 'hi';

  // Load saved lesson progress on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed.activeStep && parsed.activeStep !== 'objective' && parsed.activeStep !== 'complete') {
          setSavedStep(parsed.activeStep);
          if (parsed.practiceIndex !== undefined) setPracticeIndex(parsed.practiceIndex);
          if (parsed.practiceCorrectCount !== undefined) setPracticeCorrectCount(parsed.practiceCorrectCount);
        }
      }
    } catch {
      // ignore parsing error
    }
  }, [storageKey]);

  // Save lesson progress whenever step or index changes
  useEffect(() => {
    if (activeStep !== 'complete') {
      try {
        localStorage.setItem(
          storageKey,
          JSON.stringify({
            activeStep,
            practiceIndex,
            practiceCorrectCount,
            savedAt: Date.now(),
          })
        );
      } catch {
        // ignore storage error
      }
    }
  }, [activeStep, practiceIndex, practiceCorrectCount]);

  const handleStepChange = (step: LessonSectionStep) => {
    playSoundEffectEffect('tap');
    setActiveStep(step);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Resume Handler
  const handleResumeSaved = () => {
    if (savedStep) {
      playSoundEffectEffect('tap');
      setActiveStep(savedStep);
      setSavedStep(null);
    }
  };

  // Practice Handlers
  const handlePracticeAnswer = (isCorrect: boolean) => {
    setHasAnsweredPracticeCurrent(true);
    if (isCorrect) setPracticeCorrectCount((prev) => prev + 1);
  };

  const handleNextPractice = () => {
    playSoundEffectEffect('tap');
    setHasAnsweredPracticeCurrent(false);
    if (practiceIndex + 1 < lessonData.practiceExercises.length) {
      setPracticeIndex((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      handleStepChange('review');
    }
  };

  // Review Handlers
  const handleReviewAnswer = (isCorrect: boolean) => {
    setHasAnsweredReviewCurrent(true);
    if (isCorrect) setReviewCorrectCount((prev) => prev + 1);
  };

  const handleNextReview = () => {
    playSoundEffectEffect('tap');
    setHasAnsweredReviewCurrent(false);
    if (reviewIndex + 1 < lessonData.reviewExercises.length) {
      setReviewIndex((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      handleStepChange('assessment');
    }
  };

  // Assessment Handler
  const handleAssessmentComplete = (score: number, total: number, weakTypes: ExtendedExerciseType[]) => {
    setAssessmentScore(score);
    setAssessmentTotal(total);
    setAssessmentWeakTypes(weakTypes);
    setActiveStep('complete');
  };

  const currentPractice = lessonData.practiceExercises[practiceIndex];
  const currentReview = lessonData.reviewExercises[reviewIndex];
  const currentStepMeta = STEP_METADATA[activeStep];
  const overallProgressPercent = Math.min(100, Math.round((currentStepMeta.stepNum / 11) * 100));

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pb-24 font-sans selection:bg-emerald-500 selection:text-slate-950">
      {/* Guided Progression Header (Clean, Modern, No dense stage table) */}
      <header className="sticky top-0 z-40 bg-slate-900/98 backdrop-blur-md border-b border-slate-800 px-4 py-3 shadow-md">
        <div className="max-w-lg mx-auto flex items-center justify-between">
          {/* Exit Button (48px Touch Target) */}
          <button
            onClick={() => {
              playSoundEffectEffect('tap');
              onExit();
            }}
            className="p-3 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-2xl border border-slate-700 transition flex items-center space-x-1 text-xs font-bold min-w-[48px] min-h-[48px] justify-center"
            aria-label="Exit Lesson"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="hidden sm:inline ml-1">Exit</span>
          </button>

          {/* Concise Guided Step Indicator */}
          <div className="text-center px-2 flex-1">
            <span className="text-xs font-black uppercase tracking-wider text-emerald-400">
              Step {currentStepMeta.stepNum} of 11: {currentStepMeta.title}
            </span>
            <h1 className="text-sm font-bold text-white truncate max-w-xs mx-auto mt-0.5">
              {lessonData.title}
            </h1>
          </div>

          {/* Actual reward is determined by the assessment; replays do not repeat it. */}
          <div className="flex items-center space-x-1.5 bg-slate-800/90 px-3 py-2 rounded-2xl border border-slate-700 text-xs font-black text-amber-400 min-h-[44px]">
            <Sparkles className="w-4 h-4 fill-amber-400" />
            <span>{user.completedLessonIds.includes(lessonData.id) ? 'No repeat XP' : 'XP on first completion'}</span>
          </div>
        </div>

        {/* Smooth Overall Progress Bar */}
        {activeStep !== 'complete' && (
          <div className="max-w-lg mx-auto mt-2.5">
            <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-800">
              <div
                className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full rounded-full transition-all duration-500"
                style={{ width: `${Math.max(overallProgressPercent, 8)}%` }}
              />
            </div>
          </div>
        )}
      </header>

      {/* Mode Indicator Banner */}
      {user.learningMode === 'english_plus_secondary' && activeStep !== 'complete' && (
        <div className="bg-amber-500/10 border-b border-amber-500/20 px-4 py-2 text-center text-xs font-bold text-amber-300 flex items-center justify-center space-x-2">
          <span>🇪🇸</span>
          <span>English + Spanish Active • Primary Target: English</span>
        </div>
      )}

      {/* Resume Banner for returning learners */}
      {savedStep && activeStep === 'objective' && (
        <div className="max-w-lg mx-auto px-4 pt-4">
          <div className="bg-gradient-to-r from-indigo-950 via-slate-900 to-indigo-950 border border-indigo-500/40 p-5 rounded-3xl flex items-center justify-between shadow-xl">
            <div>
              <span className="text-xs font-black uppercase text-indigo-300 tracking-wider">Welcome Back!</span>
              <p className="text-sm font-bold text-white mt-0.5">
                Resume from <strong className="text-emerald-400">{STEP_METADATA[savedStep]?.title || savedStep}</strong>
              </p>
            </div>
            <button
              onClick={handleResumeSaved}
              className="px-5 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-black text-xs rounded-2xl border border-indigo-400 shadow-lg transition flex items-center space-x-1.5 min-h-[44px]"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Resume</span>
            </button>
          </div>
        </div>
      )}

      {/* Main Content Progression Container */}
      <main className="w-full max-w-lg mx-auto px-4 pt-6 space-y-6 pb-28">
        {/* STAGE 1: WELCOME & OBJECTIVES */}
        {activeStep === 'objective' && (
          <div className="space-y-6 animate-fade-in">
            <div className="bg-gradient-to-tr from-emerald-950/70 via-slate-900 to-indigo-950/70 border-2 border-emerald-500/30 p-6 rounded-3xl space-y-5 shadow-2xl">
              <div className="w-16 h-16 bg-emerald-500/20 border border-emerald-500/40 rounded-2xl flex items-center justify-center text-4xl shadow-inner">
                {lessonData.icon || '👋'}
              </div>

              <div>
                <span className="text-xs font-black uppercase tracking-widest text-emerald-400 block">
                  CEFR {lessonData.cefr} • Unit 1
                </span>
                <h2 className="text-2xl font-black text-white mt-1">{lessonData.learningObjective.title}</h2>
                <p className="text-base text-slate-300 mt-2 leading-relaxed font-medium">
                  {lessonData.learningObjective.descriptionsByLang?.[nativeLang] || lessonData.learningObjective.description}
                </p>
              </div>

              <div className="border-t border-slate-800 pt-4 space-y-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                  Today you will learn to:
                </span>
                <div className="space-y-2.5">
                  {(
                    lessonData.learningObjective.canDoByLang?.[nativeLang] ||
                    lessonData.learningObjective.canDoStatements
                  ).map((statement, idx) => (
                    <div key={idx} className="flex items-start space-x-3 text-sm font-semibold text-slate-200">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{statement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Offline Audio Downloader */}
            <LessonAudioDownloader lessonId={lessonData.id} lessonTitle={lessonData.title} />

            {/* 56px Continue CTA */}
            <button
              onClick={() => handleStepChange('warmup')}
              className="w-full h-14 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black rounded-2xl shadow-xl text-base uppercase tracking-wider flex items-center justify-center space-x-2 transition active:scale-[0.98] cursor-pointer"
            >
              <span>Begin Step 2: Warm-Up Activation</span>
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}

        {/* STAGE 2: WARM-UP ACTIVATION */}
        {activeStep === 'warmup' && (
          <WarmUpView
            nativeLang={nativeLang}
            learningMode={user.learningMode}
            secondaryLang={user.secondaryLanguage}
            onCompleteWarmup={() => handleStepChange('vocabulary')}
          />
        )}

        {/* STAGE 3: CHUNKED VOCABULARY */}
        {activeStep === 'vocabulary' && (
          <ChunkedVocabView
            vocabulary={lessonData.vocabulary}
            nativeLang={nativeLang}
            learningMode={user.learningMode}
            secondaryLang={user.secondaryLanguage}
            onCompleteVocab={() => handleStepChange('expressions')}
          />
        )}

        {/* STAGE 4: CORE EXPRESSIONS */}
        {activeStep === 'expressions' && (
          <div className="space-y-6 animate-fade-in">
            <div className="bg-slate-900 border border-slate-800 p-5 rounded-3xl space-y-1">
              <span className="text-xs font-black uppercase text-indigo-400 tracking-wider block">
                Conversational Chunks
              </span>
              <h2 className="text-xl font-black text-white">Core Expressions</h2>
              <p className="text-sm text-slate-300 mt-1">
                Natural English spoken phrases for daily greetings and professional introductions.
              </p>
            </div>

            <div className="space-y-3">
              {lessonData.expressions.map((exp) => (
                <ExpressionCard
                  key={exp.id}
                  item={exp}
                  nativeLang={nativeLang}
                  learningMode={user.learningMode}
                  secondaryLang={user.secondaryLanguage}
                />
              ))}
            </div>

            <button
              onClick={() => handleStepChange('discovery')}
              className="w-full h-14 bg-indigo-600 hover:bg-indigo-500 text-white font-black rounded-2xl shadow-xl text-base uppercase tracking-wider flex items-center justify-center space-x-2 transition active:scale-[0.98] cursor-pointer"
            >
              <span>Continue to Step 5: Pattern Discovery</span>
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}

        {/* STAGE 5: GRAMMAR DISCOVERY */}
        {activeStep === 'discovery' && (
          <GrammarDiscoveryView
            nativeLang={nativeLang}
            learningMode={user.learningMode}
            secondaryLang={user.secondaryLanguage}
            onCompleteDiscovery={() => handleStepChange('grammar')}
          />
        )}

        {/* STAGE 6: FORMAL GRAMMAR INSIGHTS */}
        {activeStep === 'grammar' && (
          <div className="space-y-6 animate-fade-in">
            <GrammarView grammar={lessonData.grammar} nativeLang={nativeLang} />

            <button
              onClick={() => handleStepChange('mistakes')}
              className="w-full h-14 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black rounded-2xl shadow-xl text-base uppercase tracking-wider flex items-center justify-center space-x-2 transition active:scale-[0.98] cursor-pointer"
            >
              <span>Continue to Step 7: Common Mistakes</span>
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}

        {/* STAGE 7: COMMON MISTAKES */}
        {activeStep === 'mistakes' && (
          <div className="space-y-6 animate-fade-in">
            <CommonMistakesView mistakes={lessonData.commonMistakes} nativeLang={nativeLang} />

            <button
              onClick={() => handleStepChange('dialogues')}
              className="w-full h-14 bg-indigo-600 hover:bg-indigo-500 text-white font-black rounded-2xl shadow-xl text-base uppercase tracking-wider flex items-center justify-center space-x-2 transition active:scale-[0.98] cursor-pointer"
            >
              <span>Continue to Step 8: Realistic Dialogues</span>
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}

        {/* STAGE 8: MINI DIALOGUES */}
        {activeStep === 'dialogues' && (
          <div className="space-y-6 animate-fade-in">
            <div className="bg-slate-900 border border-slate-800 p-5 rounded-3xl space-y-1">
              <span className="text-xs font-black uppercase text-emerald-400 tracking-wider block">
                Native Spoken Immersion
              </span>
              <h2 className="text-xl font-black text-white">Realistic Mini Dialogues</h2>
              <p className="text-sm text-slate-300 mt-1">
                Listen to natural spoken dialogues across 4 practical adult communication contexts.
              </p>
            </div>

            <DialoguePlayer
              dialogues={lessonData.dialogues}
              nativeLang={nativeLang}
              learningMode={user.learningMode}
              secondaryLang={user.secondaryLanguage}
            />

            <button
              onClick={() => handleStepChange('practice')}
              className="w-full h-14 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 text-slate-950 font-black rounded-2xl shadow-xl text-base uppercase tracking-wider flex items-center justify-center space-x-2 transition active:scale-[0.98] cursor-pointer"
            >
              <span>Start Step 9: Extensive Practice</span>
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}

        {/* STAGE 9: PRACTICE EXERCISES */}
        {activeStep === 'practice' && (
          <div className="space-y-6 animate-fade-in">
            {/* Practice Progress Header */}
            <div className="bg-slate-900 border border-slate-800 p-4 sm:p-5 rounded-3xl space-y-2.5">
              <div className="flex items-center justify-between text-xs font-black">
                <span className="text-emerald-400 uppercase tracking-wider">
                  Practice Exercise {practiceIndex + 1} of {lessonData.practiceExercises.length}
                </span>
                <span className="text-slate-300">
                  {practiceCorrectCount} Correct
                </span>
              </div>

              <div className="w-full bg-slate-950 h-3 rounded-full overflow-hidden border border-slate-800">
                <div
                  className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full rounded-full transition-all duration-300"
                  style={{
                    width: `${((practiceIndex + 1) / lessonData.practiceExercises.length) * 100}%`
                  }}
                />
              </div>
            </div>

            {/* Exercise Card Canvas */}
            <div className="bg-slate-900 border border-slate-800 p-5 sm:p-6 rounded-3xl shadow-xl">
              <ExerciseRenderer
                key={currentPractice.id}
                exercise={currentPractice}
                user={user}
                onAnswerSubmit={handlePracticeAnswer}
              />

              {hasAnsweredPracticeCurrent && (
                <button
                  onClick={handleNextPractice}
                  className="w-full h-14 mt-5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm uppercase tracking-wider rounded-2xl shadow-lg transition active:scale-[0.98] flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span>
                    {practiceIndex + 1 < lessonData.practiceExercises.length
                      ? 'Next Practice Exercise'
                      : 'Continue to Spaced Review'}
                  </span>
                  <ChevronRight className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        )}

        {/* STAGE 10: SPACED REVIEW EXERCISES */}
        {activeStep === 'review' && (
          <div className="space-y-6 animate-fade-in">
            {/* Review Progress Header */}
            <div className="bg-slate-900 border border-slate-800 p-4 sm:p-5 rounded-3xl space-y-2.5">
              <div className="flex items-center justify-between text-xs font-black">
                <span className="text-amber-400 uppercase tracking-wider">
                  Review Question {reviewIndex + 1} of {lessonData.reviewExercises.length}
                </span>
                <span className="text-slate-300">{reviewCorrectCount} Correct</span>
              </div>

              <div className="w-full bg-slate-950 h-3 rounded-full overflow-hidden border border-slate-800">
                <div
                  className="bg-amber-400 h-full rounded-full transition-all duration-300"
                  style={{
                    width: `${((reviewIndex + 1) / lessonData.reviewExercises.length) * 100}%`
                  }}
                />
              </div>
            </div>

            {/* Review Card Canvas */}
            <div className="bg-slate-900 border border-slate-800 p-5 sm:p-6 rounded-3xl shadow-xl">
              <ExerciseRenderer
                key={currentReview.id}
                exercise={currentReview}
                user={user}
                onAnswerSubmit={handleReviewAnswer}
              />

              {hasAnsweredReviewCurrent && (
                <button
                  onClick={handleNextReview}
                  className="w-full h-14 mt-5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm uppercase tracking-wider rounded-2xl shadow-lg transition active:scale-[0.98] flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span>
                    {reviewIndex + 1 < lessonData.reviewExercises.length
                      ? 'Next Review Question'
                      : 'Generate Day Mastery Report'}
                  </span>
                  <ChevronRight className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        )}

        {/* STAGE 11: ASSESSMENT */}
        {activeStep === 'assessment' && (
          <AssessmentView
            assessmentExercises={lessonData.assessmentExercises}
            lessonData={lessonData}
            user={user}
            onComplete={handleAssessmentComplete}
          />
        )}

        {/* STAGE 12: MASTERY COMPLETION */}
        {activeStep === 'complete' && (
          <MasteryCompletionCard
            lessonId={lessonData.id}
            lessonData={lessonData}
            totalCorrect={assessmentScore}
            totalQuestions={assessmentTotal}
            weakTypes={assessmentWeakTypes}
            user={user}
            onFinishLesson={onLessonFinished}
            onRetryLesson={() => {
              try {
                localStorage.removeItem(storageKey);
              } catch {
                // ignore
              }
              setPracticeIndex(0);
              setPracticeCorrectCount(0);
              setActiveStep('objective');
            }}
          />
        )}
      </main>
    </div>
  );
};
