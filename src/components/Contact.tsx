import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Zap, ShieldCheck } from 'lucide-react';

const Contact: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const highlights = [
    { icon: Clock, text: '120-minute facilitated session' },
    { icon: Zap, text: 'Walk away with actionable clarity' },
    { icon: ShieldCheck, text: 'No obligation, no vendor pitch' },
  ];

  return (
    <section id="contact" className="bg-[#f8fbff] py-20 sm:py-24 lg:py-32">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            {/* Left - messaging */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-3 text-navy-black/40 text-xs font-medium tracking-[0.2em] uppercase mb-6">
                <span className="w-8 h-px bg-navy-black/20" />
                Get Started
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-navy-black leading-[1.12] mb-5">
                Start with{' '}
                <span className="text-sky-blue">clarity</span>
              </h2>
              <p className="text-navy-black/55 text-base sm:text-lg leading-relaxed mb-4">
                In 120 minutes, we'll help you identify where AI creates real value
                in your business - and where it doesn't.
              </p>
              <p className="text-navy-black/55 text-base sm:text-lg leading-relaxed mb-10">
                It's the fastest way to get out of AI uncertainty and into execution.
              </p>

              <div className="space-y-4 mb-10">
                {highlights.map((h) => (
                  <div key={h.text} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-sky-blue/8 border border-sky-blue/15 flex items-center justify-center text-sky-blue shrink-0">
                      <h.icon size={15} strokeWidth={2} />
                    </div>
                    <span className="text-navy-black/60 text-sm sm:text-base">{h.text}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const calendlyEl = document.querySelector('.calendly-inline-widget');
                  calendlyEl?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 bg-sharp-orange hover:bg-sharp-orange/90 text-white font-medium text-base px-8 py-4 rounded-lg transition-colors duration-200 lg:hidden"
              >
                Book a Clarity Session
                <ArrowRight size={18} />
              </a>
            </motion.div>

            {/* Right - Calendly embed */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <div
                className="calendly-inline-widget rounded-xl overflow-hidden border border-navy-black/8"
                data-url="https://calendly.com/actualinsight/clarity-session"
                style={{ minWidth: '280px', height: '660px' }}
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
