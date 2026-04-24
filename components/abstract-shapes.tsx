'use client';

import { motion } from 'motion/react';

export const CircuitGraphic = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-20 overflow-hidden">
      <svg width="100%" height="100%" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path 
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          d="M0 200H200L300 300H500L600 400H800L900 500" 
          stroke="url(#grad1)" 
          strokeWidth="2" 
        />
        <motion.path 
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 1 }}
          d="M1000 800H800L700 700H500L400 600H200L100 500" 
          stroke="url(#grad2)" 
          strokeWidth="2" 
        />
        <defs>
          <linearGradient id="grad1" x1="0" y1="200" x2="900" y2="500" gradientUnits="userSpaceOnUse">
            <stop stopColor="#06b6d4" />
            <stop offset="1" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="grad2" x1="1000" y1="800" x2="100" y2="500" gradientUnits="userSpaceOnUse">
            <stop stopColor="#9333ea" />
            <stop offset="1" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export const FloatingGraphic = ({ className, style }: { className?: string; style?: React.CSSProperties }) => {
  return (
    <motion.div 
      style={style}
      animate={{ 
        y: [0, -20, 0],
        rotate: [0, 5, 0]
      }}
      transition={{ 
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className={className}
    >
      <div className="w-32 h-32 border border-white/5 bg-white/[0.02] backdrop-blur-xl rounded-2xl rotate-45 flex items-center justify-center overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-cyan-500/10 to-transparent p-4">
           <div className="w-full h-px bg-white/10 mt-4" />
           <div className="w-full h-px bg-white/10 mt-4 ml-4" />
           <div className="w-full h-px bg-white/10 mt-4" />
        </div>
      </div>
    </motion.div>
  );
};
