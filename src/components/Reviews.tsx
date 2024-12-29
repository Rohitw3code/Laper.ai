import React from 'react';
import { Linkedin } from 'lucide-react';

const reviews = [
  {
    name: 'Sarah Chen',
    role: 'CTO at TechVision',
    linkedin: 'https://linkedin.com/in/sarahchen',
    content: 'Laper transformed our business with their AI solutions. The implementation was smooth and the results exceeded our expectations.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
  },
  {
    name: 'Michael Rodriguez',
    role: 'Head of AI, DataFlow',
    linkedin: 'https://linkedin.com/in/mrodriguez',
    content: 'Their expertise in ML model development helped us achieve 40% better performance in our prediction systems.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop'
  },
  {
    name: 'Emily Watson',
    role: 'Product Director',
    linkedin: 'https://linkedin.com/in/emilywatson',
    content: 'The 24-hour website service was incredible. They delivered a professional site that perfectly matched our brand.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop'
  }
];

export default function Reviews() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">{review.name}</h3>
                  <p className="text-sm text-gray-600">{review.role}</p>
                </div>
                <a
                  href={review.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto text-blue-600 hover:text-blue-700"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
              <p className="text-gray-600 italic">&ldquo;{review.content}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}