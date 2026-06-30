"use client";

import { motion } from "framer-motion";
import { Warehouse } from "lucide-react";

export default function AboutUs() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#2563eb] text-xs font-bold uppercase tracking-widest mb-3">About Us</p>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-800 mb-5 leading-snug">
              About{" "}
              <span className="text-[#2563eb]">Classy Courier Services</span>
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              Classy Courier management is the part of supply chain management that plans, implements and controls the efficient forward and reverse flow and storage of goods, services and related information between the point of origin and the point of consumption.
            </p>
          </motion.div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex justify-center"
          >
            <div className="relative w-72 h-64">
              {/* Isometric warehouse illustration using layered divs */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Building body */}
                  <div className="w-48 h-32 bg-[#2563eb] rounded-t-lg relative">
                    <div className="absolute inset-x-4 top-2 bottom-0 bg-[#1d4ed8] rounded-t-sm opacity-30" />
                    {/* Windows */}
                    <div className="absolute top-4 left-4 grid grid-cols-3 gap-2">
                      {Array.from({length: 6}).map((_, i) => (
                        <div key={i} className="w-4 h-5 bg-sky-200/60 rounded-sm" />
                      ))}
                    </div>
                    {/* Door */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-10 bg-slate-300/50 rounded-t-sm" />
                  </div>
                  {/* Roof */}
                  <div
                    className="w-48 h-8 bg-[#1e40af]"
                    style={{ clipPath: "polygon(0 100%, 50% 0%, 100% 100%)" }}
                  />
                  {/* Ground/dock */}
                  <div className="flex items-end gap-2 mt-1">
                    <div className="w-16 h-8 bg-slate-300 rounded-sm flex items-center justify-center">
                      <div className="w-10 h-5 bg-slate-400 rounded-sm" />
                    </div>
                    <div className="w-12 h-6 bg-amber-400 rounded-sm" />
                  </div>
                  {/* Shadow */}
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-44 h-3 bg-slate-200 rounded-full blur-sm" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
