
import React from 'react';
import { motion } from 'framer-motion';

const HeroV2: React.FC = () => {
  return (
    <section className="relative h-screen flex flex-col items-start justify-center px-12 md:px-24 overflow-hidden bg-transparent">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="z-10 max-w-5xl"
      >
        <span className="text-[12px] font-mono uppercase tracking-[0.5em] text-black/40 mb-8 block">Project: Neural Discovery</span>
        <h1 className="text-7xl md:text-[12rem] font-serif font-black leading-[0.8] mb-12 tracking-tight text-black">
          SYNQUE<br />
          <span className="italic">SYSTEMS</span>
        </h1>
        <div className="flex items-center gap-12">
            <div className="h-px w-32 bg-black"></div>
            <p className="text-sm md:text-lg text-black/60 max-w-lg font-mono leading-relaxed uppercase">
                Synque is a social ordering protocol for information. 
                Intelligence meets human-centric discovery.
            </p>
        </div>
      </motion.div>

      <motion.div 
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute right-24 bottom-24 hidden md:block"
      >
        <div className="text-[10px] font-mono tracking-widest text-black/30 vertical-text" style={{ writingMode: 'vertical-rl' }}>
           SCROLL_TO_PROCESS_DATA // SYNQUE_VERSION_02
        </div>
      </motion.div>
    </section>
  );
};

export default HeroV2;
