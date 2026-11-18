import React, { useState } from 'react';
import { Volume2, Play, MessageSquare, Turtle } from 'lucide-react';
import { MiniDialogue, NativeLanguageCode, LearningMode, SecondaryLanguageCode, DialogueLine } from '../../types';
import { AudioService } from '../../services/AudioService';
import { SUPPORTED_SECONDARY_LANGUAGES } from '../../data/languages';
import { playSoundEffectEffect, speakTextOffline } from '../../utils/audioUtils';

interface DialoguePlayerProps {
  dialogues: MiniDialogue[];
  nativeLang: NativeLanguageCode;
  learningMode?: LearningMode;
  secondaryLang?: SecondaryLanguageCode | null;
}

export const DialoguePlayer: React.FC<DialoguePlayerProps> = ({ dialogues, nativeLang, learningMode, secondaryLang }) => {
  const [activeDialogueIndex, setActiveDialogueIndex] = useState(0);
  const [playingLineIndex, setPlayingLineIndex] = useState<number | null>(null);

  const activeDialogue = dialogues[activeDialogueIndex] || dialogues[0];
  const secondaryMeta = secondaryLang ? SUPPORTED_SECONDARY_LANGUAGES.find((l) => l.code === secondaryLang) : null;
  const showSecondary = learningMode === 'english_plus_secondary' && !!secondaryLang;

  const handlePlayLine = async (line: DialogueLine, index: number, isSlow = false) => {
    playSoundEffectEffect('tap');
    setPlayingLineIndex(index);
    await AudioService.playDialogue(line.audioText || line.text, {
      audioId: line.audioId,
      isSlow,
      lessonId: 'a1_u01_l01',
      sectionId: 'dialogues',
      dialogueId: activeDialogue.id,
    });
    setPlayingLineIndex(null);
  };

  const handlePlayFullDialogue = async () => {
    playSoundEffectEffect('tap');
    for (let i = 0; i < activeDialogue.lines.length; i++) {
      const line = activeDialogue.lines[i];
      setPlayingLineIndex(i);
      await AudioService.playDialogue(line.audioText || line.text, {
        audioId: line.audioId,
        lessonId: 'a1_u01_l01',
        sectionId: 'dialogues',
        dialogueId: activeDialogue.id,
      });
      await new Promise((res) => setTimeout(res, 600));
    }
    setPlayingLineIndex(null);
  };

  return (
    <div className="space-y-4">
      {/* Dialogue Selection Tabs */}
      <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-none">
        {dialogues.map((d, idx) => {
          const isActive = activeDialogueIndex === idx;
          return (
            <button
              key={d.id}
              onClick={() => {
                playSoundEffectEffect('tap');
                setActiveDialogueIndex(idx);
                setPlayingLineIndex(null);
              }}
              className={`px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap border transition min-h-[44px] ${
                isActive
                  ? 'bg-emerald-500 text-slate-950 border-emerald-400 font-black shadow-lg scale-105'
                  : 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white'
              }`}
            >
              Scenario {idx + 1}
            </button>
          );
        })}
      </div>

      {/* Active Dialogue Player Card */}
      <div className="bg-slate-900 border border-slate-800 p-5 sm:p-6 rounded-3xl space-y-4 shadow-xl">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div>
            <span className="text-xs font-black uppercase text-emerald-400 tracking-wider">
              {activeDialogue.title}
            </span>
            <p className="text-sm text-slate-300 font-medium mt-0.5">{activeDialogue.context}</p>
          </div>

          <button
            onClick={handlePlayFullDialogue}
            className="px-4 py-2.5 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 rounded-2xl border border-emerald-500/30 text-xs font-black inline-flex items-center space-x-2 transition active:scale-95 shrink-0 min-h-[44px]"
          >
            <Play className="w-4 h-4 fill-emerald-300" />
            <span>Play Full Dialogue</span>
          </button>
        </div>

        {/* Lines Sequence */}
        <div className="space-y-3.5">
          {activeDialogue.lines.map((line, idx) => {
            const isPlaying = playingLineIndex === idx;
            const nativeTranslation = line.translationsByLang[nativeLang] || '';
            const secondaryTranslation = secondaryLang ? (line.translationsByLang[secondaryLang as any] || line.secondaryTranslations?.[secondaryLang as any] || '') : '';

            return (
              <div
                key={idx}
                className={`p-4 rounded-2xl border transition ${
                  isPlaying
                    ? 'bg-emerald-950/60 border-emerald-500 scale-[1.01] shadow-lg'
                    : 'bg-slate-950 border-slate-800/90 hover:border-slate-700'
                }`}
              >
                <div className="flex items-start justify-between space-x-3">
                  <div className="flex items-start space-x-3">
                    <span className="text-3xl shrink-0">{line.avatar}</span>
                    <div>
                      <span className="text-xs font-black uppercase tracking-wider text-slate-400 block">
                        {line.speaker}
                      </span>
                      <p className="text-base font-bold text-white leading-snug mt-1">"{line.text}"</p>
                      {nativeTranslation && (
                        <p className="text-sm text-slate-400 italic mt-1 font-medium flex items-center space-x-1.5">
                          <span>"{nativeTranslation}"</span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              playSoundEffectEffect('tap');
                              speakTextOffline(nativeTranslation, 'hi-IN');
                            }}
                            className="p-1 text-slate-400 hover:text-slate-200 transition cursor-pointer"
                            title="Listen to Hindi speech"
                            aria-label="Listen to Hindi translation"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                        </p>
                      )}
                      {showSecondary && secondaryTranslation && (
                        <p className="text-xs font-bold text-amber-300 mt-1">
                          {secondaryMeta?.flag || '🌐'} "{secondaryTranslation}"
                        </p>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={() => handlePlayLine(line, idx)}
                    className={`p-3 rounded-2xl border transition shrink-0 min-w-[48px] min-h-[48px] flex items-center justify-center cursor-pointer ${
                      isPlaying
                        ? 'bg-emerald-500 text-slate-950 border-emerald-400 animate-pulse'
                        : 'bg-slate-900 text-slate-300 border-slate-700 hover:text-white'
                    }`}
                    aria-label={`Play audio line for ${line.speaker}`}
                  >
                    <Volume2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
