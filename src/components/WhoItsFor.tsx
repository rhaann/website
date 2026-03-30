import React from 'react';
import { motion } from 'framer-motion';
import { Users, BarChart3, Building2 } from 'lucide-react';

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
      icon: Users,
      title: 'Operators & Leaders',
      text: "You know AI matters, but don't have time to figure it out from scratch.",
    },
    {
      icon: BarChart3,
      title: 'Private Equity Firms',
      text: 'Drive AI strategy across your portfolio with a repeatable, scalable approach.',
    },
    {
      icon: Building2,
      title: 'Consulting Firms',
      text: 'Bring AI capability to your clients without building it all internally.',
    },
  ];

  return (
    <section id="whoItsFor" className="bg-navy-black py-20 sm:py-24 lg:py-32">
      <div className="container-custom">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
            className="text-center mb-14 md:mb-20"
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-3 text-sharp-orange text-xs font-medium tracking-[0.2em] uppercase mb-6"
            >
              <span className="w-8 h-px bg-sharp-orange/40" />
              Who It's For
              <span className="w-8 h-px bg-sharp-orange/40" />
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.15] mb-4"
            >
              Built for operators,{' '}
              <span className="text-sky-blue">not AI experts.</span>
            </motion.h2>
          </motion.div>

          {/* Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          >
            {audiences.map((a) => (
              <motion.div
                key={a.title}
                variants={fadeUp}
                className="rounded-xl border border-white/10 bg-white/[0.04] p-8 sm:p-10 flex flex-col transition-all duration-300 hover:bg-white/[0.08] hover:border-sky-blue/30 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,144,255,0.12)]"
              >
                <div className="w-10 h-10 rounded-lg bg-sky-blue/15 flex items-center justify-center text-sky-blue mb-6">
                  <a.icon size={20} strokeWidth={1.75} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {a.title}
                </h3>
                <p className="text-white/55 text-base leading-relaxed">
                  {a.text}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
