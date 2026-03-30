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
    <section id="outcomes" className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="container-custom">
        <div className="max-w-7xl mx-auto">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16 items-end"
          >
            {/* Left — text content */}
            <div>
              <motion.div variants={fadeUp} className="mb-10">
                <span className="inline-flex items-center gap-3 text-sharp-orange text-xs font-medium tracking-[0.2em] uppercase mb-6">
                  <span className="w-8 h-px bg-sharp-orange/40" />
                  Outcomes
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-navy-black leading-[1.12]">
                  What you walk away with
                </h2>
              </motion.div>

              <motion.ul variants={stagger} className="space-y-0">
                {outcomes.map((item) => (
                  <motion.li
                    key={item}
                    variants={fadeUp}
                    className="flex items-start gap-4 py-4 border-b border-navy-black/8"
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
            </div>

            {/* Right — image placeholder */}
            <motion.div
              variants={fadeUp}
              className="relative rounded-2xl overflow-hidden"
            >
              <img
                src="/image.png"
                alt="Outcomes visualization"
                className="w-full h-auto rounded-2xl"
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Outcomes;
