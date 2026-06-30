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
    <section style={{ backgroundColor: "#ffffff", padding: "46px 64px" }}>
      <style>{`
        @media (max-width: 640px) {
          .feature-cards-padding { padding: 46px 24px !important; }
          .feature-cards-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
      <div
        className="feature-cards-padding max-w-[1180px] mx-auto"
        style={{ padding: "0" }}
      >
        <div
          className="feature-cards-grid grid"
          style={{ gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}
        >
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group transition-all"
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #e6e9ef",
                borderRadius: "16px",
                padding: "32px",
                boxShadow: "0 18px 44px -28px rgba(20,40,80,.40)",
                cursor: "default",
              }}
              whileHover={{
                y: -3,
                boxShadow: "0 18px 40px -22px rgba(20,80,180,.40)",
              }}
            >
              {/* Icon tile */}
              <div
                className="flex items-center justify-center rounded-xl mb-5"
                style={{
                  width: "48px",
                  height: "48px",
                  backgroundColor: "#e9f1fb",
                }}
              >
                <card.icon style={{ width: "22px", height: "22px", color: "#1668c5" }} />
              </div>
              {/* Title */}
              <h3
                className="mb-2"
                style={{
                  fontFamily: "var(--font-jakarta)",
                  fontSize: "17px",
                  fontWeight: 700,
                  color: "#12161d",
                  lineHeight: 1.3,
                }}
              >
                {card.title}
              </h3>
              {/* Caption */}
              <p
                style={{
                  fontSize: "14px",
                  color: "#5c6675",
                  lineHeight: 1.6,
                }}
              >
                {card.caption}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
