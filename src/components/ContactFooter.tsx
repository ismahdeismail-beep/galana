import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

const ContactFooter = () => {
  return (
    <>
      <section id="contact" className="py-24 px-6 bg-white text-luxury-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="section-subtitle">Get in Touch</span>
              <h2 className="section-title text-black">Visit <span className="italic text-luxury-gold">Silver Crane</span></h2>
              
              <div className="space-y-10 mt-12">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-luxury-cream flex items-center justify-center text-luxury-gold shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl mb-1">Our Location</h4>
                    <p className="text-gray-500 font-light">123 Crane Ridge, Westlands, Nairobi, Kenya</p>
                    <p className="text-[10px] uppercase font-bold text-luxury-emerald mt-1">Easy parking available</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-luxury-cream flex items-center justify-center text-luxury-gold shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl mb-1">Opening Hours</h4>
                    <div className="text-gray-500 font-light space-y-1">
                      <p className="flex justify-between w-64"><span>Mon - Thu</span> <span>12:00 PM - 10:00 PM</span></p>
                      <p className="flex justify-between w-64 text-luxury-gold font-medium"><span>Fri - Sat</span> <span>12:00 PM - 12:00 AM</span></p>
                      <p className="flex justify-between w-64"><span>Sunday</span> <span>11:00 AM - 9:00 PM</span></p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-luxury-cream flex items-center justify-center text-luxury-gold shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl mb-1">Contact</h4>
                    <p className="text-gray-500 font-light">+254 712 345 678</p>
                    <p className="text-gray-500 font-light">reservations@silvercrane.co.ke</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-12">
                <a href="tel:+254712345678" className="luxury-button-filled flex-1 text-center">Call Now</a>
                <a href="https://wa.me/254712345678" className="luxury-button flex-1 text-center">WhatsApp</a>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="h-[500px] bg-gray-100 relative grayscale hover:grayscale-0 transition-all duration-700 overflow-hidden shadow-2xl"
            >
              <iframe 
                title="Silver Crane Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.364489371078!2d36.7909!3d-1.264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f17163c457d05%3A0x6e9f54668263595b!2sWestlands%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1715520000000!5m2!1sen!2ske" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute top-4 left-4 glass px-4 py-2 uppercase text-[10px] font-bold tracking-widest">
                Central Location
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-luxury-black py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 lg:col-span-1">
               <div className="flex items-center gap-2 mb-8">
                <div className="w-10 h-10 border-2 border-luxury-gold flex items-center justify-center p-1">
                   <span className="font-serif font-bold text-luxury-gold text-2xl tracking-tighter">SC</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-xl tracking-widest text-luxury-cream leading-none">SILVER CRANE</span>
                  <span className="text-[8px] tracking-[0.4em] text-luxury-gold font-bold uppercase">Restaurant</span>
                </div>
              </div>
              <p className="text-sm text-luxury-cream/40 font-light leading-relaxed mb-8">
                The pinnacle of high-end dining in Nairobi, where every detail 
                is orchestrated to provide an unforgettable sensory journey.
              </p>
              <div className="flex gap-4">
                {[Instagram, Facebook, Twitter, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 glass flex items-center justify-center hover:text-luxury-gold transition-colors">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-serif text-xl mb-8">Quick Links</h4>
              <ul className="space-y-4 text-sm text-luxury-cream/60 font-light lowercase tracking-wider">
                <li><a href="#about" className="hover:text-luxury-gold transition-colors">About Us</a></li>
                <li><a href="#menu" className="hover:text-luxury-gold transition-colors">The Menu</a></li>
                <li><a href="#gallery" className="hover:text-luxury-gold transition-colors">Gallery</a></li>
                <li><a href="#reservations" className="hover:text-luxury-gold transition-colors">Reservations</a></li>
                <li><a href="#contact" className="hover:text-luxury-gold transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-xl mb-8">Experiences</h4>
              <ul className="space-y-4 text-sm text-luxury-cream/60 font-light lowercase tracking-wider">
                <li><a href="#" className="hover:text-luxury-gold transition-colors">Private Dining</a></li>
                <li><a href="#" className="hover:text-luxury-gold transition-colors">Corporate Events</a></li>
                <li><a href="#" className="hover:text-luxury-gold transition-colors">Wine Tasting</a></li>
                <li><a href="#" className="hover:text-luxury-gold transition-colors">Gift Vouchers</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-xl mb-8">Newsletter</h4>
              <p className="text-sm text-luxury-cream/60 font-light mb-6 lowercase tracking-wider">
                Join our exclusive circle for event invitations and seasonal updates.
              </p>
              <form className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="bg-white/5 border border-white/10 px-4 py-3 text-xs w-full focus:outline-none focus:border-luxury-gold"
                />
                <button className="bg-luxury-gold text-luxury-black font-bold uppercase tracking-widest text-[10px] px-4">
                  Join
                </button>
              </form>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.3em] font-bold text-luxury-cream/30">
            <p>© 2024 Silver Crane Restaurant. All Rights Reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-luxury-gold transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-luxury-gold transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactFooter;
