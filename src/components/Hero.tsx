import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const [showAI, setShowAI] = useState(false);
  const [showBuilt, setShowBuilt] = useState(false);
  const [showDifferent, setShowDifferent] = useState(false);

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

  

  return (
    <section id="home" className="relative overflow-hidden min-h-screen flex items-center justify-center bg-white">

      {/* Soft white-to-light gradient overlay for professional minimal look */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(180deg, #ffffff 0%, #dbe6ff 100%)',
        }}
      />

      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Remove card; let text sit directly over subtle background */}
          <div className="mx-auto inline-block px-6 py-6 md:px-10 md:py-8">
            {/* Main Headline */}
            <h2 className="heading-xl mb-8 flex justify-center items-center gap-4 flex-wrap">
            <span 
              className={`transition-all duration-1000 ease-out ${
                showAI 
                  ? 'opacity-100 translate-x-0 text-[#0090FF]' 
                  : 'opacity-0 -translate-x-8'
              } ${showDifferent ? 'text-[#0013DC]' : ''}`}
            >
              AI
            </span>
            <span 
              className={`transition-all duration-1000 ease-out ${
                showBuilt 
                  ? 'opacity-100 translate-x-0 text-[#0077D1]' 
                  : 'opacity-0 -translate-x-8'
              } ${showDifferent ? 'text-[#001A29]' : ''}`}
            >
              Built
            </span>
            <span 
              className={`transition-all duration-1000 ease-out ${
                showDifferent 
                  ? 'opacity-100 translate-x-0 text-[#0013DC]' 
                  : 'opacity-0 -translate-x-8'
              } ${showDifferent ? 'text-[#001A29]' : ''}`}
            >
              Different
            </span>
            </h2>

          {/* Orange Header Line - appears when all words are visible */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={showDifferent ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-32 h-1 bg-sharp-orange mx-auto mb-8 rounded-full"
          />

          {/* Subheadline */}
          <p className="body-lg mb-8 max-w-4xl mx-auto text-gray-800">
          AI without your data is just expensive guesswork. We combine data expertise with AI capabilities to unlock your business's full potential,
           building solutions designed for measurable ROI, not innovation theater
          </p>
          
          {/* Contact Us Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative bg-sharp-orange hover:bg-sharp-orange/90 text-pure-white font-medium text-lg px-8 py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <span className="relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-pure-white after:transition-[width] after:duration-300 group-hover:after:w-full">
              Contact Us
            </span>
          </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 