import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import caseStudies from '../data/caseStudies';

const CaseStudiesPage: React.FC = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.4, delayChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
  };

  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-20 bg-pure-white min-h-screen">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="text-sharp-orange text-sm font-medium tracking-[0.2em] uppercase mb-5 block">
              Case Studies
            </span>
            <h1 className="text-4xl md:text-[3.25rem] md:leading-[1.15] font-extrabold text-navy-black">
              Strategy in practice.
            </h1>
          </div>

          <div className="h-px bg-navy-black/10" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {caseStudies.map((study) => (
              <motion.div key={study.num} variants={itemVariants}>
                <Link
                  to={`/case-studies/${study.slug}`}
                  className="grid grid-cols-1 md:grid-cols-[80px_1fr_1.4fr_auto] gap-6 md:gap-8 items-start py-10 md:py-12 group"
                >
                  <span className="text-sharp-orange text-sm font-medium tracking-wider">
                    {study.num}
                  </span>
                  <div>
                    <span className="text-navy-black/40 text-xs font-medium tracking-[0.15em] uppercase block mb-3">
                      {study.industry}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-navy-black whitespace-pre-line leading-tight mb-4 group-hover:text-sharp-orange transition-colors duration-300">
                      {study.titleMultiline}
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium tracking-[0.1em] uppercase text-navy-black/50 border border-navy-black/15 rounded px-3 py-1"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-navy-black/50 text-base leading-relaxed">
                    {study.summary}
                  </p>
                  <span className="text-navy-black/30 group-hover:text-sharp-orange transition-colors duration-300 self-start mt-1 text-lg">
                    →
                  </span>
                </Link>
                <div className="h-px bg-navy-black/10" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesPage;
