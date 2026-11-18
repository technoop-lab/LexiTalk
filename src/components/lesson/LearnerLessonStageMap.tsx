import React, { useState, useEffect } from 'react';
import {
  LessonNode,
  UserAcademyProfile,
} from '../../types';
import { CurriculumService, LessonStageDefinition } from '../../services/CurriculumService';
import {
  CheckCircle2,
  Lock,
  Play,
  Sparkles,
  ChevronRight,
  RotateCcw,
  BookOpen,
  Award,
  Zap
} from 'lucide-react';

interface LearnerLessonStageMapProps {
  lesson: LessonNode;
  user: UserAcademyProfile;
  onSelectStage: (stageId: string) => void;
  onStartFullLesson: () => void;
}

export const LearnerLessonStageMap: React.FC<LearnerLessonStageMapProps> = ({
  lesson,
  user,
  onSelectStage,
  onStartFullLesson,
}) => {
  const [savedActiveStep, setSavedActiveStep] = useState<string>('objective');
  const [isLessonCompleted, setIsLessonCompleted] = useState<boolean>(
    user.completedLessonIds.includes(lesson.id)
  );

  const storageKey = `curiosity_lesson_state_${lesson.id}`;

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed.activeStep) {
          setSavedActiveStep(parsed.activeStep);
        }
      }
    } catch {
      // ignore parsing error
    }
  }, [storageKey]);

  const stages: LessonStageDefinition[] = CurriculumService.getLessonStageSequence(lesson.id);

  // Derive unlocked status using progressive disclosure logic
  // Stage step indices
  const getStageStatus = (stage: LessonStageDefinition, index: number): 'completed' | 'unlocked' | 'locked' => {
    if (isLessonCompleted) return 'completed';

    // Index of currently saved step
    const currentStepIndex = stages.findIndex((s) => s.id === savedActiveStep);
    const activeIdx = currentStepIndex >= 0 ? currentStepIndex : 0;

    if (index < activeIdx) return 'completed';
    if (index === activeIdx) return 'unlocked';
    return 'locked';
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 sm:p-6 space-y-5 shadow-2xl my-4">
      {/* Lesson Stage Header Card */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-0.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-black rounded-lg uppercase">
              CEFR {lesson.cefr} Stage
            </span>
            <span className="text-xs text-slate-400 font-bold">
              Lesson Journey Map
            </span>
          </div>
          <h2 className="text-lg sm:text-xl font-black text-white tracking-tight flex items-center space-x-2">
            <span>👋</span>
            <span>{lesson.title}</span>
          </h2>
          <p className="text-xs text-slate-400">
            {lesson.description || 'Master greetings, self-introductions, and verb BE'}
          </p>
        </div>

        <button
          onClick={onStartFullLesson}
          className="px-5 py-3 bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-black text-xs uppercase tracking-wider rounded-2xl shadow-xl flex items-center justify-center space-x-2 hover:scale-105 transition shrink-0"
        >
          <Play className="w-4 h-4 fill-slate-950" />
          <span>{savedActiveStep !== 'objective' ? 'Resume Lesson' : 'Start Full Lesson'}</span>
        </button>
      </div>

      {/* Stage Roadmap Visualizer */}
      <div className="space-y-2">
        <h3 className="text-xs font-black text-slate-400 uppercase tracking-wider block font-mono">
          Lesson Stage Sequence ({stages.length} Pedagogical Steps)
        </h3>

        <div className="relative pl-4 border-l-2 border-slate-800 space-y-3 py-2">
          {stages.map((stg, idx) => {
            const status = getStageStatus(stg, idx);
            const isCompleted = status === 'completed';
            const isUnlocked = status === 'unlocked';
            const isLocked = status === 'locked';

            return (
              <div
                key={stg.id}
                className={`relative flex items-center justify-between p-3 rounded-2xl border transition ${
                  isUnlocked
                    ? 'bg-slate-950 border-emerald-500/80 shadow-lg ring-1 ring-emerald-500/50'
                    : isCompleted
                    ? 'bg-slate-950/80 border-slate-800 text-slate-300'
                    : 'bg-slate-950/30 border-slate-800/50 opacity-60'
                }`}
              >
                {/* Connector Dot */}
                <span
                  className={`absolute -left-[23px] top-4 w-3.5 h-3.5 rounded-full border-2 ${
                    isCompleted
                      ? 'bg-emerald-500 border-emerald-400'
                      : isUnlocked
                      ? 'bg-teal-400 border-white animate-pulse'
                      : 'bg-slate-800 border-slate-700'
                  }`}
                />

                <div className="flex items-center space-x-3">
                  <span className="text-xl shrink-0">{stg.icon}</span>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-black text-slate-200">
                        {stg.stageNumber}. {stg.title}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                      {stg.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-2 shrink-0">
                  {isCompleted && (
                    <span className="px-2.5 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-bold rounded-xl flex items-center space-x-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      <span>DONE</span>
                    </span>
                  )}

                  {isUnlocked && (
                    <button
                      onClick={() => onSelectStage(stg.id)}
                      className="px-3 py-1.5 bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-black text-[11px] rounded-xl uppercase tracking-wider flex items-center space-x-1 shadow-md hover:scale-105 transition"
                    >
                      <span>CURRENT</span>
                      <ChevronRight className="w-3 h-3" />
                    </button>
                  )}

                  {isLocked && (
                    <span className="px-2 py-1 bg-slate-800 text-slate-500 border border-slate-700/50 text-[10px] font-bold rounded-xl flex items-center space-x-1">
                      <Lock className="w-3 h-3" />
                      <span>LOCKED</span>
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
