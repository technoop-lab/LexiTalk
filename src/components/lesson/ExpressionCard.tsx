import React from 'react';
import { Volume2, Turtle } from 'lucide-react';
import { ExpressionItem, NativeLanguageCode, LearningMode, SecondaryLanguageCode } from '../../types';
import { AudioService } from '../../services/AudioService';
import { SUPPORTED_SECONDARY_LANGUAGES } from '../../data/languages';
import { playSoundEffectEffect, speakTextOffline } from '../../utils/audioUtils';

interface ExpressionCardProps {
  item: ExpressionItem;
  nativeLang: NativeLanguageCode;
  learningMode?: LearningMode;
  secondaryLang?: SecondaryLanguageCode | null;
}

const DEFAULT_SPANISH_EXPRESSIONS: Record<string, string> = {
  e_hello: 'Hola.',
  e_hi: 'Hola.',
  e_my_name: 'Mi nombre es ___.',
  e_im: 'Soy ___.',
  e_whats_your_name: '¿Cómo te llamas?',
  e_im_from: 'Soy de ___.',
  e_where_from: '¿De dónde eres?',
  e_live_in: 'Vivo en ___.',
  e_nice_to_meet: 'Gusto en conocerte.',
  e_nice_to_meet_too: 'Gusto en conocerte también.',
};

export const ExpressionCard: React.FC<ExpressionCardProps> = ({ item, nativeLang, learningMode, secondaryLang }) => {
  const nativeTranslation = item.translationsByLang[nativeLang] || '';
  const secondaryMeta = secondaryLang ? SUPPORTED_SECONDARY_LANGUAGES.find((l) => l.code === secondaryLang) : null;
  const showSecondary = learningMode === 'english_plus_secondary' && !!secondaryLang;
  
  const secondaryText = secondaryLang === 'es'
    ? (item.secondaryTranslations?.es || DEFAULT_SPANISH_EXPRESSIONS[item.id] || '')
    : (secondaryLang && item.secondaryTranslations ? item.secondaryTranslations[secondaryLang as any] : '');

  const handlePlayAudio = (isSlow = false) => {
    playSoundEffectEffect('tap');
    const audioIdToPlay = isSlow ? (item.slowAudioId || item.audioId) : item.audioId;
    AudioService.play(audioIdToPlay, item.audioText || item.expression, {
      isSlow,
      lessonId: 'a1_u01_l01',
      sectionId: 'expressions',
    });
  };

  return (
    <div className="bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-slate-800 p-5 rounded-3xl flex items-center justify-between space-x-3 shadow-lg hover:border-indigo-500/40 transition">
      <div className="flex items-center space-x-3.5">
        <div className="w-12 h-12 bg-indigo-500/20 border border-indigo-500/30 rounded-2xl flex items-center justify-center text-2xl shrink-0">
          {item.icon}
        </div>
        <div>
          <h4 className="text-lg font-black text-white">{item.expression}</h4>
          <p className="text-sm font-bold text-indigo-300 mt-0.5 inline-flex items-center space-x-1.5">
            <span>{nativeTranslation}</span>
            {nativeTranslation && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  playSoundEffectEffect('tap');
                  speakTextOffline(nativeTranslation, 'hi-IN');
                }}
                className="p-1 text-indigo-300 hover:text-indigo-200 transition cursor-pointer"
                title="Listen to Hindi speech"
                aria-label={`Listen to Hindi translation for ${item.expression}`}
              >
                <Volume2 className="w-3.5 h-3.5" />
              </button>
            )}
          </p>
          {showSecondary && secondaryText && (
            <p className="text-xs font-bold text-amber-300 mt-1">
              {secondaryMeta?.flag || '🌐'} {secondaryMeta?.name || 'Secondary'}: {secondaryText}
            </p>
          )}
          <span className="text-xs text-slate-400 font-medium block mt-1">{item.usageNote}</span>
        </div>
      </div>

      {/* 48px Touch Targets */}
      <div className="flex items-center space-x-2 shrink-0">
        <button
          onClick={() => handlePlayAudio(false)}
          className="w-12 h-12 bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300 rounded-2xl border border-indigo-500/30 transition active:scale-95 flex items-center justify-center cursor-pointer"
          title="Play Normal Audio"
          aria-label={`Play normal audio for ${item.expression}`}
        >
          <Volume2 className="w-6 h-6" />
        </button>
        <button
          onClick={() => handlePlayAudio(true)}
          className="w-12 h-12 bg-teal-500/20 hover:bg-teal-500/30 text-teal-300 rounded-2xl border border-teal-500/30 transition active:scale-95 flex items-center justify-center cursor-pointer"
          title="Play Slow Audio"
          aria-label={`Play slow audio for ${item.expression}`}
        >
          <Turtle className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};
