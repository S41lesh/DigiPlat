import { useEffect, useState } from 'react';
import { ArrowRight, Github, Linkedin, Mail, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "I build things with data.";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(timer);
      clearInterval(cursorTimer);
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative py-20">
      <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-primary font-mono text-sm mb-6 animate-fade-in">
            <Terminal size={16} />
            <span>Hi, my name is</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 animate-fade-in animation-delay-200">
            <span className="text-gradient block">Sailesh G.</span>
          </h1>

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-muted-foreground mb-8 animate-fade-in animation-delay-400">
            {text}
            <span className={`inline-block w-1 h-8 md:h-12 bg-primary ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`} />
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 animate-fade-in animation-delay-600">
            I'm a data scientist specializing in building intelligent systems and transforming complex data into actionable insights. 
            Currently creating scalable data pipelines and ML models at{' '}
            <span className="text-primary font-semibold">Gramener</span>.
          </p>

          <div className="flex flex-wrap gap-4 mb-12 animate-fade-in animation-delay-800">
            <Button
              size="lg"
              className="btn-glow group"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/30 hover:bg-primary/10"
              onClick={() => window.open('mailto:sailesh.g.n@gmail.com', '_blank')}
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex gap-6 animate-fade-in animation-delay-1000">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/sailesh-g-567092121/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:sailesh.g.n@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 right-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-float animation-delay-2000" />
      </div>
    </section>
  );
};