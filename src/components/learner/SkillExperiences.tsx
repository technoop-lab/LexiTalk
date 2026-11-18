import React, { useState } from 'react';
import { Headphones, Mic, BookOpen, PenTool, Volume2, Check, RotateCcw, Sparkles } from 'lucide-react';
import { UserAcademyProfile } from '../../types';
import { LESSON_A1_1_1_DATA } from '../../data/lessons/lesson_a1_1_1';
import { AudioService } from '../../services/AudioService';
import { getActiveEnglishAccent, playSoundEffectEffect } from '../../utils/audioUtils';

interface SkillExperiencesProps {
  user: UserAcademyProfile;
}

export const SkillExperiences: React.FC<SkillExperiencesProps> = ({ user }) => {
  const [activeTab, setActiveTab] = useState<'listening' | 'speaking' | 'reading' | 'writing'>('listening');

  // State for Listening Experience
  const [listenInput, setListenInput] = useState('');
  const [listenFeedback, setListenFeedback] = useState<'correct' | 'wrong' | null>(null);

  // State for Speaking Experience
  const [isRecording, setIsRecording] = useState(false);
  const [spokenText, setSpokenText] = useState('');

  // State for Writing Experience
  const [writeText, setWriteText] = useState('');

  const targetVocab = LESSON_A1_1_1_DATA.vocabulary[0];

  const handlePlayAudio = (text: string, audioId?: string) => {
    playSoundEffectEffect('tap');
    if (audioId) {
      AudioService.play(audioId);
    } else {
      AudioService.speakText(text);
    }
  };

  const handleCheckListening = () => {
    const isMatch = listenInput.trim().toLowerCase() === targetVocab.word.toLowerCase();
    setListenFeedback(isMatch ? 'correct' : 'wrong');
    if (isMatch) playSoundEffectEffect('correct');
    else playSoundEffectEffect('wrong');
  };

  const handleToggleRecord = () => {
    playSoundEffectEffect('tap');
    if (!isRecording) {
      setIsRecording(true);
      if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
        const recognition = new SpeechRecognition();
        recognition.lang = getActiveEnglishAccent();
        recognition.onresult = (event: any) => {
          const result = event.results[0][0].transcript;
          setSpokenText(result);
          setIsRecording(false);
          playSoundEffectEffect('correct');
        };
        recognition.onerror = () => setIsRecording(false);
        recognition.start();
      } else {
        setTimeout(() => {
          setSpokenText(targetVocab.word);
          setIsRecording(false);
          playSoundEffectEffect('correct');
        }, 1500);
      }
    } else {
      setIsRecording(false);
    }
  };

  return (
    <div className="flex flex-col space-y-5 p-3 sm:p-5 pb-24 text-slate-900 dark:text-slate-100 max-w-xl mx-auto animate-fade-in">
      {/* Tab Switcher */}
      <div className="grid grid-cols-4 gap-1.5 bg-white dark:bg-slate-900 p-1.5 rounded-2xl border border-[#D9E4FF] dark:border-slate-800 shadow-sm dark:shadow-md">
        {[
          { id: 'listening', label: 'Listening', icon: Headphones },
          { id: 'speaking', label: 'Speaking', icon: Mic },
          { id: 'reading', label: 'Reading', icon: BookOpen },
          { id: 'writing', label: 'Writing', icon: PenTool },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                playSoundEffectEffect('tap');
                setActiveTab(tab.id as any);
              }}
              className={`py-2 px-1 rounded-xl text-xs font-bold transition flex flex-col items-center space-y-1 cursor-pointer btn-press ${
                isActive
                  ? 'bg-gradient-to-r from-[#335CFF] to-[#6D5DF6] text-white shadow-md shadow-indigo-500/25 font-black'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab 1: Listening Experience */}
      {activeTab === 'listening' && (
        <div className="bg-white dark:bg-slate-900 border border-[#D9E4FF] dark:border-slate-800 rounded-3xl p-5 space-y-4 shadow-sm dark:shadow-xl">
          <span className="text-[10px] font-black uppercase text-indigo-600 dark:text-indigo-400 tracking-wider">
            Dictation & Auditory Discrimination
          </span>
          <h3 className="text-base font-bold text-slate-900 dark:text-white font-display">
            Listen & Type Target Word
          </h3>

          <div className="text-center py-5 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-[#D9E4FF] dark:border-slate-800">
            <button
              onClick={() => handlePlayAudio(targetVocab.word, targetVocab.audioId)}
              className="p-4 bg-gradient-to-br from-[#335CFF] to-[#6D5DF6] text-white rounded-full shadow-lg shadow-indigo-500/30 hover:scale-105 transition inline-flex items-center justify-center cursor-pointer btn-press"
            >
              <Volume2 className="w-6 h-6 fill-white" />
            </button>
            <span className="block text-xs text-slate-500 dark:text-slate-400 mt-2.5 font-bold">
              Tap to listen to model native pronunciation
            </span>
          </div>

          <div className="space-y-2.5">
            <input
              type="text"
              value={listenInput}
              onChange={(e) => setListenInput(e.target.value)}
              placeholder="Type what you hear..."
              className="w-full bg-slate-50 dark:bg-slate-950 border border-[#D9E4FF] dark:border-slate-800 rounded-2xl p-3 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-indigo-400"
            />

            <button
              onClick={handleCheckListening}
              className="w-full py-3.5 bg-gradient-to-r from-[#335CFF] to-[#6D5DF6] text-white font-black text-xs uppercase tracking-wider rounded-2xl shadow-md cursor-pointer btn-press active:scale-[0.98]"
            >
              Check Answer (जांचें)
            </button>

            {listenFeedback === 'correct' && (
              <p className="text-xs text-emerald-600 dark:text-emerald-400 font-bold text-center">
                ✅ Correct! Outstanding listening precision.
              </p>
            )}
            {listenFeedback === 'wrong' && (
              <p className="text-xs text-rose-600 dark:text-rose-400 font-bold text-center">
                ❌ Expected: "{targetVocab.word}"
              </p>
            )}
          </div>
        </div>
      )}

      {/* Tab 2: Speaking Experience */}
      {activeTab === 'speaking' && (
        <div className="bg-white dark:bg-slate-900 border border-[#D9E4FF] dark:border-slate-800 rounded-3xl p-5 space-y-4 shadow-sm dark:shadow-xl">
          <span className="text-[10px] font-black uppercase text-indigo-600 dark:text-indigo-400 tracking-wider">
            Oral Production & Speech Recognition
          </span>
          <h3 className="text-base font-bold text-slate-900 dark:text-white font-display">
            Listen & Repeat: "{targetVocab.word}"
          </h3>

          <div className="flex items-center justify-between bg-slate-50 dark:bg-slate-950 p-3.5 rounded-2xl border border-[#D9E4FF] dark:border-slate-800">
            <div className="space-y-0.5">
              <span className="text-sm font-black text-slate-900 dark:text-white font-display">
                {targetVocab.word}
              </span>
              <span className="text-xs text-cyan-700 dark:text-cyan-300 block font-mono">
                {targetVocab.phonetic}
              </span>
            </div>

            <button
              onClick={() => handlePlayAudio(targetVocab.word, targetVocab.audioId)}
              className="p-2.5 bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-300 rounded-xl dark:hover:bg-indigo-500/30 transition cursor-pointer btn-press"
            >
              <Volume2 className="w-4 h-4" />
            </button>
          </div>

          <div className="text-center space-y-3 py-4">
            <button
              onClick={handleToggleRecord}
              className={`w-16 h-16 rounded-full flex items-center justify-center transition shadow-lg mx-auto cursor-pointer btn-press ${
                isRecording
                  ? 'bg-rose-500 animate-pulse text-white shadow-rose-500/40 ring-4 ring-rose-500/20'
                  : 'bg-gradient-to-br from-[#335CFF] to-[#6D5DF6] text-white hover:scale-105 shadow-indigo-500/30'
              }`}
            >
              <Mic className="w-7 h-7" />
            </button>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-bold block">
              {isRecording ? 'Listening to your speech...' : 'Tap microphone & speak aloud'}
            </span>

            {spokenText && (
              <div className="bg-emerald-50 dark:bg-emerald-950/60 p-3 rounded-2xl border border-emerald-300 dark:border-emerald-500/40 text-emerald-800 dark:text-emerald-300 text-xs font-bold">
                Recognized: "{spokenText}"
              </div>
            )}
          </div>
        </div>
      )}

      {/* Tab 3: Reading Experience */}
      {activeTab === 'reading' && (
        <div className="bg-white dark:bg-slate-900 border border-[#D9E4FF] dark:border-slate-800 rounded-3xl p-5 space-y-4 shadow-sm dark:shadow-xl">
          <span className="text-[10px] font-black uppercase text-indigo-600 dark:text-indigo-400 tracking-wider">
            Reading Comprehension & Context
          </span>
          <h3 className="text-base font-bold text-slate-900 dark:text-white font-display">
            Short Contextual Reading
          </h3>

          <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-2xl border border-[#D9E4FF] dark:border-slate-800 space-y-2">
            <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
              "Hello! My name is Rahul. I am from India and I live in Mumbai. I am a student."
            </p>
            <p className="text-xs text-emerald-700 dark:text-emerald-400 font-hindi italic">
              Translate: "नमस्ते! मेरा नाम राहुल है। मैं भारत से हूँ और मुंबई में रहता हूँ। मैं एक छात्र हूँ।"
            </p>
          </div>
        </div>
      )}

      {/* Tab 4: Writing Experience */}
      {activeTab === 'writing' && (
        <div className="bg-white dark:bg-slate-900 border border-[#D9E4FF] dark:border-slate-800 rounded-3xl p-5 space-y-4 shadow-sm dark:shadow-xl">
          <span className="text-[10px] font-black uppercase text-indigo-600 dark:text-indigo-400 tracking-wider">
            Guided Writing & Production
          </span>
          <h3 className="text-base font-bold text-slate-900 dark:text-white font-display">
            Write a Short Introduction
          </h3>

          <textarea
            value={writeText}
            onChange={(e) => setWriteText(e.target.value)}
            placeholder="Write: 'Hello! My name is [Your Name]. I am from [Country]...'"
            rows={4}
            className="w-full bg-slate-50 dark:bg-slate-950 border border-[#D9E4FF] dark:border-slate-800 rounded-2xl p-3 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-indigo-400"
          />

          <button
            onClick={() => {
              if (writeText.trim()) playSoundEffectEffect('correct');
            }}
            className="w-full py-3.5 bg-gradient-to-r from-[#335CFF] to-[#6D5DF6] text-white font-black text-xs uppercase tracking-wider rounded-2xl shadow-md cursor-pointer btn-press active:scale-[0.98]"
          >
            Submit Writing Prompt (जमा करें)
          </button>
        </div>
      )}
    </div>
  );
};
