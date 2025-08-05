import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-pure-white">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto text-center">

          {/* Main Headline */}
          <h2 className="heading-xl mb-8">
            AI Built Different
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