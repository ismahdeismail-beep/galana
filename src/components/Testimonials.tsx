import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TESTIMONIALS } from '../constants';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 px-6 bg-luxury-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-luxury-gold/5 opacity-10 pointer-events-none">
        <Quote size={400} />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="section-subtitle">Guest Experiences</span>
          <h2 className="section-title">Loved by <span className="italic text-luxury-gold">Locals</span> & Visitors</h2>
        </div>

        <div className="relative h-[400px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="flex justify-center gap-1 mb-8">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={20} className="fill-luxury-gold text-luxury-gold" />
                ))}
              </div>
              
              <blockquote className="font-serif text-2xl md:text-4xl italic text-luxury-cream/90 leading-relaxed mb-12">
                "{TESTIMONIALS[index].content}"
              </blockquote>

              <div className="flex flex-col items-center">
                <img 
                  src={TESTIMONIALS[index].image} 
                  alt={TESTIMONIALS[index].name} 
                  className="w-16 h-16 rounded-full object-cover border-2 border-luxury-gold mb-4"
                  referrerPolicy="no-referrer"
                />
                <h4 className="font-serif text-xl">{TESTIMONIALS[index].name}</h4>
                <p className="text-[10px] uppercase tracking-widest text-luxury-gold font-bold">{TESTIMONIALS[index].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <button 
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 text-luxury-gold/30 hover:text-luxury-gold transition-colors hidden md:block"
          >
            <ChevronLeft size={48} />
          </button>
          <button 
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-luxury-gold/30 hover:text-luxury-gold transition-colors hidden md:block"
          >
            <ChevronRight size={48} />
          </button>
        </div>

        <div className="flex justify-center gap-4 mt-12">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === i ? 'bg-luxury-gold w-8' : 'bg-luxury-gold/20'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
