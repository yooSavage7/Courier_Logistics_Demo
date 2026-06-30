"use client";

import { motion } from "framer-motion";
import { Truck, Shield, Clock } from "lucide-react";

const cards = [
  {
    icon: Truck,
    title: "Air & Sea Freight",
    caption: "International freight forwarding by air and sea with competitive rates.",
  },
  {
    icon: Shield,
    title: "Secure Handling",
    caption: "Full customs clearance, insurance, and secure packaging for all shipments.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    caption: "Guaranteed delivery windows with real-time tracking updates.",
  },
];

export default function FeatureCards() {
  return (
    <section style={{ backgroundColor: "#f3f5f8", padding: "56px 64px" }}>
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
                borderTop: "4px solid #1668c5",
              }}
            >
              {/* Icon tile */}
              <div
                className="flex items-center justify-center mb-4"
                style={{
                  width: "48px",
                  height: "48px",
                  backgroundColor: "#e9f1fb",
                  borderRadius: "12px",
                }}
              >
                <card.icon style={{ width: "20px", height: "20px", color: "#1668c5" }} />
              </div>

              {/* Card title */}
              <h3
                className="mb-2"
                style={{ fontSize: "17px", fontWeight: 700, color: "#1668c5" }}
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
