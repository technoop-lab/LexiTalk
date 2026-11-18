import React from 'react';
import {
  BookOpen,
  CheckCircle2,
  Lock,
  Play,
  RotateCcw,
  Sparkles,
  Award,
  ChevronLeft,
  GraduationCap
} from 'lucide-react';
import { CourseUnit, LessonNode, UserAcademyProfile } from '../../types';
import { CurriculumService } from '../../services/CurriculumService';
import { playSoundEffectEffect } from '../../utils/audioUtils';

interface UnitDetailViewProps {
  unit: CourseUnit;
  user: UserAcademyProfile;
  onSelectLesson: (lesson: LessonNode) => void;
  onOpenGuidebook: (unit: CourseUnit) => void;
  onBack: () => void;
}

export const UnitDetailView: React.FC<UnitDetailViewProps> = ({
  unit,
  user,
  onSelectLesson,
  onOpenGuidebook,
  onBack,
}) => {
  const targetLang = user.learningLanguage || 'en';
  const currStatus = CurriculumService.getCurriculumStatus(targetLang);
  const isAuthored = currStatus.curriculumState === 'AUTHORED_PRODUCTION';

  return (
    <div className="flex flex-col space-y-5 p-4 sm:p-5 pb-28 text-slate-900 dark:text-slate-100 w-full max-w-lg mx-auto">
      {/* Top Header */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300 rounded-xl transition flex items-center space-x-1 border border-[#D9E4FF] dark:border-transparent cursor-pointer btn-press"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back to Path</span>
        </button>

        <button
          onClick={() => {
            playSoundEffectEffect('tap');
            onOpenGuidebook(unit);
          }}
          className="px-3 py-1.5 bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-500/20 dark:hover:bg-indigo-500/30 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/30 text-xs font-bold rounded-xl transition flex items-center space-x-1 cursor-pointer btn-press shadow-xs"
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>Grammar Guidebook</span>
        </button>
      </div>

      {/* Unit Overview Banner */}
      <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 dark:from-emerald-950/80 dark:via-slate-900 dark:to-teal-950/80 border border-emerald-200 dark:border-emerald-500/30 rounded-3xl p-5 shadow-sm dark:shadow-xl space-y-3">
        <div className="flex items-center space-x-2">
          <span className="px-2.5 py-0.5 bg-emerald-100 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-400 text-[10px] font-black rounded-full uppercase border border-emerald-200 dark:border-emerald-500/30">
            Unit {unit.unitNumber} • {unit.cefr}
          </span>
          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Communicative Mastery</span>
        </div>

        <h2 className="text-xl font-black text-slate-900 dark:text-white">{unit.title}</h2>
        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{unit.description}</p>

        {/* Can-Do Outcomes Summary */}
        <div className="pt-2 border-t border-emerald-200/60 dark:border-slate-800/80 space-y-1.5">
          <span className="text-[10px] font-black uppercase text-slate-500 dark:text-slate-400 block tracking-wider">
            Can-Do Communicative Outcomes:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-700 dark:text-slate-200">
            <div className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
              <span>Greet people formally & casually</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
              <span>Introduce name, country & city</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
              <span>Use Verb 'BE' in present tense</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
              <span>Ask & answer basic origin questions</span>
            </div>
          </div>
        </div>
      </div>

      {/* Lessons List in Unit */}
      <div className="space-y-3">
        <h3 className="text-xs font-black uppercase text-slate-500 dark:text-slate-400 tracking-wider">
          Unit Lessons ({unit.lessons.length})
        </h3>

        {unit.lessons.map((lesson, idx) => {
          // Only Lesson 1 is authored in production for English
          const isPlayable = isAuthored && idx === 0;
          const isCompleted = user.completedLessonIds.includes(lesson.id);

          return (
            <div
              key={lesson.id}
              className={`p-4 rounded-3xl border transition flex items-center justify-between ${
                isPlayable
                  ? 'bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-850 border-[#D9E4FF] dark:border-slate-800 shadow-sm dark:shadow-lg'
                  : 'bg-slate-50/70 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800/60 opacity-60'
              }`}
            >
              <div className="flex items-center space-x-3.5">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl border ${
                  isCompleted
                    ? 'bg-emerald-100 dark:bg-emerald-500/20 border-emerald-200 dark:border-emerald-500/30 text-emerald-600 dark:text-emerald-400'
                    : isPlayable
                    ? 'bg-slate-100 dark:bg-slate-800 border-[#D9E4FF] dark:border-slate-700 text-slate-900 dark:text-white'
                    : 'bg-slate-100 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-500'
                }`}>
                  {lesson.icon}
                </div>

                <div className="space-y-0.5">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-black text-slate-900 dark:text-white">{lesson.title}</span>
                    {isCompleted && (
                      <span className="px-2 py-0.5 bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-[9px] font-black rounded-md border border-emerald-200 dark:border-emerald-500/30">
                        COMPLETED
                      </span>
                    )}
                    {!isPlayable && (
                      <span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[9px] font-black rounded-md flex items-center space-x-1 border border-slate-200 dark:border-transparent">
                        <Lock className="w-2.5 h-2.5" />
                        <span>UNAVAILABLE</span>
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-400">{lesson.description}</p>
                  <p className="text-[10px] text-slate-500">
                    18 Stages • {lesson.xpReward} XP Reward
                  </p>
                </div>
              </div>

              {isPlayable ? (
                <button
                  onClick={() => {
                    playSoundEffectEffect('tap');
                    onSelectLesson(lesson);
                  }}
                  className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-xs rounded-2xl shadow-md transition flex items-center space-x-1.5 cursor-pointer btn-press"
                >
                  {isCompleted ? <RotateCcw className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-slate-950" />}
                  <span>{isCompleted ? 'Review' : 'Start'}</span>
                </button>
              ) : (
                <div className="p-2 text-slate-400 dark:text-slate-600">
                  <Lock className="w-4 h-4" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
