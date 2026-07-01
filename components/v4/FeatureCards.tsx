"use client";

import { motion } from "framer-motion";
import { Package, Globe, Award } from "lucide-react";

const cards = [
  {
    icon: Package,
    title: "What We Do",
    caption:
      "We manage end-to-end courier and cargo logistics solutions, ensuring the right item reaches the right place at the right time.",
  },
  {
    icon: Globe,
    title: "Why We Do It Better",
    caption:
      "Our global network, experienced team and cutting-edge technology allow us to outperform competitors on speed, reliability and cost.",
  },
  {
    icon: Award,
    title: "How We Succeed",
    caption:
      "Through innovation, continuous improvement and a relentless focus on customer satisfaction across every shipment we handle.",
  },
];

export default function FeatureCards() {
  return (
    <section style={{ backgroundColor: "#ffffff", padding: "56px 64px" }}>
      <style>{`
        @media (max-width: 640px) {
          .v4-feature-inner { padding: 56px 24px !important; }
        }
      `}</style>

      <div className="v4-feature-inner max-w-[1280px] mx-auto">
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative overflow-hidden"
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #e6e9ef",
                borderRadius: "16px",
                padding: "28px 24px",
                borderTop: "4px solid #3EA2EE",
              }}
            >
              {/* Icon tile */}
              <div
                className="flex items-center justify-center mb-4"
                style={{
                  width: "48px",
                  height: "48px",
                  backgroundColor: "#e0f2fd",
                  borderRadius: "12px",
                }}
              >
                <card.icon style={{ width: "20px", height: "20px", color: "#3EA2EE" }} />
              </div>

              {/* Card title */}
              <h3
                className="mb-2"
                style={{ fontSize: "17px", fontWeight: 700, color: "#3EA2EE" }}
              >
                {card.title}
              </h3>

              {/* Caption */}
              <p style={{ fontSize: "14px", color: "#5c6675", lineHeight: 1.6 }}>
                {card.caption}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
