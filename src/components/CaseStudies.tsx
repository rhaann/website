import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import caseStudies from '../data/caseStudies';

const CaseStudies: React.FC = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
  };

  // const weDidItems = [
  //   'Identified 3 high-impact workflows across sales + operations',
  //   'Quantified ~$1.8M annual opportunity',
  //   'Built and implemented 2 solutions in 6 weeks',
  // ];

  // const resultItems = [
  //   '35% reduction in manual work',
  //   'Faster response times',
  //   'Clear ROI tied to implementation',
  // ];

  return (
    <section id="case-studies" className="py-20 sm:py-24 lg:py-32 bg-white overflow-hidden">
      <div className="container-custom">
        <div className="max-w-7xl mx-auto">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
          >
            {/* Two-column layout: left copy, right cards */}
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] gap-12 lg:gap-16 items-start">

              {/* Left — headline + mini-case + CTA */}
              <div>
                <motion.div variants={fadeUp} className="mb-10">
                  <span className="inline-flex items-center gap-3 text-sharp-orange text-xs font-medium tracking-[0.2em] uppercase mb-6">
                    <span className="w-8 h-px bg-sharp-orange/40" />
                    Case Studies
                  </span>
                  <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-extrabold text-navy-black leading-[1.12] mb-5">
                    From experimentation to{' '}
                    <span className="text-sky-blue">execution</span>
                  </h2>
                  <p className="text-navy-black/55 text-base sm:text-lg leading-relaxed">
                    A mid-sized services company was exploring multiple AI tools across
                    teams — but nothing was scaling.
                  </p>
                </motion.div>

                {/* <motion.div variants={fadeUp} className="mb-8">
                  <h3 className="text-navy-black font-bold text-sm tracking-[0.1em] uppercase mb-4">
                    We:
                  </h3>
                  <ul className="space-y-3 mb-8">
                    {weDidItems.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-navy-black/60 text-base leading-relaxed"
                      >
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-sky-blue shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-navy-black font-bold text-sm tracking-[0.1em] uppercase mb-4">
                    Result:
                  </h3>
                  <ul className="space-y-3">
                    {resultItems.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-navy-black/60 text-base leading-relaxed"
                      >
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-sky-blue shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div> */}

                <motion.div variants={fadeUp}>
                  <Link
                    to="/case-studies"
                    className="inline-flex items-center gap-2 text-sky-blue text-sm font-semibold hover:underline"
                  >
                    Read more
                    <ArrowRight size={14} />
                  </Link>
                </motion.div>
              </div>

              {/* Right — horizontally scrolling cards */}
              <motion.div variants={fadeUp} className="relative lg:mt-24">
                <div className="flex gap-5 lg:gap-6 overflow-x-auto pb-4 -mr-8 sm:-mr-12 lg:-mr-16 pr-8 sm:pr-12 lg:pr-16 snap-x snap-mandatory scrollbar-hide">
                  {caseStudies.map((study) => (
                    <Link
                      key={study.num}
                      to={`/case-studies/${study.slug}`}
                      className="group flex flex-col snap-start shrink-0 w-72 sm:w-80 rounded-xl border border-navy-black/8 p-7 sm:p-8 hover:bg-sky-blue hover:border-sky-blue hover:shadow-lg transition-all duration-300"
                    >
                      <span className="text-sky-blue text-xs font-bold tracking-wider block mb-3 group-hover:text-white/70 transition-colors duration-300">
                        {study.num}
                      </span>
                      <span className="text-navy-black/40 text-xs font-medium tracking-[0.12em] uppercase block mb-3 group-hover:text-white/60 transition-colors duration-300">
                        {study.industry}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-navy-black leading-snug mb-3 group-hover:text-white transition-colors duration-300">
                        {study.title}
                      </h3>
                      <p className="text-navy-black/50 text-sm leading-relaxed mb-5 flex-1 group-hover:text-white/75 transition-colors duration-300">
                        {study.summary}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-sky-blue text-sm font-medium group-hover:text-white transition-colors duration-300 mt-auto">
                        Read more
                        <ArrowRight size={14} />
                      </span>
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
