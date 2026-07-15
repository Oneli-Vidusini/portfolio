import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload, FaArrowRight } from 'react-icons/fa';

export default function Hero() {
  const [typingText, setTypingText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const roles = ['React & Frontend', 'Spring Boot & Java', 'MERN Full-Stack', 'Android & Kotlin'];

  useEffect(() => {
    let timer;
    const currentFullWord = roles[roleIndex];
    
    const tick = () => {
      if (!isDeleting) {
        setTypingText(currentFullWord.substring(0, typingText.length + 1));
        if (typingText === currentFullWord) {
          timer = setTimeout(() => setIsDeleting(true), 1600);
        } else {
          timer = setTimeout(tick, 90);
        }
      } else {
        setTypingText(currentFullWord.substring(0, typingText.length - 1));
        if (typingText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          timer = setTimeout(tick, 200);
        } else {
          timer = setTimeout(tick, 50);
        }
      }
    };

    timer = setTimeout(tick, isDeleting ? 50 : 90);
    return () => clearTimeout(timer);
  }, [typingText, isDeleting, roleIndex]);

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/Oneli-Vidusini', label: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/in/oneli-vidusini', label: 'LinkedIn' },
    { icon: <FaEnvelope />, url: 'mailto:onelividusini@gmail.com', label: 'Email' }
  ];

  const handleScrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      const offsetTop = el.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  // Generate floating dots coordinates
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5
  }));

  return (
    <section 
      id="home" 
      className="min-h-screen relative flex items-center justify-center pt-24 pb-12 overflow-hidden dot-grid"
    >
      {/* Floating Animated Web/Mobile System Nodes */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute bg-brand/20 rounded-full"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, 20, 0],
              opacity: [0.15, 0.5, 0.15],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Hero Left Content */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full border border-brand/30 bg-brand/10 text-brand text-xs md:text-sm font-semibold tracking-wider uppercase mb-6"
          >
            Welcome to my Dev Portfolio
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight font-title text-gray-100 mb-2 leading-none"
          >
            Hi, I'm <span className="text-brand glow-text">Oneli Vidusini</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-3xl font-medium text-slate-300 font-title mb-6 flex h-8 md:h-10 items-center gap-2"
          >
            Full Stack Developer specializing in:
            <span className="text-brand border-r-2 border-brand/80 pr-1 animate-pulse">
              {typingText}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base md:text-lg text-slate-400 max-w-xl mb-8 leading-relaxed font-sans"
          >
            I create modern, high-performance web and mobile applications using 
            React, Spring Boot, MERN, and Android. Always learning, building, and solving real-world problems.
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mb-8 w-full sm:w-auto"
          >
            <button
              onClick={handleScrollToProjects}
              className="px-8 py-3.5 rounded-lg bg-brand hover:bg-brand-hover text-bg-dark font-bold text-sm tracking-wide transition-all shadow-lg hover:shadow-brand/20 active:scale-98 flex items-center justify-center gap-2 group cursor-pointer"
            >
              View Projects
              <FaArrowRight className="transition-transform group-hover:translate-x-1" />
            </button>
            
            <a
              href="/resume.pdf"
              download="Oneli_Vidusini_CV.pdf"
              className="px-8 py-3.5 rounded-lg border border-border-dark bg-bg-card-dark/65 hover:border-brand/45 hover:text-brand text-gray-200 font-semibold text-sm tracking-wide transition-all active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
            >
              Download CV
              <FaFileDownload />
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex space-x-4"
          >
            {socialLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                className="w-10 h-10 rounded-full border border-border-dark flex items-center justify-center text-gray-400 hover:text-brand hover:border-brand/40 bg-bg-card-dark/40 transition-all duration-300 hover:-translate-y-1 test-social-icon"
              >
                {link.icon}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Hero Right Graphic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center w-full relative"
        >
          {/* Glass Card graphic background decoration */}
          <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-brand/5 blur-3xl -z-10 pointer-events-none" />

          {/* Glowing Vector Coding Workspace SVG */}
          <svg
            className="w-full max-w-[420px] h-auto drop-shadow-2xl"
            viewBox="0 0 500 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Monitor Stand */}
            <path d="M220 380 H280 L290 410 H210 Z" fill="#2E3748" />
            <rect x="242" y="320" width="16" height="60" fill="#1B212C" />

            {/* Main Monitor */}
            <rect x="100" y="120" width="300" height="200" rx="12" fill="#11141B" stroke="#262D3A" strokeWidth="4" />
            
            {/* Screen Inner Glowing Code Canvas */}
            <rect x="110" y="130" width="280" height="180" rx="8" fill="#080A0E" />
            
            {/* Code Lines on Screen */}
            <rect x="125" y="145" width="60" height="8" rx="4" fill="#6FB3B8" fillOpacity="0.8" />
            <rect x="125" y="160" width="120" height="8" rx="4" fill="#3B4659" />
            <rect x="140" y="175" width="140" height="8" rx="4" fill="#6FB3B8" fillOpacity="0.4" />
            <rect x="140" y="190" width="90" height="8" rx="4" fill="#3B4659" />
            <rect x="125" y="205" width="80" height="8" rx="4" fill="#6FB3B8" fillOpacity="0.8" />
            <rect x="145" y="220" width="160" height="8" rx="4" fill="#3B4659" />
            <rect x="145" y="235" width="110" height="8" rx="4" fill="#6FB3B8" fillOpacity="0.6" />
            
            {/* Mobile IDE Floating Code Frame */}
            <g className="animate-bounce" style={{ animationDuration: '4s' }}>
              <rect x="330" y="200" width="85" height="135" rx="8" fill="#11141B" stroke="#6FB3B8" strokeWidth="2" opacity="0.95" />
              <rect x="336" y="206" width="73" height="123" rx="5" fill="#080A0E" />
              <circle cx="372" cy="318" r="4" fill="#6FB3B8" />
              
              {/* App UI Wireframe components */}
              <rect x="344" y="220" width="57" height="12" rx="3" fill="#6FB3B8" fillOpacity="0.3" />
              <circle cx="352" cy="245" r="6" fill="#3B4659" />
              <rect x="364" y="242" width="37" height="6" rx="3" fill="#3B4659" />
              <rect x="344" y="260" width="57" height="25" rx="4" fill="#6FB3B8" fillOpacity="0.15" />
              <rect x="344" y="292" width="25" height="10" rx="3" fill="#6FB3B8" />
            </g>

            {/* Orbiting Tech Icons */}
            <g className="animate-spin" style={{ transformOrigin: '250px 220px', animationDuration: '40s' }}>
              {/* React Node */}
              <g transform="translate(80, 160)">
                <circle cx="0" cy="0" r="16" fill="#11141B" stroke="#6FB3B8" strokeWidth="1" />
                <path d="M-6 -4 C-6 -8 6 -8 6 -4 C6 0 -6 0 -6 -4" stroke="#6FB3B8" strokeWidth="1" fill="none" />
                <path d="M-6 -4 C-6 0 6 0 6 -4 C6 -8 -6 -8 -6 -4" stroke="#6FB3B8" strokeWidth="1" fill="none" transform="rotate(60)" />
                <path d="M-6 -4 C-6 0 6 0 6 -4 C6 -8 -6 -8 -6 -4" stroke="#6FB3B8" strokeWidth="1" fill="none" transform="rotate(120)" />
              </g>

              {/* Android Node */}
              <g transform="translate(140, 60)">
                <circle cx="0" cy="0" r="16" fill="#11141B" stroke="#6FB3B8" strokeWidth="1" />
                <path d="M-6 4 V-2 H6 V4 M-4 -4 H4 M-2 -8 V-4 M2 -8 V-4" stroke="#6FB3B8" strokeWidth="1.2" fill="none" />
              </g>

              {/* Java/Spring Droid */}
              <g transform="translate(320, 70)">
                <circle cx="0" cy="0" r="16" fill="#11141B" stroke="#6FB3B8" strokeWidth="1" />
                <path d="M-4 4 C-4 2 -2 0 0 0 C2 0 4 2 4 4 M0 -6 V-2 M-2 -4 L0 -6 L2 -4" stroke="#6FB3B8" strokeWidth="1.2" fill="none" />
              </g>
            </g>

            {/* Glassmorphic Laptop Decor */}
            <path d="M150 410 H350 L360 422 H140 Z" fill="#2E3748" />
            <rect x="170" y="422" width="160" height="6" rx="3" fill="#1B212C" />
          </svg>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:block">
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-5 h-8 rounded-full border border-slate-500/80 flex justify-center p-1.5 opacity-60"
        >
          <div className="w-1 h-2 rounded-full bg-brand" />
        </motion.div>
      </div>
    </section>
  );
}
