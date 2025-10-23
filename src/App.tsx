import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Benefits from './components/Benefits';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';
import OurApproach from './components/OurApproach';
import TrustedBy from './components/TrustedBy';
import OperationalAdvantage from './components/OperationalAdvantage';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar isScrolled={isScrolled} />
      <main>
        <Hero />
        {/* <Benefits /> */}
        
        <OurApproach />
        {/* <OperationalAdvantage /> */}
        <TrustedBy />
        <Services />
        <Contact />
        
        
        
        {/* <About /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
