import React from 'react';
import { Code2 } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center">
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-[#FF3BFF] to-[#5C24FF] rounded-lg blur opacity-40 group-hover:opacity-75 transition duration-300"></div>
        <div className="relative flex items-center justify-center w-10 h-10 bg-gradient-to-r from-[#FF3BFF]/10 to-[#5C24FF]/10 rounded-lg border border-purple-500/20">
          <Code2 className="h-6 w-6 text-white transform group-hover:scale-110 transition-transform duration-300" />
        </div>
      </div>
      <div className="ml-3 flex flex-col">
        <span className="text-xl font-bold text-white" style={{ fontFamily: "'Orbitron', sans-serif" }}>
          Laper
        </span>
        <span className="text-xs text-purple-400">dev + loper</span>
      </div>
    </div>
  );
}