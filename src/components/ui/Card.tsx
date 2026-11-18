import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'surface' | 'elevated' | 'gradient' | 'glass' | 'success' | 'warning' | 'info' | 'danger' | 'royal';
  isHoverable?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'surface',
  isHoverable = false,
  padding = 'md',
  className = '',
  ...props
}) => {
  const paddingClasses = {
    none: 'p-0',
    sm: 'p-3.5 sm:p-4',
    md: 'p-5 sm:p-6',
    lg: 'p-6 sm:p-8',
  }[padding];

  const variantClasses = {
    surface:
      'bg-white dark:bg-slate-900/90 border border-[#D8E3FF] dark:border-slate-800/90 text-slate-900 dark:text-slate-100 shadow-md dark:shadow-xl',
    elevated:
      'bg-white dark:bg-slate-850/95 border border-[#D8E3FF] dark:border-slate-750 text-slate-900 dark:text-slate-100 shadow-lg dark:shadow-2xl',
    gradient:
      'bg-gradient-to-br from-indigo-50/80 via-white to-purple-50/80 dark:from-indigo-900/40 dark:via-slate-900 dark:to-purple-950/40 border border-indigo-200/80 dark:border-indigo-500/20 text-slate-900 dark:text-white shadow-lg dark:shadow-xl',
    royal:
      'bg-gradient-to-br from-[#335CFF] to-[#6D5DF6] border border-indigo-400/30 text-white shadow-xl dark:shadow-2xl shadow-indigo-500/20',
    glass:
      'bg-white/90 dark:bg-slate-900/70 backdrop-blur-xl border border-[#D8E3FF] dark:border-slate-800/80 text-slate-900 dark:text-slate-100 shadow-lg dark:shadow-xl',
    success:
      'bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-500/30 text-emerald-950 dark:text-emerald-100 shadow-sm dark:shadow-lg',
    warning:
      'bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-500/30 text-amber-950 dark:text-amber-100 shadow-sm dark:shadow-lg',
    info:
      'bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-500/30 text-blue-950 dark:text-blue-100 shadow-sm dark:shadow-lg',
    danger:
      'bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-500/30 text-rose-950 dark:text-rose-100 shadow-sm dark:shadow-lg',
  }[variant];

  const hoverClass = isHoverable
    ? 'transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl dark:hover:shadow-2xl hover:border-indigo-500/40 cursor-pointer'
    : '';

  return (
    <div
      className={`rounded-3xl relative overflow-hidden ${variantClasses} ${paddingClasses} ${hoverClass} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
export default Card;
