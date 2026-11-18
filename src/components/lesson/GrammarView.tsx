import React, { useState } from 'react';
import { Volume2, Check, Sparkles, BookOpen } from 'lucide-react';
import { DetailedLessonData, NativeLanguageCode } from '../../types';
import { playSoundEffectEffect } from '../../utils/audioUtils';
import { AudioService } from '../../services/AudioService';

interface GrammarViewProps {
  grammar: DetailedLessonData['grammar'];
  nativeLang: NativeLanguageCode;
}

export const GrammarView: React.FC<GrammarViewProps> = ({ grammar, nativeLang }) => {
  const [selectedSubject, setSelectedSubject] = useState<'I' | 'You'>('I');
  const [selectedInfo, setSelectedInfo] = useState<string>('Anil');

  const conceptLocalized = grammar.conceptsByLang?.[nativeLang] || grammar.concept;

  const infoOptions = selectedSubject === 'I'
    ? [
        { label: 'Anil (Name)', value: 'Anil' },
        { label: 'from India (Origin)', value: 'from India' },
        { label: 'a student (Profession)', value: 'a student' },
        { label: 'in Delhi (City)', value: 'in Delhi' }
      ]
    : [
        { label: 'Maria (Name)', value: 'Maria' },
        { label: 'from Spain (Origin)', value: 'from Spain' },
        { label: 'a teacher (Profession)', value: 'a teacher' }
      ];

  const constructedFull = selectedSubject === 'I' ? `I am ${selectedInfo}.` : `You are ${selectedInfo}.`;
  const constructedContracted = selectedSubject === 'I' ? `I'm ${selectedInfo}.` : `You're ${selectedInfo}.`;

  return (
    <div className="space-y-6">
      {/* Overview Header */}
      <div className="bg-slate-900 border border-slate-800 p-5 sm:p-6 rounded-3xl space-y-2.5 shadow-xl">
        <div className="flex items-center space-x-2 text-emerald-400 font-black text-xs uppercase tracking-wider">
          <BookOpen className="w-4 h-4" />
          <span>{grammar.title}</span>
        </div>
        <p className="text-base text-slate-200 leading-relaxed font-semibold">{conceptLocalized}</p>
      </div>

      {/* Contractions Table */}
      <div className="bg-slate-900 border border-slate-800 p-5 sm:p-6 rounded-3xl space-y-4 shadow-xl">
        <h3 className="text-lg font-black text-white flex items-center space-x-2">
          <span>{grammar.verbBeExplanation.title}</span>
        </h3>
        <p className="text-sm text-slate-300 leading-relaxed font-medium">{grammar.verbBeExplanation.content}</p>

        <div className="space-y-3">
          {grammar.verbBeExplanation.contractionsTable.map((row, idx) => {
            const localizedMeaning = row.meaningByLang[nativeLang] || '';
            return (
              <div
                key={idx}
                className="bg-slate-950 border border-slate-800 p-4 rounded-2xl flex items-center justify-between transition hover:border-emerald-500/40"
              >
                <div>
                  <div className="flex items-center space-x-2.5">
                    <span className="text-sm font-bold text-slate-400 line-through">{row.full}</span>
                    <span className="text-sm text-slate-500">→</span>
                    <span className="text-base font-black text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-xl border border-emerald-500/20">
                      {row.contracted}
                    </span>
                  </div>
                  {localizedMeaning && (
                    <span className="text-xs text-slate-400 block mt-1.5 font-medium">{localizedMeaning}</span>
                  )}
                </div>

                <button
                  onClick={() => {
                    playSoundEffectEffect('tap');
                    AudioService.play((row as any).audioId, row.contracted, {
                      lessonId: 'a1_u01_l01',
                      sectionId: 'grammar',
                    });
                  }}
                  className="w-12 h-12 bg-slate-900 hover:bg-slate-850 text-emerald-400 rounded-2xl border border-slate-700 transition flex items-center justify-center cursor-pointer min-w-[48px] min-h-[48px]"
                  aria-label={`Play audio for ${row.contracted}`}
                >
                  <Volume2 className="w-5 h-5" />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Pattern Constructor */}
      <div className="bg-gradient-to-tr from-indigo-950/60 via-slate-900 to-indigo-950/60 border border-indigo-500/30 p-5 sm:p-6 rounded-3xl space-y-4 shadow-xl">
        <div className="flex items-center space-x-2 text-indigo-300 font-black text-xs uppercase tracking-wider">
          <Sparkles className="w-4 h-4 text-indigo-400" />
          <span>Interactive Pattern Builder</span>
        </div>

        {/* Step 1: Subject Selection */}
        <div className="space-y-2">
          <label className="text-xs text-slate-400 font-bold uppercase tracking-wider">1. Select Subject Pronoun</label>
          <div className="grid grid-cols-2 gap-2.5">
            <button
              onClick={() => {
                playSoundEffectEffect('tap');
                setSelectedSubject('I');
                setSelectedInfo('Anil');
              }}
              className={`min-h-[48px] py-3 font-black text-sm rounded-2xl border transition cursor-pointer ${
                selectedSubject === 'I'
                  ? 'bg-indigo-600 text-white border-indigo-400 shadow-md'
                  : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-850'
              }`}
            >
              I + am (I'm)
            </button>
            <button
              onClick={() => {
                playSoundEffectEffect('tap');
                setSelectedSubject('You');
                setSelectedInfo('Maria');
              }}
              className={`min-h-[48px] py-3 font-black text-sm rounded-2xl border transition cursor-pointer ${
                selectedSubject === 'You'
                  ? 'bg-indigo-600 text-white border-indigo-400 shadow-md'
                  : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-850'
              }`}
            >
              You + are (You're)
            </button>
          </div>
        </div>

        {/* Step 2: Information Selection */}
        <div className="space-y-2">
          <label className="text-xs text-slate-400 font-bold uppercase tracking-wider">2. Select Complement Information</label>
          <div className="grid grid-cols-2 gap-2.5">
            {infoOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => {
                  playSoundEffectEffect('tap');
                  setSelectedInfo(opt.value);
                }}
                className={`min-h-[48px] p-3 text-left font-bold text-sm rounded-2xl border transition cursor-pointer ${
                  selectedInfo === opt.value
                    ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300 font-black'
                    : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-850'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Output Constructed Sentence */}
        <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2.5 text-center">
          <span className="text-xs uppercase font-black tracking-widest text-indigo-400 block">Generated Sentence</span>
          <p className="text-xl font-black text-white">{constructedContracted}</p>
          <span className="text-sm text-slate-400 block font-mono">Full Form: {constructedFull}</span>

          <button
            onClick={() => {
              playSoundEffectEffect('tap');
              AudioService.play(undefined, constructedContracted, {
                lessonId: 'a1_u01_l01',
                sectionId: 'grammar',
              });
            }}
            className="mt-2 min-h-[44px] px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-2xl inline-flex items-center space-x-2 transition shadow-lg cursor-pointer"
          >
            <Volume2 className="w-5 h-5" />
            <span>Hear Constructed Sentence</span>
          </button>
        </div>
      </div>
    </div>
  );
};
