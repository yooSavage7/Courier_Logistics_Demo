"use client";

import { motion } from "framer-motion";
import { Target, TrendingUp, Trophy } from "lucide-react";

const cards = [
  {
    icon: Target,
    title: "What We Do",
    description: 'One definition of Classy Courier is "having the right item in the right quantity at the right time at the right place".',
  },
  {
    icon: TrendingUp,
    title: "Why We Do It Better",
    description: "Classy Courier incorporates all industry sectors and aims to manage the fruition of project life cycles and supply chains.",
  },
  {
    icon: Trophy,
    title: "How We Succeed",
    description: "The main functions of a qualified Classy Courier include inventory management, purchasing, transportation and warehousing.",
  },
];

export default function FeatureCards() {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-md transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#2563eb]" />
              <div className="w-9 h-9 bg-[#2563eb]/10 rounded-lg flex items-center justify-center mb-4">
                <card.icon className="w-4.5 h-4.5 text-[#2563eb]" />
              </div>
              <h3 className="font-black text-slate-800 text-base mb-2 text-[#2563eb]">{card.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
