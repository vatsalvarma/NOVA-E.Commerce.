import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ArrowRight, Star } from 'lucide-react';

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Premium Text Reveal Animation
      gsap.from(".hero-text-line", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out",
        delay: 0.2
      });

      // Floating Elements Animation
      gsap.to(".floating-card", {
        y: -20,
        duration: 3,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        stagger: 0.5
      });
      
      // Image Parallax Scale
      gsap.from(imageRef.current, {
        scale: 1.1,
        opacity: 0,
        duration: 2,
        ease: "power3.out",
        delay: 0.5
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden bg-[#050505]">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1] 
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] h-[70vh] w-[70vh] rounded-full bg-blue-600/20 blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            rotate: [360, 0],
            scale: [1, 1.5, 1] 
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] -right-[10%] h-[60vh] w-[60vh] rounded-full bg-purple-600/20 blur-[120px]" 
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-32 lg:pt-48 pb-20 z-10 flex flex-col lg:flex-row items-center justify-between gap-12 min-h-screen">
        
        {/* Left Content */}
        <motion.div style={{ y, opacity }} className="flex-1 text-left z-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 mb-8 backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium uppercase tracking-wider text-gray-300">New Autumn Collection</span>
          </div>
          
          <h1 ref={textRef} className="text-5xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight overflow-hidden">
            <div className="hero-text-line">Elevate Your</div>
            <div className="hero-text-line bg-gradient-to-r from-blue-400 via-purple-400 to-primary bg-clip-text text-transparent">
              Everyday Style.
            </div>
          </h1>
          
          <p className="hero-text-line max-w-xl text-lg text-gray-400 mb-10">
            Discover the perfect blend of comfort and modern aesthetics. Premium menswear designed for the contemporary lifestyle.
          </p>
          
          <div className="hero-text-line flex flex-wrap items-center gap-4">
            <button className="group relative overflow-hidden rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition-all hover:scale-105 active:scale-95">
              <span className="relative z-10 flex items-center gap-2">
                Shop Collection
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
            <button className="rounded-full border border-white/20 bg-transparent px-8 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/10 active:scale-95">
              View Lookbook
            </button>
          </div>
          
          {/* Social Proof Stats */}
          <div className="hero-text-line mt-16 flex items-center gap-8 border-t border-white/10 pt-8">
            <div>
              <p className="text-3xl font-bold text-white">50k+</p>
              <p className="text-sm text-gray-500">Happy Customers</p>
            </div>
            <div className="h-12 w-px bg-white/10" />
            <div>
              <div className="flex items-center gap-1 text-yellow-500 mb-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="text-sm text-gray-500">4.9/5 Average Rating</p>
            </div>
          </div>
        </motion.div>

        {/* Right Content (Images / Floating Cards) */}
        <div className="flex-1 relative w-full h-[600px] lg:h-[700px] flex items-center justify-center">
          {/* Main Image Container */}
          <div ref={imageRef} className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
            <img 
              src="https://images.unsplash.com/photo-1516257984-b1b4d707412e?q=80&w=1000&auto=format&fit=crop" 
              alt="Premium Menswear" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating Glass Cards */}
          <div className="floating-card absolute top-20 right-0 lg:-right-10 z-20 flex items-center gap-4 rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur-xl shadow-xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
              <Star className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Premium Quality</p>
              <p className="text-xs text-gray-400">100% Organic Cotton</p>
            </div>
          </div>

          <div className="floating-card absolute bottom-32 left-0 lg:-left-10 z-20 rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur-xl shadow-xl">
            <p className="text-xs font-medium uppercase tracking-wider text-gray-400 mb-2">Featured Item</p>
            <p className="text-sm font-bold text-white">Minimalist Jacket</p>
            <p className="text-lg font-bold text-primary mt-1">$299.00</p>
          </div>
        </div>

      </div>
    </section>
  );
};
