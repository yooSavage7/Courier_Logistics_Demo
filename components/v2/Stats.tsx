"use client";

import { motion } from "framer-motion";
import { Award, Globe, Package, Headphones } from "lucide-react";
import AnimatedCounter from "@/components/shared/AnimatedCounter";

const stats = [
  { icon: Award, value: 20, suffix: "+", label: "Years Experience" },
  { icon: Globe, value: 150, suffix: "+", label: "Countries Covered" },
  { icon: Package, value: 50, suffix: "K+", label: "Shipments Delivered" },
  { icon: Headphones, value: 24, suffix: "/7", label: "Customer Support" },
];

export default function Stats() {
  return (
    <section className="bg-[#0f172a] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 rounded-full border-2 border-[#dc2626] flex items-center justify-center mb-4">
                <stat.icon className="w-6 h-6 text-[#dc2626]" />
              </div>
              <div className="text-4xl lg:text-5xl font-black text-white mb-2">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-slate-400 text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
