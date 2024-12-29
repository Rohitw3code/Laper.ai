import React from 'react';
import { Bot } from 'lucide-react';

interface AICursorProps {
  position: { x: number; y: number };
  isHovering: boolean;
}

export default function AICursor({ position, isHovering }: AICursorProps) {
  return (
    <div 
      className={`fixed pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 transition-transform duration-150 ease-out ${
        isHovering ? 'scale-125' : 'scale-100'
      }`}
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px`,
      }}
    >
      <div className="relative">
        <div className="absolute -inset-2 bg-gradient-to-r from-[#FF3BFF] to-[#5C24FF] rounded-full opacity-20 blur-sm"></div>
        <Bot className="w-6 h-6 text-white relative" />
      </div>
    </div>
  );
}