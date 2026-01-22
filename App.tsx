
import React, { Suspense, useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Preload } from '@react-three/drei';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ContentSection from './components/ContentSection';
import Scene from './components/Experience';
import NavbarV2Editorial from './components/NavbarV2';
import HeroV2Editorial from './components/HeroV2';
import ContentSectionV2Editorial from './components/ContentSectionV2';
import SceneV2Editorial from './components/ExperienceV2';
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
        </footer>
      </div>
      <div className="fixed top-0 left-0 w-full h-[2px] bg-white/5 z-50">
         <motion.div className="h-full bg-emerald-500 origin-left" style={{ scaleX }} />
      </div>
    </div>
  );
};

const AppV2Editorial: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });

  return (
    <div className="relative bg-[#F8F8F8] min-h-screen text-[#111111] font-lexend overflow-x-hidden selection:bg-[#003CFF] selection:text-white">
      {/* Refractive 3D Background */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-30">
        <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 10], fov: 40 }}>
          <Suspense fallback={null}>
            <SceneV2Editorial scrollProgress={smoothProgress} />
            <Preload all />
          </Suspense>
        </Canvas>
      </div>

      <NavbarV2Editorial />

      <main className="relative z-10">
        <HeroV2Editorial />
        
        <div className="max-w-screen-xl mx-auto px-8 md:px-24">
          {SECTIONS.map((section, idx) => (
            <ContentSectionV2Editorial key={idx} index={idx} {...section} />
          ))}
        </div>

        <footer className="py-32 px-24 bg-[#111111] text-white rounded-t-[4rem] relative z-20 overflow-hidden">
          <div className="flex flex-col md:flex-row justify-between items-start gap-16">
            <div className="space-y-8">
              <SynqueLogo className="w-16 h-16" color="#ffffff" />
              <h2 className="text-8xl font-serif italic tracking-tighter">Ordered.</h2>
              <p className="max-w-md text-white/40 text-lg leading-relaxed font-light">
                Join the network that reclaim the web from the noise of the automated world.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-24">
               <div className="space-y-4">
                  <h4 className="text-[10px] uppercase tracking-widest font-mono text-white/30">Network</h4>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#" className="hover:text-[#003CFF] transition-colors">Nodes</a></li>
                    <li><a href="#" className="hover:text-[#003CFF] transition-colors">Ranking</a></li>
                    <li><a href="#" className="hover:text-[#003CFF] transition-colors">Manifesto</a></li>
                  </ul>
               </div>
               <div className="space-y-4">
                  <h4 className="text-[10px] uppercase tracking-widest font-mono text-white/30">Connect</h4>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#" className="hover:text-[#003CFF] transition-colors">X / Twitter</a></li>
                    <li><a href="#" className="hover:text-[#003CFF] transition-colors">Discord</a></li>
                    <li><a href="#" className="hover:text-[#003CFF] transition-colors">GitHub</a></li>
                  </ul>
               </div>
            </div>
          </div>
          <div className="mt-24 pt-12 border-t border-white/5 flex justify-between items-center text-[10px] font-mono text-white/20 tracking-widest uppercase">
             <span>© 2025 SYNQUE PROTOCOL</span>
             <span>HUMAN_FIRST_0.1.0</span>
          </div>
        </footer>
      </main>

      {/* Progress Line */}
      <motion.div 
        className="fixed left-0 top-0 w-1 bg-[#003CFF] z-[100]"
        style={{ height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
      />
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

  return route === '/social-ordering-v2' ? <AppV2Editorial /> : <AppV1 />;
};

export default App;
