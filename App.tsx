
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Preload } from '@react-three/drei';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ContentSection from './components/ContentSection';
import Scene from './components/Experience';
import { SectionProps } from './types';

const SECTIONS: Omit<SectionProps, 'index'>[] = [
  {
    title: "AI SEARCH",
    subtitle: "Beyond Keywords",
    description: "Experience search that understands intent, context, and nuance. Mirar redefines how you interact with information using neural-first indexing.",
    animationType: 'split'
  },
  {
    title: "CONTEXTUAL CLARITY",
    subtitle: "Deep Understanding",
    description: "Don't just find results; find answers. Our engine maps semantic relationships to provide the most relevant data in a single glance.",
    animationType: 'parallax'
  },
  {
    title: "PRIVACY FIRST",
    subtitle: "Your Data, Secured",
    description: "Search without being followed. Mirar uses decentralized protocols and zero-knowledge encryption to ensure your queries remain your business.",
    animationType: 'glass'
  },
  {
    title: "ZERO LATENCY",
    subtitle: "Real-time Processing",
    description: "Speed is a feature. Mirar delivers precise insights in milliseconds, powered by a globally distributed edge infrastructure.",
    animationType: 'marquee'
  },
  {
    title: "DEEP INSIGHTS",
    subtitle: "Actionable Intelligence",
    description: "Transform complex data landscapes into clear visual maps. Uncover hidden patterns and correlations with our analytical layer.",
    animationType: 'parallax'
  },
  {
    title: "MULTIMODAL AI",
    subtitle: "Text, Voice, Vision",
    description: "Mirar processes information across all formats. Whether it's code, documents, or media, we index everything with precision.",
    animationType: 'zoom'
  },
  {
    title: "ADAPTIVE INTERFACE",
    subtitle: "Personal Discovery",
    description: "An AI search companion that learns your workflow. Mirar curates your information environment to match your specific research needs.",
    animationType: 'glass'
  },
  {
    title: "KNOWLEDGE GRAPH",
    subtitle: "Infinite Connections",
    description: "Explore the web as a connected ecosystem. Our knowledge graph visualizes how information flows across the digital world.",
    animationType: 'stat'
  },
  {
    title: "ENTERPRISE READY",
    subtitle: "Scalable Solutions",
    description: "Integrate Mirar's search intelligence into your own infrastructure. Built for high-volume, secure corporate environments.",
    animationType: 'split'
  },
  {
    title: "THE FUTURE",
    subtitle: "Join the Evolution",
    description: "Stop searching. Start finding. Join the early access and experience the next generation of human-AI collaboration.",
    animationType: 'glass'
  }
];

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="relative bg-black min-h-screen text-white selection:bg-cyan-500 selection:text-white">
      {/* 3D Background Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Canvas 
          dpr={[1, 2]} 
          camera={{ position: [0, 0, 5], fov: 45 }}
          gl={{ antialias: true, alpha: true, stencil: false, depth: true }}
        >
          <Suspense fallback={null}>
            <Scene />
            <Preload all />
          </Suspense>
        </Canvas>
      </div>

      {/* Noise Overlay */}
      <div className="fixed inset-0 z-5 pointer-events-none opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* Content Layer */}
      <div className="relative z-10">
        <Navbar />
        
        <Hero />

        <div className="space-y-0">
          {SECTIONS.map((section, idx) => (
            <ContentSection 
              key={idx}
              index={idx}
              {...section}
            />
          ))}
        </div>

        {/* Footer */}
        <footer className="py-48 px-8 border-t border-white/5 flex flex-col items-center gap-16 bg-black">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center gap-4 text-center"
          >
            <div className="font-orbitron font-black text-6xl md:text-[12rem] tracking-tighter text-white leading-none">
              MIRAR<span className="text-cyan-500">.</span>
            </div>
            <p className="text-white/20 uppercase tracking-[2em] text-[12px] md:text-[14px]">The Intelligent Search Engine</p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-16 md:gap-40 text-center mt-12">
            {[
              { title: "Product", links: ["Intelligence", "Insights", "Privacy"] },
              { title: "Company", links: ["Manifesto", "Careers", "News"] },
              { title: "Resources", links: ["Documentation", "SDKs", "Community"] },
              { title: "Legal", links: ["Privacy Policy", "Terms", "Security"] }
            ].map((col) => (
              <div key={col.title} className="space-y-6">
                <h4 className="text-[10px] uppercase tracking-[0.5em] text-cyan-500 font-black">{col.title}</h4>
                <ul className="text-xs space-y-4 text-white/30">
                  {col.links.map(l => <li key={l}><a href="#" className="hover:text-white transition-colors uppercase tracking-widest">{l}</a></li>)}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="pt-24 flex flex-col items-center gap-6 w-full border-t border-white/5 opacity-50">
             <p className="text-[10px] uppercase tracking-[0.8em] text-white/20 font-bold">
              MIRAR AI // REINVENTING SEARCH &copy; 2025
            </p>
          </div>
        </footer>
      </div>

      {/* Progress Line */}
      <div className="fixed top-0 left-0 w-full h-[2px] bg-white/5 z-50">
         <motion.div 
           className="h-full bg-cyan-500 origin-left"
           style={{ scaleX }}
         />
      </div>

      {/* HUD: Scroll Meter */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-end gap-10">
         <div className="flex flex-col items-end gap-2">
            <span className="text-[8px] uppercase tracking-widest text-cyan-500 font-black">Scroll</span>
            <div className="h-40 w-[1px] bg-white/10 relative">
               <motion.div 
                 style={{ height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
                 className="absolute top-0 w-full bg-cyan-500"
               />
            </div>
         </div>
      </div>
    </main>
  );
};

export default App;
