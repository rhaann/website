import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-grey-lighter/30">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">
              About Us
            </h2>
            <p className="body-lg max-w-4xl mx-auto">
              We're a team of AI experts and business strategists who believe AI should adapt to your business, 
              not the other way around. We build intelligent systems that work the way you work.
            </p>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default About; 