"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from "lucide-react";

// ── Version 1: New Blue/Navy (v3 components) ──────────────────────────────────
import V3Navbar from "@/components/v3/Navbar";
import V3Hero from "@/components/v3/Hero";
import V3AboutUs from "@/components/v3/AboutUs";
import V3FeatureCards from "@/components/v3/FeatureCards";
import V3CoreCapabilities from "@/components/v3/CoreCapabilities";
import V3Stats from "@/components/v3/Stats";
import V3LatestNews from "@/components/v3/LatestNews";
import V3QuoteCTA from "@/components/v3/QuoteCTA";
import V3OfficeLocations from "@/components/v3/OfficeLocations";
import V3Footer from "@/components/v3/Footer";

// ── Version 2: New Blue/Navy Alt (v4 components) ──────────────────────────────
import V4Navbar from "@/components/v3/Navbar";
import V4Hero from "@/components/v4/Hero";
import V4WhoWeAre from "@/components/v4/WhoWeAre";
import V4FeatureCards from "@/components/v4/FeatureCards";
import V4QuoteCTA from "@/components/v4/QuoteCTA";
import V4CoreCapabilities from "@/components/v4/CoreCapabilities";
import V4LatestNews from "@/components/v3/LatestNews";
import V4Stats from "@/components/v4/Stats";
import V4OfficeLocations from "@/components/v3/OfficeLocations";
import V4Footer from "@/components/v3/Footer";

// ── Version 3: Red/Navy (previously Version 1) ────────────────────────────────
import RedNavbar from "@/components/v2/Navbar";
import RedHero from "@/components/v2/Hero";
import RedTrackingSection from "@/components/v2/TrackingSection";
import RedRateInquiryCTA from "@/components/v2/RateInquiryCTA";
import RedAbout from "@/components/v2/About";
import RedServices from "@/components/v2/Services";
import RedWhyChooseUs from "@/components/v2/WhyChooseUs";
import RedStats from "@/components/v2/Stats";
import RedTestimonials from "@/components/v2/Testimonials";
import RedCallToAction from "@/components/v2/CallToAction";
import RedFooter from "@/components/v2/Footer";

// ── Version 4: Gold/Navy (previously Version 2) ───────────────────────────────
import GoldNavbar from "@/components/v1/Navbar";
import GoldHero from "@/components/v1/Hero";
import GoldTrackingSection from "@/components/v1/TrackingSection";
import GoldRateInquiryCTA from "@/components/v1/RateInquiryCTA";
import GoldAbout from "@/components/v1/About";
import GoldServices from "@/components/v1/Services";
import GoldWhyChooseUs from "@/components/v1/WhyChooseUs";
import GoldStats from "@/components/v1/Stats";
import GoldTestimonials from "@/components/v1/Testimonials";
import GoldCallToAction from "@/components/v1/CallToAction";
import GoldFooter from "@/components/v1/Footer";

type Version = 1 | 2 | 3 | 4;

const versionMeta: Record<Version, { label: string; accent: string; bg: string }> = {
  1: { label: "Version 1 — Blue/Navy (Classic)", accent: "#2563eb", bg: "#1d4ed8" },
  2: { label: "Version 2 — Blue/Navy (Compact)", accent: "#2563eb", bg: "#1d4ed8" },
  3: { label: "Version 3 — Red/Navy", accent: "#dc2626", bg: "#b91c1c" },
  4: { label: "Version 4 — Gold/Navy", accent: "#f59e0b", bg: "#d97706" },
};

function VersionSwitcher({ current, onSwitch }: { current: Version; onSwitch: (v: Version) => void }) {
  const next = current < 4 ? ((current + 1) as Version) : null;
  const prev = current > 1 ? ((current - 1) as Version) : null;
  const meta = versionMeta[current];

  return (
    <div className="bg-slate-100 py-12">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Design Prototype Switcher</p>
        <p className="text-sm font-semibold text-slate-600 mb-6">{meta.label}</p>
        <div className="flex flex-wrap gap-3 justify-center">
          {prev && (
            <motion.button
              onClick={() => onSwitch(prev)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-colors shadow-md"
            >
              <ChevronLeft className="w-4 h-4" />
              Version {prev}
            </motion.button>
          )}
          {next && (
            <motion.button
              onClick={() => onSwitch(next)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{ backgroundColor: versionMeta[next].bg }}
              className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-opacity hover:opacity-90 shadow-md"
            >
              View Version {next}
              <ChevronRight className="w-4 h-4" />
            </motion.button>
          )}
          {!next && (
            <motion.button
              onClick={() => onSwitch(1)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-6 py-3 rounded-lg font-semibold text-sm transition-colors shadow-md"
            >
              <ChevronUp className="w-4 h-4" />
              Back to Version 1
            </motion.button>
          )}
        </div>
        {/* Quick jump dots */}
        <div className="flex justify-center gap-2 mt-5">
          {([1, 2, 3, 4] as Version[]).map((v) => (
            <button
              key={v}
              onClick={() => onSwitch(v)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${current === v ? "scale-125" : "opacity-40 hover:opacity-70"}`}
              style={{ backgroundColor: current === v ? versionMeta[v].accent : "#94a3b8" }}
              aria-label={`Switch to version ${v}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [version, setVersion] = useState<Version>(1);
  const topRef = useRef<HTMLDivElement>(null);

  const handleSwitch = (v: Version) => {
    setVersion(v);
    setTimeout(() => topRef.current?.scrollIntoView({ behavior: "smooth" }), 50);
  };

  return (
    <div ref={topRef}>
      {version === 1 && (
        <main>
          <V3Navbar />
          <V3Hero />
          <V3AboutUs />
          <V3FeatureCards />
          <V3CoreCapabilities />
          <V3Stats />
          <V3LatestNews />
          <V3QuoteCTA />
          <V3OfficeLocations />
          <V3Footer />
          <VersionSwitcher current={1} onSwitch={handleSwitch} />
        </main>
      )}

      {version === 2 && (
        <main>
          <V4Navbar />
          <V4Hero />
          <V4WhoWeAre />
          <V4FeatureCards />
          <V4QuoteCTA />
          <V4CoreCapabilities />
          <V4LatestNews />
          <V4Stats />
          <V4OfficeLocations />
          <V4Footer />
          <VersionSwitcher current={2} onSwitch={handleSwitch} />
        </main>
      )}

      {version === 3 && (
        <main>
          <RedNavbar />
          <RedHero />
          <RedTrackingSection />
          <RedRateInquiryCTA />
          <RedAbout />
          <RedServices />
          <RedWhyChooseUs />
          <RedStats />
          <RedTestimonials />
          <RedCallToAction />
          <RedFooter />
          <VersionSwitcher current={3} onSwitch={handleSwitch} />
        </main>
      )}

      {version === 4 && (
        <main>
          <GoldNavbar />
          <GoldHero />
          <GoldTrackingSection />
          <GoldRateInquiryCTA />
          <GoldAbout />
          <GoldServices />
          <GoldWhyChooseUs />
          <GoldStats />
          <GoldTestimonials />
          <GoldCallToAction />
          <GoldFooter />
          <VersionSwitcher current={4} onSwitch={handleSwitch} />
        </main>
      )}
    </div>
  );
}
