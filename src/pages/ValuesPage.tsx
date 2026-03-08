import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ArrowRight, ArrowLeft, Heart } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";

const VALUES = [
  { id: "impact", label: "Making an Impact", description: "Creating meaningful change in the world" },
  { id: "innovation", label: "Innovation & Discovery", description: "Pushing boundaries and creating new things" },
  { id: "stability", label: "Stability & Security", description: "Predictable income and job security" },
  { id: "creativity", label: "Creative Expression", description: "Expressing ideas through your work" },
  { id: "helping", label: "Helping Others", description: "Directly improving people's lives" },
];

export default function ValuesPage() {
  const [searchParams] = useSearchParams();
  const interests = searchParams.get("interests") || "";
  const workStyle = searchParams.get("workStyle") || "";
  const navigate = useNavigate();
  const [values, setValues] = useState<string>("");

  const handleContinue = () => {
    const params = new URLSearchParams({ interests, workStyle, values });
    navigate(`/preferences/environment?${params.toString()}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead title="Core Values" description="Choose what matters most to you to discover careers aligned with your values." />
      <Header />
      <main id="main-content" className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Button variant="ghost" onClick={() => navigate(-1)} className="mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>

          <div className="max-w-2xl mx-auto mb-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm font-medium text-primary">Step 2</span>
              <span className="text-sm text-muted-foreground">of 3</span>
            </div>
            <div className="h-1.5 bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-primary to-primary-hover rounded-full transition-all" style={{ width: "66%" }} />
            </div>
          </div>

          <div className="max-w-2xl mx-auto text-center mb-10">
            <h1 className="font-display text-3xl sm:text-4xl mb-4">
              What matters most to <em className="text-primary">you</em>?
            </h1>
            <p className="text-muted-foreground">
              Select the value that drives you. This helps us highlight careers aligned with your motivations.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-xl bg-primary/10">
                  <Heart className="h-5 w-5 text-primary" />
                </div>
                <h2 className="font-display text-xl">Core Values</h2>
              </div>
              <RadioGroup value={values} onValueChange={setValues} className="space-y-2">
                {VALUES.map((val) => (
                  <div
                    key={val.id}
                    className={`flex items-start space-x-3 p-3 rounded-xl transition-all duration-200 cursor-pointer ${
                      values === val.id ? "bg-primary/5 border-l-3 border-l-primary" : "hover:bg-muted/50"
                    }`}
                  >
                    <RadioGroupItem value={val.id} id={`value-${val.id}`} className="mt-1" />
                    <Label htmlFor={`value-${val.id}`} className="flex-1 cursor-pointer">
                      <span className="font-medium block">{val.label}</span>
                      <span className="text-sm text-muted-foreground">{val.description}</span>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="text-center pt-8">
              <Button variant="hero" size="xl" disabled={!values} onClick={handleContinue}>
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
