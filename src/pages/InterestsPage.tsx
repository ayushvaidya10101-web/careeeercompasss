import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { INTEREST_CATEGORIES } from "@/data/careers";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function InterestsPage() {
  const [selected, setSelected] = useState<string[]>([]);
  const navigate = useNavigate();

  const toggleInterest = (id: string) => {
    setSelected(prev => 
      prev.includes(id) 
        ? prev.filter(i => i !== id)
        : prev.length < 2 ? [...prev, id] : [prev[1], id]
    );
  };

  const handleContinue = () => {
    if (selected.length === 2) {
      navigate(`/preferences?interests=${selected.join(",")}`);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="font-display text-4xl font-bold mb-4">
              Select Your <span className="gradient-text">Interests</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Choose exactly <strong>2 areas</strong> that interest you most. We'll find careers at their intersection.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Selected: {selected.length}/2
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
            {INTEREST_CATEGORIES.map((interest) => {
              const isSelected = selected.includes(interest.id);
              return (
                <Card
                  key={interest.id}
                  variant="interest"
                  className={`cursor-pointer ${isSelected ? "border-primary shadow-glow bg-primary/5" : ""}`}
                  onClick={() => toggleInterest(interest.id)}
                >
                  <CardContent className="p-6 text-center relative">
                    {isSelected && (
                      <CheckCircle2 className="absolute top-3 right-3 h-5 w-5 text-primary" />
                    )}
                    <div className="text-3xl mb-3">{interest.icon}</div>
                    <h3 className="font-semibold text-sm">{interest.label}</h3>
                  </CardContent>
                </Card>
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
