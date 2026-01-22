
import React from 'react';
import { motion } from 'framer-motion';
import SynqueLogo from './Logo';

const NavbarV2Editorial: React.FC = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full z-[100] px-12 py-8 flex justify-between items-center mix-blend-difference"
    >
      <div 
        className="flex items-center gap-4 cursor-pointer"
        onClick={() => {
          window.history.pushState({}, '', '/');
          window.dispatchEvent(new PopStateEvent('popstate'));
        }}
      >
        <SynqueLogo className="w-8 h-8" color="#ffffff" />
        <span className="text-2xl font-black tracking-tighter text-white font-lexend uppercase">Synque</span>
      </div>

      <div className="hidden md:flex gap-12">
        {['Signal', 'Network', 'Archives'].map(item => (
          <a key={item} href="#" className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/60 hover:text-white transition-colors">
            {item}
          </a>
        ))}
      </div>

      <button className="px-10 py-3 bg-white text-black text-[10px] font-black uppercase tracking-widest hover:bg-[#003CFF] hover:text-white transition-all rounded-sm">
        Join Early
      </button>
    </motion.nav>
  );
};

export default NavbarV2Editorial;
