import React from 'react';

export default function CursorDot({ position }: { position: { x: number; y: number } }) {
  return (
    <div 
      className="fixed w-4 h-4 pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px`,
        transition: 'transform 0.1s ease-out'
      }}
    >
      <div className="absolute inset-0 bg-white rounded-full"></div>
    </div>
  );
}