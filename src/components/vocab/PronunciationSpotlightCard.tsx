import React, { useState } from 'react';
import {
  Volume2,
  Volume1,
  Activity,
  Sparkles,
  Info,
  Mic,
  Smile,
  CheckCircle2,
  Waves
} from 'lucide-react';
import { VocabItem } from '../../types';
import { getEnrichedVocabData, SyllableInfo } from '../../data/vocabEnrichmentData';
import { playSoundEffectEffect, speakCleanAudio } from '../../utils/audioUtils';

interface PronunciationSpotlightCardProps {
  vocab: VocabItem;
}

export const PronunciationSpotlightCard: React.FC<PronunciationSpotlightCardProps> = ({ vocab }) => {
  const enriched = getEnrichedVocabData(vocab);
  const [selectedAccent, setSelectedAccent] = useState<'en-US' | 'en-GB'>('en-US');
  const [activeSyllable, setActiveSyllable] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayFull = (rate: number = 1.0) => {
    playSoundEffectEffect('tap');
    setIsPlaying(true);
    speakCleanAudio(vocab.audioText || vocab.word, selectedAccent, rate);
    setTimeout(() => setIsPlaying(false), 1400);
  };

  const handlePlaySyllable = (syl: SyllableInfo) => {
    playSoundEffectEffect('tap');
    setActiveSyllable(syl.syllable);
    speakCleanAudio(syl.syllable, selectedAccent, 0.85);
    setTimeout(() => setActiveSyllable(null), 800);
  };

  return (
    <div
      id={`pronunciation-spotlight-${vocab.word}`}
      className="bg-white dark:bg-[#0B1225] border-2 border-indigo-100 dark:border-white/10 rounded-[32px] p-6 shadow-xl space-y-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-2xl bg-indigo-50 dark:bg-indigo-500/20 border border-indigo-200 dark:border-indigo-500/30 flex items-center justify-center text-indigo-600 dark:text-indigo-300">
            <Mic className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-black uppercase tracking-wider text-indigo-600 dark:text-indigo-400 block">
              Acoustic & Phonetics Lab
            </span>
            <h3 className="text-lg font-black text-slate-900 dark:text-white font-display">
              Pronunciation Spotlight
            </h3>
          </div>
        </div>

        {/* Accent Toggle */}
        <div className="flex items-center bg-slate-100 dark:bg-slate-900 p-1 rounded-2xl border border-slate-200 dark:border-slate-800">
          <button
            onClick={() => setSelectedAccent('en-US')}
            className={`px-3 py-1 text-xs font-bold rounded-xl transition cursor-pointer ${
              selectedAccent === 'en-US'
                ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-white shadow-xs font-black'
                : 'text-slate-500 hover:text-slate-800 dark:text-slate-400'
            }`}
          >
            🇺🇸 US
          </button>
          <button
            onClick={() => setSelectedAccent('en-GB')}
            className={`px-3 py-1 text-xs font-bold rounded-xl transition cursor-pointer ${
              selectedAccent === 'en-GB'
                ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-white shadow-xs font-black'
                : 'text-slate-500 hover:text-slate-800 dark:text-slate-400'
            }`}
          >
            🇬🇧 UK
          </button>
        </div>
      </div>

      {/* Central Word + IPA + Stress Markers */}
      <div className="bg-gradient-to-br from-indigo-50/70 via-white to-slate-50 dark:from-slate-900 dark:via-[#111A30] dark:to-indigo-950/40 p-5 rounded-2xl border border-indigo-100 dark:border-slate-800 text-center space-y-3">
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight font-display">
          {vocab.word}
        </h2>

        {/* Stress Pattern & IPA */}
        <div className="flex items-center justify-center space-x-2">
          <span className="px-3.5 py-1 rounded-xl bg-white dark:bg-slate-800 border border-indigo-200 dark:border-indigo-500/30 text-indigo-700 dark:text-cyan-300 font-mono text-sm font-black shadow-xs">
            {vocab.phonetic || enriched.stressPattern}
          </span>
          <span className="px-2.5 py-1 rounded-xl bg-amber-50 dark:bg-amber-500/15 border border-amber-200 dark:border-amber-500/30 text-amber-800 dark:text-amber-300 text-xs font-bold">
            Stress: {enriched.stressPattern}
          </span>
        </div>

        {/* Clickable Interactive Syllable Breakdown */}
        <div className="pt-2">
          <span className="text-[10px] font-bold uppercase text-slate-400 block tracking-wider mb-2">
            Click Syllable to Hear Isolated Sound:
          </span>
          <div className="flex items-center justify-center space-x-2">
            {enriched.syllables.map((syl, idx) => {
              const isCurrent = activeSyllable === syl.syllable;
              return (
                <button
                  key={idx}
                  onClick={() => handlePlaySyllable(syl)}
                  className={`px-4 py-2 rounded-2xl border-2 font-mono font-bold text-sm transition active:scale-95 cursor-pointer flex flex-col items-center ${
                    syl.isStressed
                      ? 'bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-500/30'
                      : isCurrent
                      ? 'bg-indigo-100 dark:bg-indigo-900/60 border-indigo-400 text-indigo-900 dark:text-indigo-200'
                      : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-indigo-300'
                  }`}
                >
                  <span className="text-base">{syl.syllable}</span>
                  <span className="text-[10px] opacity-75">{syl.isStressed ? '● Primary' : '○ Soft'}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Audio Controls */}
        <div className="flex items-center justify-center space-x-3 pt-3">
          <button
            onClick={() => handlePlayFull(0.75)}
            className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold rounded-2xl text-xs flex items-center space-x-1.5 transition active:scale-95 cursor-pointer"
          >
            <Volume1 className="w-4 h-4 text-amber-500" />
            <span>0.75x Slow</span>
          </button>

          <button
            onClick={() => handlePlayFull(1.0)}
            className="px-5 py-2.5 bg-gradient-to-r from-[#335CFF] to-[#6D5DF6] hover:brightness-110 text-white font-bold rounded-2xl text-xs flex items-center space-x-1.5 shadow-lg shadow-indigo-500/25 transition active:scale-95 cursor-pointer"
          >
            <Volume2 className="w-4 h-4 fill-current" />
            <span>1.0x Normal Speed</span>
          </button>
        </div>

        {/* Live Pulse Waveform visualizer */}
        <div className="flex items-center justify-center space-x-1.5 h-6 pt-2">
          {[6, 12, 22, 16, 28, 18, 30, 20, 12, 6].map((h, i) => (
            <span
              key={i}
              className={`w-1 rounded-full transition-all duration-200 ${
                isPlaying ? 'bg-indigo-500 animate-pulse' : 'bg-slate-200 dark:bg-slate-700'
              }`}
              style={{ height: isPlaying ? `${Math.max(6, (h * 1.2)) % 24}px` : `${h / 2}px` }}
            />
          ))}
        </div>
      </div>

      {/* Mouth Position & Articulation Diagram */}
      <div className="bg-slate-50 dark:bg-slate-900/60 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Smile className="w-4 h-4 text-emerald-500" />
            <h4 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider">
              Mouth & Tongue Articulation Guide
            </h4>
          </div>
          <span className="text-[10px] bg-emerald-100 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 font-bold px-2 py-0.5 rounded-md">
            Native Accent Coach
          </span>
        </div>

        {/* Mouth Position SVG Diagram */}
        <div className="flex items-center justify-center p-3 bg-white dark:bg-slate-950 rounded-xl border border-slate-100 dark:border-slate-800">
          <svg className="w-36 h-24" viewBox="0 0 160 100" fill="none">
            {/* Upper & Lower Palate Contour */}
            <path
              d="M 20,40 Q 60,15 110,35 Q 140,50 145,70"
              stroke="#6366F1"
              strokeWidth="3"
              strokeLinecap="round"
            />
            {/* Teeth representation */}
            <rect x="110" y="32" width="8" height="12" rx="2" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1.5" />
            <rect x="110" y="60" width="8" height="12" rx="2" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1.5" />
            
            {/* Tongue Body with Dynamic Position */}
            <path
              d="M 40,75 Q 80,70 105,52 Q 115,50 120,55 Q 90,85 40,82 Z"
              fill="#F43F5E"
              opacity="0.85"
            />

            {/* Vocal Vibration / Airflow waves */}
            <path
              d="M 125,48 Q 135,46 142,48 M 128,54 Q 138,52 146,54"
              stroke="#06B6D4"
              strokeWidth="2"
              strokeLinecap="round"
              className="animate-pulse"
            />
          </svg>
        </div>

        {/* Guided Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700 dark:text-slate-300">
          <div className="p-3 bg-white dark:bg-slate-950 rounded-xl border border-slate-100 dark:border-slate-800">
            <strong className="text-indigo-600 dark:text-indigo-400 block text-[10px] uppercase font-bold">
              Lips Formation:
            </strong>
            <p className="text-[11px] mt-0.5">{enriched.mouthGuide.lips}</p>
          </div>

          <div className="p-3 bg-white dark:bg-slate-950 rounded-xl border border-slate-100 dark:border-slate-800">
            <strong className="text-indigo-600 dark:text-indigo-400 block text-[10px] uppercase font-bold">
              Tongue Placement:
            </strong>
            <p className="text-[11px] mt-0.5">{enriched.mouthGuide.tongue}</p>
          </div>
        </div>

        {/* Pro Tip */}
        <div className="p-3 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-500/30 text-xs text-amber-900 dark:text-amber-200 flex items-start space-x-2">
          <Info className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
          <p className="text-[11px] leading-relaxed">
            <strong>Coach Pro-Tip:</strong> {enriched.mouthGuide.proTip}
          </p>
        </div>
      </div>
    </div>
  );
};
