import React from 'react';
import { Award, Download, Share2, X, CheckCircle2, ShieldCheck, Sparkles, Printer } from 'lucide-react';
import { CEFRLevel, UserAcademyProfile } from '../../types';
import { HindiCourseService } from '../../services/HindiCourseService';
import { playSoundEffectEffect } from '../../utils/audioUtils';

interface GraduationCertificateModalProps {
  user: UserAcademyProfile;
  cefr?: CEFRLevel | string;
  daysCompleted?: number;
  vocabLearned?: number;
  dialoguesCompleted?: number;
  totalXp?: number;
  speakingMinutes?: number;
  onClose: () => void;
}

export const GraduationCertificateModal: React.FC<GraduationCertificateModalProps> = ({
  user,
  cefr = 'A1',
  daysCompleted = 0,
  vocabLearned = 0,
  dialoguesCompleted = 0,
  totalXp,
  speakingMinutes,
  onClose,
}) => {
  const dateStr = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // This is an in-app progress snapshot; no verification ID is issued.
  const availableDays = HindiCourseService.getAvailableDaysCount();
  const safeDaysCompleted = Math.min(availableDays, Math.max(0, Math.floor(Number(daysCompleted) || 0)));

  const handlePrintDownload = () => {
    playSoundEffectEffect('tap');
    window.print();
  };

  const handleShare = async () => {
    playSoundEffectEffect('tap');
    const text = `I viewed my Curiosity English Academy learning progress summary. It is an in-app activity snapshot, not an official CEFR credential.`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Curiosity English Academy Learning Progress Summary',
          text,
          url: window.location.href,
        });
      } catch {
        // Fallback
      }
    } else {
      navigator.clipboard.writeText(text);
      alert('Progress summary details copied to clipboard!');
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 select-none animate-fade-in print:p-0 print:bg-white">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 sm:p-6 max-w-xl w-full shadow-2xl relative space-y-5 max-h-[95vh] overflow-y-auto print:border-none print:shadow-none print:max-w-none print:p-0 print:m-0">
        {/* Close Button */}
        <button
          onClick={() => {
            playSoundEffectEffect('tap');
            onClose();
          }}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white bg-slate-800 rounded-full cursor-pointer z-20 print:hidden"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Printable Certificate Canvas with Royal Indigo Double Border & Gold Foil Accents */}
        <div className="bg-gradient-to-b from-[#0B1225] via-[#050816] to-[#0A1128] border-8 border-double border-[#335CFF] p-6 sm:p-8 rounded-2xl text-center space-y-4 shadow-2xl relative overflow-hidden text-white print:bg-white print:text-black print:border-indigo-700">
          {/* Subtle Watermark */}
          <div className="absolute right-4 bottom-4 opacity-5 text-indigo-300 text-8xl sm:text-9xl font-serif select-none pointer-events-none print:hidden">
            CEA
          </div>

          {/* Corner Flourishes */}
          <div className="absolute top-2 left-2 text-amber-400 text-xs font-serif opacity-70">❖</div>
          <div className="absolute top-2 right-2 text-amber-400 text-xs font-serif opacity-70">❖</div>
          <div className="absolute bottom-2 left-2 text-amber-400 text-xs font-serif opacity-70">❖</div>
          <div className="absolute bottom-2 right-2 text-amber-400 text-xs font-serif opacity-70">❖</div>

          {/* Academy Header */}
          <div className="flex items-center justify-center space-x-2 text-amber-400 font-black text-xs sm:text-sm uppercase tracking-widest font-mono">
            <Award className="w-5 h-5 text-amber-400" />
            <span>CURIOSITY ENGLISH ACADEMY</span>
          </div>

          {/* Certificate Title */}
          <div className="border-b-2 border-amber-500/40 pb-3 space-y-1">
            <h1 className="text-xl sm:text-2xl font-serif font-bold text-amber-200 tracking-wide uppercase">
              Curiosity English Academy Learning Progress Summary
            </h1>
            <p className="text-[11px] sm:text-xs text-indigo-200 italic">
              In-app learning activity only; not an official CEFR assessment or credential
            </p>
          </div>

          <p className="text-xs text-slate-300 italic pt-1">This progress snapshot is for</p>

          {/* Learner Name */}
          <h2 className="text-2xl sm:text-3xl font-black text-white underline decoration-amber-400 decoration-2 underline-offset-6 font-display">
            {user.name || 'Dedicated Learner'}
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
            has recorded the in-app learning activity summarized below. These figures do not verify CEFR proficiency, spoken fluency, or pronunciation.
          </p>

          {/* CEFR Level Pill */}
          <div className="inline-flex items-center space-x-2 px-5 py-2 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-500 text-slate-950 font-black text-sm sm:text-base rounded-2xl uppercase shadow-lg font-display">
            <Sparkles className="w-4 h-4" />
            <span>Selected learning level: {cefr}</span>
          </div>

          {/* 6 Activity Summary Fields */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 pt-3 text-left font-mono text-[10px] sm:text-[11px] border-t border-b border-slate-800 py-3 print:border-gray-300">
            <div className="bg-slate-950/60 p-2 rounded-xl border border-indigo-500/20 text-center">
              <span className="text-slate-400 block text-[9px]">Released days completed</span>
              <strong className="text-white font-bold">{safeDaysCompleted} / {availableDays}</strong>
            </div>

            <div className="bg-slate-950/60 p-2 rounded-xl border border-indigo-500/20 text-center">
              <span className="text-slate-400 block text-[9px]">Vocabulary in completed lessons</span>
              <strong className="text-teal-300 font-bold">{vocabLearned}</strong>
            </div>

            <div className="bg-slate-950/60 p-2 rounded-xl border border-indigo-500/20 text-center">
              <span className="text-slate-400 block text-[9px]">Dialogue turns in completed lessons</span>
              <strong className="text-indigo-300 font-bold">{dialoguesCompleted}</strong>
            </div>

            <div className="bg-slate-950/60 p-2 rounded-xl border border-indigo-500/20 text-center">
              <span className="text-slate-400 block text-[9px]">Total XP</span>
              <strong className="text-amber-300 font-bold">{totalXp || user.totalXp || 0}</strong>
            </div>

            <div className="bg-slate-950/60 p-2 rounded-xl border border-indigo-500/20 text-center">
              <span className="text-slate-400 block text-[9px]">Speaking</span>
              <strong className="text-rose-300 font-bold">{speakingMinutes === undefined ? 'Not tracked' : `${speakingMinutes} Min`}</strong>
            </div>

            <div className="bg-slate-950/60 p-2 rounded-xl border border-indigo-500/20 text-center">
              <span className="text-slate-400 block text-[9px]">Status</span>
              <strong className="text-emerald-300 font-bold">RECORDED ACTIVITY</strong>
            </div>
          </div>

          {/* Qualification disclaimer and snapshot date */}
          <p className="text-[10px] text-slate-400 border-t border-slate-800/80 pt-3">
            This locally recorded activity summary is not an external qualification, official CEFR certificate, or verification of fluency.
          </p>
          <div className="pt-1 text-[10px] text-slate-400 font-mono text-center">
            Snapshot generated: {dateStr}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3 print:hidden">
          <button
            onClick={handleShare}
            className="py-3 px-5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-black text-xs uppercase tracking-wider rounded-2xl transition flex items-center justify-center space-x-2 cursor-pointer btn-press"
          >
            <Share2 className="w-4 h-4" />
            <span>Share</span>
          </button>

          <button
            onClick={handlePrintDownload}
            className="flex-1 py-3.5 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-500 hover:from-amber-300 text-slate-950 font-black text-xs uppercase tracking-wider rounded-2xl shadow-xl flex items-center justify-center space-x-2 transition active:scale-95 cursor-pointer btn-press"
          >
            <Printer className="w-4 h-4" />
            <span>Print / Save Progress Summary</span>
          </button>
        </div>
      </div>
    </div>
  );
};
