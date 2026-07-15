import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'certifications', label: 'Certificates' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0.1,
    });

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add('light-mode');
    } else {
      document.documentElement.classList.remove('light-mode');
    }
  };

  const handleNavClick = (id) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const offsetTop = el.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-45 transition-all duration-300 ${
      scrolled 
        ? 'py-3 bg-bg-dark/85 backdrop-blur-md border-b border-border-dark/60 shadow-lg' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <div 
          onClick={() => handleNavClick('home')} 
          className="text-xl md:text-2xl font-bold cursor-pointer font-title flex items-center gap-1 group"
        >
          <span className="text-brand transition-transform duration-300 group-hover:scale-110">&lt;</span>
          <span className="text-gray-100 group-hover:text-brand transition-colors duration-300">Oneli</span>
          <span className="text-brand font-light">.dev</span>
          <span className="text-brand transition-transform duration-300 group-hover:scale-110">/&gt;</span>
        </div>

        {/* Desktop Nav Items */}
        <div className="hidden lg:flex items-center space-x-7">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`nav-link text-sm font-semibold transition-colors duration-300 cursor-pointer ${
                activeSection === item.id 
                  ? 'text-brand active font-bold' 
                  : 'text-gray-300 hover:text-brand'
              }`}
            >
              {item.label}
            </button>
          ))}

          {/* Theme Toggle */}
          <button 
            onClick={toggleDarkMode}
            className="p-2 ml-2 rounded-full border border-border-dark bg-bg-card-dark/60 text-gray-300 hover:text-brand hover:border-brand/40 duration-300 cursor-pointer text-base flex items-center justify-center"
            title="Toggle theme"
          >
            {isDarkMode ? <FiSun /> : <FiMoon />}
          </button>
        </div>

        {/* Mobile Toggle Buttons */}
        <div className="lg:hidden flex items-center gap-3">
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full border border-border-dark bg-bg-card-dark/60 text-gray-300 hover:text-brand duration-300 cursor-pointer"
          >
            {isDarkMode ? <FiSun /> : <FiMoon />}
          </button>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-brand transition-colors text-2xl cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-bg-dark/95 border-b border-border-dark/60 backdrop-blur-lg overflow-hidden absolute top-full left-0 w-full shadow-2xl"
          >
            <div className="px-6 py-6 flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left text-base font-semibold py-1 transition-colors duration-300 cursor-pointer ${
                    activeSection === item.id 
                      ? 'text-brand font-bold border-l-2 border-brand pl-3 text-brand' 
                      : 'text-gray-300 hover:text-brand pl-3 border-l-2 border-transparent'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
