'use client';

import { motion } from 'motion/react';

const steps = [
  { title: 'Discovery', description: 'Deep dive into local market mechanics and bottleneck analysis.', code: 'INIT_SCAN' },
  { title: 'Architecture', description: 'Designing modular, scalable systems with NBR-compliant logic.', code: 'SYS_ARCH' },
  { title: 'Engineering', description: 'High-velocity development using terminal-grade precision.', code: 'DEPLOY_BUILD' },
  { title: 'Integration', description: 'Seamless connection with local couriers, gateways, and AI.', code: 'SYNC_FLEET' },
];

export default function Process() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-refined opacity-5" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div>
            <div className="text-cyan-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Internal Workflow</div>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9]">
              How we <br /> <span className="text-white/40 italic">Construct</span>
            </h2>
          </div>
          <p className="text-gray-500 text-lg max-w-md">
            Our process is iterative, data-driven, and optimized for the speed of modern digital commerce.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector Line for Desktop */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 hidden lg:block -z-10" />
          
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative group p-8 bg-[#0a0a0a] border border-white/5 hover:border-cyan-500/30 transition-all"
            >
              <div className="absolute top-4 right-4 text-[8px] font-mono text-gray-700 uppercase tracking-widest">{step.code}</div>
              <div className="absolute -top-3 -left-3 w-6 h-6 border border-white/10 bg-black flex items-center justify-center text-[10px] font-bold text-gray-600 group-hover:text-cyan-400 transition-colors">
                {i + 1}
              </div>
              <div className="text-4xl font-black text-white/5 mb-6 group-hover:text-cyan-400/10 transition-colors">STEP</div>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-tight text-white">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
              
              <div className="mt-8 h-1 w-0 bg-cyan-500 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
