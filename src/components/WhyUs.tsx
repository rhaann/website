import React from 'react';
import { motion } from 'framer-motion';

const WhyUs: React.FC = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
  };

  const differentiators = [
    {
      title: 'Independent by design',
      text: "No platforms to push. No hidden incentives. Just what's right for your business.",
    },
    {
      title: 'Built on real experience',
      text: 'Led by a veteran data engineer who has turned complex systems into strategic advantage.',
    },
    {
      title: 'Designed to make you self-sufficient',
      text: "We don't create dependency. We build capability inside your team.",
    },
  ];

  return (
    <section id="whyUs" className="relative bg-white overflow-hidden py-20 sm:py-24 lg:py-28">
      {/* Pattern background — right side only, fading toward the left */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/patternBlue.png)',
          backgroundSize: '400px',
          backgroundRepeat: 'repeat',
          opacity: 0.06,
          maskImage: 'linear-gradient(to left, black 20%, transparent 60%)',
          WebkitMaskImage: 'linear-gradient(to left, black 20%, transparent 60%)',
        }}
      />

      <div className="container-custom relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            {/* Label */}
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-3 text-sharp-orange text-xs font-medium tracking-[0.2em] uppercase mb-6"
            >
              <span className="w-8 h-px bg-sharp-orange/40" />
              Why Actual Insight
            </motion.span>

            {/* Headline */}
            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold leading-[1.5] mb-10"
            >
              <span className="text-sky-blue">Built from</span>
              <span className="text-navy-black"> real-world experience.</span>
            </motion.h2>

            {/* Two-column: text left, photo right */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-start">
              {/* Left — bio + differentiators */}
              <motion.div variants={fadeUp} className="space-y-6">
                <p className="text-navy-black/55 text-base sm:text-lg leading-relaxed">
                  Actual Insight was founded by{' '}
                  <strong className="text-navy-black font-semibold">Alex Morton</strong>, a data
                  engineer and analytics leader who has spent over a decade helping organizations
                  turn complex data environments into{' '}
                  <strong className="text-navy-black font-semibold">strategic advantage</strong>.
                </p>

                {differentiators.map((d) => (
                  <div key={d.title}>
                    <h3 className="text-navy-black font-bold text-base leading-snug mb-1">
                      {d.title}
                    </h3>
                    <p className="text-navy-black/50 text-base leading-relaxed">{d.text}</p>
                  </div>
                ))}
              </motion.div>

              {/* Right — photo + button */}
              <motion.div
                variants={fadeUp}
                className="flex flex-col items-center shrink-0"
              >
                <div className="w-52 h-52 sm:w-64 sm:h-64 rounded-full bg-navy-black/6 border-2 border-sky-blue/25 overflow-hidden">
                  <img src="/Alex.jpeg" alt="Alex Morton" className="w-full h-full object-cover" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
