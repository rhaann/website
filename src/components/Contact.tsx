import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-grey-lighter/30 py-20">
      <div className="container-custom">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Panel - Contact Information */}
            <div className="relative">
              {/* Subtle background decorative elements */}
              <div className="absolute inset-0 overflow-hidden">
                {/* Large subtle blob shape */}
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-grey-lighter rounded-full opacity-20 transform translate-x-[-30%] translate-y-[30%]"></div>
                
                {/* Small subtle blob shape */}
                <div className="absolute top-32 right-8 w-24 h-24 bg-grey-lighter rounded-full opacity-15"></div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h2 className="text-5xl font-bold text-navy-black mb-6">
                  Contact Us
                </h2>
                <p className="text-xl text-navy-black/70 mb-12 leading-relaxed">
                  We are an industry-leading company that values honesty, integrity, and efficiency. 
                  Building quality products and caring about our clients' success.
                </p>
                
                {/* Contact features */}
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-navy-black rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-pure-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy-black mb-2">Quick Response</h4>
                      <p className="text-navy-black/70">We'll get back to you within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-navy-black rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-pure-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy-black mb-2">Free Consultation</h4>
                      <p className="text-navy-black/70">No cost initial discussion about your project</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-navy-black rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-pure-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy-black mb-2">Nashville, TN</h4>
                      <p className="text-navy-black/70">Based in Music City</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Panel - Contact Form */}
            <div className="relative">
              <div className="bg-pure-white rounded-2xl shadow-xl p-8 lg:p-12 border border-grey-light/50">
                <h3 className="text-2xl font-bold text-sharp-orange mb-8">
                  Need help with your project?
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-navy-black mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-b-2 border-sky-blue/30 focus:border-sky-blue outline-none transition-colors bg-transparent"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-navy-black mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-b-2 border-sky-blue/30 focus:border-sky-blue outline-none transition-colors bg-transparent"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-navy-black mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-b-2 border-sky-blue/30 focus:border-sky-blue outline-none transition-colors bg-transparent"
                      placeholder="john@company.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-navy-black mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-b-2 border-sky-blue/30 focus:border-sky-blue outline-none transition-colors bg-transparent"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-navy-black mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border-b-2 border-sky-blue/30 focus:border-sky-blue outline-none transition-colors bg-transparent resize-none"
                      placeholder="Tell us about your project and how we can help..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-sky-blue hover:bg-dark-sky-blue text-pure-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 uppercase tracking-wide"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 