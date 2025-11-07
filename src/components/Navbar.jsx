import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const links = [
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition ${
      scrolled ? 'backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 border-b border-white/10' : ''
    }`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-white">
        <a href="#" className="flex items-center gap-2">
          <span className="text-xl font-semibold tracking-tight">Softech Solutions</span>
        </a>
        <div className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-white/80 transition hover:text-white">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="rounded-xl bg-cyan-500 px-4 py-2 text-sm font-medium text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400">
            Start a project
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
