/**
 * NYA HeroSection — Full-bleed cinematic hero with overlay
 * Dark overlay on hero image, bold white headline, amber CTA
 * Space Grotesk for headings, Nunito for body
 */
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const HERO_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663663725732/Wdk2VuHBktKtP2QqV63FoA/nya-hero-hixMvbxKRpDy6uRGsKDZHf.webp";

export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      />
      {/* Gradient overlay — dark teal */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, oklch(0.12 0.06 195 / 0.75) 0%, oklch(0.18 0.08 195 / 0.85) 60%, oklch(0.12 0.06 195 / 0.95) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container text-center text-white px-4">
        {/* Tagline badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 tracking-widest uppercase"
          style={{
            background: "oklch(0.75 0.16 75 / 0.2)",
            border: "1px solid oklch(0.75 0.16 75 / 0.5)",
            color: "oklch(0.88 0.12 75)",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
            fontFamily: "'Space Grotesk', sans-serif",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: "oklch(0.75 0.16 75)" }}
          />
          Established February 2025 · Nandi County, Kenya
        </div>

        {/* Main headline */}
        <h1
          className="font-bold leading-tight mb-4"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s ease-out 0.1s, transform 0.6s ease-out 0.1s",
          }}
        >
          Nandi Youth
          <br />
          <span style={{ color: "oklch(0.88 0.12 75)" }}>Assembly</span>
        </h1>

        {/* Tagline */}
        <p
          className="text-xl md:text-2xl font-semibold mb-4 tracking-wide"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            color: "oklch(0.88 0.12 75)",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s",
          }}
        >
          Uniting Voices, Driving Impact.
        </p>

        {/* Description */}
        <p
          className="max-w-2xl mx-auto text-base md:text-lg text-white/80 mb-10 leading-relaxed"
          style={{
            fontFamily: "'Nunito', sans-serif",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s ease-out 0.3s, transform 0.6s ease-out 0.3s",
          }}
        >
          A youth-centered, non-partisan platform uniting young people from across
          Nandi County for leadership, empowerment and collective action.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s ease-out 0.4s, transform 0.6s ease-out 0.4s",
          }}
        >
          <button
            onClick={() => document.querySelector("#programs")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3.5 rounded-lg font-bold text-base btn-scale transition-all duration-200 hover:brightness-110"
            style={{
              background: "oklch(0.75 0.16 75)",
              color: "oklch(0.12 0.005 285)",
              fontFamily: "'Space Grotesk', sans-serif",
              boxShadow: "0 4px 20px oklch(0.75 0.16 75 / 0.4)",
            }}
          >
            Explore Our Programs
          </button>
          <button
            onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3.5 rounded-lg font-bold text-base btn-scale transition-all duration-200"
            style={{
              background: "transparent",
              color: "white",
              border: "2px solid rgba(255,255,255,0.5)",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLButtonElement).style.background = "rgba(255,255,255,0.1)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLButtonElement).style.background = "transparent";
            }}
          >
            Who We Are
          </button>
        </div>

        {/* Stats row */}
        <div
          className="mt-16 grid grid-cols-3 gap-4 max-w-lg mx-auto"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.6s ease-out 0.6s",
          }}
        >
          {[
            { number: "2025", label: "Founded" },
            { number: "8+", label: "Focus Areas" },
            { number: "60+", label: "Schools Target" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-2xl md:text-3xl font-bold"
                style={{ color: "oklch(0.88 0.12 75)", fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {stat.number}
              </div>
              <div
                className="text-xs text-white/60 mt-0.5"
                style={{ fontFamily: "'Nunito', sans-serif" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
}
