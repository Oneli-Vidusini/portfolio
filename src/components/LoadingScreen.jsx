import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [phaseText, setPhaseText] = useState('Initializing Portfolio...');

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => onComplete(), 400); 
          return 100;
        }
        
        const increment = Math.floor(Math.random() * 12) + 5;
        const next = Math.min(prev + increment, 100);
        
        if (next < 35) {
          setPhaseText('Initializing Portfolio...');
        } else if (next < 70) {
          setPhaseText('Loading Full-Stack Modules...');
        } else {
          setPhaseText('Drawing Developer Workspace...');
        }
        
        return next;
      });
    }, 110);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 bg-[#080a0e] z-50 flex flex-col items-center justify-center pointer-events-auto"
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <div className="text-center relative max-w-sm px-6">
        
        {/* Animated Bracket Logo */}
        <motion.div 
          animate={{ scale: [0.95, 1.05, 0.95] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-3xl font-extrabold font-title text-brand mb-8 flex justify-center gap-1 glow-text"
        >
          <span>&lt;</span>Oneli<span>/&gt;</span>
        </motion.div>

        {/* Percentage text */}
        <div className="text-5xl font-extrabold font-title text-gray-100 mb-2 font-mono">
          {progress}%
        </div>

        {/* Phase subtitle */}
        <div className="text-xs text-gray-400 font-semibold uppercase tracking-widest mb-6 h-4">
          {phaseText}
        </div>

        {/* Bar */}
        <div className="h-1 w-48 bg-gray-800 rounded-full overflow-hidden mx-auto">
          <div 
            className="h-full bg-brand shadow-[0_0_8px_#6FB3B8] transition-all duration-150" 
            style={{ width: `${progress}%` }}
          />
        </div>

      </div>
    </motion.div>
  );
}
