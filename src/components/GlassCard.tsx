import type { CSSProperties, ReactNode } from 'react';
import { useTheme } from '../context/useTheme';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export function GlassCard({ children, className = '' }: GlassCardProps) {
  const { neonColor } = useTheme();

  return (
    <div
      className={`glass-card ${className}`}
      style={{ '--neon-color': neonColor } as CSSProperties}
    >
      {children}
    </div>
  );
}
