import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';

const Stakes: React.FC = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };

  return (
    <section id="stakes" className="bg-[#f8fbff] py-20 sm:py-24 lg:py-32">
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
              The Stakes
              <span className="w-8 h-px bg-navy-black/20" />
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-black leading-[1.15] mb-5 max-w-3xl mx-auto"
            >
              AI is already separating winners from{' '}
              <span className="text-sky-blue">everyone else.</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-navy-black/50 text-base sm:text-lg max-w-xl mx-auto"
            >
              The difference isn't who's using AI. It's who's using it well.
            </motion.p>
          </motion.div>

          {/* Stat */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16 md:mb-20"
          >
            <span className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-sky-blue leading-none">
              70-90%
            </span>
            <p className="text-navy-black/50 text-base sm:text-lg mt-3">
              of AI projects fail to deliver meaningful ROI.
            </p>
          </motion.div>

          {/* Failure modes */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 md:mb-20"
          >
            <motion.div
              variants={fadeUp}
              className="rounded-xl border border-navy-black/8 bg-white p-8 sm:p-10"
            >
              <h3 className="text-navy-black font-bold text-lg mb-5">
                For some companies, that looks like:
              </h3>
              <ul className="space-y-3.5">
                {[
                  'Pilots that don\'t scale',
                  'Tools that don\'t stick',
                  'Fragmented efforts across teams',
                  'Unclear business impact',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-navy-black/55 text-sm sm:text-base">
                    <span className="w-1.5 h-1.5 rounded-full bg-sharp-orange shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="rounded-xl border border-navy-black/8 bg-white p-8 sm:p-10"
            >
              <h3 className="text-navy-black font-bold text-lg mb-5">
                For others, it looks like:
              </h3>
              <ul className="space-y-3.5">
                {[
                  'Waiting to act',
                  'Uncertainty on where to start',
                  'Fear of getting it wrong',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-navy-black/55 text-sm sm:text-base">
                    <span className="w-1.5 h-1.5 rounded-full bg-sharp-orange/60 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Pivot */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center text-navy-black/50 text-lg sm:text-xl leading-relaxed mb-16 md:mb-20 max-w-2xl mx-auto"
          >
            The risk isn't whether you've started.
            <br />
            <strong className="text-navy-black font-semibold">
              It's whether you're investing in the right things.
            </strong>
          </motion.p>

          {/* Outcome contrast */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 md:mb-20"
          >
            <motion.div
              variants={fadeUp}
              className="rounded-xl border border-sky-blue/20 bg-sky-blue/[0.03] p-8 sm:p-10"
            >
              <div className="flex items-center gap-3 mb-5">
                <TrendingUp size={20} className="text-sky-blue" strokeWidth={2} />
                <h3 className="text-sky-blue font-bold text-lg">
                  Companies that get this right:
                </h3>
              </div>
              <ul className="space-y-3.5">
                {['Focus faster', 'Execute better', 'See real return'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-navy-black font-medium text-sm sm:text-base">
                    <span className="text-sky-blue text-sm">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="rounded-xl border border-navy-black/8 bg-white p-8 sm:p-10"
            >
              <div className="flex items-center gap-3 mb-5">
                <TrendingDown size={20} className="text-navy-black/30" strokeWidth={2} />
                <h3 className="text-navy-black/40 font-bold text-lg">
                  Companies that don't:
                </h3>
              </div>
              <ul className="space-y-3.5">
                {['Stay busy', 'Stay fragmented', 'Fall behind'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-navy-black/40 text-sm sm:text-base">
                    <span className="text-navy-black/25 text-sm">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Closing */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center text-xl sm:text-2xl font-bold text-sharp-orange"
          >
            Don't waste time or money getting it wrong.
          </motion.p>

        </div>
      </div>
    </section>
  );
};

export default Stakes;
