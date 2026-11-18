import React from 'react';
import {
  Sparkles,
  Briefcase,
  Plane,
  MessageCircle,
  GraduationCap,
  TrendingUp,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { LearningGoal } from '../../types';
import { playSoundEffectEffect } from '../../utils/audioUtils';

interface LearningGoalStepProps {
  selectedGoal: LearningGoal;
  onSelectGoal: (goal: LearningGoal) => void;
  onContinue: () => void;
}

interface GoalOption {
  id: LearningGoal;
  title: string;
  hindiTitle: string;
  desc: string;
  icon: React.ReactNode;
  gradient: string;
  badge: string;
}

export const LearningGoalStep: React.FC<LearningGoalStepProps> = ({
  selectedGoal,
  onSelectGoal,
  onContinue,
}) => {
  const goals: GoalOption[] = [
    {
      id: 'speaking',
      title: 'Speak with Confidence',
      hindiTitle: 'आत्मविश्वास से अंग्रेज़ी बोलें',
      desc: 'Natural conversations, accent clarity, public speaking & vocal ease.',
      icon: <Sparkles className="w-5 h-5 text-amber-500" />,
      gradient: 'from-amber-500/10 to-amber-500/5',
      badge: 'Most Popular',
    },
    {
      id: 'work',
      title: 'Job & Interviews',
      hindiTitle: 'नौकरी और साक्षात्कार',
      desc: 'Crack job interviews, workplace meetings, team syncs & presentations.',
      icon: <Briefcase className="w-5 h-5 text-indigo-500" />,
      gradient: 'from-indigo-500/10 to-indigo-500/5',
      badge: 'Career Boost',
    },
    {
      id: 'travel',
      title: 'Travel Abroad',
      hindiTitle: 'विदेश यात्रा और पर्यटन',
      desc: 'Airports, hotels, sightseeing, asking directions, restaurants & shopping.',
      icon: <Plane className="w-5 h-5 text-sky-500" />,
      gradient: 'from-sky-500/10 to-sky-500/5',
      badge: 'International',
    },
    {
      id: 'everyday',
      title: 'Daily Life & Social',
      hindiTitle: 'दैनिक जीवन और बातचीत',
      desc: 'Social chats, movies, books, music, family, friends & everyday routine.',
      icon: <MessageCircle className="w-5 h-5 text-emerald-500" />,
      gradient: 'from-emerald-500/10 to-emerald-500/5',
      badge: 'Foundation',
    },
    {
      id: 'exams',
      title: 'Study & Exams',
      hindiTitle: 'परीक्षा और अकादमिक',
      desc: 'IELTS, TOEFL, university admissions, formal writing & grammar precision.',
      icon: <GraduationCap className="w-5 h-5 text-rose-500" />,
      gradient: 'from-rose-500/10 to-rose-500/5',
      badge: 'Academic',
    },
    {
      id: 'fluency',
      title: 'Business English',
      hindiTitle: 'व्यावसायिक और कॉर्पोरेट अंग्रेज़ी',
      desc: 'Corporate negotiations, executive communication, emails & leadership.',
      icon: <TrendingUp className="w-5 h-5 text-purple-500" />,
      gradient: 'from-purple-500/10 to-purple-500/5',
      badge: 'Executive',
    },
  ];

  return (
    <div className="flex-1 flex flex-col justify-between p-4 sm:p-6 select-none animate-fade-in text-slate-900 dark:text-white">
      {/* Header */}
      <div className="text-center space-y-2 pt-2">
        <span className="text-[10px] font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-widest bg-indigo-50 dark:bg-indigo-500/15 border border-indigo-200 dark:border-indigo-500/30 px-3 py-1 rounded-full inline-block">
          Personalized Curriculum
        </span>

        <h2 className="text-2xl sm:text-3xl font-black tracking-tight font-display">
          Why are you learning English?
        </h2>

        <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
          We tailor your daily practice recommendations, vocabulary drills, and real-world dialogue scenarios based on your goal.
        </p>
      </div>

      {/* Goal Cards Grid */}
      <div className="space-y-2.5 my-4 max-h-[52vh] overflow-y-auto pr-1">
        {goals.map((g) => {
          const isSelected = selectedGoal === g.id;

          return (
            <div
              key={g.id}
              onClick={() => {
                playSoundEffectEffect('tap');
                onSelectGoal(g.id);
              }}
              className={`p-3.5 sm:p-4 rounded-2xl border transition-all duration-200 cursor-pointer btn-press relative flex items-center justify-between ${
                isSelected
                  ? 'bg-indigo-50/90 dark:bg-indigo-950/60 border-indigo-500 dark:border-indigo-400 text-slate-900 dark:text-white ring-2 ring-indigo-500/20 shadow-lg'
                  : 'bg-white dark:bg-slate-900 border-[#D8E3FF] dark:border-slate-800 hover:border-indigo-300 dark:hover:border-slate-700 text-slate-700 dark:text-slate-300'
              }`}
            >
              <div className="flex items-center space-x-3.5 min-w-0">
                <div
                  className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 border transition-all ${
                    isSelected
                      ? 'bg-white dark:bg-slate-850 border-indigo-300 dark:border-indigo-500/40 shadow-sm'
                      : 'bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800'
                  }`}
                >
                  {g.icon}
                </div>

                <div className="space-y-0.5 min-w-0">
                  <div className="flex items-center space-x-2">
                    <h4 className={`text-xs sm:text-sm font-black truncate ${
                      isSelected ? 'text-indigo-900 dark:text-white' : 'text-slate-900 dark:text-slate-100'
                    }`}>
                      {g.title}
                    </h4>
                    {g.badge && (
                      <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 uppercase tracking-wider shrink-0 hidden xs:inline-block">
                        {g.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-[10px] text-amber-600 dark:text-amber-300/90 font-hindi truncate">
                    {g.hindiTitle}
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                    {g.desc}
                  </p>
                </div>
              </div>

              <div className="shrink-0 pl-3">
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                    isSelected
                      ? 'border-indigo-600 dark:border-indigo-400 bg-indigo-600 dark:bg-indigo-500 text-white shadow-sm'
                      : 'border-slate-300 dark:border-slate-700 bg-transparent'
                  }`}
                >
                  {isSelected && <CheckCircle2 className="w-3.5 h-3.5 fill-current" />}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Continue Button */}
      <div className="pt-2">
        <button
          onClick={() => {
            playSoundEffectEffect('tap');
            onContinue();
          }}
          className="w-full py-4 rounded-2xl font-black text-xs uppercase tracking-wider shadow-xl transition-all duration-200 cursor-pointer flex items-center justify-center space-x-2 btn-press bg-gradient-to-r from-[#335CFF] via-[#6D5DF6] to-[#10B981] text-white hover:brightness-105 active:scale-98"
        >
          <span>Confirm Learning Goal</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
