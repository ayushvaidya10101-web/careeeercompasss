import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/landing/HeroSection";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { NeutralitySection } from "@/components/landing/NeutralitySection";
import { CollegesWorldSection } from "@/components/landing/CollegesWorldSection";
import { SEOHead } from "@/components/SEOHead";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Career Compass" 
        description="Explore 1000+ career paths with accurate, sourced information. We educate — you decide." 
      />
      <Header />
      <main id="main-content">
        <HeroSection />
        <ProblemSection />
        <NeutralitySection />
        <CollegesWorldSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
