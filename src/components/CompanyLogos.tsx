import React from 'react';

const companies = [
  { name: 'TechCorp', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop' },
  { name: 'DataFlow', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop' },
  { name: 'AIVentures', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop' },
  { name: 'MLSystems', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop' },
  { name: 'CloudTech', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop' },
  { name: 'AILabs', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop' },
];

export default function CompanyLogos() {
  return (
    <div className="bg-[#0A0118] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold text-white mb-8">
          Trusted by Industry Leaders
        </h2>
        <div className="relative overflow-hidden">
          <div className="overflow-x-auto pb-4 scrollbar-hide">
            <div className="inline-flex space-x-8 animate-scroll whitespace-nowrap">
              {[...companies, ...companies].map((company, index) => (
                <div
                  key={`${company.name}-${index}`}
                  className="w-40 h-20 bg-gray-800/50 rounded-lg flex items-center justify-center p-4 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-[#0A0118] to-transparent"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-[#0A0118] to-transparent"></div>
        </div>
      </div>
    </div>
  );
}