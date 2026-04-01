import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const [showAI, setShowAI] = useState(false);
  const [showBuilt, setShowBuilt] = useState(false);
  const [showDifferent, setShowDifferent] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowAI(true), 0);
    const timer2 = setTimeout(() => setShowBuilt(true), 1500);
    const timer3 = setTimeout(() => setShowDifferent(true), 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <section id="home" className="relative overflow-hidden min-h-screen flex items-center justify-center bg-navy-black pb-24">
      {/* Background pattern */}
      <div
        className="absolute inset-0 z-0 opacity-[0.09]"
        style={{
          backgroundImage: 'url(/patternBlue.png)',
          backgroundSize: '900px',
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Gradient overlay for depth */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(10,17,40,0.4) 0%, rgba(10,17,40,0.75) 100%)',
        }}
      />

      <div className="container-custom relative z-20">
        <div className="max-w-4xl mx-auto text-center">
            {/* Headline */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-[1.15]">
              <span className={`block mb-2 transition-all duration-1000 ease-out ${showAI ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                AI investment is accelerating.
              </span>
              <span className={`block transition-all duration-1000 ease-out ${showBuilt ? 'opacity-100 translate-y-0 text-sharp-orange' : 'opacity-0 translate-y-4'}`}>
                Results aren't.
              </span>
            </h1>

            {/* Subheadline */}
            <div className={`max-w-2xl mx-auto mb-10 transition-all duration-1000 ease-out ${showDifferent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <p className="text-base sm:text-lg md:text-xl font-semibold text-white mb-4">
                The gap isn't tools, it's strategy.
              </p>
              <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                We help leadership teams identify where AI drives ROI, build a plan, and execute it.
                Built around your data, your workflows, and your business – not someone else's playbook.
              </p>
            </div>

            {/* CTAs */}
            <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 ease-out ${showDifferent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <motion.a
                href="https://calendly.com/alex-actualinsight/30min"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-sky-blue hover:bg-sky-blue/90 text-white font-medium text-base px-7 py-3.5 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Book an Intro Call
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.getElementById('ourApproach')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-sky-blue font-medium text-base px-7 py-3.5 rounded-full border-2 border-sky-blue hover:bg-sky-blue hover:text-white transition-all duration-200"
              >
                See How It Works
              </motion.button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 