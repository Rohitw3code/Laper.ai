import React from 'react';

interface RippleProps {
  x: number;
  y: number;
  onComplete: () => void;
}

export default function RippleEffect({ x, y, onComplete }: RippleProps) {
  return (
    <div
      className="fixed pointer-events-none z-30"
      style={{ left: x, top: y }}
      onAnimationEnd={onComplete}
    >
      <div className="absolute -translate-x-1/2 -translate-y-1/2">
        <div className="w-[100px] h-[100px] animate-ripple">
          <svg viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="url(#rippleGradient)"
              strokeWidth="2"
              className="origin-center"
            />
            <defs>
              <linearGradient id="rippleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FF3BFF" />
                <stop offset="100%" stopColor="#5C24FF" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}