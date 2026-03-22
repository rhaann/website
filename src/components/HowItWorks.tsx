import React from 'react';
import { motion } from 'framer-motion';

const HowItWorks: React.FC = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
  };

  const steps = [
    {
      num: '01',
      title: 'Get Clarity',
      badge: '<60 min session',
      text: 'We align your leadership team on where AI actually creates value in your business. No jargon. No hype. Just clear answers.',
    },
    {
      num: '02',
      title: 'Build Your Blueprint',
      badge: 'Delivered in days',
      text: 'We map your workflows and data into a prioritized, actionable roadmap. You see exactly where to start and why.',
    },
    {
      num: '03',
      title: 'Execute with Confidence',
      badge: 'Ongoing advisory',
      text: 'We support your team as you implement - without creating dependency. You build capability, not reliance.',
    },
  ];

  return (
    <section id="howItWorks" className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">

          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
            className="text-center mb-14 md:mb-18"
          >
            <motion.span
              variants={fadeUp}
              className="inline-block text-navy-black/50 text-xs font-medium tracking-[0.15em] uppercase border border-navy-black/12 rounded-full px-4 py-1.5 mb-6"
            >
              How It Works
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-black leading-[1.15]"
            >
              Three steps to AI clarity
            </motion.h2>
          </motion.div>

          {/* Steps */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
            className="space-y-5"
          >
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                variants={fadeUp}
                className="border border-navy-black/10 rounded-xl p-6 sm:p-8 hover:border-sky-blue/30 transition-colors duration-300"
              >
                <div className="flex items-start gap-5">
                  {/* Number + connector */}
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-10 h-10 rounded-full bg-sky-blue/10 border-2 border-sky-blue/30 flex items-center justify-center text-sky-blue text-sm font-bold">
                      {step.num}
                    </div>
                    {i < steps.length - 1 && (
                      <div className="w-px h-6 bg-sky-blue/20 mt-2" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="pt-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-lg sm:text-xl font-bold text-navy-black">
                        {step.title}
                      </h3>
                      <span className="text-navy-black/40 text-xs font-medium border border-navy-black/12 rounded-full px-3 py-1">
                        {step.badge}
                      </span>
                    </div>
                    <p className="text-navy-black/50 text-sm sm:text-base leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mt-12"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-sky-blue hover:bg-dark-sky-blue text-white font-medium text-base px-8 py-4 rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Start with a Clarity Session
              <span>→</span>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
