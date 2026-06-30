"use client";

import { motion } from "framer-motion";
import { Target, TrendingUp, Trophy, ArrowRight } from "lucide-react";

const cards = [
  {
    icon: Target,
    title: "What We Do",
    description: "Having the right item, in the right quantity, at the right time and the right place.",
  },
  {
    icon: TrendingUp,
    title: "Why We Do It Better",
    description: "We manage the fruition of project life cycles and supply chains across all industries.",
  },
  {
    icon: Trophy,
    title: "How We Succeed",
    description: "Inventory management, purchasing, transportation and warehousing solutions, unified.",
  },
];

export default function FeatureCards() {
  return (
    <section className="py-14 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white border border-slate-200 rounded-xl p-7 hover:shadow-md hover:border-[#2563eb]/30 transition-all group"
            >
              <div className="w-10 h-10 bg-slate-100 group-hover:bg-[#2563eb]/10 rounded-lg flex items-center justify-center mb-5 transition-colors">
                <card.icon className="w-5 h-5 text-[#2563eb]" />
              </div>
              <h3 className="font-black text-slate-800 text-base mb-2">{card.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">{card.description}</p>
              <a href="#about" className="inline-flex items-center gap-1 text-[#2563eb] text-xs font-bold hover:gap-2 transition-all">
                Learn More <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
