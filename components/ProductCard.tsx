import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const handleBuyClick = () => {
    window.location.href = product.shopierLink;
  };

  return (
    <div className="group flex flex-col h-full">
      <div className="relative overflow-hidden bg-stone-100 mb-4 rounded-sm aspect-square">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Overlay Button */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
           <button 
            onClick={handleBuyClick}
            className="bg-white text-stone-900 px-6 py-3 text-sm font-medium tracking-wide shadow-lg hover:bg-stone-50 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center"
           >
             <ShoppingBag className="w-4 h-4 mr-2" />
             SATIN AL
           </button>
        </div>
      </div>

      <div className="flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-lg font-medium text-stone-800 font-serif">{product.name}</h3>
          <span className="text-stone-800 font-medium">₺{product.price.toFixed(2)}</span>
        </div>
        <p className="text-stone-500 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        <div className="mt-auto">
           <button 
             onClick={handleBuyClick}
             className="w-full md:hidden py-3 border border-stone-200 text-stone-600 text-sm hover:bg-stone-50 transition-colors"
           >
             Satın Al
           </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;