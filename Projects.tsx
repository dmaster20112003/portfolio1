import React from 'react';
import { ExternalLink, Github, Calendar, Zap } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'IoT-Based Fire-Fighting Robot',
      year: '2025',
      description: 'An autonomous Arduino-powered robot equipped with advanced flame detection sensors and an integrated water pump system for automated fire suppression.',
      technologies: ['Arduino', 'IoT Sensors', 'C++', 'Hardware Integration'],
      features: [
        'Autonomous flame detection and navigation',
        'Real-time sensor data processing',
        'Automated water pump activation',
        'Obstacle avoidance system'
      ],
      gradient: 'from-red-500 to-orange-500'
    },
    {
      title: 'College AI',
      year: '2024',
      description: 'A ChatGPT-inspired intelligent student chatbot powered by Gemini API, designed to assist students with academic queries and campus information.',
      technologies: ['Python', 'Gemini API', 'Flask', 'NLP'],
      features: [
        'Natural language processing',
        'Academic query resolution',
        'Campus information system',
        'Contextual conversation memory'
      ],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Automatic Question Paper Generator',
      year: '2024',
      description: 'A comprehensive web-based platform that automates the creation of examination papers using intelligent algorithms and database management.',
      technologies: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
      features: [
        'Automated question selection',
        'Difficulty level balancing',
        'Subject-wise categorization',
        'Export to multiple formats'
      ],
      gradient: 'from-green-500 to-teal-500'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Projects</span>
        </h2>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-slate-800 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex items-center space-x-1 text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{project.year}</span>
                  </div>
                </div>
                
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-blue-300 mb-2 flex items-center">
                    <Zap className="w-4 h-4 mr-1" />
                    Key Features
                  </h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-300 text-sm flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-slate-700 text-gray-300 px-3 py-1 rounded-full text-xs border border-slate-600">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2">
                    <ExternalLink className="w-4 h-4" />
                    <span>View Demo</span>
                  </button>
                  <button className="border border-slate-600 text-gray-300 hover:text-white hover:border-blue-500 py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center">
                    <Github className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;