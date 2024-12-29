import React, { useState, useEffect } from 'react';
import GradientText from './GradientText';

const phrases = [
  'Intelligent AI',
  'Machine Learning',
  'Neural Networks',
  'Deep Learning'
];

export default function AnimatedText() {
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
    <div className="h-[60px] sm:h-[80px] relative overflow-hidden">
      <div
        className={`transform transition-all duration-500 ease-in-out ${
          isAnimating 
            ? '-translate-y-full opacity-0' 
            : 'translate-y-0 opacity-100'
        }`}
      >
        <GradientText className="text-4xl sm:text-5xl md:text-6xl font-extrabold">
          {currentPhrase}
        </GradientText>
      </div>
    </div>
  );
}