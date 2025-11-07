import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'NovaCommerce',
    tag: 'E‑commerce platform',
    description: 'Headless storefront powering 10k+ daily orders with real‑time inventory and personalized recommendations.',
    image:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2000&auto=format&fit=crop',
    badges: ['Next.js', 'GraphQL', 'Redis', 'Stripe'],
  },
  {
    title: 'Aether IoT Cloud',
    tag: 'IoT telemetry',
    description: 'Secure device ingestion pipeline handling millions of messages per day with rule‑based automations.',
    image:
      'https://images.unsplash.com/photo-1555696958-c5049b866f6a?q=80&w=2000&auto=format&fit=crop',
    badges: ['MQTT', 'Timeseries DB', 'K8s', 'Prometheus'],
  },
  {
    title: 'Pulse Mobile',
    tag: 'Health & fitness',
    description: 'Cross‑platform mobile app with offline‑first data and delightful micro‑interactions.',
    image:
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2000&auto=format&fit=crop',
    badges: ['React Native', 'Expo', 'Reanimated', 'Supabase'],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Selected work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-white/70"
          >
            A snapshot of projects that highlight our craftsmanship, reliability, and attention to detail.
          </motion.p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="#"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105 group-hover:brightness-110"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent opacity-90" />
              </div>
              <div className="relative p-6">
                <span className="text-xs uppercase tracking-wider text-cyan-300/80">{p.tag}</span>
                <h3 className="mt-2 text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-white/70">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.badges.map((b) => (
                    <span key={b} className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
