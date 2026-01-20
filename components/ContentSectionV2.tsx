
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { SectionProps } from '../types';

const IMAGES = [
  "https://images.unsplash.com/photo-1614728263952-84ea206f99b6?auto=format&fit=crop&q=80&w=1200", // Space/Planet
  "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=1200", // Abstract Architecture
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200", // Digital Waves
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200", // Hardware
];

const ContentSectionV2: React.FC<SectionProps> = ({ title, subtitle, description, index }) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { margin: "-10%", once: false });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yImage = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const imageUrl = IMAGES[index % IMAGES.length];

  return (
    <section ref={containerRef} className="relative min-h-[120vh] w-full flex items-center justify-center py-40 border-b border-black/5 bg-transparent overflow-hidden">
      <div className={`w-full max-w-[90rem] px-12 grid grid-cols-1 md:grid-cols-12 gap-12 items-start ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
        
        {/* Text Content */}
        <div className={`md:col-span-5 space-y-12 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2 md:text-right md:items-end flex flex-col'}`}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <span className="text-lime-600 font-bold tracking-[0.3em] text-[10px] uppercase font-mono">[{subtitle}]</span>
            <h2 className="text-6xl md:text-8xl font-serif font-black italic tracking-tighter leading-none">{title}</h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-black/60 text-lg md:text-xl font-mono leading-relaxed max-w-lg"
          >
            {description}
          </motion.p>
          
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1 }}
            className={`h-[2px] w-48 bg-black origin-left ${index % 2 === 0 ? 'origin-left' : 'origin-right'}`}
          />
        </div>

        {/* Visual Content */}
        <div className={`md:col-span-7 relative ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
          <motion.div 
            style={{ y: yImage }}
            className="relative aspect-[4/5] md:aspect-[16/10] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 group"
          >
            <img 
              src={imageUrl} 
              alt={title} 
              className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[2s]" 
            />
            <div className="absolute inset-0 bg-lime-500/10 mix-blend-overlay"></div>
            <div className="absolute top-8 left-8 text-black bg-lime-400 px-4 py-2 font-mono text-[10px] font-bold">
               V2_INDEX_{index.toString().padStart(2, '0')}
            </div>
          </motion.div>
          
          {/* Floating Accents */}
          <motion.div 
             animate={{ rotate: 360 }}
             transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
             className="absolute -bottom-12 -right-12 w-32 h-32 border border-black/10 rounded-full flex items-center justify-center"
          >
             <div className="w-2 h-2 bg-lime-500"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContentSectionV2;
