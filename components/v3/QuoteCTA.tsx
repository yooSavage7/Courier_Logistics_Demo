"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function QuoteCTA() {
  return (
    <section className="py-4 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 gap-0 rounded-xl overflow-hidden shadow-lg">
          {/* Left - dark */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="bg-[#0f172a] p-8 lg:p-10 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-cover bg-center opacity-10"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80')` }}
              aria-hidden="true"
            />
            <div className="relative">
              <p className="text-[#2563eb] text-xs font-bold uppercase tracking-widest mb-3">Pricing</p>
              <h3 className="text-white text-2xl font-black mb-3">Request a Free Quote</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Tell us what you need to move — weight, volume, handling and destination — and we'll prepare a competitive rate tailored to your shipment.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold px-5 py-2.5 rounded-md text-sm transition-colors"
              >
                GET QUOTES <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right - blue */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-[#2563eb] p-8 lg:p-10"
          >
            <p className="text-blue-200 text-xs font-bold uppercase tracking-widest mb-3">Logistics</p>
            <h3 className="text-white text-2xl font-black mb-3">Track Your Shipments</h3>
            <p className="text-blue-100 text-sm leading-relaxed mb-6">
              Operators involved in transportation include all train, road vehicles, boats, airplane companies, couriers, freight forwarders and multi-modal operators — even for very long-distance transport.
            </p>
            <Link
              href="/track"
              className="inline-flex items-center gap-2 border-2 border-white text-white font-bold px-5 py-2.5 rounded-md text-sm hover:bg-white/10 transition-colors"
            >
              TRACK SHIPMENTS <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
