import React from 'react';
import {
  Play,
  RotateCcw,
  CheckCircle2,
  Sparkles,
  BookOpen,
  X,
  Target,
  Zap,
  Award
} from 'lucide-react';
import { LessonNode, UserAcademyProfile } from '../../types';
import { CurriculumService } from '../../services/CurriculumService';
import { playSoundEffectEffect } from '../../utils/audioUtils';

interface LessonOverviewModalProps {
  lesson: LessonNode;
  user: UserAcademyProfile;
  onLaunchLesson: (lesson: LessonNode) => void;
  onClose: () => void;
}

export const LessonOverviewModal: React.FC<LessonOverviewModalProps> = ({
  lesson,
  user,
  onLaunchLesson,
  onClose,
}) => {
  const targetLang = user.learningLanguage || 'en';
  const detailedLesson = CurriculumService.getDetailedLesson(lesson.id, targetLang);
  const metrics = CurriculumService.getLessonMetrics(lesson.id, targetLang);

  const isCompleted = user.completedLessonIds.includes(lesson.id);
  const lessonRecord = user.detailedLessonProgress?.[lesson.id];

  const handleStart = () => {
    playSoundEffectEffect('tap');
    onLaunchLesson(lesson);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-900 border border-[#D9E4FF] dark:border-slate-800 rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-[#D9E4FF] dark:border-slate-800 flex items-center justify-between bg-white dark:bg-slate-900">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-100 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 flex items-center justify-center text-2xl">
              {lesson.icon}
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Lesson Overview • {lesson.cefr}
              </span>
              <h3 className="text-base font-black text-slate-900 dark:text-white">{lesson.title}</h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 flex items-center justify-center text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition cursor-pointer btn-press"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-4 flex-1">
          {/* Purpose & Description */}
          <div className="bg-slate-50 dark:bg-slate-850 p-3.5 rounded-2xl border border-[#D9E4FF] dark:border-slate-800 space-y-1">
            <span className="text-[10px] font-black uppercase text-slate-500 dark:text-slate-400 block">Lesson Purpose</span>
            <p className="text-xs text-slate-700 dark:text-slate-200 leading-relaxed">
              {detailedLesson?.learningObjective?.description || lesson.description}
            </p>
          </div>

          {/* Can-Do Outcomes */}
          {detailedLesson?.learningObjective?.canDoStatements && (
            <div className="space-y-2">
              <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                Can-Do Communicative Outcomes:
              </span>
              <div className="space-y-1.5">
                {detailedLesson.learningObjective.canDoStatements.map((stmt, i) => (
                  <div key={i} className="flex items-start space-x-2 text-xs text-slate-700 dark:text-slate-200 bg-slate-50 dark:bg-slate-950/60 p-2.5 rounded-xl border border-[#D9E4FF] dark:border-slate-800/80">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>{stmt}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Target Breakdown Grid */}
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-slate-50 dark:bg-slate-950/60 p-2.5 rounded-2xl border border-[#D9E4FF] dark:border-slate-800 text-center">
              <span className="text-lg block">🔤</span>
              <span className="text-xs font-black text-slate-900 dark:text-white block mt-0.5">
                {metrics?.vocabularyCount ?? 0} Items
              </span>
              <span className="text-[9px] uppercase font-bold text-slate-500 dark:text-slate-400">Vocabulary</span>
            </div>

            <div className="bg-slate-50 dark:bg-slate-950/60 p-2.5 rounded-2xl border border-[#D9E4FF] dark:border-slate-800 text-center">
              <span className="text-lg block">📘</span>
              <span className="text-xs font-black text-slate-900 dark:text-white block mt-0.5">
                Verb 'BE'
              </span>
              <span className="text-[9px] uppercase font-bold text-slate-500 dark:text-slate-400">Grammar Target</span>
            </div>

            <div className="bg-slate-50 dark:bg-slate-950/60 p-2.5 rounded-2xl border border-[#D9E4FF] dark:border-slate-800 text-center">
              <span className="text-lg block">🎯</span>
              <span className="text-xs font-black text-slate-900 dark:text-white block mt-0.5">
                18 Stages
              </span>
              <span className="text-[9px] uppercase font-bold text-slate-500 dark:text-slate-400">Pedagogy</span>
            </div>
          </div>

          {/* User Completion Status */}
          {lessonRecord && (
            <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-500/20 p-3 rounded-2xl flex items-center justify-between text-xs">
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span className="font-bold text-emerald-800 dark:text-emerald-300">Previous Accuracy: {lessonRecord.accuracyPercent}%</span>
              </div>
              <span className="text-slate-500 dark:text-slate-400 text-[10px]">Attempts: {lessonRecord.attemptsCount}</span>
            </div>
          )}

          {/* Action Buttons */}
          <div className="pt-2 space-y-2">
            <button
              onClick={handleStart}
              className="w-full py-3.5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-xs rounded-2xl shadow-md hover:scale-[1.01] active:scale-98 transition flex items-center justify-center space-x-2 cursor-pointer btn-press"
            >
              {isCompleted ? <RotateCcw className="w-4 h-4" /> : <Play className="w-4 h-4 fill-slate-950" />}
              <span>{isCompleted ? 'REVIEW LESSON 1' : 'START LESSON (18 STAGES)'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
