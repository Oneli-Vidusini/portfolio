import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBookReader, FaAward } from 'react-icons/fa';

export default function Education() {
  const academicDetails = {
    degree: 'BSc (Hons) in Software Engineering',
    institution: 'Undergraduate Program',
    period: '2023 - Present',
    gpa: 'Diploma level completed',
    description: 'Enrolled in an intensive Software Engineering curriculum focusing on advanced computing foundations, data architectures, enterprise application design, and secure software development lifecycles.',
    modules: [
      'OOP with Java',
      'Data Structures & Algorithms',
      'Database Management Systems (MySQL)',
      'Enterprise Web Application Architecture',
      'Mobile Application Design (Android/Kotlin)',
      'Software Testing & QA'
    ]
  };

  const keyActivities = [
    {
      icon: <FaBookReader className="text-lg text-brand" />,
      title: 'Academic Focus Areas',
      desc: 'Specializing in reactive frontend architecture, distributed enterprise backend APIs, and native mobile Android systems.'
    },
    {
      icon: <FaAward className="text-lg text-brand" />,
      title: 'Extracurricular Tech Teams',
      desc: 'Active participant in inter-university Hackathons, developer societies, and peer mentoring programs for programming novices.'
    }
  ];

  return (
    <section id="education" className="py-20 bg-bg-dark/50 relative border-t border-border-dark/30">
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
            Academic <span className="text-brand">Education</span>
          </motion.h2>
          <div className="h-1 w-12 bg-brand mx-auto mt-4 rounded-full shadow-[0_0_8px_#6FB3B8]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Main Degree Block - Left */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 glass-card p-8 rounded-2xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-4 flex-wrap mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-brand/10 border border-brand/25 flex items-center justify-center text-brand text-2xl">
                    <FaGraduationCap />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold font-title text-gray-100">
                      {academicDetails.degree}
                    </h3>
                    <p className="text-slate-400 text-xs tracking-wide uppercase font-semibold">
                      {academicDetails.institution}
                    </p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-mono font-bold">
                  {academicDetails.period}
                </span>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-6 font-sans">
                {academicDetails.description}
              </p>

              {/* Core Syllabus Modules */}
              <div className="mb-6">
                <span className="block text-xs font-semibold text-gray-300 uppercase tracking-widest mb-3">Core Modules Mastered:</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {academicDetails.modules.map((mod, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs md:text-sm text-gray-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand/75 shadow-[0_0_4px_#6FB3B8]" />
                      {mod}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-border-dark/65 flex justify-between items-center text-xs">
              <span className="text-gray-400">Academic Standing:</span>
              <span className="font-bold text-brand uppercase tracking-wider font-title">{academicDetails.gpa}</span>
            </div>
          </motion.div>

          {/* Key Activities - Right */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {keyActivities.map((act, idx) => (
              <div key={idx} className="glass-card p-6 md:p-8 rounded-2xl flex flex-col justify-start h-full">
                <div className="w-10 h-10 rounded-lg bg-brand/10 border border-brand/25 flex items-center justify-center mb-4">
                  {act.icon}
                </div>
                <h4 className="text-base md:text-lg font-bold font-title text-gray-100 mb-2">
                  {act.title}
                </h4>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed font-sans">
                  {act.desc}
                </p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
