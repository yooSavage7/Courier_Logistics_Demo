"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

// Red theme (shown as Version 1 by default)
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

// Gold theme (shown as Version 2)
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

export default function Home() {
  const [version, setVersion] = useState<1 | 2>(1);
  const topRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const switchToV2 = () => {
    setVersion(2);
    setTimeout(() => scrollToTop(), 50);
  };

  const switchToV1 = () => {
    setVersion(1);
    setTimeout(() => scrollToTop(), 50);
  };

  return (
    <div ref={topRef}>
      {version === 1 ? (
        <main>
          {/* Version 1 — Red / Navy theme */}
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
          {/* Version Switch */}
          <div className="bg-slate-100 py-12 flex flex-col items-center gap-3">
            <p className="text-sm text-slate-500 font-medium tracking-wider uppercase">
              Design Prototype Switcher
            </p>
            <motion.button
              onClick={switchToV2}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 bg-[#0f172a] text-white px-8 py-4 rounded-lg font-semibold text-base hover:bg-[#1e293b] transition-colors shadow-lg"
            >
              View Design Version 2
              <ChevronDown className="w-5 h-5" />
            </motion.button>
          </div>
        </main>
      ) : (
        <main>
          {/* Version 2 — Gold / Navy theme */}
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
          {/* Version Switch */}
          <div className="bg-slate-100 py-12 flex flex-col items-center gap-3">
            <p className="text-sm text-slate-500 font-medium tracking-wider uppercase">
              Design Prototype Switcher
            </p>
            <motion.button
              onClick={switchToV1}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 bg-[#dc2626] text-white px-8 py-4 rounded-lg font-semibold text-base hover:bg-[#b91c1c] transition-colors shadow-lg"
            >
              <ChevronUp className="w-5 h-5" />
              Back to Version 1
            </motion.button>
          </div>
        </main>
      )}
    </div>
  );
}
