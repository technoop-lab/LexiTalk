import React, { useEffect, useState } from 'react';
import { Sparkles, Globe2, BookOpen, Volume2, Award, Zap } from 'lucide-react';
import { playSoundEffectEffect } from '../../utils/audioUtils';

interface SplashScreenProps {
  onFinish: () => void;
  durationMs?: number;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({
  onFinish,
  durationMs = 2000,
}) => {
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Play subtle entering chime
    playSoundEffectEffect('tap');

    const timer = setTimeout(() => {
      setIsFadingOut(true);
      setTimeout(() => {
        onFinish();
      }, 350);
    }, durationMs);

    return () => clearTimeout(timer);
  }, [durationMs, onFinish]);

  const handleSkip = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      onFinish();
    }, 200);
  };

  return (
    <div
      onClick={handleSkip}
      className={`fixed inset-0 z-50 flex flex-col items-center justify-between p-6 sm:p-8 bg-[#050816] text-white select-none cursor-pointer transition-opacity duration-300 ${
        isFadingOut ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'
      }`}
      role="banner"
      aria-label="Curiosity English Academy Splash Screen"
    >
      {/* Background Animated Gradient Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-gradient-to-br from-[#335CFF]/25 via-[#6D5DF6]/20 to-transparent blur-3xl animate-blob-drift" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-gradient-to-tr from-emerald-500/15 via-teal-500/10 to-transparent blur-3xl animate-blob-drift" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/3 left-1/4 w-60 h-60 rounded-full bg-gradient-to-br from-amber-500/10 via-rose-500/5 to-transparent blur-2xl animate-blob-drift" style={{ animationDelay: '6s' }} />
        
        {/* Floating Ambient Sparkle Particles */}
        <div className="absolute top-1/2 left-1/3 w-2 h-2 rounded-full bg-indigo-400 animate-particle-1" />
        <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 rounded-full bg-emerald-400 animate-particle-2" />
        <div className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-amber-300 animate-particle-3" />
        <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 rounded-full bg-sky-300 animate-particle-4" />
      </div>

      {/* Top Bar Spacer with Skip Hint */}
      <div className="w-full flex justify-end items-center z-10">
        <span className="text-[11px] font-bold text-slate-400 bg-slate-900/60 border border-slate-800 px-3 py-1 rounded-full backdrop-blur-md transition hover:text-white">
          Tap anywhere to continue
        </span>
      </div>

      {/* Centered Brand Emblem & Typography */}
      <div className="relative z-10 flex flex-col items-center text-center space-y-6 max-w-sm mx-auto my-auto">
        {/* Royal Indigo Glowing Ring Emblem */}
        <div className="relative flex items-center justify-center">
          {/* Pulsing Outer Halo */}
          <div className="absolute w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-gradient-to-br from-[#335CFF] to-[#6D5DF6] opacity-40 blur-xl animate-glow-halo" />
          
          {/* Rotating Ring Border */}
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-3xl p-1 bg-gradient-to-tr from-[#335CFF] via-[#6D5DF6] to-[#10B981] shadow-2xl animate-soft-pulse">
            <div className="w-full h-full rounded-[22px] bg-[#0B1225] border border-indigo-400/30 flex items-center justify-center shadow-inner">
              <span className="text-4xl sm:text-5xl transform hover:scale-110 transition duration-300">
                🎓
              </span>
            </div>
          </div>

          {/* Orbiting Mini Badges */}
          <div className="absolute -top-1 -right-1 w-7 h-7 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-black shadow-lg border border-amber-300/40">
            <Sparkles className="w-3.5 h-3.5 fill-current" />
          </div>
          <div className="absolute -bottom-1 -left-1 w-7 h-7 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-black shadow-lg border border-emerald-400/40">
            <Zap className="w-3.5 h-3.5 fill-current" />
          </div>
        </div>

        {/* Brand Name Typography */}
        <div className="space-y-2">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-indigo-500/15 border border-indigo-400/30 text-indigo-300 text-[10px] font-black uppercase tracking-widest">
            <Award className="w-3 h-3 text-indigo-400" />
            <span>A1 → B1 Journey</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white font-display">
            Curiosity <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F6BFF] via-[#6D5DF6] to-[#10B981]">English Academy</span>
          </h1>

          <p className="text-sm font-semibold text-slate-300 tracking-wide">
            Speak English With Confidence
          </p>
        </div>
      </div>

      {/* Bottom Features Pill */}
      <div className="relative z-10 flex flex-col items-center space-y-2 text-center pb-2">
        <div className="flex items-center space-x-2 text-[11px] font-bold text-slate-400 bg-slate-900/80 border border-slate-800/80 px-4 py-2 rounded-2xl backdrop-blur-md shadow-lg">
          <span className="flex items-center space-x-1 text-slate-300">
            <Globe2 className="w-3.5 h-3.5 text-indigo-400" />
            <span>Offline</span>
          </span>
          <span className="text-slate-600">•</span>
          <span className="flex items-center space-x-1 text-slate-300">
            <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Speaking</span>
          </span>
          <span className="text-slate-600">•</span>
          <span className="flex items-center space-x-1 text-slate-300">
            <BookOpen className="w-3.5 h-3.5 text-amber-400" />
            <span>Vocabulary</span>
          </span>
          <span className="text-slate-600">•</span>
          <span className="flex items-center space-x-1 text-slate-300">
            <span>Grammar</span>
          </span>
        </div>

        <span className="text-[10px] text-slate-500">
          Curiosity English Academy • Designed for Natural Fluency
        </span>
      </div>
    </div>
  );
};
