"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";

const offices = [
  {
    flag: "🇬🇧",
    name: "UK Head Office",
    address: "Freeland Park, Wareham Road,\nUnited Kingdom",
    phone: "+44 125 468 7600",
  },
  {
    flag: "🇵🇰",
    name: "Sialkot Sub Office",
    address: "Abbott Road,\nSialkot — Pakistan",
    phone: "+92 52 2350000",
  },
  {
    flag: "🇦🇪",
    name: "UAE Sub Office",
    address: "Sharjah,\nUnited Arab Emirates",
    phone: "+971 6 123 4567",
  },
  {
    flag: "🇦🇪",
    name: "UAE Sub Office",
    address: "Al Ain,\nUnited Arab Emirates",
    phone: "+971 3 736 4521",
  },
];

export default function OfficeLocations() {
  return (
    <section className="py-14 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <p className="text-[#2563eb] text-xs font-bold uppercase tracking-widest mb-1">Global Presence</p>
          <h2 className="text-2xl font-black text-slate-800">Our Office Locations</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {offices.map((office, i) => (
            <motion.div
              key={`${office.name}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-md hover:border-[#2563eb]/30 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{office.flag}</span>
                <h4 className="font-black text-slate-800 text-sm">{office.name}</h4>
              </div>
              <p className="text-slate-500 text-xs leading-relaxed mb-3 whitespace-pre-line">{office.address}</p>
              <div className="flex items-center gap-2 text-[#2563eb] text-xs font-medium">
                <Phone className="w-3 h-3 flex-shrink-0" />
                <span>{office.phone}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
