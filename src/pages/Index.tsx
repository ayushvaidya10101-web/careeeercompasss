import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/landing/HeroSection";
import { NeutralitySection } from "@/components/landing/NeutralitySection";
import { CollegesWorldSection } from "@/components/landing/CollegesWorldSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Awareness-first hero with challenge cards */}
        <HeroSection />
        {/* Our promise of neutrality */}
        <NeutralitySection />
        {/* Exploration as a natural next step */}
        <CollegesWorldSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
