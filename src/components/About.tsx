import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
  };

  const team = [
    {
      initials: 'JD',
      name: 'Jane Doe',
      role: 'Co-Founder & CEO',
      bio: '10+ years leading operations at mid-market companies across three industries.',
    },
    {
      initials: 'MS',
      name: 'Mark Smith',
      role: 'Co-Founder, Strategy',
      bio: 'Former consultant turned AI strategist. Spent a decade helping PE-backed companies transform.',
    },
    {
      initials: 'AL',
      name: 'Alex Lee',
      role: 'Head of AI & Data',
      bio: 'Deep background in agentic AI and data architecture. Finds the practical use case in every system.',
    },
    {
      initials: 'TN',
      name: 'Taylor Nguyen',
      role: 'Research Intern',
      bio: 'Studying CS and business. Brings fresh eyes and sharp instincts to every engagement.',
    },
  ];

  const advisors = [
    { initials: 'RK', name: 'Robert Kim', title: 'Former CTO · Enterprise AI' },
    { initials: 'SP', name: 'Sarah Patel', title: 'Managing Director · Private Equity' },
  ];

  return (
    <section id="about" className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
            className="mb-16 md:mb-20"
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-3 text-navy-black/40 text-xs font-medium tracking-[0.2em] uppercase mb-6"
            >
              <span className="w-8 h-px bg-navy-black/20" />
              About Us
            </motion.span>

            <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-navy-black leading-[1.12]">
                Operators.{' '}
                <span className="text-sky-blue">Not consultants.</span>
              </h2>
              <p className="text-navy-black/55 text-base sm:text-lg leading-relaxed md:pt-2">
                We built Actual Insight because smart organizations kept getting left behind
                - not from lack of ambition, but lack of a{' '}
                <strong className="text-navy-black font-semibold">clear, honest path forward.</strong>{' '}
                We've worked inside mid-market businesses. We know what it takes to make change stick.
              </p>
            </motion.div>
          </motion.div>

          <div className="h-px bg-navy-black/8 mb-16 md:mb-20" />

          {/* Team */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="mb-16 md:mb-20"
          >
            <motion.span
              variants={fadeUp}
              className="text-navy-black/35 text-xs font-medium tracking-[0.2em] uppercase block mb-10"
            >
              The Team
            </motion.span>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
              {team.map((member) => (
                <motion.div key={member.initials} variants={fadeUp} className="text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-base sm:text-lg font-bold bg-sky-blue/8 text-sky-blue/70 border border-sky-blue/15">
                    {member.initials}
                  </div>
                  <h4 className="text-navy-black font-semibold text-sm sm:text-base mb-0.5">{member.name}</h4>
                  <span className="text-sky-blue text-xs sm:text-sm block mb-2">{member.role}</span>
                  <p className="text-navy-black/40 text-xs sm:text-sm leading-relaxed">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="h-px bg-navy-black/8 mb-16 md:mb-20" />

          {/* Advisors */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
          >
            <motion.span
              variants={fadeUp}
              className="text-navy-black/35 text-xs font-medium tracking-[0.2em] uppercase block mb-8"
            >
              Advisors
            </motion.span>

            <div className="flex flex-wrap gap-8 md:gap-12">
              {advisors.map((advisor) => (
                <motion.div key={advisor.initials} variants={fadeUp} className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-navy-black/[0.04] border border-navy-black/8 flex items-center justify-center text-navy-black/30 text-sm font-semibold shrink-0">
                    {advisor.initials}
                  </div>
                  <div>
                    <h4 className="text-navy-black font-semibold text-sm">{advisor.name}</h4>
                    <span className="text-navy-black/40 text-sm">{advisor.title}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
