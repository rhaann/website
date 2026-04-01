import React from 'react';
import { motion } from 'framer-motion';

const Problem: React.FC = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };

  const painPoints = [
    'Your board is asking what your AI strategy is.',
    'Your team is testing tools, but nothing is scaling.',
    'Vendors are promising transformation but selling generic playbooks.',
    'None of it is showing up in revenue, margin, or efficiencies.',
  ];

  return (
    <section id="problem" className="bg-[#f8fbff] pt-20 sm:pt-24 lg:pt-32 pb-10 sm:pb-12 lg:pb-14">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="max-w-6xl mx-auto"
        >
          {/* Headline */}
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-navy-black leading-[1.5] mb-16 md:mb-20"
          >
            AI is moving fast.
            <br />
            <span className="text-sky-blue">Your business isn't.</span>
          </motion.h2>

          {/* 2x2 grid of pain points */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-1 sm:grid-cols-2 gap-0 mb-16 md:mb-20"
          >
            {painPoints.map((point, i) => (
              <div
                key={i}
                className={`p-6 sm:p-8 flex items-start gap-4 ${
                  i < 2 ? 'border-b border-navy-black/15' : ''
                } ${i % 2 === 0 ? 'sm:border-r sm:border-navy-black/15' : ''}`}
              >
                <span className="text-sharp-orange/70 text-sm font-semibold mt-0.5 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-navy-black/65 text-base sm:text-lg leading-relaxed font-medium">
                  {point}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Divider with label */}
          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-10 md:mb-12">
            <div className="flex-1 h-px bg-navy-black/10" />
            <span className="text-navy-black/30 text-[11px] font-semibold tracking-[0.2em] uppercase">
              The Real Issue
            </span>
            <div className="flex-1 h-px bg-navy-black/10" />
          </motion.div>

          {/* Bottom statement */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 mb-12 md:mb-14"
          >
            <div className="flex items-start gap-4">
              <div className="w-1 self-stretch bg-sharp-orange rounded-full shrink-0" />
              <p className="text-navy-black/70 text-lg sm:text-xl font-medium leading-snug">
                The issue isn't effort.
              </p>
            </div>
            <p className="text-navy-black text-xl sm:text-2xl font-bold leading-snug">
              It's knowing where AI will actually make a difference.
            </p>
          </motion.div>

          
        </motion.div>
      </div>
    </section>
  );
};

export default Problem;
