
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
import { MarketingFunnel } from "@/components/MarketingFunnel";
import { Benefits } from "@/components/Benefits";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { Certifications } from "@/components/Certifications";
import { Differential } from "@/components/Differential";
import { Adaptability } from "@/components/Adaptability";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <CallToActionHeader />
      <AIAgencyAbout />
      <AIAgencySection />
      <ProjectsSection />
      <SuccessCasesSection />
      <WhyChooseSection />
      <Process />
      <Services />
      <Benefits />
      <About />
      <Testimonials />
      <FAQ />
      <CalcomBooking />
      <Footer />
    </div>
  );
};

export default Index;
