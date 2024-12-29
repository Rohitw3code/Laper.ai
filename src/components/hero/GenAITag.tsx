import React from 'react';
import { Sparkles } from 'lucide-react';

export default function GenAITag() {
  return (
    <div className="inline-flex items-center px-3 py-1.5 bg-purple-900/30 rounded-full mb-4 backdrop-blur-sm border border-purple-500/20">
      <Sparkles className="w-4 h-4 text-purple-400 mr-1.5 animate-pulse" />
      <span className="text-purple-300 text-sm">GenAI</span>
    </div>
  );
}