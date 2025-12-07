import { ReactNode, useRef, useCallback } from 'react';
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
  glowColor = "rgba(59, 130, 246, 0.3)",
  borderGradient = "from-primary via-secondary to-primary"
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !glowRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    
    glowRef.current.style.background = `radial-gradient(circle at ${x}px ${y}px, ${glowColor}, transparent 50%)`;
    glowRef.current.style.opacity = '1';
  }, [glowColor]);

  const handleMouseLeave = useCallback(() => {
    if (!cardRef.current || !glowRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    glowRef.current.style.opacity = '0';
  }, []);

  return (
    <div className="relative group" style={{ transformStyle: 'preserve-3d' }}>
      <div 
        className={cn(
          "absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500",
          `bg-gradient-to-r ${borderGradient}`
        )}
        style={{ 
          animation: 'gradient-shift 3s ease infinite',
          backgroundSize: '200% 200%'
        }}
      />
      
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={cn(
          "relative rounded-2xl transition-transform duration-300 ease-out",
          "backdrop-blur-xl bg-white/5 border border-white/10",
          "shadow-xl shadow-black/20",
          className
        )}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div 
          ref={glowRef}
          className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 transition-opacity duration-300"
        />
        
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </div>
  );
}
