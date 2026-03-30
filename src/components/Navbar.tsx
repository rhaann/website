import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isInnerPage = location.pathname !== '/';
  const showScrolled = isScrolled || isInnerPage;

  const navItems = [
    { name: 'The Problem', href: '#problem' },
    { name: 'The Solution', href: '#ourApproach' },
    { name: 'Who It\'s For', href: '#whoItsFor' },
    { name: 'Why Us', href: '#whyUs' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Articles', href: '/articles' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);

    if (href.startsWith('#')) {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const element = document.querySelector(href);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(href);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showScrolled
          ? 'bg-pure-white/95 backdrop-blur-md shadow-sm border-b border-sharp-orange-light'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link to="/" className="flex items-center space-x-3">
            <motion.img
              src="/logo_dark.svg"
              alt="Actual Insight Logo"
              className="w-8 h-8"
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.12, 1] }}
              transition={{ duration: 0.4, ease: ['easeOut', 'easeIn'], repeat: Infinity, repeatDelay: 4.6 }}
            />
            <h1 className={`text-xl font-bold transition-colors duration-300 ${showScrolled ? 'text-navy-black' : 'text-white'}`}>actual insight</h1>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`text-sm lg:text-base font-medium transition-colors duration-300 ${
                  showScrolled
                    ? 'text-navy-black/80 hover:text-navy-black'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#contact')}
              className={`px-6 py-2.5 font-semibold rounded-full text-sm lg:text-base transition-all duration-300 hover:shadow-lg hover:scale-105 ${showScrolled ? 'bg-sky-blue text-white' : 'bg-white text-navy-black'}`}
            >
              Get Started
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 transition-colors duration-300 ${showScrolled ? 'text-navy-black hover:text-navy-black/70' : 'text-white hover:text-white/70'}`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-pure-white border-t border-grey-lighter shadow-lg">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left nav-link py-3 text-base border-b border-grey-lighter/50"
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => handleNavClick('#contact')}
                className="block w-full mt-2 px-6 py-3 bg-navy-black text-white font-semibold rounded-full text-base transition-all duration-300 hover:bg-navy-black/90"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
