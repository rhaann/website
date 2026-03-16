import React from 'react';
import { motion } from 'framer-motion';

const OurApproach: React.FC = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.6, delayChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9 } }
  };

  const pillars = [
    {
      num: '01',
      title: 'Independent by Design',
      text: 'Our recommendations are conflict-free. We have no platforms to push, no partnerships to protect, and no incentive other than your success.',
    },
    {
      num: '02',
      title: 'Grounded in Experience',
      text: 'Actual Insight was founded by a veteran data engineer with over a decade of experience turning complex data environments into strategic advantage.',
    },
    {
      num: '03',
      title: 'Built to Last',
      text: "We don't create dependency. Every engagement is designed to leave your team more capable, more confident, and less reliant on outside help.",
    },
  ];

  return (
    <section id="ourApproach" className="section-padding bg-grey-lighter/50">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <span className="text-sharp-orange text-sm font-medium tracking-[0.2em] uppercase mb-5 block">
            Why Us?
          </span>

          <h2 className="text-4xl md:text-[3.25rem] md:leading-[1.15] font-extrabold text-navy-black mb-5">
            Enhance your existing strategy with clarity, not complexity.
          </h2>
          <p className="text-navy-black/50 text-base md:text-lg max-w-xl mb-16">
            We're not here to sell you something. We're here to help you get the most out of your existing tools and data.
          </p>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="grid md:grid-cols-3 gap-10 md:gap-12"
          >
            {pillars.map((pillar) => (
              <motion.div key={pillar.num} variants={itemVariants} className="flex flex-col">
                {/* Orange top line */}
                <div className="w-16 h-[3px] bg-sharp-orange mb-10" />

                {/* Number */}
                <span className="text-sm font-medium tracking-wider text-navy-black/50 mb-3">
                  {pillar.num}
                </span>

                {/* Title */}
                <h3 className="text-2xl font-bold text-navy-black mb-4">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-base leading-relaxed text-navy-black/60">
                  {pillar.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
