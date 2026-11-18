import React from 'react';
import { AlertTriangle, CheckCircle2, XCircle, HelpCircle } from 'lucide-react';
import { CommonMistake, NativeLanguageCode } from '../../types';
import { playSoundEffectEffect } from '../../utils/audioUtils';
import { AudioService } from '../../services/AudioService';

interface CommonMistakesViewProps {
  mistakes: CommonMistake[];
  nativeLang: NativeLanguageCode;
}

export const CommonMistakesView: React.FC<CommonMistakesViewProps> = ({ mistakes, nativeLang }) => {
  return (
    <div className="space-y-4">
      <div className="bg-amber-500/10 border border-amber-500/30 p-4 rounded-3xl flex items-center space-x-3">
        <AlertTriangle className="w-6 h-6 text-amber-400 shrink-0" />
        <div>
          <h3 className="text-sm font-black text-amber-300">Avoid Common Beginner Pitfalls</h3>
          <p className="text-xs text-slate-300 mt-0.5">
            Learn why these common errors happen so you can speak with accuracy right away.
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {mistakes.map((m) => {
          const localizedWhy = m.explanationsByLang?.[nativeLang] || m.whyExplanation;

          return (
            <div key={m.id} className="bg-slate-900 border border-slate-800 p-4 rounded-3xl space-y-3 shadow-lg">
              <div className="grid grid-cols-2 gap-2">
                {/* Incorrect Card */}
                <div className="bg-rose-950/40 border border-rose-500/30 p-3 rounded-2xl space-y-1">
                  <div className="flex items-center space-x-1.5 text-rose-400 font-bold text-[10px] uppercase">
                    <XCircle className="w-3.5 h-3.5" />
                    <span>Incorrect</span>
                  </div>
                  <p className="text-xs font-black text-rose-200 line-through">"{m.incorrect}"</p>
                </div>

                {/* Correct Card */}
                <div
                  onClick={() => {
                    playSoundEffectEffect('tap');
                    AudioService.play((m as any).audioId, m.correct, {
                      lessonId: 'a1_u01_l01',
                      sectionId: 'common_mistakes',
                    });
                  }}
                  className="bg-emerald-950/40 border border-emerald-500/30 p-3 rounded-2xl space-y-1 cursor-pointer hover:border-emerald-400/60 transition"
                >
                  <div className="flex items-center space-x-1.5 text-emerald-400 font-bold text-[10px] uppercase">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Correct</span>
                  </div>
                  <p className="text-xs font-black text-emerald-200">"{m.correct}"</p>
                </div>
              </div>

              {/* Why Explanation */}
              <div className="bg-slate-950 p-3 rounded-2xl border border-slate-800 flex items-start space-x-2">
                <HelpCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-300 leading-relaxed font-medium">{localizedWhy}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
