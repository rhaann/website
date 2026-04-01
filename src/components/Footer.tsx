import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  // const nav = [
  //   { label: 'About', href: '/about' },
  //   { label: 'Case Studies', href: '/case-studies' },
  //   { label: 'Articles', href: '/articles' },
  //   { label: 'Contact', href: '/#contact' },
  // ];

  return (
    <footer className="relative z-10 bg-navy-black text-pure-white -mt-12 sm:-mt-14 pt-2">
      {/* Wave top edge — same path as TrustedBy / Hero transition, navy fill */}
      <svg
        className="absolute top-0 left-0 w-full -translate-y-[calc(100%-1px)] pointer-events-none"
        viewBox="0 0 1440 48"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path
          d="M0 48H1440V18C1440 18 1320 0 1080 6C840 12 720 30 480 27C240 24 120 9 0 15V48Z"
          fill="#001A29"
        />
      </svg>

      <div className="container-custom relative">
        <div className="py-8 md:py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-8">
          <Link
            to="/"
            className="inline-grid grid-cols-[28px_minmax(0,280px)] gap-x-3 gap-y-0.5 text-left w-fit shrink-0 rounded-sm hover:opacity-90 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-black"
          >
            <img
              src="/logo_white.svg"
              alt=""
              width={28}
              height={28}
              className="col-start-1 row-start-1 w-7 h-7 self-center"
            />
            <span className="col-start-2 row-start-1 font-bold text-pure-white text-base leading-none self-center">
              actual insight
            </span>
            <p className="col-start-2 row-start-2 text-pure-white/55 text-sm leading-snug">
              Data-grounded AI strategy for real ROI.
            </p>
          </Link>

          <div className="flex flex-wrap items-center justify-end gap-x-6 gap-y-2 md:ml-auto md:shrink-0">
            {/* <nav className="flex flex-wrap justify-end gap-x-6 gap-y-2 text-sm">
              {nav.map((item) =>
                item.href.startsWith('/') && !item.href.startsWith('/#') ? (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="text-pure-white/70 hover:text-pure-white transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-pure-white/70 hover:text-pure-white transition-colors"
                  >
                    {item.label}
                  </a>
                )
              )}
            </nav> */}
            <a
              href="https://www.linkedin.com/company/actual-insight/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 bg-white/5 border border-white/15 rounded-md flex items-center justify-center hover:bg-white/10 transition-colors shrink-0"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-pure-white/45">
          <span>© {currentYear} Actual Insight. All rights reserved.</span>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <a href="/privacy" className="hover:text-pure-white/70 transition-colors">
              Privacy
            </a>
            <a href="/terms" className="hover:text-pure-white/70 transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
