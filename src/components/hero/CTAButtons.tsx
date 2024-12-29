import React from 'react';
import { Sparkles, Zap } from 'lucide-react';

export default function CTAButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
      <button className="group relative px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-gradient-to-r from-[#FF3BFF] to-[#5C24FF] text-white font-medium overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF3BFF] to-[#5C24FF] transition-transform duration-300 group-hover:scale-110"></div>
        <span className="relative flex items-center justify-center">
          <Zap className="mr-2 h-5 w-5" />
          Start Your AI Journey
        </span>
      </button>
      
      <button className="relative px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-[#FF3BFF] font-medium overflow-hidden group">
        <div className="absolute inset-0 border-2 border-[#FF3BFF] rounded-lg"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF3BFF]/10 to-[#5C24FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <span className="relative flex items-center justify-center">
          <Sparkles className="mr-2 h-5 w-5" />
          Schedule Demo
        </span>
      </button>
    </div>
  );
}