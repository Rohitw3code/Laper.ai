import React from 'react';
import { Rocket, Zap, ArrowRight } from 'lucide-react';
import MatrixRain from './MatrixRain';
import DynamicText from './DynamicText';
import GenAITag from './GenAITag';
import DeliveryBadge from './DeliveryBadge';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-[#0A0118] flex items-center justify-center overflow-hidden">
      <MatrixRain />
      
      <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          
          <DeliveryBadge />
          
          {/* Rest of the Hero component remains unchanged */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4" 
              style={{ fontFamily: "'Orbitron', sans-serif" }}>
            Bringing Your Vision
            <span className="block mt-2 bg-gradient-to-r from-[#FF3BFF] to-[#5C24FF] text-transparent bg-clip-text">
              To Reality
            </span>
          </h1>
          
          <div className="h-20 mb-8">
            <DynamicText />
          </div>
          
          <p className="max-w-2xl mx-auto text-gray-300 text-base sm:text-lg mb-12">
            Skip the wait. Get your dream project delivered in just 48 hours. 
            Quality code, stunning design, lightning-fast delivery.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-16">
            <button className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#FF3BFF] to-[#5C24FF] rounded-xl text-white font-medium overflow-hidden transform hover:scale-105 transition-all duration-300 text-sm sm:text-base">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF3BFF] to-[#5C24FF] transition-transform duration-300 group-hover:scale-110"></div>
              <span className="relative flex items-center justify-center">
                <Rocket className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Start Project Now
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            
            <button className="group px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-[#FF3BFF] font-medium border-2 border-[#FF3BFF] hover:bg-[#FF3BFF]/10 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
              <span className="flex items-center justify-center">
                <Zap className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                View Portfolio
              </span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-3xl mx-auto">
            {/* Stats section remains unchanged */}
          </div>
        </div>
      </div>
    </div>
  );
}