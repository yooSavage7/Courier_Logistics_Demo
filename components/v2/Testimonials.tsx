"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ahmed Al-Rashidi",
    role: "Import Manager, Dubai Trade Co.",
    rating: 5,
    review:
      "Classy Group of Logistics has been our go-to partner for all shipments from Pakistan. Their reliability and professionalism are unmatched. Deliveries are always on time.",
    avatar: "AR",
  },
  {
    name: "Sarah Johnson",
    role: "Supply Chain Director, UK Retail Group",
    rating: 5,
    review:
      "Outstanding service from start to finish. The real-time tracking and dedicated support team make managing international freight completely stress-free.",
    avatar: "SJ",
  },
  {
    name: "Zhang Wei",
    role: "Operations Head, Guangzhou Exports",
    rating: 5,
    review:
      "We moved our entire freight operation to Classy Group and haven't looked back. Their global network and competitive pricing are simply the best in the industry.",
    avatar: "ZW",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-black text-[#0f172a] mb-4">What Our Clients Say</h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Trusted by businesses across the globe for reliable and efficient logistics solutions.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-[#dc2626] text-[#dc2626]" />
                ))}
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 italic">"{t.review}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#0f172a] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-[#dc2626] text-xs font-black">{t.avatar}</span>
                </div>
                <div>
                  <p className="font-bold text-[#0f172a] text-sm">{t.name}</p>
                  <p className="text-slate-400 text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
