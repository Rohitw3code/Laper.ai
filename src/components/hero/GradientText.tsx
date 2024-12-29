import React from 'react';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export default function GradientText({ children, className = '' }: GradientTextProps) {
  return (
    <span className={`bg-gradient-to-r from-[#FF3BFF] via-[#ECBFBF] to-[#5C24FF] text-transparent bg-clip-text ${className}`}>
      {children}
    </span>
  );
}