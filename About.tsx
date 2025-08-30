import React from 'react';
import { GraduationCap, Code, User } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Me</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white">Who I Am</h3>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              I am a passionate and dedicated final-year B.Tech Computer Science and Engineering student 
              with expertise in multiple programming languages and modern web technologies. My journey in 
              technology spans across software development, algorithms, databases, and full-stack web applications.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              I thrive on solving complex problems and creating innovative solutions that make a difference. 
              From IoT robotics to AI-powered applications, I enjoy exploring the intersection of technology 
              and creativity.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-slate-700 p-6 rounded-xl border border-slate-600 hover:border-blue-500 transition-colors duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <GraduationCap className="w-8 h-8 text-blue-400" />
                <h3 className="text-xl font-semibold text-white">Education</h3>
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-medium text-blue-300">University Of Engineering And Management, Jaipur</h4>
                <p className="text-gray-300">B.Tech in Computer Science and Engineering</p>
                <p className="text-gray-400">Graduating 2025 • SGPA: 63%</p>
              </div>
            </div>
            
            <div className="bg-slate-700 p-6 rounded-xl border border-slate-600 hover:border-purple-500 transition-colors duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <Code className="w-8 h-8 text-purple-400" />
                <h3 className="text-xl font-semibold text-white">Interests</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Algorithm Design', 'Web Development', 'UI/UX Design', 'IoT Projects', 'AI/ML', 'Cloud Computing'].map((interest) => (
                  <span key={interest} className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;