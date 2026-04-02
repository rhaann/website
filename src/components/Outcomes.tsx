import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Outcomes: React.FC = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  };

  const outcomes = [
    'A clear, prioritized AI roadmap',
    'Identified automation & efficiency gains',
    'Visibility into untapped data-driven insights',
    'A team aligned on where to focus',
    'Faster execution with less risk',
    'Confidence in where to invest \u2013 and where not to',
  ];

  return (
    <section id="outcomes" className="relative bg-white overflow-hidden">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
            {/* Left — text content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="py-14 sm:py-16 lg:py-20 lg:pr-12"
            >
              <motion.div variants={fadeUp} className="mb-8">
                <span className="inline-flex items-center gap-3 text-sharp-orange text-xs font-medium tracking-[0.2em] uppercase mb-6">
                  <span className="w-8 h-px bg-sharp-orange/40" />
                  Outcomes
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-navy-black leading-[1.5] whitespace-nowrap">
                  What you walk away with
                </h2>
              </motion.div>

              <motion.ul variants={stagger} className="space-y-0">
                {outcomes.map((item) => (
                  <motion.li
                    key={item}
                    variants={fadeUp}
                    className="flex items-start gap-4 py-3.5 border-b border-navy-black/8"
                  >
                    <span className="mt-0.5 w-6 h-6 rounded-full bg-sky-blue/10 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-sky-blue" strokeWidth={2.5} />
                    </span>
                    <span className="text-navy-black/70 text-base sm:text-lg leading-relaxed">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Right — blue gradient that bleeds to viewport edge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative flex items-center py-8 lg:py-0"
            >
              {/* Blue halo around the image — color on the outside, clear in the center */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div
                  className="w-full h-full blur-[50px] opacity-50"
                  style={{ background: 'radial-gradient(circle, transparent 25%, #90c8f0 55%, #c4e0f8 75%, transparent 100%)' }}
                />
              </div>
              <img
                src="/5.png"
                alt="Outcomes visualization"
                className="relative z-10 w-full h-auto lg:scale-[1.3] lg:translate-x-6"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Outcomes;
