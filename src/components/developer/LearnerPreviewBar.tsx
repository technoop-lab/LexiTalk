import React from 'react';
import { Eye, X, ShieldAlert } from 'lucide-react';

interface LearnerPreviewBarProps {
  onExitPreview: () => void;
  onOpenControls: () => void;
}

export const LearnerPreviewBar: React.FC<LearnerPreviewBarProps> = ({
  onExitPreview,
  onOpenControls,
}) => {
  return (
    <div className="fixed bottom-16 left-0 right-0 z-50 px-4 pointer-events-none flex justify-center">
      <div className="bg-slate-900/95 border-2 border-amber-500/80 shadow-2xl backdrop-blur-md text-slate-100 px-4 py-2 rounded-2xl flex items-center space-x-3 pointer-events-auto max-w-md w-full justify-between animate-slide-up">
        <div className="flex items-center space-x-2.5">
          <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
            <Eye className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center space-x-1.5">
              <span className="text-[11px] font-black text-amber-300 uppercase tracking-tight">
                Learner Preview Active
              </span>
              <span className="text-[9px] bg-slate-800 text-slate-400 px-1 rounded font-mono">
                Locks On
              </span>
            </div>
            <p className="text-[10px] text-slate-300">
              Testing exact learner restrictions & prerequisites.
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-1.5 shrink-0">
          <button
            onClick={onOpenControls}
            className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 text-[11px] font-bold rounded-lg border border-slate-700 transition"
          >
            Scenarios
          </button>
          <button
            onClick={onExitPreview}
            className="px-2.5 py-1 bg-amber-500 hover:bg-amber-400 text-slate-950 text-[11px] font-black rounded-lg shadow transition"
          >
            Exit Preview
          </button>
        </div>
      </div>
    </div>
  );
};
