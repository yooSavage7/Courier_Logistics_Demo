"use client";

import { motion } from "framer-motion";
import { CheckCircle, Users, Globe, Award } from "lucide-react";
import AnimatedCounter from "@/components/shared/AnimatedCounter";

const stats = [
  { icon: CheckCircle, value: 2000, suffix: "+", label: "COMPLETE PROJECTS" },
  { icon: Users, value: 55, suffix: "+", label: "BEST EMPLOYEES" },
  { icon: Globe, value: 60, suffix: "+", label: "INTERNATIONAL CLIENTS" },
  { icon: Award, value: 80, suffix: "+", label: "AWARDS" },
];

export default function Stats() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center text-xs font-black text-slate-600 uppercase tracking-widest mb-6"
        >
          What Our Clients Say
        </motion.h2>
        <div className="bg-[#2563eb] rounded-xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-blue-500">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex flex-col items-center py-8 px-4 text-center"
              >
                <stat.icon className="w-7 h-7 text-blue-200 mb-3" />
                <div className="text-3xl lg:text-4xl font-black text-white mb-1">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-blue-200 text-xs font-semibold tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
