import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Pagination, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';
import { ArrowRight, ShoppingCart } from 'lucide-react';
import { useCartStore } from '../../store/useCartStore';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const slides = [
  {
    id: 1,
    title: 'The Signature Collection',
    subtitle: 'Elevate your everyday style with our premium essentials.',
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=2940',
    price: 129.99,
  },
  {
    id: 2,
    title: 'Minimalist Wardrobe',
    subtitle: 'Clean lines and exceptional comfort for the modern man.',
    image: 'https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&q=80&w=2940',
    price: 89.99,
  },
  {
    id: 3,
    title: 'Urban Exploration',
    subtitle: 'Performance wear designed for the city.',
    image: 'https://images.unsplash.com/photo-1550614000-4b95d4ebf10b?auto=format&fit=crop&q=80&w=2940',
    price: 159.99,
  }
];

export const HeroCarousel = () => {
  const { addItem } = useCartStore();

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      <Swiper
        modules={[EffectFade, Autoplay, Pagination, Navigation]}
        effect="fade"
        speed={1000}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            {({ isActive }) => (
              <div className="relative w-full h-full">
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-center px-6 md:px-24 max-w-7xl mx-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="max-w-xl"
                  >
                    <motion.span 
                      initial={{ opacity: 0, x: -20 }}
                      animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-widest uppercase bg-white/10 backdrop-blur-md text-white rounded-full border border-white/20"
                    >
                      New Arrival
                    </motion.span>
                    
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                      {slide.title}
                    </h1>
                    
                    <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-md">
                      {slide.subtitle}
                    </p>

                    <div className="flex flex-wrap items-center gap-4">
                      <button className="flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-colors">
                        Shop Collection
                        <ArrowRight className="w-5 h-5" />
                      </button>
                      <button 
                        onClick={() => addItem({ id: slide.id, name: slide.title, price: slide.price, image: slide.image })}
                        className="flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 backdrop-blur-md transition-colors"
                      >
                        <ShoppingCart className="w-5 h-5" />
                        Quick Add - ${slide.price}
                      </button>
                    </div>
                  </motion.div>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
