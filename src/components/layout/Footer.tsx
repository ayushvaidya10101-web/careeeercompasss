import { GraduationCap, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="py-8 sm:py-12 border-t border-border bg-muted/30" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4 sm:gap-6 md:flex-row md:justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-lg font-display font-bold">
            <GraduationCap className="h-6 w-6 text-primary" />
            <span className="gradient-text">Career Compass</span>
          </Link>

          {/* Disclaimer */}
          <p className="text-xs sm:text-sm text-muted-foreground text-center max-w-md">
            This platform provides educational information only. All career decisions 
            should be made by students based on their own research and judgment.
          </p>

          {/* Links */}
          <div className="flex items-center gap-4 sm:gap-6 text-sm">
            <a
              href="https://www.instagram.com/careercompassss/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors min-h-[44px] flex items-center gap-1.5"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="h-4 w-4" />
              Instagram
            </a>
            <span className="text-muted-foreground/30">|</span>
            <Link to="/interests" className="text-muted-foreground hover:text-primary transition-colors min-h-[44px] flex items-center">
              Explore Careers
            </Link>
            <span className="text-muted-foreground/30">|</span>
            <span className="text-muted-foreground">
              © {new Date().getFullYear()}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
