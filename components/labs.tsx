'use client';

import { motion } from 'motion/react';
import { Beaker, FlaskConical, Binary, Atom } from 'lucide-react';

const ventures = [
  { name: 'NeuralBridge', type: 'NLP ENGINE', status: 'R&D', tech: 'PYTHON/PYTORCH' },
  { name: 'QuantumLedger', type: 'DISTRIBUTED SYSTEMS', status: 'BETA', tech: 'GOLANG/WASM' },
  { name: 'VisionX', type: 'COMPUTER VISION', status: 'ALPHA', tech: 'C++/TENSORRT' },
];

export default function Labs() {
  return (
    <section id="labs" className="py-32 relative bg-[#050505] overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-px bg-gradient-to-l from-transparent via-cyan-500/30 to-transparent" />
      
      {/* Animated Stream Lines */}
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: "-100%" }}
            animate={{ x: "200%" }}
            transition={{ 
              duration: 10 + i * 2, 
              repeat: Infinity, 
              ease: "linear",
              delay: i * 3
            }}
            className="absolute h-px w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent"
            style={{ top: `${20 + i * 15}%` }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          <div className="lg:w-1/3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
              <FlaskConical className="h-3 w-3" />
              Experimental Division
            </div>
            <h2 className="text-5xl font-black mb-8 tracking-tighter uppercase leading-[0.9]">
              Deploys<span className="text-purple-500">Labs</span>
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-10">
              Where we push the boundaries of potential. High-risk, high-reward engineering projects that explore the next frontier of human-computer interaction.
            </p>
            <button className="text-[10px] font-bold uppercase tracking-widest text-white border-b border-white hover:text-purple-400 hover:border-purple-400 transition-all pb-1">
              View Research Papers
            </button>
          </div>

          <div className="lg:w-2/3 w-full grid grid-cols-1 md:grid-cols-3 gap-6">
            {ventures.map((venture, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="p-6 bg-white/[0.02] border border-white/5 relative group cursor-crosshair pb-20"
              >
                <div className="absolute top-0 left-0 w-1 h-0 bg-purple-500 group-hover:h-full transition-all duration-700" />
                <div className="flex items-center justify-between mb-8">
                  <div className="p-2 bg-white/5 rounded-lg">
                    <Binary className="h-4 w-4 text-purple-400" />
                  </div>
                  <span className="text-[8px] font-mono p-1 bg-white/5 border border-white/5 text-gray-600 uppercase">{venture.status}</span>
                </div>
                <h3 className="text-lg font-bold mb-2 tracking-tight group-hover:text-purple-300 transition-colors">{venture.name}</h3>
                <div className="text-[8px] font-mono text-gray-500 uppercase tracking-widest mb-4">{venture.type}</div>
                
                <div className="absolute bottom-6 left-6 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-pulse" />
                  <span className="text-[8px] font-mono text-gray-700">{venture.tech}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Decorative Data Visualization */}
        <div className="mt-32 h-32 w-full relative group">
          <div className="absolute inset-0 flex items-end gap-1 px-4 overflow-hidden">
            {Array.from({ length: 60 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ height: 10 }}
                animate={{ 
                  height: [10, Math.random() * 80 + 20, 10],
                }}
                transition={{ 
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-1 bg-white/5 group-hover:bg-purple-500/20 transition-colors"
              />
            ))}
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="text-[10px] font-mono text-gray-700 uppercase tracking-[1em] opacity-40 group-hover:opacity-100 transition-opacity">Realtime R&D Neural Traffic</div>
          </div>
        </div>
      </div>
    </section>
  );
}
