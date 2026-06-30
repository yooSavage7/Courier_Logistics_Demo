"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="relative h-[480px] sm:h-[520px] flex items-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1519003300449-424ad0405076?w=1920&q=80')` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[#0f172a]/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/95 via-[#0f172a]/70 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16">
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="text-[#2563eb] text-xs font-bold uppercase tracking-widest">Reliable Logistics</span>
            <span className="text-slate-500">•</span>
            <span className="text-[#2563eb] text-xs font-bold uppercase tracking-widest">Worldwide</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-4"
          >
            Track Your Shipment
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="text-slate-300 text-base leading-relaxed mb-8 max-w-sm"
          >
            Reliable &amp; secure logistics solutions, delivered with care across the globe.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.44 }}
          >
            <Link
              href="/track"
              className="inline-flex items-center gap-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold px-6 py-3 rounded-md text-sm transition-colors shadow-lg shadow-blue-900/30"
            >
              TRACK YOUR ORDER NOW
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
