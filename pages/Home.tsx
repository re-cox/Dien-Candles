import React from 'react';
import Hero from '../components/Hero';
import Collections from '../components/Collections';
import ProductGrid from '../components/ProductGrid';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import InstagramFeed from '../components/InstagramFeed';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Collections />
      <ProductGrid />
      <About />
      <InstagramFeed />
      <Testimonials />
    </>
  );
};

export default Home;