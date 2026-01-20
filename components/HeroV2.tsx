
import React from 'react';
import { motion } from 'framer-motion';

const HeroV2Horizontal: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative px-12 md:px-48">
      <div className="absolute left-48 top-1/4 w-32 h-[1px] bg-emerald-500/30"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="z-10 text-center space-y-8"
      >
        <span className="text-emerald-500 text-xs font-mono tracking-[0.6em] uppercase block">Protocol_01: Collective intelligence</span>
        <h1 className="text-8xl md:text-[15rem] font-lexend font-black leading-[0.75] tracking-tighter text-white">
          THE SOCIAL<br />
          <span className="text-emerald-500 italic">BRAIN.</span>
        </h1>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 mt-12">
            <p className="text-lg md:text-xl text-white/40 max-w-lg font-light leading-relaxed text-center uppercase tracking-widest">
                Reclaiming the web through human curation. Synque connects the world's most curious minds into a single, ordered knowledge engine.
            </p>
        </div>
      </motion.div>

      <motion.div 
        animate={{ x: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute bottom-16 right-16 flex items-center gap-4"
      >
        <span className="text-[10px] font-mono tracking-widest text-emerald-500">START_DISCOVERY_FLIGHT</span>
        <div className="w-24 h-[1px] bg-emerald-500/50"></div>
      </motion.div>
    </div>
  );
};

export default HeroV2Horizontal;
