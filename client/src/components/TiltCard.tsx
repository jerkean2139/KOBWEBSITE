import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  borderGradient?: string;
}

export function TiltCard({ 
  children, 
  className = "",
  borderGradient = "from-primary via-secondary to-primary"
}: TiltCardProps) {
  return (
    <div className="relative group">
      <div 
        className={cn(
          "absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500",
          `bg-gradient-to-r ${borderGradient}`
        )}
      />
      
      <div
        className={cn(
          "relative rounded-2xl transition-all duration-300 ease-out",
          "backdrop-blur-xl bg-white/5 border border-white/10",
          "shadow-xl shadow-black/20",
          "group-hover:border-white/20",
          className
        )}
      >
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </div>
  );
}
