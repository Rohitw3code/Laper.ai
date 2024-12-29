import React from 'react';
import { LucideIcon } from 'lucide-react';

interface TechCategoryProps {
  icon: LucideIcon;
  title: string;
  description: string;
  technologies: string[];
}

export default function TechCategory({ icon: Icon, title, description, technologies }: TechCategoryProps) {
  return (
    <div className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 backdrop-blur-lg border border-gray-700/50 hover:border-purple-500/30 transition-all duration-500 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
      
      {/* Hover light effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur"></div>
      
      <div className="relative">
        <div className="flex items-center justify-between mb-4">
          <Icon className="w-12 h-12 text-purple-500 group-hover:text-purple-400 transition-colors duration-300 transform group-hover:scale-110" />
          <div className="w-12 h-12 rounded-full bg-purple-500/10 absolute -top-6 -right-6 group-hover:scale-[4] transition-transform duration-500"></div>
        </div>
        
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full text-sm group-hover:bg-purple-500/20 group-hover:text-purple-200 transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}