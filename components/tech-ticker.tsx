'use client';

import { motion } from 'motion/react';

export default function TechTicker() {
  const techs = [
    'Next.js 15', 'TypeScript 5.0', 'GoLang 1.22', 'PostgreSQL', 'Redis',
    'AWS Cloud', 'Docker', 'Kubernetes', 'TensorFlow', 'React Native',
    'Flutter', 'GraphQL', 'Stripe API', 'NBR VAT Logic', 'Pathao API'
  ];

  return (
    <div className="py-4 bg-white/5 border-y border-white/5 overflow-hidden flex whitespace-nowrap gap-12 select-none">
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex gap-12 items-center"
      >
        {[...techs, ...techs].map((tech, i) => (
          <span 
            key={i} 
            className="text-[10px] font-mono text-gray-500 font-bold uppercase tracking-[0.4em] flex items-center gap-4"
          >
            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
            {tech}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
