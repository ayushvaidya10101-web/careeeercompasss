import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="py-12 border-t border-border bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-lg font-display font-bold">
            <GraduationCap className="h-6 w-6 text-primary" />
            <span className="gradient-text">CareerPath</span>
          </Link>

          {/* Disclaimer */}
          <p className="text-sm text-muted-foreground text-center max-w-md">
            This platform provides educational information only. All career decisions 
            should be made by students based on their own research and judgment.
          </p>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm">
            <Link to="/interests" className="text-muted-foreground hover:text-primary transition-colors">
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
