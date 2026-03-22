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
          background: 'linear-gradient(180deg, rgba(255,252,247,0.72) 0%, rgba(240,232,220,0.65) 100%)',
        }}
      />

      <div className="container-custom relative z-20">
        <div className="max-w-4xl mx-auto text-center">
            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-navy-black mb-6 leading-[1.1]">
              <span className={`block mb-2 transition-all duration-1000 ease-out ${showAI ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                AI investment is accelerating
              </span>
              <span className={`block transition-all duration-1000 ease-out ${showBuilt ? 'opacity-100 translate-y-0 text-sky-blue' : 'opacity-0 translate-y-4'}`}>
                Meaningful impact is not
              </span>
            </h1>

            {/* Subheadline */}
            <div className={`max-w-2xl mx-auto mb-10 transition-all duration-1000 ease-out ${showDifferent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <p className="text-lg sm:text-xl md:text-2xl font-semibold text-navy-black mb-4">
                The gap isn't tools, it's strategy
              </p>
              <p className="text-base sm:text-lg text-navy-black/80 leading-relaxed">
                We help leadership teams identify where AI drives ROI and build a plan to execute it.
                Built around your data, your workflows, and your business – not someone else's playbook.
              </p>
            </div>

            {/* CTAs */}
            <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 ease-out ${showDifferent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-sharp-orange hover:bg-sharp-orange/90 text-white font-medium text-lg px-8 py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Book a Clarity Session
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-sky-blue font-medium text-lg px-8 py-4 rounded-lg border-2 border-sky-blue hover:bg-sky-blue hover:text-white transition-all duration-200"
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