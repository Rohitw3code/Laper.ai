import React from 'react';
import { Brain, Cpu, Database, Network, Bot, Binary } from 'lucide-react';

export default function FloatingIcons() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[Brain, Cpu, Database, Network, Bot, Binary].map((Icon, index) => (
        <div
          key={index}
          className="absolute animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float 15s infinite ${index * 2}s linear`,
            opacity: 0.1
          }}
        >
          <Icon className="w-12 h-12 text-purple-500" />
        </div>
      ))}
    </div>
  );
}