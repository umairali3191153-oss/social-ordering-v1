
import React from 'react';
import { motion } from 'framer-motion';
import SynqueLogo from './Logo';

const NavbarV2: React.FC = () => {
  return (
    <motion.nav 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-12 py-10 pointer-events-none"
    >
      <div 
        className="flex items-center gap-4 pointer-events-auto cursor-pointer" 
        onClick={() => window.location.href = '/'}
      >
        <SynqueLogo className="w-10 h-10" color="#000000" />
        <div className="text-3xl font-serif italic font-black tracking-tighter text-black">
          SYNQUE<span className="text-lime-500">_</span>
        </div>
      </div>
      
      <div className="flex gap-12 pointer-events-auto">
        <button className="px-10 py-4 bg-black text-white text-[10px] font-mono font-bold uppercase tracking-widest hover:bg-lime-500 hover:text-black transition-all">
          INITIATE_SEARCH
        </button>
      </div>
    </motion.nav>
  );
};

export default NavbarV2;
