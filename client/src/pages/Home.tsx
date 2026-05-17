/**
 * NYA Home Page — NSA Format
 * Sections: Hero → About (Vision/Mission/Community) → What We Do → CTA → Contact
 */
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import CallToAction from "@/components/CallToAction";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "oklch(0.99 0.003 95)" }}>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ActivitiesSection />
      <CallToAction />
      <ContactSection />
    </div>
  );
}
