import { motion } from 'framer-motion';
import { Grid, Tag, Rocket, ArrowRight, Clock, Star } from 'lucide-react';
import { useState, useEffect } from 'react';

const categoriesData = [
  { name: 'Fashion & Apparel', count: '1,240 Items', image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=600' },
  { name: 'Beauty & Cosmetics', count: '850 Items', image: '/images/makeup_kit_flatlay.png' },
  { name: 'Electronics', count: '3,200 Items', image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=600' },
  { name: 'Home & Living', count: '940 Items', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=600' },
  { name: 'Sports & Outdoors', count: '530 Items', image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=600' },
  { name: 'Toys & Games', count: '1,120 Items', image: 'https://images.unsplash.com/photo-1558060370-d644479cb6f7?auto=format&fit=crop&q=80&w=600' },
];

export const Categories = () => (
  <div className="p-8 max-w-6xl mx-auto w-full pb-20">
    <div className="flex items-center gap-3 mb-10">
      <div className="p-3 bg-purple-100 rounded-xl">
        <Grid className="w-6 h-6 text-purple-600" />
      </div>
      <div>
        <h1 className="text-3xl font-bold text-gray-900">All Categories</h1>
        <p className="text-gray-500 mt-1">Explore our wide range of products.</p>
      </div>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categoriesData.map((cat, i) => (
        <motion.div 
          key={cat.name} 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1, duration: 0.5, ease: 'easeOut' }}
          whileHover={{ y: -5 }}
          className="group relative h-64 rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all"
        >
          <img src={cat.image} alt={cat.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full p-6 text-white">
            <h3 className="font-bold text-xl mb-1">{cat.name}</h3>
            <div className="flex items-center justify-between">
              <p className="text-white/80 text-sm font-medium">{cat.count}</p>
              <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

export const Deals = () => {
  const [timeLeft, setTimeLeft] = useState({ h: 12, m: 45, s: 30 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.s > 0) return { ...prev, s: prev.s - 1 };
        if (prev.m > 0) return { ...prev, m: prev.m - 1, s: 59 };
        if (prev.h > 0) return { ...prev, h: prev.h - 1, m: 59, s: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="p-8 max-w-6xl mx-auto w-full pb-20">
      <div className="flex items-center gap-3 mb-10">
        <div className="p-3 bg-red-100 rounded-xl">
          <Tag className="w-6 h-6 text-red-600" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Hot Deals</h1>
          <p className="text-gray-500 mt-1">Don't miss out on these limited-time offers.</p>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
        className="relative bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl p-10 overflow-hidden shadow-2xl mb-12 flex items-center justify-between"
      >
        <div className="relative z-10 text-white max-w-lg">
          <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-white/30">
            Flash Sale
          </span>
          <h2 className="text-5xl font-extrabold mb-4 leading-tight">Summer<br/>Blowout!</h2>
          <p className="text-red-50 mb-8 text-lg">Get up to 70% off on premium collections today only.</p>
          
          <div className="flex gap-4 items-center">
            <Clock className="w-5 h-5 text-red-100" />
            <div className="flex gap-2 text-xl font-bold">
              <div className="bg-white text-red-600 px-3 py-2 rounded-xl">{String(timeLeft.h).padStart(2, '0')}</div><span className="py-2">:</span>
              <div className="bg-white text-red-600 px-3 py-2 rounded-xl">{String(timeLeft.m).padStart(2, '0')}</div><span className="py-2">:</span>
              <div className="bg-white text-red-600 px-3 py-2 rounded-xl">{String(timeLeft.s).padStart(2, '0')}</div>
            </div>
          </div>
        </div>
        
        <div className="absolute right-0 top-0 bottom-0 w-1/2">
          <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800" alt="Shoe" className="w-full h-full object-cover mix-blend-overlay opacity-60 mask-image-linear" style={{ WebkitMaskImage: 'linear-gradient(to left, black 30%, transparent 100%)' }} />
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1, 2].map((i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + (i * 0.1) }}
            className="bg-white border border-gray-100 p-6 rounded-3xl flex gap-6 hover:shadow-xl transition-shadow cursor-pointer"
          >
            <div className="w-1/3 bg-gray-50 rounded-2xl p-4 flex items-center justify-center relative overflow-hidden">
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">-50%</span>
              <img src={i === 1 ? 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=300' : 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=300'} alt="Product" className="w-full h-full object-contain mix-blend-multiply hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="w-2/3 flex flex-col justify-center">
              <h3 className="font-bold text-gray-900 text-lg mb-1">{i === 1 ? 'Apple Watch Ultra' : 'Sony WH-1000XM4'}</h3>
              <p className="text-gray-500 text-sm mb-3">Premium Tech Deals</p>
              <div className="flex gap-2 items-end mb-4">
                <span className="text-2xl font-bold text-gray-900">{i === 1 ? '$399' : '$149'}</span>
                <span className="text-sm text-gray-400 line-through mb-1">{i === 1 ? '$799' : '$299'}</span>
              </div>
              <button className="bg-gray-900 text-white py-2.5 rounded-xl font-semibold text-sm hover:bg-gray-800 transition-colors">
                Claim Deal
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export const ComingSoon = ({ title }: { title: string }) => (
  <div className="p-8 max-w-5xl mx-auto w-full h-[80vh] flex flex-col items-center justify-center text-center relative overflow-hidden">
    {/* Background Blurs */}
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl -z-10 mix-blend-multiply"></div>
    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl -z-10 mix-blend-multiply"></div>
    
    <motion.div 
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="w-24 h-24 bg-white shadow-xl shadow-purple-200/50 rounded-3xl flex items-center justify-center mb-8 relative"
    >
      <motion.div
        animate={{ y: [-5, 5, -5] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      >
        <Rocket className="w-12 h-12 text-purple-600" />
      </motion.div>
      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
        <Star className="w-3.5 h-3.5 text-white fill-current" />
      </div>
    </motion.div>
    
    <motion.h1 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight"
    >
      {title}
    </motion.h1>
    
    <motion.p 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="text-lg text-gray-500 max-w-md mx-auto mb-10"
    >
      We're crafting something extraordinary. Enter your email to be the first to know when it goes live!
    </motion.p>

    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="flex gap-2 w-full max-w-md bg-white p-2 rounded-2xl shadow-lg border border-gray-100"
    >
      <input type="email" placeholder="Enter your email address" className="flex-1 bg-transparent border-none outline-none px-4 text-sm text-gray-700 placeholder-gray-400" />
      <button className="bg-gray-900 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-purple-600 transition-colors shadow-md">
        Notify Me
      </button>
    </motion.div>
  </div>
);
