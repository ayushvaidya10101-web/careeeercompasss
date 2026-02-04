import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/landing/HeroSection";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { NeutralitySection } from "@/components/landing/NeutralitySection";
import { CollegesWorldSection } from "@/components/landing/CollegesWorldSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
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
