import React from 'react';

const OurApproach: React.FC = () => {
  return (
    <section id="ourApproach" className="section-padding bg-pure-white">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">
              Faster, Leaner, Smarter AI Deployment
            </h2>
          </div>

          {/* Comparison Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Our Approach */}
            <div className="bg-dark-sky-blue rounded-2xl p-10 lg:p-12 text-pure-white">
              <h3 className="text-2xl font-bold mb-8">Our Approach</h3>
              <ul className="space-y-5">
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-pure-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-pure-white/90">Starts with an in depth audit</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-pure-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-pure-white/90">Builds targeted, reliable solutions</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-pure-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-pure-white/90">Your data stays yours, drives competitive advantage</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-pure-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-pure-white/90">Scales naturally as business needs to evolve</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-pure-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-pure-white/90">Succeeds by proving value at every step</span>
                </li>
              </ul>
            </div>

            {/* Traditional Approach */}
            <div className="bg-grey-lighter rounded-2xl p-10 lg:p-12">
              <h3 className="text-2xl font-bold mb-8 text-navy-black">Traditional Approach</h3>
              <ul className="space-y-5">
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-navy-black mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-navy-black/70">Sells AI hype, not reality</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-navy-black mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-navy-black/70">Replaces workflows instead of enhancing them</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-navy-black mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-navy-black/70">Your data trains their models for everyone else</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-navy-black mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-navy-black/70">Promises future value, delivers present headaches</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-navy-black mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-navy-black/70">Fails from complexity and vendor dependence</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApproach; 