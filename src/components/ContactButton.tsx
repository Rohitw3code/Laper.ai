import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function ContactButton() {
  return (
    <button
      className="fixed bottom-8 right-8 bg-purple-600 text-white p-4 rounded-full shadow-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-110 animate-bounce"
      onClick={() => window.location.href = '#contact'}
      aria-label="Contact Us"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  );
}