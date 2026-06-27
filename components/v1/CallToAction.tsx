"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CallToAction() {
  return (
    <section id="contact" className="py-20 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6">
            Ready to Ship with Confidence?
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
            Join thousands of businesses who trust Classy Group of Logistics for their global shipping needs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#tracking"
              className="inline-flex items-center gap-2 bg-[#f59e0b] hover:bg-[#d97706] text-white font-bold px-8 py-4 rounded-lg transition-colors text-base shadow-lg shadow-[#f59e0b]/20"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-bold px-8 py-4 rounded-lg hover:border-white/60 hover:bg-white/5 transition-all text-base"
            >
              Learn More
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
