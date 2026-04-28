'use client';

import { motion, AnimatePresence } from 'motion/react';
import { Database, ShieldCheck, Zap, Code, Figma, Smartphone, Globe, Monitor, X } from 'lucide-react';
import { useState } from 'react';

const services = [
  {
    id: 'saas',
    title: 'Custom SaaS Architecture',
    description: 'We design and build scalable, multi-tenant SaaS platforms tailored for high-growth markets.',
    icon: Database,
    details: 'Our SaaS architecture focuses on extreme scalability, multi-tenancy isolation, and robust security. We use distributed systems to ensure your platform can handle millions of concurrent users with zero downtime.'
  },
  {
    id: 'mobile',
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile solutions designed for performance and global reach.',
    icon: Smartphone,
    details: 'We build high-performance mobile applications using React Native and Flutter, ensuring a native feel with a single codebase. Our apps are optimized for both iOS and Android ecosystems.'
  },
  {
    id: 'webapp',
    title: 'Web Software Development',
    description: 'Bespoke web applications built with the latest frameworks for speed and reliability.',
    icon: Globe,
    details: 'From enterprise portals to complex dashboards, we leverage Next.js and TypeScript to build fast, secure, and SEO-friendly web applications that drive business value.'
  },
  {
    id: 'desktop',
    title: 'Desktop App Development',
    description: 'Powerful desktop solutions for specialized industrial and professional workflows.',
    icon: Monitor,
    details: 'We develop robust desktop applications using Electron and Rust, providing deep hardware integration and offline capabilities for specialized professional tools.'
  },
  {
    id: 'design',
    title: 'UI/UX Design Systems',
    description: 'Futuristic, high-conversion interfaces designed in Figma and brought to life with precision.',
    icon: Figma,
    details: 'Design is about more than aesthetics. We create comprehensive design systems that ensure consistency across all touchpoints, focusing on user experience and conversion optimization.'
  },
  {
    id: 'security',
    title: 'Security & Compliance',
    description: 'Enterprise-grade security protocols and NBR compliance integration for fintech products.',
    icon: ShieldCheck,
    details: 'Security is at our core. We implement Zero-Trust architectures, end-to-end encryption, and ensure full compliance with NBR and global fintech standards.'
  }
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <section id="services" className="py-16 md:py-32 bg-black border-t border-white/5 relative">
      <div className="absolute inset-0 bg-grid-refined opacity-20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="mb-12 md:mb-20">
          <div className="text-purple-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Service Capabilities</div>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-6 uppercase">
            Beyond <span className="text-white/30 italic">Standards</span>
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg">
            We engineer high-performance digital solutions across all platforms. Click any card to see technical details.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 overflow-hidden">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedService(service)}
              className="group p-8 md:p-12 bg-[#050505] hover:bg-white/[0.02] transition-all cursor-pointer relative"
            >
              <div className="absolute top-4 right-4 text-[8px] font-mono text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity">CLICK FOR DETAILS</div>
              <div className="mb-8 text-gray-500 group-hover:text-purple-400 transition-colors group-hover:scale-110 origin-left duration-500">
                <service.icon className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-sans">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="max-w-2xl w-full bg-[#0a0a0a] border border-white/10 p-6 sm:p-12 relative overflow-hidden my-auto"
            >
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[100px] -translate-y-1/2 translate-x-1/2" />
              
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors"
                id="close-service-modal"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="relative z-10">
                <div className="inline-flex p-4 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 mb-8">
                  <selectedService.icon className="h-10 w-10" />
                </div>
                <h3 className="text-3xl md:text-4xl font-black uppercase mb-6 tracking-tighter">{selectedService.title}</h3>
                <p className="text-gray-400 text-xl leading-relaxed mb-8 font-sans">
                  {selectedService.details}
                </p>
                <div className="flex gap-4">
                  <button className="px-8 py-4 bg-purple-600 text-white font-bold uppercase tracking-widest text-sm hover:bg-purple-500 transition-all">
                    Inquire Specification
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
