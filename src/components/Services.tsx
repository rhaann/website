import React from 'react';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
  };

  const steps = [
    {
      num: '01',
      title: 'Get Clarity',
      text: 'We analyze your workflows, data, and economics to pinpoint high-impact opportunities.',
    },
    {
      num: '02',
      title: 'Build Your Blueprint',
      text: 'We quantify opportunity and create an actionable roadmap, so your team can focus on the few initiatives that will drive ROI.',
    },
    {
      num: '03',
      title: 'Execute with Confidence',
      text: 'We support your team as you implement — without creating dependency.',
    },
  ];

  return (
    <section id="services" className="bg-navy-black py-20 sm:py-24 lg:py-32">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-14 md:mb-20">
              <span className="inline-flex items-center gap-3 text-white/40 text-xs font-medium tracking-[0.2em] uppercase mb-6">
                <span className="w-8 h-px bg-white/25" />
                How We Work
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-white leading-[1.12] mb-5 max-w-2xl">
                How we work
              </h2>
              <p className="text-white/50 text-base sm:text-lg leading-relaxed max-w-2xl">
                We built a structured approach to take you from AI uncertainty to confident
                execution — without wasted time, wasted spend, or dependency.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="mb-14 md:mb-18">
              <span className="text-sky-blue text-xs font-semibold tracking-[0.15em] uppercase mb-2 block">
                The Actual Insight Catalyst
              </span>
              <div className="h-px bg-white/10 mt-6" />
            </motion.div>

            {steps.map((s) => (
              <motion.div key={s.num} variants={fadeUp} className="group">
                <div className="grid grid-cols-1 md:grid-cols-[80px_1fr] gap-6 md:gap-10 py-10 md:py-14 relative">
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-sky-blue scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500 hidden md:block" />

                  <span className="text-5xl sm:text-6xl font-extrabold text-white/10 leading-none group-hover:text-white/20 transition-colors duration-500 md:pl-4">
                    {s.num}
                  </span>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                      {s.title}
                    </h3>
                    <p className="text-white/50 text-base sm:text-lg leading-relaxed max-w-xl">
                      {s.text}
                    </p>
                  </div>
                </div>
                <div className="h-px bg-white/10" />
              </motion.div>
            ))}

            <motion.div
              variants={fadeUp}
              className="pt-14 md:pt-18 flex justify-center"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-navy-black font-semibold rounded-full text-base hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Book Your Intro Call
                <span>→</span>
              </a>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Services;
