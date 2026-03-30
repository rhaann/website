import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const WhyUs: React.FC = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
  };

  const differentiators = [
    {
      title: 'Independent by design',
      text: "No platforms to push. No hidden incentives. Just what's right for your business.",
    },
    {
      title: 'Built on real experience',
      text: 'Led by a veteran data engineer who has turned complex systems into strategic advantage.',
    },
    {
      title: 'Designed to make you self-sufficient',
      text: "We don't create dependency. We build capability inside your team.",
    },
  ];

  const orbits = [
    { size: 85, duration: 20, opacity: 0.25, dotCount: 2, dotSize: 4 },
    { size: 65, duration: 28, opacity: 0.35, dotCount: 3, dotSize: 3 },
    { size: 48, duration: 18, opacity: 0.40, dotCount: 2, dotSize: 3.5 },
    { size: 32, duration: 24, opacity: 0.30, dotCount: 1, dotSize: 5 },
    { size: 18, duration: 14, opacity: 0.45, dotCount: 1, dotSize: 4 },
  ];

  return (
    <section id="whyUs" className="relative bg-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[360px]">

        {/* Left — animated visual */}
        <div className="relative bg-navy-black overflow-hidden flex items-center justify-center min-h-[220px] lg:min-h-0">
          <div className="absolute inset-0 flex items-center justify-center">

            {/* Rotating orbital rings with traveling dots */}
            {orbits.map((orbit, i) => (
              <motion.div
                key={`orbit-${i}`}
                className="absolute rounded-full border"
                style={{
                  width: `${orbit.size}%`,
                  height: `${orbit.size}%`,
                  borderColor: `rgba(0,144,255,${orbit.opacity})`,
                }}
                animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                transition={{ duration: orbit.duration, repeat: Infinity, ease: 'linear' }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                {[...Array(orbit.dotCount)].map((_, j) => {
                  const offsetDeg = (360 / orbit.dotCount) * j;
                  return (
                    <div
                      key={j}
                      className="absolute"
                      style={{
                        top: '50%',
                        left: '50%',
                        transform: `rotate(${offsetDeg}deg) translateX(${orbit.size * 0.5}%) translateX(50%)`,
                      }}
                    >
                      <motion.div
                        className="rounded-full bg-sky-blue"
                        style={{
                          width: orbit.dotSize,
                          height: orbit.dotSize,
                          marginLeft: -orbit.dotSize / 2,
                          marginTop: -orbit.dotSize / 2,
                          boxShadow: `0 0 ${orbit.dotSize * 3}px rgba(0,144,255,0.6)`,
                        }}
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{
                          duration: 2 + j,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      />
                    </div>
                  );
                })}
              </motion.div>
            ))}

            {/* Tilted elliptical orbits for depth */}
            {[42, 60].map((size, i) => (
              <motion.div
                key={`ellipse-${i}`}
                className="absolute rounded-full border border-sky-blue/[0.20]"
                style={{
                  width: `${size}%`,
                  height: `${size * 0.4}%`,
                  transform: `rotate(${i === 0 ? -25 : 35}deg)`,
                }}
                animate={{ rotate: i === 0 ? [-25, 335] : [35, -325] }}
                transition={{ duration: i === 0 ? 35 : 40, repeat: Infinity, ease: 'linear' }}
              />
            ))}

            {/* Central core */}
            <motion.div
              className="absolute w-3 h-3 rounded-full bg-sky-blue"
              style={{ boxShadow: '0 0 20px 6px rgba(0,144,255,0.3)' }}
              animate={{ scale: [1, 1.4, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute w-24 h-24 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(0,144,255,0.12) 0%, transparent 70%)',
              }}
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Ambient floating particles */}
            {[...Array(20)].map((_, i) => {
              const x = 10 + (i * 4.2) % 80;
              const y = 8 + (i * 7.3) % 84;
              const size = 1.5 + (i % 3);
              return (
                <motion.div
                  key={`fp-${i}`}
                  className="absolute rounded-full bg-sky-blue/60"
                  style={{ width: size, height: size, left: `${x}%`, top: `${y}%` }}
                  animate={{
                    y: [0, -8 - (i % 5) * 2, 0],
                    x: [0, (i % 2 === 0 ? 4 : -4), 0],
                    opacity: [0.1, 0.5, 0.1],
                  }}
                  transition={{
                    duration: 4 + (i % 4),
                    repeat: Infinity,
                    delay: (i * 0.4) % 3,
                    ease: 'easeInOut',
                  }}
                />
              );
            })}
          </div>

          {/* Subtle pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: 'url(/patternBlue.png)',
              backgroundSize: '400px',
              backgroundRepeat: 'repeat',
            }}
          />

          {/* Edge vignette */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 80% 70% at 50% 50%, transparent 0%, rgba(10,18,42,0.35) 100%)',
            }}
          />
        </div>

        {/* Right — content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="py-10 sm:py-12 lg:py-14 px-6 sm:px-10 lg:px-14 xl:px-20"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-3 text-sharp-orange text-xs font-medium tracking-[0.2em] uppercase mb-5"
          >
            <span className="w-8 h-px bg-sharp-orange/40" />
            Why Actual Insight
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl lg:text-[2.5rem] font-extrabold leading-[1.1] mb-8"
          >
            <span className="text-sky-blue">Built from</span>
            <span className="text-navy-black"> real-world experience.</span>
          </motion.h2>

          <div className="grid grid-cols-[1fr_auto] gap-6 items-start">
            <motion.div variants={fadeUp} className="space-y-5">
              <p className="text-navy-black/55 text-[15px] sm:text-base leading-relaxed">
                Actual Insight was founded by{' '}
                <strong className="text-navy-black font-semibold">Alex Morton</strong>, a data
                engineer and analytics leader who has spent over a decade helping organizations
                turn complex data environments into{' '}
                <strong className="text-navy-black font-semibold">strategic advantage</strong>.
              </p>

              {differentiators.map((d) => (
                <div key={d.title}>
                  <h3 className="text-navy-black font-bold text-[15px] sm:text-base leading-snug mb-0.5">
                    {d.title}
                  </h3>
                  <p className="text-navy-black/50 text-[15px] sm:text-base leading-relaxed">{d.text}</p>
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex flex-col items-center shrink-0 pt-1"
            >
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-navy-black/6 border-2 border-sky-blue/25 overflow-hidden mb-4">
                <img src="/Alex.jpeg" alt="Alex Morton" className="w-full h-full object-cover" />
              </div>
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-6 py-3 bg-sky-blue text-white font-semibold rounded-full text-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
              >
                Meet the Team
              </Link>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default WhyUs;
