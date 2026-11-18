import React, { useEffect } from 'react';
import {
  BookOpen,
  ArrowRight,
  X,
  Share2,
  GraduationCap
} from 'lucide-react';
import { playSoundEffectEffect } from '../../utils/audioUtils';

interface StageCompletionModalProps {
  stageNumber: number; // 1 to 6
  dayNumber: number; // 10, 20, 30, 40, 50, 60
  onClose: () => void;
  onViewCertificate?: () => void;
}

interface StageMeta {
  titleEn: string;
  titleHi: string;
  badgeSymbol: string;
  nextStageTitle: string;
}

const STAGE_CONFIGS: Record<number, StageMeta> = {
  1: {
    titleEn: 'Stage 1: Absolute Foundations',
    titleHi: 'स्टेज 1: बुनियादी अंग्रेजी एवं दिनचर्या',
    badgeSymbol: '🎖️',
    nextStageTitle: 'Stage 2: Practical Interactions & Present Tenses',
  },
  2: {
    titleEn: 'Stage 2: Functional Interactions',
    titleHi: 'स्टेज 2: व्यावहारिक संवाद व काल ज्ञान',
    badgeSymbol: '⚡',
    nextStageTitle: 'Stage 3: Conversational Narratives & Past Actions',
  },
  3: {
    titleEn: 'Stage 3: Conversational Narratives',
    titleHi: 'स्टेज 3: भूतकाल की कहानियां व धाराप्रवाह संवाद',
    badgeSymbol: '🌟',
    nextStageTitle: 'Stage 4: Future Horizons & Social Expressions',
  },
  4: {
    titleEn: 'Stage 4: Future Horizons & Opinions',
    titleHi: 'स्टेज 4: भविष्य योजनाएं व सामाजिक अभिव्यक्ति',
    badgeSymbol: '🚀',
    nextStageTitle: 'Stage 5: Professional & Workplace English',
  },
  5: {
    titleEn: 'Stage 5: Professional & Workplace English',
    titleHi: 'स्टेज 5: व्यावसायिक संवाद व साक्षात्कार तैयारी',
    badgeSymbol: '💎',
    nextStageTitle: 'Stage 6: Grand Fluency & Graduation',
  },
  6: {
    titleEn: 'Stage 6: Grand Academy Graduation',
    titleHi: 'स्टेज 6: पूर्ण अकादमी दीक्षांत समारोह',
    badgeSymbol: '👑',
    nextStageTitle: 'Curiosity English Academy Alumni Club',
  },
};

