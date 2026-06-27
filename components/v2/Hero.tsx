"use client";

import { motion } from "framer-motion";
import { Package, Globe, Shield, Clock, Headphones } from "lucide-react";

const features = [
  { icon: Globe, label: "Global Network" },
  { icon: Shield, label: "Secure Handling" },
  { icon: Clock, label: "On-Time Delivery" },
  { icon: Headphones, label: "24/7 Support" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Background — custom logistics composite (plane + truck + containers + ship) */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/hero-bg.png')` }}
        role="presentation"
        aria-hidden="true"
      />
      {/* Lighter overlay — lets the warm sunset colours show through for V2 */}
      <div className="absolute inset-0 bg-slate-900/38" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/45 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="inline-block bg-[#dc2626]/20 text-[#dc2626] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6 border border-[#dc2626]/30">
              Premium Logistics Solutions
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.08] mb-6"
          >
            Delivering Excellence{" "}
            <span className="block">
              Across{" "}
              <span className="text-[#dc2626]">Borders</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-slate-300 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl"
          >
            Reliable, fast and secure logistics solutions tailored to your needs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#tracking"
              className="inline-flex items-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold px-8 py-4 rounded-lg transition-colors text-base shadow-lg shadow-red-900/30"
            >
              <Package className="w-5 h-5" />
              Track Shipment
            </a>
            <a
              href="#rate-inquiry"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors text-base"
            >
              Get Rate Quote
            </a>
          </motion.div>
        </div>
      </div>

      {/* Feature Bar */}
      <div className="relative z-10 bg-black/30 backdrop-blur-sm border-t border-white/10 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-white/10">
            {features.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center justify-center gap-3 py-5 px-4"
              >
                <Icon className="w-5 h-5 text-[#dc2626] flex-shrink-0" />
                <span className="text-white text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
