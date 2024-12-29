import React from 'react';
import { Building2, Users, Brain, Award } from 'lucide-react';

const clients = [
  {
    name: 'TechGiant Corp',
    logo: Building2,
    description: 'AI-powered customer service platform',
    results: '45% reduction in response time'
  },
  {
    name: 'DataFlow Systems',
    logo: Users,
    description: 'Machine learning data processing',
    results: '2x increase in data processing efficiency'
  },
  {
    name: 'SmartAI Solutions',
    logo: Brain,
    description: 'Predictive analytics implementation',
    results: '85% prediction accuracy achieved'
  },
  {
    name: 'InnovateTech',
    logo: Award,
    description: 'Computer vision quality control',
    results: '99.9% defect detection rate'
  }
];

export default function ClientSection() {
  return (
    <div className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Success Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex justify-center mb-4">
                <client.logo className="w-12 h-12 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-900 dark:text-white mb-2">
                {client.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
                {client.description}
              </p>
              <p className="text-purple-600 dark:text-purple-400 text-center font-semibold">
                {client.results}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}