import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
             <div className="relative z-10 rounded-sm overflow-hidden">
                <img 
                  src="https://i.ibb.co/bMFMjnj5/unnamed-9.jpg" 
                  alt="Crafting Candles" 
                  className="w-full h-auto object-cover"
                />
             </div>
             {/* Decorative element */}
             <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-stone-100 -z-0"></div>
          </div>
          
          <div className="lg:w-1/2 text-center lg:text-left">
            <span className="text-xs font-bold tracking-[0.2em] text-stone-400 uppercase block mb-4">
              HİKAYEMİZ
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-8 leading-tight">
              Doğal & El Yapımı <br/> Işık Sanatı
            </h2>
            <p className="text-stone-600 leading-relaxed mb-6 font-light">
              Her bir mum, özel el işçiliğiyle tek tek üretilir. Doğal soy wax, pamuk fitil ve premium esans yağları kullanıyoruz. 
            </p>
            <p className="text-stone-600 leading-relaxed mb-8 font-light">
              Amacımız, sadece bir aydınlatma aracı değil; hem dekorasyonunuza hem de ruh halinize iyi gelen, modern ve zarif atmosferler tasarlamak. Sürdürülebilirlik ilkemizle, doğaya saygılı ve geri dönüştürülebilir malzemeler tercih ediyoruz.
            </p>
            
            <div className="grid grid-cols-3 gap-4 border-t border-stone-100 pt-8">
               <div>
                  <h4 className="font-serif text-2xl text-stone-800 mb-1">100%</h4>
                  <span className="text-xs text-stone-500 uppercase tracking-wide">Doğal Soy Wax</span>
               </div>
               <div>
                  <h4 className="font-serif text-2xl text-stone-800 mb-1">El</h4>
                  <span className="text-xs text-stone-500 uppercase tracking-wide">Yapımı</span>
               </div>
               <div>
                  <h4 className="font-serif text-2xl text-stone-800 mb-1">Eco</h4>
                  <span className="text-xs text-stone-500 uppercase tracking-wide">Dostu</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;