import React from 'react';
import { UserAcademyProfile } from '../../types';
import { DeveloperTestService } from '../../services/DeveloperTestService';
import { EntitlementService } from '../../services/EntitlementService';
import { useTheme } from '../../theme/ThemeContext';
import {
  Wrench,
  Layers,
  Compass,
  Zap,
  Eye,
  RotateCcw,
  Sliders,
  ShieldCheck,
  UserCheck,
  Flame,
  Crown,
  Sun,
  Moon,
  Smartphone
} from 'lucide-react';

interface DeveloperModeBannerProps {
  user: UserAcademyProfile;
  onOpenTestControls: () => void;
  onOpenCurriculumExplorer: () => void;
  onOpenExerciseDebugger: () => void;
  onSwitchToLearnerAccount: () => void;
  onUpdateUser: (updated: UserAcademyProfile) => void;
}

export const DeveloperModeBanner: React.FC<DeveloperModeBannerProps> = ({
  user,
  onOpenTestControls,
  onOpenCurriculumExplorer,
  onOpenExerciseDebugger,
  onSwitchToLearnerAccount,
  onUpdateUser,
}) => {
  const isPreview = user.learnerPreviewActive;
  const { theme, resolvedTheme, setTheme } = useTheme();

  const handleTogglePreview = () => {
    const updated = DeveloperTestService.toggleLearnerPreviewMode();
    onUpdateUser(updated);
  };

  const handleCycleTheme = () => {
    if (theme === 'system') {
      setTheme('light');
    } else if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('system');
    }
  };

  const themeLabel =
    theme === 'system'
      ? `SYSTEM (${resolvedTheme.toUpperCase()})`
      : theme.toUpperCase();

  return (
    <aside aria-label="Developer mode controls" className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border-b border-indigo-500/40 text-slate-100 px-3 py-2 text-xs shadow-xl relative z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-2.5">
        {/* Left: Mode Brand & Scenario Badge */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center space-x-1.5 bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 px-2.5 py-1 rounded-lg font-mono font-bold text-[11px]">
            <Wrench className="w-3.5 h-3.5 text-indigo-400" />
            <span>DEVELOPER / TEST MODE</span>
          </div>

          <div className="flex items-center space-x-1 text-[10px] font-mono text-slate-300 bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700">
            <span className="text-slate-400">ROLE:</span>
            <span className="text-emerald-400 font-bold">DEVELOPER_TESTER</span>
          </div>

          <div className="flex items-center space-x-1 text-[10px] font-mono text-slate-300 bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700">
            <span className="text-slate-400">ENTITLEMENT:</span>
            <span className="text-amber-400 font-bold">DEVELOPER_TEST</span>
          </div>

          {/* Theme Verification Chip */}
          <button
            onClick={handleCycleTheme}
            className="flex items-center space-x-1.5 text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-lg border transition cursor-pointer bg-slate-800 hover:bg-slate-750 text-cyan-300 border-cyan-500/40 shadow-sm"
            title="Click to cycle theme (Light -> Dark -> System)"
          >
            {theme === 'system' ? (
              <Smartphone className="w-3 h-3 text-cyan-400" />
            ) : resolvedTheme === 'dark' ? (
              <Moon className="w-3 h-3 text-indigo-400" />
            ) : (
              <Sun className="w-3 h-3 text-amber-400" />
            )}
            <span>THEME: {themeLabel}</span>
          </button>

          {user.activeTestScenario && (
            <div className="flex items-center space-x-1 text-[10px] font-mono bg-purple-500/20 text-purple-300 border border-purple-500/40 px-2 py-0.5 rounded">
              <span className="text-purple-400">SCENARIO:</span>
              <span className="font-bold">{user.activeTestScenario}</span>
            </div>
          )}

          {isPreview && (
            <span className="px-2 py-0.5 bg-amber-500 text-slate-950 font-mono font-bold text-[10px] rounded animate-pulse">
              👁️ LEARNER PREVIEW ACTIVE (LOCKS ENFORCED)
            </span>
          )}
        </div>

        {/* Right: Quick Developer Tools Action Buttons */}
        <div className="flex flex-wrap items-center gap-1.5">
          <button
            onClick={onOpenTestControls}
            className="flex items-center space-x-1 px-2.5 py-1 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-[11px] font-bold shadow transition"
            title="Open Test Scenarios & Progress Simulator"
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>Test Controls</span>
          </button>

          <button
            onClick={onOpenCurriculumExplorer}
            className="flex items-center space-x-1 px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-lg text-[11px] font-medium transition"
            title="Browse all 195 lessons, taxonomies and 18 stages"
          >
            <Layers className="w-3.5 h-3.5 text-emerald-400" />
            <span>Curriculum Explorer</span>
          </button>

          <button
            onClick={onOpenExerciseDebugger}
            className="flex items-center space-x-1 px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-lg text-[11px] font-medium transition"
            title="Inspect exercise answer evaluation and diagnostics"
          >
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>Exercise Debugger</span>
          </button>

          <button
            onClick={handleTogglePreview}
            className={`flex items-center space-x-1 px-2.5 py-1 rounded-lg text-[11px] font-medium transition border ${
              isPreview
                ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 hover:bg-amber-500/30'
                : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
            }`}
            title="Toggle between Developer bypass and normal learner lock experience"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>{isPreview ? 'Exit Preview' : 'View As Learner'}</span>
          </button>

          <button
            onClick={onSwitchToLearnerAccount}
            className="flex items-center space-x-1 px-2 py-1 bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-slate-200 border border-slate-700/80 rounded-lg text-[10px] font-mono transition"
            title="Switch back to standard learner account"
          >
            <UserCheck className="w-3 h-3" />
            <span>Learner Profile</span>
          </button>
        </div>
      </div>
    </aside>
  );
};
