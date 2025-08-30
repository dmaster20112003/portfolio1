import React from 'react';
import { Code, Database, Cloud, Palette, PenTool } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: [
        { name: 'Python', level: 90 },
        { name: 'C/C++', level: 85 },
        { name: 'Java', level: 80 },
        { name: 'JavaScript', level: 88 },
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Web & Development',
      icon: Code,
      skills: [
        { name: 'HTML/CSS', level: 92 },
        { name: 'Bootstrap', level: 85 },
        { name: 'jQuery', level: 80 },
        { name: 'PHP', level: 75 },
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Cloud & Databases',
      icon: Database,
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'AWS (EC2, S3)', level: 75 },
        { name: 'Oracle SQL', level: 70 },
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Design & Tools',
      icon: Palette,
      skills: [
        { name: 'UI/UX Design', level: 88 },
        { name: 'Canva', level: 90 },
        { name: 'Photoshop', level: 75 },
        { name: 'Video Editing', level: 85 },
      ],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Content & Writing',
      icon: PenTool,
      skills: [
        { name: 'SEO Writing', level: 80 },
        { name: 'Technical Docs', level: 85 },
        { name: 'Research Writing', level: 82 },
        { name: 'Content Creation', level: 88 },
      ],
      color: 'from-teal-500 to-blue-500'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Skills</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-center space-x-3 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div 
                        className={`h-2 bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;