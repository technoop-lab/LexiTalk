import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Crown, Check, Sparkles, X, Shield, Download, Award, Heart, Zap } from 'lucide-react';
import { UserAcademyProfile } from '../types';
import { playSoundEffectEffect } from '../utils/audioUtils';

interface SubscriptionModalProps {
  user: UserAcademyProfile;
  onActivateSubscription: (plan: 'pro_monthly' | 'pro_annual') => void;
  onClose: () => void;
}

export const SubscriptionModal: React.FC<SubscriptionModalProps> = ({
  user,
  onActivateSubscription,
  onClose,
}) => {
  const [selectedPlan, setSelectedPlan] = useState<'pro_monthly' | 'pro_annual'>('pro_annual');

  const handleSubscribe = () => {
    playSoundEffectEffect('victory');
    confetti({ particleCount: 100, spread: 80 });
    onActivateSubscription(selectedPlan);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-md flex items-center justify-center p-4 select-none animate-fade-in">
      <div className="bg-white dark:bg-gradient-to-b dark:from-slate-900 dark:via-slate-900 dark:to-indigo-950 border-2 border-amber-400 dark:border-amber-500/40 rounded-3xl p-6 max-w-md w-full shadow-2xl relative space-y-5 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white bg-slate-100 dark:bg-slate-800 rounded-full cursor-pointer btn-press"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Crown & Header */}
        <div className="text-center space-y-2">
          <div className="w-16 h-16 bg-gradient-to-tr from-amber-400 to-yellow-300 text-slate-950 rounded-3xl flex items-center justify-center text-3xl mx-auto shadow-md ring-4 ring-amber-500/30 animate-bounce-slow">
            <Crown className="w-10 h-10 fill-slate-950" />
          </div>

          <span className="text-[10px] font-black tracking-widest text-amber-700 dark:text-amber-400 uppercase bg-amber-100 dark:bg-amber-500/20 px-3 py-1 rounded-full border border-amber-300 dark:border-amber-500/30">
            CURIOSITY ACADEMY PRO
          </span>

          <h2 className="text-2xl font-black text-slate-900 dark:text-white">Unlock Full Mastery & Certification</h2>
          <p className="text-xs text-slate-600 dark:text-slate-300">
            Get unlimited practice, official CEFR diplomas, offline mode & AI pronunciation coaching.
          </p>
        </div>

        {/* Features Checklist */}
        <div className="bg-slate-50 dark:bg-slate-950/80 border border-[#D9E4FF] dark:border-slate-800 p-4 rounded-2xl space-y-2.5 text-xs">
          <div className="flex items-center space-x-2.5 text-slate-800 dark:text-slate-200">
            <div className="w-5 h-5 rounded-full bg-amber-100 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
              <Heart className="w-3.5 h-3.5 fill-amber-500" />
            </div>
            <span className="font-bold">Unlimited Hearts & Practice Retries</span>
          </div>

          <div className="flex items-center space-x-2.5 text-slate-800 dark:text-slate-200">
            <div className="w-5 h-5 rounded-full bg-amber-100 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
              <Award className="w-3.5 h-3.5" />
            </div>
            <span className="font-bold">Official CEFR Diplomas (A1, A2, B1, B2, C1, C2)</span>
          </div>

          <div className="flex items-center space-x-2.5 text-slate-800 dark:text-slate-200">
            <div className="w-5 h-5 rounded-full bg-amber-100 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
              <Download className="w-3.5 h-3.5" />
            </div>
            <span className="font-bold">Offline Lesson & Audio Story Downloads</span>
          </div>

          <div className="flex items-center space-x-2.5 text-slate-800 dark:text-slate-200">
            <div className="w-5 h-5 rounded-full bg-amber-100 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
              <Sparkles className="w-3.5 h-3.5" />
            </div>
            <span className="font-bold">AI Voice Pronunciation & Grammar Feedback</span>
          </div>
        </div>

        {/* Pricing Plan Options */}
        <div className="space-y-2.5">
          {/* Annual Plan (Best Value) */}
          <div
            onClick={() => {
              playSoundEffectEffect('tap');
              setSelectedPlan('pro_annual');
            }}
            className={`p-4 rounded-2xl border-2 cursor-pointer transition relative flex items-center justify-between btn-press ${
              selectedPlan === 'pro_annual'
                ? 'bg-amber-50 dark:bg-gradient-to-r dark:from-amber-500/20 dark:to-yellow-500/10 border-amber-500 text-slate-900 dark:text-white shadow-md ring-2 ring-amber-400/30'
                : 'bg-white dark:bg-slate-950 border-[#D9E4FF] dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700'
            }`}
          >
            <span className="absolute -top-3 right-4 bg-gradient-to-r from-amber-400 to-yellow-300 text-slate-950 font-black text-[9px] px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-xs">
              SAVE 50% • BEST VALUE
            </span>

            <div>
              <h4 className="font-black text-sm text-slate-900 dark:text-white">Annual Membership</h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">$4.99 / month ($59.99 billed annually)</p>
            </div>

            <div className="text-right">
              <span className="text-lg font-black text-amber-600 dark:text-amber-400">$59.99</span>
              <span className="block text-[9px] text-slate-500 dark:text-slate-400">per year</span>
            </div>
          </div>

          {/* Monthly Plan */}
          <div
            onClick={() => {
              playSoundEffectEffect('tap');
              setSelectedPlan('pro_monthly');
            }}
            className={`p-4 rounded-2xl border-2 cursor-pointer transition flex items-center justify-between btn-press ${
              selectedPlan === 'pro_monthly'
                ? 'bg-amber-50 dark:bg-gradient-to-r dark:from-amber-500/20 dark:to-yellow-500/10 border-amber-500 text-slate-900 dark:text-white shadow-md ring-2 ring-amber-400/30'
                : 'bg-white dark:bg-slate-950 border-[#D9E4FF] dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700'
            }`}
          >
            <div>
              <h4 className="font-black text-sm text-slate-900 dark:text-white">Monthly Membership</h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">Flexibility to cancel anytime</p>
            </div>

            <div className="text-right">
              <span className="text-lg font-black text-amber-600 dark:text-amber-400">$9.99</span>
              <span className="block text-[9px] text-slate-500 dark:text-slate-400">per month</span>
            </div>
          </div>
        </div>

        {/* Subscribe Action Button */}
        {user.isPro ? (
          <div className="p-3 bg-amber-100 dark:bg-amber-500/20 border border-amber-300 dark:border-amber-500/40 rounded-2xl text-center text-amber-800 dark:text-amber-300 font-black text-xs">
            🎉 YOU ARE ALREADY A PRO MEMBER!
          </div>
        ) : (
          <button
            onClick={handleSubscribe}
            className="w-full py-4 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 text-slate-950 font-black text-sm uppercase tracking-wider rounded-2xl shadow-md transition active:scale-95 cursor-pointer btn-press"
          >
            START 7-DAY FREE TRIAL
          </button>
        )}

        <p className="text-[10px] text-center text-slate-500 dark:text-slate-400 leading-tight">
          Cancel anytime from your account settings. Secured with Play Store & App Store payments.
        </p>
      </div>
    </div>
  );
};
