
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SectionProps } from '../types';

const IMAGES = [
  "https://images.unsplash.com/photo-1464802686167-b939a67a06a1?auto=format&fit=crop&q=80&w=1200", // Space
  "https://images.unsplash.com/photo-1506318137071-a8e063b4b4bf?auto=format&fit=crop&q=80&w=1200", // Dark Nebula
  "https://images.unsplash.com/photo-1482160549442-2475637d8a9c?auto=format&fit=crop&q=80&w=1200", // Light rays
  "https://images.unsplash.com/photo-1533134486753-c833f074868f?auto=format&fit=crop&q=80&w=1200", // Geometry
];

const ContentSectionV2Horizontal: React.FC<SectionProps> = ({ title, subtitle, description, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "0px -200px 0px -200px", once: false });
  const imageUrl = IMAGES[index % IMAGES.length];

  return (
    <div ref={ref} className="w-full h-full flex items-center justify-center p-8 md:p-24">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, x: 100 }}
        animate={isInView ? { opacity: 1, scale: 1, x: 0 } : { opacity: 0, scale: 0.9, x: 100 }}
        transition={{ duration: 0.8, ease: "circOut" }}
        className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full max-w-[85rem] h-[70vh] md:h-[60vh]"
      >
        {/* Big visual block */}
        <div className="md:col-span-7 relative group overflow-hidden rounded-2xl bg-black border border-white/5">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-80 transition-all duration-[3s] ease-out" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
          <div className="absolute bottom-8 left-8 flex items-center gap-4">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-[10px] font-mono text-white/60 tracking-widest uppercase">SY_INDEX_0x{index.toString(16).padStart(2, '0')}</span>
          </div>
        </div>

        {/* Info blocks */}
        <div className="md:col-span-5 flex flex-col gap-6">
          <div className="flex-1 p-12 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl flex flex-col justify-end space-y-6">
            <span className="text-emerald-500 font-bold tracking-[0.4em] text-[10px] uppercase font-mono">{subtitle}</span>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-none">{title}</h2>
            <p className="text-white/40 text-lg leading-relaxed font-light">{description}</p>
          </div>
          
          <div className="h-32 p-12 bg-emerald-500 flex items-center justify-between rounded-2xl group cursor-pointer overflow-hidden relative">
            <div className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
            <span className="text-xs font-black uppercase tracking-widest text-black z-10">Expand Data</span>
            <div className="w-8 h-8 rounded-full border border-black/20 flex items-center justify-center group-hover:rotate-45 transition-transform z-10">
              <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContentSectionV2Horizontal;
