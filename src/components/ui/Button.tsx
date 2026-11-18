import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'success' | 'danger' | 'ghost' | 'amber' | 'royal';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  leftIcon,
  rightIcon,
  isLoading = false,
  className = '',
  disabled,
  ...props
}) => {
  // Base classes with smooth theme transitions
  const baseClasses = 'inline-flex items-center justify-center font-bold font-sans transition-all duration-150 select-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none btn-press';

  // Size styles
  const sizeClasses = {
    sm: 'text-xs px-3.5 py-1.5 rounded-xl gap-1.5',
    md: 'text-sm px-5 py-2.5 rounded-[18px] gap-2 shadow-sm',
    lg: 'text-base px-6 py-3.5 rounded-[18px] gap-2.5 shadow-md',
    icon: 'p-2.5 rounded-[18px] aspect-square',
  }[size];

  // Variant styles with dual theme (Light + Dark) support
  const variantClasses = {
    primary:
      'bg-gradient-to-r from-[#335CFF] to-[#6D5DF6] text-white hover:brightness-105 active:scale-[0.97] shadow-lg shadow-indigo-500/25 border border-indigo-400/25',
    royal:
      'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-500 hover:to-indigo-500 active:scale-[0.97] shadow-lg shadow-blue-500/25 border border-blue-400/30',
    secondary:
      'bg-slate-100 dark:bg-slate-850 text-slate-800 dark:text-slate-100 hover:bg-slate-200 dark:hover:bg-slate-800 active:scale-[0.97] border border-slate-300 dark:border-slate-700/80 shadow-sm',
    outline:
      'bg-transparent text-slate-700 dark:text-slate-200 border-2 border-slate-300 dark:border-slate-700/80 hover:bg-slate-100 dark:hover:bg-slate-800/60 active:scale-[0.97]',
    success:
      'bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:brightness-105 active:scale-[0.97] shadow-lg shadow-emerald-500/25 border border-emerald-400/25',
    amber:
      'bg-gradient-to-r from-amber-500 to-orange-600 text-white hover:brightness-105 active:scale-[0.97] shadow-lg shadow-amber-500/25 border border-amber-400/25',
    danger:
      'bg-gradient-to-r from-rose-500 to-red-600 text-white hover:brightness-105 active:scale-[0.97] shadow-lg shadow-red-500/25 border border-red-400/25',
    ghost:
      'bg-transparent text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50 active:scale-[0.97]',
  }[variant];

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseClasses} ${sizeClasses} ${variantClasses} ${widthClass} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      ) : (
        <>
          {leftIcon && <span className="shrink-0">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="shrink-0">{rightIcon}</span>}
        </>
      )}
    </button>
  );
};
export default Button;
