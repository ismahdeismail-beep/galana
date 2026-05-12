import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2670&auto=format&fit=crop" 
          alt="Silver Crane Ambiance" 
          className="w-full h-full object-cover animate-zoom-out"
          referrerPolicy="no-referrer"
        />
        {/* Fallback pattern if image fails */}
        <div className="absolute inset-0 bg-luxury-black/40 z-0" />
      </div>

      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 flex justify-center"
        >
          <div className="glass px-4 py-2 flex items-center gap-2 rounded-full border-luxury-gold/30">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={14} className="fill-luxury-gold text-luxury-gold" />
              ))}
            </div>
            <span className="text-[10px] uppercase tracking-widest font-bold">Top-Rated Kenyan Fine Dining</span>
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-serif text-6xl md:text-8xl lg:text-9xl mb-8 leading-tight text-luxury-cream"
        >
          An <span className="italic text-luxury-gold">Elevated</span> <br />
          Dining Experience
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg md:text-xl text-luxury-cream/80 max-w-2xl mx-auto mb-12 font-light leading-relaxed"
        >
          Exceptional cuisine, warm Kenyan hospitality, and unforgettable moments 
          crafted by our master chefs.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a href="#reservations" className="luxury-button-filled scale-110">
            Reserve a Table
          </a>
          <a href="#menu" className="luxury-button group">
            View Our Menu
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 ml-2">→</span>
          </a>
        </motion.div>
      </div>

      {/* Floating Indicators */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 cursor-pointer"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <ChevronDown size={32} className="text-luxury-gold/50" />
      </motion.div>
    </section>
  );
};

export default Hero;
