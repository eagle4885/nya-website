/**
 * NYA Navbar — NSA-style clean navigation
 * Logo on left, horizontal menu, minimal styling
 */
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Leadership", href: "#leadership" },
  { label: "Activities", href: "#activities" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
        background: scrolled ? "white" : "white",
        boxShadow: scrolled ? "0 2px 12px rgba(0,0,0,0.1)" : "none",
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
            alt="NYA Logo"
            className="w-10 h-10 flex-shrink-0"
          />
          <div className="flex flex-col leading-tight hidden sm:flex">
            <span
              className="text-gray-900 font-bold text-sm"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              NYA
            </span>
            <span
              className="text-xs text-gray-600"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              Nandi Youth Assembly
            </span>
          </div>
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <button
              key={label}
              onClick={() => handleNavClick(href)}
              className="text-sm font-semibold transition-colors hover:text-blue-600"
              style={{
                color: "oklch(0.38 0.09 195)",
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* CTA Button */}
        <button
          onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
          className="hidden md:block px-6 py-2.5 rounded-lg font-bold text-sm transition-all duration-200 hover:brightness-110"
          style={{
            background: "oklch(0.75 0.16 75)",
            color: "white",
            fontFamily: "'Space Grotesk', sans-serif",
          }}
        >
          Join NYA
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2"
          style={{ color: "oklch(0.38 0.09 195)" }}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <nav className="container py-4 flex flex-col gap-3">
            {navLinks.map(({ label, href }) => (
              <button
                key={label}
                onClick={() => handleNavClick(href)}
                className="text-left py-2 text-sm font-semibold transition-colors hover:text-blue-600"
                style={{
                  color: "oklch(0.38 0.09 195)",
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => {
                setOpen(false);
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="mt-2 px-6 py-2.5 rounded-lg font-bold text-sm w-full transition-all duration-200"
              style={{
                background: "oklch(0.75 0.16 75)",
                color: "white",
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
