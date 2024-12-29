import React from 'react';
import BadgeLabel from './BadgeLabel';
import AnimatedText from './AnimatedText';
import CTAButtons from './CTAButtons';
import StatsDisplay from './StatsDisplay';

export default function HeroContent() {
  return (
    <div className="text-center lg:text-left space-y-6 animate-[fadeIn_1s_ease-out]">
      <BadgeLabel />
      
      <div className="space-y-2">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          Transform Your Future with
        </h1>
        <AnimatedText />
      </div>
      
      <p className="text-body text-gray-300 max-w-2xl mx-auto lg:mx-0">
        Deploy production-ready AI solutions in days, not months. 
        Access cutting-edge ML models and expert development teams.
      </p>
      
      <CTAButtons />
      <StatsDisplay />
    </div>
  );
}