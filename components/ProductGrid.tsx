import React from 'react';
import { PRODUCTS } from '../constants';
import { ShieldCheck } from 'lucide-react';
import ProductCard from './ProductCard';

const ProductGrid: React.FC = () => {
  return (
    <section id="shop" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-3">En Yeniler</h2>
            <p className="text-stone-500 font-light">
              Mevsimin ruhunu yansıtan, el yapımı özel tasarımlarımızı keşfedin.
            </p>
          </div>
          <div className="hidden md:block">
            <a href="/shop" className="text-stone-800 border-b border-stone-300 pb-1 hover:border-stone-800 transition-colors text-sm">
              Tüm Ürünleri Gör
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {PRODUCTS.slice(0, 6).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-8 md:hidden text-center">
          <a href="/shop" className="inline-block px-6 py-3 border border-stone-300 text-stone-800 text-sm font-medium">
            Tüm Ürünleri Gör
          </a>
        </div>

        <div className="mt-16 text-center">
            <div className="inline-flex items-center px-4 py-2 bg-stone-50 rounded-full text-stone-500 text-xs tracking-wide">
                <ShieldCheck className="w-4 h-4 mr-2 text-green-600" />
                Ödemeleriniz Shopier güvencesiyle alınır.
            </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;