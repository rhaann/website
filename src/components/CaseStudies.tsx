import React from 'react';

const CaseStudies: React.FC = () => {
  const caseStudies = [
    {
      title: 'E-commerce Personalization Engine',
      company: 'TechRetail Inc.',
      industry: 'E-commerce',
      challenge: 'Low customer engagement and conversion rates due to generic product recommendations.',
      solution: 'Developed a machine learning-powered recommendation system that analyzes user behavior, purchase history, and product interactions.',
      results: [
        { metric: 'Conversion Rate', value: '+45%', description: 'Increase in overall conversion rate' },
        { metric: 'Average Order Value', value: '+28%', description: 'Higher average order value per customer' },
        { metric: 'Customer Retention', value: '+62%', description: 'Improved customer retention rate' }
      ],
      technologies: ['Python', 'TensorFlow', 'AWS', 'React'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Predictive Maintenance System',
      company: 'ManufactureCorp',
      industry: 'Manufacturing',
      challenge: 'Unplanned equipment downtime causing significant production losses and maintenance costs.',
      solution: 'Implemented an IoT-based predictive maintenance system using sensor data and machine learning algorithms to predict equipment failures.',
      results: [
        { metric: 'Downtime Reduction', value: '-75%', description: 'Reduction in unplanned downtime' },
        { metric: 'Maintenance Costs', value: '-40%', description: 'Decrease in maintenance costs' },
        { metric: 'Equipment Lifespan', value: '+30%', description: 'Extended equipment lifespan' }
      ],
      technologies: ['IoT Sensors', 'Python', 'Azure ML', 'Power BI'],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section id="case-studies" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Case Studies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-world examples of how we've helped businesses leverage AI to solve 
            complex challenges and achieve remarkable results.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } lg:flex`}
            >
              {/* Image */}
              <div className="lg:w-1/2">
                <div className="h-64 lg:h-full bg-gradient-to-br from-primary-400 to-primary-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <p className="text-sm font-medium">Case Study</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-1/2 p-8 lg:p-12">
                {/* Header */}
                <div className="mb-6">
                  <div className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full mb-4">
                    {study.industry}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                    {study.title}
                  </h3>
                  <p className="text-primary-600 font-medium">{study.company}</p>
                </div>

                {/* Challenge & Solution */}
                <div className="space-y-6 mb-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                    <p className="text-gray-600">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                    <p className="text-gray-600">{study.solution}</p>
                  </div>
                </div>

                {/* Results */}
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-4">Results</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {study.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-primary-600 mb-1">
                          {result.value}
                        </div>
                        <div className="text-sm font-medium text-gray-900 mb-1">
                          {result.metric}
                        </div>
                        <div className="text-xs text-gray-600">
                          {result.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <button className="btn-primary">
                  Read Full Case Study
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-gray-100">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Ready to See Similar Results?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can apply AI solutions to your specific business challenges 
              and help you achieve similar transformative results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Start Your Project
              </button>
              <button className="btn-secondary">
                View More Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies; 