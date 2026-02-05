import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/landing/HeroSection";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { NeutralitySection } from "@/components/landing/NeutralitySection";
import { CollegesWorldSection } from "@/components/landing/CollegesWorldSection";
import { GlobalSearch } from "@/components/search/GlobalSearch";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        {/* Problem statements come first as requested */}
        <ProblemSection />
        <NeutralitySection />
        {/* Explore Careers section comes lower */}
        <CollegesWorldSection />
      </main>
      <Footer />
      <GlobalSearch />
    </div>
  );
};

export default Index;
