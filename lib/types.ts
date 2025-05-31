export type Product = {
  id: string;
  name: string;
  description: string;
  story: string;
  price: number;
  category: string;
  materials: string[];
  themes: string[];
  creatorId: string;
  images: string[];
  featured: boolean;
  stock: number;
  dimensions?: string;
  careInstructions?: string;
  createdAt: string;
};

export type Creator = {
  id: string;
  name: string;
  profile: string;
  bio: string;
  image: string;
  specialties: string[];
  workspaceImages: string[];
  story: string;
};

export type Order = {
  id: string;
  customerName: string;
  customerEmail: string;
  shippingAddress: {
    line1: string;
    line2?: string;
    city: string;
    postalCode: string;
    prefecture: string;
    country: string;
  };
  items: {
    productId: string;
    name: string;
    price: number;
    quantity: number;
  }[];
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  total: number;
  createdAt: string;
  updatedAt: string;
  trackingNumber?: string;
  paymentIntent?: string;
};

export type User = {
  id: string;
  username: string;
  email: string;
  role: 'admin' | 'staff';
  createdAt: string;
};

export type Category = {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
};

export type Theme = {
  id: string;
  name: string;
  slug: string;
  description: string;
};