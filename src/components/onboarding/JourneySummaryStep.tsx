import React from 'react';
import {
  Award,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Flame,
  Globe2,
  BookOpen,
  MessageSquare,
  Volume2,
  Compass,
  Zap,
  Target
} from 'lucide-react';
import { LearningGoal, NativeLanguageCode } from '../../types';
import { AccentCode } from './VoiceAccentStep';
import { playSoundEffectEffect } from '../../utils/audioUtils';

interface JourneySummaryStepProps {
  userName: string;
  nativeLang: NativeLanguageCode;
  goal: LearningGoal;
  dailyMinutes: number;
  accent: AccentCode;
  onBeginDay1: () => void;
  onExploreCourse?: () => void;
}

export const JourneySummaryStep: React.FC<JourneySummaryStepProps> = ({
  userName,
  nativeLang,
  goal,
  dailyMinutes,
  accent,
  onBeginDay1,
  onExploreCourse,
}) => {
  const goalNames: Record<LearningGoal, string> = {
    speaking: 'Speak with Confidence',
    work: 'Job & Workplace',
    travel: 'Travel Abroad',
    everyday: 'Daily Life & Social',
    exams: 'Study & Exams',
    fluency: 'Complete Fluency',
    business: 'Business English',
    interviews: 'Job Interviews',
    academic: 'Academic English',
  };

  const accentNames: Record<AccentCode, string> = {
    'en-IN': 'Indian English (🇮🇳)',
    'en-US': 'American English (🇺🇸)',
    'en-GB': 'British English (🇬🇧)',
  };

  const nativeNames: Record<string, string> = {
    hi: 'Hindi (हिन्दी)',
    bn: 'Bengali (বাংলা)',
    ta: 'Tamil (தமிழ்)',
    te: 'Telugu (తెలుగు)',
    mr: 'Marathi (मराठी)',
    gu: 'Gujarati (ગુજરાતી)',
    pa: 'Punjabi (ਪੰਜਾਬੀ)',
    es: 'Spanish (Español)',
  };

  const handleStart = () => {
    playSoundEffectEffect('victory');
    onBeginDay1();
  };

  return (
    <div className="flex-1 flex flex-col justify-between p-4 sm:p-6 select-none animate-fade-in text-slate-900 dark:text-white">
      {/* Hero Welcome Celebration Box */}
      <div className="text-center space-y-2 pt-2">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/15 border border-emerald-200 dark:border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-[10px] font-black uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
          <span>Curriculum Tailored Successfully</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-black tracking-tight font-display">
          Welcome, {userName || 'Learner'}! <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#335CFF] via-[#6D5DF6] to-[#10B981]">
            Your English Journey Starts Today.
          </span>
        </h2>

        <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
          Your roadmap is activated. All 60 days are ready now — from A1 basics to B1 fluency.
        </p>
      </div>

      {/* Summary Milestone Card */}
      <div className="p-4 sm:p-5 rounded-3xl bg-white dark:bg-slate-900 border border-[#D8E3FF] dark:border-slate-800 shadow-xl space-y-4 my-2">
        {/* User Configuration Snapshot */}
        <div className="grid grid-cols-2 gap-2.5">
          <div className="p-2.5 rounded-2xl bg-[#F8FAFF] dark:bg-slate-950 border border-[#D8E3FF] dark:border-slate-800">
            <span className="text-[9px] font-black uppercase tracking-wider text-slate-400 block">
              Core Goal
            </span>
            <span className="text-xs font-black text-indigo-600 dark:text-indigo-400 truncate block">
              {goalNames[goal] || 'Fluency Mastery'}
            </span>
          </div>

          <div className="p-2.5 rounded-2xl bg-[#F8FAFF] dark:bg-slate-950 border border-[#D8E3FF] dark:border-slate-800">
            <span className="text-[9px] font-black uppercase tracking-wider text-slate-400 block">
              Daily Target
            </span>
            <span className="text-xs font-black text-emerald-600 dark:text-emerald-400 truncate block">
              {dailyMinutes} Min / Day
            </span>
          </div>

          <div className="p-2.5 rounded-2xl bg-[#F8FAFF] dark:bg-slate-950 border border-[#D8E3FF] dark:border-slate-800">
            <span className="text-[9px] font-black uppercase tracking-wider text-slate-400 block">
              Voice & Accent
            </span>
            <span className="text-xs font-black text-amber-600 dark:text-amber-400 truncate block">
              {accentNames[accent] || 'Indian English'}
            </span>
          </div>

          <div className="p-2.5 rounded-2xl bg-[#F8FAFF] dark:bg-slate-950 border border-[#D8E3FF] dark:border-slate-800">
            <span className="text-[9px] font-black uppercase tracking-wider text-slate-400 block">
              Instruction Guide
            </span>
            <span className="text-xs font-black text-purple-600 dark:text-purple-400 truncate block">
              {nativeNames[nativeLang] || 'Hindi (हिन्दी)'}
            </span>
          </div>
        </div>

        {/* 60-Day Curriculum Highlights Bento Grid */}
        <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-[11px] font-bold text-slate-500 dark:text-slate-400">
            <span className="uppercase text-[9px] tracking-wider font-black text-slate-400">Total Program Scope</span>
            <span className="text-indigo-600 dark:text-indigo-400 font-black">CEFR A1 → A2 Pathway</span>
          </div>

          <div className="grid grid-cols-4 gap-1.5">
            <div className="p-2 rounded-xl bg-indigo-50/50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-500/20 text-center">
              <span className="text-xs font-black text-indigo-600 dark:text-indigo-400 block">60</span>
              <span className="text-[8px] font-bold text-slate-500 dark:text-slate-400 uppercase">Days</span>
            </div>

            <div className="p-2 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-500/20 text-center">
              <span className="text-xs font-black text-emerald-600 dark:text-emerald-400 block">400</span>
              <span className="text-[8px] font-bold text-slate-500 dark:text-slate-400 uppercase">Dialogues</span>
            </div>

            <div className="p-2 rounded-xl bg-amber-50/50 dark:bg-amber-950/40 border border-amber-100 dark:border-amber-500/20 text-center">
              <span className="text-xs font-black text-amber-600 dark:text-amber-400 block">2,492</span>
              <span className="text-[8px] font-bold text-slate-500 dark:text-slate-400 uppercase">Words</span>
            </div>

            <div className="p-2 rounded-xl bg-purple-50/50 dark:bg-purple-950/40 border border-purple-100 dark:border-purple-500/20 text-center">
              <span className="text-xs font-black text-purple-600 dark:text-purple-400 block">8,002</span>
              <span className="text-[8px] font-bold text-slate-500 dark:text-slate-400 uppercase">Turns</span>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-2 pt-2">
        <button
          onClick={handleStart}
          className="w-full py-4 rounded-2xl font-black text-xs uppercase tracking-wider shadow-xl transition-all duration-200 cursor-pointer flex items-center justify-center space-x-2 btn-press bg-gradient-to-r from-[#335CFF] via-[#6D5DF6] to-[#10B981] text-white hover:brightness-105 active:scale-98"
        >
          <span>Begin Day 1 Lesson</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        {onExploreCourse && (
          <button
            onClick={() => {
              playSoundEffectEffect('tap');
              onExploreCourse();
            }}
            className="w-full py-3 rounded-2xl font-bold text-xs text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition cursor-pointer btn-press border border-transparent hover:border-slate-200 dark:hover:border-slate-800"
          >
            Explore Course Roadmap
          </button>
        )}
      </div>
    </div>
  );
};
