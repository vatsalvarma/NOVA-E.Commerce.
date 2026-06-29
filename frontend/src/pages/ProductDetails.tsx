import { useParams, useNavigate } from 'react-router-dom';
import { useCartStore } from '../store/useCartStore';
import { motion } from 'framer-motion';
import { Star, Truck, Shield, ArrowLeft, Heart } from 'lucide-react';
import { useState } from 'react';

// Hardcoded for demo, normally fetched via API using the ID
const productData = {
  id: 1,
  name: 'Sony WH-1000XM5 Wireless Noise Canceling Headphones',
  brand: 'Sony',
  price: 299.00,
  originalPrice: 399.00,
  rating: 4.8,
  reviews: 1240,
  images: [
    'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&q=80&w=800',
  ],
  description: 'The WH-1000XM5 headphones rewrite the rules for distraction-free listening. 2 processors control 8 microphones for unprecedented noise cancellation and exceptional call quality.',
  features: [
    'Industry-leading noise cancellation',
    'Up to 30-hour battery life with quick charging',
    'Ultra-comfortable, lightweight design',
    'Multipoint connection lets you quickly switch between devices'
  ],
  delivery: 'Get it by Tomorrow, June 30',
  seller: 'NovaShop Official',
};

export const ProductDetails = () => {
  useParams();
  const navigate = useNavigate();
  const { addItem } = useCartStore();
  const [activeImg, setActiveImg] = useState(0);

  const handleBuyNow = () => {
    addItem({ ...productData, quantity: 1, image: productData.images[0] });
    navigate('/orders');
  };

  return (
    <div className="p-8 max-w-6xl mx-auto w-full pb-20">
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-500 hover:text-gray-900 mb-8 transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="font-medium">Back to products</span>
      </button>

      <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col md:flex-row gap-12">
        
        {/* Image Gallery */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <motion.div 
            key={activeImg}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full h-[500px] bg-gray-50 rounded-2xl p-8 flex items-center justify-center relative border border-gray-100"
          >
            <button className="absolute top-4 right-4 p-3 bg-white rounded-full shadow-sm text-gray-400 hover:text-red-500 transition-colors">
              <Heart className="w-5 h-5" />
            </button>
            <img src={productData.images[activeImg]} alt="Product" className="w-full h-full object-contain mix-blend-multiply" />
          </motion.div>
          
          <div className="flex gap-4">
            {productData.images.map((img, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveImg(idx)}
                className={`w-24 h-24 bg-gray-50 rounded-xl p-2 border-2 transition-all ${activeImg === idx ? 'border-purple-600' : 'border-transparent hover:border-gray-200'}`}
              >
                <img src={img} alt="Thumbnail" className="w-full h-full object-contain mix-blend-multiply" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="w-full md:w-1/2 flex flex-col">
          <div className="mb-6 pb-6 border-b border-gray-100">
            <h1 className="text-2xl font-bold text-gray-900 leading-tight mb-2">{productData.name}</h1>
            <p className="text-purple-600 font-semibold mb-4">{productData.brand}</p>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 bg-green-600 text-white px-2 py-0.5 rounded text-sm font-bold">
                {productData.rating} <Star className="w-3.5 h-3.5 fill-current" />
              </div>
              <span className="text-sm text-gray-500 font-medium">{productData.reviews.toLocaleString()} Ratings & Reviews</span>
            </div>
          </div>

          <div className="mb-8">
            <div className="flex items-end gap-3 mb-2">
              <span className="text-4xl font-bold text-gray-900">${productData.price.toFixed(2)}</span>
              <span className="text-lg text-gray-400 line-through mb-1">${productData.originalPrice.toFixed(2)}</span>
              <span className="text-lg text-green-600 font-bold mb-1">
                {Math.round(((productData.originalPrice - productData.price) / productData.originalPrice) * 100)}% off
              </span>
            </div>
            <p className="text-sm text-gray-500">Inclusive of all taxes</p>
          </div>

          {/* Delivery & Services */}
          <div className="bg-gray-50 rounded-2xl p-5 mb-8 border border-gray-100 space-y-4">
            <div className="flex gap-4">
              <Truck className="w-6 h-6 text-purple-600 flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-900">{productData.delivery}</p>
                <p className="text-sm text-gray-500">Free delivery on this order.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Shield className="w-6 h-6 text-purple-600 flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-900">1 Year Brand Warranty</p>
                <p className="text-sm text-gray-500">7 Days Replacement Policy</p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mb-10">
            <button 
              onClick={() => addItem({ ...productData, quantity: 1, image: productData.images[0] })}
              className="flex-1 py-4 bg-purple-50 text-purple-600 font-bold rounded-xl hover:bg-purple-100 transition-colors border border-purple-200"
            >
              ADD TO CART
            </button>
            <button 
              onClick={handleBuyNow}
              className="flex-1 py-4 bg-purple-600 text-white font-bold rounded-xl hover:bg-purple-700 transition-colors shadow-lg shadow-purple-200"
            >
              BUY NOW
            </button>
          </div>

          {/* Details */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Product Details</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">{productData.description}</p>
            <ul className="space-y-2">
              {productData.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-2 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};
