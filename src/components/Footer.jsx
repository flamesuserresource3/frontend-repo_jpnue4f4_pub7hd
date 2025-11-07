import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="relative w-full bg-slate-950 py-12 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold">Softech Solutions</h3>
            <p className="mt-2 max-w-md text-sm text-white/70">
              We partner with ambitious teams to design, build, and scale world‑class digital products.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 lg:col-span-2 lg:grid-cols-4">
            <div>
              <h4 className="text-sm font-medium text-white/80">Services</h4>
              <ul className="mt-3 space-y-2 text-sm text-white/60">
                <li>Web Development</li>
                <li>App Development</li>
                <li>IoT Platforms</li>
                <li>Cloud & DevOps</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium text-white/80">Company</h4>
              <ul className="mt-3 space-y-2 text-sm text-white/60">
                <li>About</li>
                <li>Careers</li>
                <li>Contact</li>
                <li>Privacy</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium text-white/80">Tech</h4>
              <ul className="mt-3 space-y-2 text-sm text-white/60">
                <li>React & Next.js</li>
                <li>React Native</li>
                <li>MQTT & Timeseries</li>
                <li>Cloud Native</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium text-white/80">Social</h4>
              <ul className="mt-3 space-y-2 text-sm text-white/60">
                <li>LinkedIn</li>
                <li>Twitter/X</li>
                <li>GitHub</li>
                <li>Dribbble</li>
              </ul>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/60 md:flex-row"
        >
          <p>© {new Date().getFullYear()} Softech Solutions. All rights reserved.</p>
          <p className="text-white/50">Built with care — performance, accessibility, and craft.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
