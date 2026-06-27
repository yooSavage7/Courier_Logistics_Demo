"use client";

import { motion } from "framer-motion";
import { Calculator, ArrowRight } from "lucide-react";

export default function RateInquiryCTA() {
  return (
    <section id="rate-inquiry" className="py-6 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="bg-[#0f172a] rounded-2xl px-8 py-7 flex flex-col sm:flex-row items-center gap-6"
        >
          <div className="flex items-center gap-5 flex-1">
            <div className="w-14 h-14 bg-[#dc2626]/15 border border-[#dc2626]/30 rounded-xl flex items-center justify-center flex-shrink-0">
              <Calculator className="w-7 h-7 text-[#dc2626]" />
            </div>
            <div>
              <h3 className="text-white text-xl font-black mb-1">Get Instant Shipping Rates</h3>
              <p className="text-slate-400 text-sm">
                Compare rates from top couriers and find the best solution for your shipment.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold px-7 py-3 rounded-lg transition-colors text-sm whitespace-nowrap shadow-lg shadow-red-900/20"
          >
            Get Rate Quote Now
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
