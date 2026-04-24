import { cn } from '@/src/lib/utils';

interface ProgressBarProps {
  value: number; // 0 to 100
  variant?: 'primary' | 'success' | 'warning' | 'purple';
  className?: string;
  showLabels?: boolean;
  labelLeft?: string;
  labelRight?: string;
}

export function ProgressBar({ 
  value, 
  variant = 'primary', 
  className,
  showLabels,
  labelLeft,
  labelRight
}: ProgressBarProps) {
  const colors = {
    primary: 'bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.5)]',
    success: 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]',
    warning: 'bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.5)]',
    purple: 'bg-gradient-to-r from-cyan-500 to-blue-500 shadow-[0_0_8px_rgba(34,211,238,0.3)]',
  };

  return (
    <div className={cn('w-full', className)}>
      {showLabels && (
        <div className="flex justify-between text-[11px] text-text-secondary mb-1">
          <span>{labelLeft}</span>
          <span>{labelRight}</span>
        </div>
      )}
      <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
        <div 
          className={cn('h-full rounded-full transition-all duration-1000', colors[variant])}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}
