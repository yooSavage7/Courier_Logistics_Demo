"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-slate-500 text-sm font-medium mb-2">Welcome to</p>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0f172a] mb-6 leading-tight">
              Classy Group of Logistics
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              We are a trusted logistics partner offering reliable courier, freight and cargo solutions worldwide. Our commitment to excellence, innovation and customer satisfaction sets us apart.
            </p>
            <a
              href="#contact"
              className="inline-block border-2 border-[#0f172a] text-[#0f172a] font-bold px-7 py-3 rounded-lg hover:bg-[#0f172a] hover:text-white transition-all text-sm"
            >
              Learn More About Us
            </a>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
              <img
                src="/about-gold.png"
                alt="Classy Group of Logistics — truck, cargo ship and aircraft at golden hour"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#f59e0b] rounded-2xl -z-10" />
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#0f172a]/10 rounded-xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
