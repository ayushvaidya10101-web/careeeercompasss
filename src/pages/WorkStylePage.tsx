import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ArrowRight, ArrowLeft, Briefcase } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";

const WORK_STYLES = [
  { id: "leadership", label: "Leadership & Management", description: "Leading teams and making strategic decisions" },
  { id: "collaborative", label: "Collaborative Teamwork", description: "Working closely with others on shared goals" },
  { id: "independent", label: "Independent Work", description: "Self-directed tasks with autonomy" },
  { id: "creative", label: "Creative Problem-Solving", description: "Innovative and artistic approaches" },
  { id: "analytical", label: "Analytical & Research", description: "Data-driven investigation and analysis" },
];

export default function WorkStylePage() {
  const [searchParams] = useSearchParams();
  const interests = searchParams.get("interests") || "";
  const navigate = useNavigate();
  const [workStyle, setWorkStyle] = useState<string>("");

  const handleContinue = () => {
    const params = new URLSearchParams({ interests, workStyle });
    navigate(`/preferences/values?${params.toString()}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead title="Work Style Preferences" description="Select your preferred work style to find careers that match your personality." />
      <Header />
      <main id="main-content" className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Button variant="ghost" onClick={() => navigate(-1)} className="mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>

          {/* Progress */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm font-medium text-primary">Step 1</span>
              <span className="text-sm text-muted-foreground">of 3</span>
            </div>
            <div className="h-1.5 bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-primary to-primary-hover rounded-full transition-all" style={{ width: "33%" }} />
            </div>
          </div>

          <div className="max-w-2xl mx-auto text-center mb-10">
            <h1 className="font-display text-3xl sm:text-4xl mb-4">
              How do you prefer to <em className="text-primary">work</em>?
            </h1>
            <p className="text-muted-foreground">
              Select the work style that appeals to you most. This helps rank careers that match your personality.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-xl bg-primary/10">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
                <h2 className="font-display text-xl">Work Style</h2>
              </div>
              <RadioGroup value={workStyle} onValueChange={setWorkStyle} className="space-y-2">
                {WORK_STYLES.map((style) => (
                  <div
                    key={style.id}
                    className={`flex items-start space-x-3 p-3 rounded-xl transition-all duration-200 cursor-pointer ${
                      workStyle === style.id ? "bg-primary/5 border-l-3 border-l-primary" : "hover:bg-muted/50"
                    }`}
                  >
                    <RadioGroupItem value={style.id} id={`work-${style.id}`} className="mt-1" />
                    <Label htmlFor={`work-${style.id}`} className="flex-1 cursor-pointer">
                      <span className="font-medium block">{style.label}</span>
                      <span className="text-sm text-muted-foreground">{style.description}</span>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="text-center pt-8">
              <Button variant="hero" size="xl" disabled={!workStyle} onClick={handleContinue}>
                Continue
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
