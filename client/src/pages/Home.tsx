/**
 * NYA Home Page — Assembles all sections
 * Design: Civic Energy / Bold & Grassroots
 * Colors: Deep Teal (primary) + Vibrant Amber (accent)
 * Fonts: Space Grotesk (headings) + Nunito (body)
 */
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProgramsSection from "@/components/ProgramsSection";
import FocusSection from "@/components/FocusSection";
import ImpactBanner from "@/components/ImpactBanner";
import ActivitiesSection from "@/components/ActivitiesSection";
import LeadershipSection from "@/components/LeadershipSection";
import CallToAction from "@/components/CallToAction";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "oklch(0.99 0.003 95)" }}>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <LeadershipSection />
      <ImpactBanner />
      <ProgramsSection />
      <FocusSection />
      <ActivitiesSection />
      <CallToAction />
      <ContactSection />
    </div>
  );
}
