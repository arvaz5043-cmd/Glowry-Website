import { motion } from 'motion/react';
import { SALON_INFO } from '../constants';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1000&auto=format&fit=crop" 
                alt="Salon Interior" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-2/3 aspect-square bg-gray-100 -z-0"></div>
            <div className="absolute top-1/2 -left-10 -translate-y-1/2 w-20 h-40 border-l border-t border-rich-black -z-0 hidden md:block"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gray-400 text-xs uppercase tracking-[0.3em] mb-4 block">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-serif text-rich-black mb-8 leading-tight">
              Crafting Beauty <br />Since 2015
            </h2>
            <div className="space-y-6 text-gray-500 text-sm md:text-base leading-relaxed font-light">
              <p>
                Located in the heart of Nagpur, Glowry Unisex Salon has been the cornerstone of luxury grooming for nearly a decade. Our journey began with a simple vision: to create a space where everyone feels like royalty.
              </p>
              <p>
                We believe that beauty is personal. That's why our approach is always bespoke. Whether you're looking for a bold transformation or a subtle refresh, our team of expert stylists and therapists are dedicated to bringing your vision to life.
              </p>
              <p>
                Our salon features state-of-the-art equipment and a tranquil atmosphere designed to provide a complete sensory escape from the bustling streets of Nagpur.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-10 mt-12">
              <div>
                <p className="text-3xl font-serif text-rich-black mb-1">10k+</p>
                <p className="text-[10px] uppercase tracking-widest text-gray-400">Happy Clients</p>
              </div>
              <div>
                <p className="text-3xl font-serif text-rich-black mb-1">15+</p>
                <p className="text-[10px] uppercase tracking-widest text-gray-400">Expert Stylists</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
