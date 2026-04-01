import React from 'react';
import { motion } from 'framer-motion';

const WhoItsFor: React.FC = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
  };

  const audiences = [
    {
      title: 'Operators & Leaders',
      text: "You know AI matters, but don\u2019t have time to figure it out from scratch.",
    },
    {
      title: 'Private Equity Firms',
      text: 'Drive AI strategy across your portfolio with a repeatable, scalable approach.',
    },
    {
      title: 'Consulting Firms',
      text: 'Bring AI capability to your clients without building it all internally.',
    },
  ];

  return (
    <section id="whoItsFor" className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
            className="mb-14 md:mb-20"
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-3 text-sharp-orange text-xs font-medium tracking-[0.2em] uppercase mb-6"
            >
              <span className="w-8 h-px bg-sharp-orange/40" />
              Who It's For
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-navy-black leading-[1.5] mb-4"
            >
              Built for operators,{' '}
              <span className="text-sky-blue">not AI experts.</span>
            </motion.h2>
          </motion.div>

          {/* Cards — flat, no borders, separated by orange lines */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-0  rounded-xl p-6 sm:p-8"
          >
            {audiences.map((a, i) => (
              <motion.div
                key={a.title}
                variants={fadeUp}
                className={`py-2 ${
                  i < audiences.length - 1 ? 'border-b md:border-b-0 md:border-r border-sharp-orange/30' : ''
                }`}
              >
                <div className="px-8 sm:px-10">
                  <h3 className="text-lg sm:text-xl font-bold text-navy-black mb-4">
                    {a.title}
                  </h3>
                  <div className="w-full h-px bg-sharp-orange/50 mb-4" />
                  <p className="text-navy-black/50 text-[15px] leading-relaxed">
                    {a.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
