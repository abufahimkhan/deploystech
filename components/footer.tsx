'use client';

import { Terminal, Github, Twitter, Linkedin, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-16 md:py-24 border-t border-gray-900 bg-[#050505] overflow-hidden">
      <div className="absolute inset-0 bg-grid-refined opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-16 mb-12 md:mb-24">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-8 group">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded flex items-center justify-center p-1.5 transition-transform group-hover:scale-110">
                <div className="w-full h-full bg-[#050505] rounded-[2px]"></div>
              </div>
              <span className="text-2xl font-bold font-sans tracking-tighter uppercase whitespace-nowrap">
                Deploys<span className="text-cyan-400">Tech</span>
              </span>
            </a>
            <p className="max-w-md text-gray-500 font-sans leading-relaxed text-lg">
              Engineering high-performance, NBR-compliant software ecosystems 
              tailored for the unique digital fabric of Bangladesh.
            </p>
          </div>
          
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-400 mb-8">Company</h4>
            <ul className="space-y-4 text-sm text-gray-500 font-bold uppercase tracking-widest">
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">Vision</a></li>
              <li><a href="#products" className="hover:text-cyan-400 transition-colors">Ventures</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Capabilities</a></li>
              <li><a href="https://portfahimkhshanto.vercel.app/" className="hover:text-cyan-400 transition-colors flex items-center gap-2">Founder <ExternalLink className="h-3 w-3" /></a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-400 mb-8">Social</h4>
            <div className="flex gap-4">
              <a href="#" className="p-4 bg-white/5 border border-white/5 hover:border-cyan-400 hover:text-cyan-400 transition-all">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="p-4 bg-white/5 border border-white/5 hover:border-cyan-400 hover:text-cyan-400 transition-all">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-4 bg-white/5 border border-white/5 hover:border-cyan-400 hover:text-cyan-400 transition-all">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold text-gray-600 uppercase tracking-[0.3em]">
          <div className="flex flex-col md:flex-row gap-x-12 gap-y-4 text-center md:text-left">
            <span>HQ: DHAKA, BANGLADESH</span>
            <span>LAT: 23.8103° N, LONG: 90.4125° E</span>
          </div>
          <div className="flex items-center gap-8">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Systems Online
            </span>
            <span>© 2026 DeploysTech Global</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
