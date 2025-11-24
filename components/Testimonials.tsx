import React from 'react';
import { Star } from 'lucide-react';
import { REVIEWS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-[#F5F5F4]"> {/* stone-100 */}
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-serif text-stone-800 text-center mb-16">
          Sizden Gelenler
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div key={review.id} className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow">
              <div className="flex text-amber-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < review.rating ? 'fill-current' : 'text-stone-200'}`} 
                  />
                ))}
              </div>
              <p className="text-stone-600 text-sm italic mb-6 leading-relaxed">
                "{review.comment}"
              </p>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-stone-200 rounded-full flex items-center justify-center text-stone-500 text-xs font-bold mr-3">
                  {review.customerName.charAt(0)}
                </div>
                <span className="text-stone-800 text-sm font-medium">
                  {review.customerName}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;