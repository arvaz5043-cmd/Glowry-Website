import { motion } from 'motion/react';
import { Menu, X, Phone, MapPin, Instagram, Facebook } from 'lucide-react';
import { useState, useEffect } from 'react';
import { SALON_INFO } from '../constants';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col"
        >
          <span className={`text-2xl font-serif font-bold tracking-tighter ${scrolled ? 'text-rich-black' : 'text-white'}`}>
            GLOWRY
          </span>
          <span className={`text-[10px] tracking-[0.3em] uppercase -mt-1 ${scrolled ? 'text-gray-500' : 'text-gray-300'}`}>
            Unisex Salon
          </span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-xs uppercase tracking-widest font-medium transition-colors hover:text-gray-400 ${
                scrolled ? 'text-rich-black' : 'text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#booking" 
            className={`px-6 py-2 text-xs uppercase tracking-widest font-bold border ${
              scrolled 
                ? 'border-rich-black text-rich-black hover:bg-rich-black hover:text-white' 
                : 'border-white text-white hover:bg-white hover:text-rich-black'
            } transition-all duration-300`}
          >
            Book Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className={scrolled ? 'text-rich-black' : 'text-white'} />
          ) : (
            <Menu className={scrolled ? 'text-rich-black' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-white shadow-xl p-8 flex flex-col space-y-6 md:hidden"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-sm uppercase tracking-widest font-medium text-rich-black"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#booking" 
            onClick={() => setIsOpen(false)}
            className="w-full py-4 bg-rich-black text-white text-center text-xs uppercase tracking-widest font-bold"
          >
            Book Appointment
          </a>
          <div className="pt-6 border-t border-gray-100 flex justify-center space-x-6 text-gray-400">
            <Phone size={18} />
            <MapPin size={18} />
            <Instagram size={18} />
            <Facebook size={18} />
          </div>
        </motion.div>
      )}
    </nav>
  );
}
