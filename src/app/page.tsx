"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, Heart, Bell, ChevronRight, Play, Star, ShoppingBag, Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './page.module.css';
import { useStore, Product } from '@/store/useStore';

import toast from 'react-hot-toast';

// Banner Data
const banners = [
  {
    id: 1,
    tag: 'New Collection',
    title: 'Find Your Style,\nLove Your Look ✨',
    desc: 'Discover the latest trends in fashion, beauty, and lifestyle.',
    btnText: 'Shop Now →',
    bgGradient: 'linear-gradient(to right, #9c27b0 0%, #ff4081 50%, rgba(255,64,129,0) 90%)',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop',
    btnColor: '#9c27b0',
  },
  {
    id: 2,
    tag: 'Summer Sale',
    title: 'Summer Collection\nUp to 50% Off ☀️',
    desc: 'Get ready for the beach with our latest summer outfits.',
    btnText: 'Explore Now →',
    bgGradient: 'linear-gradient(to right, #f39c12 0%, #e74c3c 50%, rgba(231,76,60,0) 90%)',
    image: 'https://images.unsplash.com/photo-1523359346063-d879354c0ea5?q=80&w=1000&auto=format&fit=crop',
    btnColor: '#e74c3c',
  },
  {
    id: 3,
    tag: 'Tech Deals',
    title: 'Next Gen Tech,\nUnbeatable Prices 🎧',
    desc: 'Upgrade your life with the latest gadgets and electronics.',
    btnText: 'View Deals →',
    bgGradient: 'linear-gradient(to right, #2980b9 0%, #00cec9 50%, rgba(0,206,201,0) 90%)',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=1000&auto=format&fit=crop',
    btnColor: '#2980b9',
  },
  {
    id: 4,
    tag: 'Home & Living',
    title: 'Elevate Your\nLiving Space 🛋️',
    desc: 'Minimalist and modern furniture for your dream home.',
    btnText: 'Shop Furniture →',
    bgGradient: 'linear-gradient(to right, #27ae60 0%, #55efc4 50%, rgba(85,239,196,0) 90%)',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000&auto=format&fit=crop',
    btnColor: '#27ae60',
  },
  {
    id: 5,
    tag: 'Activewear',
    title: 'Push Your Limits,\nStay Active 🏃',
    desc: 'Premium sportswear designed for peak performance.',
    btnText: 'Shop Activewear →',
    bgGradient: 'linear-gradient(to right, #c0392b 0%, #ff7675 50%, rgba(255,118,117,0) 90%)',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1000&auto=format&fit=crop',
    btnColor: '#c0392b',
  }
];

// Mock Data
const categories = [
  { name: 'Fashion', icon: '👕' },
  { name: 'Beauty', icon: '💄' },
  { name: 'Electronics', icon: '🎧' },
  { name: 'Home & Living', icon: '🪑' },
  { name: 'Sports', icon: '👟' },
  { name: 'More', icon: '🎛️' },
];

const bestDeals: Product[] = [
  { id: 'bd1', name: 'Air Max 270 React', category: "Women's Shoes", price: 129.99, originalPrice: 150.00, rating: 4.8, reviews: 124, image: '/shoe1.png', discount: '-25%' },
  { id: 'bd2', name: 'Apple Watch Series 9', category: "41mm Midnight", price: 359.00, originalPrice: 400.00, rating: 4.9, reviews: 82, image: '/watch.png', discount: '-10%' },
  { id: 'bd3', name: 'Chanel Chance Eau', category: "Tendre EDP 100ml", price: 89.99, originalPrice: 110.00, rating: 4.7, reviews: 55, image: '/perfume.png', discount: '-20%' },
  { id: 'bd4', name: 'Sony WH-1000XM5', category: "Wireless Headphones", price: 299.00, rating: 4.9, reviews: 170, image: '/headphones.png' },
];

