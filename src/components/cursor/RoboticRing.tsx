import React from 'react';

interface RoboticRingProps {
  position: { x: number; y: number };
  isHovering: boolean;
}

export default function RoboticRing({ position, isHovering }: RoboticRingProps) {
  return (
    <div 
      className="fixed pointer-events-none z-40 -translate-x-1/2 -translate-y-1/2"
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px`,
        transition: 'transform 0.2s ease-out'
      }}
    >
      <svg 
        width="40" 
        height="40" 
        viewBox="0 0 40 40" 
        className={`transition-transform duration-300 ${isHovering ? 'scale-150' : 'scale-100'}`}
      >
        <circle
          cx="20"
          cy="20"
          r="16"
          fill="none"
          stroke="url(#ringGradient)"
          strokeWidth="1"
          className="animate-[spin_4s_linear_infinite]"
          strokeDasharray="4 4"
        />
        <defs>
          <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF3BFF" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#5C24FF" stopOpacity="0.5" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}