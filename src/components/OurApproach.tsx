import React, { useState } from 'react';
import { motion } from 'framer-motion';

const OurApproach: React.FC = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
  };

  const steps = [
    {
      num: '01',
      title: 'Get Clarity',
      text: 'We analyze your workflows, data, and economics to pinpoint high-impact opportunities.',
      label: 'Diagnose',
      bullets: [
        'Map existing workflows and data sources',
        'Identify bottlenecks and manual processes',
        'Score opportunities by effort vs. impact',
        'Deliver a prioritized shortlist in days',
      ],
    },
    {
      num: '02',
      title: 'Build Your Blueprint',
      text: 'We quantify opportunity and create an actionable roadmap, so your team can focus on the few initiatives that will drive ROI.',
      label: 'Prioritize',
      bullets: [
        'Quantify expected ROI per initiative',
        'Define build vs. buy recommendations',
        'Create a phased implementation timeline',
        'Align stakeholders around a single plan',
      ],
    },
    {
      num: '03',
      title: 'Execute with Confidence',
      text: 'We support your team as you implement - without creating dependency.',
      label: 'Implement',
      bullets: [
        'Hands-on support through first deployment',
        'Knowledge transfer to your internal team',
        'Measure results against projected ROI',
        'Iterate and scale what\u2019s working',
      ],
    },
  ];

  const [flipped, setFlipped] = useState<number | null>(null);

  return (
    <section id="ourApproach" className="bg-[#e8f1fb] py-20 sm:py-24 lg:py-32">
      <div className="container-custom">
        <div className="max-w-7xl mx-auto">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            {/* Header */}
            <motion.div variants={fadeUp} className="mb-14 md:mb-18">
              <span className="inline-flex items-center gap-3 text-sharp-orange text-xs font-medium tracking-[0.2em] uppercase mb-6">
                <span className="w-8 h-px bg-sharp-orange/40" />
                How We Work
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-navy-black leading-[1.15] mb-5 max-w-2xl">
                A structured path from AI uncertainty to{' '}
                <span className="text-sky-blue font-bold">execution.</span>
              </h2>
              <p className="text-navy-black/55 text-base sm:text-lg leading-relaxed max-w-2xl">
                We built a structured approach to take you from AI uncertainty to confident
                execution - without wasted time, wasted spend, or dependency.
              </p>
            </motion.div>

            {/* Three flip cards */}
            <motion.div
              variants={stagger}
              className="grid grid-cols-1 md:grid-cols-3 gap-0 mb-14 md:mb-18"
            >
              {steps.map((s, i) => (
                <motion.div
                  key={s.num}
                  variants={fadeUp}
                  className="border-r last:border-r-0 border-navy-black/10 border-b md:border-b-0"
                  style={{ perspective: '1000px' }}
                  onMouseEnter={() => setFlipped(i)}
                  onMouseLeave={() => setFlipped(null)}
                >
                  <div
                    className="relative w-full h-[320px] transition-transform duration-500"
                    style={{
                      transformStyle: 'preserve-3d',
                      transform: flipped === i ? 'rotateY(180deg)' : 'rotateY(0deg)',
                    }}
                  >
                    {/* Front */}
                    <div
                      className="absolute inset-0 p-8 sm:p-10 flex flex-col"
                      style={{ backfaceVisibility: 'hidden' }}
                    >
                      <div className="flex items-center gap-4 mb-8">
                        <span className="text-sky-blue text-sm font-bold">{s.num}</span>
                        <div className="flex-1 h-px bg-navy-black/10" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-navy-black mb-4 leading-snug">
                        {s.title}
                      </h3>
                      <p className="text-navy-black/50 text-base leading-relaxed flex-1 mb-6">
                        {s.text}
                      </p>
                      <span className="inline-flex items-center gap-2 text-navy-black/35 text-xs font-medium tracking-[0.15em] uppercase mt-auto">
                        <span className="w-5 h-px bg-navy-black/20" />
                        {s.label}
                      </span>
                    </div>

                    {/* Back */}
                    <div
                      className="absolute inset-0 p-8 sm:p-10 flex flex-col bg-navy-black rounded-lg"
                      style={{
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
                      }}
                    >
                      <div className="flex items-center gap-4 mb-5">
                        <span className="text-sky-blue text-sm font-bold">{s.num}</span>
                        <div className="flex-1 h-px bg-white/10" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-5 leading-snug">
                        {s.title}
                      </h3>
                      <ul className="space-y-3.5 flex-1">
                        {s.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-3">
                            <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-sky-blue" />
                            <span className="text-white/70 text-sm leading-relaxed">{b}</span>
                          </li>
                        ))}
                      </ul>
                      <span className="inline-flex items-center gap-2 text-white/30 text-xs font-medium tracking-[0.15em] uppercase mt-auto">
                        <span className="w-5 h-px bg-white/15" />
                        {s.label}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Bottom CTA strip */}
            <motion.div
              variants={fadeUp}
              className="border-t border-navy-black/10 pt-10 md:pt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
            >
              <div>
                <span className="text-navy-black/40 text-xs font-semibold tracking-[0.15em] uppercase block mb-1">
                  The Actual Insight Catalyst
                </span>
                <p className="text-navy-black/50 text-sm sm:text-base">
                  No wasted time. No wasted spend. No dependency.
                </p>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-navy-black text-white font-semibold rounded-full text-base hover:shadow-lg hover:scale-105 transition-all duration-300 shrink-0"
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

export default OurApproach;
