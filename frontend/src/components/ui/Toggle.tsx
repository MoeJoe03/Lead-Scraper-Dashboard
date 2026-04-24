import * as React from "react"
import { cn } from "@/src/lib/utils"

interface ToggleProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
  defaultChecked?: boolean;
}

export function Toggle({ label, className, ...props }: ToggleProps) {
  return (
    <label className={cn("inline-flex items-center cursor-pointer group", className)}>
      <div className="relative">
        <input type="checkbox" className="sr-only peer" {...props} />
        <div className="w-10 h-5 bg-white/10 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-neon-blue shadow-inner border border-white/5" />
      </div>
      {label && (
        <span className="ml-3 text-sm font-medium text-text-secondary group-hover:text-white transition-colors">
          {label}
        </span>
      )}
    </label>
  )
}
