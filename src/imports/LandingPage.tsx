import { TopBar } from "./sections/TopBar";
import { Navbar } from "./sections/Navbar";
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
    <div className="bg-white flex flex-col items-center min-h-screen relative w-full overflow-hidden" data-name="Landing Page">
      <TopBar />
      <Navbar />
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