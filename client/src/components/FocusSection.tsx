/**
 * NYA FocusSection — Key Areas of Focus / Thematic Matrix
 * Warm white background, teal/amber cards, budget table
 */
import { useEffect, useRef, useState } from "react";
import {
  AlertTriangle, Crown, GraduationCap, Leaf, Monitor,
  Brain, Handshake, ShieldAlert
} from "lucide-react";

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const focusAreas = [
  {
    icon: AlertTriangle,
    title: "Drug & Substance Abuse",
    desc: "Awareness walks, campaigns and partnerships with rehabilitation centers to build a sober community.",
    budget: "1,200,000",
    color: "oklch(0.55 0.18 30)",
    bg: "oklch(0.97 0.01 30)",
  },
  {
    icon: Crown,
    title: "Youth Leadership & Governance",
    desc: "Civic education forums, public participation and peace drives for better policies and service delivery.",
    budget: "1,500,000",
    color: "oklch(0.38 0.09 195)",
    bg: "oklch(0.95 0.005 195)",
  },
  {
    icon: GraduationCap,
    title: "Education & Innovation",
    desc: "Advocating for academic excellence and promoting welfare of youth in pursuit of educational goals.",
    budget: "—",
    color: "oklch(0.45 0.15 260)",
    bg: "oklch(0.96 0.005 260)",
  },
  {
    icon: Leaf,
    title: "Environmental / Climate Action",
    desc: "Tree growing, town clean-ups and attending environmental summits to increase tree cover and empower youth.",
    budget: "2,000,000",
    color: "oklch(0.45 0.15 145)",
    bg: "oklch(0.96 0.005 145)",
  },
  {
    icon: Monitor,
    title: "Digital Literacy",
    desc: "Skills training, advocacy for digital hubs and education on digital spaces to create monetized platforms.",
    budget: "1,000,000",
    color: "oklch(0.50 0.12 220)",
    bg: "oklch(0.96 0.005 220)",
  },
  {
    icon: Brain,
    title: "Mental Health & Wellness",
    desc: "Creating awareness, guidance and counseling, safe spaces and policies for mental health survivors.",
    budget: "1,000,000",
    color: "oklch(0.50 0.15 310)",
    bg: "oklch(0.96 0.005 310)",
  },
  {
    icon: Handshake,
    title: "Peace & Cohesion",
    desc: "Building bridges across communities through dialogue, civic education and collaborative peace initiatives.",
    budget: "—",
    color: "oklch(0.55 0.12 75)",
    bg: "oklch(0.97 0.01 75)",
  },
  {
    icon: ShieldAlert,
    title: "Gender Based Violence",
    desc: "Five days of activism in all constituencies, education forums to reduce GBV cases and promote gender equality.",
    budget: "800,000",
    color: "oklch(0.55 0.18 0)",
    bg: "oklch(0.97 0.01 0)",
  },
];

export default function FocusSection() {
  const { ref, inView } = useInView();

  return (
    <section
      id="focus"
      className="py-24 overflow-hidden"
      style={{ background: "oklch(0.97 0.003 95)" }}
      ref={ref}
    >
      <div className="container">
        {/* Header */}
        <div className="mb-14 relative">
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "8rem",
              fontWeight: 700,
              color: "oklch(0.38 0.09 195 / 0.06)",
              position: "absolute",
              top: "-2rem",
              left: "-0.5rem",
              lineHeight: 1,
              pointerEvents: "none",
              userSelect: "none",
            }}
          >
            03
          </span>
          <div className="relative">
            <div
              className="inline-flex items-center gap-2 mb-3 text-xs font-bold tracking-widest uppercase"
              style={{ color: "oklch(0.75 0.16 75)", fontFamily: "'Space Grotesk', sans-serif" }}
            >
              <span className="w-8 h-0.5" style={{ background: "oklch(0.75 0.16 75)" }} />
              Impact Areas
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold leading-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.12 0.005 285)" }}
            >
              Key Areas of
              <br />
              <span style={{ color: "oklch(0.38 0.09 195)" }}>Focus</span>
            </h2>
            <p
              className="mt-4 max-w-2xl text-base leading-relaxed"
              style={{ fontFamily: "'Nunito', sans-serif", color: "oklch(0.45 0.01 285)" }}
            >
              NYA addresses the most pressing challenges facing youth in Nandi County through
              eight high-impact thematic areas, each backed by strategic partnerships and dedicated budgets.
            </p>
          </div>
        </div>

        {/* Focus areas grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {focusAreas.map((area, i) => {
            const Icon = area.icon;
            return (
              <div
                key={area.title}
                className="p-6 rounded-2xl card-hover"
                style={{
                  background: "white",
                  border: `1px solid ${area.bg}`,
                  boxShadow: "0 2px 12px oklch(0.38 0.09 195 / 0.05)",
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(24px)",
                  transition: `opacity 0.5s ease-out ${i * 0.07}s, transform 0.5s ease-out ${i * 0.07}s`,
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: area.bg }}
                >
                  <Icon size={22} style={{ color: area.color }} />
                </div>
                <div
                  className="text-xs font-bold mb-1"
                  style={{ color: area.color, fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3
                  className="font-bold text-sm mb-2 leading-snug"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.12 0.005 285)" }}
                >
                  {area.title}
                </h3>
                <p
                  className="text-xs leading-relaxed mb-4"
                  style={{ fontFamily: "'Nunito', sans-serif", color: "oklch(0.50 0.01 285)" }}
                >
                  {area.desc}
                </p>
                {area.budget !== "—" && (
                  <div
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold"
                    style={{ background: area.bg, color: area.color, fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    KES {area.budget}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Financing Strategy */}
        <div
          className="rounded-2xl p-8 md:p-12 grid md:grid-cols-2 gap-10 items-center"
          style={{ background: "oklch(0.38 0.09 195)" }}
        >
          <div>
            <div
              className="inline-flex items-center gap-2 mb-3 text-xs font-bold tracking-widest uppercase"
              style={{ color: "oklch(0.88 0.12 75)", fontFamily: "'Space Grotesk', sans-serif" }}
            >
              <span className="w-8 h-0.5" style={{ background: "oklch(0.88 0.12 75)" }} />
              Sustainability
            </div>
            <h3
              className="text-2xl md:text-3xl font-bold text-white mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Financing Strategy
            </h3>
            <p
              className="text-white/80 text-base leading-relaxed"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              NYA sustains its operations and programs through a diversified financing model that
              ensures long-term viability and independence.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Membership Subscription", desc: "Regular contributions from registered members" },
              { label: "Partnerships", desc: "Strategic alliances with NGOs, government and private sector" },
              { label: "Fundraising", desc: "Community events and targeted fundraising campaigns" },
              { label: "ICT Hubs", desc: "Revenue from digital literacy programs and hubs" },
            ].map((item) => (
              <div
                key={item.label}
                className="p-4 rounded-xl"
                style={{ background: "oklch(0.30 0.08 195)", border: "1px solid oklch(0.45 0.09 195)" }}
              >
                <div
                  className="text-xs font-bold text-white mb-1"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {item.label}
                </div>
                <div
                  className="text-xs leading-relaxed"
                  style={{ fontFamily: "'Nunito', sans-serif", color: "oklch(0.78 0.03 195)" }}
                >
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
