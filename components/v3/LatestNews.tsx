"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const news = [
  {
    date: "May 15, 2024",
    title: "Expanding Our Global Logistics Network",
    color: "bg-slate-200",
  },
  {
    date: "Apr 03, 2024",
    title: "New Warehousing Facility Now Operational",
    color: "bg-slate-300",
  },
  {
    date: "Apr 01, 2024",
    title: "Partnering With Leading Courier Brands",
    color: "bg-slate-200",
  },
];

export default function LatestNews() {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-[#2563eb] text-xs font-bold uppercase tracking-widest mb-1">Updates</p>
            <h2 className="text-2xl font-black text-slate-800">Our Latest News</h2>
          </div>
          <a href="#" className="text-[#2563eb] text-xs font-bold uppercase tracking-wide hover:underline inline-flex items-center gap-1">
            View All News <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {news.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow group"
            >
              {/* Image placeholder */}
              <div className={`${item.color} h-44 flex items-center justify-center`}>
                <span className="text-slate-400 text-xs font-medium">[ news image ]</span>
              </div>
              <div className="p-5">
                <p className="text-[#2563eb] text-xs font-bold mb-2">{item.date}</p>
                <h3 className="font-black text-slate-800 text-sm mb-3 leading-snug">{item.title}</h3>
                <a href="#" className="inline-flex items-center gap-1 text-[#2563eb] text-xs font-bold hover:gap-2 transition-all">
                  Read More <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
