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
      subtitle: 'Executive leadership, COOs, GMs',
      text: "You know AI matters, but don't have time to figure it out from scratch. You need clarity, not a crash course.",
    },
    {
      icon: BarChart3,
      title: 'Private Equity Firms',
      subtitle: 'Portfolio operations & value creation',
      text: 'Drive AI strategy across your portfolio with a repeatable, scalable approach. Create value that compounds.',
    },
    {
      icon: Building2,
      title: 'Consulting Firms',
      subtitle: 'Strategy & management consultants',
      text: 'Bring AI capability to your clients without building it all internally. Expand your offering without the overhead.',
    },
  ];

  return (
    <section id="whoItsFor" className="bg-[#f8fbff] py-20 sm:py-24 lg:py-32">
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
              Who It's For
              <span className="w-8 h-px bg-navy-black/20" />
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-black leading-[1.15]"
            >
              Built for operators,{' '}
              <span className="text-sky-blue">not AI experts.</span>
            </motion.h2>
          </motion.div>

          {/* Audience strip — divided columns */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-navy-black/8"
          >
            {audiences.map((a) => (
              <motion.div
                key={a.title}
                variants={fadeUp}
                className="py-8 md:py-0 md:px-10 first:md:pl-0 last:md:pr-0"
              >
                <div className="w-10 h-10 rounded-lg bg-sky-blue/8 border border-sky-blue/15 flex items-center justify-center text-sky-blue mb-5">
                  <a.icon size={20} strokeWidth={1.75} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-navy-black mb-1">
                  {a.title}
                </h3>
                <p className="text-sky-blue text-sm mb-3">{a.subtitle}</p>
                <p className="text-navy-black/50 text-sm sm:text-base leading-relaxed">
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
