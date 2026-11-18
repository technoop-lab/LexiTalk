import React from 'react';
import {
  Clock,
  Zap,
  BookOpen,
  Mic,
  Flame,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Activity
} from 'lucide-react';
import { playSoundEffectEffect } from '../../utils/audioUtils';

interface DailyGoalStepProps {
  selectedMinutes: number;
  onSelectMinutes: (minutes: number) => void;
  onContinue: () => void;
}

interface DailyCommitmentOption {
  minutes: number;
  label: string;
  intensity: 'Casual' | 'Regular' | 'Serious' | 'Intense' | 'Mastery';
  xpPerDay: number;
  lessonsPerDay: number;
  wordsPerDay: number;
  speakingMinPerDay: number;
  recommended?: boolean;
  color: string;
}

export const DailyGoalStep: React.FC<DailyGoalStepProps> = ({
  selectedMinutes,
  onSelectMinutes,
  onContinue,
}) => {
  const options: DailyCommitmentOption[] = [
    {
      minutes: 10,
      label: '10 Minutes / Day',
      intensity: 'Casual',
      xpPerDay: 15,
      lessonsPerDay: 1,
      wordsPerDay: 8,
      speakingMinPerDay: 3,
      color: 'emerald',
    },
    {
      minutes: 20,
      label: '20 Minutes / Day',
      intensity: 'Regular',
      xpPerDay: 30,
      lessonsPerDay: 2,
      wordsPerDay: 15,
      speakingMinPerDay: 7,
      recommended: true,
      color: 'indigo',
    },
    {
      minutes: 30,
      label: '30 Minutes / Day',
      intensity: 'Serious',
      xpPerDay: 50,
      lessonsPerDay: 3,
      wordsPerDay: 25,
      speakingMinPerDay: 12,
      color: 'sky',
    },
    {
      minutes: 45,
      label: '45 Minutes / Day',
      intensity: 'Intense',
      xpPerDay: 75,
      lessonsPerDay: 4,
      wordsPerDay: 35,
      speakingMinPerDay: 18,
      color: 'amber',
    },
    {
      minutes: 60,
      label: '60 Minutes / Day',
      intensity: 'Mastery',
      xpPerDay: 100,
      lessonsPerDay: 5,
      wordsPerDay: 50,
      speakingMinPerDay: 25,
      color: 'purple',
    },
  ];

  const currentOption = options.find((o) => o.minutes === selectedMinutes) || options[1];

  // Weekly projections
  const weeklyMinutes = currentOption.minutes * 7;
  const weeklyWords = currentOption.wordsPerDay * 7;
  const weeklyXp = currentOption.xpPerDay * 7;

  return (
    <div className="flex-1 flex flex-col justify-between p-4 sm:p-6 select-none animate-fade-in text-slate-900 dark:text-white">
      {/* Header */}
      <div className="text-center space-y-2 pt-2">
        <span className="text-[10px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-widest bg-emerald-50 dark:bg-emerald-500/15 border border-emerald-200 dark:border-emerald-500/30 px-3 py-1 rounded-full inline-block">
          Daily Consistency Engine
        </span>

        <h2 className="text-2xl sm:text-3xl font-black tracking-tight font-display">
          How much time can you practice daily?
        </h2>

        <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
          Pick a pace you can keep. Short daily sessions beat long irregular ones, and you can change this any time.
        </p>
      </div>

      {/* Main Apple-Fitness Inspired Overview Card */}
      <div className="p-4 sm:p-5 rounded-3xl bg-white dark:bg-slate-900 border border-[#D8E3FF] dark:border-slate-800 shadow-xl space-y-4 my-2">
        {/* Activity Ring & Selected Metric Summary */}
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-[10px] font-black uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              Selected Target ({currentOption.intensity})
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white font-display">
              {currentOption.label}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              ~{weeklyMinutes} mins / week • ~{weeklyWords} words mastered
            </p>
          </div>

          {/* Glowing Ring Gauge */}
          <div className="relative w-16 h-16 flex items-center justify-center shrink-0">
            <svg className="w-16 h-16 transform -rotate-90">
              <circle
                cx="32"
                cy="32"
                r="26"
                stroke="currentColor"
                strokeWidth="6"
                className="text-slate-100 dark:text-slate-800"
                fill="transparent"
              />
              <circle
                cx="32"
                cy="32"
                r="26"
                stroke="url(#fitnessGrad)"
                strokeWidth="6"
                strokeDasharray="163.36"
                strokeDashoffset={163.36 - (163.36 * (currentOption.minutes / 60))}
                strokeLinecap="round"
                fill="transparent"
                className="transition-all duration-500"
              />
              <defs>
                <linearGradient id="fitnessGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#335CFF" />
                  <stop offset="50%" stopColor="#6D5DF6" />
                  <stop offset="100%" stopColor="#10B981" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <Flame className="w-5 h-5 text-amber-500 fill-current animate-flame" />
            </div>
          </div>
        </div>

        {/* 4 Stat Metric Pills */}
        <div className="grid grid-cols-4 gap-1.5 pt-1">
          <div className="p-2 rounded-xl bg-[#F8FAFF] dark:bg-slate-950 border border-[#D8E3FF] dark:border-slate-800 text-center">
            <span className="text-xs font-black text-indigo-600 dark:text-indigo-400 block">+{currentOption.xpPerDay}</span>
            <span className="text-[9px] text-slate-500 dark:text-slate-400 font-bold">XP / day</span>
          </div>

          <div className="p-2 rounded-xl bg-[#F8FAFF] dark:bg-slate-950 border border-[#D8E3FF] dark:border-slate-800 text-center">
            <span className="text-xs font-black text-emerald-600 dark:text-emerald-400 block">{currentOption.lessonsPerDay}</span>
            <span className="text-[9px] text-slate-500 dark:text-slate-400 font-bold">Lessons</span>
          </div>

          <div className="p-2 rounded-xl bg-[#F8FAFF] dark:bg-slate-950 border border-[#D8E3FF] dark:border-slate-800 text-center">
            <span className="text-xs font-black text-amber-600 dark:text-amber-400 block">{currentOption.wordsPerDay}</span>
            <span className="text-[9px] text-slate-500 dark:text-slate-400 font-bold">Words</span>
          </div>

          <div className="p-2 rounded-xl bg-[#F8FAFF] dark:bg-slate-950 border border-[#D8E3FF] dark:border-slate-800 text-center">
            <span className="text-xs font-black text-sky-600 dark:text-sky-400 block">{currentOption.speakingMinPerDay}m</span>
            <span className="text-[9px] text-slate-500 dark:text-slate-400 font-bold">Speaking</span>
          </div>
        </div>
      </div>

      {/* Options List */}
      <div className="space-y-2 max-h-[30vh] overflow-y-auto pr-1">
        {options.map((opt) => {
          const isSelected = selectedMinutes === opt.minutes;

          return (
            <div
              key={opt.minutes}
              onClick={() => {
                playSoundEffectEffect('tap');
                onSelectMinutes(opt.minutes);
              }}
              className={`p-3 rounded-2xl border transition-all duration-200 cursor-pointer btn-press flex items-center justify-between ${
                isSelected
                  ? 'bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-transparent border-indigo-500 text-slate-900 dark:text-white ring-1 ring-indigo-500/30 shadow-md'
                  : 'bg-white dark:bg-slate-900 border-[#D8E3FF] dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-850 text-slate-700 dark:text-slate-300'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div
                  className={`w-8 h-8 rounded-xl flex items-center justify-center font-black text-xs ${
                    isSelected
                      ? 'bg-gradient-to-br from-[#335CFF] to-[#6D5DF6] text-white shadow-sm'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                  }`}
                >
                  {opt.minutes}m
                </div>

                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-black">{opt.label}</span>
                    {opt.recommended && (
                      <span className="text-[9px] font-black uppercase bg-emerald-500 text-white px-2 py-0.2 rounded-full">
                        Recommended
                      </span>
                    )}
                  </div>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400">
                    {opt.intensity} • {opt.xpPerDay} XP/day • {opt.wordsPerDay} words
                  </span>
                </div>
              </div>

              <div
                className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                  isSelected ? 'border-indigo-500 bg-indigo-500 text-white' : 'border-slate-300 dark:border-slate-700'
                }`}
              >
                {isSelected && <CheckCircle2 className="w-3 h-3 fill-current" />}
              </div>
            </div>
          );
        })}
      </div>

      {/* Continue Button */}
      <div className="pt-2">
        <button
          onClick={() => {
            playSoundEffectEffect('tap');
            onContinue();
          }}
          className="w-full py-4 rounded-2xl font-black text-xs uppercase tracking-wider shadow-xl transition-all duration-200 cursor-pointer flex items-center justify-center space-x-2 btn-press bg-gradient-to-r from-[#335CFF] via-[#6D5DF6] to-[#10B981] text-white hover:brightness-105 active:scale-98"
        >
          <span>Set Daily Target ({currentOption.minutes}m)</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
