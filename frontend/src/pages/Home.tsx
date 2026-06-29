import { useCartStore } from '../store/useCartStore';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const Home = () => {
  const { addItem } = useCartStore();
  const navigate = useNavigate();
  const [currentBanner, setCurrentBanner] = useState(0);

  const banners = [
    {
      title: "Find Your Style,\nLove Your Look ✨",
      subtitle: "Discover the latest trends in fashion, beauty, and lifestyle.",
      tag: "New Collection",
      bgGradient: "from-purple-500 to-pink-500",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=600",
      btnColor: "text-purple-600"
    },
    {
      title: "Glow Up\nYour Routine 💄",
      subtitle: "Premium cosmetics and skincare for a flawless you.",
      tag: "Beauty Picks",
      bgGradient: "from-[#E6B0B9] to-[#C97284]",
      image: "/images/makeup_kit_flatlay.png",
      btnColor: "text-[#C97284]"
    },
    {
      title: "Next-Gen Tech\nis Here 🎮",
      subtitle: "Upgrade your gear with top-tier electronics and accessories.",
      tag: "Tech Zone",
      bgGradient: "from-blue-600 to-indigo-500",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=600",
      btnColor: "text-blue-600"
    },
    {
      title: "Elevate Your\nLiving Space 🛋️",
      subtitle: "Modern furniture and decor to make your house a home.",
      tag: "Home Design",
      bgGradient: "from-teal-500 to-emerald-400",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=600",
      btnColor: "text-teal-600"
    },
    {
      title: "Push Past\nYour Limits 🏃‍♀️",
      subtitle: "High-performance activewear and equipment.",
      tag: "Active Life",
      bgGradient: "from-orange-500 to-red-500",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=600",
      btnColor: "text-orange-600"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [banners.length]);

  const categories = [
    { name: 'Fashion', icon: '👕', bgColor: 'bg-orange-50' },
    { name: 'Beauty', icon: '💄', bgColor: 'bg-pink-50' },
    { name: 'Electronics', icon: '🎧', bgColor: 'bg-purple-50' },
    { name: 'Home & Living', icon: '🪑', bgColor: 'bg-yellow-50' },
    { name: 'Sports', icon: '👟', bgColor: 'bg-blue-50' },
    { name: 'More', icon: '🎛️', bgColor: 'bg-gray-50' },
  ];

  const bestDeals = [
    {
      id: 1, discount: '-25%', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=300',
      name: 'Air Max 270 React', category: "Women's Shoes", price: 129.99, oldPrice: 159.00, rating: 4.8, reviews: 124
    },
    {
      id: 2, discount: '-20%', image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=300',
      name: 'Apple Watch Series 9', category: '41mm Midnight', price: 359.00, oldPrice: 450.00, rating: 4.9, reviews: 65
    },
    {
      id: 3, discount: '-30%', image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=300',
      name: 'Chanel Chance Eau', category: 'Tendre EDP 100ml', price: 89.99, oldPrice: 128.00, rating: 4.7, reviews: 89
    },
    {
      id: 4, discount: '', image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=300',
      name: 'Sony WH-1000XM5', category: 'Wireless Headphones', price: 299.00, oldPrice: null, rating: 4.8, reviews: 170
    },
    {
      id: 5, discount: '-15%', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=300',
      name: 'Sony WH-1000XM4', category: 'Over-Ear Headphones', price: 249.00, oldPrice: 299.00, rating: 4.7, reviews: 340
    },
    {
      id: 6, discount: '-40%', image: 'https://images.unsplash.com/photo-1627384113743-6bd5a479fffd?auto=format&fit=crop&q=80&w=300',
      name: 'Minimalist Face Serum', category: 'Skincare', price: 24.99, oldPrice: 41.99, rating: 4.6, reviews: 890
    },
    {
      id: 7, discount: '', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=300',
      name: 'Apple Watch Ultra', category: 'Smartwatch', price: 799.00, oldPrice: null, rating: 4.9, reviews: 215
    },
    {
      id: 8, discount: '-10%', image: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80&w=300',
      name: 'Olive Leather Bag', category: 'Accessories', price: 89.99, oldPrice: 99.99, rating: 4.5, reviews: 56
    }
  ];

  const handleAddToCart = (product: any) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image
    });
  };

  return (
    <div className="p-8 max-w-5xl mx-auto w-full pb-20 overflow-x-hidden">
      {/* Hero Banner Carousel */}
      <div className="relative rounded-3xl h-[360px] overflow-hidden shadow-xl mb-10 bg-gray-900">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentBanner}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
            className={`absolute inset-0 bg-gradient-to-r ${banners[currentBanner].bgGradient} p-10 flex items-center justify-between text-white w-full h-full`}
          >
            <div className="relative z-10 max-w-md">
              <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-semibold mb-4 border border-white/30">
                {banners[currentBanner].tag}
              </span>
              <h1 className="text-4xl font-bold leading-tight mb-4 whitespace-pre-line">
                {banners[currentBanner].title}
              </h1>
              <p className="text-white/90 mb-8 text-sm">
                {banners[currentBanner].subtitle}
              </p>
              <button onClick={() => navigate('/new-arrivals')} className={`bg-white ${banners[currentBanner].btnColor} px-6 py-2.5 rounded-xl font-bold text-sm shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105`}>
                Shop Now &rarr;
              </button>
            </div>
            
            <div className="absolute right-0 bottom-0 w-1/2 h-full z-0">
              <img 
                src={banners[currentBanner].image} 
                alt="Banner" 
                className="w-full h-full object-cover object-top mask-image-linear"
                style={{ WebkitMaskImage: 'linear-gradient(to left, black 50%, transparent 100%)' }}
              />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Carousel Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {banners.map((_, idx) => (
            <button 
              key={idx}
              onClick={() => setCurrentBanner(idx)}
              className={`h-2 rounded-full transition-all ${currentBanner === idx ? 'w-6 bg-white' : 'w-2 bg-white/40 hover:bg-white/60'}`}
            />
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="flex justify-center gap-8 md:gap-14 items-center mt-12 mb-12 flex-wrap">
        {categories.map((cat, i) => (
          <motion.div 
            key={i}
            onClick={() => navigate('/categories')}
            whileHover={{ y: -8, scale: 1.05 }}
            className="flex flex-col items-center gap-3 cursor-pointer group"
          >
            <div className={`w-20 h-20 rounded-[1.25rem] flex items-center justify-center text-3xl ${cat.bgColor} shadow-sm group-hover:shadow-lg transition-all duration-300 border border-gray-100/50`}>
              {cat.icon}
            </div>
            <span className="text-sm font-bold text-gray-700 group-hover:text-purple-600 transition-colors">{cat.name}</span>
          </motion.div>
        ))}
      </div>

      {/* Promo Blocks */}
      <div className="grid grid-cols-3 gap-6 mb-12">
        <motion.div onClick={() => navigate('/deals')} whileHover={{ scale: 1.02 }} className="bg-orange-50 rounded-2xl p-5 relative overflow-hidden flex flex-col justify-center cursor-pointer shadow-sm hover:shadow-md transition-shadow">
          <h3 className="font-bold text-gray-900 text-sm">Flash Sale</h3>
          <p className="text-xs text-gray-500 mb-4 mt-1">Limited time deal.</p>
          <div className="flex gap-1 mb-2">
            <div className="bg-white text-orange-500 font-bold text-xs px-2 py-1 rounded">02</div>:
            <div className="bg-white text-orange-500 font-bold text-xs px-2 py-1 rounded">45</div>:
            <div className="bg-white text-orange-500 font-bold text-xs px-2 py-1 rounded">12</div>
          </div>
          <img src="https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80&w=150" className="absolute -right-4 -bottom-4 w-28 mix-blend-multiply" alt="bag" />
        </motion.div>
        <motion.div onClick={() => navigate('/categories')} whileHover={{ scale: 1.02 }} className="bg-yellow-50 rounded-2xl p-5 relative overflow-hidden flex flex-col justify-center cursor-pointer shadow-sm hover:shadow-md transition-shadow">
          <h3 className="font-bold text-gray-900 text-sm">Free Shipping</h3>
          <p className="text-xs text-gray-500 mb-4 mt-1">On orders over $50</p>
          <button className="text-xs font-bold text-yellow-600 self-start">Shop now &rarr;</button>
          <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=200" className="absolute -right-6 -bottom-6 w-36 mix-blend-multiply rotate-[-15deg] scale-x-[-1]" alt="sneaker" />
        </motion.div>
        <motion.div onClick={() => navigate('/new-arrivals')} whileHover={{ scale: 1.02 }} className="bg-green-50 rounded-2xl p-5 relative overflow-hidden flex flex-col justify-center cursor-pointer shadow-sm hover:shadow-md transition-shadow">
          <h3 className="font-bold text-gray-900 text-sm">New Arrivals</h3>
          <p className="text-xs text-gray-500 mb-4 mt-1">Check out the latest trends</p>
          <button className="text-xs font-bold text-green-600 self-start">Shop now &rarr;</button>
          <img src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=150" className="absolute -right-4 -bottom-2 w-28 mix-blend-multiply" alt="sunglasses" />
        </motion.div>
      </div>

      {/* Best Deals */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900">Best Deals for You</h2>
          <button className="text-xs font-semibold px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200 text-gray-700 transition-colors">View All</button>
        </div>
        <div className="grid grid-cols-4 gap-6">
          {bestDeals.map((product) => (
            <motion.div 
              key={product.id} 
              className="group relative cursor-pointer"
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <div className="bg-gray-50 rounded-2xl p-4 mb-3 relative overflow-hidden h-48 flex items-center justify-center transition-all group-hover:shadow-md">
                {product.discount && (
                  <span className="absolute top-3 left-3 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full z-10">
                    {product.discount}
                  </span>
                )}
                {/* Heart Button */}
                <button 
                  className="absolute top-3 right-3 bg-white p-1.5 rounded-full shadow text-gray-400 hover:text-red-500 z-10 transition-colors"
                  onClick={(e) => { e.stopPropagation(); /* Add to wishlist logic */ }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                </button>
                
                {/* Hover Buttons */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex flex-col items-center justify-center gap-2">
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ scale: 1.05 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/product/${product.id}`);
                    }}
                    className="bg-white text-gray-900 px-4 py-2 rounded-xl text-xs font-bold shadow-lg"
                  >
                    View Details
                  </motion.button>
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ scale: 1.05 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToCart(product);
                    }}
                    className="bg-purple-600 text-white px-4 py-2 rounded-xl text-xs font-bold shadow-lg"
                  >
                    Add to Cart
                  </motion.button>
                </div>

                <img src={product.image} alt={product.name} className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="font-semibold text-sm text-gray-900 mb-1 line-clamp-1">{product.name}</h3>
              <p className="text-xs text-gray-500 mb-2">{product.category}</p>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-bold text-gray-900">${product.price.toFixed(2)}</span>
                {product.oldPrice && <span className="text-xs text-gray-400 line-through">${product.oldPrice.toFixed(2)}</span>}
              </div>
              <div className="flex items-center gap-1 text-xs text-gray-500">
                <span className="text-yellow-400">★</span>
                <span className="font-medium text-gray-700">{product.rating}</span>
                <span>({product.reviews})</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
