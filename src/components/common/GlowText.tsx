import React from 'react';

interface GlowTextProps {
  children: React.ReactNode;
  color?: string;
  glowColor?: string;
  className?: string;
}

export default function GlowText({ 
  children, 
  color = 'white',
  glowColor = '#FF3BFF',
  className = '' 
}: GlowTextProps) {
  return (
    <span
      className={`relative ${className}`}
      style={{
        color: color,
        textShadow: `0 0 10px ${glowColor},
                     0 0 20px ${glowColor},
                     0 0 30px ${glowColor}`,
      }}
    >
      {children}
    </span>
  );
}