export const StageCompletionModal: React.FC<StageCompletionModalProps> = ({
  stageNumber,
  dayNumber,
  onClose,
  onViewCertificate,
}) => {
  const meta = STAGE_CONFIGS[stageNumber] || STAGE_CONFIGS[1];
  const isFinalGraduation = stageNumber >= 6;

  useEffect(() => {
    playSoundEffectEffect('victory');
  }, []);

  const handleShare = async () => {
    playSoundEffectEffect('tap');
    const text = `I completed the ${meta.titleEn} learning milestone on Curiosity English Academy.`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Curiosity English Academy Stage Complete',
          text,
          url: window.location.href,
        });
      } catch {
        // Fallback
      }
    } else {
      navigator.clipboard.writeText(text);
      alert('Stage completion copied to clipboard!');
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 select-none animate-fade-in">
      <div className="bg-gradient-to-b from-white via-indigo-50/50 to-white dark:from-slate-900 dark:via-indigo-950/40 dark:to-slate-900 border-2 border-indigo-400/50 dark:border-indigo-500/50 rounded-3xl p-6 max-w-md w-full shadow-2xl relative space-y-5 text-center overflow-hidden text-slate-900 dark:text-white max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={() => {
            playSoundEffectEffect('tap');
            onClose();
          }}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 rounded-full cursor-pointer z-20"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Ambient Confetti Streamers */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <span className="absolute left-[10%] top-2 text-2xl animate-confetti-1">🎉</span>
          <span className="absolute left-[30%] top-6 text-xl animate-confetti-2">✨</span>
          <span className="absolute right-[15%] top-4 text-2xl animate-confetti-3">🎊</span>
          <span className="absolute right-[35%] top-8 text-lg animate-confetti-4">⭐</span>
          <span className="absolute left-[50%] top-2 text-xl animate-confetti-5">🏆</span>
        </div>

        {/* Halo Glow */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-64 h-64 bg-indigo-500/20 dark:bg-indigo-500/30 rounded-full blur-3xl pointer-events-none animate-glow-halo" />

        {/* Big Stage Crest Badge */}
        <div className="pt-4 flex flex-col items-center justify-center relative z-10">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-tr from-[#335CFF] via-[#6D5DF6] to-[#10B981] flex items-center justify-center text-5xl sm:text-6xl shadow-2xl shadow-indigo-500/40 border-2 border-white/30 animate-medal-spin relative">
            <span>{meta.badgeSymbol}</span>

            <div className="absolute -bottom-3 px-3 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-400 text-slate-950 shadow-md">
              Course milestone
            </div>
          </div>
        </div>

        {/* Headline */}
        <div className="space-y-1 relative z-10 pt-2">
          <span className="text-[10px] font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/20 px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-500/30 inline-block font-mono">
            Major Milestone Achieved • Day {dayNumber}
          </span>

          <h2 className="text-2xl sm:text-3xl font-black font-display text-slate-900 dark:text-white">
            {meta.titleEn}
          </h2>

          <p className="text-sm text-amber-700 dark:text-amber-300 font-hindi font-bold">
            {meta.titleHi}
          </p>

          <span className="inline-block px-3 py-1 rounded-xl bg-emerald-50 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 font-bold text-xs border border-emerald-200 dark:border-emerald-500/30">
            In-app course milestone; not a CEFR exam or certification
          </span>
        </div>

        {/* Honest summary: this milestone does not add a separate reward or verify CEFR level. */}
        <div className="p-4 bg-white/90 dark:bg-slate-950/80 rounded-2xl border border-[#D9E4FF] dark:border-slate-800 text-left relative z-10 space-y-1">
          <span className="text-xs text-slate-500 dark:text-slate-400 uppercase block text-[9px] font-bold">Course checkpoint</span>
          <strong className="text-sm font-black text-slate-900 dark:text-white">Day {dayNumber} learning milestone</strong>
          <p className="text-[11px] text-slate-500 dark:text-slate-400">Lesson XP is awarded once for a newly completed day. There is no separate stage XP payout or CEFR verification here.</p>
        </div>

        {/* Unlocked Next Stage Banner */}
        <div className="p-3.5 bg-gradient-to-r from-indigo-50/80 to-purple-50/80 dark:from-indigo-950/50 dark:to-purple-950/50 rounded-2xl border border-indigo-200 dark:border-indigo-500/30 text-left relative z-10 flex items-center space-x-3">
          <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-md">
            <BookOpen className="w-4 h-4" />
          </div>
          <div className="min-w-0 flex-1">
            <span className="text-[10px] font-black uppercase text-indigo-600 dark:text-indigo-400 block tracking-wider">
              {dayNumber >= 40 && dayNumber < 60 ? 'Future content' : isFinalGraduation ? 'Course plan complete' : 'Next course milestone'}
            </span>
            <h4 className="text-xs font-black text-slate-900 dark:text-white truncate">
              {dayNumber >= 40 && dayNumber < 60 ? 'Days 41–60 are planned and not yet released' : meta.nextStageTitle}
            </h4>
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-2 pt-1 relative z-10">
          {isFinalGraduation && onViewCertificate && (
            <button
              onClick={() => {
                playSoundEffectEffect('tap');
                onViewCertificate();
              }}
              className="w-full py-4 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 hover:brightness-105 text-slate-950 font-black text-xs uppercase tracking-wider rounded-2xl shadow-xl transition cursor-pointer btn-press flex items-center justify-center space-x-2"
            >
              <GraduationCap className="w-4 h-4" />
              <span>View learning progress summary</span>
            </button>
          )}

          <div className="flex space-x-2">
            <button
              onClick={handleShare}
              className="py-3 px-4 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-black text-xs uppercase tracking-wider rounded-2xl transition flex items-center justify-center space-x-1.5 cursor-pointer btn-press"
            >
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </button>

            <button
              onClick={() => {
                playSoundEffectEffect('tap');
                onClose();
              }}
              className="flex-1 py-3.5 bg-gradient-to-r from-[#335CFF] via-[#6D5DF6] to-[#10B981] hover:brightness-105 text-white font-black text-xs uppercase tracking-wider rounded-2xl shadow-xl transition cursor-pointer btn-press flex items-center justify-center space-x-2"
            >
              <span>Continue Learning (आगे बढ़ें)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
