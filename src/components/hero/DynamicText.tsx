import React, { useState, useEffect } from 'react';
import GlowText from '../common/GlowText';

const phrases = [
  'AI Solutions',
  'Neural Networks',
  'Machine Learning',
  'Deep Learning',
  'Computer Vision'
];

export default function DynamicText() {
  const [currentPhrase, setCurrentPhrase] = useState(phrases[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    
    const animate = () => {
      setIsAnimating(true);
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % phrases.length;
        setCurrentPhrase(phrases[currentIndex]);
        setIsAnimating(false);
      }, 500);
    };

    const interval = setInterval(animate, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-20 relative overflow-hidden">
      <span
        className={`absolute inset-0 flex items-center justify-center text-3xl sm:text-4xl md:text-5xl font-bold transition-all duration-500 ${
          isAnimating 
            ? 'opacity-0 transform -translate-y-full' 
            : 'opacity-100 transform translate-y-0'
        }`}
      >
        <GlowText 
          color="#34eb98"
          glowColor="#5C24FF"
          className="bg-gradient-to-r from-[#FF3BFF] to-[#5C24FF] text-transparent bg-clip-text"
        >
          {currentPhrase}
        </GlowText>
      </span>
    </div>
  );
}