import { motion } from 'motion/react';
import { SALON_INFO } from '../constants';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-rich-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1920&auto=format&fit=crop" 
          alt="Salon Interior" 
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-rich-black/60 via-transparent to-rich-black"></div>
      </div>

      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-white/70 text-xs uppercase tracking-[0.5em] mb-4 block font-medium">
            Nagpur's Premier Destination
          </span>
          <h1 className="text-5xl md:text-8xl text-white font-serif mb-6 leading-tight">
            Redefining <br />
            <span className="italic font-light">Elegance</span>
          </h1>
          <p className="text-white/60 max-w-xl mx-auto text-sm md:text-base font-light leading-relaxed mb-10 tracking-wide">
            Experience the art of grooming at Glowry. We blend contemporary styles with timeless techniques to bring out your most radiant self.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a 
              href="#booking"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-white text-rich-black text-xs uppercase tracking-widest font-bold hover:bg-gray-200 transition-colors"
            >
              Book Appointment
            </motion.a>
            <motion.a 
              href="#services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 border border-white/30 text-white text-xs uppercase tracking-widest font-bold hover:bg-white/10 transition-colors"
            >
              Explore Services
            </motion.a>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-white/30 text-[10px] uppercase tracking-[0.3em] mb-2">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/30 to-transparent"></div>
        </motion.div>
      </div>
    </section>
  );
}
