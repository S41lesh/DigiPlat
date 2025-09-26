import { Mail, MessageSquare, Send, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export const Contact = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient font-mono">&lt;contact /&gt;</span>
          </h2>

          <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Get In Touch
          </h3>

          <div className="glass-card p-8 md:p-12 mb-8">
            <MessageSquare size={48} className="mx-auto mb-6 text-primary" />
            
            <p className="text-lg text-muted-foreground mb-8">
              I'm currently seeking new opportunities and am open to collaboration. 
              Whether you have a question or just want to connect, my inbox is always open. 
              Let's create something amazing together!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="btn-glow group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => window.open('mailto:sailesh.g.n@gmail.com', '_blank')}
              >
                <Mail className="mr-2 h-5 w-5" />
                Say Hello
                <Send className={`ml-2 h-4 w-4 transition-transform ${isHovered ? 'translate-x-1' : ''}`} />
              </Button>
            </div>

            <div className="mt-8 pt-8 border-t border-border/50">
              <p className="text-sm text-muted-foreground mb-4">Or connect with me on</p>
              <div className="flex justify-center gap-6">
                <a
                  href="https://linkedin.com/in/sailesh-g-567092121/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
                >
                  GitHub
                </a>
                <a
                  href="mailto:sailesh.g.n@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
                >
                  Email
                </a>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="flex justify-center gap-2 text-primary/30">
            <Sparkles size={20} className="animate-pulse" />
            <Sparkles size={16} className="animate-pulse animation-delay-200" />
            <Sparkles size={20} className="animate-pulse animation-delay-400" />
          </div>
        </div>
      </div>
    </section>
  );
};