/**
 * NYA CallToAction — Full-width section with abstract pattern bg
 * Drives users to join or get involved
 */
const ABSTRACT_BG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663663725732/Wdk2VuHBktKtP2QqV63FoA/nya-abstract-bg-o6tuHcRztXhMFskmnBSo9T.webp";

export default function CallToAction() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: "oklch(0.38 0.09 195)" }}
    >
      {/* Pattern overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${ABSTRACT_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.12,
        }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "oklch(0.38 0.09 195 / 0.7)" }}
      />

      <div className="container relative z-10 text-center">
        <div
          className="inline-flex items-center gap-2 mb-4 text-xs font-bold tracking-widest uppercase"
          style={{ color: "oklch(0.88 0.12 75)", fontFamily: "'Space Grotesk', sans-serif" }}
        >
          <span className="w-8 h-0.5" style={{ background: "oklch(0.88 0.12 75)" }} />
          Be Part of the Change
          <span className="w-8 h-0.5" style={{ background: "oklch(0.88 0.12 75)" }} />
        </div>
        <h2
          className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Your Voice Matters.
          <br />
          <span style={{ color: "oklch(0.88 0.12 75)" }}>Join NYA Today.</span>
        </h2>
        <p
          className="max-w-2xl mx-auto text-white/80 text-base leading-relaxed mb-10"
          style={{ fontFamily: "'Nunito', sans-serif" }}
        >
          Through advocacy, mentorship, capacity-building, community programs and leadership opportunities,
          NYA enables the youth to explore their potential, influence policy and shape the future of Nandi County.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3.5 rounded-lg font-bold text-base btn-scale transition-all duration-200 hover:brightness-110"
            style={{
              background: "oklch(0.75 0.16 75)",
              color: "oklch(0.12 0.005 285)",
              fontFamily: "'Space Grotesk', sans-serif",
              boxShadow: "0 4px 20px oklch(0.75 0.16 75 / 0.4)",
            }}
          >
            Join the Assembly
          </button>
          <button
            onClick={() => document.querySelector("#focus")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3.5 rounded-lg font-bold text-base btn-scale transition-all duration-200"
            style={{
              background: "transparent",
              color: "white",
              border: "2px solid rgba(255,255,255,0.4)",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLButtonElement).style.background = "rgba(255,255,255,0.1)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLButtonElement).style.background = "transparent";
            }}
          >
            Explore Focus Areas
          </button>
        </div>
      </div>
    </section>
  );
}
