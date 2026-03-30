import React from 'react';
import { motion } from 'framer-motion';

const Reframe: React.FC = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };

  const mistakes = [
    'Spread effort across too many ideas',
    'Focus on tools instead of outcomes',
    'Build without a clear path to ROI',
    'Stay busy, stay fragmented, and ultimately fall behind',
  ];

  const solutions = [
    'Identify workflows with the highest ROI',
    'Quantify impact before you build anything',
    'Execute with a clear path to outcomes',
  ];

  return (
    <section id="reframe" className="bg-[#f8fbff] py-20 sm:py-24 lg:py-32">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-3 text-sharp-orange text-xs font-medium tracking-[0.2em] uppercase mb-6">
              <span className="w-8 h-px bg-sharp-orange/40" />
              Reframe
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-navy-black leading-[1.12] mb-5 max-w-3xl"
          >
            AI only works if you apply it{' '}
            <span className="text-sky-blue">in the right places.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-navy-black/55 text-base sm:text-lg leading-relaxed mb-12 md:mb-16 max-w-2xl"
          >
            In most businesses, a small number of workflows drive the majority of impact.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 md:mb-16"
          >
            {/* Left card */}
            <div className="border border-navy-black/10 rounded-2xl p-8 sm:p-10 bg-white shadow-[0_8px_40px_-12px_rgba(0,0,0,0.12)] hover:-translate-y-1 hover:shadow-[0_16px_50px_-12px_rgba(0,0,0,0.18)] transition-all duration-300">
              <span className="text-navy-black/40 text-[11px] font-semibold tracking-[0.18em] uppercase mb-6 block">
                But Most Teams
              </span>
              <ul className="space-y-5">
                {mistakes.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 2l6 6M8 2l-6 6" stroke="#EF4444" strokeWidth="1.8" strokeLinecap="round" />
                      </svg>
                    </span>
                    <span className="text-navy-black/70 text-[15px] sm:text-base leading-relaxed font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right card */}
            <div className="rounded-2xl p-8 sm:p-10 bg-sky-blue text-white shadow-[0_8px_40px_-12px_rgba(0,144,255,0.35)] hover:-translate-y-1 hover:shadow-[0_16px_50px_-12px_rgba(0,144,255,0.45)] transition-all duration-300">
              <span className="text-white/60 text-[11px] font-semibold tracking-[0.18em] uppercase mb-6 block">
                What We Do Instead
              </span>
              <p className="text-xl sm:text-2xl font-bold leading-snug mb-8">
                We help you focus on the use cases that actually move the business.
              </p>
              <ul className="space-y-5">
                {solutions.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5.5l2 2 4-4.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="text-white/90 text-[15px] sm:text-base leading-relaxed font-semibold">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="text-navy-black/40 text-sm sm:text-base italic"
          >
            No wasted time. No wasted spend. No dependency.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Reframe;
