import { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/src/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  children: ReactNode;
  className?: string;
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className, 
  ...props 
}: ButtonProps) {
  const variants = {
    primary: 'bg-cyan-500 text-white shadow-[0_0_15px_rgba(34,211,238,0.3)] hover:bg-cyan-400 transform hover:-translate-y-0.5',
    secondary: 'bg-white/5 border border-white/10 text-white hover:bg-white/10',
    ghost: 'bg-transparent text-text-secondary hover:text-white hover:bg-white/5',
    danger: 'bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/20',
  };

  const sizes = {
    sm: 'px-4 py-1.5 text-xs font-bold',
    md: 'px-5 py-2.5 text-sm font-semibold',
    lg: 'px-8 py-3.5 text-base font-bold',
    icon: 'p-2',
  };

  return (
    <button
      className={cn(
        'rounded-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
