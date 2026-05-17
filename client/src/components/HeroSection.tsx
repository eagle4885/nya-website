/**
 * NYA HeroSection — NSA-style split layout
 * Text on left, image on right with established year badge
 * Space Grotesk for headings, Nunito for body
 */
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

const HERO_IMAGE = "/manus-storage/extracted_image_14_e52559b5.png";

export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="home"
      ref={ref}
      className="py-20 md:py-32 bg-white overflow-hidden"
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div>
            {/* Tagline */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-6 tracking-widest uppercase"
              style={{
                background: "oklch(0.75 0.16 75 / 0.15)",
                color: "oklch(0.75 0.16 75)",
                fontFamily: "'Space Grotesk', sans-serif",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
                transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "oklch(0.75 0.16 75)" }}
              />
              Established February 2025
            </div>

            {/* Headline */}
            <h1
              className="font-bold leading-tight mb-6"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                color: "oklch(0.12 0.005 285)",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transition: "opacity 0.6s ease-out 0.1s, transform 0.6s ease-out 0.1s",
                letterSpacing: "-0.02em",
              }}
            >
              Nandi Youth
              <br />
              <span style={{ color: "oklch(0.75 0.16 75)" }}>Assembly</span>
            </h1>

            {/* Subheading */}
            <p
              className="text-lg md:text-xl font-semibold mb-6 tracking-wide"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                color: "oklch(0.38 0.09 195)",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transition: "opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s",
              }}
            >
              Uniting Voices, Driving Impact.
            </p>

            {/* Description */}
            <p
              className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed max-w-lg"
              style={{
                fontFamily: "'Nunito', sans-serif",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transition: "opacity 0.6s ease-out 0.3s, transform 0.6s ease-out 0.3s",
              }}
            >
              A youth-centered, non-partisan platform uniting young people from across Nandi County for leadership, empowerment and collective action.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row items-start gap-4"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transition: "opacity 0.6s ease-out 0.4s, transform 0.6s ease-out 0.4s",
              }}
            >
              <button
                onClick={() => document.querySelector("#programs")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-3.5 rounded-lg font-bold text-base transition-all duration-200 hover:brightness-110 flex items-center gap-2"
                style={{
                  background: "oklch(0.38 0.09 195)",
                  color: "white",
                  fontFamily: "'Space Grotesk', sans-serif",
                  boxShadow: "0 4px 20px oklch(0.38 0.09 195 / 0.3)",
                }}
              >
                Explore Our Programs
                <ArrowRight size={18} />
              </button>
              <button
                onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-3.5 rounded-lg font-bold text-base transition-all duration-200"
                style={{
                  background: "transparent",
                  color: "oklch(0.38 0.09 195)",
                  border: "2px solid oklch(0.38 0.09 195)",
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLButtonElement).style.background = "oklch(0.38 0.09 195 / 0.1)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLButtonElement).style.background = "transparent";
                }}
              >
                Who We Are
              </button>
            </div>
          </div>

          {/* Right: Image with Badge */}
          <div
            className="relative"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(32px)",
              transition: "opacity 0.6s ease-out 0.3s, transform 0.6s ease-out 0.3s",
            }}
          >
            <img
              src={HERO_IMAGE}
              alt="Nandi Youth Assembly Team"
              className="w-full h-auto rounded-2xl shadow-2xl object-cover"
              style={{ aspectRatio: "4/3" }}
            />
            {/* Established Badge */}
            <div
              className="absolute bottom-6 right-6 bg-white rounded-2xl shadow-lg p-4 text-center"
              style={{ minWidth: "120px" }}
            >
              <div
                className="text-3xl font-bold"
                style={{ color: "oklch(0.75 0.16 75)", fontFamily: "'Space Grotesk', sans-serif" }}
              >
                2025
              </div>
              <div
                className="text-xs font-semibold text-gray-600 mt-1"
                style={{ fontFamily: "'Nunito', sans-serif" }}
              >
                Established
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
