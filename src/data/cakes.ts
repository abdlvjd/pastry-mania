export interface Cake {
  id: number;
  name: string;
  price: number;
  eggless: boolean;
  category: string;
  image: string;
  description: string;
}

export const cakes: Cake[] = [
  {
    id: 1,
    name: 'Red Velvet Dream',
    price: 650,
    eggless: false,
    category: 'Pastries',
    image: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=400&h=300&fit=crop',
    description: 'Rich and moist red velvet cake with cream cheese frosting. A classic favorite that melts in your mouth.',
  },
  {
    id: 2,
    name: 'Chocolate Fudge Delight',
    price: 550,
    eggless: true,
    category: 'Eggless',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop',
    description: 'Decadent chocolate cake with rich fudge layers. Perfect for chocolate lovers, completely eggless!',
  },
  {
    id: 3,
    name: 'Vanilla Bean Paradise',
    price: 500,
    eggless: true,
    category: 'Eggless',
    image: 'https://images.unsplash.com/photo-1588195538326-c5b1e5b80c4b?w=400&h=300&fit=crop',
    description: 'Light and fluffy vanilla cake made with real vanilla beans. Simple elegance at its finest.',
  },
  {
    id: 4,
    name: 'Strawberry Bliss',
    price: 700,
    eggless: false,
    category: 'Seasonal',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop',
    description: 'Fresh strawberry cake with whipped cream and strawberry compote. A seasonal delight!',
  },
  {
    id: 5,
    name: 'Black Forest Classic',
    price: 750,
    eggless: false,
    category: 'Pastries',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop',
    description: 'Traditional Black Forest cake with chocolate sponge, cherries, and whipped cream.',
  },
  {
    id: 6,
    name: 'Butterscotch Heaven',
    price: 600,
    eggless: true,
    category: 'Eggless',
    image: 'https://images.unsplash.com/photo-1557925923-cd4648e211a0?w=400&h=300&fit=crop',
    description: 'Smooth butterscotch flavored cake with crunchy butterscotch chips. Absolutely divine!',
  },
  {
    id: 7,
    name: 'Custom Designer Cake',
    price: 1200,
    eggless: false,
    category: 'Custom',
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=400&h=300&fit=crop',
    description: 'Fully customizable designer cake for your special occasions. Tell us your vision!',
  },
  {
    id: 8,
    name: 'Mango Tango',
    price: 650,
    eggless: true,
    category: 'Seasonal',
    image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=400&h=300&fit=crop',
    description: 'Tropical mango-flavored cake with fresh mango pulp. A summer sensation!',
  },
  {
    id: 9,
    name: 'Tiramisu Special',
    price: 800,
    eggless: false,
    category: 'Pastries',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop',
    description: 'Italian-style tiramisu cake with coffee-soaked layers and mascarpone cream.',
  },
  {
    id: 10,
    name: 'Pineapple Upside Down',
    price: 550,
    eggless: true,
    category: 'Eggless',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop',
    description: 'Classic pineapple upside-down cake with caramelized pineapple rings.',
  },
];
