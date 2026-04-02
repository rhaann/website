import React from 'react';
import { motion } from 'framer-motion';

const Problem: React.FC = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };

  const painPoints = [
    'Your board is asking what your AI strategy is.',
    'Your team is testing tools, but nothing is scaling.',
    'Vendors are promising transformation but selling generic playbooks.',
    'None of it is showing up in revenue, margin, or efficiencies.',
  ];

  return (
    <section id="problem" className="relative bg-[#f8fbff] pt-20 sm:pt-24 lg:pt-32 pb-10 sm:pb-12 lg:pb-14 overflow-hidden">
      {/* Blue gradient from top-right */}
      <div
        className="absolute top-0 right-0 w-[50%] h-[60%] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top right, rgba(0,144,255,0.08) 0%, transparent 70%)' }}
      />
      <div className="container-custom relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="max-w-6xl mx-auto"
        >
          {/* Headline */}
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-navy-black leading-[1.5] mb-16 md:mb-20"
          >
            AI is moving fast.
            <br />
            <span className="text-sky-blue">Your business isn't.</span>
          </motion.h2>

          {/* Bullet points */}
          <motion.ul variants={stagger} className="mb-16 md:mb-20">
            {painPoints.map((point, i) => (
              <motion.li
                key={i}
                variants={fadeUp}
                className={`flex items-start gap-4 py-5 ${
                  i < painPoints.length - 1 ? 'border-b border-navy-black/10' : ''
                }`}
              >
                <span className="mt-2.5 w-2 h-2 rounded-full bg-sharp-orange/60 shrink-0" />
                <p className="text-navy-black/65 text-lg sm:text-xl leading-relaxed font-medium">
                  {point}
                </p>
              </motion.li>
            ))}
          </motion.ul>


          
        </motion.div>
      </div>
    </section>
  );
};

export default Problem;
