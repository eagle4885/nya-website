/**
 * NYA LeadershipSection — Leadership Team Profiles
 * Uses extracted photos from the document
 * Teal background, amber accents, professional profile cards
 */
import { useEffect, useRef, useState } from "react";
import { Mail, Phone, Linkedin } from "lucide-react";

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

const leadershipTeam = [
  {
    name: "James Kipchoge",
    title: "Chairperson",
    bio: "Visionary leader with 5+ years of youth advocacy experience",
    image: "/manus-storage/extracted_image_19_118cee11.png",
    focus: "Leadership & Governance",
  },
  {
    name: "Sarah Koech",
    title: "Vice Chairperson",
    bio: "Passionate about education and youth empowerment",
    image: "/manus-storage/extracted_image_21_852d60ca.png",
    focus: "Education & Innovation",
  },
  {
    name: "David Kiplagat",
    title: "Treasurer",
    bio: "Financial strategist dedicated to sustainable development",
    image: "/manus-storage/extracted_image_23_c16e3a65.png",
    focus: "Finance & Resources",
  },
  {
    name: "Grace Mutai",
    title: "Secretary General",
    bio: "Communications expert driving digital visibility",
    image: "/manus-storage/extracted_image_24_b1a192e8.png",
    focus: "Public Relations",
  },
  {
    name: "Peter Rotich",
    title: "Programs Director",
    bio: "Innovative thinker focused on community impact",
    image: "/manus-storage/extracted_image_25_09c75ac0.png",
    focus: "Programs & Planning",
  },
];

export default function LeadershipSection() {
  const { ref, inView } = useInView();

  return (
    <section
      id="leadership"
      className="py-24 bg-white overflow-hidden"
      ref={ref}
    >
      <div className="container">
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
            05
          </span>
          <div className="relative">
            <div
              className="inline-flex items-center gap-2 mb-3 text-xs font-bold tracking-widest uppercase"
              style={{ color: "oklch(0.75 0.16 75)", fontFamily: "'Space Grotesk', sans-serif" }}
            >
              <span className="w-8 h-0.5" style={{ background: "oklch(0.75 0.16 75)" }} />
              Our Team
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold leading-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.12 0.005 285)" }}
            >
              Leadership
              <br />
              <span style={{ color: "oklch(0.38 0.09 195)" }}>Team</span>
            </h2>
            <p
              className="mt-4 max-w-2xl text-base leading-relaxed"
              style={{ fontFamily: "'Nunito', sans-serif", color: "oklch(0.45 0.01 285)" }}
            >
              Meet the dedicated leaders driving the Nandi Youth Assembly's mission to empower,
              inspire, and transform young people across Nandi County.
            </p>
          </div>
        </div>

        {/* Leadership grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {leadershipTeam.map((member, i) => (
            <div
              key={member.name}
              className="group rounded-2xl overflow-hidden card-hover"
              style={{
                background: "white",
                border: "1px solid oklch(0.90 0.005 195)",
                boxShadow: "0 2px 12px oklch(0.38 0.09 195 / 0.05)",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 0.5s ease-out ${i * 0.1}s, transform 0.5s ease-out ${i * 0.1}s`,
              }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden bg-gradient-to-br from-teal-100 to-amber-50">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  style={{ background: "oklch(0.38 0.09 195 / 0.85)" }}
                >
                  <div className="flex gap-3">
                    <button
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                      style={{ background: "oklch(0.75 0.16 75)" }}
                      title="Email"
                    >
                      <Mail size={16} style={{ color: "oklch(0.12 0.005 285)" }} />
                    </button>
                    <button
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                      style={{ background: "oklch(0.75 0.16 75)" }}
                      title="Phone"
                    >
                      <Phone size={16} style={{ color: "oklch(0.12 0.005 285)" }} />
                    </button>
                    <button
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                      style={{ background: "oklch(0.75 0.16 75)" }}
                      title="LinkedIn"
                    >
                      <Linkedin size={16} style={{ color: "oklch(0.12 0.005 285)" }} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3
                  className="font-bold text-base mb-1"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.12 0.005 285)" }}
                >
                  {member.name}
                </h3>
                <div
                  className="text-xs font-bold uppercase tracking-wider mb-3"
                  style={{ color: "oklch(0.75 0.16 75)", fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {member.title}
                </div>
                <p
                  className="text-xs leading-relaxed mb-3"
                  style={{ fontFamily: "'Nunito', sans-serif", color: "oklch(0.50 0.01 285)" }}
                >
                  {member.bio}
                </p>
                <div
                  className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold"
                  style={{ background: "oklch(0.95 0.005 195)", color: "oklch(0.38 0.09 195)", fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {member.focus}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note about editing */}
        <div
          className="mt-16 p-6 rounded-2xl text-center"
          style={{ background: "oklch(0.97 0.003 95)", border: "2px dashed oklch(0.75 0.16 75)" }}
        >
          <p
            className="text-sm"
            style={{ fontFamily: "'Nunito', sans-serif", color: "oklch(0.50 0.01 285)" }}
          >
            <span style={{ fontWeight: "bold", color: "oklch(0.75 0.16 75)" }}>Note:</span> All leadership names and details are placeholders and can be easily edited.
            Update the team information in the <code style={{ background: "oklch(0.90 0.005 195)", padding: "2px 6px", borderRadius: "4px" }}>LeadershipSection.tsx</code> file.
          </p>
        </div>
      </div>
    </section>
  );
}
