import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
// import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import OurApproach from './components/OurApproach';
import TrustedBy from './components/TrustedBy';
import CaseStudiesPage from './pages/CaseStudiesPage';
import CaseStudyDetail from './pages/CaseStudyDetail';
import ArticlesPage from './pages/ArticlesPage';
import ArticleDetail from './pages/ArticleDetail';
import ScrollToTop from './components/ScrollToTop';
import AboutPage from './pages/AboutPage';
import Problem from './components/Problem';
import Reframe from './components/Reframe';
// import HowItWorks from './components/HowItWorks';
import Outcomes from './components/Outcomes';
import WhoItsFor from './components/WhoItsFor';
import CaseStudies from './components/CaseStudies';
import WhyUs from './components/WhyUs';

function HomePage() {
  return (
    <main>
      <Hero />
      <TrustedBy />
      <Problem />
      <Reframe />
      <OurApproach />
      <Outcomes />
      <WhoItsFor />
      <CaseStudies />
      <WhyUs />
      <Contact />
    </main>
  );
}

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
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Navbar isScrolled={isScrolled} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/articles/:slug" element={<ArticleDetail />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
