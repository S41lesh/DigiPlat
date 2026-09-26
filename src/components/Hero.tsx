import { ArrowRight, Github, Linkedin, Mail, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useParallaxTransform } from '@/hooks/use-scroll';

export const Hero = () => {
  const parallax = useParallaxTransform(0, 60);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center py-20 md:py-32 overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 grid-bg opacity-50" aria-hidden="true" />

      {/* Gradient orbs — parallaxed against the content */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '0s', animationDuration: '8s', transform: parallax }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '2s', animationDuration: '10s', transform: parallax }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '4s', animationDuration: '12s', transform: parallax }}
        />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 font-mono text-primary text-sm mb-6 animate-fade-in">
            <Terminal size={16} aria-hidden="true" />
            <span>Data Scientist / AI & ML Engineer</span>
          </div>

          {/* Name */}
          <h1 className="text-display-xl font-display font-bold text-foreground mb-6 animate-fade-in delay-100">
            Sailesh G.
          </h1>

          {/* Title & positioning */}
          <h2 className="text-display-md font-display font-medium text-muted-foreground mb-8 animate-fade-in delay-200 text-balance">
            Building production-grade data pipelines, ML systems & NLP/GenAI solutions
          </h2>

          {/* Context line */}
          <p className="text-body-lg text-muted-foreground max-w-2xl mb-10 animate-fade-in delay-300">
            Currently at <span className="text-primary font-semibold">Gramener (A Straive Company)</span>, partnering with <span className="text-primary font-semibold">PIMCO</span> since 2024.
          </p>

          {/* Key stats */}
          <div className="flex flex-wrap gap-3 md:gap-4 mb-12 animate-fade-in delay-400" role="list" aria-label="Key metrics">
            <span className="stat-badge" role="listitem">60% manual effort reduced</span>
            <span className="stat-badge" role="listitem">70% faster reporting</span>
            <span className="stat-badge" role="listitem">100K+ rows validated</span>
            <span className="stat-badge" role="listitem">10K+ records/delivery</span>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-12 animate-fade-in delay-500">
            <Button
              size="lg"
              className="btn-primary group"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="btn-secondary"
              onClick={() => window.open('mailto:sailesh.g.n@gmail.com', '_blank')}
            >
              Get In Touch
            </Button>
          </div>

          {/* Social links */}
          <div className="flex gap-6 animate-fade-in delay-600" role="list" aria-label="Social links">
            <a
              href="https://linkedin.com/in/sailesh-g-567092121/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} aria-hidden="true" />
            </a>
            <a
              href="https://github.com/S41lesh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform"
              aria-label="GitHub"
            >
              <Github size={22} aria-hidden="true" />
            </a>
            <a
              href="mailto:sailesh.g.n@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform"
              aria-label="Email"
            >
              <Mail size={22} aria-hidden="true" />
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in delay-1000" aria-hidden="true">
            <div className="w-px h-16 bg-primary/30 relative">
              <div className="absolute bottom-0 left-0 w-full h-[4px] bg-primary animate-pulse-soft origin-bottom" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};