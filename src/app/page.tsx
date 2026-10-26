import { AboutSection } from "@/components/about-section";
import { BackgroundMedia } from "@/components/background-media";
import { EnquireSection } from "@/components/enquire-section";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { PartnersSection } from "@/components/partners-section";
import { SectionDivider } from "@/components/section-divider";
import { ServicesSection } from "@/components/services-section";
import { SiteNav } from "@/components/site-nav";
import { Testimonials } from "@/components/testimonials";
import { TrainersSection } from "@/components/trainers-section";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { site } from "@/content/site";

export default function HomePage() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[70] focus:bg-gold focus:px-4 focus:py-3 focus:font-heading focus:text-sm focus:tracking-[0.14em] focus:text-black focus:uppercase"
      >
        {site.ui.skip}
      </a>
      <BackgroundMedia />
      <div className="relative z-10">
        <Hero />
        <SiteNav />
        <main id="main">
          <AboutSection />
          <SectionDivider />
          <ServicesSection />
          <SectionDivider />
          <TrainersSection />
          <SectionDivider />
          <Testimonials />
          <SectionDivider />
          <EnquireSection />
          <SectionDivider />
          <PartnersSection />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}
