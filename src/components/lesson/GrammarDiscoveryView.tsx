import React, { useState } from 'react';
import { Sparkles, CheckCircle2, ArrowRight, Lightbulb, Volume2 } from 'lucide-react';
import { NativeLanguageCode, LearningMode, SecondaryLanguageCode } from '../../types';
import { AudioService } from '../../services/AudioService';

interface GrammarDiscoveryViewProps {
  nativeLang: NativeLanguageCode;
  learningMode?: LearningMode;
  secondaryLang?: SecondaryLanguageCode | null;
  onCompleteDiscovery: () => void;
}

export const GrammarDiscoveryView: React.FC<GrammarDiscoveryViewProps> = ({
  nativeLang,
  learningMode,
  secondaryLang,
  onCompleteDiscovery,
}) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  const isSpanishMode = learningMode === 'english_plus_secondary' && secondaryLang === 'es';

  const handleSelectOption = (index: number) => {
    AudioService.playSound('tap');
    setSelectedOption(index);
    setIsRevealed(true);
    if (index === 0) {
      AudioService.playSound('correct');
    } else {
      AudioService.playSound('wrong');
    }
  };

  const options = [
    {
      text: nativeLang === 'hi' 
        ? '"I am" और "I\'m" दोनों का अर्थ समान है। "I\'m" बोलचाल की अंग्रेजी में संकुचित (shortened) रूप है।'
        : '"I am" and "I\'m" have the exact same meaning. "I\'m" is a natural contraction used in spoken English.',
      isCorrect: true,
    },
    {
      text: nativeLang === 'hi'
        ? '"I\'m" केवल लिखित अंग्रेजी में ही उपयोग होता है, बोलचाल में नहीं।'
        : '"I\'m" is only used in formal writing and means something different.',
      isCorrect: false,
    },
    {
      text: nativeLang === 'hi'
        ? '"I am" कहना अंग्रेजी में पूरी तरह गलत माना जाता है।'
        : '"I am" is grammatically incorrect in modern English.',
      isCorrect: false,
    },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="bg-gradient-to-tr from-indigo-950/60 via-slate-900 to-indigo-900/40 border border-indigo-500/30 p-6 rounded-3xl space-y-4 shadow-xl">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-black uppercase tracking-widest text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20 flex items-center space-x-1.5">
            <Lightbulb className="w-3.5 h-3.5 text-indigo-400" />
            <span>STAGE 5 • GRAMMAR DISCOVERY MOMENT</span>
          </span>
          <span className="text-2xl">🧠</span>
        </div>

        <div>
          <h2 className="text-2xl font-black text-white">Notice the Pattern First</h2>
          <p className="text-xs text-slate-300 mt-1 leading-relaxed">
            Before reading grammar rules, inspect these real example sentences. What do you observe?
          </p>
        </div>

        {/* Side-by-Side Comparison Box */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-slate-950/90 border border-slate-800 p-4 rounded-2xl space-y-2">
            <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">Full Form</span>
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <p className="text-sm font-black text-white">I am Anil.</p>
                <button
                  onClick={() => AudioService.play(undefined, 'I am Anil.')}
                  className="p-1.5 bg-slate-800 text-slate-300 rounded-lg hover:text-white"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-black text-white">I am from India.</p>
                <button
                  onClick={() => AudioService.play(undefined, 'I am from India.')}
                  className="p-1.5 bg-slate-800 text-slate-300 rounded-lg hover:text-white"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
            {nativeLang === 'hi' && (
              <p className="text-[11px] text-slate-400 italic">मैं अनिल हूँ। / मैं भारत से हूँ।</p>
            )}
          </div>

          <div className="bg-emerald-950/30 border border-emerald-500/30 p-4 rounded-2xl space-y-2">
            <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400 block">Contracted Spoken Form</span>
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <p className="text-sm font-black text-emerald-300">I'm Anil.</p>
                <button
                  onClick={() => AudioService.play(undefined, "I'm Anil.")}
                  className="p-1.5 bg-emerald-500/20 text-emerald-300 rounded-lg hover:text-white"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-black text-emerald-300">I'm from India.</p>
                <button
                  onClick={() => AudioService.play(undefined, "I'm from India.")}
                  className="p-1.5 bg-emerald-500/20 text-emerald-300 rounded-lg hover:text-white"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
            {nativeLang === 'hi' && (
              <p className="text-[11px] text-emerald-400/80 italic">मैं अनिल हूँ। / मैं भारत से हूँ।</p>
            )}
          </div>
        </div>

        {isSpanishMode && (
          <div className="bg-amber-500/10 border border-amber-500/20 p-3 rounded-2xl text-[11px] text-amber-300 font-bold">
            🇪🇸 Spanish note: Spanish usually drops "yo" ("Soy de la India", "Soy Anil"). In English, subject pronoun ("I") is ALWAYS required!
          </div>
        )}
      </div>

      {/* Discovery Prompt */}
      <div className="bg-slate-900 border border-slate-800 p-5 rounded-3xl space-y-3 shadow-lg">
        <h3 className="text-base font-black text-white">What do you notice about "I am" and "I'm"?</h3>

        <div className="space-y-2">
          {options.map((opt, idx) => {
            const isSelected = selectedOption === idx;
            let btnStyle = 'bg-slate-950/80 border-slate-800 text-slate-200 hover:border-slate-700';
            if (isRevealed && isSelected) {
              btnStyle = opt.isCorrect
                ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300 font-bold'
                : 'bg-rose-500/20 border-rose-400 text-rose-300 font-bold';
            }

            return (
              <button
                key={idx}
                onClick={() => handleSelectOption(idx)}
                className={`w-full p-4 rounded-2xl border text-left text-xs transition flex items-start justify-between space-x-2 ${btnStyle}`}
              >
                <span>{opt.text}</span>
                {isRevealed && isSelected && opt.isCorrect && (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                )}
              </button>
            );
          })}
        </div>

        {/* Discovery Revelation */}
        {isRevealed && (
          <div className="bg-gradient-to-r from-emerald-950/80 to-slate-950 p-4 rounded-2xl border border-emerald-500/40 space-y-2 animate-fade-in">
            <div className="flex items-center space-x-2 text-emerald-400 font-black text-xs uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>DISCOVERY REVEALED!</span>
            </div>
            <p className="text-xs text-slate-200 leading-relaxed font-medium">
              {nativeLang === 'hi' ? (
                <>
                  <span className="font-bold text-emerald-400">"I am"</span> और{' '}
                  <span className="font-bold text-emerald-400">"I'm"</span> दोनों का अर्थ समान है! 
                  दैनिक बोलचाल में मूल निवासी अंग्रेजी वक्ता (native speakers) हमेशा संकुचित रूप <span className="font-bold text-white">"I'm"</span> का उपयोग करते हैं क्योंकि यह त्वरित और स्वाभाविक लगता है। दोनों रूप पूर्णतः सही हैं।
                </>
              ) : (
                <>
                  <span className="font-bold text-emerald-400">"I am"</span> and{' '}
                  <span className="font-bold text-emerald-400">"I'm"</span> carry the exact same meaning! Native English speakers almost always use contractions like <span className="font-bold text-white">"I'm"</span> in everyday spoken introductions because it sounds smooth and natural. Both forms are grammatically correct!
                </>
              )}
            </p>
          </div>
        )}
      </div>

      {/* Proceed Button */}
      <button
        disabled={!isRevealed}
        onClick={onCompleteDiscovery}
        className={`w-full py-4 font-black text-sm uppercase tracking-wider rounded-2xl shadow-xl transition flex items-center justify-center space-x-2 ${
          isRevealed
            ? 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 cursor-pointer active:scale-95'
            : 'bg-slate-800 text-slate-500 border border-slate-700/50 cursor-not-allowed'
        }`}
      >
        <span>CONTINUE TO STEP 6: FORMAL GRAMMAR EXPLANATION</span>
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
};
