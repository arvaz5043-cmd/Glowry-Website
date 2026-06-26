export interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  duration: string;
  category: 'Hair' | 'Skin' | 'Body' | 'Nails' | 'Makeup' | 'Packages';
  gender?: 'Men' | 'Women' | 'Unisex';
}

export const SERVICES: Service[] = [
  // HAIR CUT & SERVICE
  {
    id: 'h1',
    name: 'Haircut (Women)',
    description: 'Professional haircut tailored to women\'s styles.',
    price: '₹350',
    duration: '45 min',
    category: 'Hair',
    gender: 'Women'
  },
  {
    id: 'h2',
    name: 'Haircut (Men)',
    description: 'Classic and modern cuts for men.',
    price: '₹150',
    duration: '30 min',
    category: 'Hair',
    gender: 'Men'
  },
  {
    id: 'h3',
    name: 'Beard Styling',
    description: 'Precision beard shaping and styling.',
    price: '₹150',
    duration: '20 min',
    category: 'Hair',
    gender: 'Men'
  },
  {
    id: 'h4',
    name: 'Global Colouring (Majirel)',
    description: 'Rich, lasting global hair color using L\'Oreal Majirel.',
    price: '₹2500+',
    duration: '120 min',
    category: 'Hair',
    gender: 'Women'
  },
  {
    id: 'h5',
    name: 'Keratin Treatment',
    description: 'Advanced smoothing treatment for frizz-free hair.',
    price: '₹4000+',
    duration: '150 min',
    category: 'Hair',
    gender: 'Women'
  },
  {
    id: 'h6',
    name: 'Basic Hair Spa',
    description: 'Nourishing treatment for healthy hair and scalp.',
    price: '₹1000+',
    duration: '60 min',
    category: 'Hair',
    gender: 'Women'
  },
  
  // SKIN CARE & FACIALS
  {
    id: 's1',
    name: 'Hydra Advance Facial',
    description: 'Premium multi-step facial for deep cleansing and hydration.',
    price: '₹4000',
    duration: '90 min',
    category: 'Skin',
    gender: 'Unisex'
  },
  {
    id: 's2',
    name: 'O3 Bridal Facial',
    description: 'Ultimate glow for your special day using O3+ products.',
    price: '₹3000',
    duration: '90 min',
    category: 'Skin',
    gender: 'Women'
  },
  {
    id: 's3',
    name: 'Organic Facial',
    description: 'Gentle, natural facial for sensitive skin.',
    price: '₹1200',
    duration: '60 min',
    category: 'Skin',
    gender: 'Unisex'
  },
  {
    id: 's4',
    name: 'D-Tan (Face & Neck)',
    description: 'Effective removal of tan from face and neck area.',
    price: '₹400',
    duration: '30 min',
    category: 'Skin',
    gender: 'Unisex'
  },
  
  // BODY & MASSAGE
  {
    id: 'b1',
    name: 'Body Massage (60 Min)',
    description: 'Relaxing full body massage to relieve stress.',
    price: '₹1200',
    duration: '60 min',
    category: 'Body',
    gender: 'Unisex'
  },
  {
    id: 'b2',
    name: 'Indian Head Massage',
    description: 'Traditional relaxing head massage.',
    price: '₹500',
    duration: '30 min',
    category: 'Body',
    gender: 'Women'
  },
  
  // NAILS
  {
    id: 'n1',
    name: 'Luxury Manicure',
    description: 'Complete hand care with premium products.',
    price: '₹1000',
    duration: '45 min',
    category: 'Nails',
    gender: 'Women'
  },
  {
    id: 'n2',
    name: 'Luxury Pedicure',
    description: 'Complete foot care and relaxation.',
    price: '₹1000',
    duration: '60 min',
    category: 'Nails',
    gender: 'Women'
  },

  // MAKEUP & PACKAGES
  {
    id: 'm1',
    name: 'HD Makeup',
    description: 'High-definition makeup by senior artists.',
    price: '₹8000',
    duration: '120 min',
    category: 'Makeup',
    gender: 'Women'
  },
  {
    id: 'p1',
    name: 'Pre-Bridal Package',
    description: 'Comprehensive beauty package for brides-to-be.',
    price: '₹15000',
    duration: 'Full Day',
    category: 'Packages',
    gender: 'Women'
  },
  {
    id: 'p2',
    name: 'Groom Package',
    description: 'Complete grooming package for the modern groom.',
    price: '₹10000',
    duration: '4-5 Hours',
    category: 'Packages',
    gender: 'Men'
  }
];

export const SALON_INFO = {
  name: 'Glowry Unisex Salon',
  phone: '7035543210',
  address: 'Shop No. 10, Frontier Apartment kamal chowk Road, Kamptee Rd, Nagpur',
  fullAddress: 'Shop No. 10, Frontier Apartment kamal chowk Road, Kamptee Rd, opposite Bharat Petrol Pump, near Sawita Gas Agencies, Bharat Jyoti Society, Bezonbagh, Nagpur, Maharashtra 440017',
  hours: '10:00 AM - 09:00 PM',
  tagline: 'Where Elegance Meets Excellence'
};
