import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const ROTATING_WORDS = ["Learn", "Be Aware", "Understand", "Discover"];
const ROTATION_INTERVAL = 3000;

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
        setIsTransitioning(false);
      }, 600);
    }, ROTATION_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  // Parallax
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        heroRef.current.style.transform = `translateY(${window.scrollY * 0.22}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Radial orange glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[120px] pointer-events-none" />

      <div ref={heroRef} className="container mx-auto px-4 pt-24 sm:pt-28 pb-16 sm:pb-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* Pill badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm mb-8 animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-muted-foreground">500+ careers · 250+ colleges · 10+ countries</span>
          </div>

          {/* Headline */}
          <h1
            className="font-display text-[clamp(50px,6.8vw,90px)] leading-[0.95] mb-6 sm:mb-8 animate-slide-up"
            style={{ animationDelay: "0.3s" }}
          >
            <em
              className="inline-block not-italic text-primary transition-opacity duration-700 ease-in-out"
              style={{ opacity: isTransitioning ? 0 : 1, fontStyle: 'italic' }}
            >
              {ROTATING_WORDS[currentIndex]}
            </em>{" "}
            More About{" "}
            <span className="text-foreground">Careers</span>
          </h1>

          {/* Subtext */}
          <p
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 sm:mb-14 font-light animate-slide-up"
            style={{ animationDelay: "0.5s" }}
          >
            Explore 1000+ career paths with accurate, sourced information.
            We educate — you decide.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-slide-up"
            style={{ animationDelay: "0.7s" }}
          >
            <Button asChild size="lg" className="rounded-full bg-gradient-to-r from-primary to-primary-hover text-primary-foreground px-8 shadow-glow hover:shadow-card-hover min-h-[48px]">
              <Link to="/interests">
                Explore Careers
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full glass min-h-[48px]">
              <Link to="/colleges">
                Explore Colleges
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full glass min-h-[48px]">
              <Link to="/extracurriculars">
                Extracurriculars
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full glass min-h-[48px]">
              <Link to="/careers">
                View All
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div
            className="flex items-center gap-8 sm:gap-12 mt-16 sm:mt-24 pt-8 border-t border-primary/15 animate-fade-in"
            style={{ animationDelay: "1.0s" }}
          >
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-display text-primary">500+</div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">Careers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-display text-primary">250+</div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">Colleges</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-display text-primary">+10</div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">Countries</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
