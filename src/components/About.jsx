import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

function AnimatedCounter({ target, suffix = '', duration = 1.5 }) {
  const [count, setCount] = useState(0);
  const [inView, setInView] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = parseInt(target, 10);
    if (isNaN(end) || start === end) {
      setCount(target);
      return;
    }
    
    const incrementTime = Math.max(Math.floor((duration * 1000) / end), 25);
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return <span ref={elementRef}>{count}{suffix}</span>;
}

export default function About() {
  const strengths = [
    { title: 'Full-Stack Development', desc: 'Crafting responsive frontends and secure backends.' },
    { title: 'Mobile Applications', desc: 'Developing native Android clients using Kotlin and Android Studio.' },
    { title: 'Problem Solving', desc: 'Solving structural algorithms and real-world system patterns.' },
    { title: 'Agile Tools', desc: 'Managing project revisions correctly with Git, GitHub and Docker.' }
  ];

  return (
    <section id="about" className="py-20 bg-bg-dark/50 relative border-t border-border-dark/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-extrabold font-title sm:text-4xl text-gray-100"
          >
            About <span className="text-brand">Me</span>
          </motion.h2>
          <div className="h-1 w-12 bg-brand mx-auto mt-4 rounded-full shadow-[0_0_8px_#6FB3B8]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Bio Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card p-8 md:p-10 rounded-2xl"
          >
            <h3 className="text-xl font-bold font-title text-brand mb-4">Who I Am</h3>
            <p className="text-slate-300 leading-relaxed font-sans mb-6 text-base md:text-lg">
              I am an undergraduate software engineering student passionate about creating modern web and mobile applications. 
              I enjoy learning new technologies and solving real-world problems through software development. 
            </p>
            <p className="text-slate-400 leading-relaxed font-sans mb-8">
              Having experience building applications with React, Spring Boot, Node.js, MongoDB, MySQL, and Android, 
              I strive to write clean, maintainable, and highly efficient code. I look forward to contributing to open-source 
              systems and collaborating on challenging client projects.
            </p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-border-dark/60">
              <div className="text-center sm:text-left">
                <div className="text-3xl font-extrabold font-title text-brand">
                  <AnimatedCounter target="6" suffix=" months" />
                </div>
                <div className="text-xs text-gray-400 mt-1 uppercase tracking-wider font-semibold">Work Experience</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-extrabold font-title text-brand">
                  <AnimatedCounter target="3" suffix="+" />
                </div>
                <div className="text-xs text-gray-400 mt-1 uppercase tracking-wider font-semibold">Years of Study</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-extrabold font-title text-brand">
                  <AnimatedCounter target="5" suffix="+" />
                </div>
                <div className="text-xs text-gray-400 mt-1 uppercase tracking-wider font-semibold">Projects Built</div>
              </div>
              {/* <div className="text-center sm:text-left">
                <div className="text-3xl font-extrabold font-title text-brand">
                  <AnimatedCounter target="5" suffix="+" />
                </div>
                <div className="text-xs text-gray-400 mt-1 uppercase tracking-wider font-semibold">Certifications</div>
              </div> */}
            </div>
          </motion.div>

          {/* Right Strengths Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <h3 className="text-xl font-bold font-title text-gray-200 px-1">Core Strengths</h3>
            {strengths.map((str, idx) => (
              <motion.div
                key={idx}
                whileHover={{ x: 6 }}
                className="glass-card p-6 rounded-xl border-l-[3px] border-l-brand/70"
              >
                <h4 className="text-sm md:text-base font-bold font-title text-gray-100">{str.title}</h4>
                <p className="text-xs md:text-sm text-gray-400 mt-1.5 leading-relaxed font-sans">{str.desc}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
