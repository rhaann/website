import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

/** Clarity session — opens Calendly in a new tab */
const CALENDLY_CLARITY_URL = 'https://calendly.com/alex-actualinsight/30min';

const Contact: React.FC = () => {
  const bullets = [
    'Identify where AI could drive ROI in your business',
    'Pressure-test your current approach',
    'Walk away with a clearer path forward',
  ];

  return (
    <section
      id="contact"
      className="bg-white pt-10 sm:pt-12 lg:pt-16 pb-28 sm:pb-32 lg:pb-36"
    >
      <div className="container-custom">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-center">
          {/* Left — all copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <span className="inline-flex items-center gap-3 text-sharp-orange text-xs font-medium tracking-[0.2em] uppercase mb-6">
              <span className="w-8 h-px bg-sharp-orange/40" />
              Contact
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-navy-black leading-[1.5] mb-6">
              Let&apos;s get clear on where AI is worth your time.
            </h2>

            <p className="text-navy-black/55 text-base sm:text-lg leading-relaxed mb-6">
              In 30 minutes, we&apos;ll help you:
            </p>

            <ul className="space-y-3">
              {bullets.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-navy-black/60 text-base sm:text-lg leading-relaxed"
                >
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-sky-blue shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right — pill CTA only */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex justify-stretch lg:justify-end w-full"
          >
            <div className="flex flex-row items-center justify-between gap-4 w-full max-w-xl lg:max-w-none rounded-full border border-navy-black/10 bg-navy-black/[0.03] pl-4 sm:pl-6 pr-2 py-2.5">
              <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                <div className="flex shrink-0 -space-x-2">
                  <img
                    src="/Alex.jpeg"
                    alt="Alex Morton"
                    className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm"
                  />
                  <div className="w-10 h-10 rounded-full border-2 border-white shadow-sm overflow-hidden">
                    <img
                      src="/Ruj.png"
                      alt=""
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
                <p className="text-navy-black text-sm sm:text-base font-medium leading-snug">
                  Let's connect!
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={CALENDLY_CLARITY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center min-h-[44px] px-5 sm:px-7 py-2.5 bg-sky-blue text-white font-semibold text-sm sm:text-base rounded-full hover:bg-sky-blue/90 transition-colors duration-200 whitespace-nowrap"
                >
                  Book an Intro Call
                </a>
                <a
                  href={CALENDLY_CLARITY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-sky-blue text-white hover:bg-sky-blue/90 transition-colors duration-200"
                  aria-label="Open scheduling calendar"
                >
                  <ArrowUpRight className="w-5 h-5" strokeWidth={2} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
