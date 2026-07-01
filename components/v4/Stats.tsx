"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "@/components/shared/AnimatedCounter";

const stats = [
  { value: 2000, suffix: "+", label: "Complete Projects" },
  { value: 55,   suffix: "+", label: "Best Employees" },
  { value: 60,   suffix: "+", label: "International Clients" },
  { value: 80,   suffix: "+", label: "Awards Won" },
];

export default function Stats() {
  return (
    <section
      style={{
        background: "linear-gradient(100deg, #3EA2EE, #3EA2EE)",
        padding: "48px 64px",
      }}
    >
      <style>{`
        @media (max-width: 640px) {
          .v4-stats-inner { padding: 48px 24px !important; }
        }
      `}</style>

      <div className="v4-stats-inner max-w-[1280px] mx-auto">
        {/* Heading block */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <p
            style={{
              fontSize: "12px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.16em",
              color: "rgba(255,255,255,0.60)",
              marginBottom: "10px",
            }}
          >
            WHAT OUR CLIENTS SAY
          </p>
          <h2
            style={{
              fontFamily: "var(--font-jakarta)",
              fontSize: "30px",
              fontWeight: 800,
              color: "#ffffff",
            }}
          >
            Our Achievements
          </h2>
        </motion.div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col items-center text-center"
              style={{
                padding: "0 32px",
                borderRight: i < stats.length - 1 ? "1px dashed rgba(255,255,255,0.30)" : "none",
              }}
            >
              <div
                style={{
                  fontSize: "42px",
                  fontWeight: 800,
                  color: "#ffffff",
                  lineHeight: 1.1,
                  marginBottom: "6px",
                }}
              >
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <p
                style={{
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.70)",
                }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
