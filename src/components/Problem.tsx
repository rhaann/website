import React from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, Shuffle, HelpCircle } from 'lucide-react';

const Problem: React.FC = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
  };

  const problems = [
    {
      icon: TrendingDown,
      title: 'Sold on the headline, not the outcome',
      text: "Every week there's a new tool. Most companies invest before they know how it creates value. You end up with solutions looking for a problem, not results.",
    },
    {
      icon: Shuffle,
      title: "Generic playbooks don't fit your business",
      text: "Most AI strategies ignore what makes your company unique: your data, your workflows, your constraints. The result isn't wrong. It's irrelevant.",
    },
    {
      icon: HelpCircle,
      title: "You can only see what's obvious",
      text: "The highest-value opportunities aren't visible. They're buried in your workflows and data - and most teams don't know where to look.",
    },
  ];

  return (
    <section id="problem" className="bg-white py-20 sm:py-24 lg:py-32">
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
                The Problem
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-navy-black leading-[1.12]">
                Why most AI efforts stall before they{' '}
                <span className="text-sky-blue">create impact</span>
              </h2>
            </motion.div>

            <motion.div variants={fadeUp} className="flex items-end">
              <p className="text-navy-black/55 text-base sm:text-lg leading-relaxed">
                It's not the tools. It's what happens before them. Most organizations
                get stuck in one of three places - and none of them are technical.
              </p>
            </motion.div>
          </motion.div>

          {/* Problem rows with dividers */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
          >
            {problems.map((p) => (
              <motion.div key={p.title} variants={fadeUp}>
                <div className="h-px bg-navy-black/8" />
                <div className="grid grid-cols-1 md:grid-cols-[48px_1fr_2fr] gap-5 md:gap-10 py-10 md:py-12 items-start">
                  <div className="w-10 h-10 rounded-lg bg-sky-blue/8 border border-sky-blue/15 flex items-center justify-center text-sky-blue">
                    <p.icon size={20} strokeWidth={1.75} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-navy-black leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-navy-black/50 text-base leading-relaxed">
                    {p.text}
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

export default Problem;
