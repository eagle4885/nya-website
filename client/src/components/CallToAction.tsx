/**
 * NYA CallToAction — Full-width section with abstract pattern bg
 * Drives users to join or get involved
 */


export default function CallToAction() {
  return (
    <section className="py-24 overflow-hidden">
      <div
        className="py-20 px-4"
        style={{
          background: "linear-gradient(135deg, oklch(0.38 0.09 195) 0%, oklch(0.50 0.15 180) 100%)",
        }}
      >
        <div className="container text-center">
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Ready to Join Our Community?
          </h2>
          <p
            className="text-lg text-white/90 max-w-2xl mx-auto mb-10"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Be part of the transformation. Connect with fellow youth and make a difference in Nandi County.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3.5 rounded-lg font-bold text-base transition-all duration-200 hover:brightness-110"
              style={{
                background: "white",
                color: "oklch(0.38 0.09 195)",
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              Get In Touch
            </button>
            <button
              onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3.5 rounded-lg font-bold text-base transition-all duration-200"
              style={{
                background: "transparent",
                color: "white",
                border: "2px solid white",
                fontFamily: "'Space Grotesk', sans-serif",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLButtonElement).style.background = "rgba(255,255,255,0.1)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLButtonElement).style.background = "transparent";
              }}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
