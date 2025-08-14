import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Workflow Automation',
      description: 'Transform your existing business processes into intelligent, automated systems that work 24/7.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      features: ['Process Analysis', 'Automation Design', 'Integration', '24/7 Execution']
    },
    {
      title: 'AI-Powered Insights',
      description: 'Surface actionable insights from your data to drive better decision-making and business growth.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      features: ['Data Analysis', 'Predictive Modeling', 'Real-time Monitoring', 'Actionable Reports']
    },
    {
      title: 'Custom AI Solutions',
      description: 'Develop tailored AI solutions that integrate seamlessly with your existing business systems.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      features: ['System Integration', 'Custom Development', 'API Development', 'Scalable Architecture']
    }
  ];

  return (
    <section id="services" className="section-padding bg-pure-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-6">
           Services
          </h2>
          <p className="body-lg max-w-4xl mx-auto">
            We build AI solutions that adapt to your business, transforming workflows into intelligent systems 
            that deliver 10x capacity without increasing headcount.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-hover group p-6"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-navy-black rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <div className="text-pure-white">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl sm:text-2xl font-bold leading-tight mb-3 group-hover:text-navy-black/80 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-navy-black/70 leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-4">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-navy-black/70">
                    <img 
                      src="/logo_0_10.png" 
                      alt="bullet point" 
                      className="w-4 h-4 mr-3 flex-shrink-0"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 