import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 sm:py-12 border-t border-border/50" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4 sm:gap-6 md:flex-row md:justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-display text-lg">
            <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
              <circle cx="14" cy="14" r="13" stroke="var(--primary)" strokeWidth="1.5" />
              <path d="M14 3 L15.5 12 L14 11 L12.5 12 Z" fill="var(--primary)" />
              <path d="M14 25 L15.5 16 L14 17 L12.5 16 Z" fill="var(--foreground)" />
              <circle cx="14" cy="14" r="2" fill="var(--primary)" />
            </svg>
            Career Compass
          </Link>

          {/* Disclaimer */}
          <p className="text-xs text-muted-foreground text-center max-w-md">
            This platform provides educational information only. All career decisions
            should be made by students based on their own research and judgment.
          </p>

          {/* Links */}
          <div className="flex items-center gap-4 text-sm">
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
            <span className="text-border">|</span>
            <Link to="/interests" className="text-muted-foreground hover:text-primary transition-colors min-h-[44px] flex items-center">
              Explore Careers
            </Link>
            <span className="text-border">|</span>
            <span className="text-muted-foreground">
              © {new Date().getFullYear()}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
