import React from 'react';
import { motion } from 'motion/react';
import { GALLERY } from '../constants';

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 px-6 bg-luxury-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <span className="section-subtitle">Visual Storytelling</span>
            <h2 className="section-title">The <span className="text-luxury-gold italic">Ambiance</span></h2>
          </div>
          <p className="max-w-md text-luxury-cream/60 font-light leading-relaxed mb-4">
            Step into a world where architecture meets gastronomy. Our spaces are 
            designed to heighten your sensory experience.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {GALLERY.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group overflow-hidden break-inside-avoid"
            >
              <img 
                src={item.url} 
                alt={item.title} 
                className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-luxury-gold font-bold mb-2 block">{item.category}</span>
                  <h3 className="font-serif text-2xl text-white italic">{item.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
