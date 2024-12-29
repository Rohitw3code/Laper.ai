import React from 'react';
import { MessageSquare } from 'lucide-react';

interface ContactButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
}

export default function ContactButton({ 
  variant = 'primary', 
  size = 'md',
  onClick,
  className = ''
}: ContactButtonProps) {
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  const variants = {
    primary: `
      relative group overflow-hidden rounded-full 
      bg-gradient-to-r from-[#FF3BFF] to-[#5C24FF] 
      text-white font-medium 
      hover:shadow-lg hover:shadow-purple-500/40 
      transition-all duration-300 transform hover:-translate-y-0.5
    `,
    secondary: `
      relative group overflow-hidden rounded-full 
      border-2 border-[#FF3BFF] 
      text-[#FF3BFF] font-medium 
      hover:bg-[#FF3BFF]/10 
      transition-all duration-300
    `
  };

  return (
    <button 
      onClick={onClick}
      className={`
        ${variants[variant]}
        ${sizes[size]}
        ${className}
        whitespace-nowrap
      `}
    >
      <span className="relative z-10 flex items-center justify-center">
        <MessageSquare className="mr-2 h-4 w-4" />
        Contact Us
      </span>
      <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </button>
  );
}