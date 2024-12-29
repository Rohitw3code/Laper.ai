import React from 'react';
import { Mail, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <div id="contact" className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            Connect with our experts to discuss your project
          </p>
        </div>

        <div className="mt-12 flex flex-col md:flex-row justify-center gap-8">
          <button className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700">
            <Mail className="mr-2 h-5 w-5" />
            Contact Sales
          </button>
          <button className="inline-flex items-center justify-center px-8 py-4 border border-purple-600 text-lg font-medium rounded-md text-purple-600 bg-transparent hover:bg-purple-600 hover:text-white transition-colors duration-300">
            <MessageSquare className="mr-2 h-5 w-5" />
            Schedule Demo
          </button>
        </div>
      </div>
    </div>
  );
}