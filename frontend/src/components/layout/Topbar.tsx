import { Search, Heart, Bell, Check, ShoppingBag, Truck } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Topbar = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const profileDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowNotifications(false);
      }
      if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target as Node)) {
        setShowProfileMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const notifications = [
    { id: 1, title: 'Order Shipped', desc: 'Your order #ORD-7392 is on the way!', time: '2h ago', icon: Truck, color: 'text-blue-500', bg: 'bg-blue-50' },
    { id: 2, title: 'Flash Sale Started', desc: 'Up to 50% off on all electronics.', time: '5h ago', icon: ShoppingBag, color: 'text-purple-500', bg: 'bg-purple-50' },
    { id: 3, title: 'Delivery Successful', desc: 'Package delivered to front porch.', time: '1d ago', icon: Check, color: 'text-green-500', bg: 'bg-green-50' },
  ];

  return (
    <header className="flex items-center justify-between px-8 py-4 bg-white/80 backdrop-blur-md sticky top-0 z-40 w-full border-b border-gray-100">
      <div className="relative w-full max-w-2xl">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search for products, brands and more..."
          className="block w-full pl-11 pr-4 py-3 bg-gray-50 border-transparent rounded-2xl text-sm placeholder-gray-400 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 transition-all outline-none"
        />
      </div>

      <div className="flex items-center gap-6 ml-4">
        <button className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors">
          <Heart className="w-5 h-5" />
          <span className="text-sm font-medium hidden md:block">Wishlist</span>
        </button>
        
        <div className="relative" ref={dropdownRef}>
          <button 
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative text-gray-600 hover:text-purple-600 transition-colors focus:outline-none"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white flex items-center justify-center text-[9px] font-bold text-white">
              3
            </span>
          </button>

          {/* Dropdown Menu */}
          {showNotifications && (
            <div className="absolute right-0 mt-3 w-80 bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden z-50 transform origin-top-right transition-all">
              <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                <h3 className="font-bold text-gray-900">Notifications</h3>
                <span className="text-xs font-semibold text-purple-600 cursor-pointer hover:underline">Mark all as read</span>
              </div>
              <div className="max-h-[320px] overflow-y-auto custom-scrollbar">
                {notifications.map((n) => (
                  <div key={n.id} className="p-4 border-b border-gray-50 hover:bg-gray-50 transition-colors cursor-pointer flex gap-4">
                    <div className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center ${n.bg}`}>
                      <n.icon className={`w-5 h-5 ${n.color}`} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{n.title}</p>
                      <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">{n.desc}</p>
                      <p className="text-[10px] text-gray-400 mt-1 font-medium">{n.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-3 text-center border-t border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors">
                <span className="text-sm font-semibold text-purple-600">View All Notifications</span>
              </div>
            </div>
          )}
        </div>

        <div className="relative" ref={profileDropdownRef}>
          <motion.div 
            whileHover={{ y: -2 }}
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            className="flex items-center gap-3 cursor-pointer pl-4 border-l border-gray-200"
          >
            <div className="w-9 h-9 flex-shrink-0 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-sm">
              AP
            </div>
            <div className="hidden md:block">
              <p className="text-sm font-semibold text-gray-900">Alina Putri</p>
            </div>
          </motion.div>

          {/* Profile Dropdown Menu */}
          {showProfileMenu && (
            <div className="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden z-50 transform origin-top-right transition-all">
              <div className="p-4 border-b border-gray-100 bg-gray-50 flex items-center gap-3">
                <div className="w-10 h-10 flex-shrink-0 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-sm">
                  AP
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Alina Putri</p>
                  <p className="text-xs text-gray-500">alina@example.com</p>
                </div>
              </div>
              <div className="py-2">
                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-purple-600 transition-colors">My Account</button>
                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-purple-600 transition-colors">Orders</button>
                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-purple-600 transition-colors">Settings</button>
              </div>
              <div className="border-t border-gray-100 py-2">
                <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 font-medium transition-colors">Sign Out</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
