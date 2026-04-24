'use client';

import { motion } from 'motion/react';
import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import TechTicker from '@/components/tech-ticker';
import Stats from '@/components/stats';
import Products from '@/components/products';
import Labs from '@/components/labs';
import Process from '@/components/process';
import Services from '@/components/services';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black overflow-x-hidden">
      {/* Global Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] noise" />
      <div className="fixed inset-0 pointer-events-none z-[99] scanlines opacity-[0.05]" />
      
      <Navbar />
      <Hero />
      <TechTicker />
      <Stats />
      <Products />
      <Labs />
      <Process />
      
      {/* Tech Landscape Visualization */}
      <section className="py-24 relative overflow-hidden bg-black/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div className="relative aspect-square max-w-md mx-auto lg:mx-0">
                <div className="absolute inset-0 bg-cyan-500/10 blur-[100px] rounded-full" />
                <div className="absolute inset-4 border border-white/5 rounded-[3rem] p-8 flex flex-col justify-between glass">
                   <div className="flex justify-between items-start">
                      <div className="w-12 h-12 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center">
                         <div className="w-4 h-4 bg-cyan-400 rounded-sm shadow-[0_0_10px_#06b6d4]" />
                      </div>
                      <div className="text-[8px] font-mono text-gray-600 uppercase tracking-widest">SaaS Architecture v4.0</div>
                   </div>
                   <div className="space-y-4">
                      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: "80%" }}
                          transition={{ duration: 2 }}
                          className="h-full bg-cyan-500" 
                        />
                      </div>
                      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: "65%" }}
                          transition={{ duration: 2, delay: 0.2 }}
                          className="h-full bg-blue-500" 
                        />
                      </div>
                   </div>
                   <div className="flex justify-between text-[10px] font-mono text-gray-500">
                      <span>LOAD CAPACITY</span>
                      <span>102.4 GB/s</span>
                   </div>
                </div>
             </div>
             
             <div>
                <h2 className="text-4xl font-black mb-8 uppercase tracking-tighter">Unified <br /> <span className="text-cyan-400">Tech Landscape</span></h2>
                <p className="text-gray-500 mb-8 leading-relaxed">
                   We maintain a robust infrastructure that bridges different sectors—from finance to commerce—using a unified tech stack that ensures inter-compatibility and rapid scaling.
                </p>
                <div className="grid grid-cols-2 gap-4">
                   <div className="p-4 border border-white/5 bg-white/[0.02]">
                      <div className="text-white font-bold mb-1">Cross-Platform Sync</div>
                      <div className="text-xs text-gray-600">Unified data flow across products</div>
                   </div>
                   <div className="p-4 border border-white/5 bg-white/[0.02]">
                      <div className="text-white font-bold mb-1">AI-Ready Core</div>
                      <div className="text-xs text-gray-600">Built-in neural network connectors</div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      <Services />
      
      {/* Vision / Mission Section with Graphics */}
      <section id="about" className="py-40 relative bg-[#0a0a0a] overflow-hidden">
        <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 -z-10" />
        <div className="absolute top-1/2 left-1/4 w-px h-64 bg-cyan-500/20 -z-10" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-5 gap-20 items-center">
          <div className="lg:col-span-3 text-center lg:text-left">
            <div className="inline-block px-4 py-1 border border-white/10 bg-white/5 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 mb-12">
              The Digital Manifest
            </div>
            <h2 className="text-4xl md:text-7xl font-black mb-12 tracking-tighter leading-tight font-sans uppercase">
              &quot;Simple tools, <br className="hidden md:block" />
              built with terminal-grade precision.&quot;
            </h2>
            <p className="text-gray-500 text-xl md:text-2xl font-light tracking-wide leading-relaxed mb-16 max-w-3xl">
              DeploysTech is a software collective focused on solving the structural 
              challenges of Bangladesh. We bridge the gap between 
              complex global tools and the unique needs of local ecosystems.
            </p>
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto lg:mx-0" />
          </div>

          <div className="lg:col-span-2 relative hidden lg:block">
            <div className="w-full aspect-square border border-white/5 rounded-full flex items-center justify-center p-12">
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                 className="absolute inset-0 border border-dashed border-white/10 rounded-full"
               />
               
               {/* Scanner Line */}
               <motion.div
                 animate={{ top: ["0%", "100%", "0%"] }}
                 transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                 className="absolute left-0 right-0 h-px bg-cyan-500/50 shadow-[0_0_15px_#06b6d4] z-20 pointer-events-none"
               />
               
               <div className="relative z-10 text-center">
                  <div className="text-5xl font-black text-cyan-400 mb-2">2026</div>
                  <div className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">Future Roadmap Active</div>
               </div>
               
               <motion.div 
                 animate={{ 
                   scale: [1, 1.1, 1],
                   opacity: [0.3, 0.6, 0.3]
                 }}
                 transition={{ duration: 4, repeat: Infinity }}
                 className="absolute inset-0 bg-cyan-500/5 blur-3xl rounded-full"
               />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-40 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-refined opacity-5" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="bg-[#0a0a0a] border border-white/5 p-16 md:p-32 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-950/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2 transition-all duration-1000 group-hover:bg-cyan-900/20" />
            
            <div className="relative z-10 max-w-3xl">
              <div className="text-cyan-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-6">Partnership</div>
              <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter uppercase leading-[0.85]">
                Ready to <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Deploy</span> <br /> your vision?
              </h2>
              <p className="text-gray-500 text-xl mb-16 leading-relaxed max-w-xl font-sans">
                Partner with our engineering team to build high-performance products 
                that define market categories.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
                <a href="mailto:contact@deploystech.com" className="w-full sm:w-auto px-12 py-6 bg-cyan-500 text-black font-bold uppercase tracking-widest hover:bg-cyan-400 transition-all text-center shadow-[0_0_30px_rgba(6,182,212,0.2)]">
                  Initiate Project
                </a>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600 mb-1">Guaranteed Response</span>
                  <span className="text-sm font-mono text-gray-300">within 24 business hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
