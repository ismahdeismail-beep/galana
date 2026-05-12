/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MenuSection from './components/Menu';
import Gallery from './components/Gallery';
import Reservation from './components/Reservation';
import Testimonials from './components/Testimonials';
import ContactFooter from './components/ContactFooter';
import FloatingActions from './components/FloatingActions';

export default function App() {
  return (
    <div className="min-h-screen bg-luxury-black font-sans text-luxury-cream overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <MenuSection />
        <Gallery />
        <Testimonials />
        <Reservation />
        <ContactFooter />
      </main>

      <FloatingActions />
      
      {/* Global Grainy Texture Overlay for Film Feel */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] mix-blend-overlay">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilter">
            <feTurbulence 
              type="fractalNoise" 
              baseFrequency="0.65" 
              numOctaves="3" 
              stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>
    </div>
  );
}

