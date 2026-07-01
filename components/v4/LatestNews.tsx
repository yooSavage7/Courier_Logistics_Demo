"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ImageIcon } from "lucide-react";

const news = [
  {
    date: "June 15, 2025",
    title: "Expanding Our Global Logistics Network Across New Territories",
  },
  {
    date: "May 28, 2025",
    title: "New Air Freight Corridors Now Open for Business",
  },
  {
    date: "May 10, 2025",
    title: "Classy Courier Achieves ISO 9001 Certification",
  },
];

export default function LatestNews() {
  return (
    <section style={{ backgroundColor: "#ffffff", padding: "60px 64px" }}>
      <style>{`
        @media (max-width: 640px) {
          .news-padding { padding: 60px 24px !important; }
          .news-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
      <div className="news-padding max-w-[1180px] mx-auto" style={{ padding: "0" }}>
        {/* Header row */}
        <div
          className="flex items-center justify-between"
          style={{ marginBottom: "40px" }}
        >
          <h2
            style={{
              fontFamily: "var(--font-jakarta)",
              fontSize: "32px",
              fontWeight: 800,
              color: "#12161d",
              letterSpacing: "-0.01em",
            }}
          >
            Latest News
          </h2>
          <Link
            href="#"
            className="hover:underline transition-colors"
            style={{
              fontSize: "13px",
              fontWeight: 700,
              color: "#3EA2EE",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            VIEW ALL NEWS →
          </Link>
        </div>

        {/* Cards grid */}
        <div
          className="news-grid grid"
          style={{ gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}
        >
          {news.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group transition-all"
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #e6e9ef",
                borderRadius: "14px",
                overflow: "hidden",
              }}
              whileHover={{
                y: -4,
                boxShadow: "0 16px 40px -16px rgba(20,40,80,0.22)",
              }}
            >
              {/* Image area */}
              <div
                className="flex items-center justify-center"
                style={{
                  height: "158px",
                  backgroundColor: "#e0f2fd",
                }}
              >
                <ImageIcon
                  style={{ width: "36px", height: "36px", color: "#5fa8f5" }}
                />
              </div>

              {/* Body */}
              <div style={{ padding: "20px" }}>
                <p
                  style={{
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "#3EA2EE",
                    marginBottom: "8px",
                  }}
                >
                  {item.date}
                </p>
                <h3
                  className="mb-4"
                  style={{
                    fontFamily: "var(--font-jakarta)",
                    fontSize: "17px",
                    fontWeight: 700,
                    color: "#12161d",
                    lineHeight: 1.35,
                  }}
                >
                  {item.title}
                </h3>
                <Link
                  href="#"
                  className="hover:underline transition-colors"
                  style={{
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "#3EA2EE",
                  }}
                >
                  READ MORE →
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
