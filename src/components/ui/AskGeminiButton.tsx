import React, { useState } from 'react';
import { Share2, Check, ExternalLink } from 'lucide-react';
import { handoffToGemini, isNativeApp, GEMINI_WEB_URL } from '../../services/GeminiHandoff';
import { playSoundEffectEffect } from '../../utils/audioUtils';

interface AskGeminiButtonProps {
  /** Pre-filled prompt handed to the learner's own Gemini app or account. */
  prompt: string;
  label?: string;
  className?: string;
}

/**
 * "Ask Gemini" hand-off. Keyless by design.
 * Android: opens the installed Gemini app (or the share sheet) with the prompt.
 * Website: copies the prompt, then shows an "Open Gemini" link (new tab).
 */
export const AskGeminiButton: React.FC<AskGeminiButtonProps> = ({
  prompt,
  label = 'Ask Gemini',
  className = '',
}) => {
  const [copied, setCopied] = useState(false);
  const [showWebLink, setShowWebLink] = useState(false);

  const handleShare = async () => {
    playSoundEffectEffect('tap');
    const result = await handoffToGemini(prompt);
    if (result === 'clipboard') {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
      // Web only: keep the link visible so the learner can open Gemini in a new tab
      setShowWebLink(!isNativeApp());
    } else if (result === 'failed') {
      window.alert('Copy this prompt into Gemini:\n\n' + prompt);
    }
  };

  return (
    <span className="inline-flex flex-wrap items-center gap-2">
      <button
        onClick={handleShare}
        className={`inline-flex items-center space-x-1.5 px-3 py-2 rounded-xl text-[11px] font-black transition border cursor-pointer btn-press ${
          copied
            ? 'bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border-emerald-300 dark:border-emerald-500/40'
            : 'bg-indigo-50 dark:bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-500/30 hover:bg-indigo-100 dark:hover:bg-indigo-500/25'
        } ${className}`}
        title="Open this prompt in Gemini"
      >
        {copied ? <Check className="w-3.5 h-3.5" /> : <Share2 className="w-3.5 h-3.5" />}
        <span>{copied ? 'Copied — paste in Gemini' : label}</span>
      </button>

      {showWebLink && (
        <a
          href={GEMINI_WEB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-1.5 px-3 py-2 rounded-xl text-[11px] font-black border cursor-pointer bg-white dark:bg-slate-800 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-500/30 hover:bg-indigo-50 dark:hover:bg-indigo-500/15"
        >
          <ExternalLink className="w-3.5 h-3.5" />
          <span>Open Gemini</span>
        </a>
      )}
    </span>
  );
};
