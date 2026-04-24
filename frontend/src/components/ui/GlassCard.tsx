import { ReactNode, HTMLAttributes } from 'react';
import { cn } from '@/src/lib/utils';

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hoverEffect?: boolean;
  className?: string;
}

export function GlassCard({ children, className, hoverEffect = false, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        'glass-card p-6 relative overflow-hidden group',
        hoverEffect && 'hover:-translate-y-1 transition-transform duration-300',
        className
      )}
      {...props}
    >
      {/* Decorative inner glow for hover */}
      {hoverEffect && (
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
