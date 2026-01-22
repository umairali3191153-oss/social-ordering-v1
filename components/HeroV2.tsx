
import React from 'react';
import { motion } from 'framer-motion';

const HeroV2Editorial: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-8 md:px-24 pt-32 pb-48">
      <div className="max-w-screen-xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
        
        <div className="md:col-span-8 space-y-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-4"
          >
             <span className="text-[10px] font-mono tracking-[1em] text-[#003CFF] uppercase">Introduction // 01</span>
             <h1 className="text-7xl md:text-[11rem] font-serif leading-[0.85] tracking-tighter text-[#111111]">
               The Social<br />
               <span className="italic">Ordering.</span>
             </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-2xl md:text-3xl font-light text-[#111111]/60 max-w-2xl leading-relaxed"
          >
            Reclaiming the digital landscape through human synthesis. A protocol built on the foundation of shared intelligence.
          </motion.p>
        </div>

        <div className="md:col-span-4 flex flex-col items-end gap-12">
           <div className="w-full h-[1px] bg-[#111111]/10" />
           <div className="space-y-6 text-right">
              <span className="text-[10px] font-mono tracking-widest text-[#111111]/30 block uppercase">Curator Status</span>
              <div className="text-4xl font-serif italic text-[#111111]">14,802 Active</div>
           </div>
           <motion.div 
             animate={{ y: [0, 10, 0] }}
             transition={{ repeat: Infinity, duration: 2 }}
             className="w-8 h-12 rounded-full border border-[#111111]/20 flex items-start justify-center p-2"
           >
              <div className="w-1 h-2 bg-[#111111] rounded-full" />
           </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroV2Editorial;
