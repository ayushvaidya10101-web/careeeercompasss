import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { INTEREST_CATEGORIES } from "@/data/careers";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { DynamicIcon } from "@/components/DynamicIcon";
import { SEOHead } from "@/components/SEOHead";

export default function InterestsPage() {
  const [selected, setSelected] = useState<string[]>([]);
  const [shakeId, setShakeId] = useState<string | null>(null);
  const navigate = useNavigate();

  const toggleInterest = (id: string) => {
    if (selected.includes(id)) {
      setSelected(prev => prev.filter(i => i !== id));
    } else if (selected.length < 2) {
      setSelected(prev => [...prev, id]);
    } else {
      // Max 2 — shake the card
      setShakeId(id);
      setTimeout(() => setShakeId(null), 500);
    }
  };

  const handleContinue = () => {
    if (selected.length === 2) {
      navigate(`/preferences/work-style?interests=${selected.join(",")}`);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead title="Select Your Interests" description="Choose your top interests to discover matching careers at their intersection." />
      <Header />
      <main id="main-content" className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="font-display text-3xl sm:text-5xl mb-4">
              Select Your <em className="text-primary">Interests</em>
            </h1>
            <p className="text-muted-foreground">
              Choose exactly <strong className="text-foreground">2 areas</strong> that interest you most. We'll find careers at their intersection.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Selected: {selected.length}/2
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto mb-8 sm:mb-12">
            {INTEREST_CATEGORIES.map((interest) => {
              const isSelected = selected.includes(interest.id);
              return (
                <div
                  key={interest.id}
                  className={`glass-card rounded-2xl p-4 sm:p-6 text-center relative cursor-pointer transition-all duration-300 ${
                    isSelected
                      ? "border-primary shadow-glow bg-primary/5 ring-2 ring-primary/30"
                      : "hover:border-primary/50"
                  } ${shakeId === interest.id ? "animate-shake" : ""}`}
                  onClick={() => toggleInterest(interest.id)}
                >
                  {isSelected && (
                    <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-primary flex items-center justify-center animate-scale-in">
                      <CheckCircle2 className="h-4 w-4 text-primary-foreground" />
                    </div>
                  )}
                  <DynamicIcon name={interest.icon} className="h-8 w-8 text-primary mb-3 mx-auto" />
                  <h3 className="font-display text-sm">{interest.label}</h3>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Button
              variant="hero"
              size="xl"
              disabled={selected.length !== 2}
              onClick={handleContinue}
            >
              Continue to Preferences
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
