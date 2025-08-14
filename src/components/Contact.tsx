import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // EmailJS configuration using environment variables
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    // Validate environment variables
    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS environment variables are not configured');
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    emailjs.sendForm(serviceId, templateId, form.current!, publicKey)
      .then((result) => {
        console.log('SUCCESS!', result.text);
        setSubmitStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
      })
      .catch((error) => {
        console.log('FAILED...', error.text);
        setSubmitStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
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
                
                <form ref={form} onSubmit={handleSubmit} className="space-y-6">
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
                  
                  {/* Hidden timestamp field */}
                  <input
                    type="hidden"
                    name="time"
                    value={new Date().toLocaleString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                      timeZoneName: 'short'
                    })}
                  />
                  
                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
                      Thank you! We'll get back to you within 24 hours.
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
                      Something went wrong. Please try again or contact us directly.
                    </div>
                  )}
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full font-semibold py-4 px-6 rounded-lg transition-colors duration-200 uppercase tracking-wide ${
                      isSubmitting 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-sky-blue hover:bg-dark-sky-blue'
                    } text-pure-white`}
                  >
                    {isSubmitting ? 'Sending...' : 'Submit'}
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