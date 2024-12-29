import React from 'react';
import { Bot, Cpu } from 'lucide-react';

interface StatItemProps {
  icon: typeof Bot | typeof Cpu;
  value: string;
  label: string;
}

function StatItem({ icon: Icon, value, label }: StatItemProps) {
  return (
    <div className="flex items-center justify-center lg:justify-start">
      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400 mr-3" />
      <div>
        <div className="text-xl sm:text-2xl font-bold text-white">{value}</div>
        <div className="text-sm sm:text-base text-gray-400">{label}</div>
      </div>
    </div>
  );
}

export default function StatsDisplay() {
  return (
    <div className="mt-12 grid grid-cols-2 gap-6 sm:gap-8 max-w-md mx-auto lg:mx-0">
      <StatItem icon={Cpu} value="98%" label="Accuracy Rate" />
      <StatItem icon={Bot} value="500+" label="ML Models" />
    </div>
  );
}