import React from 'react';
import { Brain, Database, Bot, Workflow, Cloud, MessageSquare } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'AI/ML Solutions',
    description: 'Custom AI and machine learning solutions with rapid deployment and integration capabilities.',
  },
  {
    icon: Bot,
    title: 'Teams AI Bot Integration',
    description: 'Custom Microsoft Teams bots powered by AI for enhanced workplace productivity and automation.',
  },
  {
    icon: Workflow,
    title: 'Process Automation',
    description: 'End-to-end automation solutions using Selenium, Playwright, and custom frameworks.',
  },
  {
    icon: Database,
    title: 'Data Engineering',
    description: 'Modern data pipeline development, ETL processes, and warehouse optimization.',
  },
  {
    icon: Cloud,
    title: 'Website Automation',
    description: 'Automated website testing, monitoring, and content management solutions.',
  },
  {
    icon: MessageSquare,
    title: 'AI Publications',
    description: 'Technical documentation, research papers, and AI implementation guides.',
  },
];

export default function Services() {
  return (
    <div id="services" className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Animated background effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20 animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 sm:text-5xl">
            Our Services
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Comprehensive AI and automation solutions for modern enterprises
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 pt-12 bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:-translate-y-1"
            >
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative">
                {/* Icon container - positioned relative to the card */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                  <div className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 p-3 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                </div>

                {/* Content with proper spacing */}
                <h3 className="text-xl font-medium text-white group-hover:text-purple-300 transition-colors duration-300 text-center mb-4">
                  {service.title}
                </h3>
                <p className="text-base text-gray-400 group-hover:text-gray-300 transition-colors duration-300 text-center">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}