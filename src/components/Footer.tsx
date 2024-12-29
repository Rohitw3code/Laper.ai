import React from 'react';
import { MapPin, Mail, Linkedin, Instagram, Github, Twitter, Brain, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-gray-400 pt-20 pb-12 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wLTR2LTJoLTJ2Mmgyem0tNCAwdi0yaC0ydjJoMnptMCA0di0yaC0ydjJoMnptMCA0di0yaC0ydjJoMnptLTQtOHYtMmgtMnYyaDJ6bTAgNHYtMmgtMnYyaDJ6bTAgNHYtMmgtMnYyaDJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo and Company Info */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 border-b border-gray-800 pb-16">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <Brain className="w-8 h-8 text-purple-500 mr-2" />
              <span className="text-2xl font-bold text-white">Laper</span>
            </div>
            <p className="text-gray-400 max-w-md">
              Pioneering the future of AI solutions with cutting-edge technology and 
              unparalleled expertise in machine learning and data science.
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end">
            <div className="flex items-center space-x-6 mb-4">
              {[
                { icon: Linkedin, href: 'https://linkedin.com/company/laper-ai' },
                { icon: Twitter, href: 'https://twitter.com/laper_ai' },
                { icon: Github, href: 'https://github.com/laper-ai' },
                { icon: Instagram, href: 'https://instagram.com/laper.ai' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transform hover:-translate-y-1 transition-all duration-300"
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
            <a
              href="mailto:contact@laper.ai"
              className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>contact@laper.ai</span>
            </a>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-4">
              {['About', 'Services', 'Products', 'Careers'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-purple-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Solutions</h3>
            <ul className="space-y-4">
              {['AI Development', 'Machine Learning', 'Data Engineering', 'MLOps'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-purple-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-4">
              {['Documentation', 'API Reference', 'Blog', 'Case Studies'].map((item) => (
                <li key={item} className="flex items-center">
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-purple-400 transition-colors inline-flex items-center">
                    {item}
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Headquarters</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-purple-500 mr-3 mt-1" />
                <p className="text-gray-400">
                  123 AI Innovation Hub<br />
                  Silicon Valley<br />
                  California, 94025<br />
                  United States
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © 2024 Laper. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-gray-500 hover:text-purple-400 text-sm transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}