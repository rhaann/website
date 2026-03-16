import React from 'react';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.5, delayChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
  };

  const services = [
    {
      num: '01',
      title: 'Literacy\n& Education',
      text: "We bring your leadership and technical teams up to speed on the AI landscape - what's real, what's hype, and what's actually relevant to your industry. Delivered as focused sessions tailored to your organization.",
    },
    {
      num: '02',
      title: 'Blueprint',
      text: "A structured assessment of your current systems, data infrastructure, and workflows. We identify where AI creates genuine value in your business and where it doesn't - with no agenda attached to the answer.",
    },
    {
      num: '03',
      title: 'Advisory',
      text: "A prioritized, realistic plan for where and how AI fits into your business. Built on your data, your team's capabilities, and your operational reality - not a generic framework.",
    },
  ];

  return (
    <section id="services" className="py-16 md:py-20 bg-navy-black">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-8">
            <div className="max-w-2xl">
              <span className="text-sharp-orange text-sm font-medium tracking-[0.2em] uppercase mb-5 block">
                What We Do
              </span>
              <h2 className="text-4xl md:text-[3.25rem] md:leading-[1.15] font-extrabold text-white">
                Three ways we work with your organization.
              </h2>
            </div>
            <p className="text-white/50 text-base md:text-lg max-w-sm md:text-right">
              Each engagement can stand alone or build toward a complete AI strategy.
            </p>
          </div>

          <div className="h-px bg-white/10" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {services.map((service) => (
              <motion.div key={service.num} variants={itemVariants}>
                <div className="grid grid-cols-1 md:grid-cols-[80px_1fr_1.4fr_auto] gap-6 md:gap-8 items-start py-10 md:py-12">
                  <span className="text-sharp-orange text-sm font-medium tracking-wider">
                    {service.num}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white whitespace-pre-line leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-white/50 text-base leading-relaxed">
                    {service.text}
                  </p>
                  <a
                    href="#contact"
                    className="text-white/40 text-sm font-medium tracking-[0.15em] uppercase hover:text-sharp-orange transition-colors duration-300 flex items-center gap-2 self-start mt-1"
                  >
                    Learn More
                    <span className="text-base">→</span>
                  </a>
                </div>
                <div className="h-px bg-white/10" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
