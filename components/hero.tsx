'use client';

import { motion } from 'motion/react';
import { ArrowRight, Code2, Cpu, Globe } from 'lucide-react';
import { CircuitGraphic, FloatingGraphic } from './abstract-shapes';

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
      <CircuitGraphic />
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 bg-grid-refined grid-mask opacity-40" />
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-cyan-950/20 rounded-full blur-[120px] animate-pulse-soft" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-blue-950/20 rounded-full blur-[100px] animate-pulse-soft" />
      
      <FloatingGraphic className="absolute top-1/4 left-10 hidden lg:block animate-float" />
      <FloatingGraphic className="absolute bottom-1/4 right-[25%] hidden lg:block opacity-50 scale-75 animate-float" style={{ animationDelay: '2s' }} />
      
      {/* Background Decorative Text */}
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 text-[20rem] font-black text-white/[0.02] select-none pointer-events-none uppercase tracking-tighter">
        DEPLOY
      </div>
      
      {/* Animated Orbit Element */}
      <div className="absolute right-[5%] top-[45%] hidden lg:block">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="relative w-[500px] h-[500px] border border-white/5 rounded-full flex items-center justify-center p-12"
        >
          <div className="absolute w-2 h-2 bg-cyan-400 rounded-full top-0 left-1/2 -translate-x-1/2 shadow-[0_0_15px_#06b6d4] z-10" />
          <div className="absolute w-full h-full border border-dashed border-white/5 rounded-full animate-reverse-spin" />
          
          <div className="w-full h-full border border-white/5 rounded-full flex items-center justify-center p-12">
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="relative w-full h-full border border-white/10 rounded-full"
            >
              <div className="absolute w-2 h-2 bg-purple-500 rounded-full bottom-0 left-1/2 -translate-x-1/2 shadow-[0_0_10px_#9333ea]" />
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >
          <motion.div variants={item} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-[10px] font-bold mb-8 uppercase tracking-[0.2em]">
            <span className="flex h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
            Available for New Partnerships
          </motion.div>
          
          <motion.h1 variants={item} className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9] uppercase">
            Engineering the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              Next Generation
            </span><br />
            of BD SaaS.
          </motion.h1>
          
          <motion.p variants={item} className="max-w-2xl text-gray-400 text-lg md:text-xl mb-12 font-sans leading-relaxed">
            We build high-performance, NBR-compliant, and localized software ecosystems 
            tailored for the unique challenges of the Bangladesh market.
          </motion.p>

          <motion.div variants={item} className="flex flex-col sm:flex-row items-center gap-4">
            <button className="w-full sm:w-auto px-10 py-5 bg-cyan-500 text-black font-bold uppercase tracking-widest hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] flex items-center justify-center gap-3">
              Start Project
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="w-full sm:w-auto px-10 py-5 border border-gray-700 text-gray-100 font-bold uppercase tracking-widest hover:border-gray-500 transition-all text-center">
              View Portfolio
            </button>
          </motion.div>
        </motion.div>

        {/* Tech Stack Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 md:mt-24 border-t border-white/5 pt-8 md:pt-12"
        >
          <p className="text-[10px] text-gray-500 uppercase tracking-[0.3em] mb-6">Core Development Stack</p>
          <div className="flex flex-wrap gap-x-12 gap-y-6 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
            {['Next.js', 'TypeScript', 'PostgreSQL', 'GoLang', 'AWS', 'TensorFlow'].map((tech) => (
              <span key={tech} className="text-sm font-mono tracking-tighter font-medium">{tech}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
