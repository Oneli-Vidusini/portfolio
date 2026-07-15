import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaAndroid, FaBriefcase } from 'react-icons/fa';

export default function Timeline() {
  const experiences = [
    {
      year: '2023',
      title: 'Began Software Engineering Studies',
      icon: <FaGraduationCap />,
      subtitle: 'Academic Foundations',
      description: 'Started undergraduate software engineering curriculum. Mastered computer science foundations, structural algorithm design, Git workflows, and core object-oriented languages (Java, JavaScript). Built relational databases using MySQL.',
      gradient: 'from-brand/80 to-transparent'
    },
    {
      year: '2024',
      title: 'Built MERN Full-Stack Projects',
      icon: <FaCode />,
      subtitle: 'Modern Web Engineering',
      description: 'Expanded skills into modern web ecosystems. Engineered full-stack MERN (MongoDB, Express.js, React, Node.js) platforms. Created Zen Tea Management System and Event Planning systems. Specialized in glassmorphic layouts, state hooks, and JSON API routing.',
      gradient: 'from-brand/80 to-transparent'
    },
    {
      year: '2025',
      title: 'Developed Android Applications',
      icon: <FaAndroid />,
      subtitle: 'Mobile Client Engineering',
      description: 'Ventured into mobile app markets. Built native Android clients using Kotlin, Android Studio, and Android SDK libraries. Developed Sleep Oasis and Pocket Recipes, integrating Room local databases, background tasks, and Jetpack Compose UIs.',
      gradient: 'from-brand/80 to-transparent'
    },
    {
      year: '2025',
      title: 'Started career as a Software Engineer Intern',
      icon: <FaBriefcase />,
      subtitle: 'Worked on real-world Client Projects with enterprise Solutions',
      description: 'Started work at Zerocode Software PVT(LTD) as backend developer. Ubuntu OS, GitHub, Docker, Jira,Postman,IntelliJ IDEA, Figma,  Spring Boot,Java, MySQL   ',
      gradient: 'from-brand/80 to-transparent'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-bg-dark relative border-t border-border-dark/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-extrabold font-title text-gray-100"
          >
            My <span className="text-brand">Timeline</span>
          </motion.h2>
          <div className="h-1 w-12 bg-brand mx-auto mt-4 rounded-full shadow-[0_0_8px_#6FB3B8]" />
        </div>

        {/* Timeline body */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical path line */}
          <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-0.5 timeline-line -translate-x-1/2 hidden md:block" />
          <div className="absolute left-6 top-2 bottom-2 w-0.5 timeline-line md:hidden" />

          {/* Experience cards */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={idx} 
                  className={`flex flex-col md:flex-row items-start md:items-center relative ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Glowing Node Button */}
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.4 }}
                    className="absolute left-3.5 md:left-1/2 w-8 h-8 rounded-full bg-bg-dark border-2 border-brand flex items-center justify-center text-brand -translate-x-1/2 z-10 md:shadow-[0_0_10px_rgba(111,179,184,0.4)] test-timeline-node"
                  >
                    {exp.icon}
                  </motion.div>

                  {/* Spacer Column (Desktop Only) */}
                  <div className="w-full md:w-1/2 hidden md:block" />

                  {/* Card Column */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="w-full md:w-[calc(50%-24px)] pl-12 md:pl-0"
                  >
                    <div className="glass-card p-6 md:p-8 rounded-2xl relative">
                      
                      {/* Year Indicator */}
                      <span className="inline-block px-3 py-1 rounded bg-brand/10 border border-brand/25 text-brand text-xs font-mono font-bold mb-3">
                        {exp.year}
                      </span>
                      
                      <h3 className="text-lg font-bold font-title text-gray-100 mb-1">
                        {exp.title}
                      </h3>
                      
                      <span className="block text-xs font-semibold text-gray-400 mb-4 uppercase tracking-widest">
                        {exp.subtitle}
                      </span>
                      
                      <p className="text-gray-400 text-sm leading-relaxed font-sans">
                        {exp.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
