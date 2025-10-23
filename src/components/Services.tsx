import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Audit',
      description: 'A systematic evaluation that cuts through hype to identify exactly where and how AI can deliver competitive advantage for your organization.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      features: [ 'Opportunity Mapping','ROI Analysis', 'Readiness Assessment',  'Practical Roadmap']
    },
    {
      title: 'Advisor',
      description: 'Ongoing strategic guidance that embeds AI best practices into your team and tools, ensuring every initiative drives measurable business impact.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      features: ['Train & Enable Your Teams', 'Architect Implementation Plans', 'Evaluate & Wireframe Solutions', 'Measure Business Impact']
    },
    {
      title: 'AI Partner',
      description: 'A fractional AI department that continuously develops, maintains, and scales your AI capabilities as a long-term extension of your organization',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          <circle cx="9" cy="9" r="1" />
          <circle cx="15" cy="9" r="1" />
        </svg>
      ),
      features: ['End-to-End Development', 'Infrastructure & Environment Management', 'Security & Governance Oversight', 'Continuous Scaling & Evolution']
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
          From strategic clarity to full-scale implementation, we provide the expertise and execution to turn AI from aspiration into operational reality for your organization.
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