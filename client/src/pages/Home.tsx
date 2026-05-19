/**
 * NYA Home Page — MOYASA-style Hero + Leadership Profiles
 * Sections: HeroCarousel → About → Leadership → What We Do → CTA → Contact
 */
import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import AboutSection from "@/components/AboutSection";
import LeadershipProfiles from "@/components/LeadershipProfiles";
import ActivitiesSection from "@/components/ActivitiesSection";
import CallToAction from "@/components/CallToAction";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "oklch(0.99 0.003 95)" }}>
      <Navbar />
      <HeroCarousel />
      <AboutSection />
      <LeadershipProfiles />
      <ActivitiesSection />
      <CallToAction />
      <ContactSection />
    </div>
  );
}
