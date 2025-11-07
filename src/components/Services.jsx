import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Smartphone, Cloud } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description:
      'High‑performance websites and web apps built with modern frameworks, scalable architectures, and impeccable UX.',
    highlights: ['React & Next.js', 'Design systems', 'Performance & SEO'],
  },
  {
    icon: Smartphone,
    title: 'App Development',
    description:
      'Native‑quality mobile apps with smooth interactions, offline‑first data, and reliable releases.',
    highlights: ['iOS & Android', 'React Native', 'CI/CD pipelines'],
  },
  {
    icon: Cpu,
    title: 'IoT & Edge',
    description:
      'End‑to‑end IoT platforms from firmware to cloud dashboards with secure device management and analytics.',
    highlights: ['Device telemetry', 'MQTT/HTTP', 'Real‑time dashboards'],
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    description:
      'Fault‑tolerant infrastructure, observability, and automation to ship confidently at any scale.',
    highlights: ['Kubernetes', 'Serverless', 'Monitoring & alerts'],
  },
];

const Services = () => {
  return (
    <section id="services" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold tracking-tight sm:text-4xl"
          >
            What we do
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-white/70"
          >
            Specialists in delivering reliable products with thoughtful design, robust engineering, and measurable outcomes.
          </motion.p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, description, highlights }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 p-6 shadow-lg"
            >
              <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100" style={{background: 'radial-gradient(600px circle at var(--x) var(--y), rgba(34,211,238,0.15), transparent 40%)'}} />
              <div className="relative">
                <div className="inline-flex items-center justify-center rounded-xl bg-cyan-500/10 p-3 text-cyan-400 ring-1 ring-cyan-500/30">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-white/70">{description}</p>
                <ul className="mt-4 space-y-1 text-sm text-white/60">
                  {highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
