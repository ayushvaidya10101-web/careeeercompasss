import { useState } from "react";
import { Link } from "react-router-dom";
import { TOP_COUNTRIES } from "@/data/colleges";
import { GraduationCap, Globe, Menu, X, BookOpen, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-xl font-display font-bold">
            <GraduationCap className="h-7 w-7 text-primary" />
            <span className="gradient-text">CareerPath</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4">
            {/* Primary Action Buttons */}
            <Link to="/extracurriculars">
              <Button variant="ghost" size="sm" className="gap-2">
                <Award className="h-4 w-4" />
                Extracurriculars
              </Button>
            </Link>
            <Link to="/colleges">
              <Button variant="glow" size="sm" className="gap-2">
                <Globe className="h-4 w-4" />
                Explore Colleges
              </Button>
            </Link>
            
            {/* Country Quick Links */}
            <div className="hidden xl:flex items-center gap-2 ml-4 pl-4 border-l border-border">
              {TOP_COUNTRIES.slice(0, 5).map((country) => (
                <Link
                  key={country.id}
                  to={`/colleges/${country.id}`}
                  className="flex items-center gap-1.5 px-2.5 py-1 text-sm rounded-full bg-muted/50 hover:bg-primary/10 hover:text-primary transition-all duration-200"
                >
                  <span>{country.flag}</span>
                </Link>
              ))}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              <Link 
                to="/colleges" 
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 px-4 py-3 rounded-lg bg-primary/10 text-primary font-medium"
              >
                <Globe className="h-5 w-5" />
                Explore Colleges
              </Link>
              <Link 
                to="/extracurriculars" 
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 px-4 py-3 rounded-lg hover:bg-muted"
              >
                <Award className="h-5 w-5" />
                Extracurriculars
              </Link>
              <Link 
                to="/interests" 
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 px-4 py-3 rounded-lg hover:bg-muted"
              >
                <BookOpen className="h-5 w-5" />
                Explore Careers
              </Link>
              <div className="mt-4 pt-4 border-t border-border">
                <p className="px-4 text-sm text-muted-foreground mb-3">Top Countries</p>
                <div className="flex flex-wrap gap-2 px-4">
                  {TOP_COUNTRIES.map((country) => (
                    <Link
                      key={country.id}
                      to={`/colleges/${country.id}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-full bg-muted/50 hover:bg-primary/10"
                    >
                      <span>{country.flag}</span>
                      <span>{country.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
