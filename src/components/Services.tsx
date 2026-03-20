import React from 'react';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
  };

  const services = [
    {
      num: '01',
      title: 'Clarity',
      question: 'Where does AI actually create value for us?',
      text: "Most leaders have read the headlines, sat through the vendor pitches, and still can't answer the one question that actually matters: where does AI create value for our business?\n\nClarity is a 2–3 hour facilitated session designed to answer exactly that. We work directly with your leadership team to build a real understanding of AI, connect it to the problems you're already trying to solve, and identify where automation and intelligence create the highest impact. Everyone leaves with something useful - and leadership leaves aligned.\n\nNo pitch. No agenda. Just clarity.",
      tags: ['Leadership alignment', 'AI opportunity map', '2–3 hours'],
    },
    {
      num: '02',
      title: 'Blueprint',
      question: "What's our two-year AI roadmap?",
      text: "A rigorous strategy built around your workflows, your data, and your team. Prioritized and actionable - yours outright. No lock-in, no dependency, no 200-page document that collects dust.",
      tags: ['Two-year roadmap', 'Automation map', 'Full ownership'],
    },
    {
      num: '03',
      title: 'Advisory',
      question: 'How do we stay on track as AI evolves?',
      text: "A great roadmap is only as valuable as your ability to execute it. Most organizations stall not because the plan was wrong - but because AI moves fast, priorities shift, and there's no one internally who stays current on both.\n\nThat's what we are. We plug into your organization as the strategic layer you don't have in-house - keeping your Blueprint alive, your team unblocked, and your decisions grounded in what's actually happening in AI right now. Engagement is built around what you need, not a fixed package.",
      tags: ['Monthly strategy calls', 'Async access', 'Quarterly reviews'],
    },
  ];

  return (
    <section id="services" className="bg-navy-black py-20 sm:py-24 lg:py-32">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            className="mb-16 md:mb-20"
          >
            <span className="inline-flex items-center gap-3 text-white/40 text-xs font-medium tracking-[0.2em] uppercase mb-6">
              <span className="w-8 h-px bg-white/25" />
              What We Do
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-[1.1] max-w-2xl">
              Three engagements.{' '}
              <span className="text-sky-blue">One clear outcome.</span>
            </h2>
          </motion.div>

          {/* Service rows */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {services.map((s) => (
              <motion.div key={s.num} variants={fadeUp} className="group">
                <div className="h-px bg-white/10" />

                <div className="grid grid-cols-1 md:grid-cols-[minmax(200px,1fr)_2fr] gap-8 md:gap-16 py-14 md:py-20 relative">
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-sky-blue scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500 hidden md:block" />

                  {/* Left: number + title */}
                  <div className="md:pl-6">
                    <span className="block text-6xl sm:text-7xl font-extrabold text-white/10 leading-none mb-3 group-hover:text-white/20 transition-colors duration-500">
                      {s.num}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">
                      {s.title}
                    </h3>
                  </div>

                  {/* Right: question, description, tags */}
                  <div>
                    <h4 className="text-xl sm:text-2xl font-bold text-white mb-4 leading-snug">
                      {s.question}
                    </h4>
                    <div className="text-white/55 text-base sm:text-lg leading-relaxed mb-6 space-y-4">
                      {s.text.split('\n\n').map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {s.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-white/60 text-xs sm:text-sm font-medium border border-white/15 rounded-full px-4 py-1.5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            <div className="h-px bg-white/10" />
          </motion.div>

          {/* Bottom CTA strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-14 md:pt-18"
          >
            <p className="text-white/50 text-base sm:text-lg">
              Most start with <strong className="text-white font-semibold">Clarity.</strong>{' '}
              No commitment beyond the first conversation.
            </p>
            <div className="flex gap-3 shrink-0">
              <a
                href="#ourApproach"
                className="text-white/60 text-sm font-medium border border-white/15 rounded-lg px-6 py-3 hover:border-white/30 hover:text-white transition-all duration-200"
              >
                Learn more
              </a>
              <a
                href="#contact"
                className="text-navy-black text-sm font-medium bg-white rounded-lg px-6 py-3 hover:bg-white/90 transition-all duration-200 inline-flex items-center gap-2"
              >
                Get started
                <span>→</span>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Services;
