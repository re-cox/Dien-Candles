import React from 'react';
import { COLLECTIONS } from '../constants';
import { ArrowRight } from 'lucide-react';

const Collections: React.FC = () => {
  return (
    <section id="collections" className="py-20 md:py-32 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-4">Koleksiyonlar</h2>
          <div className="w-16 h-px bg-stone-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {COLLECTIONS.map((collection) => (
            <div key={collection.id} className="group relative cursor-pointer">
              <div className="overflow-hidden rounded-sm aspect-[3/4] mb-6">
                <img 
                  src={collection.imageUrl} 
                  alt={collection.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-serif text-stone-800 mb-2 group-hover:text-stone-600 transition-colors">
                {collection.title}
              </h3>
              <p className="text-stone-500 text-sm leading-relaxed mb-4">
                {collection.description}
              </p>
              <button className="flex items-center text-xs font-semibold tracking-widest text-stone-800 border-b border-stone-800 pb-1 group-hover:text-stone-500 group-hover:border-stone-500 transition-colors">
                İNCELE <ArrowRight className="ml-2 w-3 h-3" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;