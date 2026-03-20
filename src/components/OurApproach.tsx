import React from 'react';
import { motion } from 'framer-motion';

const OurApproach: React.FC = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  };

  const pillars = [
    {
      num: '01',
      label: 'Foundation',
      titleWhite: 'Strategy',
      titleAccent: 'before\nsoftware.',
      text: 'Every failed AI initiative started with a tool purchase. We start with your business - your workflows, your data, your goals - and build the strategy first. Tools come last, if at all.',
    },
    {
      num: '02',
      label: 'Model',
      titleWhite: 'Built to',
      titleAccent: 'transfer\nownership.',
      text: "We don't build systems you'll depend on us to maintain. Every engagement is designed to leave your team more capable and confident than we found them. You own the roadmap. You own the execution.",
    },
    {
      num: '03',
      label: 'Fit',
      titleWhite: 'Priced for',
      titleAccent: 'the middle\nmarket.',
      text: "You don't need a 200-person consulting team to build a great AI strategy. You need the right people, the right process, and a plan your team can actually own and execute.",
    },
  ];


  return (
    <section id="ourApproach" className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">

          {/* ── Two-column header ── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-20"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-3 text-navy-black/40 text-xs font-medium tracking-[0.2em] uppercase mb-8">
                <span className="w-8 h-px bg-navy-black/20" />
                Our Approach
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-navy-black leading-[1.1]">
                The bottleneck isn't{' '}
                <span className="text-sky-blue">technology.</span>
                <br />
                It never was.
              </h2>
            </motion.div>

            <motion.div variants={fadeUp} className="md:border-t md:border-navy-black/10 md:pt-8">
              <p className="text-navy-black/55 text-base sm:text-lg leading-relaxed mb-6">
                AI investment is accelerating. Execution is failing. Most mid-market
                organizations know they need to move — but they don't have the internal
                expertise, and they can't justify{' '}
                <strong className="text-navy-black font-semibold">enterprise consulting fees</strong>{' '}
                for a generic framework that collects dust.
              </p>
              <p className="text-navy-black/55 text-base sm:text-lg leading-relaxed">
                We sit in exactly that gap.{' '}
                <strong className="text-navy-black font-semibold">
                  Strategic depth without the overhead.
                </strong>{' '}
                A model built to create capability, not dependency.
              </p>
            </motion.div>
          </motion.div>

          {/* ── Three-column pillars ── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-navy-black/10">
              {pillars.map((p) => (
                <motion.div
                  key={p.num}
                  variants={fadeUp}
                  className="p-8 sm:p-10"
                >
                  <span className="text-navy-black/35 text-xs font-medium tracking-[0.15em] uppercase block mb-6">
                    {p.num} — {p.label}
                  </span>
                  <h3 className="text-2xl sm:text-[1.7rem] font-bold text-navy-black leading-tight mb-5">
                    {p.titleWhite}
                    <br />
                    <span className="text-sky-blue whitespace-pre-line">{p.titleAccent}</span>
                  </h3>
                  <p className="text-navy-black/50 text-sm sm:text-base leading-relaxed">
                    {p.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

         

        </div>
      </div>
    </section>
  );
};

export default OurApproach;
