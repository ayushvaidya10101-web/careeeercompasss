import { Link } from "react-router-dom";
import { TOP_COUNTRIES } from "@/data/colleges";
import { GraduationCap, Globe } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-xl font-display font-bold">
            <GraduationCap className="h-7 w-7 text-primary" />
            <span className="gradient-text">CareerPath</span>
          </Link>
          
          {/* Colleges Around the World */}
          <nav className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <Globe className="h-4 w-4" />
              <span>Colleges Around the World:</span>
            </div>
            <div className="flex items-center gap-3">
              {TOP_COUNTRIES.map((country) => (
                <Link
                  key={country.id}
                  to={`/colleges/${country.id}`}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-full bg-muted/50 hover:bg-primary/10 hover:text-primary transition-all duration-200"
                >
                  <span>{country.flag}</span>
                  <span className="hidden xl:inline">{country.name}</span>
                </Link>
              ))}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <Link
            to="/explore"
            className="lg:hidden px-4 py-2 text-sm font-medium rounded-lg bg-primary text-primary-foreground"
          >
            Explore
          </Link>
        </div>
      </div>
    </header>
  );
}
