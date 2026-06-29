import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ShoppingBag, Home, Grid, Tag, Sparkles, Trophy, 
  Award, Layers, Package, Heart, Ticket, MapPin, 
  Settings, HeadphonesIcon, Sun, Moon
} from 'lucide-react';

export const Sidebar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);
  const menuItems1 = [
    { icon: Home, label: 'Home', active: true, path: '/' },
    { icon: Grid, label: 'Categories', path: '/categories' },
    { icon: Tag, label: 'Deals', badge: 'Hot', path: '/deals' },
    { icon: Sparkles, label: 'New Arrivals', path: '/new-arrivals' },
    { icon: Trophy, label: 'Best Sellers', path: '/best-sellers' },
    { icon: Award, label: 'Brands', path: '/brands' },
    { icon: Layers, label: 'Collections', path: '/collections' },
  ];

  const menuItems2 = [
    { icon: Package, label: 'My Orders', path: '/orders' },
    { icon: Heart, label: 'Wishlist', path: '/wishlist' },
    { icon: Ticket, label: 'Coupons', path: '/coupons' },
    { icon: MapPin, label: 'Addresses', path: '/addresses' },
    { icon: Settings, label: 'Account Settings', path: '/settings' },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-100 flex flex-col overflow-y-auto custom-scrollbar z-50">
      {/* Logo */}
      <Link to="/" className="p-6 flex items-center gap-2">
        <ShoppingBag className="w-8 h-8 text-purple-600" />
        <span className="text-xl font-bold text-gray-900 tracking-tight">NovaShop</span>
      </Link>

      {/* Main Menu */}
      <nav className="px-4 space-y-1">
        {menuItems1.map((item, i) => (
          <Link
            key={i}
            to={item.path}
            className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all ${
              window.location.pathname === item.path 
                ? 'bg-purple-600 text-white shadow-md shadow-purple-200' 
                : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
            }`}
          >
            <div className="flex items-center gap-3">
              <item.icon className="w-5 h-5" />
              <span className="font-medium text-sm">{item.label}</span>
            </div>
            {item.badge && (
              <span className="text-[10px] font-bold px-2 py-0.5 bg-red-500 text-white rounded-full">
                {item.badge}
              </span>
            )}
          </Link>
        ))}
      </nav>

      {/* Divider */}
      <div className="mx-8 my-4 border-t border-gray-100"></div>

      {/* Secondary Menu */}
      <nav className="px-4 space-y-1">
        {menuItems2.map((item, i) => (
          <Link
            key={i}
            to={item.path}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
              window.location.pathname === item.path 
                ? 'bg-purple-50 text-purple-600' 
                : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span className="font-medium text-sm">{item.label}</span>
          </Link>
        ))}
      </nav>

      {/* Promo Card */}
      <div className="px-4 mt-8 mb-6">
        <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl p-5 text-white relative overflow-hidden">
          <div className="relative z-10">
            <span className="text-xs font-medium text-purple-200">Special Offer</span>
            <h4 className="text-lg font-bold mt-1 mb-1">Summer Sale</h4>
            <p className="text-sm text-purple-100 mb-4">Up to 50% Off</p>
            <button className="bg-white text-purple-600 text-xs font-bold px-4 py-2 rounded-lg w-full">
              Shop Now
            </button>
          </div>
          {/* Decorative circles */}
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full blur-lg"></div>
        </div>
      </div>

      <div className="mt-auto px-6 pb-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-gray-50 rounded-lg">
            <HeadphonesIcon className="w-5 h-5 text-gray-500" />
          </div>
          <div>
            <p className="text-sm font-bold text-gray-900">Need Help?</p>
            <p className="text-xs text-gray-500">24/7 Support Center</p>
          </div>
        </div>

        <button 
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="flex items-center justify-between w-full p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
        >
          <div className="flex items-center gap-2">
            {isDarkMode ? (
              <Moon className="w-5 h-5 text-gray-500" />
            ) : (
              <Sun className="w-5 h-5 text-gray-500" />
            )}
            <span className="text-sm font-medium text-gray-700">
              {isDarkMode ? 'Dark Mode' : 'Light Mode'}
            </span>
          </div>
          <div className={`w-10 h-5 rounded-full relative transition-colors duration-300 ${isDarkMode ? 'bg-purple-600' : 'bg-gray-200'}`}>
            <motion.div 
              initial={false}
              animate={{ x: isDarkMode ? 20 : 2 }}
              className="absolute top-1 w-3 h-3 bg-white rounded-full shadow-sm"
            />
          </div>
        </button>
      </div>
    </aside>
  );
};
