import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reservations', href: '#reservations' },
    { name: 'Events', href: '#events' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'py-4 glass' : 'py-8 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2">
          <div className="w-10 h-10 border-2 border-luxury-gold flex items-center justify-center p-1">
             <span className="font-serif font-bold text-luxury-gold text-2xl tracking-tighter">SC</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl tracking-widest text-luxury-cream leading-none">SILVER CRANE</span>
            <span className="text-[8px] tracking-[0.4em] text-luxury-gold font-bold">RESTAURANT</span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-xs uppercase tracking-widest text-luxury-cream/80 hover:text-luxury-gold transition-colors duration-300 font-medium"
            >
              {link.name}
            </a>
          ))}
          <a href="#reservations" className="luxury-button-filled ml-4">
            Reserve
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-luxury-gold"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-luxury-black flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-12">
               <div className="flex items-center gap-2">
                <div className="w-10 h-10 border-2 border-luxury-gold flex items-center justify-center p-1">
                   <span className="font-serif font-bold text-luxury-gold text-2xl tracking-tighter">SC</span>
                </div>
                <span className="font-serif text-xl tracking-widest">SILVER CRANE</span>
              </div>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-luxury-gold"
              >
                <X size={32} />
              </button>
            </div>

            <div className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-serif text-4xl hover:text-luxury-gold transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="mt-auto pt-8 border-t border-white/10 flex flex-col gap-6">
              <a href="tel:+254123456789" className="flex items-center gap-4 text-luxury-gold">
                <Phone size={20} />
                <span className="tracking-widest uppercase text-sm">+254 123 456 789</span>
              </a>
              <a href="#reservations" className="luxury-button-filled w-full text-center">
                Book a Table
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
