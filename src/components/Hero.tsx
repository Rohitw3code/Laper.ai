import React from 'react';
import { Sparkles, Zap, Bot, Cpu } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-[80vh] lg:min-h-screen bg-gray-900 flex items-center">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-gray-900 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485')] bg-cover bg-center opacity-10"></div>
      </div>
      
      <div className="relative container-padding max-w-7xl mx-auto py-12 sm:py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-purple-800/30 rounded-full mb-6 text-sm sm:text-base">
              <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 mr-2" />
              <span className="text-purple-300">AI-Powered Solutions</span>
            </div>
            
            <h1 className="heading-primary mb-6">
              Transform Your Business with
              <span className="block sm:inline bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text"> Intelligent AI</span>
            </h1>
            
            <p className="text-body text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              Deploy production-ready AI solutions in days, not months. 
              Get instant access to cutting-edge ML models and expert development teams.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium hover:from-purple-700 hover:to-indigo-700 transform hover:-translate-y-0.5 transition-all duration-200">
                <Zap className="mr-2 h-5 w-5" />
                Start Your AI Journey
              </button>
              
              <button className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-lg border-2 border-purple-500 text-purple-400 font-medium hover:bg-purple-500/10 transform hover:-translate-y-0.5 transition-all duration-200">
                <Sparkles className="mr-2 h-5 w-5" />
                Schedule Demo
              </button>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-6 sm:gap-8 max-w-md mx-auto lg:mx-0">
              <div className="flex items-center justify-center lg:justify-start">
                <Cpu className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400 mr-3" />
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-white">98%</div>
                  <div className="text-sm sm:text-base text-gray-400">Accuracy Rate</div>
                </div>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <Bot className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400 mr-3" />
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-white">500+</div>
                  <div className="text-sm sm:text-base text-gray-400">ML Models</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg opacity-20 blur-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80" 
                alt="AI Visualization" 
                className="rounded-lg shadow-2xl relative z-10 w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}