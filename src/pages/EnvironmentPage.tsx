import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ArrowRight, ArrowLeft, Building2 } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";

const ENVIRONMENTS = [
  { id: "office", label: "Office Setting", description: "Traditional professional workspace" },
  { id: "remote", label: "Remote / Flexible", description: "Work from anywhere with flexibility" },
  { id: "field", label: "Fieldwork / Outdoor", description: "Active work in various locations" },
  { id: "lab", label: "Lab / Research Facility", description: "Controlled research environments" },
  { id: "studio", label: "Studio / Creative Space", description: "Artistic and production environments" },
];

export default function EnvironmentPage() {
  const [searchParams] = useSearchParams();
  const interests = searchParams.get("interests") || "";
  const workStyle = searchParams.get("workStyle") || "";
  const values = searchParams.get("values") || "";
  const navigate = useNavigate();
  const [environment, setEnvironment] = useState<string>("");

  const handleContinue = () => {
    const params = new URLSearchParams({ interests, workStyle, values, environment });
    navigate(`/careers?${params.toString()}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead title="Work Environment" description="Select your preferred work environment to find the best career matches." />
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
              <span className="text-sm font-medium text-primary">Step 3</span>
              <span className="text-sm text-muted-foreground">of 3</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full transition-all" style={{ width: "100%" }} />
            </div>
          </div>

          <div className="max-w-2xl mx-auto text-center mb-10">
            <h1 className="font-display text-4xl font-bold mb-4">
              What environment <span className="gradient-text">suits you</span>?
            </h1>
            <p className="text-muted-foreground">
              Select your preferred work setting. This is the final step before exploring your careers!
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card variant="gradient">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-brand-cyan/20">
                    <Building2 className="h-5 w-5 text-brand-cyan" />
                  </div>
                  <h2 className="font-display text-xl font-semibold">Work Environment</h2>
                </div>
                <RadioGroup value={environment} onValueChange={setEnvironment} className="space-y-3">
                  {ENVIRONMENTS.map((env) => (
                    <div key={env.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                      <RadioGroupItem value={env.id} id={`env-${env.id}`} className="mt-1" />
                      <Label htmlFor={`env-${env.id}`} className="flex-1 cursor-pointer">
                        <span className="font-medium block">{env.label}</span>
                        <span className="text-sm text-muted-foreground">{env.description}</span>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </CardContent>
            </Card>

            <div className="text-center pt-8">
              <Button variant="hero" size="xl" disabled={!environment} onClick={handleContinue}>
                Explore Careers
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
