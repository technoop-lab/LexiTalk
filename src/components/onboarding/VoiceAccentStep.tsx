import React, { useState } from 'react';
import {
  Mic,
  Volume2,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Play,
  Square
} from 'lucide-react';
import { speakCleanAudio, playSoundEffectEffect } from '../../utils/audioUtils';

export type AccentCode = 'en-IN' | 'en-US' | 'en-GB';

interface VoiceAccentStepProps {
  selectedAccent: AccentCode;
  onSelectAccent: (accent: AccentCode) => void;
  onContinue: () => void;
}

interface AccentOption {
  code: AccentCode;
  title: string;
  badge: string;
  flag: string;
  desc: string;
  sampleSentence: string;
  sampleHindi: string;
  sampleKey: string;
}

export const VoiceAccentStep: React.FC<VoiceAccentStepProps> = ({
  selectedAccent,
  onSelectAccent,
  onContinue,
}) => {
  const [playingAccent, setPlayingAccent] = useState<AccentCode | null>(null);

  const accents: AccentOption[] = [
    {
      code: 'en-IN',
      title: 'Indian English',
      badge: 'Natural & Familiar',
      flag: '🇮🇳',
      desc: 'Neutral South Asian English cadence. Optimized for clear clarity and everyday Indian context.',
      sampleSentence: 'Hello! I am learning to speak English fluently with Curiosity Academy.',
      sampleHindi: 'नमस्ते! मैं क्यूरियोसिटी अकादमी के साथ धाराप्रवाह अंग्रेज़ी बोलना सीख रहा हूँ।',
      sampleKey: 'sample_in',
    },
    {
      code: 'en-US',
      title: 'American English',
      badge: 'Global Standard',
      flag: '🇺🇸',
      desc: 'General North American accent. Ideal for global tech, international business, and entertainment.',
      sampleSentence: 'Welcome! You will practice everyday conversations and master English pronunciation.',
      sampleHindi: 'स्वागत है! आप रोज़मर्रा की बातचीत का अभ्यास करेंगे और सही उच्चारण सीखेंगे।',
      sampleKey: 'sample_us',
    },
    {
      code: 'en-GB',
      title: 'British English',
      badge: 'Classic & Formal',
      flag: '🇬🇧',
      desc: 'Received Pronunciation (RP) cadence. Perfect for IELTS, academic exams, and formal travel.',
      sampleSentence: 'Good day! Let us embark on a wonderful journey to master spoken English.',
      sampleHindi: 'शुभ दिन! आइए अंग्रेज़ी सीखने की इस शानदार यात्रा की शुरुआत करें।',
      sampleKey: 'sample_gb',
    },
  ];

  const handlePlaySample = async (accent: AccentOption, e: React.MouseEvent) => {
    e.stopPropagation();
    playSoundEffectEffect('tap');
    setPlayingAccent(accent.code);

    try {
      await speakCleanAudio(accent.sampleSentence, accent.code, 0.9);
      setPlayingAccent(null);
    } catch {
      setPlayingAccent(null);
    }
  };

  return (
    <div className="flex-1 flex flex-col justify-between p-4 sm:p-6 select-none animate-fade-in text-slate-900 dark:text-white">
      {/* Header */}
      <div className="text-center space-y-2 pt-2">
        <span className="text-[10px] font-black text-amber-600 dark:text-amber-400 uppercase tracking-widest bg-amber-50 dark:bg-amber-500/15 border border-amber-200 dark:border-amber-500/30 px-3 py-1 rounded-full inline-block">
          Acoustic Personalization
        </span>

        <h2 className="text-2xl sm:text-3xl font-black tracking-tight font-display">
          Choose your voice & accent
        </h2>

        <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
          Select your primary listening accent. You can also listen to all accents interchangeably during dialogue practice.
        </p>
      </div>

      {/* Accent Cards List */}
      <div className="space-y-3.5 my-4 max-h-[52vh] overflow-y-auto pr-1">
        {accents.map((acc) => {
          const isSelected = selectedAccent === acc.code;
          const isPlaying = playingAccent === acc.code;

          return (
            <div
              key={acc.code}
              onClick={() => {
                playSoundEffectEffect('tap');
                onSelectAccent(acc.code);
              }}
              className={`p-4 rounded-3xl border transition-all duration-200 cursor-pointer btn-press space-y-3 relative ${
                isSelected
                  ? 'bg-gradient-to-br from-indigo-50/95 via-purple-50/50 to-white dark:from-indigo-950/70 dark:via-slate-900 dark:to-slate-900 border-indigo-500 text-slate-900 dark:text-white ring-2 ring-indigo-500/20 shadow-xl'
                  : 'bg-white dark:bg-slate-900 border-[#D8E3FF] dark:border-slate-800 hover:border-indigo-300 dark:hover:border-slate-700 text-slate-700 dark:text-slate-300'
              }`}
            >
              {/* Top Row: Flag, Name, Badge, Select Radio */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl sm:text-3xl">{acc.flag}</span>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h4 className="text-sm font-black text-slate-900 dark:text-white">
                        {acc.title}
                      </h4>
                      <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                        {acc.badge}
                      </span>
                    </div>
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

              {/* Description */}
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {acc.desc}
              </p>

              {/* Sample Speech Box with Play Preview Button */}
              <div className="p-3 rounded-2xl bg-[#F8FAFF] dark:bg-slate-950/80 border border-[#D8E3FF] dark:border-slate-800/90 flex items-center justify-between gap-3">
                <div className="space-y-0.5 min-w-0 flex-1">
                  <span className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block">
                    Audio Preview
                  </span>
                  <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 truncate">
                    "{acc.sampleSentence}"
                  </p>
                </div>

                <button
                  type="button"
                  onClick={(e) => handlePlaySample(acc, e)}
                  className={`p-2.5 rounded-xl transition flex items-center justify-center space-x-1.5 cursor-pointer shrink-0 btn-press text-xs font-black shadow-sm ${
                    isPlaying
                      ? 'bg-amber-500 text-slate-950 animate-pulse'
                      : 'bg-indigo-50 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/30 hover:bg-indigo-100'
                  }`}
                  title="Listen to sample audio"
                >
                  <Volume2 className="w-4 h-4 shrink-0" />
                  <span className="text-[10px] hidden xs:inline">
                    {isPlaying ? 'Playing...' : 'Listen'}
                  </span>
                </button>
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
          <span>Select Voice Profile</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
