import React from 'react';
import { motion } from 'motion/react';

const About = () => {
  const stats = [
    { label: 'Happy Guests', value: '12K+' },
    { label: 'Signature Dishes', value: '50+' },
    { label: 'Years of Excellence', value: '15+' },
    { label: 'Expert Chefs', value: '12' },
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-luxury-black bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.05),transparent)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-template-columns-[1.2fr_1fr] gap-16 items-center">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-subtitle">Our Heritage</span>
            <h2 className="section-title">A Symphony of <span className="text-luxury-gold italic">Kenyan</span> Flavors & Global Elegance</h2>
            
            <p className="text-luxury-cream/70 mb-8 leading-relaxed text-lg">
              Born from a passion for culinary excellence, Silver Crane Restaurant 
              seamlessly blends the rich heritage of Kenyan hospitality with 
              modern, sophisticated dining. We believe that every meal is 
              a story, waiting to be told through the finest local ingredients 
              and global techniques.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-12">
              {stats.map((stat, i) => (
                <div key={stat.label}>
                  <div className="text-3xl font-serif text-luxury-gold mb-1">{stat.value}</div>
                  <div className="text-[10px] uppercase tracking-widest text-luxury-cream/50 font-bold">{stat.label}</div>
                </div>
              ))}
            </div>

            <a href="#reservations" className="luxury-button">
              Discover Our Story
            </a>
          </motion.div>

          {/* Visuals - Asymmetrical Layout */}
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative z-10"
            >
              <img 
                src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=800&auto=format&fit=crop" 
                alt="Executive Chef" 
                className="w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
              />
              <div className="absolute -bottom-10 -right-10 w-64 h-64 border border-luxury-gold/30 -z-10" />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="absolute -bottom-20 -left-12 z-20 hidden md:block"
            >
              <img 
                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=400&auto=format&fit=crop" 
                alt="Restaurant Interior" 
                className="w-48 h-64 object-cover border-4 border-luxury-black shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
