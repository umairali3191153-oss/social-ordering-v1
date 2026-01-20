
import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Preload } from '@react-three/drei';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ContentSection from './components/ContentSection';
import Scene from './components/Experience';
import NavbarV2 from './components/NavbarV2';
import HeroV2 from './components/HeroV2';
import ContentSectionV2 from './components/ContentSectionV2';
import SceneV2 from './components/ExperienceV2';
import SynqueLogo from './components/Logo';
import { SectionProps } from './types';

const SECTIONS: Omit<SectionProps, 'index'>[] = [
  {
    title: "AI SEARCH",
    subtitle: "Beyond Keywords",
    description: "Experience search that understands intent, context, and nuance. Synque redefines how you interact with information using neural-first indexing.",
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
    description: "Search without being followed. Synque uses decentralized protocols and zero-knowledge encryption to ensure your queries remain your business.",
    animationType: 'glass'
  },
  {
    title: "ZERO LATENCY",
    subtitle: "Real-time Processing",
    description: "Speed is a feature. Synque delivers precise insights in milliseconds, powered by a globally distributed edge infrastructure.",
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
    description: "Synque processes information across all formats. Whether it's code, documents, or media, we index everything with precision.",
    animationType: 'zoom'
  },
  {
    title: "ADAPTIVE INTERFACE",
    subtitle: "Personal Discovery",
    description: "An AI search companion that learns your workflow. Synque curates your information environment to match your specific research needs.",
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
    description: "Integrate Synque's search intelligence into your own infrastructure. Built for high-volume, secure corporate environments.",
    animationType: 'split'
  },
  {
    title: "THE FUTURE",
    subtitle: "Join the Evolution",
    description: "Stop searching. Start finding. Join the early access and experience the next generation of human-AI collaboration.",
    animationType: 'glass'
  }
];

const AppV1: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative bg-black min-h-screen text-white selection:bg-cyan-500 selection:text-white">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 45 }}>
          <Suspense fallback={null}>
            <Scene />
            <Preload all />
          </Suspense>
        </Canvas>
      </div>
      <div className="fixed inset-0 z-5 pointer-events-none opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <div className="space-y-0">
          {SECTIONS.map((section, idx) => (
            <ContentSection key={idx} index={idx} {...section} />
          ))}
        </div>
        <footer className="py-48 px-8 border-t border-white/5 flex flex-col items-center gap-16 bg-black">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} className="flex flex-col items-center gap-8 text-center">
            <SynqueLogo className="w-24 h-24" color="#06b6d4" />
            <div className="font-orbitron font-black text-6xl md:text-[12rem] tracking-tighter text-white leading-none">
              SYNQUE<span className="text-cyan-500">.</span>
            </div>
            <p className="text-white/20 uppercase tracking-[2em] text-[12px] md:text-[14px]">Intelligence Simplified</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-16 md:gap-40 text-center mt-12">
            {[{ title: "Product", links: ["Intelligence", "Insights", "Privacy"] }, { title: "Company", links: ["Manifesto", "Careers", "News"] }, { title: "Resources", links: ["Documentation", "SDKs", "Community"] }, { title: "Legal", links: ["Privacy Policy", "Terms", "Security"] }].map((col) => (
              <div key={col.title} className="space-y-6">
                <h4 className="text-[10px] uppercase tracking-[0.5em] text-cyan-500 font-black">{col.title}</h4>
                <ul className="text-xs space-y-4 text-white/30">
                  {col.links.map(l => <li key={l}><a href="#" className="hover:text-white transition-colors uppercase tracking-widest">{l}</a></li>)}
                </ul>
              </div>
            ))}
          </div>
        </footer>
      </div>
      <div className="fixed top-0 left-0 w-full h-[2px] bg-white/5 z-50">
         <motion.div className="h-full bg-cyan-500 origin-left" style={{ scaleX }} />
      </div>
    </div>
  );
};

const AppV2: React.FC = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="theme-v2 relative min-h-screen text-black selection:bg-lime-400 selection:text-black font-mono">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 8], fov: 35 }}>
          <Suspense fallback={null}>
            <SceneV2 />
            <Preload all />
          </Suspense>
        </Canvas>
      </div>
      <div className="relative z-10">
        <NavbarV2 />
        <HeroV2 />
        <div className="space-y-0">
          {SECTIONS.map((section, idx) => (
            <ContentSectionV2 key={idx} index={idx} {...section} />
          ))}
        </div>
        <footer className="py-48 px-8 border-t border-black/5 flex flex-col items-center gap-16 bg-[#f8f8f8]">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} className="flex flex-col items-center gap-10 text-center">
            <SynqueLogo className="w-24 h-24" color="#000000" />
            <div className="font-serif italic font-black text-6xl md:text-[10rem] tracking-tighter text-black leading-none uppercase">
              SYNQUE<span className="text-lime-500">_</span>
            </div>
            <p className="text-black/40 uppercase tracking-[1em] text-[10px] md:text-[12px]">Future Proof Neural Intelligence</p>
          </motion.div>
          <div className="w-full h-px bg-black/10 my-12" />
          <p className="text-[10px] opacity-30">© 2025 SYNQUE DESIGN LABS // ALL RIGHTS RESERVED</p>
        </footer>
      </div>
      <div className="fixed top-0 right-0 h-full w-[2px] bg-black/5 z-50">
         <motion.div className="w-full bg-lime-500 origin-top" style={{ scaleY: scrollYProgress }} />
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [route, setRoute] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => setRoute(window.location.pathname);
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  return route === '/social-ordering-v2' ? <AppV2 /> : <AppV1 />;
};

export default App;
