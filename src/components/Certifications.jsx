import React from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaReact, FaLeaf, FaGitAlt, FaDocker, FaAws, FaAward } from 'react-icons/fa';

export default function Certifications() {
  const certsList = [
    {
      title: 'Java Programming',
      issuer: 'Oracle / University Foundation',
      icon: <FaJava className="text-3xl" />,
      status: 'Planned',
      desc: 'Advanced Java concepts, object-oriented principles, multithreading, collections framework, and SQL database interactions.',
      gradient: 'from-orange-500/10 to-orange-600/5'
    },
    {
      title: 'React Development',
      issuer: 'Meta Frontend Professional Path',
      icon: <FaReact className="text-3xl" />,
      status: 'Planned',
      desc: 'State management, custom hook composition, router setups, rendering cycles, and responsive design systems.',
      gradient: 'from-cyan-500/10 to-blue-500/5'
    },
    {
      title: 'Spring Boot Foundations',
      issuer: 'Developer Training / Udemy',
      icon: <FaLeaf className="text-3xl" />,
      status: 'Planned',
      desc: 'REST API architectures, Spring Security configurations, JPA/Hibernate mapping layer, and MVC controllers.',
      gradient: 'from-emerald-500/10 to-teal-500/5'
    },
    {
      title: 'Git Version Control',
      issuer: 'GitHub Associate / Coursera',
      icon: <FaGitAlt className="text-3xl" />,
      status: 'Planned',
      desc: 'Branch management strategies, merge conflict resolutions, remote repository pushes, and pull request reviews.',
      gradient: 'from-red-500/10 to-orange-500/5'
    },
    {
      title: 'Docker Containers',
      issuer: 'DevOps Lifecycle Training',
      icon: <FaDocker className="text-3xl" />,
      status: 'Planned',
      desc: 'Dockerfile creation, image orchestration layers, multi-container Docker Compose networks, and port mappings.',
      gradient: 'from-blue-500/10 to-indigo-500/5'
    },
    {
      title: 'AWS Associate',
      issuer: 'Amazon Web Services',
      icon: <FaAws className="text-3xl" />,
      status: 'Planned',
      desc: 'Learning roadmap targets: Elastic Cloud Compute (EC2), S3 storage bucket controls, Lambda triggers, and RDS databases.',
      gradient: 'from-yellow-500/5 to-amber-600/5'
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-bg-dark relative border-t border-border-dark/30">
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
            Certifications & <span className="text-brand">Targets</span>
          </motion.h2>
          <div className="h-1 w-12 bg-brand mx-auto mt-4 rounded-full shadow-[0_0_8px_#6FB3B8]" />
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certsList.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`glass-card p-6 md:p-8 rounded-2xl flex flex-col h-full bg-gradient-to-br ${cert.gradient} relative overflow-hidden`}
            >
              {/* Badge visual indicator */}
              <div className="absolute top-4 right-4 flex items-center gap-1.5">
                <span className={`px-2 py-0.5 rounded text-[9px] font-extrabold uppercase tracking-wider ${
                  cert.status === 'Completed'
                    ? 'bg-brand/10 border border-brand/35 text-brand shadow-[0_0_6px_rgba(111,179,184,0.15)]'
                    : 'bg-yellow-500/10 border border-yellow-500/35 text-yellow-500'
                }`}>
                  {cert.status}
                </span>
              </div>

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-bg-dark/80 border border-border-dark flex items-center justify-center text-brand mb-5 shadow-lg">
                {cert.icon}
              </div>

              {/* Text metadata */}
              <div className="flex-grow">
                <h3 className="text-base md:text-lg font-bold font-title text-gray-100 mb-1">
                  {cert.title}
                </h3>
                <span className="block text-xs font-semibold text-gray-400 mb-4 tracking-wide">
                  {cert.issuer}
                </span>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed font-sans">
                  {cert.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
