import React from 'react';

export interface ProgressBarProps {
  progress: number; // 0 to 100
  variant?: 'indigo' | 'emerald' | 'amber' | 'gradient';
  height?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  variant = 'gradient',
  height = 'md',
  showLabel = false,
  className = '',
}) => {
  const clampedProgress = Math.min(100, Math.max(0, Math.round(progress)));

  const heightClasses = {
    sm: 'h-1.5',
    md: 'h-2.5',
    lg: 'h-3.5',
  }[height];

  const fillVariants = {
    gradient: 'bg-gradient-to-r from-[#335CFF] to-[#6D5DF6]',
    indigo: 'bg-[#335CFF]',
    emerald: 'bg-gradient-to-r from-emerald-500 to-teal-400',
    amber: 'bg-gradient-to-r from-amber-500 to-orange-400',
  }[variant];

  return (
    <div className={`w-full ${className}`}>
      {showLabel && (
        <div className="flex justify-between items-center text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
          <span>Progress</span>
          <span className="text-slate-800 dark:text-slate-200">{clampedProgress}%</span>
        </div>
      )}
      <div
        className={`w-full bg-[#E6ECFF] dark:bg-slate-800/80 rounded-full overflow-hidden p-0.5 border border-[#D8E3FF] dark:border-slate-700/50 ${heightClasses}`}
      >
        <div
          className={`h-full rounded-full transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] shadow-sm ${fillVariants}`}
          style={{ width: `${clampedProgress}%` }}
        />
      </div>
    </div>
  );
};
export default ProgressBar;
