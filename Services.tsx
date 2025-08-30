import React from 'react';
import { Palette, Monitor, Smartphone, PenTool } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: 'Graphics Design',
      description: 'Creative posters, banners, and social media content that capture attention and communicate your brand message effectively.',
      features: ['Social Media Graphics', 'Brand Identity', 'Print Design', 'Digital Illustrations']
    },
    {
      icon: Monitor,
      title: 'UI/UX Design',
      description: 'User-centered design approach creating intuitive wireframes, prototypes, and interfaces that enhance user experience.',
      features: ['Wireframing', 'Prototyping', 'User Research', 'Design Systems']
    },
    {
      icon: Smartphone,
      title: 'Front-End Development',
      description: 'Responsive web applications built with modern technologies, ensuring optimal performance across all devices.',
      features: ['React Applications', 'Responsive Design', 'Performance Optimization', 'Cross-browser Compatibility']
    },
    {
      icon: PenTool,
      title: 'Content & Writing',
      description: 'Technical documentation, SEO-optimized content, and research writing that communicates complex ideas clearly.',
      features: ['Technical Documentation', 'SEO Writing', 'Research Papers', 'Content Strategy']
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Services</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-slate-900 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-gray-300 text-sm flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;