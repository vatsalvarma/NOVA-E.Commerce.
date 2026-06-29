import { Link } from 'react-router-dom';
import { ShoppingBag, Search, User, Menu } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCartStore } from '../../store/useCartStore';

export const Navbar = () => {
  const { items, toggleCart } = useCartStore();
  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-6 py-4 backdrop-blur-md shadow-lg shadow-black/5">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-black">
              <ShoppingBag className="h-5 w-5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">Lumina</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {['Shop', 'Collections', 'About', 'Contact'].map((item) => (
              <Link 
                key={item} 
                to={`/${item.toLowerCase()}`}
                className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button className="hidden sm:flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-gray-300 transition-all hover:bg-white/10 hover:text-white">
              <Search className="h-4 w-4" />
            </button>
            <Link to="/orders" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-gray-300 transition-all hover:bg-white/10 hover:text-white">
              <User className="h-4 w-4" />
            </Link>
            <button 
              onClick={toggleCart}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-gray-300 transition-all hover:bg-white/10 hover:text-white relative"
            >
              <ShoppingBag className="h-4 w-4" />
              {itemCount > 0 && (
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white"
                >
                  {itemCount}
                </motion.span>
              )}
            </button>
            <button className="md:hidden flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-gray-300 transition-all hover:bg-white/10 hover:text-white">
              <Menu className="h-4 w-4" />
            </button>
          </div>

        </div>
      </div>
    </motion.nav>
  );
};
