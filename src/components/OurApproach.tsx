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

  return (
    <section id="ourApproach" className="section-padding bg-pure-white">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">
              Faster, Leaner, Smarter AI Deployment
            </h2>
          </div>

          {/*
            Previous layout: Comparison Grid (Our Approach vs Traditional Approach)
            Keeping this block for reference while experimenting with the new 3-row layout.
            <div className="grid lg:grid-cols-2 gap-8"> ... </div>
          */}

          {/* New 3-row layout: Faster, Leaner, Smarter */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.9 }}
            className="max-w-4xl mx-auto space-y-8"
          >
            {/* Faster */}
            <motion.div variants={itemVariants} className="flex flex-col md:flex-row md:items-start md:gap-6 bg-grey-lighter/40 rounded-2xl p-8">
              <div className="md:w-48 shrink-0 mb-2 md:mb-0">
                <h3 className="text-2xl font-bold text-navy-black">Faster</h3>
            </div>
              <p className="text-lg text-navy-black/80">
                Launch meaningful pilots in weeks, not months—using a focused roadmap and proven accelerators.
              </p>
            </motion.div>
            {/* Leaner */}
            <motion.div variants={itemVariants} className="flex flex-col md:flex-row md:items-start md:gap-6 bg-grey-lighter/40 rounded-2xl p-8">
              <div className="md:w-48 shrink-0 mb-2 md:mb-0">
                <h3 className="text-2xl font-bold text-navy-black">Leaner</h3>
            </div>
              <p className="text-lg text-navy-black/80">
                Target the highest‑ROI workflows first, avoid platform bloat, and keep ownership of your stack.
              </p>
            </motion.div>
            {/* Smarter */}
            <motion.div variants={itemVariants} className="flex flex-col md:flex-row md:items-start md:gap-6 bg-grey-lighter/40 rounded-2xl p-8">
              <div className="md:w-48 shrink-0 mb-2 md:mb-0">
                <h3 className="text-2xl font-bold text-navy-black">Smarter</h3>
          </div>
              <p className="text-lg text-navy-black/80">
                Solutions grounded in your data and operations—measured by outcomes, not demos.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurApproach; 