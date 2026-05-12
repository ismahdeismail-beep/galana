import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, Calendar } from 'lucide-react';

const FloatingActions = () => {
  return (
    <>
      {/* WhatsApp Action */}
      <a 
        href="https://wa.me/254123456789" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-40 bg-luxury-emerald text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center gap-2 group"
      >
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 font-bold uppercase tracking-widest text-[10px]">
          Inquire via WhatsApp
        </span>
        <MessageCircle size={24} />
      </a>

      {/* Mobile Sticky Reservation CTA */}
      <div className="md:hidden fixed bottom-0 left-0 w-full z-40 p-4 glass">
        <a href="#reservations" className="luxury-button-filled w-full flex items-center justify-center gap-2">
          <Calendar size={18} />
          Book Your Table
        </a>
      </div>
    </>
  );
};

export default FloatingActions;
