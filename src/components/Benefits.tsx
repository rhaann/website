import React, { useState, useEffect } from 'react';

const Benefits: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const benefits = [
    {
      title: 'Immediate ROI, Lower Risk',
      content: 'Your AI Operating System delivers value from day one by answering questions, surfacing insights, and connecting your team to existing systems instantly. Then we use our friction-finding methodology to identify and build the RIGHT workflows and agents that solve your biggest pain points. ROI starts immediately and compounds as each new agent amplifies your team\'s capabilities.'
    },
    {
      title: '10x Capacity Without the Headcount',
      content: 'Your team doesn\'t need to triple in size; it needs intelligent automation. Your AI Operating System handles high-volume tasks and complex workflows automatically, freeing your existing team to focus on strategy, innovation, and the work that actually drives growth.'
    },
    {
      title: 'AI Agents That Learn Your Business',
      content: 'Each agent is trained on your specific workflows and fine-tuned to understand your business logic. The more you use it, the smarter it gets—creating intelligence that\'s uniquely yours and impossible for competitors to replicate.'
    },
    {
      title: 'Round-the-Clock Execution',
      content: 'Your business doesn\'t stop at 5 p.m., and neither does your AI Operating System. Run critical operations continuously in the background 24/7, like processing orders, updating systems, and monitoring workflows to keep your business moving forward even when your team is offline.'
    },
    {
      title: 'Intelligent Decisions in Real Time',
      content: 'Your AI Operating System connects all your systems instantly, giving you a complete view of your business in one conversation. Instead of hunting through multiple platforms for answers, you get comprehensive insights that enable faster, smarter decisions and keep you ahead of the competition.'
    },
    {
      title: 'Scale Fast Without the Burnout',
      content: 'Growth shouldn\'t come at the cost of your team\'s well-being. By automating repetitive tasks and streamlining complex processes, we help your team thrive under rapid expansion by boosting productivity while reducing stress and creating space for meaningful work.'
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % benefits.length);
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(interval);
  }, [benefits.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % benefits.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + benefits.length) % benefits.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section id="benefits" className="section-padding bg-grey-lighter/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-6">
            Benefits
          </h2>
          <p className="body-lg max-w-4xl mx-auto">
            We build AI that understands your business from the ground up. Our process begins with a conversational interface, 
            then we systematically transform your friction points into intelligent workflows that give your business a lasting 
            edge in the Intelligence Economy.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Carousel Track */}
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 bg-navy-black p-10 sm:p-12 lg:p-14 text-pure-white min-h-[300px] sm:min-h-[350px] lg:min-h-[400px] flex items-center justify-center"
                >
                  {/* Content */}
                  <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-pure-white mb-6 leading-tight">
                      {benefit.title}
                    </h3>
                    <p className="text-pure-white/90 leading-relaxed text-base sm:text-lg">
                      {benefit.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-pure-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-pure-white transition-all duration-200 z-10 hover:scale-110"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6 text-navy-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-pure-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-pure-white transition-all duration-200 z-10 hover:scale-110"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6 text-navy-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {benefits.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-navy-black scale-125 shadow-lg' 
                    : 'bg-navy-black/30 hover:bg-navy-black/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits; 