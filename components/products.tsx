'use client';

import { motion } from 'motion/react';
import { ShoppingBag, Calculator, Package, GraduationCap, HeartPulse, ChevronRight } from 'lucide-react';

const products = [
  {
    title: 'OrderFlow BD',
    tagline: 'F-commerce Automation',
    description: 'Manages Facebook orders, Messenger auto-replies, and seamless courier booking (Pathao/RedX).',
    icon: ShoppingBag,
    borderColor: 'border-cyan-500',
    hoverBg: 'hover:bg-cyan-500/5',
    why: 'Thousands of small businesses still rely on manual Excel or paper-based tracking—OrderFlow is their perfect automation ally.'
  },
  {
    title: 'HisabCloud',
    tagline: 'NBR-Compliant Accounting',
    description: 'VAT and tax-ready reports tailored for Bangladesh SMEs. Simple income, expense, and local tax tracking.',
    icon: Calculator,
    borderColor: 'border-blue-500',
    hoverBg: 'hover:bg-blue-500/5',
    why: 'Local business demands simple tools, not complex foreign software.'
  },
  {
    title: 'MiniERP Pro BD',
    tagline: 'Lightweight Retail ERP',
    description: 'Perfect for retail, pharmacy, and small shops. Includes expiry tracking, profit analytics, and full POS integration.',
    icon: Package,
    borderColor: 'border-purple-500',
    hoverBg: 'hover:bg-purple-500/5',
    why: 'The local SME market is massive and digital-first adoption is rising fast.'
  },
  {
    title: 'EduManageX',
    tagline: 'Education Management System',
    description: 'Student portals, online exams, fee management, and parent apps for schools and coaching centers.',
    icon: GraduationCap,
    borderColor: 'border-gray-500',
    hoverBg: 'hover:bg-gray-500/5',
    why: 'Transformation of the education sector to digital is accelerating.'
  },
  {
    title: 'CareSync Health',
    tagline: 'Healthcare Management',
    description: 'Clinic platform with EHR, appointment booking, and secure online consultations.',
    icon: HeartPulse,
    borderColor: 'border-red-500',
    hoverBg: 'hover:bg-red-500/5',
    why: 'Digital health infrastructure is the next frontier for Bangladesh.'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1 }
};

export default function Products() {
  return (
    <section id="products" className="py-16 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-refined opacity-[0.02] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-20 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="text-cyan-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Software Fleet</div>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-6 uppercase">
              Flagship <span className="text-white/40">Solutions</span>
            </h2>
            <p className="text-gray-400 text-lg">
              We engineer specialized tools designed to solve the structural challenges of the BD economy.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-[10px] font-bold text-gray-500 uppercase tracking-widest bg-white/5 px-4 py-2 border border-white/10"
          >
            [05] Units Deployed
          </motion.div>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 overflow-hidden"
        >
          {products.map((product, i) => (
            <motion.div
              key={i}
              variants={item}
              className={`group relative p-6 md:p-12 bg-[#0a0a0a] border-l-4 ${product.borderColor} ${product.hoverBg} transition-all cursor-pointer overflow-hidden`}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity duration-700 noise" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6 md:mb-12">
                  <product.icon className="h-10 w-10 text-gray-500 group-hover:text-cyan-400 transition-all duration-500" />
                  <div className="flex items-center gap-2 text-[8px] font-mono text-gray-700 uppercase tracking-widest group-hover:text-cyan-400/50 transition-colors">
                    Deployment Active <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
                
                <h3 className="text-3xl font-bold mb-2 uppercase tracking-tighter group-hover:text-glow transition-all duration-500">{product.title}</h3>
                <p className="text-cyan-400/60 text-[10px] font-bold uppercase tracking-widest mb-6">{product.tagline}</p>
                
                <p className="text-gray-500 text-sm leading-relaxed mb-10 max-w-sm group-hover:text-gray-400 transition-colors">
                  {product.description}
                </p>

                <div className="inline-block p-4 bg-white/[0.02] border border-white/5 font-sans italic text-gray-400 text-xs leading-relaxed group-hover:bg-white/[0.04] transition-colors">
                  &ldquo;{product.why}&rdquo;
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Partnership Pitch Card */}
          <motion.div 
            variants={item}
            className="p-6 md:p-12 bg-[#050505] flex flex-col items-center justify-center text-center border-dashed border-2 border-white/5 hover:border-cyan-500/30 transition-colors cursor-pointer group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest mb-4 z-10">Have an Idea?</p>
            <p className="text-xl font-bold text-gray-300 underline decoration-cyan-500 underline-offset-8 group-hover:text-cyan-400 transition-colors z-10 px-8">
              Pitch your venture to DeploysLabs
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
