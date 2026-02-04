import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, ArrowRight } from "lucide-react";

export function NeutralitySection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-muted/30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Card variant="glow" className="p-8 md:p-12">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row items-start gap-8">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-brand-blue to-brand-purple flex items-center justify-center shadow-glow">
                    <Shield className="h-10 w-10 text-primary-foreground" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
                    Our Promise:{" "}
                    <span className="gradient-text">Education, Not Direction</span>
                  </h2>
                  
                  <div className="space-y-4 mb-8">
                    <p className="text-lg text-muted-foreground">
                      This platform is designed to <strong className="text-foreground">educate and inform</strong>, 
                      not to tell you what career to choose.
                    </p>
                    
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                          <span className="w-2 h-2 rounded-full bg-primary" />
                        </span>
                        <span className="text-muted-foreground">
                          We do <strong className="text-foreground">NOT</strong> tell you what YOUR career should be
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                          <span className="w-2 h-2 rounded-full bg-primary" />
                        </span>
                        <span className="text-muted-foreground">
                          We only provide <strong className="text-foreground">accurate, sourced information</strong> about career options
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                          <span className="w-2 h-2 rounded-full bg-primary" />
                        </span>
                        <span className="text-muted-foreground">
                          Final decisions are <strong className="text-foreground">always yours to make</strong>
                        </span>
                      </li>
                    </ul>
                  </div>

                  <Button asChild variant="glow" size="lg">
                    <Link to="/interests">
                      Start Exploring
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
