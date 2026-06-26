import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter, Clock } from 'lucide-react';
import { SALON_INFO } from '../constants';

export default function Footer() {
  return (
    <footer id="contact" className="bg-rich-black text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-1">
            <div className="flex flex-col mb-8">
              <span className="text-3xl font-serif font-bold tracking-tighter">GLOWRY</span>
              <span className="text-[10px] tracking-[0.3em] uppercase -mt-1 text-gray-400">Unisex Salon</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Nagpur's most trusted destination for premium beauty and grooming services. We believe in excellence and elegance in every service we provide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-rich-black transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-rich-black transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-rich-black transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold mb-8 text-white/50">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Services', 'About Us', 'Book Appointment', 'Gallery', 'Privacy Policy'].map(item => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold mb-8 text-white/50">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <Phone size={18} className="text-gray-500 flex-shrink-0" />
                <span className="text-sm text-gray-400">{SALON_INFO.phone}</span>
              </li>
              <li className="flex gap-4">
                <Mail size={18} className="text-gray-500 flex-shrink-0" />
                <span className="text-sm text-gray-400">hello@glowrysalon.com</span>
              </li>
              <li className="flex gap-4">
                <MapPin size={18} className="text-gray-500 flex-shrink-0" />
                <span className="text-sm text-gray-400 leading-relaxed">
                  {SALON_INFO.fullAddress}
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold mb-8 text-white/50">Opening Hours</h4>
            <ul className="space-y-4">
              <li className="flex justify-between text-sm">
                <span className="text-gray-500">Mon - Sat</span>
                <span className="text-gray-300">10:00 AM - 09:00 PM</span>
              </li>
              <li className="flex justify-between text-sm">
                <span className="text-gray-500">Sunday</span>
                <span className="text-gray-300">10:00 AM - 07:00 PM</span>
              </li>
            </ul>
            <div className="mt-10 p-4 bg-white/5 border border-white/10 flex items-center gap-4">
              <Clock className="text-gray-400" size={20} />
              <p className="text-[10px] uppercase tracking-widest text-gray-400 leading-tight">
                Walk-ins are welcome, but appointments are preferred.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-widest text-gray-500">
            © 2024 Glowry Unisex Salon. All Rights Reserved.
          </p>
          <p className="text-[10px] uppercase tracking-widest text-gray-500">
            Designed for Excellence in Nagpur
          </p>
        </div>
      </div>
    </footer>
  );
}
