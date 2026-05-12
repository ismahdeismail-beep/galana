export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
  isChefRecommendation?: boolean;
  isBestSeller?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  category: 'food' | 'ambiance' | 'events';
  title: string;
}
