import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="relative">
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-rich-black z-[60] origin-left" 
        style={{ scaleX }} 
      />

      <Navbar />
      <Hero />
      <About />
      <Services />
      
      {/* Testimonial Quote Section */}
      <section className="py-24 bg-rich-black text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-white/30 text-4xl font-serif mb-8 block">"</span>
          <h3 className="text-2xl md:text-4xl font-serif italic font-light leading-relaxed mb-8">
            The best salon experience in Nagpur. The attention to detail and the premium ambiance make every visit special.
          </h3>
          <div className="w-12 h-px bg-white/20 mx-auto mb-4"></div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/50">Priya Sharma, Regular Client</p>
        </div>
      </section>

      <BookingForm />
      
      {/* Map Section */}
      <section className="h-[400px] w-full bg-gray-200 relative overflow-hidden">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.444760812345!2d79.088123456789!3d21.178901234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c123456789ab%3A0x1234567890abcdef!2sKamptee%20Rd%2C%20Nagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0, filter: 'grayscale(1) invert(1) contrast(1.2)' }} 
          allowFullScreen={true} 
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="absolute bottom-10 left-10 glass-card p-6 max-w-xs hidden md:block">
          <p className="text-[10px] uppercase tracking-widest font-bold mb-2">Find Us</p>
          <p className="text-xs text-gray-500 leading-relaxed">
            Shop No. 10, Frontier Apartment, Kamptee Rd, Nagpur, Maharashtra 440017
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
