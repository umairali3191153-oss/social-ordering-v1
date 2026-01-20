
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { SectionProps } from '../types';

// Curated Unsplash images for AI Search context
const IMAGES = [
  "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200", // AI Node
  "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=1200", // Blockchain/Crypto
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200", // Cyber/Tech
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=1200", // Data Center
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200", // Circuits
];

const ContentSection: React.FC<SectionProps> = ({ title, subtitle, description, index, animationType }) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { margin: "-20%", once: false });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });

  const renderContent = () => {
    switch (animationType) {
      case 'split': {
        const xLeft = useTransform(smoothProgress, [0.3, 0.6], ["-100%", "0%"]);
        const xRight = useTransform(smoothProgress, [0.3, 0.6], ["100%", "0%"]);
        return (
          <div className="w-full max-w-7xl px-8 flex flex-col items-center justify-center gap-12 text-center">
            <div className="overflow-hidden py-4">
              <motion.h2 
                style={{ x: xLeft }}
                className="text-7xl md:text-[10rem] font-orbitron font-black leading-none uppercase"
              >
                {title.split(' ')[0]}
              </motion.h2>
            </div>
            <div className="overflow-hidden py-4">
              <motion.h2 
                style={{ x: xRight }}
                className="text-7xl md:text-[10rem] font-orbitron font-black leading-none uppercase text-cyan-500"
              >
                {title.split(' ')[1] || 'ENGINE'}
              </motion.h2>
            </div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="max-w-2xl text-white/40 text-lg uppercase tracking-widest font-light"
            >
              {description}
            </motion.p>
          </div>
        );
      }

      case 'parallax': {
        const yText = useTransform(smoothProgress, [0, 1], [100, -100]);
        const yImage = useTransform(smoothProgress, [0, 1], [-50, 50]);
        const imageUrl = IMAGES[index % IMAGES.length];
        
        return (
          <div className="w-full max-w-7xl px-8 grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <motion.div style={{ y: yText }} className="space-y-8 z-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-px bg-cyan-500"></div>
                <span className="text-cyan-400 font-bold tracking-[0.5em] text-[10px] uppercase">{subtitle}</span>
              </div>
              <h2 className="text-6xl md:text-8xl font-orbitron font-bold leading-tight">{title}</h2>
              <p className="text-white/50 text-xl leading-relaxed font-light">{description}</p>
            </motion.div>
            <motion.div 
              style={{ y: yImage }}
              className="relative aspect-[3/4] bg-white/[0.02] border border-white/10 flex items-center justify-center overflow-hidden group"
            >
              <img 
                src={imageUrl} 
                alt={title} 
                className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-cyan-500/10 opacity-40 group-hover:opacity-10 transition-colors duration-1000"></div>
            </motion.div>
          </div>
        );
      }

      case 'glass': {
        const skew = useTransform(smoothProgress, [0, 0.5, 1], [10, 0, -10]);
        const rotate = useTransform(smoothProgress, [0, 1], [5, -5]);
        return (
          <div className="w-full max-w-5xl px-8 flex justify-center">
            <motion.div 
              style={{ skewY: skew, rotateX: rotate }}
              className="w-full p-20 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-3xl border border-white/10 rounded-sm relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
              <div className="space-y-10 relative z-10">
                <span className="text-[10px] text-white/30 uppercase tracking-[1em] block">{subtitle}</span>
                <h2 className="text-5xl md:text-7xl font-orbitron font-black uppercase">{title}</h2>
                <div className="w-24 h-px bg-white/20"></div>
                <p className="text-white/60 text-lg leading-loose max-w-2xl">{description}</p>
                <button className="group mt-8 flex items-center gap-6 text-[10px] font-bold uppercase tracking-[0.4em] hover:text-cyan-400 transition-colors">
                  <span>Explore Intelligence</span>
                  <div className="w-12 h-px bg-white group-hover:w-24 group-hover:bg-cyan-400 transition-all"></div>
                </button>
              </div>
            </motion.div>
          </div>
        );
      }

      case 'marquee': {
        const x = useTransform(smoothProgress, [0, 1], [-500, 500]);
        return (
          <div className="w-full py-20 overflow-hidden bg-white/[0.01] border-y border-white/5">
            <motion.div style={{ x }} className="flex gap-20 whitespace-nowrap">
              {[...Array(6)].map((_, i) => (
                <span key={i} className="text-[12rem] font-orbitron font-black text-transparent stroke-white" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.05)' }}>
                  {title}
                </span>
              ))}
            </motion.div>
            <div className="mt-[-4rem] px-8 text-center relative z-10">
               <p className="max-w-2xl mx-auto text-white/40 text-lg">{description}</p>
            </div>
          </div>
        );
      }

      case 'zoom': {
        const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.8, 1, 1.2]);
        const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
        const imageUrl = IMAGES[(index + 2) % IMAGES.length];

        return (
          <motion.div style={{ scale, opacity }} className="w-full max-w-7xl flex flex-col items-center justify-center text-center px-8 space-y-12 relative h-[80vh]">
            <img 
              src={imageUrl} 
              alt="Background context" 
              className="absolute inset-0 w-full h-full object-cover opacity-10 blur-sm grayscale"
            />
            <h2 className="text-8xl md:text-[15rem] font-orbitron font-black text-white/[0.03] uppercase leading-none absolute inset-0 flex items-center justify-center select-none pointer-events-none">
              {title.split(' ')[0]}
            </h2>
            <div className="relative z-10 space-y-8">
              <span className="text-cyan-500 font-bold uppercase tracking-[0.8em] text-xs">{subtitle}</span>
              <h3 className="text-5xl md:text-7xl font-orbitron font-bold">{title}</h3>
              <p className="max-w-xl mx-auto text-white/50 text-xl font-light italic leading-relaxed">"{description}"</p>
            </div>
          </motion.div>
        );
      }

      case 'stat': {
        return (
          <div className="w-full max-w-7xl px-8 flex flex-col items-center justify-center gap-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full">
              {[
                { val: "99.9%", lab: "ACCURACY" },
                { val: "<10MS", lab: "LATENCY" },
                { val: "ZERO", lab: "TRACKING" },
                { val: "1B+", lab: "INDEXED" }
              ].map((s, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/[0.02] border border-white/5 p-12 text-center space-y-4 hover:border-cyan-500/30 transition-colors"
                >
                  <div className="text-5xl font-orbitron font-black text-cyan-500">{s.val}</div>
                  <div className="text-[10px] text-white/30 font-bold uppercase tracking-widest">{s.lab}</div>
                </motion.div>
              ))}
            </div>
            <div className="text-center space-y-4">
               <h2 className="text-6xl font-orbitron font-bold">{title}</h2>
               <p className="max-w-2xl text-white/40 leading-relaxed mx-auto">{description}</p>
            </div>
          </div>
        );
      }

      default:
        return (
          <div className="max-w-4xl px-8 text-center space-y-8">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-cyan-400 font-bold tracking-[1em] text-[10px] block uppercase"
            >
              {subtitle}
            </motion.span>
            <motion.h2 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="text-6xl md:text-8xl font-orbitron font-bold"
            >
              {title}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-white/40 text-lg leading-relaxed max-w-2xl mx-auto"
            >
              {description}
            </motion.p>
          </div>
        );
    }
  };

  return (
    <section ref={containerRef} className="relative min-h-screen w-full flex items-center justify-center overflow-hidden py-32 border-b border-white/[0.02]">
      {renderContent()}
    </section>
  );
};

export default ContentSection;
