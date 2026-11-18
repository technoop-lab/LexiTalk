import React, { useEffect } from 'react';
import { Trophy, Star, Award, RotateCcw, ArrowRight, ShieldCheck, CheckCircle2, MessageSquare } from 'lucide-react';
import { MasteryState, ExtendedExerciseType, UserAcademyProfile, DetailedLessonData } from '../../types';
import { ProgressService } from '../../services/ProgressService';
import { playSoundEffectEffect } from '../../utils/audioUtils';

interface MasteryCompletionCardProps {
  lessonId: string;
  lessonData: DetailedLessonData;
  totalCorrect: number;
  totalQuestions: number;
  weakTypes: ExtendedExerciseType[];
  user: UserAcademyProfile;
  onFinishLesson: (updatedUser: UserAcademyProfile) => void;
  onRetryLesson: () => void;
}

export const MasteryCompletionCard: React.FC<MasteryCompletionCardProps> = ({
  lessonId,
  lessonData,
  totalCorrect,
  totalQuestions,
  weakTypes,
  user,
  onFinishLesson,
  onRetryLesson,
}) => {
  const accuracyPercent = Math.round((totalCorrect / Math.max(totalQuestions, 1)) * 100);

  let state: MasteryState = 'not_started';
  let stars = 1;

  if (accuracyPercent >= 90) {
    state = 'mastered';
    stars = 3;
  } else if (accuracyPercent >= 80) {
    state = 'completed';
    stars = 3;
  } else if (accuracyPercent >= 60) {
    state = 'practicing';
    stars = 2;
  } else {
    state = 'learning';
    stars = 1;
  }

  const isNewCompletion = !user.completedLessonIds.includes(lessonId);
  const xpEarned = isNewCompletion ? 150 + stars * 20 : 0;
  const gemsEarned = isNewCompletion ? stars * 10 : 0;

  // This assessment records overall accuracy only; it does not produce skill subscores.

  useEffect(() => {
    if (state === 'mastered' || state === 'completed') {
      playSoundEffectEffect('victory');
    }
  }, [state]);

  const handleClaim = () => {
    playSoundEffectEffect('tap');

    // Remove temporary storage state
    try {
      localStorage.removeItem(`curiosity_lesson_state_${lessonId}`);
    } catch {
      // ignore
    }

    const updatedUser = ProgressService.recordLessonAttempt(lessonId, totalCorrect, totalQuestions, weakTypes);
    onFinishLesson(updatedUser);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl space-y-6 text-center shadow-2xl animate-fade-in max-w-xl mx-auto">
      {/* Trophy Badge */}
      <div className="relative inline-block">
        <div className="w-24 h-24 bg-gradient-to-tr from-amber-500 to-yellow-300 rounded-full flex items-center justify-center text-slate-950 shadow-2xl mx-auto shadow-amber-500/30 ring-8 ring-amber-500/10">
          <Trophy className="w-12 h-12" />
        </div>
        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-slate-950 text-amber-400 border border-amber-500/40 text-[10px] font-black uppercase px-3 py-0.5 rounded-full whitespace-nowrap shadow">
          {state.toUpperCase()}
        </span>
      </div>

      <div>
        <h2 className="text-2xl font-black text-white">Lesson Completed!</h2>
        <p className="text-xs text-slate-400 mt-1">{lessonData.cefr} • {lessonData.title}</p>
      </div>

      {/* Stars */}
      <div className="flex justify-center space-x-3">
        {[1, 2, 3].map((starNum) => (
          <Star
            key={starNum}
            className={`w-10 h-10 ${
              starNum <= stars
                ? 'text-yellow-400 fill-yellow-400 animate-bounce'
                : 'text-slate-800 fill-slate-800'
            }`}
          />
        ))}
      </div>

      {/* Primary Metrics Grid */}
      <div className="grid grid-cols-3 gap-2 bg-slate-950 p-4 rounded-2xl border border-slate-800/80">
        <div>
          <span className="text-[10px] uppercase font-bold text-slate-400 block">Overall Accuracy</span>
          <span className="text-lg font-black text-emerald-400">{accuracyPercent}%</span>
        </div>
        <div>
          <span className="text-[10px] uppercase font-bold text-slate-400 block">XP on first completion</span>
          <span className="text-lg font-black text-amber-400">+{xpEarned}</span>
        </div>
        <div>
          <span className="text-[10px] uppercase font-bold text-slate-400 block">Gems on first completion</span>
          <span className="text-lg font-black text-sky-400">+{gemsEarned}</span>
        </div>
      </div>

      <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800/80 text-left space-y-2">
        <span className="text-[10px] uppercase font-black text-slate-400 tracking-wider block">Assessment result</span>
        <p className="text-xs text-slate-300">{totalCorrect} of {totalQuestions} scored items correct ({accuracyPercent}%). This is an in-app practice result, not a CEFR proficiency assessment.</p>
      </div>

      <div className="bg-gradient-to-tr from-emerald-950/60 via-slate-950 to-indigo-950/60 border border-emerald-500/40 p-4 rounded-2xl text-left space-y-2">
        <div className="flex items-center space-x-2 text-emerald-400 font-black text-xs uppercase tracking-wider">
          <MessageSquare className="w-4 h-4" />
          <span>LESSON OBJECTIVE</span>
        </div>
        <p className="text-xs text-slate-300">{lessonData.learningObjective.description}</p>
      </div>

      <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800/80 text-left space-y-2">
        <span className="text-[10px] uppercase font-black text-slate-400 tracking-wider block">Can-do statements in this lesson</span>
        <ul className="text-xs space-y-1.5 text-slate-300">
          {lessonData.learningObjective.canDoStatements.slice(0, 3).map((statement, index) => (
            <li key={index} className="flex items-start space-x-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
              <span>{statement}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Recommended Next Step */}
      <div className="bg-indigo-950/40 border border-indigo-500/30 p-3.5 rounded-2xl text-left space-y-1">
        <span className="text-[10px] font-black uppercase text-indigo-300 tracking-wider block">Recommended Next Step</span>
        <p className="text-xs text-slate-300 font-medium">
          {accuracyPercent >= 80
            ? 'You may continue or review this lesson based on your goals.'
            : 'Consider reviewing this lesson before continuing.'} Replays update the recorded score but do not issue another first-completion reward.
        </p>
      </div>

      {/* Weak Areas Recommendation */}
      {weakTypes.length > 0 && (
        <div className="bg-slate-950 p-3.5 rounded-2xl border border-slate-800/80 text-left space-y-1">
          <span className="text-[10px] uppercase font-bold text-amber-400 block">Areas to Practice:</span>
          <div className="flex flex-wrap gap-1">
            {weakTypes.map((wt, i) => (
              <span key={i} className="text-[10px] bg-amber-500/10 text-amber-300 border border-amber-500/20 px-2 py-0.5 rounded-md">
                {wt.replace('_', ' ')}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="space-y-2 pt-2">
        <button
          onClick={handleClaim}
          className="w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 text-white font-black rounded-2xl shadow-xl text-sm uppercase tracking-wider flex items-center justify-center space-x-2 transition active:scale-95"
        >
          <span>{isNewCompletion ? 'RECORD RESULT & CLAIM FIRST-COMPLETION REWARD' : 'SAVE REVIEW RESULT & CONTINUE'}</span>
          <ArrowRight className="w-5 h-5" />
        </button>

        <button
          onClick={onRetryLesson}
          className="w-full py-3 bg-slate-800 hover:bg-slate-750 text-slate-300 font-bold text-xs rounded-2xl flex items-center justify-center space-x-2 transition"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Review / Practice Lesson Again</span>
        </button>
      </div>
    </div>
  );
};