export default function Home() {
  const { addToCart, toggleCart, cart, toggleSidebar } = useStore();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
  };

  return (
    <div className={styles.homeContainer}>
      {/* Topbar */}
      <header className={styles.topbar}>
        <button className={styles.mobileMenuBtn} onClick={toggleSidebar}>
          <Menu size={24} />
        </button>
        <div className={styles.searchBar}>
          <Search size={20} className={styles.searchIcon} />
          <input type="text" placeholder="Search for products, brands and more..." />
        </div>
        <div className={styles.topActions}>
          <button className={styles.iconBtn} onClick={() => toast('Added to wishlist', { icon: '❤️' })}><Heart size={20} /> <span className={styles.wishlistText}>Wishlist</span></button>
          <button className={styles.iconBtn} onClick={toggleCart}>
            <div className={styles.badgeWrap}>
              <ShoppingBag size={20} />
              <span className={styles.notificationBadge}>{cart.length}</span>
            </div>
          </button>
          <button className={styles.iconBtn}>
            <div className={styles.badgeWrap}>
              <Bell size={20} />
              <span className={styles.notificationBadge}>3</span>
            </div>
          </button>
          <div className={styles.profile}>
            <div className={styles.avatar}>A</div>
            <span>Alina Putri</span>
            <ChevronRight size={16} />
          </div>
        </div>
      </header>

      {/* Hero Section Carousel */}
      <div className={styles.heroWrapper}>
        <AnimatePresence mode="wait">
          <motion.section 
            key={currentSlide}
            className={styles.hero}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{ 
              backgroundImage: `${banners[currentSlide].bgGradient}, url(${banners[currentSlide].image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center right',
              backgroundColor: banners[currentSlide].btnColor,
            }}
          >
            <div className={styles.heroContent}>
              <motion.span 
                className={styles.heroTag}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {banners[currentSlide].tag}
              </motion.span>
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                style={{ whiteSpace: 'pre-line' }}
              >
                {banners[currentSlide].title}
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {banners[currentSlide].desc}
              </motion.p>
              <motion.button 
                className="btn-primary" 
                style={{ width: 'fit-content', marginTop: '16px', background: 'white', color: banners[currentSlide].btnColor }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {banners[currentSlide].btnText}
              </motion.button>
            </div>
            
            {/* Pagination Dots */}
            <div className={styles.paginationDots}>
              {banners.map((_, index) => (
                <button 
                  key={index}
                  className={`${styles.dot} ${index === currentSlide ? styles.dotActive : ''}`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </motion.section>
        </AnimatePresence>
      </div>

      {/* Categories */}
      <motion.section 
        className={styles.categories}
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {categories.map((cat, idx) => (
          <motion.div key={idx} variants={itemVariants} className={styles.categoryCard}>
            <div className={styles.catIcon}>{cat.icon}</div>
            <span>{cat.name}</span>
          </motion.div>
        ))}
      </motion.section>

      {/* Promo Banners */}
      <section className={styles.promos}>
        <div className={`${styles.promoCard} ${styles.promoPink}`}>
          <div>
            <h3>Flash Sale</h3>
            <p>Limited time deals</p>
            <span className={styles.highlightText}>Up to 70% Off</span>
          </div>
        </div>
        <div className={`${styles.promoCard} ${styles.promoOrange}`}>
          <div>
            <h3>Free Shipping</h3>
            <p>On orders over $50</p>
            <button className={styles.linkBtn}>Shop now <ChevronRight size={14}/></button>
          </div>
        </div>
        <div className={`${styles.promoCard} ${styles.promoYellow}`}>
          <div>
            <h3>New Arrivals</h3>
            <p>Check out the latest trends</p>
            <button className={styles.linkBtn}>Shop now <ChevronRight size={14}/></button>
          </div>
        </div>
      </section>

      {/* Best Deals */}
      <section className={styles.productSection}>
        <div className="flex-between" style={{ marginBottom: '24px' }}>
          <h2>Best Deals for You</h2>
          <button className={styles.viewAllBtn}>View All</button>
        </div>
        <motion.div 
          className={styles.productGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {bestDeals.map((product) => (
            <motion.div key={product.id} variants={itemVariants} className="card" style={{ position: 'relative' }}>
              <button 
                className={styles.wishlistBtn} 
                onClick={(e) => { e.preventDefault(); toast('Added to wishlist', {icon: '❤️'}) }}
                style={{ zIndex: 10 }}
              >
                <Heart size={16} />
              </button>
              <Link href={`/product/${product.id}`} style={{textDecoration: 'none', color: 'inherit', display: 'block'}}>
                <div className={styles.prodImageWrapper}>
                  <span className={styles.discountTag}>{product.discount || '-15%'}</span>
                  <div style={{width: '100%', height: '100%', background: 'var(--surface)', borderRadius: '12px'}}></div>
                </div>
                
                <div className={styles.prodInfo}>
                  <div className={styles.prodCat}>{product.category}</div>
                  <h4>{product.name}</h4>
                  
                  <div className={styles.priceRow}>
                    <div className={styles.prices}>
                      <span className={styles.currentPrice}>${product.price}</span>
                      {product.originalPrice && <span className={styles.originalPrice}>${product.originalPrice}</span>}
                    </div>
                    <div className={styles.rating}>
                      <Star size={14} className={styles.starIcon} fill="currentColor" />
                      <span>{product.rating}</span>
                      <span className={styles.reviews}>({product.reviews})</span>
                    </div>
                  </div>
                </div>
              </Link>
              <button 
                className={styles.addCartBtn}
                onClick={() => {
                  addToCart(product);
                  toast.success(`${product.name} added to cart!`);
                }}
              >
                Add to Cart
              </button>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
