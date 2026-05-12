import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Users, Clock, Mail, Phone, User, CheckCircle2 } from 'lucide-react';

const Reservation = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="reservations" className="py-24 px-6 bg-luxury-cream text-luxury-black relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-luxury-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-luxury-gold/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="section-subtitle">Secure Your Spot</span>
          <h2 className="section-title">Table <span className="italic text-luxury-gold">Reservations</span></h2>
          <p className="text-gray-500 font-light max-w-lg mx-auto">
            Experience the pinnacle of Kenyan fine dining. Please fill out the 
            form below to request a table.
          </p>
        </div>

        <div className="glass border-gray-200 p-8 md:p-12 shadow-2xl">
          {isSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 text-center"
            >
              <div className="w-20 h-20 bg-luxury-emerald/10 text-luxury-emerald rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 size={48} />
              </div>
              <h3 className="font-serif text-3xl mb-4">Reservation Request Sent</h3>
              <p className="text-gray-500 mb-8">
                Thank you for choosing Silver Crane. Our concierge will contact you 
                shortly via email or phone to confirm your booking.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="luxury-button"
              >
                Book Another Table
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2 block">Full Name</label>
                <div className="relative">
                  <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input 
                    required
                    type="text" 
                    placeholder="Enter your name"
                    className="w-full bg-white border border-gray-200 py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-luxury-gold transition-colors"
                  />
                </div>
              </div>

              <div className="relative">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2 block">Phone Number</label>
                <div className="relative">
                  <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input 
                    required
                    type="tel" 
                    placeholder="+254 --- --- ---"
                    className="w-full bg-white border border-gray-200 py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-luxury-gold transition-colors"
                  />
                </div>
              </div>

              <div className="relative">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2 block">Number of Guests</label>
                <div className="relative">
                  <Users size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <select className="w-full bg-white border border-gray-200 py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-luxury-gold transition-colors appearance-none">
                    <option>1 Guest</option>
                    <option>2 Guests</option>
                    <option>4 Guests</option>
                    <option>6+ Guests</option>
                  </select>
                </div>
              </div>

              <div className="relative">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2 block">Date</label>
                <div className="relative">
                  <Calendar size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input 
                    required
                    type="date" 
                    className="w-full bg-white border border-gray-200 py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-luxury-gold transition-colors"
                  />
                </div>
              </div>

              <div className="relative">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2 block">Time Slot</label>
                <div className="relative">
                  <Clock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <select className="w-full bg-white border border-gray-200 py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-luxury-gold transition-colors appearance-none">
                    <option>6:00 PM</option>
                    <option>7:00 PM</option>
                    <option>8:00 PM</option>
                    <option>9:00 PM</option>
                  </select>
                </div>
              </div>

              <div className="relative">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2 block">Email Address</label>
                <div className="relative">
                  <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input 
                    required
                    type="email" 
                    placeholder="email@example.com"
                    className="w-full bg-white border border-gray-200 py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-luxury-gold transition-colors"
                  />
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2 block">Special Requests</label>
                <textarea 
                  rows={4}
                  placeholder="Allergies, birthday celebrations, preferred seating, etc."
                  className="w-full bg-white border border-gray-200 p-4 text-sm focus:outline-none focus:border-luxury-gold transition-colors resize-none"
                />
              </div>

              <div className="md:col-span-2 mt-4">
                <button type="submit" className="luxury-button-filled w-full py-5 text-sm">
                  Complete Reservation Request
                </button>
                <p className="text-[10px] text-gray-400 text-center mt-6 uppercase tracking-widest font-bold">
                  * Limited weekend availability. Reserve early for premium seating.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Reservation;
