import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-6">
            <a
              href="https://linkedin.com/in/sailesh-g-567092121/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="mailto:sailesh.g.n@gmail.com"
              className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
          
          <p className="text-sm text-muted-foreground font-mono flex items-center gap-2">
            Designed & Built with <Heart size={16} className="text-primary animate-pulse" /> by Sailesh G
          </p>
        </div>
      </div>
    </footer>
  );
};