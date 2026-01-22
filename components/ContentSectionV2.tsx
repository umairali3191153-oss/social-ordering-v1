
import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { SectionProps } from '../types';

const ContentSectionV2Editorial: React.FC<SectionProps> = ({ title, subtitle, description, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-20%", once: false });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  // Alternate side for each index
  const isEven = index % 2 === 0;

  return (
    <section ref={ref} className="min-h-screen py-48 flex flex-col justify-center">
      <div className={`grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-center ${isEven ? '' : 'md:flex-row-reverse'}`}>
        
        {/* Text Block */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className={`md:col-span-6 space-y-12 ${isEven ? 'md:order-1' : 'md:order-2'}`}
        >
          <div className="space-y-6">
            <span className="text-[10px] font-mono tracking-[0.6em] text-[#003CFF] uppercase">{subtitle}</span>
            <h2 className="text-6xl md:text-8xl font-serif leading-none tracking-tighter text-[#111111]">
              {title}
            </h2>
            <div className="w-32 h-[2px] bg-[#111111]" />
          </div>
          
          <p className="text-xl md:text-2xl font-light text-[#111111]/50 leading-relaxed max-w-lg">
            {description}
          </p>

          <button className="flex items-center gap-6 group">
             <span className="text-[10px] font-black uppercase tracking-widest text-[#111111]">Read Perspective</span>
             <div className="w-12 h-[1px] bg-[#111111] group-hover:w-24 group-hover:bg-[#003CFF] transition-all" />
          </button>
        </motion.div>

        {/* Visual / Abstract Block */}
        <motion.div 
          style={{ y }}
          className={`md:col-span-6 relative aspect-[4/5] bg-[#EFEFEF] overflow-hidden rounded-sm ${isEven ? 'md:order-2' : 'md:order-1'}`}
        >
          <div className="absolute inset-0 flex items-center justify-center p-12">
             <div className="w-full h-full border border-[#111111]/5 flex items-center justify-center">
                <span className="text-[12rem] font-serif italic text-[#111111]/5 select-none">{index + 1}</span>
             </div>
          </div>
          <div className="absolute bottom-8 right-8 text-[10px] font-mono text-[#111111]/20 tracking-widest uppercase">
            Protocol_0x{index.toString(16).padStart(2, '0')}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ContentSectionV2Editorial;
