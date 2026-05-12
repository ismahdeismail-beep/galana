import { MenuItem, Testimonial, GalleryItem } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Grilled Mombasa Lobster',
    description: 'Fresh succulent lobster from the Kenyan coast, grilled with garlic herb butter and served with saffron risotto.',
    price: 'KES 4,500',
    category: 'Seafood',
    image: 'https://images.unsplash.com/photo-1551248429-40975aa4de74?q=80&w=800&auto=format&fit=crop',
    isChefRecommendation: true,
  },
  {
    id: '2',
    name: 'T-Bone Steak Flambé',
    description: 'Aged prime Kenyan beef, sea salt, cracked peppercorns, flambéed tableside with premium cognac.',
    price: 'KES 5,800',
    category: 'Grills',
    image: 'https://images.unsplash.com/photo-1546241072-48010ad28c2c?q=80&w=800&auto=format&fit=crop',
    isBestSeller: true,
  },
  {
    id: '3',
    name: 'Swahili Spiced Calamari',
    description: 'Crispy rings tossed in aromatic Swahili spices, served with a zesty tamarind dipping sauce.',
    price: 'KES 1,800',
    category: 'Starters',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '4',
    name: 'Rift Valley Rack of Lamb',
    description: 'Herb-crusted lamb rack, pea purée, glazed baby carrots, and mint-infused jus.',
    price: 'KES 4,200',
    category: 'Main Courses',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '5',
    name: 'Safari Garden Risotto',
    description: 'Creamy arborio rice with woodland mushrooms, truffle oil, and local garden herbs.',
    price: 'KES 2,400',
    category: 'Vegetarian',
    image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?q=80&w=800&auto=format&fit=crop',
    isChefRecommendation: true,
  },
  {
    id: '6',
    name: 'Molten Gold Fondant',
    description: 'Dark chocolate cake with a melting heart, served with vanilla bean gelato and gold leaf.',
    price: 'KES 1,200',
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '7',
    name: 'Flaming Crane Cocktail',
    description: 'Hibiscus gin, fresh passion fruit, sparkling wine, and a touch of edible glitter.',
    price: 'KES 1,500',
    category: 'Cocktails',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop',
    isBestSeller: true,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Wanjiku',
    role: 'Food Critic',
    content: 'The Silver Crane is a masterpiece of Kenyan fine dining. The Mombasa Lobster is easily the best I have ever tasted.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '2',
    name: 'David Omondi',
    role: 'Business Traveler',
    content: 'A perfect venue for corporate dinners. The atmosphere is sophisticated yet welcoming, and the service is impeccable.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '3',
    name: 'Elena Rossi',
    role: 'Tourist',
    content: 'Came for the view, stayed for the food. The sunset over the terrace while enjoying dinner was a cinematic experience.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop',
  },
];

export const GALLERY: GalleryItem[] = [
  { id: '1', url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop', category: 'ambiance', title: 'Main Dining Hall' },
  { id: '2', url: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop', category: 'food', title: 'Signature Appetizers' },
  { id: '3', url: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=800&auto=format&fit=crop', category: 'ambiance', title: 'The Sky Bar' },
  { id: '4', url: 'https://images.unsplash.com/photo-1550966841-3ee7adac1668?q=80&w=800&auto=format&fit=crop', category: 'events', title: 'Private Celebration' },
  { id: '5', url: 'https://images.unsplash.com/photo-1551248429-40975aa4de74?q=80&w=800&auto=format&fit=crop', category: 'food', title: 'Fresh Catch' },
  { id: '6', url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop', category: 'ambiance', title: 'Evening Glow' },
];
