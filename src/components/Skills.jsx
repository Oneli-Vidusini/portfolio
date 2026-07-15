import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaServer, FaDatabase, FaMobileAlt, FaTools } from 'react-icons/fa';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <FaLaptopCode className="text-xl" />,
      skills: [
        { name: 'React', level: 90 },
        { name: 'JavaScript', level: 90 },
        { name: 'HTML & CSS', level: 95 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Bootstrap', level: 85 }
      ]
    },
    {
      title: 'Backend',
      icon: <FaServer className="text-xl" />,
      skills: [
        // { name: 'Spring Boot', level: 85 },
        { name: 'Java', level: 85 },
        { name: 'Node.js', level: 80 },
        { name: 'Python', level: 10,status: 'Learning' }
        // { name: 'Express', level: 80 }
      ]
    },
    {
      title: 'Database',
      icon: <FaDatabase className="text-xl" />,
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'PostgreSQL', level: 10, status: 'Learning' }
      ]
    },
    {
      title: 'Mobile',
      icon: <FaMobileAlt className="text-xl" />,
      skills: [
        { name: 'Kotlin', level: 75 },
        { name: 'Android Studio', level: 80 }
      ]
    },
    {
      title: 'Tools & Workflow',
      icon: <FaTools className="text-xl" />,
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'Postman', level: 85 },
        { name: 'Docker', level: 70 },
        { name: 'VS Code', level: 95 },
        { name: 'IntelliJ IDEA', level: 90 },
        { name: 'Jira', level: 85 },
        { name: 'Figma', level: 70 },
        { name: 'Ubuntu', level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-bg-dark relative border-t border-border-dark/30">
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
            Technical <span className="text-brand">Skills</span>
          </motion.h2>
          <div className="h-1 w-12 bg-brand mx-auto mt-4 rounded-full shadow-[0_0_8px_#6FB3B8]" />
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-6 md:p-8 rounded-2xl flex flex-col h-full"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border-dark/50">
                <div className="w-10 h-10 rounded-lg bg-brand/10 border border-brand/25 flex items-center justify-center text-brand">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold font-title text-gray-100">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-5 flex-grow">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-2">
                    <div className="flex justify-between items-center text-sm font-semibold">
                      <span className="text-gray-300">{skill.name}</span>
                      <div className="flex items-center gap-2">
                        {skill.status && (
                          <span className="px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-brand/10 border border-brand/35 text-brand">
                            {skill.status}
                          </span>
                        )}
                        <span className="text-gray-400 text-xs font-mono">{skill.level}%</span>
                      </div>
                    </div>
                    
                    {/* Track Container */}
                    <div className="h-2 w-full bg-border-dark/65 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-brand/50 to-brand rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
