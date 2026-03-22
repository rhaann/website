import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Layers, GraduationCap } from 'lucide-react';

const WhyUs: React.FC = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
  };

  const differentiators = [
    {
      icon: ShieldCheck,
      title: 'Independent by design',
      text: 'No platforms to push. No hidden incentives. We are vendor-agnostic by choice - because our only job is to get this right for your business.',
    },
    {
      icon: Layers,
      title: 'Built on real experience',
      text: 'Led by a veteran data engineer who has turned complex data environments into strategic advantage across real organizations - not case studies.',
    },
    {
      icon: GraduationCap,
      title: 'Designed to make you self-sufficient',
      text: "We don't create dependency. We build capability inside your team, so you leave with knowledge, not just a deliverable.",
    },
  ];

  return (
    <section id="whyUs" className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">

          {/* Two-column header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mb-16 md:mb-20"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-3 text-navy-black/40 text-xs font-medium tracking-[0.2em] uppercase mb-6">
                <span className="w-8 h-px bg-navy-black/20" />
                Why Actual Insight
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-navy-black leading-[1.12]">
                Three things that make us{' '}
                <span className="text-sky-blue">different</span>
              </h2>
            </motion.div>

            <motion.div variants={fadeUp} className="flex items-end">
              <p className="text-navy-black/55 text-base sm:text-lg leading-relaxed">
                Most AI consultants sell you their preferred tools and move on.
                We're designed differently - from how we're structured to how
                we measure success.
              </p>
            </motion.div>
          </motion.div>

          {/* Differentiator rows */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
          >
            {differentiators.map((d) => (
              <motion.div key={d.title} variants={fadeUp}>
                <div className="h-px bg-navy-black/8" />
                <div className="grid grid-cols-1 md:grid-cols-[48px_1fr_2fr] gap-5 md:gap-10 py-10 md:py-12 items-start">
                  <div className="w-10 h-10 rounded-lg bg-sky-blue/8 border border-sky-blue/15 flex items-center justify-center text-sky-blue">
                    <d.icon size={20} strokeWidth={1.75} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-navy-black leading-snug">
                    {d.title}
                  </h3>
                  <p className="text-navy-black/50 text-base leading-relaxed">
                    {d.text}
                  </p>
                </div>
              </motion.div>
            ))}
            <div className="h-px bg-navy-black/8" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyUs;
