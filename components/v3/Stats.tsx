"use client";

import { motion } from "framer-motion";
import { Trophy, Users, Globe, Star } from "lucide-react";
import AnimatedCounter from "@/components/shared/AnimatedCounter";

const stats = [
  { icon: Trophy, value: 2000, suffix: "+", label: "Complete Projects" },
  { icon: Users, value: 55, suffix: "+", label: "Best Employees" },
  { icon: Globe, value: 60, suffix: "+", label: "International Clients" },
  { icon: Star, value: 80, suffix: "+", label: "Awards Won" },
];

export default function Stats() {
  return (
    <section style={{ backgroundColor: "#ffffff", padding: "56px 64px 56px" }}>
      <style>{`
        @media (max-width: 640px) {
          .stats-outer-padding { padding: 56px 24px 56px !important; }
          .stats-inner-padding { padding: 40px 24px !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
      <div className="stats-outer-padding max-w-[1180px] mx-auto" style={{ padding: "0" }}>
        {/* Section header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <p
            style={{
              fontSize: "12px",
              fontWeight: 700,
              color: "#1668c5",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              marginBottom: "10px",
            }}
          >
            BY THE NUMBERS
          </p>
          <h2
            style={{
              fontFamily: "var(--font-jakarta)",
              fontSize: "36px",
              fontWeight: 800,
              color: "#12161d",
              letterSpacing: "-0.01em",
            }}
          >
            What Our Clients Say
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="stats-inner-padding"
          style={{
            borderRadius: "20px",
            background: "linear-gradient(100deg, #1668c5, #2f86db)",
            padding: "48px 64px",
          }}
        >
          <div
            className="stats-grid grid"
            style={{ gridTemplateColumns: "repeat(4, 1fr)" }}
          >
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="flex flex-col items-center text-center"
                style={{
                  padding: "0 24px",
                  borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.20)" : "none",
                }}
              >
                {/* Icon circle */}
                <div
                  className="flex items-center justify-center rounded-full mb-4"
                  style={{
                    width: "52px",
                    height: "52px",
                    backgroundColor: "rgba(255,255,255,0.20)",
                  }}
                >
                  <stat.icon style={{ width: "28px", height: "28px", color: "#ffffff" }} />
                </div>
                {/* Number */}
                <div
                  className="mb-1"
                  style={{ fontSize: "42px", fontWeight: 800, color: "#ffffff", lineHeight: 1.1 }}
                >
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                {/* Label */}
                <p
                  style={{
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "rgba(255,255,255,0.70)",
                    lineHeight: 1.4,
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
