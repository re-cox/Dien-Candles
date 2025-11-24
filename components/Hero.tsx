import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Instagram } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images4.alphacoders.com/129/1290345.jpg" 
          alt="Candle Ambiance" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-stone-900/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto text-white">
        <p className="text-sm md:text-base uppercase tracking-[0.3em] mb-4 opacity-90 animate-fade-in-up">
          Doğal • El Yapımı • Timeless
        </p>
        <h1 className="text-5xl md:text-7xl font-serif font-light mb-6 leading-tight animate-fade-in-up delay-100">
          Işığın En Zarif Hali
        </h1>
        <p className="text-lg md:text-xl font-light mb-10 text-stone-100 max-w-2xl mx-auto animate-fade-in-up delay-200">
          Doğal içerikler, modern tasarım ve her konsept için özel el yapımı mum koleksiyonları.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6 animate-fade-in-up delay-300">
          <Link 
            to="/shop"
            className="group relative px-8 py-3 bg-stone-100 text-stone-900 text-sm font-medium tracking-wider overflow-hidden rounded-sm transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105"
          >
            <span className="relative z-10 flex items-center">
              ALIŞVERİŞE BAŞLA <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
          
          <a 
            href="https://instagram.com/diencandles" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center text-stone-100 hover:text-white transition-colors text-sm font-medium tracking-wide border-b border-transparent hover:border-white pb-1"
          >
            <Instagram className="w-4 h-4 mr-2" />
            Instagram'da Gör
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;