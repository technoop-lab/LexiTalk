import React from 'react';
import { Volume2, Turtle } from 'lucide-react';
import { VocabItem, NativeLanguageCode, LearningMode, SecondaryLanguageCode } from '../../types';
import { AudioService } from '../../services/AudioService';
import { SUPPORTED_SECONDARY_LANGUAGES } from '../../data/languages';
import { playSoundEffectEffect, speakTextOffline } from '../../utils/audioUtils';

interface VocabCardProps {
  item: VocabItem;
  nativeLang: NativeLanguageCode;
  learningMode?: LearningMode;
  secondaryLang?: SecondaryLanguageCode | null;
}

const DEFAULT_SPANISH_VOCAB: Record<string, { word: string; example: string }> = {
  v_hello: { word: 'hola', example: 'Hola, gusto en verte.' },
  v_hi: { word: 'hola / qué tal', example: 'Hola, soy Rahul.' },
  v_name: { word: 'nombre', example: 'Mi nombre es Sarah.' },
  v_my: { word: 'mi / mío', example: 'Mi nombre es Anil.' },
  v_your: { word: 'tu / su', example: '¿Cuál es tu nombre?' },
  v_from: { word: 'de', example: 'Yo soy de la India.' },
  v_live: { word: 'vivir', example: 'Vivo en Delhi.' },
  v_city: { word: 'ciudad', example: 'Mumbai es una bella ciudad.' },
  v_country: { word: 'país', example: 'India es mi país.' },
  v_student: { word: 'estudiante', example: 'Soy un estudiante universitario.' },
  v_teacher: { word: 'profesor / maestra', example: 'Ella es profesora de inglés.' },
  v_work: { word: 'trabajar / trabajo', example: 'Trabajo en una empresa de tecnología.' },
  v_meet: { word: 'conocer / encontrar', example: 'Gusto en conocerte.' },
  v_nice: { word: 'agradable / lindo', example: 'Es una linda mañana.' },
  v_morning: { word: 'mañana', example: 'Buenos días, mi amigo.' },
  v_afternoon: { word: 'tarde', example: 'Buenas tardes a todos.' },
  v_evening: { word: 'noche / tarde', example: 'Buenas noches, señor.' },
  v_too: { word: 'también', example: 'Gusto en conocerte también.' },
};

export const VocabCard: React.FC<VocabCardProps> = ({ item, nativeLang, learningMode, secondaryLang }) => {
  const nativeTranslation = item.translationsByLang[nativeLang] || item.meaning;
  const exampleTranslation = item.exampleTranslationByLang[nativeLang] || '';

  const secondaryMeta = secondaryLang ? SUPPORTED_SECONDARY_LANGUAGES.find((l) => l.code === secondaryLang) : null;
  const showSecondary = learningMode === 'english_plus_secondary' && !!secondaryLang;
  
  const secondaryWord = secondaryLang === 'es'
    ? (item.secondaryTranslations?.es || DEFAULT_SPANISH_VOCAB[item.id]?.word || '')
    : (secondaryLang && item.secondaryTranslations ? item.secondaryTranslations[secondaryLang as any] : '');

  const secondaryEx = secondaryLang === 'es'
    ? (item.secondaryExampleTranslations?.es || DEFAULT_SPANISH_VOCAB[item.id]?.example || '')
    : (secondaryLang && item.secondaryExampleTranslations ? item.secondaryExampleTranslations[secondaryLang as any] : '');

  const handlePlayAudio = (isSlow = false) => {
    playSoundEffectEffect('tap');
    const audioIdToPlay = isSlow ? (item.slowAudioId || item.audioId) : item.audioId;
    AudioService.play(audioIdToPlay, item.audioText || item.word, {
      isSlow,
      lessonId: 'a1_u01_l01',
      sectionId: 'vocabulary',
    });
  };

  return (
    <div className="bg-slate-900 border border-slate-800 hover:border-emerald-500/40 p-5 rounded-3xl space-y-4 shadow-lg transition-all group">
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-3.5">
          <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center text-3xl shadow-inner border border-slate-700/60 shrink-0">
            {item.icon}
          </div>
          <div>
            <div className="flex items-center space-x-2.5">
              <h3 className="text-xl font-black text-white group-hover:text-emerald-400 transition">{item.word}</h3>
              <span className="text-xs font-mono text-slate-300 bg-slate-800 px-2.5 py-1 rounded-full border border-slate-700">
                {item.phonetic}
              </span>
            </div>
            <p className="text-sm font-bold text-emerald-400 mt-1 inline-flex items-center space-x-1.5">
              <span>{nativeTranslation}</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  playSoundEffectEffect('tap');
                  speakTextOffline(nativeTranslation, 'hi-IN');
                }}
                className="p-1 text-emerald-400 hover:text-emerald-300 transition cursor-pointer"
                title="Listen to Hindi speech"
                aria-label={`Listen to Hindi translation for ${item.word}`}
              >
                <Volume2 className="w-3.5 h-3.5" />
              </button>
            </p>
            {showSecondary && secondaryWord && (
              <p className="text-xs font-bold text-amber-300 mt-1 flex items-center space-x-1">
                <span>{secondaryMeta?.flag || '🌐'} {secondaryMeta?.name || 'Secondary'}:</span>
                <span>{secondaryWord}</span>
              </p>
            )}
          </div>
        </div>

        {/* 48px Touch Target Audio Controls */}
        <div className="flex items-center space-x-2 shrink-0">
          <button
            onClick={() => handlePlayAudio(false)}
            className="w-12 h-12 bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-400 rounded-2xl border border-emerald-500/30 transition active:scale-95 flex items-center justify-center cursor-pointer"
            title="Play Normal Audio"
            aria-label={`Play normal audio for ${item.word}`}
          >
            <Volume2 className="w-6 h-6" />
          </button>
          <button
            onClick={() => handlePlayAudio(true)}
            className="w-12 h-12 bg-teal-500/15 hover:bg-teal-500/25 text-teal-300 rounded-2xl border border-teal-500/30 transition active:scale-95 flex items-center justify-center cursor-pointer"
            title="Play Slow Audio"
            aria-label={`Play slow audio for ${item.word}`}
          >
            <Turtle className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="bg-slate-950/80 border border-slate-800 p-4 rounded-2xl space-y-1.5">
        <p className="text-sm font-medium text-slate-200">
          "<span className="font-bold text-white">{item.exampleSentence}</span>"
        </p>
        {exampleTranslation && (
          <p className="text-xs text-slate-400 italic">"{exampleTranslation}"</p>
        )}
        {showSecondary && secondaryEx && (
          <p className="text-xs text-amber-300/90 font-medium pt-0.5">
            {secondaryMeta?.flag || '🌐'} "{secondaryEx}"
          </p>
        )}
      </div>
    </div>
  );
};
