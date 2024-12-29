import React from 'react';

interface AIClickEffectProps {
  x: number;
  y: number;
  onComplete: () => void;
}

export default function AIClickEffect({ x, y, onComplete }: AIClickEffectProps) {
  return (
    <div
      className="fixed pointer-events-none z-30"
      style={{ left: x, top: y }}
      onAnimationEnd={onComplete}
    >
      <div className="absolute -translate-x-1/2 -translate-y-1/2">
        <svg width="60" height="60" viewBox="0 0 60 60">
          <g className="animate-[ping_1s_ease-out_forwards]">
            <circle
              cx="30"
              cy="30"
              r="20"
              fill="none"
              stroke="url(#clickGradient)"
              strokeWidth="2"
              strokeDasharray="6 3"
            />
            <path
              d="M20,30 L40,30 M30,20 L30,40"
              stroke="url(#clickGradient)"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </g>
          <defs>
            <linearGradient id="clickGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF3BFF" />
              <stop offset="100%" stopColor="#5C24FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}