import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Map, Handshake, ArrowRight } from 'lucide-react';

const OurApproach: React.FC = () => {
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
      icon: Lightbulb,
      title: 'Get Clarity',
      badge: '<60 min session',
      summary: 'Understand where AI fits — and where it doesn\'t.',
      text: 'We align your leadership team on where AI actually creates value in your business. No jargon. No hype. Just clear answers.',
    },
    {
      num: '02',
      icon: Map,
      title: 'Build Your Blueprint',
      badge: 'Delivered in days',
      summary: 'Build your prioritized, actionable roadmap.',
      text: 'We map your workflows and data into a prioritized, actionable roadmap. You see exactly where to start and why.',
    },
    {
      num: '03',
      icon: Handshake,
      title: 'Execute with Confidence',
      badge: 'Ongoing advisory',
      summary: 'We support your team through implementation.',
      text: "We support your team as you implement — without creating dependency. You build capability, not reliance.",
    },
  ];

  return (
    <section id="ourApproach" className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
            className="text-center mb-16 md:mb-20"
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-3 text-navy-black/40 text-xs font-medium tracking-[0.2em] uppercase mb-6"
            >
              <span className="w-8 h-px bg-navy-black/20" />
              How It Works
              <span className="w-8 h-px bg-navy-black/20" />
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-black leading-[1.15] mb-5"
            >
              A clear path forward
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-navy-black/50 text-base sm:text-lg max-w-2xl mx-auto"
            >
              We built a structured approach to take you from AI uncertainty to confident
              execution — without wasted time, wasted spend, or dependency.
            </motion.p>
          </motion.div>

          {/* Timeline steps */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
            className="max-w-3xl mx-auto"
          >
            {steps.map((step, i) => (
              <motion.div key={step.num} variants={fadeUp} className="flex gap-6 sm:gap-8">
                {/* Timeline track */}
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-11 h-11 rounded-full border-2 border-sky-blue/30 bg-sky-blue/8 flex items-center justify-center text-sky-blue">
                    <step.icon size={18} strokeWidth={1.75} />
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 bg-sky-blue/15 my-2" />
                  )}
                </div>

                {/* Content */}
                <div className={`pb-12 ${i === steps.length - 1 ? 'pb-0' : ''}`}>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-sky-blue text-xs font-semibold tracking-wider uppercase">
                      Step {step.num}
                    </span>
                    <span className="text-navy-black/35 text-xs font-medium border border-navy-black/10 rounded-full px-3 py-0.5">
                      {step.badge}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-navy-black mb-2">
                    {step.title}
                  </h3>
                  <p className="text-navy-black/50 text-base leading-relaxed">
                    {step.text}
                  </p>
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
            className="text-center mt-14"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-sharp-orange hover:bg-sharp-orange/90 text-white font-medium text-base px-8 py-4 rounded-lg transition-colors duration-200"
            >
              Start with a Clarity Session
              <ArrowRight size={18} />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default OurApproach;
