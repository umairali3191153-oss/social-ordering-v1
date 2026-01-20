
import React, { Suspense, useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Preload } from '@react-three/drei';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ContentSection from './components/ContentSection';
import Scene from './components/Experience';
import NavbarV2Horizontal from './components/NavbarV2';
import HeroV2Horizontal from './components/HeroV2';
import ContentSectionV2Horizontal from './components/ContentSectionV2';
import SceneV2Horizontal from './components/ExperienceV2';
import SynqueLogo from './components/Logo';
import { SectionProps } from './types';

const SECTIONS: Omit<SectionProps, 'index'>[] = [
  {
    title: "SIGNAL OVER NOISE",
    subtitle: "Human Verification",
    description: "The web is broken by SEO junk and AI filler. Synque surfaces high-signal information verified by real humans, ensuring you find the best of the internet, not the most optimized.",
    animationType: 'split'
  },
  {
    title: "COLLECTIVE MINDS",
    subtitle: "The Social Brain",
    description: "Intelligence is a collaborative effort. Synque harnesses the collective taste of the world's best curators to rank information by value, creating a shared digital consciousness.",
    animationType: 'parallax'
  },
  {
    title: "KNOWLEDGE GRAPHS",
    subtitle: "Visualizing Intent",
    description: "Every link saved is a connection made. Explore a massive, human-organized graph that maps the semantic relationships between ideas, people, and the content they trust.",
    animationType: 'glass'
  },
  {
    title: "DIGITAL ARCHIVE",
    subtitle: "Infinite Recall",
    description: "Your second brain lives here. Synque effortlessly captures and organizes your digital world into a meaningful archive that helps you remember everything that matters.",
    animationType: 'marquee'
  },
  {
    title: "TRANSPARENT RANKING",
    subtitle: "Open Protocol",
    description: "No black-box algorithms. Synque's social ordering protocol is transparent and driven by user consensus, returning power to the people who consume information.",
    animationType: 'parallax'
  },
  {
    title: "UNIVERSAL CAPTURE",
    subtitle: "Seamless Integration",
    description: "Information happens everywhere. With our browser extension and mobile tools, you can order the internet from any device, anytime, with a single click.",
    animationType: 'zoom'
  },
  {
    title: "A NEW WEB",
    subtitle: "The Missing Layer",
    description: "We're building the social layer the internet has always needed. Join Synque and help us reclaim the web for human curiosity and collective discovery.",
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
    <div className="relative bg-black min-h-screen text-white selection:bg-emerald-500 selection:text-white">
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
            <SynqueLogo className="w-24 h-24" color="#10b981" />
            <div className="font-orbitron font-black text-6xl md:text-[12rem] tracking-tighter text-white leading-none">
              SYNQUE<span className="text-emerald-500">.</span>
            </div>
            <p className="text-white/20 uppercase tracking-[2em] text-[12px] md:text-[14px]">The Social Ordering Protocol</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-16 md:gap-40 text-center mt-12">
            {[{ title: "Product", links: ["Protocol", "Extension", "iOS App"] }, { title: "Company", links: ["Manifesto", "Careers", "Contact"] }, { title: "Community", links: ["Discord", "Twitter", "Curators"] }, { title: "Legal", links: ["Privacy", "Terms", "Guidelines"] }].map((col) => (
              <div key={col.title} className="space-y-6">
                <h4 className="text-[10px] uppercase tracking-[0.5em] text-emerald-500 font-black">{col.title}</h4>
                <ul className="text-xs space-y-4 text-white/30">
                  {col.links.map(l => <li key={l}><a href="#" className="hover:text-white transition-colors uppercase tracking-widest">{l}</a></li>)}
                </ul>
              </div>
            ))}
          </div>
        </footer>
      </div>
      <div className="fixed top-0 left-0 w-full h-[2px] bg-white/5 z-50">
         <motion.div className="h-full bg-emerald-500 origin-left" style={{ scaleX }} />
      </div>
    </div>
  );
};

const AppV2Horizontal: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  const totalSections = SECTIONS.length + 2; 
  const xTransform = useTransform(scrollYProgress, [0, 1], ["0%", `-${(totalSections - 1) * 100}%`]);
  const smoothX = useSpring(xTransform, { stiffness: 40, damping: 15 });

  return (
    <div ref={containerRef} className="theme-v2-horizontal relative h-[1000vh] font-lexend">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 10], fov: 40 }}>
          <Suspense fallback={null}>
            <SceneV2Horizontal scrollProgress={scrollYProgress} />
            <Preload all />
          </Suspense>
        </Canvas>
      </div>

      <NavbarV2Horizontal />

      <div className="fixed inset-0 overflow-hidden">
        <motion.div style={{ x: smoothX }} className="flex h-full w-max">
          <div className="w-screen h-full flex-shrink-0">
            <HeroV2Horizontal />
          </div>

          {SECTIONS.map((section, idx) => (
            <div key={idx} className="w-screen h-full flex-shrink-0 flex items-center justify-center">
              <ContentSectionV2Horizontal key={idx} index={idx} {...section} />
            </div>
          ))}

          <div className="w-screen h-full flex-shrink-0 flex items-center justify-center bg-black/40 backdrop-blur-3xl px-12 md:px-48">
             <div className="flex flex-col items-center gap-12 text-center w-full">
                <SynqueLogo className="w-32 h-32" color="#10b981" />
                <h2 className="text-8xl md:text-[14rem] font-black tracking-tighter text-white">
                  SYNQUE<span className="text-emerald-500">_</span>
                </h2>
                <div className="flex gap-12 text-white/40 text-xs uppercase tracking-widest font-mono">
                   <span>Human Curation</span>
                   <span>•</span>
                   <span>Social Ranking</span>
                   <span>•</span>
                   <span>Digital Sovereignty</span>
                </div>
                <div className="w-full max-w-lg h-px bg-white/10" />
                <p className="text-white/20 text-[10px] tracking-[1em] uppercase">Built for the future of human discovery.</p>
             </div>
          </div>
        </motion.div>
      </div>

      <div className="fixed right-12 top-1/2 -translate-y-1/2 h-64 w-[2px] bg-white/5 z-50 overflow-hidden">
         <motion.div 
           className="w-full bg-emerald-500 origin-top" 
           style={{ scaleY: scrollYProgress }} 
         />
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

  return route === '/social-ordering-v2' ? <AppV2Horizontal /> : <AppV1 />;
};

export default App;
