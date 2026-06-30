"use client";

import { motion } from "framer-motion";

export default function WhoWeAre() {
  return (
    <section
      id="about"
      className="bg-white"
      style={{ padding: "56px 64px" }}
    >
      <style>{`
        @media (max-width: 640px) {
          .v4-whoweare-inner { padding: 56px 24px !important; }
        }
      `}</style>

      <div className="v4-whoweare-inner" style={{ padding: "0" }}>
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-[1280px] mx-auto">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            {/* Eyebrow */}
            <p
              style={{
                fontSize: "12px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.16em",
                color: "#1668c5",
                marginBottom: "14px",
              }}
            >
              WHO WE ARE
            </p>

            {/* Heading */}
            <h2
              style={{
                fontFamily: "var(--font-jakarta)",
                fontSize: "32px",
                fontWeight: 800,
                color: "#12161d",
                marginBottom: "8px",
              }}
            >
              Classy Group of Logistics
            </h2>

            {/* Underline bar */}
            <div
              style={{
                width: "46px",
                height: "3px",
                backgroundColor: "#1668c5",
                borderRadius: "2px",
                marginBottom: "20px",
              }}
            />

            {/* Body paragraphs */}
            <p
              className="leading-relaxed mb-4"
              style={{ fontSize: "15px", color: "#5c6675" }}
            >
              Classy Courier management is the part of supply chain management that plans, implements and controls the efficient, effective forward and reverse flow and storage of goods, services and related information between the point of origin and the point of consumption in order to meet customers&apos; requirements.
            </p>
            <p
              className="leading-relaxed mb-8"
              style={{ fontSize: "15px", color: "#5c6675" }}
            >
              The complexity of Classy Courier can be modeled, analyzed, visualized and optimized by dedicated simulation software. The minimization of the use of resources is a common motivation in all logistics fields. A professional approach ensures every shipment reaches its destination safely and on time.
            </p>

            {/* Learn More button */}
            <button
              className="font-bold transition-all"
              style={{
                border: "2px solid #12161d",
                color: "#12161d",
                backgroundColor: "transparent",
                fontSize: "14px",
                borderRadius: "8px",
                padding: "12px 28px",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#12161d";
                (e.currentTarget as HTMLButtonElement).style.color = "#ffffff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent";
                (e.currentTarget as HTMLButtonElement).style.color = "#12161d";
              }}
            >
              Learn More About Us →
            </button>
          </motion.div>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ aspectRatio: "4/3" }}>
              <img
                src="/about-banner.png"
                alt="Classy Group of Logistics"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative accent blocks */}
            <div
              className="absolute rounded-2xl -z-10"
              style={{
                width: "96px",
                height: "96px",
                backgroundColor: "#1668c5",
                bottom: "-16px",
                left: "-16px",
              }}
            />
            <div
              className="absolute rounded-xl -z-10"
              style={{
                width: "64px",
                height: "64px",
                backgroundColor: "rgba(14,17,23,0.10)",
                top: "-16px",
                right: "-16px",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
