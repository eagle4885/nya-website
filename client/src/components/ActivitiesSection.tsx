/**
 * NYA ActivitiesSection — Impactful Activities, Mentorship, Leadership
 * Photo-forward cards with amber/teal color blocking
 * Staggered entrance animations
 */
import { useEffect, useRef, useState } from "react";
import { Heart, BookOpen, Crown, ArrowRight } from "lucide-react";

const MENTORSHIP_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663663725732/Wdk2VuHBktKtP2QqV63FoA/nya-mentorship-QTrkzqkeNLSebLvwGeDHn2.webp";
const LEADERSHIP_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663663725732/Wdk2VuHBktKtP2QqV63FoA/nya-leadership-asyBrJMt7GVw6DvzGdRMzS.webp";
const COMMUNITY_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663663725732/Wdk2VuHBktKtP2QqV63FoA/nya-community-bZqLxuRic8r3wZJqswRpkF.webp";

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

const schools = [
  "Kabote Adventist Secondary School",
  "Kimnyoasis Secondary School",
  "St. Peter's Clavers Comprehensive School, Kobujoi",
  "St. Canisius Secondary School, Mateget",
];

export default function ActivitiesSection() {
  const { ref, inView } = useInView();

  return (
    <section id="activities" className="py-24 bg-white overflow-hidden" ref={ref}>
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
            04
          </span>
          <div className="relative">
            <div
              className="inline-flex items-center gap-2 mb-3 text-xs font-bold tracking-widest uppercase"
              style={{ color: "oklch(0.75 0.16 75)", fontFamily: "'Space Grotesk', sans-serif" }}
            >
              <span className="w-8 h-0.5" style={{ background: "oklch(0.75 0.16 75)" }} />
              On The Ground
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold leading-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.12 0.005 285)" }}
            >
              Impactful
              <br />
              <span style={{ color: "oklch(0.38 0.09 195)" }}>Activities</span>
            </h2>
          </div>
        </div>

        {/* Activity 1: CSR */}
        <div
          className="grid lg:grid-cols-2 gap-10 items-center mb-20"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateX(0)" : "translateX(-32px)",
            transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
          }}
        >
          <div className="relative rounded-2xl overflow-hidden h-72 lg:h-96">
            <img
              src={COMMUNITY_IMG}
              alt="Community CSR activities"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute bottom-0 left-0 right-0 p-5"
              style={{ background: "linear-gradient(to top, oklch(0.12 0.005 285 / 0.85), transparent)" }}
            >
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold"
                style={{ background: "oklch(0.75 0.16 75)", color: "oklch(0.12 0.005 285)", fontFamily: "'Space Grotesk', sans-serif" }}
              >
                <Heart size={12} />
                CSR Activities
              </div>
            </div>
          </div>
          <div>
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
              style={{ background: "oklch(0.95 0.005 195)" }}
            >
              <Heart size={24} style={{ color: "oklch(0.38 0.09 195)" }} />
            </div>
            <h3
              className="text-2xl font-bold mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.12 0.005 285)" }}
            >
              Corporate Social Responsibility
            </h3>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ fontFamily: "'Nunito', sans-serif", color: "oklch(0.45 0.01 285)" }}
            >
              Through our belief in giving back to the community, NYA regularly engages in CSR activities.
              These range from environmental clean-ups, visiting children's homes, tree planting and
              distributing sanitary products.
            </p>
            <p
              className="text-base leading-relaxed"
              style={{ fontFamily: "'Nunito', sans-serif", color: "oklch(0.45 0.01 285)" }}
            >
              These acts of kindness not only improve lives but also foster a culture of compassion and
              active citizenship among our members.
            </p>
          </div>
        </div>

        {/* Activity 2: Mentorship */}
        <div
          className="grid lg:grid-cols-2 gap-10 items-center mb-20"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateX(0)" : "translateX(32px)",
            transition: "opacity 0.7s ease-out 0.15s, transform 0.7s ease-out 0.15s",
          }}
        >
          <div className="order-2 lg:order-1">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
              style={{ background: "oklch(0.97 0.01 75)" }}
            >
              <BookOpen size={24} style={{ color: "oklch(0.60 0.16 75)" }} />
            </div>
            <h3
              className="text-2xl font-bold mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.12 0.005 285)" }}
            >
              Mentorship Programs
            </h3>
            <p
              className="text-base leading-relaxed mb-6"
              style={{ fontFamily: "'Nunito', sans-serif", color: "oklch(0.45 0.01 285)" }}
            >
              NYA has initiated mentorship sessions in various institutions of higher learning and high schools,
              creating awareness on mental health, drug abuse and menstrual health and hygiene. These sessions
              connect students with role models, professionals and community leaders.
            </p>

            {/* Phase 2 schools */}
            <div
              className="p-5 rounded-xl mb-4"
              style={{ background: "oklch(0.97 0.003 95)", border: "1px solid oklch(0.90 0.005 195)" }}
            >
              <div
                className="text-xs font-bold uppercase tracking-wider mb-3"
                style={{ color: "oklch(0.38 0.09 195)", fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Phase 2 — Target Schools (60+ schools goal)
              </div>
              <div className="flex flex-col gap-2">
                {schools.map((school) => (
                  <div key={school} className="flex items-center gap-2">
                    <ArrowRight size={14} style={{ color: "oklch(0.75 0.16 75)", flexShrink: 0 }} />
                    <span
                      className="text-sm"
                      style={{ fontFamily: "'Nunito', sans-serif", color: "oklch(0.30 0.005 285)" }}
                    >
                      {school}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative rounded-2xl overflow-hidden h-72 lg:h-96">
            <img
              src={MENTORSHIP_IMG}
              alt="Mentorship session in school"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute bottom-0 left-0 right-0 p-5"
              style={{ background: "linear-gradient(to top, oklch(0.12 0.005 285 / 0.85), transparent)" }}
            >
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold"
                style={{ background: "oklch(0.75 0.16 75)", color: "oklch(0.12 0.005 285)", fontFamily: "'Space Grotesk', sans-serif" }}
              >
                <BookOpen size={12} />
                Mentorship
              </div>
            </div>
          </div>
        </div>

        {/* Activity 3: Leadership */}
        <div
          className="grid lg:grid-cols-2 gap-10 items-center"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateX(0)" : "translateX(-32px)",
            transition: "opacity 0.7s ease-out 0.3s, transform 0.7s ease-out 0.3s",
          }}
        >
          <div className="relative rounded-2xl overflow-hidden h-72 lg:h-96">
            <img
              src={LEADERSHIP_IMG}
              alt="Leadership summit and training"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute bottom-0 left-0 right-0 p-5"
              style={{ background: "linear-gradient(to top, oklch(0.12 0.005 285 / 0.85), transparent)" }}
            >
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold"
                style={{ background: "oklch(0.38 0.09 195)", color: "white", fontFamily: "'Space Grotesk', sans-serif" }}
              >
                <Crown size={12} />
                Leadership
              </div>
            </div>
          </div>
          <div>
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
              style={{ background: "oklch(0.95 0.005 195)" }}
            >
              <Crown size={24} style={{ color: "oklch(0.38 0.09 195)" }} />
            </div>
            <h3
              className="text-2xl font-bold mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.12 0.005 285)" }}
            >
              Leadership Conversations
            </h3>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ fontFamily: "'Nunito', sans-serif", color: "oklch(0.45 0.01 285)" }}
            >
              NYA has been actively engaged in meaningful leadership training and leadership conversations
              that sharpen the leadership skills of our young people. These engagements have sharpened their
              vision, built their confidence, and nurtured a culture of responsible leadership.
            </p>
            <p
              className="text-base leading-relaxed"
              style={{ fontFamily: "'Nunito', sans-serif", color: "oklch(0.45 0.01 285)" }}
            >
              Through shared experiences and collective learning, our leaders have grown to become more
              intentional, informed, and committed to servant leadership that will uplift our communities.
            </p>

            {/* Events */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                { event: "Leaders Training at KISE", location: "Nairobi" },
                { event: "Leaders Summit at Kipchoge Complex", location: "Kapsabet" },
              ].map((e) => (
                <div
                  key={e.event}
                  className="p-4 rounded-xl"
                  style={{ background: "oklch(0.95 0.005 195)", border: "1px solid oklch(0.88 0.008 195)" }}
                >
                  <div
                    className="text-xs font-bold mb-1"
                    style={{ color: "oklch(0.38 0.09 195)", fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {e.location}
                  </div>
                  <div
                    className="text-sm font-semibold leading-snug"
                    style={{ fontFamily: "'Nunito', sans-serif", color: "oklch(0.20 0.005 285)" }}
                  >
                    {e.event}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
