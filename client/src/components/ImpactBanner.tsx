/**
 * NYA ImpactBanner — Full-width amber color block with bold quote
 * Breaks up the page with strong visual contrast
 */
export default function ImpactBanner() {
  return (
    <section
      className="py-16 relative overflow-hidden"
      style={{ background: "oklch(0.75 0.16 75)" }}
    >
      {/* Decorative large text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "clamp(8rem, 20vw, 18rem)",
          fontWeight: 700,
          color: "oklch(0.12 0.005 285 / 0.05)",
          lineHeight: 1,
          whiteSpace: "nowrap",
        }}
      >
        NYA
      </div>

      <div className="container relative z-10 text-center">
        <blockquote
          className="text-2xl md:text-4xl font-bold leading-tight mb-6"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            color: "oklch(0.12 0.005 285)",
          }}
        >
          "Brilliant youth voices deserve to be heard.
          <br />
          <span style={{ color: "oklch(0.28 0.08 195)" }}>
            County policies must reflect the reality of the youth.
          </span>"
        </blockquote>
        <p
          className="text-base font-semibold"
          style={{ fontFamily: "'Nunito', sans-serif", color: "oklch(0.25 0.005 285)" }}
        >
          — Nandi Youth Assembly
        </p>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
          {[
            { number: "8", label: "Focus Areas" },
            { number: "8", label: "Committees" },
            { number: "5", label: "Objectives" },
            { number: "60+", label: "Schools Target" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-3xl md:text-4xl font-bold mb-1"
                style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.28 0.08 195)" }}
              >
                {stat.number}
              </div>
              <div
                className="text-xs font-semibold uppercase tracking-wider"
                style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.35 0.005 285)" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
