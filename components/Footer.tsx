import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-stone-900 text-stone-400 py-16 text-sm font-light">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-white text-xl font-serif tracking-widest">DienCandles</h3>
            <p className="leading-relaxed opacity-80">
              Modern yaşam alanları için doğal, zarif ve el yapımı mum koleksiyonları.
            </p>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="text-white font-medium mb-4">Mağaza</h4>
            <ul className="space-y-2">
              <li><Link to="/shop" className="hover:text-white transition-colors">Tüm Ürünler</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors">Konsept Mumlar</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors">Hediye Setleri</Link></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-white font-medium mb-4">Destek</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Kargo & Teslimat</a></li>
              <li><a href="#" className="hover:text-white transition-colors">İade Koşulları</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sıkça Sorulan Sorular</a></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Hakkımızda</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-medium mb-4">Takipte Kalın</h4>
            <div className="flex space-x-4 mb-6">
              <a href="https://instagram.com/diencandles" target="_blank" rel="noreferrer" className="w-10 h-10 border border-stone-700 rounded-full flex items-center justify-center hover:bg-white hover:text-stone-900 transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 border border-stone-700 rounded-full flex items-center justify-center hover:bg-white hover:text-stone-900 transition-all">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
            <p className="text-xs opacity-60">
              Bültenimize abone olun, yeni koleksiyonlardan haberdar olun.
            </p>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-16 pt-8 text-center text-xs opacity-50 flex flex-col md:flex-row justify-between items-center">
          <p>© 2025 DienCandles. Tüm Hakları Saklıdır.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <a href="#" className="hover:text-white">Gizlilik Politikası</a>
            <a href="#" className="hover:text-white">Kullanım Şartları</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;