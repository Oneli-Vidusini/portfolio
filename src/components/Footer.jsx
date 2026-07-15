import React from 'react';
import { FaHeart } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="py-8 bg-bg-dark border-t border-border-dark/30 text-center relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-gray-500">
        <p className="font-semibold">
          © 2026 Oneli Vidusini. All rights reserved.
        </p>
        <p className="flex items-center justify-center gap-1.5 font-sans">
          Built with 
          <FaHeart className="text-brand animate-pulse text-[10px]" />
          and 
          <span className="text-brand font-semibold hover:glow-text transition-all">React</span>
        </p>
      </div>
    </footer>
  );
}
