import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, Search } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Ana Sayfa', to: '/' },
    { name: 'Koleksiyonlar', to: '/#collections' },
    { name: 'Mağaza', to: '/shop' },
    { name: 'Hakkımızda', to: '/about' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled || !isHomePage ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className={`text-2xl font-semibold tracking-widest font-serif ${isScrolled || !isHomePage ? 'text-stone-800' : 'text-stone-800 md:text-white'}`}>
          DienCandles
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => {
             // Handle hash links differently if not on home page
             const isHashLink = link.to.startsWith('/#');
             const finalTo = isHashLink && !isHomePage ? '/' + link.to.substring(2) : link.to;

             return (
              <Link
                key={link.name} 
                to={link.to}
                className={`text-sm font-medium tracking-wide transition-colors ${isScrolled || !isHomePage ? 'text-stone-600 hover:text-stone-900' : 'text-stone-200 hover:text-white'}`}
              >
                {link.name}
              </Link>
             );
          })}
        </nav>

        {/* Icons */}
        <div className={`hidden md:flex items-center space-x-5 ${isScrolled || !isHomePage ? 'text-stone-600' : 'text-stone-200'}`}>
          <Search className="w-5 h-5 cursor-pointer hover:opacity-80 transition-opacity" />
          <Link to="/shop" className="relative cursor-pointer hover:opacity-80 transition-opacity">
            <ShoppingBag className="w-5 h-5" />
            <span className={`absolute -top-1 -right-1 w-2 h-2 rounded-full ${isScrolled || !isHomePage ? 'bg-stone-800' : 'bg-white'}`}></span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden ${isScrolled || !isHomePage ? 'text-stone-800' : 'text-stone-800'}`} 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-stone-100 flex flex-col p-6 space-y-4 animate-fadeIn">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.to}
              className="text-stone-600 hover:text-stone-900 text-lg font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;