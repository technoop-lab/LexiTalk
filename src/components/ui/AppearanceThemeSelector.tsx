import React from 'react';
import { Moon, Sun, Smartphone, Check } from 'lucide-react';
import { useTheme } from '../../theme/ThemeContext';
import { ThemeMode } from '../../theme/designTokens';
import { playSoundEffectEffect } from '../../utils/audioUtils';

interface AppearanceThemeSelectorProps {
  className?: string;
  compact?: boolean;
}

export const AppearanceThemeSelector: React.FC<AppearanceThemeSelectorProps> = ({
  className = '',
  compact = false,
}) => {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const options: { id: ThemeMode; label: string; subLabel: string; icon: typeof Moon }[] = [
    {
      id: 'dark',
      label: 'Dark Mode',
      subLabel: 'Deep slate, royal indigo glow',
      icon: Moon,
    },
    {
      id: 'light',
      label: 'Light Mode',
      subLabel: 'Crisp white, high contrast',
      icon: Sun,
    },
    {
      id: 'system',
      label: 'Use System Theme',
      subLabel: 'Auto-sync with OS preference',
      icon: Smartphone,
    },
  ];

  const handleSelect = (mode: ThemeMode) => {
    playSoundEffectEffect('tap');
    setTheme(mode);
  };

  if (compact) {
    return (
      <div className={`flex items-center bg-slate-100 dark:bg-slate-950/80 p-1 rounded-2xl border border-slate-200 dark:border-slate-800 ${className}`}>
        {options.map((opt) => {
          const Icon = opt.icon;
          const isSelected = theme === opt.id;
          return (
            <button
              key={opt.id}
              onClick={() => handleSelect(opt.id)}
              className={`flex-1 flex items-center justify-center space-x-1.5 py-2 px-2.5 rounded-xl text-xs font-bold transition-all duration-200 btn-press cursor-pointer ${
                isSelected
                  ? 'bg-white dark:bg-slate-850 text-indigo-600 dark:text-indigo-300 shadow-md border border-indigo-200 dark:border-indigo-500/30'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
              title={opt.label}
              aria-label={opt.label}
            >
              <Icon className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">{opt.id === 'system' ? 'System' : opt.id === 'light' ? 'Light' : 'Dark'}</span>
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div className={`space-y-2.5 ${className}`}>
      {options.map((opt) => {
        const Icon = opt.icon;
        const isSelected = theme === opt.id;
        return (
          <button
            key={opt.id}
            onClick={() => handleSelect(opt.id)}
            className={`w-full p-3.5 sm:p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between text-left cursor-pointer btn-press ${
              isSelected
                ? 'bg-indigo-50/90 dark:bg-indigo-950/40 border-indigo-500 dark:border-indigo-400/80 shadow-md ring-1 ring-indigo-500/20'
                : 'bg-white/90 dark:bg-slate-950/80 border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900/90 text-slate-700 dark:text-slate-300'
            }`}
            aria-selected={isSelected}
            role="radio"
          >
            <div className="flex items-center space-x-3.5">
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all ${
                  isSelected
                    ? 'bg-gradient-to-br from-[#335CFF] to-[#6D5DF6] text-white border-indigo-400/40 shadow-sm'
                    : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800'
                }`}
              >
                <Icon className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <div className="flex items-center space-x-2">
                  <span className={`text-sm font-bold ${isSelected ? 'text-indigo-900 dark:text-white font-black' : 'text-slate-800 dark:text-slate-200'}`}>
                    {opt.label}
                  </span>
                  {opt.id === 'system' && (
                    <span className="text-[10px] px-2 py-0.5 rounded-md bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold uppercase tracking-wider">
                      Currently {resolvedTheme}
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">{opt.subLabel}</p>
              </div>
            </div>

            <div
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                isSelected
                  ? 'border-indigo-600 dark:border-indigo-400 bg-indigo-600 dark:bg-indigo-500 text-white'
                  : 'border-slate-300 dark:border-slate-700 bg-transparent'
              }`}
            >
              {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
            </div>
          </button>
        );
      })}
    </div>
  );
};
export default AppearanceThemeSelector;
