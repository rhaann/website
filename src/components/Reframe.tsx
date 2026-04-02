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

  const problems = [
    'Spread effort across too many ideas',
    'Focus on tools instead of outcomes',
    'Build without a clear path to ROI',
    'Stay busy, stay fragmented, and fall behind',
  ];

  return (
    <section id="reframe" className="bg-[#f0f6fe] py-14 sm:py-16 lg:py-20">
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
            className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-navy-black leading-[1.5] mb-14 md:mb-18"
          >
            AI only works if you apply it{' '}
            <span className="text-sky-blue">in the right places.</span>
          </motion.h2>

          {/* Two-column: body text left, numbered list right */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16"
          >
            {/* Left — narrative text */}
            <div className="space-y-6 pt-5">
              <p className="text-navy-black/55 text-lg sm:text-xl leading-relaxed">
                In most businesses, a small number of workflows drive the majority of impact.
                The opportunity is concentrated - but most teams never find it.
              </p>
            </div>

            {/* Right — numbered list */}
            <div>
              {problems.map((item, i) => (
                <div
                  key={item}
                  className={`flex items-start gap-5 py-5 ${
                    i < problems.length - 1 ? 'border-b border-navy-black/10' : ''
                  }`}
                >
                  <span className="mt-2.5 w-2 h-2 rounded-full bg-sharp-orange/60 shrink-0" />
                  <p className="text-navy-black/65 text-base sm:text-lg leading-relaxed font-medium">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Reframe;
