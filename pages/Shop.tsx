
import React, { useState, useMemo, useEffect } from 'react';
import { Filter, ChevronDown, Search, X, SlidersHorizontal, Check } from 'lucide-react';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';

type SortOption = 'newest' | 'price-asc' | 'price-desc';

const Shop: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortOption, setSortOption] = useState<SortOption>('newest');
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileFiltersOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileFiltersOpen]);

  const categories = [
    { id: 'all', name: 'Tümü' },
    { id: 'concept', name: 'Konsept Mumlar' },
    { id: 'decorative', name: 'Dekoratif' },
    { id: 'scented', name: 'Kokulu & Doğal' },
  ];

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...PRODUCTS];

    // Search Filter
    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(lowerQuery) || 
        p.description.toLowerCase().includes(lowerQuery)
      );
    }

    // Category Filter
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Price Filter (Simple logic based on mock data)
    // result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Sort
    switch (sortOption) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
      default:
        // Mocking newest by keeping original order or reversing
        break;
    }

    return result;
  }, [selectedCategory, sortOption, searchQuery, priceRange]);

  const toggleCategory = (catId: string) => {
    setSelectedCategory(catId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const FilterSidebar = () => (
    <div className="space-y-10">
      {/* Search */}
      <div>
        <h3 className="text-sm font-bold tracking-widest text-stone-900 uppercase mb-4">Ara</h3>
        <div className="relative">
          <input 
            type="text" 
            placeholder="Ürün ara..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-stone-200 px-4 py-2 pl-10 text-sm focus:outline-none focus:border-stone-500 transition-colors"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
        </div>
      </div>

      {/* Categories */}
      <div>
        <h3 className="text-sm font-bold tracking-widest text-stone-900 uppercase mb-4">Koleksiyonlar</h3>
        <ul className="space-y-3">
          {categories.map(cat => (
            <li key={cat.id}>
              <button
                onClick={() => toggleCategory(cat.id)}
                className={`group flex items-center justify-between w-full text-sm transition-all duration-300 ${
                  selectedCategory === cat.id 
                    ? 'text-stone-900 font-semibold pl-2 border-l-2 border-stone-900' 
                    : 'text-stone-500 hover:text-stone-800'
                }`}
              >
                <span>{cat.name}</span>
                {selectedCategory === cat.id && <Check className="w-3 h-3" />}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Price Range (Visual Only for MVP) */}
      <div>
        <h3 className="text-sm font-bold tracking-widest text-stone-900 uppercase mb-4">Fiyat Aralığı</h3>
        <div className="px-1">
          <div className="h-1 bg-stone-200 rounded-full mb-4 relative">
            <div className="absolute left-0 w-full h-full bg-stone-400 rounded-full"></div>
          </div>
          <div className="flex justify-between text-xs text-stone-500 font-medium">
            <span>0 ₺</span>
            <span>5000+ ₺</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-[#fafaf9] min-h-screen pt-24 pb-20"> {/* stone-50 background */}
      
      {/* Page Header */}
      <div className="bg-white border-b border-stone-100 py-12 mb-12">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-stone-800 mb-4 tracking-tight">
            Online Mağaza
          </h1>
          <p className="text-stone-500 max-w-xl mx-auto font-light text-sm md:text-base leading-relaxed">
            Evinizin ruhunu değiştirecek, el işçiliğiyle hazırlanmış özel tasarım mum koleksiyonlarımızı keşfedin.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28">
              <FilterSidebar />
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            
            {/* Toolbar (Mobile Filters & Desktop Sort) */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
              
              <span className="text-stone-500 text-sm hidden md:block">
                Toplam <span className="font-medium text-stone-900">{filteredAndSortedProducts.length}</span> ürün listeleniyor
              </span>

              {/* Mobile Filter Toggle */}
              <button 
                onClick={() => setIsMobileFiltersOpen(true)}
                className="lg:hidden w-full md:w-auto flex items-center justify-center space-x-2 bg-stone-900 text-white px-6 py-3 text-sm font-medium tracking-wide"
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span>Filtrele & Sırala</span>
              </button>

              {/* Desktop Sort */}
              <div className="hidden lg:flex items-center space-x-3 group relative">
                 <span className="text-sm text-stone-500">Sıralama:</span>
                 <div className="relative">
                    <select 
                      className="appearance-none bg-transparent text-stone-800 text-sm font-medium focus:outline-none border-b border-stone-300 pb-1 pr-6 cursor-pointer"
                      value={sortOption}
                      onChange={(e) => setSortOption(e.target.value as SortOption)}
                    >
                      <option value="newest">En Yeniler</option>
                      <option value="price-asc">Fiyat: Düşükten Yükseğe</option>
                      <option value="price-desc">Fiyat: Yüksekten Düşüğe</option>
                    </select>
                    <ChevronDown className="absolute right-0 top-1/2 -translate-y-full w-3 h-3 text-stone-800 pointer-events-none" />
                 </div>
              </div>
            </div>

            {/* Product Grid */}
            {filteredAndSortedProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12">
                {filteredAndSortedProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 bg-white border border-stone-100 rounded-sm text-center px-4">
                <Search className="w-12 h-12 text-stone-300 mb-4" />
                <h3 className="text-xl font-serif text-stone-800 mb-2">Ürün Bulunamadı</h3>
                <p className="text-stone-500 text-sm mb-6 max-w-md">
                  Arama kriterlerinize uygun ürün bulamadık. Lütfen filtreleri temizleyip tekrar deneyin.
                </p>
                <button 
                  onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
                  className="text-stone-800 border-b border-stone-800 pb-1 text-sm font-medium hover:text-stone-500 hover:border-stone-500 transition-colors"
                >
                  Tüm Ürünleri Göster
                </button>
              </div>
            )}

            {/* Pagination (Visual) */}
            {filteredAndSortedProducts.length > 0 && (
              <div className="mt-20 flex justify-center">
                <nav className="flex space-x-2" aria-label="Pagination">
                  <button className="w-10 h-10 flex items-center justify-center text-stone-900 border border-stone-900 bg-white font-medium text-sm">1</button>
                  <button className="w-10 h-10 flex items-center justify-center text-stone-500 hover:text-stone-900 font-medium text-sm transition-colors">2</button>
                  <button className="w-10 h-10 flex items-center justify-center text-stone-500 hover:text-stone-900 font-medium text-sm transition-colors">3</button>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <div 
        className={`fixed inset-0 z-[60] lg:hidden transition-opacity duration-300 ${isMobileFiltersOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileFiltersOpen(false)}
        ></div>

        {/* Drawer Content */}
        <div 
          className={`absolute right-0 top-0 h-full w-[300px] bg-white shadow-2xl p-6 overflow-y-auto transition-transform duration-300 transform ${isMobileFiltersOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="flex justify-between items-center mb-8 pb-4 border-b border-stone-100">
            <h2 className="text-lg font-serif font-medium text-stone-800">Filtrele & Sırala</h2>
            <button onClick={() => setIsMobileFiltersOpen(false)} className="text-stone-500 hover:text-stone-800">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="space-y-8">
            {/* Mobile Sort */}
            <div>
              <h3 className="text-xs font-bold tracking-widest text-stone-400 uppercase mb-3">Sıralama</h3>
              <div className="space-y-2">
                {[
                  { val: 'newest', label: 'En Yeniler' },
                  { val: 'price-asc', label: 'Fiyat: Düşükten Yükseğe' },
                  { val: 'price-desc', label: 'Fiyat: Yüksekten Düşüğe' }
                ].map(opt => (
                  <label key={opt.val} className="flex items-center space-x-3 cursor-pointer">
                    <input 
                      type="radio" 
                      name="sortMobile" 
                      value={opt.val}
                      checked={sortOption === opt.val}
                      onChange={(e) => setSortOption(e.target.value as SortOption)}
                      className="form-radio text-stone-800 focus:ring-stone-500 h-4 w-4 border-stone-300"
                    />
                    <span className={`text-sm ${sortOption === opt.val ? 'text-stone-900 font-medium' : 'text-stone-600'}`}>{opt.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Mobile Sidebar Content Reuse */}
            <div className="border-t border-stone-100 pt-6">
               <FilterSidebar />
            </div>
            
            <button 
              onClick={() => setIsMobileFiltersOpen(false)}
              className="w-full bg-stone-900 text-white py-3 text-sm font-medium tracking-wide mt-8"
            >
              SONUÇLARI GÖSTER
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Shop;
