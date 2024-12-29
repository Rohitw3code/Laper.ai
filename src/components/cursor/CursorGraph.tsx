import React from 'react';

export default function CursorGraph({ position }: { position: { x: number; y: number } }) {
  return (
    <div 
      className="fixed w-8 h-8 pointer-events-none z-40 -translate-x-1/2 -translate-y-1/2"
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px`,
        transition: 'transform 0.15s ease-out'
      }}
    >
      <svg 
        viewBox="0 0 100 100" 
        className="w-full h-full rotate-45 opacity-60"
      >
        <path
          d="M10,50 Q30,20 50,50 T90,50"
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="2"
          className="path-animation"
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF3BFF" />
            <stop offset="100%" stopColor="#5C24FF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}