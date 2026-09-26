import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { useParallaxTransform } from '@/hooks/use-scroll';

export const Footer = () => {
  const footerParallax = useParallaxTransform(10, 30);

  return (
    <footer className="border-t border-border/50 bg-card/30 backdrop-blur-sm" style={{ transform: `translateY(${footerParallax}px)` }}>
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col items-center gap-8">
          {/* Quick nav */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm" role="navigation" aria-label="Footer navigation">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
            <a href="#experience" className="text-muted-foreground hover:text-primary transition-colors">Experience</a>
            <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</a>
            <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">Skills</a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
          </nav>

          {/* Social links */}
          <div className="flex gap-8" role="list" aria-label="Social links">
            <a
              href="https://linkedin.com/in/sailesh-g-567092121/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} aria-hidden="true" />
            </a>
            <a
              href="https://github.com/S41lesh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={20} aria-hidden="true" />
            </a>
            <a
              href="mailto:sailesh.g.n@gmail.com"
              className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
              aria-label="Email"
            >
              <Mail size={20} aria-hidden="true" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-caption text-muted-foreground font-mono flex items-center justify-center gap-2">
              <span>Designed & Built with</span>
              <Heart size={14} className="text-primary animate-pulse" aria-hidden="true" />
              <span>by Sailesh G.</span>
            </p>
            <p className="text-caption text-muted-foreground/60 mt-1">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};