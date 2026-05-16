/**
 * NYA Navbar — Civic Energy Design
 * Sticky top nav with teal background, amber accent on active links
 * Space Grotesk for brand name, smooth mobile drawer
 */
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Leadership", href: "#leadership" },
  { label: "Programs", href: "#programs" },
  { label: "Focus Areas", href: "#focus" },
  { label: "Activities", href: "#activities" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNavClick = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "oklch(0.28 0.08 195 / 0.97)"
          : "oklch(0.28 0.08 195 / 0.92)",
        backdropFilter: "blur(12px)",
        boxShadow: scrolled ? "0 4px 24px oklch(0.12 0.005 285 / 0.25)" : "none",
      }}
    >
      <div className="container flex items-center justify-between h-16">
        {/* Brand */}
        <button
          onClick={() => handleNavClick("#home")}
          className="flex items-center gap-3 group"
        >
          <img
            src="/manus-storage/extracted_image_22_306270a4.png"
            alt="Nandi Youth Assembly Logo"
            className="w-10 h-10 flex-shrink-0 hover:scale-105 transition-transform duration-200"
          />
          <div className="flex flex-col leading-tight">
            <span
              className="text-white font-bold text-base"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Nandi Youth Assembly
            </span>
            <span
              className="text-xs hidden sm:block"
              style={{ color: "oklch(0.75 0.16 75)", fontFamily: "'Nunito', sans-serif" }}
            >
              Uniting Voices, Driving Impact
            </span>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="relative px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors duration-200 group"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {link.label}
              <span
                className="absolute bottom-0 left-4 right-4 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left rounded-full"
                style={{ background: "oklch(0.75 0.16 75)" }}
              />
            </button>
          ))}
          <button
            onClick={() => handleNavClick("#contact")}
            className="ml-3 px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 btn-scale"
            style={{
              background: "oklch(0.75 0.16 75)",
              color: "oklch(0.12 0.005 285)",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            Join NYA
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div
          className="md:hidden border-t animate-fade-in"
          style={{ borderColor: "oklch(0.38 0.09 195)", background: "oklch(0.22 0.08 195 / 0.98)" }}
        >
          <nav className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left px-4 py-3 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors font-medium"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#contact")}
              className="mt-2 px-5 py-3 rounded-lg text-sm font-semibold text-center btn-scale"
              style={{
                background: "oklch(0.75 0.16 75)",
                color: "oklch(0.12 0.005 285)",
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              Join NYA
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
