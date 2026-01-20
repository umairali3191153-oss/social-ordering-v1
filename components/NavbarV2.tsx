
import React from 'react';
import { motion } from 'framer-motion';
import SynqueLogo from './Logo';

const NavbarV2Horizontal: React.FC = () => {
  return (
    <div className="fixed top-8 left-0 w-full z-[100] flex justify-center px-8 pointer-events-none">
      <motion.nav 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center gap-12 px-8 py-3 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full pointer-events-auto"
      >
        <div 
          className="flex items-center gap-3 cursor-pointer group" 
          onClick={() => {
            window.history.pushState({}, '', '/');
            window.dispatchEvent(new PopStateEvent('popstate'));
          }}
        >
          <SynqueLogo className="w-6 h-6 transition-transform group-hover:rotate-12" color="#10b981" />
          <span className="text-lg font-black tracking-tighter text-white font-lexend">
            SYNQUE<span className="text-emerald-500">_</span>
          </span>
        </div>
        
        <div className="hidden md:flex gap-8 items-center">
           <a href="#" className="text-[10px] font-bold text-white/40 hover:text-emerald-400 uppercase tracking-widest transition-colors">Network</a>
           <a href="#" className="text-[10px] font-bold text-white/40 hover:text-emerald-400 uppercase tracking-widest transition-colors">Protocol</a>
           <a href="#" className="text-[10px] font-bold text-white/40 hover:text-emerald-400 uppercase tracking-widest transition-colors">Manifesto</a>
        </div>

        <button className="px-6 py-2 bg-emerald-500 text-black text-[10px] font-black uppercase tracking-widest hover:bg-white transition-all rounded-full">
          Get Extension
        </button>
      </motion.nav>
    </div>
  );
};

export default NavbarV2Horizontal;
