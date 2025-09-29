// src/pages/index.tsx
import { Header } from "@/components/Header";
import { CalcomBooking } from "@/components/CalcomBooking";
import { CallToActionHeader } from "@/components/CallToActionHeader";
import { Hero } from "@/components/Hero";
import { AIAgencySection } from "@/components/sections/AIAgencySection";
import { AIAgencyAbout } from "@/components/AIAgencyAbout";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SuccessCasesSection } from "@/components/sections/SuccessCasesSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { Process } from "@/components/Process";
import { Services } from "@/components/Certifications";
import DiagramaChaveMestra from "@/components/DiagramaChaveMestra";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

const Index = () => {
  const anchorClass = "scroll-mt-24 lg:scroll-mt-28";
  
  return (
    <div className="min-h-screen bg-background">
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-card focus:text-foreground focus:shadow-lg"
      >
        Ir para o conteúdo
      </a>
      
      <Header />
      
      <section id="inicio" className={anchorClass}>
        <Hero />
      </section>
      
      <CallToActionHeader />
      
      {/* ✅ REMOVIDO O WRAPPER - AIAgencyAbout já tem id="solucoes" internamente */}
      <AIAgencyAbout />
      
      {/* ✅ REMOVIDO O WRAPPER - AIAgencySection já tem id="sobre" internamente */}
      <AIAgencySection />
      
      <ProjectsSection />
      <SuccessCasesSection />
      <WhyChooseSection />
      <Process />
      
      <section id="produtos" className={anchorClass}>
        <DiagramaChaveMestra />
        <Services />
      </section>
      
      <Testimonials />
      <FAQ />
      
      {/* ✅ REMOVIDO O WRAPPER - CalcomBooking já tem id="lead-form" e id="contato" internamente */}
      <CalcomBooking />
      
      <Footer />
    </div>
  );
};

export default Index;