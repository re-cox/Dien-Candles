export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: 'concept' | 'decorative' | 'scented';
  shopierLink: string; // URL to the specific Shopier product payment page
}

export interface InstagramPost {
  id: string;
  media_url: string;
  caption: string;
  permalink: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
}

export interface Review {
  id: string;
  customerName: string;
  rating: number;
  comment: string;
}

export interface Collection {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}