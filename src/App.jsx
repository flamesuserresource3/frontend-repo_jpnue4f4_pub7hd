import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { motion } from 'framer-motion';

const About = () => (
  <section id="about" className="relative w-full bg-slate-950 py-20 text-white">
    <div className="mx-auto max-w-7xl px-6">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Softech Solutions</h2>
          <p className="mt-4 text-white/70">
            We are a product‑driven technology company specialized in end‑to‑end delivery: strategy, design, engineering,
            and scale. Our teams have shipped platforms used by millions, with reliability and performance at the core.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-white/70">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-2xl font-semibold text-white">50+ </p>
              <p>Projects delivered</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-2xl font-semibold text-white">10yr</p>
              <p>Leadership experience</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-2xl font-semibold text-white">24/7</p>
              <p>Global support</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-2xl font-semibold text-white">A+</p>
              <p>Quality and security</p>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/10 via-sky-500/10 to-indigo-500/10 p-1">
            <div className="rounded-2xl bg-slate-900/60 p-6">
              <ul className="space-y-3 text-sm text-white/70">
                <li>• Discovery & product strategy</li>
                <li>• UI/UX, design systems, accessibility</li>
                <li>• Web, mobile, and IoT engineering</li>
                <li>• Cloud, security, and observability</li>
                <li>• Ongoing support and growth</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="relative w-full bg-slate-950 py-20 text-white">
    <div className="mx-auto max-w-7xl px-6">
      <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 p-8">
        <h2 className="text-2xl font-semibold">Let’s build something great</h2>
        <p className="mt-2 max-w-2xl text-white/70">
          Tell us about your goals and timelines. We’ll get back within one business day.
        </p>
        <form className="mt-6 grid gap-4 md:grid-cols-2">
          <input className="rounded-lg border border-white/10 bg-white/5 p-3 text-sm outline-none placeholder:text-white/40 focus:border-cyan-400" placeholder="Name" />
          <input className="rounded-lg border border-white/10 bg-white/5 p-3 text-sm outline-none placeholder:text-white/40 focus:border-cyan-400" placeholder="Email" type="email" />
          <input className="rounded-lg border border-white/10 bg-white/5 p-3 text-sm outline-none placeholder:text-white/40 focus:border-cyan-400 md:col-span-2" placeholder="Company" />
          <textarea className="h-28 rounded-lg border border-white/10 bg-white/5 p-3 text-sm outline-none placeholder:text-white/40 focus:border-cyan-400 md:col-span-2" placeholder="Project details" />
          <button type="button" className="inline-flex w-fit items-center justify-center rounded-xl bg-cyan-500 px-6 py-3 text-sm font-medium text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400">
            Send inquiry
          </button>
        </form>
      </div>
    </div>
  </section>
);

function App() {
  return (
    <div className="min-h-screen bg-slate-950 font-inter">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
