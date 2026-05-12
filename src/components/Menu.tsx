import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MENU_ITEMS } from '../constants';
import { Star, Flame } from 'lucide-react';

const MenuSection = () => {
  const categories = ['All', ...new Set(MENU_ITEMS.map(item => item.category))];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 px-6 bg-white text-luxury-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="section-subtitle">Culinary Excellence</span>
          <h2 className="section-title text-black">A Journey for the <br /> <span className="italic text-luxury-gold">Senses</span></h2>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 px-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-300 border ${
                activeCategory === cat 
                  ? 'bg-luxury-black text-luxury-gold border-luxury-black' 
                  : 'bg-transparent text-gray-500 border-gray-200 hover:border-luxury-gold'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group flex flex-col"
              >
                <div className="relative h-64 overflow-hidden mb-6">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                  
                  {item.isChefRecommendation && (
                    <div className="absolute top-4 left-4 glass px-3 py-1 flex items-center gap-1 text-[8px] font-bold uppercase tracking-widest text-white">
                      <Star size={10} className="fill-luxury-gold text-luxury-gold" />
                      Chef's Pick
                    </div>
                  )}
                  {item.isBestSeller && (
                    <div className="absolute top-4 right-4 bg-luxury-emerald px-3 py-1 flex items-center gap-1 text-[8px] font-bold uppercase tracking-widest text-white">
                      <Flame size={10} className="text-white" />
                      Best Seller
                    </div>
                  )}
                </div>

                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-xl group-hover:text-luxury-gold transition-colors">{item.name}</h3>
                  <span className="font-sans font-bold text-luxury-gold">{item.price}</span>
                </div>
                
                <p className="text-sm text-gray-500 font-light leading-relaxed mb-4">
                  {item.description}
                </p>
                
                <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
                   <span className="text-[9px] uppercase tracking-widest font-bold text-gray-400">{item.category}</span>
                   <button className="text-[10px] uppercase font-bold tracking-widest hover:text-luxury-gold transition-colors">
                     Order Now
                   </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        <div className="mt-20 text-center">
            <div className="inline-block border border-luxury-gold/30 px-12 py-8 relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-4 text-luxury-gold font-serif italic text-xl">Private Dining</div>
                <p className="text-gray-600 max-w-xl mx-auto mb-8 font-light italic">
                    "Looking for something more exclusive? We offer bespoke tasting menus for your private celebrations."
                </p>
                <a href="#events" className="luxury-button-filled">Inquire for Events</a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
