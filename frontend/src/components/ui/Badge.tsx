import * as React from 'react';
import { cn } from '@/src/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'success' | 'warning' | 'danger' | 'neutral';
  className?: string;
}

export function Badge({ children, variant = 'neutral', className }: BadgeProps) {
  const variants = {
    primary: 'bg-neon-blue/20 text-neon-blue border-neon-blue/30',
    success: 'bg-success/20 text-success border-success/30',
    warning: 'bg-warning/20 text-warning border-warning/30',
    danger: 'bg-red-500/20 text-red-400 border-red-500/30',
    neutral: 'bg-white/10 text-text-secondary border-white/10',
  };

  return (
    <span className={cn(
      'px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border',
      variants[variant],
      className
    )}>
      {children}
    </span>
  );
}
