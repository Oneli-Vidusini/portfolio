import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaBoxes, FaCalendarAlt, FaUtensils, FaWallet, FaBed, FaShoppingCart, FaHotel } from 'react-icons/fa';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Web', 'Spring Boot', 'MERN', 'Mobile'];

  const projectsData = [
    {
      id: 1,
      title: 'Zen Tea Management System',
      description: 'A supply chain and production management system built for regional tea estates, tracking harvest, processing, and distribution cycles.',
      icon: <FaBoxes className="text-xl" />,
      category: ['Web', 'MERN'],
      tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
      features: ['Real-time inventory levels', 'Harvest batch logging trackers', 'Manager vs. Staff auth layers'],
      github: 'https://github.com/Oneli-Vidusini/zen-tea-management-system',
      demo: '#',
      gradient: 'from-emerald-500/20 to-teal-500/10'
    },
    {
      id: 2,
      title: 'Hotel Management System',
      description: 'A comprehensive operations engine managing booking reserves, room availability matrices, guest ledgers, and billing summaries.',
      icon: <FaHotel className="text-xl" />,
      category: ['Web', 'Spring Boot  '],
      tech: ['Java', 'Spring Boot', 'MySQL','React', 'Bootstrap'],
      features: ['Dynamic room booking grids', 'Client detail database ledgers', 'Instant invoice generation'],
      github: 'https://github.com/Oneli-Vidusini/hotel-management-system',
      demo: '#',
      status: 'Coming Soon',
      gradient: 'from-cyan-500/20 to-blue-500/10'
    },
    {
      id: 3,
      title: 'Event Planning System',
      description: 'A community event coordinator app where users can create conferences, purchase RSVP tickets, and check in via modern panels.',
      icon: <FaCalendarAlt className="text-xl" />,
      category: ['Web', 'MERN'],
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      features: ['Ticket reservation queues', 'RSVP email notification integrations', 'Real-time dashboard analytics'],
      github: 'https://github.com/Oneli-Vidusini/event-planning-system',
      demo: '#',
      gradient: 'from-purple-500/20 to-pink-500/10'
    },
    {
      id: 4,
      title: 'Pocket Recipes',
      description: 'A native mobile cooking notebook and meal planner providing offline recipes, grocery logs, and smart cook timers.',
      icon: <FaUtensils className="text-xl" />,
      category: ['Mobile'],
      tech: ['Kotlin', 'Android Studio', 'Room DB', 'Coroutines'],
      features: ['Offline Room Database caching', 'Calorie & cooking time metrics', 'Step-by-step cook alarms'],
      github: 'https://github.com/Oneli-Vidusini/pocket-recipes',
      demo: '#',
      gradient: 'from-orange-500/20 to-amber-500/10'
    },
    {
      id: 5,
      title: 'Personal Finance Tracker',
      description: 'A cash tracker showcasing budgets and expenditures using interactive datasets and recurring fee alerts.',
      icon: <FaWallet className="text-xl" />,
      category: ['Web', 'MERN'],
      tech: ['React', 'Node.js', 'MongoDB', 'ChartJS', 'Tailwind CSS'],
      features: ['Expense allocation charts', 'Visual limit progress meters', 'Recurring payment schedules'],
      github: 'https://github.com/Oneli-Vidusini/personal-finance-tracker',
      demo: '#',
      gradient: 'from-indigo-500/20 to-indigo-700/10'
    },
    {
      id: 6,
      title: 'Sleep Oasis',
      description: 'A sleep diagnostic logging tool helping users schedule alarms, log sleep intervals, and play relaxing white-noise playlists.',
      icon: <FaBed className="text-xl" />,
      category: ['Mobile'],
      tech: ['Kotlin', 'Android Studio', 'Room DB', 'Jetpack Compose'],
      features: ['Ambient background audio players', 'Sleep score analytic generators', 'Optimized alarm clocks'],
      github: 'https://github.com/Oneli-Vidusini/sleep-oasis',
      demo: '#',
      gradient: 'from-sky-700/25 to-sky-900/10'
    },
    {
      id: 7,
      title: 'Nelix E-commerce',
      description: 'A complete shopper framework incorporating product filter queues, cart buffers, customer panels, and payment integrations.',
      icon: <FaShoppingCart className="text-xl" />,
      category: ['Web', 'MERN'],
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
      features: ['Secure Stripe billing gateways', 'Shopping cart state persistence', 'Inventory management dashboards'],
      github: 'https://github.com/Oneli-Vidusini/nelix-ecommerce',
      demo: '#',
      status: 'Coming Soon',
      gradient: 'from-brand/15 to-brand-hover/5'
    }
  ];

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === 'All') return true;
    return project.category.includes(activeFilter);
  });

  return (
    <section id="projects" className="py-20 bg-bg-dark/50 relative border-t border-border-dark/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-extrabold font-title text-gray-100"
          >
            Featured <span className="text-brand">Projects</span>
          </motion.h2>
          <div className="h-1 w-12 bg-brand mx-auto mt-4 rounded-full shadow-[0_0_8px_#6FB3B8]" />
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeFilter === filter
                  ? 'bg-brand text-bg-dark font-bold shadow-lg shadow-brand/10'
                  : 'bg-bg-card-dark border border-border-dark hover:border-brand/40 text-gray-300'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="glass-card rounded-2xl overflow-hidden flex flex-col h-full relative"
              >
                {/* SVG Visual Header replacing missing screenshots */}
                <div className={`h-48 bg-gradient-to-br ${project.gradient} border-b border-border-dark/45 flex items-center justify-center relative overflow-hidden`}>
                  {/* Subtle decorative grid */}
                  <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
                  
                  {/* Floating abstract code graphics */}
                  <div className="relative text-brand drop-shadow-lg flex flex-col items-center gap-3">
                    <div className="w-16 h-16 rounded-2xl bg-bg-dark/85 border border-brand/25 flex items-center justify-center shadow-lg">
                      {project.icon}
                    </div>
                    <span className="font-title font-bold text-xs uppercase tracking-widest bg-brand/10 border border-brand/30 px-3 py-1 rounded-full text-brand">
                      {project.category.join(' / ')}
                    </span>
                  </div>

                  {project.status && (
                    <div className="absolute top-4 right-4 bg-brand-dark/90 border border-brand/40 text-white font-semibold text-[10px] tracking-wider uppercase px-2 py-0.5 rounded shadow">
                      {project.status}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold font-title text-gray-100 mb-2 truncate">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow font-sans">
                    {project.description}
                  </p>

                  {/* Core Features */}
                  <div className="mb-5 space-y-1.5">
                    <span className="text-xs font-semibold text-gray-300 uppercase tracking-widest">Key Features:</span>
                    <ul className="list-disc list-inside text-xs text-gray-400 space-y-1">
                      {project.features.map((feat, idx) => (
                        <li key={idx} className="truncate">{feat}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.75 rounded-md text-[11px] font-medium bg-border-dark/65 border border-border-dark text-gray-300 font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Footer Anchors */}
                  <div className="flex justify-between items-center pt-4 border-t border-border-dark/45 mt-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold text-gray-400 hover:text-brand transition-colors cursor-pointer"
                    >
                      <FaGithub className="text-sm" />
                      Code Repository
                    </a>

                    {/* {project.status !== 'Coming Soon' && (
                      <a
                        href={project.demo}
                        className="flex items-center gap-1 text-xs font-semibold text-brand hover:text-brand-hover tracking-wide transition-colors cursor-pointer"
                      >
                        Live Demo
                        <FaExternalLinkAlt className="text-[10px]" />
                      </a>
                    )} */}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
      </div>
    </section>
  );
}
