import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES, Service } from '../constants';
import { Scissors, Sparkles, Palette, Wind, Hand, Gift } from 'lucide-react';

const iconMap = {
  Hair: Scissors,
  Skin: Sparkles,
  Makeup: Palette,
  Body: Wind,
  Nails: Hand,
  Packages: Gift,
};

const categories = ['All', 'Hair', 'Skin', 'Body', 'Nails', 'Makeup', 'Packages'];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredServices = activeCategory === 'All' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-gray-400 text-xs uppercase tracking-[0.3em] mb-4 block">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl font-serif text-rich-black leading-tight">
              Curated Beauty <br />& Grooming Services
            </h2>
          </div>
          <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
            From precision cuts to rejuvenating skin treatments, our specialists provide a personalized experience for every client.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-4 mb-12 border-b border-gray-100 pb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-[10px] uppercase tracking-widest font-bold px-6 py-2 transition-all duration-300 ${
                activeCategory === cat 
                  ? 'bg-rich-black text-white' 
                  : 'text-gray-400 hover:text-rich-black'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100 border border-gray-100"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => {
              const Icon = iconMap[service.category as keyof typeof iconMap];
              return (
                <motion.div 
                  key={service.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white p-10 group hover:bg-rich-black transition-colors duration-500"
                >
                  <div className="mb-8 flex justify-between items-start">
                    <div className="p-3 bg-gray-50 group-hover:bg-white/10 transition-colors">
                      <Icon size={24} className="text-rich-black group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-xs font-medium text-gray-400 group-hover:text-white/40 transition-colors">
                        {service.duration}
                      </span>
                      {service.gender && (
                        <span className="text-[8px] uppercase tracking-widest font-bold text-gray-300 group-hover:text-white/20 mt-1">
                          {service.gender}
                        </span>
                      )}
                    </div>
                  </div>
                  <h3 className="text-xl font-serif mb-3 text-rich-black group-hover:text-white transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-500 text-sm mb-6 group-hover:text-white/60 transition-colors leading-relaxed line-clamp-2">
                    {service.description}
                  </p>
                  <div className="flex justify-between items-center pt-6 border-t border-gray-100 group-hover:border-white/10 transition-colors">
                    <span className="text-rich-black font-bold group-hover:text-white transition-colors">
                      {service.price}
                    </span>
                    <a 
                      href="#booking"
                      className="text-[10px] uppercase tracking-widest font-bold text-rich-black group-hover:text-white transition-colors border-b border-rich-black group-hover:border-white pb-1"
                    >
                      Book Now
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
