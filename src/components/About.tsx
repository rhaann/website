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
      initials: 'AM',
      name: 'Alex Morton',
      role: 'Founder',
      bio: '10+ years leading operations at mid-market companies across three industries.',
      accent: false,
    },
    {
      initials: 'RH',
      name: 'Ruj Haan',
      role: 'Head of Operations & Product',
      bio: 'Former consultant turned AI strategist. Spent a decade helping PE-backed companies transform.',
      accent: false,
    },
    {
      initials: 'NK',
      name: 'Nibraas Khan',
      role: 'Head of AI & Data',
      bio: 'Deep background in agentic AI and data architecture. Finds the practical use case in every system.',
      accent: false,
    },
    {
      initials: 'EB',
      name: 'Enya Bullard',
      role: 'Research Intern',
      bio: 'Building the future of AI. Brings fresh eyes and sharp instincts to every engagement.',
      accent: false,
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
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-3 text-navy-black/40 text-xs font-medium tracking-[0.2em] uppercase mb-8"
            >
              <span className="w-8 h-px bg-navy-black/20" />
              About Us
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-navy-black leading-[1.1] mb-8"
            >
              Operators.
              <br />
              Not <span className="text-sky-blue">consultants.</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-navy-black/55 text-base sm:text-lg leading-relaxed max-w-2xl mb-0"
            >
              We built Actual Insight because smart organizations kept getting left behind
              - not from lack of ambition, but lack of a{' '}
              <strong className="text-navy-black font-semibold">clear, honest path forward.</strong>{' '}
              We've worked inside mid-market businesses. We know what it takes to make change stick.
            </motion.p>
          </motion.div>

          {/* Divider */}
          <div className="h-px bg-navy-black/10 my-16 md:my-20" />

          {/* The Team */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
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
                  <div
                    className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto mb-5 flex items-center justify-center text-lg sm:text-xl font-bold ${
                      member.accent
                        ? 'bg-sky-blue/10 text-sky-blue border-2 border-sky-blue/25'
                        : 'bg-grey-lighter text-navy-black/30 border-2 border-navy-black/8'
                    }`}
                  >
                    {member.initials}
                  </div>
                  <h4 className="text-navy-black font-semibold text-base mb-1">{member.name}</h4>
                  <span className="text-sky-blue text-sm block mb-3">{member.role}</span>
                  <p className="text-navy-black/40 text-sm leading-relaxed">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Divider */}
          <div className="h-px bg-navy-black/10 my-16 md:my-20" />

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
                  <div className="w-12 h-12 rounded-full bg-grey-lighter border border-navy-black/8 flex items-center justify-center text-navy-black/30 text-sm font-semibold shrink-0">
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
