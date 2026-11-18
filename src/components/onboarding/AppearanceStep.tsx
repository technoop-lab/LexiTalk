import React from 'react';
import {
  Sun,
  Moon,
  Smartphone,
  CheckCircle2,
  ArrowRight,
  Palette,
  Sparkles,
  Flame,
  Zap
} from 'lucide-react';
import { useTheme } from '../../theme/ThemeContext';
import { ThemeMode } from '../../theme/designTokens';
import { playSoundEffectEffect } from '../../utils/audioUtils';

interface AppearanceStepProps {
  onContinue: () => void;
}

export const AppearanceStep: React.FC<AppearanceStepProps> = ({
  onContinue,
}) => {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const handleSelect = (mode: ThemeMode) => {
    playSoundEffectEffect('tap');
    setTheme(mode);
  };

  const themes: {
    id: ThemeMode;
    title: string;
    subTitle: string;
    desc: string;
    icon: typeof Sun;
    previewBg: string;
    previewCardBg: string;
    previewBorder: string;
    previewText: string;
    previewAccent: string;
  }[] = [
    {
      id: 'light',
      title: 'Light Theme',
      subTitle: 'Crisp & High Contrast',
      desc: 'Clean porcelain white canvas with vibrant Royal Indigo typography and clear daylight readability.',
      icon: Sun,
      previewBg: 'bg-[#F6F8FC]',
      previewCardBg: 'bg-white',
      previewBorder: 'border-[#D8E3FF]',
      previewText: 'text-slate-900',
      previewAccent: 'bg-[#335CFF]',
    },
    {
      id: 'dark',
      title: 'Dark Theme',
      subTitle: 'Deep Slate & Royal Indigo Glow',
      desc: 'Midnight slate background (#050816) with eye-safe soft contrast and glowing neon accents.',
      icon: Moon,
      previewBg: 'bg-[#050816]',
      previewCardBg: 'bg-[#0B1225]',
      previewBorder: 'border-[#273449]',
      previewText: 'text-white',
      previewAccent: 'bg-[#4F6BFF]',
    },
    {
      id: 'system',
      title: 'System Theme',
      subTitle: 'Auto-Sync with Device',
      desc: 'Automatically matches your device operating system dark or light schedule seamlessly.',
      icon: Smartphone,
      previewBg: 'bg-gradient-to-r from-[#F6F8FC] via-slate-200 to-[#050816]',
      previewCardBg: 'bg-white/80 dark:bg-slate-900/80',
      previewBorder: 'border-slate-300 dark:border-slate-700',
      previewText: 'text-slate-900 dark:text-white',
      previewAccent: 'bg-gradient-to-r from-[#335CFF] to-[#10B981]',
    },
  ];

  return (
    <div className="flex-1 flex flex-col justify-between p-4 sm:p-6 select-none animate-fade-in text-slate-900 dark:text-white">
      {/* Header */}
      <div className="text-center space-y-2 pt-2">
        <span className="text-[10px] font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-widest bg-indigo-50 dark:bg-indigo-500/15 border border-indigo-200 dark:border-indigo-500/30 px-3 py-1 rounded-full inline-block">
          Personalized Styling
        </span>

        <h2 className="text-2xl sm:text-3xl font-black tracking-tight font-display">
          Choose your appearance
        </h2>

        <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
          Tailor the visual environment to match your reading style. You can adjust this anytime in Settings.
        </p>
      </div>

      {/* 3 Live Preview Theme Cards */}
      <div className="space-y-3.5 my-3 max-h-[52vh] overflow-y-auto pr-1">
        {themes.map((t) => {
          const isSelected = theme === t.id;
          const Icon = t.icon;

          return (
            <div
              key={t.id}
              onClick={() => handleSelect(t.id)}
              className={`p-4 rounded-3xl border transition-all duration-200 cursor-pointer btn-press space-y-3 relative ${
                isSelected
                  ? 'bg-indigo-50/90 dark:bg-indigo-950/60 border-indigo-500 text-slate-900 dark:text-white ring-2 ring-indigo-500/20 shadow-xl'
                  : 'bg-white dark:bg-slate-900 border-[#D8E3FF] dark:border-slate-800 hover:border-indigo-300 dark:hover:border-slate-700 text-slate-700 dark:text-slate-300'
              }`}
            >
              {/* Header inside Card */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-10 h-10 rounded-2xl flex items-center justify-center border transition-all ${
                      isSelected
                        ? 'bg-gradient-to-br from-[#335CFF] to-[#6D5DF6] text-white border-indigo-300 shadow-sm'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <div>
                    <div className="flex items-center space-x-2">
                      <h4 className="text-sm font-black text-slate-900 dark:text-white">
                        {t.title}
                      </h4>
                      {t.id === 'system' && (
                        <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 uppercase">
                          Active: {resolvedTheme}
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] text-indigo-600 dark:text-indigo-400 font-bold">
                      {t.subTitle}
                    </span>
                  </div>
                </div>

                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                    isSelected
                      ? 'border-indigo-600 dark:border-indigo-400 bg-indigo-600 dark:bg-indigo-500 text-white shadow-sm'
                      : 'border-slate-300 dark:border-slate-700 bg-transparent'
                  }`}
                >
                  {isSelected && <CheckCircle2 className="w-3.5 h-3.5 fill-current" />}
                </div>
              </div>

              {/* Realistic Mini Dashboard Mockup Preview inside card */}
              <div className={`p-3 rounded-2xl ${t.previewBg} border ${t.previewBorder} shadow-inner space-y-2`}>
                {/* Mini Top bar */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1.5">
                    <div className={`w-3.5 h-3.5 rounded-md ${t.previewAccent}`} />
                    <span className={`text-[10px] font-black ${t.previewText}`}>Curiosity Academy</span>
                  </div>
                  <div className="flex items-center space-x-1.5 text-[9px] font-bold">
                    <span className="text-amber-500 flex items-center">🔥 0</span>
                    <span className="text-indigo-400 flex items-center">⚡ 0</span>
                  </div>
                </div>

                {/* Mini Lesson Card */}
                <div className={`p-2.5 rounded-xl ${t.previewCardBg} border ${t.previewBorder} flex items-center justify-between shadow-xs`}>
                  <div className="flex items-center space-x-2">
                    <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-500 flex items-center justify-center text-xs font-bold">
                      👋
                    </div>
                    <div>
                      <span className={`text-[10px] font-bold block ${t.previewText}`}>Day 1 • Greetings</span>
                      <span className="text-[8px] text-slate-400">Essential Everyday English</span>
                    </div>
                  </div>
                  <span className={`text-[8px] font-black uppercase px-2 py-0.5 rounded-md ${t.previewAccent} text-white`}>
                    Start
                  </span>
                </div>
              </div>

              <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                {t.desc}
              </p>
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
          <span>Confirm Appearance Theme</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
