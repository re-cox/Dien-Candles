import React from 'react';
import { Leaf, Heart, Recycle, Sparkles } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pt-24 pb-12">
      {/* Hero / Intro Section */}
      <section className="container mx-auto px-6 mb-20 text-center">
        <span className="text-xs font-bold tracking-[0.3em] text-stone-400 uppercase block mb-4 animate-fade-in-up">
          DienCandles
        </span>
        <h1 className="text-4xl md:text-6xl font-serif text-stone-800 mb-8 animate-fade-in-up delay-100">
          Işığın ve Kokunun <br /> Büyülü Dansı
        </h1>
        <p className="text-stone-500 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in-up delay-200">
          Küçük bir atölyede başlayan tutkumuz, bugün evlerinize sıcaklık ve huzur taşıyan zarif bir markaya dönüştü.
        </p>
      </section>

      {/* Main Story Section */}
      <section className="container mx-auto px-6 mb-24">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full md:w-1/2 relative">
            <div className="aspect-[4/5] overflow-hidden rounded-sm bg-stone-100 relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?q=80&w=2070&auto=format&fit=crop" 
                alt="Candle Making Process" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            {/* Background Decorative Element */}
            <div className="absolute top-8 -left-8 w-full h-full border border-stone-200 -z-0 hidden md:block"></div>
          </div>
          
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl font-serif text-stone-800">Nasıl Başladık?</h2>
            <p className="text-stone-600 font-light leading-relaxed">
              DienCandles, sadece bir mum markası olmanın ötesinde, bir yaşam tarzı sunma hayaliyle kuruldu. Doğanın sunduğu saf malzemeleri, modern tasarım anlayışıyla birleştirerek; mekanlarınıza sadece ışık değil, aynı zamanda bir ruh katmayı hedefledik.
            </p>
            <p className="text-stone-600 font-light leading-relaxed">
              Her şey, koku hafızasının gücüne olan inancımızla başladı. Bir kokunun bizi geçmişteki mutlu bir ana götürebileceğini ya da bulunduğumuz ortamın enerjisini tamamen değiştirebileceğini keşfettiğimizde, bu büyüyü herkesle paylaşmak istedik.
            </p>
            <div className="pt-6">
              <img 
                src="https://signature.freefire-name.com/img.php?f=7&t=DienCandles" 
                alt="Founder Signature" 
                className="h-12 opacity-60" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="bg-stone-50 py-24 mb-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-stone-800 mb-4">Değerlerimiz</h2>
            <div className="w-12 h-px bg-stone-400 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm text-stone-700 mb-2">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif text-stone-800">Doğal İçerik</h3>
              <p className="text-sm text-stone-500 font-light">
                %100 doğal soy wax ve bitkisel kaynaklı içerikler kullanıyoruz. Parafin içermez.
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm text-stone-700 mb-2">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif text-stone-800">El Yapımı</h3>
              <p className="text-sm text-stone-500 font-light">
                Her bir mum, atölyemizde büyük bir özen ve sevgiyle elde dökülmektedir.
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm text-stone-700 mb-2">
                <Recycle className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif text-stone-800">Sürdürülebilir</h3>
              <p className="text-sm text-stone-500 font-light">
                Geri dönüştürülebilir ambalajlar ve çevre dostu üretim süreçlerini benimsiyoruz.
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm text-stone-700 mb-2">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif text-stone-800">Premium Esans</h3>
              <p className="text-sm text-stone-500 font-light">
                IFRA sertifikalı, sağlığa zararsız ve kalıcı koku yayan premium esanslar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process / Atelier Section */}
      <section className="container mx-auto px-6 mb-24">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl font-serif text-stone-800">Atölyemizden</h2>
            <p className="text-stone-600 font-light leading-relaxed">
              Üretim sürecimiz bir meditasyon gibi. Soya mumunun doğru sıcaklığa ulaşması, esansın en uygun anda eklenmesi ve fitilin milimetrik hizalanması... Hepsi sabır ve dikkat gerektiren adımlar.
            </p>
            <p className="text-stone-600 font-light leading-relaxed">
              Size ulaşan her kutunun içinde sadece bir ürün değil, saatlerce süren bir emek ve detaylara gösterilen özen var.
            </p>
            <a href="/shop" className="inline-block mt-4 text-stone-800 border-b border-stone-800 pb-1 text-sm font-medium hover:text-stone-500 hover:border-stone-500 transition-colors">
              Koleksiyonu İncele
            </a>
          </div>

          <div className="w-full md:w-1/2">
             <div className="grid grid-cols-2 gap-4">
               <img 
                 src="https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=1974&auto=format&fit=crop" 
                 alt="Candle Detail" 
                 className="rounded-sm w-full h-64 object-cover mt-8"
               />
               <img 
                 src="https://images.unsplash.com/photo-1596436647226-4d6a92892308?q=80&w=1974&auto=format&fit=crop" 
                 alt="Candle Atmosphere" 
                 className="rounded-sm w-full h-64 object-cover"
               />
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;