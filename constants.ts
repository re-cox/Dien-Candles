import { Collection, Product, Review, InstagramPost } from './types';

// Mock Products
export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Yılbaşı Mum Seti',
    description: 'Sedir ağacı ve amber notaları ile rahatlatıcı bir akşam.',
    price: 2000.00,
    imageUrl: 'https://i.ibb.co/ZzJvPhcS/Ads-z-tasar-m.png',
    category: 'scented',
    shopierLink: 'https://www.shopier.com/diencandles/41457066', 
  },
  {
    id: 'p2',
    name: 'Gingerbread Kız Mum',
    description: 'Sonbahar esintisi taşıyan, tarçın ve balkabağı karışımı.',
    price: 320.00,
    imageUrl: 'https://i.ibb.co/G4ThRk2r/Ads-z-tasar-m-4.png',
    category: 'concept',
    shopierLink: 'https://www.shopier.com/diencandles/41457569',
  },
  {
    id: 'p3',
    name: 'Noel Köpeği Mum',
    description: 'Modern ev dekorasyonu için el yapımı düğüm mum.',
    price: 500.00,
    imageUrl: 'https://i.ibb.co/TMJwPRkn/Ads-z-tasar-m-7.png',
    category: 'decorative',
    shopierLink: 'https://www.shopier.com/diencandles/41457627',
  },
  {
    id: 'p4',
    name: 'Süslemeli Yılbaşı Ağacı Mum',
    description: 'Saf vanilya çekirdekleri ile tatlı ve yumuşak bir dokunuş.',
    price: 400.00,
    imageUrl: 'https://i.ibb.co/gL8p4CCQ/Ads-z-tasar-m-3.png',
    category: 'scented',
    shopierLink: 'https://www.shopier.com/diencandles/41457679',
  },
  {
    id: 'p5',
    name: 'Santa Yıldız Mum',
    description: 'Halloween özel serisi, karanlıkta parlayan hayalet figürü.',
    price: 500.00,
    imageUrl: 'https://i.ibb.co/4wx4RGsH/Ads-z-tasar-m-5.png',
    category: 'concept',
    shopierLink: 'https://www.shopier.com/diencandles/41457809',
  },
  {
    id: 'p6',
    name: "Santa'lı Çam Ağacı Mum",
    description: 'Sofralarınız için zarif, burgu formunda uzun mum.',
    price: 500.00,
    imageUrl: 'https://i.ibb.co/HT00zpF5/Ads-z-tasar-m-6.png',
    category: 'decorative',
    shopierLink: 'https://www.shopier.com/diencandles/41457837',
  }
];

// Collections Data
export const COLLECTIONS: Collection[] = [
  {
    id: 'c1',
    title: 'Konsept Mumlar',
    description: 'Yılbaşı, Halloween ve özel günler için tematik tasarımlar.',
    imageUrl: 'https://i.ibb.co/F4xcKVY1/unnamed-11.jpg',
  },
  {
    id: 'c2',
    title: 'Dekoratif Mumlar',
    description: 'Yaşam alanlarınıza modern bir dokunuş katan heykelsi formlar.',
    imageUrl: 'https://i.ibb.co/v65LnJJn/unnamed-12.jpg',
  },
  {
    id: 'c3',
    title: 'Kokulu & Doğal',
    description: '%100 doğal soy wax ve premium esans yağları ile üretildi.',
    imageUrl: 'https://i.ibb.co/9k9pjypp/785e43e5-7692-4306-8cb5-30e250231123.jpg',
  },
];

// Testimonials
export const REVIEWS: Review[] = [
  {
    id: 'r1',
    customerName: 'Elif Y.',
    rating: 5,
    comment: 'Paketleme o kadar özenliydi ki açmaya kıyamadım. Kokusu tüm odayı sardı.',
  },
  {
    id: 'r2',
    customerName: 'Elçin K.',
    rating: 5,
    comment: 'Dekoratif düğüm mumlar salonuma çok modern bir hava kattı. Teşekkürler!',
  },
  {
    id: 'r3',
    customerName: 'Selin A.',
    rating: 4,
    comment: 'Doğal içerikli olması benim için çok önemliydi. Baş ağrısı yapmıyor, harika.',
  },
];

// Fallback Instagram Data (If API fails or token is missing)
export const MOCK_INSTAGRAM_POSTS: InstagramPost[] = [
  { id: '1', media_url: 'https://picsum.photos/id/401/400/400', caption: 'Yeni sezon hazırlıkları...', permalink: '#', media_type: 'IMAGE' },
  { id: '2', media_url: 'https://picsum.photos/id/402/400/400', caption: 'Atölyeden kareler ✨', permalink: '#', media_type: 'IMAGE' },
  { id: '3', media_url: 'https://picsum.photos/id/403/400/400', caption: 'Pazar modu 🕯️', permalink: '#', media_type: 'IMAGE' },
  { id: '4', media_url: 'https://picsum.photos/id/404/400/400', caption: 'Detaylar...', permalink: '#', media_type: 'IMAGE' },
  { id: '5', media_url: 'https://picsum.photos/id/405/400/400', caption: 'Müşteri fotoğrafları ❤️', permalink: '#', media_type: 'IMAGE' },
  { id: '6', media_url: 'https://picsum.photos/id/406/400/400', caption: 'Yılbaşı koleksiyonu yayında!', permalink: '#', media_type: 'IMAGE' },
];

export const INSTAGRAM_ACCESS_TOKEN = ''; // Add your long-lived token here for real data