import React from 'react';
import { Bot } from 'lucide-react';

export default function BadgeLabel() {
  return (
    <div className="inline-flex items-center px-4 py-2 bg-purple-900/30 rounded-full text-sm sm:text-base backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-colors duration-300">
      <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 mr-2" />
      <span className="text-purple-300">Next-Gen AI Solutions</span>
    </div>
  );
}