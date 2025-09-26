import { User, Gamepad2, Mountain } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-gradient font-mono">&lt;about /&gt;</span>
          </h2>

          <div className="glass-card glass-card-hover p-8 md:p-12">
            <div className="grid md:grid-cols-[2fr,1fr] gap-8">
              <div className="space-y-6 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  Hello! I'm Sailesh, a data scientist driven by the challenge of finding meaning in vast datasets. 
                  My journey started at <span className="text-primary font-semibold">Amrita Vishwa Vidyapeetham</span> and 
                  led me to <span className="text-primary font-semibold">Gramener</span>, where I dive deep into creating 
                  robust data systems, cloud automation, and full-stack solutions.
                </p>
                
                <p className="text-lg leading-relaxed">
                  My passion lies in the entire data lifecycle: from architecting efficient microservices to deploying 
                  machine learning models that uncover hidden patterns. I've successfully delivered projects in 
                  <span className="text-primary font-semibold"> IoT anomaly detection, MERN stack applications on Azure, 
                  and real-time faculty dashboards.</span>
                </p>

                <div className="pt-4">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Beyond the Code</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Gamepad2 className="text-primary" size={20} />
                      <span>Virtual world explorer</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Mountain className="text-primary" size={20} />
                      <span>Trekking enthusiast</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="glass-card p-6 text-center">
                  <User size={80} className="mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-bold text-foreground mb-2">Data Scientist</h3>
                  <p className="text-sm text-muted-foreground">4+ Years Experience</p>
                  
                  <div className="mt-6 space-y-2">
                    <div className="text-sm">
                      <span className="text-primary font-mono">10k+</span>
                      <span className="text-muted-foreground ml-2">Records Processed</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-primary font-mono">95%</span>
                      <span className="text-muted-foreground ml-2">Data Accuracy</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-primary font-mono">60%</span>
                      <span className="text-muted-foreground ml-2">Effort Reduced</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};