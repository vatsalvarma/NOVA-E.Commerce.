import { create } from 'zustand';

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  discount?: string;
}

export interface CartItem extends Product {
  quantity: number;
}

interface StoreState {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  cartTotal: number;
  cartSubtotal: number;
  discount: number;
  shipping: number;
  isCartOpen: boolean;
  toggleCart: () => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

export const useStore = create<StoreState>((set, get) => ({
  cart: [
    {
      id: '1',
      name: 'Air Max 270 React',
      category: "Women's Shoes",
      price: 129.99,
      rating: 4.8,
      reviews: 134,
      image: '/shoe1.png',
      quantity: 1,
    },
    {
      id: '2',
      name: 'Chanel Chance Eau Tendre EDP',
      category: "100ml",
      price: 89.99,
      rating: 4.7,
      reviews: 55,
      image: '/perfume.png',
      quantity: 1,
    },
    {
      id: '3',
      name: 'Minimalist Shoulder Bag',
      category: "Olive Green",
      price: 39.99,
      rating: 4.5,
      reviews: 42,
      image: '/bag.png',
      quantity: 1,
    },
    {
      id: '4',
      name: 'Gentle Monster Lilit 01 Sunglasses',
      category: "Black",
      price: 199.00,
      rating: 4.9,
      reviews: 80,
      image: '/glasses.png',
      quantity: 1,
    }
  ],
  discount: 45.90,
  shipping: 0,
  cartSubtotal: 0,
  cartTotal: 0,
  isCartOpen: true,
  isDarkMode: false,
  isSidebarOpen: false,

  toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  
  toggleTheme: () => set((state) => {
    const newTheme = !state.isDarkMode;
    if (typeof document !== 'undefined') {
      if (newTheme) {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
    }
    return { isDarkMode: newTheme };
  }),

  addToCart: (product) => set((state) => {
    const existing = state.cart.find(item => item.id === product.id);
    if (existing) {
      return { cart: state.cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item) };
    }
    return { cart: [...state.cart, { ...product, quantity: 1 }] };
  }),

  removeFromCart: (productId) => set((state) => ({
    cart: state.cart.filter(item => item.id !== productId)
  })),

  updateQuantity: (productId, quantity) => set((state) => ({
    cart: state.cart.map(item => item.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item)
  })),
}));

// Subscribe to recalculate totals
useStore.subscribe((state) => {
  const subtotal = state.cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const total = subtotal - state.discount + state.shipping;
  if (state.cartSubtotal !== subtotal || state.cartTotal !== total) {
    useStore.setState({ cartSubtotal: subtotal, cartTotal: total });
  }
});

// Initial calculation
useStore.setState((state) => {
    const subtotal = state.cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const total = subtotal - state.discount + state.shipping;
    return { cartSubtotal: subtotal, cartTotal: total };
});
