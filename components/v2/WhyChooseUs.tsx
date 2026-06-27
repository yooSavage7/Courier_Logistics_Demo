"use client";

import { motion } from "framer-motion";
import { Globe, Zap, Shield, Headphones, Award, Clock } from "lucide-react";

const reasons = [
  {
    icon: Globe,
    title: "Global Network",
    description: "Operations spanning 150+ countries with trusted local partners.",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Express delivery options to meet your tightest deadlines.",
  },
  {
    icon: Shield,
    title: "Secure Handling",
    description: "End-to-end security protocols ensuring your cargo arrives safely.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock customer support whenever you need us.",
  },
  {
    icon: Award,
    title: "Experienced Team",
    description: "20+ years of logistics expertise across all sectors.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "99% on-time delivery rate backed by real-time tracking.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-black text-[#0f172a] mb-4">Why Choose Us</h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            We combine technology, expertise and a global network to deliver exceptional logistics solutions.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-start gap-4 p-6 rounded-xl bg-slate-50 hover:bg-[#b91c1c]/5 border border-transparent hover:border-[#dc2626]/15 transition-all group"
            >
              <div className="w-11 h-11 bg-[#0f172a] group-hover:bg-[#b91c1c] rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                <reason.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-black text-[#0f172a] mb-1 text-base">{reason.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
