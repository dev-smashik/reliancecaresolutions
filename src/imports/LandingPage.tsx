import { NavbarInner } from "./sections/Navbar";
import { HeroSection } from "./sections/HeroSection";
import { SupportAdviceSection } from "./sections/SupportAdviceSection";
import { InHomeCareSection } from "./sections/InHomeCareSection";
import { ServicesOverviewSection } from "./sections/ServicesOverviewSection";
import { TrustStatementBanner } from "./sections/TrustStatementBanner";
import { YouthProgramsSection } from "./sections/YouthProgramsSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { ContactSection } from "./sections/ContactSection";
import { FooterSection } from "./sections/FooterSection";

export default function LandingPage() {
  return (
    <div className="bg-white relative size-full" data-name="Landing Page">
      <NavbarInner />
      <HeroSection />
      <SupportAdviceSection />
      <InHomeCareSection />
      <ServicesOverviewSection />
      <TrustStatementBanner />
      <YouthProgramsSection />
      <TestimonialsSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}