/**
 * NYA ProgramsSection — Objectives + Working Committees
 * Teal background for objectives, white for committees
 * Bold numbered cards with amber accents
 */
import { useEffect, useRef, useState } from "react";
import {
  GraduationCap, Network, BookOpen, Megaphone, Users, Briefcase,
  Scale, Cpu, TrendingUp
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

const objectives = [
  {
    icon: GraduationCap,
    title: "Leadership Development",
    desc: "Equip young leaders with skills in governance, decision making and advocacy.",
  },
  {
    icon: Network,
    title: "Networking & Collaboration",
    desc: "Create platforms for young people to connect, share ideas and build partnerships for skill development and employment opportunities.",
  },
  {
    icon: BookOpen,
    title: "Academic Excellence",
    desc: "Advocating for problems facing young people in pursuit of educational goals and promoting their welfare.",
  },
  {
    icon: Megaphone,
    title: "Policy Influence & Representation",
    desc: "Ensure young people have a voice in county policy making.",
  },
  {
    icon: Users,
    title: "Community Engagement",
    desc: "Drive impactful projects and mentorships that address local challenges and contribute to sustainable development.",
  },
];

const committees = [
  { icon: TrendingUp, name: "Finance & Resource Mobilization" },
  { icon: BookOpen, name: "Education & Research" },
  { icon: Briefcase, name: "Planning & Programming" },
  { icon: Megaphone, name: "Public Relations & Communication" },
  { icon: Users, name: "Sports, Art, Culture & Talent" },
  { icon: Scale, name: "Legal Affairs" },
  { icon: Cpu, name: "Innovation & Technical" },
  { icon: GraduationCap, name: "Youth Enterprise, Employment & Mentorship" },
];

export default function ProgramsSection() {
  const { ref, inView } = useInView();

  return (
    <section id="programs" className="overflow-hidden">
      {/* Objectives — teal background */}
      <div
        className="py-24"
        style={{ background: "oklch(0.38 0.09 195)" }}
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
                color: "white",
                opacity: 0.05,
                position: "absolute",
                top: "-2rem",
                left: "-0.5rem",
                lineHeight: 1,
                pointerEvents: "none",
                userSelect: "none",
              }}
            >
              02
            </span>
            <div className="relative">
              <div
                className="inline-flex items-center gap-2 mb-3 text-xs font-bold tracking-widest uppercase"
                style={{ color: "oklch(0.88 0.12 75)", fontFamily: "'Space Grotesk', sans-serif" }}
              >
                <span className="w-8 h-0.5" style={{ background: "oklch(0.88 0.12 75)" }} />
                What We Do
              </div>
              <h2
                className="text-4xl md:text-5xl font-bold text-white leading-tight"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Main Objectives
                <br />
                <span style={{ color: "oklch(0.88 0.12 75)" }}>of NYA</span>
              </h2>
            </div>
          </div>

          {/* Objectives grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {objectives.map((obj, i) => {
              const Icon = obj.icon;
              return (
                <div
                  key={obj.title}
                  className="p-7 rounded-2xl card-hover"
                  style={{
                    background: "oklch(0.30 0.08 195)",
                    border: "1px solid oklch(0.45 0.09 195)",
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateY(0)" : "translateY(24px)",
                    transition: `opacity 0.5s ease-out ${i * 0.1}s, transform 0.5s ease-out ${i * 0.1}s`,
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "oklch(0.75 0.16 75)" }}
                    >
                      <Icon size={22} style={{ color: "oklch(0.12 0.005 285)" }} />
                    </div>
                    <div>
                      <h3
                        className="font-bold text-white text-base mb-2"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {obj.title}
                      </h3>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ fontFamily: "'Nunito', sans-serif", color: "oklch(0.80 0.02 195)" }}
                      >
                        {obj.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Working Committees — white background */}
      <div className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-14">
            <div
              className="inline-flex items-center gap-2 mb-3 text-xs font-bold tracking-widest uppercase"
              style={{ color: "oklch(0.75 0.16 75)", fontFamily: "'Space Grotesk', sans-serif" }}
            >
              <span className="w-8 h-0.5" style={{ background: "oklch(0.75 0.16 75)" }} />
              Organizational Structure
              <span className="w-8 h-0.5" style={{ background: "oklch(0.75 0.16 75)" }} />
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.12 0.005 285)" }}
            >
              Working Committees
            </h2>
            <p
              className="mt-3 max-w-xl mx-auto text-base"
              style={{ fontFamily: "'Nunito', sans-serif", color: "oklch(0.50 0.01 285)" }}
            >
              NYA operates through eight specialized committees that drive focused action across key areas.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {committees.map((c, i) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.name}
                  className="p-5 rounded-2xl text-center card-hover"
                  style={{
                    background: "oklch(0.97 0.003 95)",
                    border: "1px solid oklch(0.90 0.005 195)",
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateY(0)" : "translateY(20px)",
                    transition: `opacity 0.5s ease-out ${0.3 + i * 0.07}s, transform 0.5s ease-out ${0.3 + i * 0.07}s`,
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                    style={{ background: "oklch(0.38 0.09 195)" }}
                  >
                    <Icon size={20} style={{ color: "white" }} />
                  </div>
                  <p
                    className="text-sm font-semibold leading-snug"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.20 0.005 285)" }}
                  >
                    {c.name}
                  </p>
                  <div
                    className="mt-2 text-xs font-bold"
                    style={{ color: "oklch(0.38 0.09 195)", fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
