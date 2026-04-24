'use client';

import { motion } from 'motion/react';

const stats = [
  { label: 'Uptime', value: '99.99%', sub: 'Global Infrastructure' },
  { label: 'Transactions', value: '1.2M+', sub: 'Processed Monthly' },
  { label: 'Efficiency', value: '85%', sub: 'Average Bottleneck Reduction' },
  { label: 'Scale', value: '10x', sub: 'Client Growth Speed' },
];

export default function Stats() {
  return (
    <section className="py-24 border-y border-white/5 bg-[#030303]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.3em] mb-2">{stat.label}</div>
              <div className="text-4xl md:text-5xl font-black tracking-tighter text-white group-hover:text-cyan-400 transition-colors mb-2">
                {stat.value}
              </div>
              <div className="text-xs text-gray-600 font-medium uppercase tracking-widest">{stat.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
