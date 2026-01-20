
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="z-10"
      >
        <h1 className="text-6xl md:text-[10rem] font-orbitron font-black leading-none mb-6 tracking-tighter">
          ORDER THE<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-500 to-indigo-500">
            INTERNET
          </span>
        </h1>
        <p className="text-lg md:text-xl text-white/40 max-w-2xl mx-auto uppercase tracking-[0.5em] font-light">
          Synque is the Social Ordering Protocol for Humanity
        </p>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="absolute bottom-12 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] uppercase tracking-[1em] text-white/20">Scroll to Explore</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-emerald-500 to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
