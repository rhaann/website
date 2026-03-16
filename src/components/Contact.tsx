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

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    emailjs.sendForm(serviceId, templateId, form.current!, publicKey)
      .then(() => {
        setSubmitStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
      })
      .catch(() => {
        setSubmitStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const inputClasses =
    'w-full px-0 py-3 bg-transparent border-b border-navy-black/15 text-navy-black placeholder-navy-black/30 focus:border-sharp-orange focus:outline-none transition-colors duration-300 text-base';

  return (
    <section id="contact" className="py-14 md:py-20 bg-grey-lighter/30">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="text-sharp-orange text-sm font-medium tracking-[0.2em] uppercase mb-5 block">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-[3.25rem] md:leading-[1.15] font-extrabold text-navy-black mb-5">
              Let's talk about your strategy.
            </h2>
            <p className="text-navy-black/50 text-base md:text-lg max-w-xl">
              Tell us where you are and where you want to go. We'll get back to you within 24 hours.
            </p>
          </div>

          <div className="h-px bg-navy-black/10 mb-10" />

          <form ref={form} onSubmit={handleSubmit} className="max-w-3xl space-y-8">
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
              <div>
                <label htmlFor="firstName" className="block text-xs font-medium tracking-[0.15em] uppercase text-navy-black/40 mb-3">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                  placeholder="John"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-xs font-medium tracking-[0.15em] uppercase text-navy-black/40 mb-3">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                  placeholder="Doe"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
              <div>
                <label htmlFor="email" className="block text-xs font-medium tracking-[0.15em] uppercase text-navy-black/40 mb-3">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                  placeholder="john@company.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-xs font-medium tracking-[0.15em] uppercase text-navy-black/40 mb-3">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-medium tracking-[0.15em] uppercase text-navy-black/40 mb-3">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className={`${inputClasses} resize-none`}
                placeholder="Tell us about your organization and how we can help..."
              />
            </div>

            <input
              type="hidden"
              name="time"
              value={new Date().toLocaleString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                timeZoneName: 'short',
              })}
            />

            {submitStatus === 'success' && (
              <div className="border border-green-600/20 bg-green-50 text-green-700 px-5 py-4 rounded-lg text-sm">
                Thank you! We'll get back to you within 24 hours.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="border border-red-600/20 bg-red-50 text-red-700 px-5 py-4 rounded-lg text-sm">
                Something went wrong. Please try again or contact us directly.
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`font-semibold py-4 px-10 rounded-lg transition-all duration-300 uppercase tracking-wider text-sm ${
                isSubmitting
                  ? 'bg-navy-black/10 text-navy-black/30 cursor-not-allowed'
                  : 'bg-sharp-orange hover:bg-sharp-orange/90 text-white'
              }`}
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
