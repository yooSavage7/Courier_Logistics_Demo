"use client";

import { motion } from "framer-motion";
import { Calculator } from "lucide-react";

export default function RateInquiryCTA() {
  return (
    <section id="rate-inquiry" className="py-6 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="bg-[#0f172a] rounded-2xl px-8 py-7 flex flex-col sm:flex-row items-center gap-6"
        >
          <div className="flex items-center gap-5 flex-1">
            <div className="w-14 h-14 bg-[#f59e0b] rounded-xl flex items-center justify-center flex-shrink-0">
              <Calculator className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="text-white text-xl font-black mb-1">Get Instant Shipping Rates</h3>
              <p className="text-slate-400 text-sm">
                Compare rates from top couriers and find the best solution for your shipment.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center sm:items-end gap-1">
            <a
              href="#contact"
              className="inline-block bg-[#f59e0b] hover:bg-[#d97706] text-white font-bold px-7 py-3 rounded-lg transition-colors text-sm whitespace-nowrap shadow-lg shadow-[#f59e0b]/20"
            >
              Get Rate Quote Now
            </a>
            <span className="text-slate-500 text-xs">Fast • Easy • Accurate</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
