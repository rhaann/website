import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import OurApproach from './components/OurApproach';
import TrustedBy from './components/TrustedBy';
import CaseStudiesPage from './pages/CaseStudiesPage';
import CaseStudyDetail from './pages/CaseStudyDetail';
import ArticlesPage from './pages/ArticlesPage';
import ArticleDetail from './pages/ArticleDetail';
import ScrollToTop from './components/ScrollToTop';

function HomePage() {
  return (
    <main>
      <Hero />
      <OurApproach />
      <TrustedBy />
      <Services />
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
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
