import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const [showAI, setShowAI] = useState(false);
  const [showBuilt, setShowBuilt] = useState(false);
  const [showDifferent, setShowDifferent] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Start the animation sequence
    const timer1 = setTimeout(() => setShowAI(true), 0);
    const timer2 = setTimeout(() => setShowBuilt(true), 1500);
    const timer3 = setTimeout(() => setShowDifferent(true), 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  // Slow down the background video
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <section id="home" className="relative overflow-hidden min-h-screen flex items-center justify-center bg-white">
      {/* Background video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/mountain.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Soft translucent gradient overlay for readability over video */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background: 'linear-gradient(180deg, rgba(255,255,255,0.72) 0%, rgba(219,230,255,0.70) 100%)',
        }}
      />

      <div className="container-custom relative z-20">
        <div className="max-w-6xl mx-auto text-center">
            {/* Main Headline */}
            <h2 className="text-3xl md:text-5xl font-bold mb-10 text-navy-black">
              <span className={`block mb-3 transition-all duration-1000 ease-out ${showAI ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                AI investment is accelerating.
              </span>
              <span className={`block transition-all duration-1000 ease-out ${showBuilt ? 'opacity-100 translate-y-0 text-[#0090FF]' : 'opacity-0 translate-y-4'}`}>
                Execution is failing.
              </span>
            </h2>

            {/* Subheadline */}
            <p className={`text-xl md:text-2xl font-semibold mb-10 text-navy-black transition-all duration-1000 ease-out ${showDifferent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Your data. Your strategy. A clear path forward.
            </p>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative bg-sharp-orange hover:bg-sharp-orange/90 text-pure-white font-medium text-lg px-10 py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <span className="relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-pure-white after:transition-[width] after:duration-300 group-hover:after:w-full">
                Get Your Roadmap
              </span>
            </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Hero; 