
import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from '../types';
import SynqueLogo from './Logo';

const links: NavLink[] = [
  { label: 'Discovery', href: '#' },
  { label: 'Curators', href: '#' },
  { label: 'Protocol', href: '#' },
  { label: 'Manifesto', href: '#' },
];

const Navbar: React.FC = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-6 backdrop-blur-xl bg-black/5 border-b border-white/5"
    >
      <div className="flex items-center gap-3">
        <SynqueLogo className="w-8 h-8" color="#10b981" />
        <div className="text-2xl font-black font-orbitron tracking-tighter text-white">
          SYNQUE<span className="text-emerald-500">.</span>
        </div>
      </div>
      
      <div className="hidden md:flex gap-16">
        {links.map((link) => (
          <a 
            key={link.label}
            href={link.href}
            className="text-[10px] font-bold text-white/40 hover:text-emerald-400 transition-colors uppercase tracking-[0.3em]"
          >
            {link.label}
          </a>
        ))}
      </div>

      <button className="px-8 py-3 bg-white text-black text-[10px] font-black uppercase tracking-[0.2em] hover:bg-emerald-500 hover:text-white transition-all duration-500 rounded-sm">
        Join Network
      </button>
    </motion.nav>
  );
};

export default Navbar;
