"use client";

import { motion } from "framer-motion";

const images = [
  {
    src: "/about-ship.png",
    alt: "Cargo ship with containers at sea",
  },
  {
    src: "/about-truck.png",
    alt: "Freight truck with red container at sunset",
  },
  {
    src: "/about-plane.png",
    alt: "Commercial aircraft taking off at golden hour",
  },
];

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
            <p className="text-[#dc2626] text-sm font-bold uppercase tracking-wider mb-3">About</p>
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

          {/* 3-image mosaic — matches reference layout */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid grid-cols-3 gap-3 h-72 lg:h-80"
          >
            {images.map((img, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
