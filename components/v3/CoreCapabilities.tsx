"use client";

import { motion } from "framer-motion";
import { Wrench, Package2, Truck, Users, Wifi, HeadphonesIcon } from "lucide-react";

const leftItems = [
  { icon: Wrench, title: "Maintenance", desc: "Internal & external focus (outbound)." },
  { icon: Package2, title: "Supply", desc: "A set of products with common characteristics." },
  { icon: Truck, title: "Transportation", desc: "Cargo moved through various means in different shipments." },
];

const rightItems = [
  { icon: Users, title: "Training", desc: "Order processing with a withdrawal list." },
  { icon: Wifi, title: "Information Technology", desc: "Unit loads are moved by handling systems." },
  { icon: HeadphonesIcon, title: "Operations Support", desc: "Distribution concerns the problem of location." },
];

export default function CoreCapabilities() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-[#2563eb] text-xs font-bold uppercase tracking-widest mb-2">What We Offer</p>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-800">Core Capabilities</h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Left items */}
          <div className="space-y-7">
            {leftItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-3 text-right flex-row-reverse"
              >
                <div className="w-9 h-9 bg-[#2563eb]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-4 h-4 text-[#2563eb]" />
                </div>
                <div>
                  <h4 className="font-black text-slate-800 text-sm mb-1">{item.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center circular image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex justify-center"
          >
            <div className="w-52 h-52 rounded-full overflow-hidden border-4 border-[#2563eb]/20 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=400&q=80"
                alt="Warehouse operations"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right items */}
          <div className="space-y-7">
            {rightItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="w-9 h-9 bg-[#2563eb]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-4 h-4 text-[#2563eb]" />
                </div>
                <div>
                  <h4 className="font-black text-slate-800 text-sm mb-1">{item.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
