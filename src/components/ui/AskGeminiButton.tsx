import React, { useState } from 'react';
import { Share2, Check } from 'lucide-react';
import { handoffToGemini } from '../../services/GeminiHandoff';
import { playSoundEffectEffect } from '../../utils/audioUtils';

interface AskGeminiButtonProps {
  /** Pre-filled prompt handed to the learner's installed Gemini app. */
  prompt: string;
  label?: string;
  className?: string;
}

/**
 * GEM-H1 — "Ask Gemini" hand-off, keyless by design.
 * One tap opens the Gemini app already on the phone with the prompt
 * pre-typed (native targeted intent → share sheet → clipboard fallback).
 */
export const AskGeminiButton: React.FC<AskGeminiButtonProps> = ({
  prompt,
  label = 'Ask Gemini',
  className = '',
}) => {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    playSoundEffectEffect('tap');
    const result = await handoffToGemini(prompt);
    if (result === 'clipboard') {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } else if (result === 'failed') {
      window.alert('Copy this prompt into Gemini:\n\n' + prompt);
    }
  };

  return (
    <button
      onClick={handleShare}
      className={`inline-flex items-center space-x-1.5 px-3 py-2 rounded-xl text-[11px] font-black transition border cursor-pointer btn-press ${
        copied
          ? 'bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border-emerald-300 dark:border-emerald-500/40'
          : 'bg-indigo-50 dark:bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-500/30 hover:bg-indigo-100 dark:hover:bg-indigo-500/25'
      } ${className}`}
      title="Open this prompt in the Gemini app on your phone"
    >
      {copied ? <Check className="w-3.5 h-3.5" /> : <Share2 className="w-3.5 h-3.5" />}
      <span>{copied ? 'Copied — paste in Gemini' : label}</span>
    </button>
  );
};
