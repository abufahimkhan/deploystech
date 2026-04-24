'use client';

import { motion } from 'motion/react';
import { Terminal, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 md:h-24">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded flex items-center justify-center p-1.5 focus:scale-95 transition-transform group-hover:scale-110">
              <div className="w-full h-full bg-[#050505] rounded-[2px]"></div>
            </div>
            <span className="text-2xl font-bold font-sans tracking-tighter uppercase">
              Deploys<span className="text-cyan-400">Tech</span>
            </span>
          </a>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-12 text-[10px] font-bold uppercase tracking-[0.25em] text-gray-400">
              <a href="#products" className="hover:text-cyan-400 transition-colors">Products</a>
              <a href="#labs" className="hover:text-cyan-400 transition-colors">Labs</a>
              <a href="#services" className="hover:text-cyan-400 transition-colors">Services</a>
              <a href="#about" className="hover:text-cyan-400 transition-colors">Vision</a>
              <a href="#contact" className="px-6 py-3 border border-gray-700 bg-transparent text-gray-100 hover:border-cyan-400 hover:text-cyan-400 transition-all">Start Project</a>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-100 p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#050505] border-b border-white/10 px-6 pt-2 pb-8 space-y-4 text-[11px] font-bold uppercase tracking-[0.2em] text-center"
        >
          <a href="#products" onClick={() => setIsOpen(false)} className="block hover:text-cyan-400 py-3 transition-colors">Products</a>
          <a href="#labs" onClick={() => setIsOpen(false)} className="block hover:text-cyan-400 py-3 transition-colors">Labs</a>
          <a href="#services" onClick={() => setIsOpen(false)} className="block hover:text-cyan-400 py-3 transition-colors">Services</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="block hover:text-cyan-400 py-3 transition-colors">Vision</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block text-cyan-400 border border-cyan-500/30 py-4 transition-colors">Start Project</a>
        </motion.div>
      )}
    </nav>
  );
}
