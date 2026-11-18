import React, { useState } from 'react';
import {
  MessageSquare,
  BookOpen,
  Mic,
  Globe2,
  Sparkles,
  Award,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Coffee,
  Briefcase,
  Plane,
  HeartHandshake,
  ShoppingBag,
  Flame,
  Zap,
  Repeat,
  Layers,
  Volume2,
  Check
} from 'lucide-react';
import { playSoundEffectEffect } from '../../utils/audioUtils';

interface OnboardingCarouselProps {
  onComplete: () => void;
  onSkip?: () => void;
}

export const OnboardingCarousel: React.FC<OnboardingCarouselProps> = ({
  onComplete,
  onSkip,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = 5;

  const handleNext = () => {
    playSoundEffectEffect('tap');
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide((prev) => prev + 1);
    } else {
      onComplete();
    }
  };

  const handleSkip = () => {
    playSoundEffectEffect('tap');
    if (onSkip) {
      onSkip();
    } else {
      onComplete();
    }
  };

  return (
    <div className="flex-1 flex flex-col justify-between p-4 sm:p-6 select-none animate-fade-in text-slate-900 dark:text-white">
      {/* Top Header: Progress Dots & Skip Button */}
      <div className="flex items-center justify-between pt-2 pb-4">
        {/* Step Indicators */}
        <div className="flex items-center space-x-1.5" role="tablist" aria-label="Onboarding Steps">
          {Array.from({ length: totalSlides }).map((_, idx) => {
            const isActive = idx === currentSlide;
            const isPassed = idx < currentSlide;
            return (
              <button
                key={idx}
                onClick={() => {
                  playSoundEffectEffect('tap');
                  setCurrentSlide(idx);
                }}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'w-7 bg-gradient-to-r from-[#335CFF] to-[#6D5DF6] shadow-sm'
                    : isPassed
                    ? 'w-2 bg-indigo-400 dark:bg-indigo-500/60'
                    : 'w-2 bg-slate-200 dark:bg-slate-800'
                }`}
              />
            );
          })}
        </div>

        {/* Skip Button */}
        <button
          onClick={handleSkip}
          className="text-xs font-bold text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white px-3 py-1 rounded-xl transition cursor-pointer btn-press"
        >
          Skip Intro
        </button>
      </div>

      {/* Main Slide Carousel Container */}
      <div className="flex-1 flex flex-col justify-center max-w-md w-full mx-auto my-auto space-y-6">
        
        {/* SLIDE 1: Welcome & Natural Learning */}
        {currentSlide === 0 && (
          <div className="space-y-6 animate-slide-up text-center">
            {/* SVG/CSS Illustration */}
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 mx-auto flex items-center justify-center">
              {/* Glowing Background Blob */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 via-purple-500/15 to-emerald-500/20 rounded-full blur-2xl animate-blob-drift" />
              
              {/* Central Globe Ring */}
              <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-gradient-to-br from-[#335CFF] via-[#6D5DF6] to-[#10B981] p-1 shadow-2xl animate-soft-pulse flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-white dark:bg-slate-900 flex items-center justify-center shadow-inner">
                  <Globe2 className="w-16 h-16 text-indigo-600 dark:text-indigo-400" />
                </div>
              </div>

              {/* Orbiting Satellite Card 1: Books */}
              <div className="absolute top-2 left-2 p-2.5 rounded-2xl bg-white/95 dark:bg-slate-850/95 border border-[#D8E3FF] dark:border-slate-800 shadow-xl flex items-center space-x-1.5 transform -rotate-6 animate-bounce" style={{ animationDuration: '3.5s' }}>
                <BookOpen className="w-4 h-4 text-emerald-500" />
                <span className="text-[10px] font-black text-slate-800 dark:text-slate-200">Daily Lessons</span>
              </div>

              {/* Orbiting Satellite Card 2: Voice */}
              <div className="absolute bottom-3 right-1 p-2.5 rounded-2xl bg-white/95 dark:bg-slate-850/95 border border-[#D8E3FF] dark:border-slate-800 shadow-xl flex items-center space-x-1.5 transform rotate-6 animate-bounce" style={{ animationDuration: '4.2s' }}>
                <Mic className="w-4 h-4 text-amber-500" />
                <span className="text-[10px] font-black text-slate-800 dark:text-slate-200">Voice Practice</span>
              </div>

              {/* Orbiting Satellite Card 3: Chat */}
              <div className="absolute -top-1 right-4 p-2 rounded-xl bg-indigo-500 text-white shadow-lg">
                <MessageSquare className="w-4 h-4" />
              </div>
            </div>

            {/* Typography */}
            <div className="space-y-2.5">
              <span className="text-[10px] font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/15 border border-indigo-200 dark:border-indigo-500/30 px-3 py-1 rounded-full inline-block">
                Curiosity English Academy
              </span>

              <h2 className="text-2xl sm:text-3xl font-black tracking-tight font-display">
                Learn English <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#335CFF] to-[#6D5DF6]">
                  Naturally Every Day
                </span>
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-sm mx-auto leading-relaxed">
                Master spoken English through interactive everyday situations and step-by-step bilingual guidance.
              </p>

              <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 font-hindi max-w-sm mx-auto">
                "रोज़मर्रा की बातचीत और व्यावहारिक अभ्यासों से स्वाभाविक रूप से अंग्रेज़ी सीखें।"
              </p>
            </div>
          </div>
        )}

        {/* SLIDE 2: Speak With Confidence & Speech Studio */}
        {currentSlide === 1 && (
          <div className="space-y-6 animate-slide-up text-center">
            {/* SVG/CSS Illustration */}
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 mx-auto flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 via-sky-500/15 to-indigo-500/20 rounded-full blur-2xl animate-blob-drift" />
              
              {/* Central Mic & Audio Waves */}
              <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-600 p-1 shadow-2xl flex items-center justify-center animate-soft-pulse">
                <div className="w-full h-full rounded-[22px] bg-white dark:bg-slate-900 flex flex-col items-center justify-center space-y-2 p-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-500/15 border border-emerald-200 dark:border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                    <Mic className="w-6 h-6" />
                  </div>
                  {/* Dynamic Audio Waves */}
                  <div className="flex items-center space-x-1 h-6">
                    <span className="w-1 h-3 bg-emerald-500 rounded-full animate-waveform-1" />
                    <span className="w-1 h-5 bg-emerald-500 rounded-full animate-waveform-2" />
                    <span className="w-1 h-6 bg-teal-400 rounded-full animate-waveform-3" />
                    <span className="w-1 h-4 bg-emerald-500 rounded-full animate-waveform-4" />
                    <span className="w-1 h-2 bg-emerald-500 rounded-full animate-waveform-5" />
                  </div>
                </div>
              </div>

              {/* Accent Ring Pill */}
              <div className="absolute top-1 right-2 p-2 rounded-xl bg-amber-500 text-slate-950 font-black text-[10px] shadow-lg flex items-center space-x-1">
                <Sparkles className="w-3.5 h-3.5 fill-current" />
                <span>Accent Clarity</span>
              </div>

              {/* Feature Pill */}
              <div className="absolute bottom-2 left-2 p-2.5 rounded-2xl bg-white/95 dark:bg-slate-850/95 border border-[#D8E3FF] dark:border-slate-800 shadow-xl flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span className="text-[10px] font-black">Pronunciation AI</span>
              </div>
            </div>

            {/* Typography */}
            <div className="space-y-2.5">
              <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/15 border border-emerald-200 dark:border-emerald-500/30 px-3 py-1 rounded-full inline-block">
                Interactive Speech Lab
              </span>

              <h2 className="text-2xl sm:text-3xl font-black tracking-tight font-display">
                Speak With <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">
                  Total Confidence
                </span>
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-sm mx-auto leading-relaxed">
                Practice sentence shadowing, listen to native accents, record your voice, and gain effortless spoken fluency.
              </p>

              {/* Highlights Pill Row */}
              <div className="flex flex-wrap items-center justify-center gap-1.5 pt-1">
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-850 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800">
                  🎙️ AI Speaking Lab
                </span>
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-850 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800">
                  🗣️ Pronunciation Coach
                </span>
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-850 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800">
                  🎧 Audio Shadowing
                </span>
              </div>
            </div>
          </div>
        )}

        {/* SLIDE 3: 60-Day CEFR Journey */}
        {currentSlide === 2 && (
          <div className="space-y-6 animate-slide-up text-center">
            {/* SVG/CSS Illustration */}
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 mx-auto flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 via-sky-500/15 to-purple-500/20 rounded-full blur-2xl animate-blob-drift" />
              
              {/* CEFR Milestones Visual Track */}
              <div className="relative w-full max-w-[210px] bg-white/95 dark:bg-slate-850/95 p-4 rounded-3xl border border-[#D8E3FF] dark:border-slate-800 shadow-2xl space-y-3">
                <div className="flex items-center justify-between text-[11px] font-black">
                  <span className="text-slate-500 dark:text-slate-400 uppercase tracking-wider text-[9px]">Roadmap</span>
                  <span className="text-indigo-600 dark:text-indigo-400">60 Days Path</span>
                </div>

                {/* Stepper Pathway */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-500/30">
                    <div className="flex items-center space-x-2">
                      <span className="w-6 h-6 rounded-lg bg-emerald-500 text-white font-black text-[10px] flex items-center justify-center">
                        A1
                      </span>
                      <div className="text-left">
                        <span className="text-[11px] font-bold block text-slate-800 dark:text-white">Beginner Core</span>
                        <span className="text-[9px] text-slate-500 dark:text-slate-400">Days 1 – 20</span>
                      </div>
                    </div>
                    <Check className="w-3.5 h-3.5 text-emerald-500 stroke-[3]" />
                  </div>

                  <div className="flex items-center justify-between p-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-500/30">
                    <div className="flex items-center space-x-2">
                      <span className="w-6 h-6 rounded-lg bg-indigo-500 text-white font-black text-[10px] flex items-center justify-center">
                        A2
                      </span>
                      <div className="text-left">
                        <span className="text-[11px] font-bold block text-slate-800 dark:text-white">Elementary Fluency</span>
                        <span className="text-[9px] text-slate-500 dark:text-slate-400">Days 21 – 40</span>
                      </div>
                    </div>
                    <Zap className="w-3.5 h-3.5 text-indigo-500 fill-current" />
                  </div>

                  <div className="flex items-center justify-between p-2 rounded-xl bg-purple-50 dark:bg-purple-950/50 border border-purple-200 dark:border-purple-500/30">
                    <div className="flex items-center space-x-2">
                      <span className="w-6 h-6 rounded-lg bg-purple-500 text-white font-black text-[10px] flex items-center justify-center">
                        B1
                      </span>
                      <div className="text-left">
                        <span className="text-[11px] font-bold block text-slate-800 dark:text-white">Intermediate Mastery</span>
                        <span className="text-[9px] text-slate-500 dark:text-slate-400">Days 41 – 60</span>
                      </div>
                    </div>
                    <Award className="w-3.5 h-3.5 text-purple-500" />
                  </div>
                </div>
              </div>
            </div>

            {/* Typography */}
            <div className="space-y-2.5">
              <span className="text-[10px] font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/15 border border-indigo-200 dark:border-indigo-500/30 px-3 py-1 rounded-full inline-block">
                Structured CEFR Progression
              </span>

              <h2 className="text-2xl sm:text-3xl font-black tracking-tight font-display">
                60-Day CEFR <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#335CFF] via-[#6D5DF6] to-[#10B981]">
                  Fluency Journey
                </span>
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-sm mx-auto leading-relaxed">
                Step-by-step curriculum taking you from zero baseline English (A1) to confident intermediate fluency (B1).
              </p>
            </div>
          </div>
        )}

        {/* SLIDE 4: Real-Life Conversations */}
        {currentSlide === 3 && (
          <div className="space-y-6 animate-slide-up text-center">
            {/* SVG/CSS Bento Grid Illustration */}
            <div className="relative w-full max-w-xs mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/15 via-rose-500/15 to-indigo-500/15 rounded-full blur-2xl animate-blob-drift" />
              
              <div className="relative grid grid-cols-3 gap-2 bg-white/95 dark:bg-slate-850/95 p-3.5 rounded-3xl border border-[#D8E3FF] dark:border-slate-800 shadow-2xl">
                <div className="p-2.5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-500/30 flex flex-col items-center space-y-1">
                  <Coffee className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                  <span className="text-[9px] font-bold text-slate-800 dark:text-slate-200">Café</span>
                </div>
                <div className="p-2.5 rounded-2xl bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-500/30 flex flex-col items-center space-y-1">
                  <Briefcase className="w-5 h-5 text-sky-600 dark:text-sky-400" />
                  <span className="text-[9px] font-bold text-slate-800 dark:text-slate-200">Office</span>
                </div>
                <div className="p-2.5 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-500/30 flex flex-col items-center space-y-1">
                  <Plane className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  <span className="text-[9px] font-bold text-slate-800 dark:text-slate-200">Airport</span>
                </div>
                <div className="p-2.5 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-500/30 flex flex-col items-center space-y-1">
                  <HeartHandshake className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                  <span className="text-[9px] font-bold text-slate-800 dark:text-slate-200">Doctor</span>
                </div>
                <div className="p-2.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-500/30 flex flex-col items-center space-y-1">
                  <ShoppingBag className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-[9px] font-bold text-slate-800 dark:text-slate-200">Shopping</span>
                </div>
                <div className="p-2.5 rounded-2xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-500/30 flex flex-col items-center space-y-1">
                  <MessageSquare className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <span className="text-[9px] font-bold text-slate-800 dark:text-slate-200">Friends</span>
                </div>
              </div>
            </div>

            {/* Typography */}
            <div className="space-y-2.5">
              <span className="text-[10px] font-black uppercase tracking-widest text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-500/15 border border-amber-200 dark:border-amber-500/30 px-3 py-1 rounded-full inline-block">
                Contextual Speaking Engine
              </span>

              <h2 className="text-2xl sm:text-3xl font-black tracking-tight font-display">
                Real-Life <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-rose-500 to-indigo-500">
                  Conversations
                </span>
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-sm mx-auto leading-relaxed">
                Experience realistic dialogue scenarios designed to give you practical phrases you can immediately use in daily life.
              </p>

              {/* Stat Badges Display */}
              <div className="grid grid-cols-2 gap-2 max-w-xs mx-auto pt-1">
                <div className="p-2 rounded-2xl bg-white dark:bg-slate-850 border border-[#D8E3FF] dark:border-slate-800 shadow-sm">
                  <span className="text-base font-black text-indigo-600 dark:text-indigo-400 block">400</span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Dialogues</span>
                </div>
                <div className="p-2 rounded-2xl bg-white dark:bg-slate-850 border border-[#D8E3FF] dark:border-slate-800 shadow-sm">
                  <span className="text-base font-black text-emerald-600 dark:text-emerald-400 block">8,002</span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Spoken Turns</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SLIDE 5: Build Vocabulary Every Day */}
        {currentSlide === 4 && (
          <div className="space-y-6 animate-slide-up text-center">
            {/* SVG/CSS Illustration */}
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 mx-auto flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 via-teal-500/15 to-indigo-500/20 rounded-full blur-2xl animate-blob-drift" />
              
              {/* 3D Flashcard Deck */}
              <div className="relative w-36 h-36 sm:w-40 sm:h-40 flex items-center justify-center">
                {/* Back card */}
                <div className="absolute w-32 h-32 rounded-2xl bg-indigo-100 dark:bg-indigo-950/60 border border-indigo-300 dark:border-indigo-500/30 transform rotate-12 shadow-md" />
                {/* Middle card */}
                <div className="absolute w-32 h-32 rounded-2xl bg-teal-100 dark:bg-teal-950/60 border border-teal-300 dark:border-teal-500/30 transform -rotate-6 shadow-lg" />
                {/* Top active card */}
                <div className="relative w-32 h-32 rounded-2xl bg-white dark:bg-slate-900 border-2 border-emerald-500 p-3 shadow-2xl flex flex-col justify-between transform hover:scale-105 transition duration-300">
                  <div className="flex justify-between items-center">
                    <span className="text-[9px] font-black uppercase text-emerald-600 dark:text-emerald-400">Word Card</span>
                    <Volume2 className="w-3.5 h-3.5 text-emerald-500" />
                  </div>
                  <div>
                    <span className="text-sm font-black text-slate-900 dark:text-white block font-display">Flourish</span>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 block font-hindi">फलना-फूलना / तरक्की</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                    <div className="w-3/4 h-full bg-emerald-500 rounded-full" />
                  </div>
                </div>
              </div>

              {/* Floating Review Badge */}
              <div className="absolute bottom-2 right-1 p-2 rounded-xl bg-amber-500 text-slate-950 font-black text-[10px] shadow-lg flex items-center space-x-1">
                <Repeat className="w-3 h-3" />
                <span>Spaced Repetition</span>
              </div>
            </div>

            {/* Typography */}
            <div className="space-y-2.5">
              <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/15 border border-emerald-200 dark:border-emerald-500/30 px-3 py-1 rounded-full inline-block">
                Master 2,492 Words
              </span>

              <h2 className="text-2xl sm:text-3xl font-black tracking-tight font-display">
                Build Vocabulary <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">
                  Every Single Day
                </span>
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-sm mx-auto leading-relaxed">
                Smart flashcards, grammar patterns, daily review drills, and streak milestones to make English stick permanently.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Navigation / CTA Button */}
      <div className="pt-6">
        <button
          onClick={handleNext}
          className="w-full py-4 rounded-2xl font-black text-xs uppercase tracking-wider shadow-xl transition-all duration-200 cursor-pointer flex items-center justify-center space-x-2 btn-press bg-gradient-to-r from-[#335CFF] via-[#6D5DF6] to-[#10B981] text-white hover:brightness-105 active:scale-98"
        >
          <span>{currentSlide === totalSlides - 1 ? 'Start My Journey' : 'Continue'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
