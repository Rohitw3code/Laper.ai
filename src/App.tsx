import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/hero/Hero';
import FloatingIcons from './components/FloatingIcons';
import Services from './components/Services';
import CompanyLogos from './components/CompanyLogos';
import TechStack from './components/tech/TechStack';
import ProjectShowcase from './components/ProjectShowcase';
import ClientSection from './components/ClientSection';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import ContactButton from './components/ContactButton';
import Footer from './components/Footer';
import CustomCursor from './components/cursor/CustomCursor';
import './styles/animations.css';

export default function App() {
  return (
    <ThemeProvider>
      <CustomCursor />
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
        <Navbar />
        <main>
          <div className="relative">
            <FloatingIcons />
            <Hero />
          </div>
          <CompanyLogos />
          <Services />
          <TechStack />
          <ProjectShowcase />
          <ClientSection />
          <Reviews />
          <Contact />
          <ContactButton />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}