/**
 * NYA AboutSection — Who We Are, Vision, Mission, Core Values
 * Asymmetric layout: text left, values grid right
 * Deep teal accents, amber highlights
 */
import { useEffect, useRef, useState } from "react";
import { Eye, Target, Zap, Users, Shield, Lightbulb, Award, Heart } from "lucide-react";

const values = [
  { icon: Shield, label: "Integrity", desc: "We uphold honesty and transparency in all our actions." },
  { icon: Users, label: "Inclusivity", desc: "Every voice matters — we embrace diversity and belonging." },
  { icon: Heart, label: "Team Work", desc: "Together we achieve more than any individual could alone." },
  { icon: Lightbulb, label: "Innovation", desc: "We seek creative solutions to the challenges facing youth." },
  { icon: Award, label: "Discipline", desc: "Commitment and consistency drive our collective progress." },
  { icon: Zap, label: "Accountability", desc: "We own our actions and deliver on our promises." },
];

function useInView(threshold = 0.15) {
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

export default function AboutSection() {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container" ref={ref}>
        {/* Section header */}
        <div className="mb-16 relative">
          <span
            className="section-number select-none pointer-events-none"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "8rem",
              fontWeight: 700,
              color: "oklch(0.38 0.09 195 / 0.06)",
              position: "absolute",
              top: "-2rem",
              left: "-0.5rem",
              lineHeight: 1,
            }}
          >
            01
          </span>
          <div className="relative">
            <div
              className="inline-flex items-center gap-2 mb-3 text-xs font-bold tracking-widest uppercase"
              style={{ color: "oklch(0.75 0.16 75)", fontFamily: "'Space Grotesk', sans-serif" }}
            >
              <span className="w-8 h-0.5" style={{ background: "oklch(0.75 0.16 75)" }} />
              Who We Are
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold leading-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.12 0.005 285)" }}
            >
              About Nandi Youth
              <br />
              <span style={{ color: "oklch(0.38 0.09 195)" }}>Assembly</span>
            </h2>
          </div>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left: Text */}
          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(-32px)",
              transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
            }}
          >
            <p
              className="text-lg leading-relaxed mb-6"
              style={{ fontFamily: "'Nunito', sans-serif", color: "oklch(0.35 0.01 285)" }}
            >
              The <strong>Nandi Youth Assembly (NYA)</strong> is a youth-centered, non-partisan platform that
              unites young people from across Nandi County for leadership, empowerment and collective action.
            </p>
            <p
              className="text-base leading-relaxed mb-6"
              style={{ fontFamily: "'Nunito', sans-serif", color: "oklch(0.45 0.01 285)" }}
            >
              NYA provides a structured space where youth can express their diverse voices, participate in
              governance, champion development agendas and drive positive change within their communities.
            </p>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ fontFamily: "'Nunito', sans-serif", color: "oklch(0.45 0.01 285)" }}
            >
              We are committed to inspiring, empowering and equipping young people to become innovative
              leaders, active citizens and key contributors to social, economic and cultural transformation.
            </p>

            {/* Info cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Established", value: "1st February, 2025" },
                { label: "Headquarters", value: "Kapsabet, Nandi County" },
                { label: "P.O. Box", value: "802-30300, Kapsabet" },
                { label: "Operation", value: "Nandi County, Kenya" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-4 rounded-xl"
                  style={{ background: "oklch(0.95 0.005 195)", border: "1px solid oklch(0.88 0.008 195)" }}
                >
                  <div
                    className="text-xs font-bold uppercase tracking-wider mb-1"
                    style={{ color: "oklch(0.38 0.09 195)", fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {item.label}
                  </div>
                  <div
                    className="text-sm font-semibold"
                    style={{ color: "oklch(0.20 0.005 285)", fontFamily: "'Nunito', sans-serif" }}
                  >
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Vision & Mission */}
          <div
            className="flex flex-col gap-6"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(32px)",
              transition: "opacity 0.7s ease-out 0.15s, transform 0.7s ease-out 0.15s",
            }}
          >
            {/* Vision */}
            <div
              className="p-8 rounded-2xl relative overflow-hidden"
              style={{ background: "oklch(0.38 0.09 195)" }}
            >
              <div
                className="absolute top-4 right-4 opacity-10"
                style={{ fontSize: "5rem", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "white", lineHeight: 1 }}
              >
                V
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: "oklch(0.75 0.16 75)" }}
                >
                  <Eye size={20} style={{ color: "oklch(0.12 0.005 285)" }} />
                </div>
                <h3
                  className="text-lg font-bold text-white"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Our Vision
                </h3>
              </div>
              <p
                className="text-white/90 text-base leading-relaxed"
                style={{ fontFamily: "'Nunito', sans-serif" }}
              >
                To be a global source to transform young people.
              </p>
            </div>

            {/* Mission */}
            <div
              className="p-8 rounded-2xl relative overflow-hidden"
              style={{ background: "oklch(0.75 0.16 75)" }}
            >
              <div
                className="absolute top-4 right-4 opacity-10"
                style={{ fontSize: "5rem", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "oklch(0.12 0.005 285)", lineHeight: 1 }}
              >
                M
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: "oklch(0.12 0.005 285)" }}
                >
                  <Target size={20} style={{ color: "oklch(0.75 0.16 75)" }} />
                </div>
                <h3
                  className="text-lg font-bold"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.12 0.005 285)" }}
                >
                  Our Mission
                </h3>
              </div>
              <p
                className="text-sm leading-relaxed"
                style={{ fontFamily: "'Nunito', sans-serif", color: "oklch(0.18 0.005 285)" }}
              >
                To advocate for support and inspire the youth through inclusive leadership, quality
                education, employment opportunities, mentorship, sports development and collective action.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <div className="text-center mb-12">
            <div
              className="inline-flex items-center gap-2 mb-3 text-xs font-bold tracking-widest uppercase"
              style={{ color: "oklch(0.75 0.16 75)", fontFamily: "'Space Grotesk', sans-serif" }}
            >
              <span className="w-8 h-0.5" style={{ background: "oklch(0.75 0.16 75)" }} />
              What We Stand For
              <span className="w-8 h-0.5" style={{ background: "oklch(0.75 0.16 75)" }} />
            </div>
            <h3
              className="text-3xl font-bold"
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.12 0.005 285)" }}
            >
              Core Values
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {values.map((val, i) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.label}
                  className="p-6 rounded-2xl card-hover"
                  style={{
                    background: "white",
                    border: "1px solid oklch(0.90 0.005 195)",
                    boxShadow: "0 2px 12px oklch(0.38 0.09 195 / 0.06)",
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateY(0)" : "translateY(20px)",
                    transition: `opacity 0.5s ease-out ${0.1 + i * 0.07}s, transform 0.5s ease-out ${0.1 + i * 0.07}s`,
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: "oklch(0.95 0.005 195)" }}
                  >
                    <Icon size={22} style={{ color: "oklch(0.38 0.09 195)" }} />
                  </div>
                  <h4
                    className="font-bold text-base mb-2"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.12 0.005 285)" }}
                  >
                    {val.label}
                  </h4>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: "'Nunito', sans-serif", color: "oklch(0.50 0.01 285)" }}
                  >
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
