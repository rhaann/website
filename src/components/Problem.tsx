import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Problem: React.FC = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
  };

  const painPoints = [
    'Your Board is asking what your AI strategy is.',
    'Your team is testing tools, but nothing is scaling.',
    'Vendors are promising transformation but selling generic playbooks.',
    'None of it is showing up in revenue, margin, or efficiencies.',
  ];

  const [selected, setSelected] = useState<Set<number>>(new Set());
  const progress = (selected.size / painPoints.length) * 100;
  const allSelected = selected.size === painPoints.length;

  const toggle = (i: number) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  const segColors = ['#00C6AC', '#0090FF', '#FF3000', '#001A29'];

  const gauge = useMemo(() => {
    const r = 44;
    const cx = 50;
    const cy = 50;
    const startDeg = 225;
    const totalArc = 270;
    const segArc = totalArc / 4;
    const gap = 4;
    const toRad = (d: number) => (d * Math.PI) / 180;
    const sweepDeg = (progress / 100) * totalArc;

    const makeArc = (fromDeg: number, arcDeg: number) => {
      const s = toRad(fromDeg);
      const e = toRad(fromDeg - arcDeg);
      const x1 = cx + r * Math.cos(s);
      const y1 = cy - r * Math.sin(s);
      const x2 = cx + r * Math.cos(e);
      const y2 = cy - r * Math.sin(e);
      const large = arcDeg > 180 ? 1 : 0;
      return `M ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2}`;
    };

    const bgArc = makeArc(startDeg, totalArc);

    const segments = Array.from({ length: 4 }, (_, i) => {
      const from = startDeg - i * segArc - gap / 2;
      const arc = segArc - gap;
      return makeArc(from, arc);
    });

    const needleAngle = toRad(startDeg - sweepDeg);
    const needleLen = r - 12;
    const nx = cx + needleLen * Math.cos(needleAngle);
    const ny = cy - needleLen * Math.sin(needleAngle);

    return { cx, cy, bgArc, segments, nx, ny };
  }, [progress]);

  return (
    <section id="problem" className="bg-[#e8edf4] py-20 sm:py-24 lg:py-32">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-3 text-sharp-orange text-xs font-medium tracking-[0.2em] uppercase mb-6">
              <span className="w-8 h-px bg-sharp-orange/40" />
              The Problem
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-navy-black leading-[1.12] mb-3"
          >
            AI is moving fast.{' '}
            <br />
            <span className="text-sky-blue">Your business isn't.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-navy-black/50 text-base sm:text-lg leading-relaxed mb-12 md:mb-16 max-w-xl"
          >
            You know AI matters. You're just not sure where to start — or if you have the time and budget to get it right.
          </motion.p>

          {/* Interactive area */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-14 items-start mb-10"
          >
            {/* Gauge */}
            <div className="flex flex-col items-center">
              <svg viewBox="0 0 100 100" className="w-40 sm:w-48">
                {/* Background track */}
                <path
                  d={gauge.bgArc}
                  fill="none"
                  stroke="#d0d5dd"
                  strokeWidth="7"
                  strokeLinecap="round"
                />

                {/* 4 color segments — each lights up when selected */}
                {gauge.segments.map((d, i) => (
                  <path
                    key={i}
                    d={d}
                    fill="none"
                    stroke={segColors[i]}
                    strokeWidth="7"
                    strokeLinecap="round"
                    opacity={selected.has(i) ? 1 : 0}
                    className="transition-opacity duration-400 ease-out"
                  />
                ))}

                {/* Needle */}
                <line
                  x1={gauge.cx}
                  y1={gauge.cy}
                  x2={gauge.nx}
                  y2={gauge.ny}
                  stroke="#001A29"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="transition-all duration-500 ease-out"
                />
                <circle cx={gauge.cx} cy={gauge.cy} r="4" fill="#001A29" />
                <circle
                  cx={gauge.nx}
                  cy={gauge.ny}
                  r="3"
                  fill="#001A29"
                  stroke="white"
                  strokeWidth="1.5"
                  className="transition-all duration-500 ease-out"
                />
              </svg>

              <motion.span
                className="text-3xl sm:text-4xl font-extrabold text-navy-black -mt-2"
                key={progress}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                {Math.round(progress)}%
              </motion.span>
              <span className="text-navy-black/35 text-[11px] font-semibold tracking-[0.18em] uppercase mt-1">
                AI Pressure
              </span>
              <span className="text-navy-black/40 text-sm mt-2">
                {allSelected ? 'This is exactly what we solve' : "Select what's on your mind"}
              </span>
            </div>

            {/* Clickable cards */}
            <div className="space-y-3">
              {painPoints.map((point, i) => {
                const active = selected.has(i);
                return (
                  <button
                    key={i}
                    onClick={() => toggle(i)}
                    className={`w-full flex items-start gap-4 text-left rounded-xl px-5 py-4 transition-all duration-300 border ${
                      active
                        ? 'bg-white border-sky-blue/30 shadow-[0_2px_12px_-4px_rgba(0,144,255,0.15)]'
                        : 'bg-white/60 border-navy-black/[0.06] hover:bg-white hover:border-navy-black/10'
                    }`}
                  >
                    <span className={`mt-1 shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                      active ? 'bg-sky-blue border-sky-blue' : 'border-navy-black/15 bg-transparent'
                    }`}>
                      {active && (
                        <motion.svg
                          width="10" height="10" viewBox="0 0 10 10" fill="none"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                        >
                          <path d="M2 5.5l2 2 4-4.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </motion.svg>
                      )}
                    </span>
                    <span className={`text-[15px] sm:text-base leading-relaxed font-medium transition-colors duration-300 ${
                      active ? 'text-navy-black' : 'text-navy-black/55'
                    }`}>
                      {point}
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Reveal box — appears when all selected */}
          <AnimatePresence>
            {allSelected && (
              <motion.div
                initial={{ opacity: 0, y: 24, height: 0 }}
                animate={{ opacity: 1, y: 0, height: 'auto' }}
                exit={{ opacity: 0, y: 24, height: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="bg-navy-black rounded-2xl px-8 sm:px-10 py-8 sm:py-10 mt-4">
                  <span className="inline-flex items-center gap-2 text-sky-blue/70 text-[11px] font-semibold tracking-[0.18em] uppercase mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-blue" />
                    You're not alone
                  </span>

                  <h3 className="text-white text-xl sm:text-2xl lg:text-[1.75rem] font-bold leading-snug mb-4">
                    The issue isn't effort.
                  </h3>
                  <p className="text-white/55 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
                    Most teams are working hard — they just don't know which AI bets will actually pay off. A small number of workflows drive the majority of impact. We help you find them fast.
                  </p>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10 pt-6">
                    <p className="text-white/35 text-sm italic">
                      We've helped firms like yours go from uncertainty to execution.
                    </p>
                    <a
                      href="#reframe"
                      className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 hover:border-white/40 text-white text-sm font-semibold rounded-full transition-all duration-300 hover:bg-white/5"
                    >
                      See How We Fix It
                      <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Problem;
