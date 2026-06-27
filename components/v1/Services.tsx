"use client";

import { motion } from "framer-motion";
import { Package, Plane, Ship, Warehouse, Truck, Globe } from "lucide-react";

const services = [
  {
    icon: Package,
    title: "International Courier",
    description: "Fast and reliable door-to-door delivery worldwide.",
  },
  {
    icon: Truck,
    title: "Freight Forwarding",
    description: "Air, sea and land freight solutions tailored to your needs.",
  },
  {
    icon: Globe,
    title: "Cargo Services",
    description: "Secure handling of your cargo with competitive rates.",
  },
  {
    icon: Warehouse,
    title: "Warehousing",
    description: "Safe and secure storage solutions for your goods.",
  },
  {
    icon: Plane,
    title: "Air Freight",
    description: "Express air cargo solutions for time-sensitive shipments.",
  },
  {
    icon: Ship,
    title: "Sea Freight",
    description: "Cost-effective ocean freight for large volume shipments.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-black text-[#0f172a]">Our Services</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {services.slice(0, 4).map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-7 border border-slate-100 hover:border-[#f59e0b]/30 hover:shadow-lg transition-all cursor-default group"
            >
              <div className="w-12 h-12 bg-slate-50 group-hover:bg-[#f59e0b]/10 rounded-xl flex items-center justify-center mb-5 transition-colors">
                <service.icon className="w-6 h-6 text-[#0f172a] group-hover:text-[#f59e0b] transition-colors" />
              </div>
              <h3 className="font-black text-[#0f172a] mb-2 text-base">{service.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-10">
          {services.slice(4).map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: (i + 4) * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-7 border border-slate-100 hover:border-[#f59e0b]/30 hover:shadow-lg transition-all cursor-default group"
            >
              <div className="w-12 h-12 bg-slate-50 group-hover:bg-[#f59e0b]/10 rounded-xl flex items-center justify-center mb-5 transition-colors">
                <service.icon className="w-6 h-6 text-[#0f172a] group-hover:text-[#f59e0b] transition-colors" />
              </div>
              <h3 className="font-black text-[#0f172a] mb-2 text-base">{service.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a href="#contact" className="text-[#0f172a] font-semibold text-sm hover:text-[#f59e0b] transition-colors">
            View All Services →
          </a>
        </div>
      </div>
    </section>
  );
}
