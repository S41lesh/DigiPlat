import { Mail, MessageSquare, Send, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useParallaxTransform } from '@/hooks/use-scroll';

export const Contact = () => {
  const [isHovered, setIsHovered] = useState(false);
  const sectionParallax = useParallaxTransform(0, 15);
  const sparklesParallax = useParallaxTransform(20, 40, true);

  return (
    <section id="contact" className="relative py-24 md:py-32" style={{ transform: `translateY(${sectionParallax}px)` }}>
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-heading-lg font-display font-bold mb-6 text-balance">
            Let's build something <span className="text-gradient-accent">together</span>
          </h2>

          <div className="glass-card-strong p-8 md:p-12 mb-12">
            <MessageSquare size={48} className="mx-auto mb-6 text-primary" aria-hidden="true" />

            <p className="text-body-lg text-muted-foreground mb-8">
              I'm currently open to new opportunities and exciting collaborations. Whether you have a question, a project idea,
              or just want to connect — my inbox is always open.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                size="lg"
                className="btn-primary group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => window.open('mailto:sailesh.g.n@gmail.com?subject=Hello%20from%20portfolio', '_blank')}
              >
                <Mail className="mr-2 h-5 w-5" aria-hidden="true" />
                Say Hello
                <Send className={`ml-2 h-4 w-4 transition-transform ${isHovered ? 'translate-x-1' : ''}`} aria-hidden="true" />
              </Button>
            </div>

            <div className="pt-8 border-t border-border/50">
              <p className="text-caption text-muted-foreground mb-4">Or connect with me on</p>
              <div className="flex justify-center gap-8">
                <a
                  href="https://linkedin.com/in/sailesh-g-567092121/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
                  aria-label="LinkedIn"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/S41lesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
                  aria-label="GitHub"
                >
                  GitHub
                </a>
                <a
                  href="mailto:sailesh.g.n@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
                  aria-label="Email"
                >
                  Email
                </a>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="flex justify-center gap-2 text-primary/30" aria-hidden="true">
            <Sparkles size={20} className="animate-pulse" />
            <Sparkles size={16} className="animate-pulse animation-delay-200" />
            <Sparkles size={20} className="animate-pulse animation-delay-400" />
          </div>
        </div>
      </div>
    </section>
  );
};