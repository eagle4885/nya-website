/**
 * NYA ContactSection + Footer
 * Teal background, amber accents, social links, contact info
 */
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, ExternalLink } from "lucide-react";

const ABSTRACT_BG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663663725732/Wdk2VuHBktKtP2QqV63FoA/nya-abstract-bg-o6tuHcRztXhMFskmnBSo9T.webp";

export default function ContactSection() {
  return (
    <>
      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 relative overflow-hidden"
        style={{ background: "oklch(0.22 0.08 195)" }}
      >
        {/* Pattern overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url(${ABSTRACT_BG})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="container relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div
              className="inline-flex items-center gap-2 mb-3 text-xs font-bold tracking-widest uppercase"
              style={{ color: "oklch(0.88 0.12 75)", fontFamily: "'Space Grotesk', sans-serif" }}
            >
              <span className="w-8 h-0.5" style={{ background: "oklch(0.88 0.12 75)" }} />
              Get In Touch
              <span className="w-8 h-0.5" style={{ background: "oklch(0.88 0.12 75)" }} />
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Contact &amp;{" "}
              <span style={{ color: "oklch(0.88 0.12 75)" }}>Connect</span>
            </h2>
            <p
              className="max-w-xl mx-auto text-white/70 text-base"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              Ready to join the movement? Reach out to us and become part of the Nandi Youth Assembly.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div className="flex flex-col gap-6">
              <div
                className="p-7 rounded-2xl"
                style={{ background: "oklch(0.30 0.08 195)", border: "1px solid oklch(0.38 0.09 195)" }}
              >
                <h3
                  className="text-lg font-bold text-white mb-6"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Contact Information
                </h3>
                <div className="flex flex-col gap-5">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "oklch(0.75 0.16 75)" }}
                    >
                      <Mail size={18} style={{ color: "oklch(0.12 0.005 285)" }} />
                    </div>
                    <div>
                      <div
                        className="text-xs font-bold uppercase tracking-wider mb-1"
                        style={{ color: "oklch(0.78 0.03 195)", fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        Email
                      </div>
                      <a
                        href="mailto:nandiyouthassembly@gmail.com"
                        className="text-white hover:text-amber-300 transition-colors text-sm font-medium"
                        style={{ fontFamily: "'Nunito', sans-serif" }}
                      >
                        nandiyouthassembly@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "oklch(0.75 0.16 75)" }}
                    >
                      <Phone size={18} style={{ color: "oklch(0.12 0.005 285)" }} />
                    </div>
                    <div>
                      <div
                        className="text-xs font-bold uppercase tracking-wider mb-1"
                        style={{ color: "oklch(0.78 0.03 195)", fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        Phone
                      </div>
                      <a
                        href="tel:+254758147727"
                        className="text-white hover:text-amber-300 transition-colors text-sm font-medium"
                        style={{ fontFamily: "'Nunito', sans-serif" }}
                      >
                        0758 147 727
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "oklch(0.75 0.16 75)" }}
                    >
                      <MapPin size={18} style={{ color: "oklch(0.12 0.005 285)" }} />
                    </div>
                    <div>
                      <div
                        className="text-xs font-bold uppercase tracking-wider mb-1"
                        style={{ color: "oklch(0.78 0.03 195)", fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        Address
                      </div>
                      <p
                        className="text-white text-sm font-medium leading-relaxed"
                        style={{ fontFamily: "'Nunito', sans-serif" }}
                      >
                        NYA Head Office, Nandi Headquarters Building
                        <br />
                        P.O. Box 802-30300, Kapsabet
                        <br />
                        Nandi County, Kenya
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div
                className="p-7 rounded-2xl"
                style={{ background: "oklch(0.30 0.08 195)", border: "1px solid oklch(0.38 0.09 195)" }}
              >
                <h3
                  className="text-lg font-bold text-white mb-5"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Follow Us
                </h3>
                <div className="flex gap-3">
                  {[
                    { icon: Facebook, label: "Facebook", href: "#" },
                    { icon: Twitter, label: "Twitter / X", href: "#" },
                    { icon: Instagram, label: "Instagram", href: "#" },
                    { icon: ExternalLink, label: "TikTok", href: "#" },
                  ].map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        aria-label={social.label}
                        className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-200 btn-scale"
                        style={{ background: "oklch(0.38 0.09 195)" }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLAnchorElement).style.background = "oklch(0.75 0.16 75)";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLAnchorElement).style.background = "oklch(0.38 0.09 195)";
                        }}
                      >
                        <Icon size={18} className="text-white" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Join NYA CTA */}
            <div
              className="p-8 md:p-10 rounded-2xl"
              style={{ background: "oklch(0.75 0.16 75)" }}
            >
              <h3
                className="text-2xl font-bold mb-3"
                style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.12 0.005 285)" }}
              >
                Join the Assembly
              </h3>
              <p
                className="text-sm leading-relaxed mb-8"
                style={{ fontFamily: "'Nunito', sans-serif", color: "oklch(0.20 0.005 285)" }}
              >
                Are you a young person from Nandi County passionate about leadership, community development
                and driving positive change? NYA is your platform. Join us and be part of the movement.
              </p>

              <div className="flex flex-col gap-4">
                <div>
                  <label
                    className="block text-xs font-bold uppercase tracking-wider mb-1.5"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.25 0.005 285)" }}
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all"
                    style={{
                      background: "white",
                      border: "2px solid transparent",
                      fontFamily: "'Nunito', sans-serif",
                      color: "oklch(0.12 0.005 285)",
                    }}
                    onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = "oklch(0.38 0.09 195)"; }}
                    onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = "transparent"; }}
                  />
                </div>
                <div>
                  <label
                    className="block text-xs font-bold uppercase tracking-wider mb-1.5"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.25 0.005 285)" }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all"
                    style={{
                      background: "white",
                      border: "2px solid transparent",
                      fontFamily: "'Nunito', sans-serif",
                      color: "oklch(0.12 0.005 285)",
                    }}
                    onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = "oklch(0.38 0.09 195)"; }}
                    onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = "transparent"; }}
                  />
                </div>
                <div>
                  <label
                    className="block text-xs font-bold uppercase tracking-wider mb-1.5"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.25 0.005 285)" }}
                  >
                    Message
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us why you want to join NYA..."
                    className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all resize-none"
                    style={{
                      background: "white",
                      border: "2px solid transparent",
                      fontFamily: "'Nunito', sans-serif",
                      color: "oklch(0.12 0.005 285)",
                    }}
                    onFocus={(e) => { (e.target as HTMLTextAreaElement).style.borderColor = "oklch(0.38 0.09 195)"; }}
                    onBlur={(e) => { (e.target as HTMLTextAreaElement).style.borderColor = "transparent"; }}
                  />
                </div>
                <button
                  className="w-full py-3.5 rounded-lg font-bold text-sm btn-scale transition-all duration-200 hover:brightness-95"
                  style={{
                    background: "oklch(0.38 0.09 195)",
                    color: "white",
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                  onClick={() => {
                    alert("Thank you for your interest in joining NYA! We will be in touch soon.");
                  }}
                >
                  Send Message & Join NYA
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-10"
        style={{ background: "oklch(0.12 0.06 195)", borderTop: "1px solid oklch(0.22 0.08 195)" }}
      >
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold"
                  style={{ background: "oklch(0.75 0.16 75)", color: "oklch(0.12 0.005 285)", fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  NYA
                </div>
                <span
                  className="text-white font-bold"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Nandi Youth Assembly
                </span>
              </div>
              <p
                className="text-sm leading-relaxed"
                style={{ fontFamily: "'Nunito', sans-serif", color: "oklch(0.65 0.03 195)" }}
              >
                Uniting Voices, Driving Impact. A youth-centered platform for leadership and collective action in Nandi County.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4
                className="text-white font-bold text-sm mb-4 uppercase tracking-wider"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Quick Links
              </h4>
              <div className="flex flex-col gap-2">
                {[
                  { label: "About", id: "about" },
                  { label: "Programs", id: "programs" },
                  { label: "Focus Areas", id: "focus" },
                  { label: "Activities", id: "activities" },
                  { label: "Contact", id: "contact" },
                ].map(({ label, id }) => (
                  <button
                    key={label}
                    onClick={() => document.querySelector(`#${id}`)?.scrollIntoView({ behavior: "smooth" })}
                    className="text-left text-sm transition-colors hover:text-white"
                    style={{ fontFamily: "'Nunito', sans-serif", color: "oklch(0.65 0.03 195)" }}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4
                className="text-white font-bold text-sm mb-4 uppercase tracking-wider"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Contact
              </h4>
              <div className="flex flex-col gap-2 text-sm" style={{ fontFamily: "'Nunito', sans-serif", color: "oklch(0.65 0.03 195)" }}>
                <span>nandiyouthassembly@gmail.com</span>
                <span>0758 147 727</span>
                <span>P.O. Box 802-30300, Kapsabet</span>
                <span>Nandi County, Kenya</span>
              </div>
            </div>
          </div>

          <div
            className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
            style={{ borderTop: "1px solid oklch(0.22 0.08 195)" }}
          >
            <p
              className="text-xs"
              style={{ fontFamily: "'Nunito', sans-serif", color: "oklch(0.50 0.03 195)" }}
            >
              © 2025 Nandi Youth Assembly. All rights reserved.
            </p>
            <p
              className="text-xs"
              style={{ fontFamily: "'Nunito', sans-serif", color: "oklch(0.50 0.03 195)" }}
            >
              Established 1st February, 2025 · Kapsabet, Nandi County
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
