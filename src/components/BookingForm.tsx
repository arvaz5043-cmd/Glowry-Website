import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, User, Phone, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../constants';

export default function BookingForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    date: '',
    time: '',
    name: '',
    phone: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3);
    // In a real app, this would send data to Firebase
  };

  const times = ['10:00 AM', '11:30 AM', '01:00 PM', '02:30 PM', '04:00 PM', '05:30 PM', '07:00 PM', '08:30 PM'];

  return (
    <section id="booking" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gray-400 text-xs uppercase tracking-[0.3em] mb-4 block">Reservation</span>
          <h2 className="text-4xl md:text-5xl font-serif text-rich-black">Book Your Experience</h2>
        </div>

        <div className="bg-white shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[600px]">
          {/* Left Side - Info */}
          <div className="md:w-1/3 bg-rich-black p-10 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-serif mb-6">Why Glowry?</h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-[10px]">01</span>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest font-bold mb-1">Expert Stylists</p>
                    <p className="text-white/50 text-xs leading-relaxed">Trained professionals with years of experience.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-[10px]">02</span>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest font-bold mb-1">Premium Products</p>
                    <p className="text-white/50 text-xs leading-relaxed">We use only the finest international brands.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-[10px]">03</span>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest font-bold mb-1">Luxury Ambiance</p>
                    <p className="text-white/50 text-xs leading-relaxed">A serene environment designed for relaxation.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="pt-10 border-t border-white/10">
              <p className="text-[10px] uppercase tracking-widest text-white/40 mb-2">Need Help?</p>
              <p className="text-lg font-serif">7035543210</p>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="md:w-2/3 p-10 relative">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div 
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="h-full flex flex-col"
                >
                  <h4 className="text-xs uppercase tracking-widest font-bold mb-8 flex items-center gap-2">
                    <span className="w-6 h-6 bg-rich-black text-white rounded-full flex items-center justify-center text-[10px]">1</span>
                    Select Service & Time
                  </h4>
                  
                  <div className="space-y-6 flex-grow">
                    <div>
                      <label className="text-[10px] uppercase tracking-widest text-gray-400 mb-2 block">Service</label>
                      <select 
                        className="premium-input"
                        value={formData.service}
                        onChange={(e) => setFormData({...formData, service: e.target.value})}
                      >
                        <option value="">Choose a service...</option>
                        {['Hair', 'Skin', 'Body', 'Nails', 'Makeup', 'Packages'].map(category => (
                          <optgroup key={category} label={category}>
                            {SERVICES.filter(s => s.category === category).map(s => (
                              <option key={s.id} value={s.name}>
                                {s.name} ({s.price})
                              </option>
                            ))}
                          </optgroup>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="text-[10px] uppercase tracking-widest text-gray-400 mb-2 block">Date</label>
                        <input 
                          type="date" 
                          className="premium-input"
                          value={formData.date}
                          onChange={(e) => setFormData({...formData, date: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="text-[10px] uppercase tracking-widest text-gray-400 mb-2 block">Time</label>
                        <select 
                          className="premium-input"
                          value={formData.time}
                          onChange={(e) => setFormData({...formData, time: e.target.value})}
                        >
                          <option value="">Select time...</option>
                          {times.map(t => <option key={t} value={t}>{t}</option>)}
                        </select>
                      </div>
                    </div>
                  </div>

                  <button 
                    disabled={!formData.service || !formData.date || !formData.time}
                    onClick={() => setStep(2)}
                    className="premium-button mt-10 disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    Next Step
                  </button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div 
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="h-full flex flex-col"
                >
                  <button onClick={() => setStep(1)} className="text-[10px] uppercase tracking-widest text-gray-400 mb-4 hover:text-rich-black transition-colors">
                    ← Back
                  </button>
                  <h4 className="text-xs uppercase tracking-widest font-bold mb-8 flex items-center gap-2">
                    <span className="w-6 h-6 bg-rich-black text-white rounded-full flex items-center justify-center text-[10px]">2</span>
                    Personal Details
                  </h4>
                  
                  <form onSubmit={handleSubmit} className="space-y-6 flex-grow">
                    <div>
                      <label className="text-[10px] uppercase tracking-widest text-gray-400 mb-2 block">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-0 top-3 text-gray-300" size={16} />
                        <input 
                          type="text" 
                          required
                          placeholder="Your Name"
                          className="premium-input pl-8"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] uppercase tracking-widest text-gray-400 mb-2 block">Phone Number</label>
                      <div className="relative">
                        <Phone className="absolute left-0 top-3 text-gray-300" size={16} />
                        <input 
                          type="tel" 
                          required
                          placeholder="7035543210"
                          className="premium-input pl-8"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded text-[10px] text-gray-500 leading-relaxed">
                      By booking, you agree to our terms. We'll send a confirmation SMS to your number.
                    </div>

                    <button 
                      type="submit"
                      className="premium-button w-full"
                    >
                      Confirm Booking
                    </button>
                  </form>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div 
                  key="step3"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center"
                >
                  <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h4 className="text-2xl font-serif mb-2">Booking Confirmed!</h4>
                  <p className="text-gray-500 text-sm mb-8 max-w-xs">
                    Thank you, {formData.name}. Your appointment for {formData.service} is scheduled for {formData.date} at {formData.time}.
                  </p>
                  <button 
                    onClick={() => {
                      setStep(1);
                      setFormData({ service: '', date: '', time: '', name: '', phone: '' });
                    }}
                    className="text-xs uppercase tracking-widest font-bold border-b border-rich-black pb-1"
                  >
                    Book Another
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
