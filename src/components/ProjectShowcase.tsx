import React from 'react';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'AI-Powered Customer Service',
    description: 'Automated customer support system with 95% accuracy',
    client: 'Global Retail Corp',
    category: 'Natural Language Processing'
  },
  {
    title: 'Predictive Maintenance System',
    description: 'IoT-based machine learning solution for manufacturing',
    client: 'Industrial Solutions Inc',
    category: 'Machine Learning'
  },
  {
    title: 'Computer Vision Quality Control',
    description: 'Automated defect detection system',
    client: 'AutoTech Manufacturing',
    category: 'Computer Vision'
  }
];

export default function ProjectShowcase() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="text-sm text-purple-600 mb-2">{project.category}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="text-sm text-gray-500">Client: {project.client}</div>
              </div>
              <div className="px-6 py-4 bg-gray-50 flex justify-end">
                <button className="text-purple-600 hover:text-purple-700 inline-flex items-center">
                  View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}