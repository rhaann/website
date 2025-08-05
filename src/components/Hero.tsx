import React, { useState, useEffect } from 'react';

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
    <section id="home" className="min-h-screen flex items-center justify-center bg-pure-white">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto text-center">

          {/* Main Headline */}
          <h2 className="heading-xl mb-8 flex justify-center items-center gap-4 flex-wrap">
            <span 
              className={`transition-all duration-1000 ease-out ${
                showAI 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-8'
              }`}
            >
              AI
            </span>
            <span 
              className={`transition-all duration-1000 ease-out ${
                showBuilt 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-8'
              }`}
            >
              Built
            </span>
            <span 
              className={`transition-all duration-1000 ease-out ${
                showDifferent 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-8'
              }`}
            >
              Different
            </span>
          </h2>

          {/* Subheadline */}
          <p className="body-lg mb-12 max-w-4xl mx-auto">
            We build AI that adapts to you, transforming your workflows into intelligent systems by automating processes, 
            surfacing insights, and accelerating growth with solutions designed specifically for how your business operates.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero; 