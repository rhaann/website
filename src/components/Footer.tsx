import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-black text-pure-white">
      <div className="container-custom">
        <div className="py-16 lg:py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <div className="flex items-center space-x-3 mb-6">
                  <img 
                    src="/logo_white.svg" 
                    alt="Actual Insight Logo" 
                    className="w-8 h-8"
                  />
                  <h3 className="text-xl font-bold text-pure-white">
                    actual insight
                  </h3>
                </div>
                <p className="text-pure-white/70 leading-relaxed max-w-md">
                  We build AI that adapts to you, transforming workflows into intelligent systems by automating processes, 
                  surfacing insights, and accelerating growth with solutions designed specifically for how your business operates.
                </p>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/company/actual-insight/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-navy-black/50 border border-pure-white/20 rounded-lg flex items-center justify-center hover:bg-pure-white hover:border-pure-white transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="https://twitter.com/actualinsight"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-navy-black/50 border border-pure-white/20 rounded-lg flex items-center justify-center hover:bg-pure-white hover:border-pure-white transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a
                  href="https://github.com/actualinsight"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-navy-black/50 border border-pure-white/20 rounded-lg flex items-center justify-center hover:bg-pure-white hover:border-pure-white transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Solutions */}
            <div>
              <h4 className="text-lg font-semibold text-pure-white mb-6">Solutions</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#services" className="text-pure-white/70 hover:text-pure-white transition-colors duration-200">
                    Workflow Automation
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-pure-white/70 hover:text-pure-white transition-colors duration-200">
                    AI-Powered Insights
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-pure-white/70 hover:text-pure-white transition-colors duration-200">
                    Conversational AI
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-pure-white/70 hover:text-pure-white transition-colors duration-200">
                    Business Intelligence
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-pure-white/70 hover:text-pure-white transition-colors duration-200">
                    Custom AI Solutions
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-lg font-semibold text-pure-white mb-6">Company</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#about" className="text-pure-white/70 hover:text-pure-white transition-colors duration-200">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#benefits" className="text-pure-white/70 hover:text-pure-white transition-colors duration-200">
                    Benefits
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-pure-white/70 hover:text-pure-white transition-colors duration-200">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/blog" className="text-pure-white/70 hover:text-pure-white transition-colors duration-200">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-pure-white/20 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-pure-white/50 text-sm mb-4 md:mb-0">
                © {currentYear} actual insight. All rights reserved.
              </div>
              <div className="flex space-x-6 text-sm">
                <a href="/privacy" className="text-pure-white/50 hover:text-pure-white transition-colors duration-200">
                  Privacy Policy
                </a>
                <a href="/terms" className="text-pure-white/50 hover:text-pure-white transition-colors duration-200">
                  Terms of Service
                </a>
                <a href="/cookies" className="text-pure-white/50 hover:text-pure-white transition-colors duration-200">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 