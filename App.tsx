import React, { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import AboutPage from './pages/AboutPage';

const App: React.FC = () => {
  const path = window.location.pathname;

  useEffect(() => {
    // Handle hash scrolling on load
    if (window.location.hash) {
      const element = document.getElementById(window.location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [path]);

  let pageContent;
  if (path === '/shop') {
    pageContent = <Shop />;
  } else if (path === '/about') {
    pageContent = <AboutPage />;
  } else {
    pageContent = <Home />;
  }

  return (
    <div className="min-h-screen flex flex-col font-sans text-stone-800 selection:bg-stone-200">
      <Header />
      <main className="flex-grow">
        {pageContent}
      </main>
      <Footer />
    </div>
  );
};

export default App;