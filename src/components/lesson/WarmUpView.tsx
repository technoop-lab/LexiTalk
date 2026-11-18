import React, { useState } from 'react';
import { Sparkles, CheckCircle2, Volume2, ArrowRight } from 'lucide-react';
import { NativeLanguageCode, LearningMode, SecondaryLanguageCode } from '../../types';
import { AudioService } from '../../services/AudioService';

interface WarmUpViewProps {
  nativeLang: NativeLanguageCode;
  learningMode?: LearningMode;
  secondaryLang?: SecondaryLanguageCode | null;
  onCompleteWarmup: () => void;
}

export const WarmUpView: React.FC<WarmUpViewProps> = ({
  nativeLang,
  learningMode,
  secondaryLang,
  onCompleteWarmup,
}) => {
  const [q1Selected, setQ1Selected] = useState<number | null>(null);
  const [q1Checked, setQ1Checked] = useState(false);

  const [q2Selected, setQ2Selected] = useState<number | null>(null);
  const [q2Checked, setQ2Checked] = useState(false);

  const isSpanishMode = learningMode === 'english_plus_secondary' && secondaryLang === 'es';

  const localizedGreetingTitle =
    nativeLang === 'hi' ? 'नमस्ते / अभिवादन' : 'Greeting Activation';

  const handlePlayGreeting = () => {
    AudioService.playSound('tap');
    AudioService.play('en_a1_u01_l01_v_hello', 'hello');
  };

  const handleQ1Select = (idx: number) => {
    AudioService.playSound('tap');
    setQ1Selected(idx);
    setQ1Checked(true);
    if (idx === 0) {
      AudioService.playSound('correct');
    } else {
      AudioService.playSound('wrong');
    }
  };

  const handleQ2Select = (idx: number) => {
    AudioService.playSound('tap');
    setQ2Selected(idx);
    setQ2Checked(true);
    if (idx === 0) {
      AudioService.playSound('correct');
    } else {
      AudioService.playSound('wrong');
    }
  };

  const isReadyToProceed = q1Checked && q2Checked;

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Warm-Up Header */}
      <div className="bg-gradient-to-tr from-amber-950/60 via-slate-900 to-amber-900/40 border border-amber-500/30 p-6 rounded-3xl space-y-4 shadow-xl">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-black uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20 flex items-center space-x-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>STAGE 2 • WARM-UP ACTIVATION</span>
          </span>
          <span className="text-2xl">👋</span>
        </div>

        <div>
          <h2 className="text-2xl font-black text-white">Let's Activate What You Already Know</h2>
          <p className="text-xs text-slate-300 mt-1 leading-relaxed">
            Before learning new vocabulary, let's test your natural instinct with a basic English greeting.
          </p>
        </div>

        {/* Core Word Highlight */}
        <div className="bg-slate-950/80 border border-slate-800 p-4 rounded-2xl flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xl font-black text-emerald-400">Hello</span>
              <span className="text-xs font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded-full border border-slate-700">
                /həˈloʊ/
              </span>
            </div>
            <p className="text-xs font-bold text-slate-300 mt-1">
              {nativeLang === 'hi' ? 'नमस्ते / प्रणाम (साधारण अभिवादन)' : 'Standard polite greeting'}
            </p>
            {isSpanishMode && (
              <p className="text-[11px] font-bold text-amber-300 mt-0.5">
                🇪🇸 Spanish equivalent: <span className="font-mono">Hola</span>
              </p>
            )}
          </div>

          <button
            onClick={handlePlayGreeting}
            className="p-3 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 rounded-2xl border border-emerald-500/30 transition active:scale-95 flex items-center space-x-1"
            title="Listen to Hello"
          >
            <Volume2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Activation Question 1 */}
      <div className="bg-slate-900 border border-slate-800 p-5 rounded-3xl space-y-3 shadow-lg">
        <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">
          Activation Question 1 of 2
        </span>
        <h3 className="text-base font-black text-white">What does "Hello" mean when someone says it to you?</h3>

        <div className="space-y-2">
          {[
            { text: nativeLang === 'hi' ? 'नमस्ते (अभिवादन कहना)' : 'Hello / Greetings (Polite greeting)', isCorrect: true },
            { text: nativeLang === 'hi' ? 'अलविदा (जाने के समय)' : 'Goodbye (Saying farewell)', isCorrect: false },
            { text: nativeLang === 'hi' ? 'धन्यवाद (शुक्रिया कहना)' : 'Thank you (Expressing thanks)', isCorrect: false },
          ].map((opt, idx) => {
            const isSelected = q1Selected === idx;
            let btnStyle = 'bg-slate-950/80 border-slate-800 text-slate-200 hover:border-slate-700';
            if (q1Checked && isSelected) {
              btnStyle = opt.isCorrect
                ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300 font-bold'
                : 'bg-rose-500/20 border-rose-400 text-rose-300 font-bold';
            }

            return (
              <button
                key={idx}
                onClick={() => handleQ1Select(idx)}
                className={`w-full p-3.5 rounded-2xl border text-left text-xs transition flex items-center justify-between ${btnStyle}`}
              >
                <span>{opt.text}</span>
                {q1Checked && isSelected && opt.isCorrect && (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {q1Checked && (
          <div className="bg-slate-950 p-3 rounded-2xl border border-slate-800 text-xs text-slate-300">
            <span className="font-bold text-emerald-400">Explanation: </span>
            "Hello" is the fundamental English greeting used when meeting or addressing someone politely.
          </div>
        )}
      </div>

      {/* Activation Question 2 */}
      <div className="bg-slate-900 border border-slate-800 p-5 rounded-3xl space-y-3 shadow-lg">
        <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">
          Activation Question 2 of 2
        </span>
        <h3 className="text-base font-black text-white">
          When you meet a person for the first time, which greeting is standard and friendly?
        </h3>

        <div className="space-y-2">
          {[
            { text: '"Hello!" or "Hi!"', isCorrect: true },
            { text: '"Goodbye!"', isCorrect: false },
            { text: '"See you tomorrow!"', isCorrect: false },
          ].map((opt, idx) => {
            const isSelected = q2Selected === idx;
            let btnStyle = 'bg-slate-950/80 border-slate-800 text-slate-200 hover:border-slate-700';
            if (q2Checked && isSelected) {
              btnStyle = opt.isCorrect
                ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300 font-bold'
                : 'bg-rose-500/20 border-rose-400 text-rose-300 font-bold';
            }

            return (
              <button
                key={idx}
                onClick={() => handleQ2Select(idx)}
                className={`w-full p-3.5 rounded-2xl border text-left text-xs transition flex items-center justify-between ${btnStyle}`}
              >
                <span>{opt.text}</span>
                {q2Checked && isSelected && opt.isCorrect && (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {q2Checked && (
          <div className="bg-slate-950 p-3 rounded-2xl border border-slate-800 text-xs text-slate-300">
            <span className="font-bold text-emerald-400">Explanation: </span>
            Starting conversations with "Hello!" or "Hi!" establishes an open, friendly atmosphere.
          </div>
        )}
      </div>

      {/* Proceed Button */}
      <button
        disabled={!isReadyToProceed}
        onClick={onCompleteWarmup}
        className={`w-full py-4 font-black text-sm uppercase tracking-wider rounded-2xl shadow-xl transition flex items-center justify-center space-x-2 ${
          isReadyToProceed
            ? 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 cursor-pointer active:scale-95'
            : 'bg-slate-800 text-slate-500 border border-slate-700/50 cursor-not-allowed'
        }`}
      >
        <span>CONTINUE TO STEP 3: CORE VOCABULARY (CHUNKED)</span>
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
};
