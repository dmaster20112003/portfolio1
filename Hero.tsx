import React, { useState, useEffect } from 'react';
import { ChevronDown, Download, Mail } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Aspiring Software Engineer | Full-Stack Developer | UI/UX Enthusiast";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/159775/binary-binary-code-binary-system-code-159775.jpeg')] bg-cover bg-center opacity-5"></div>
      
      <div className="container mx-auto px-6 text-center z-10">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
            <img 
              src="/image.png" 
              alt="Deepayan Saha" 
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
            Deepayan <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Saha</span>
          </h1>
          
          <div className="h-12 mb-6">
            <p className="text-xl md:text-2xl text-gray-300 font-light">
              {displayText}
              <span className="animate-pulse">|</span>
            </p>
          </div>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            Final-year Computer Science student passionate about creating innovative solutions 
            through clean code, intuitive design, and cutting-edge technology.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button 
            onClick={() => scrollToSection('projects')}
            className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View Projects
            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
          </button>
          
          <button 
            onClick={() => scrollToSection('contact')}
            className="group border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-400 hover:text-white transform hover:scale-105 transition-all duration-300"
          >
            <Mail className="inline mr-2 w-5 h-5" />
            Contact Me
          </button>
        </div>

        <button 
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-blue-400 transition-colors duration-300 animate-bounce"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;