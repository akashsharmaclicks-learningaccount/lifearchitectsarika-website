import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTASection } from "@/components/sections/CTASection";
import { WhatsAppSection } from "@/components/sections/WhatsAppSection";
export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-background">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <TestimonialsSection />
        <WhatsAppSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
