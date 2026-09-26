import { Brain, Award, GraduationCap, Wrench, Sparkles } from 'lucide-react';
import { useParallaxTransform } from '@/hooks/use-scroll';

const highlights = [
  { icon: GraduationCap, label: 'B.Tech Computer Science', value: 'Amrita Vishwa Vidyapeetham, 2020–2024' },
  { icon: Award, label: 'Magician Analyst Award', value: '2026 Q1' },
  { icon: Sparkles, label: 'AI-assisted development', value: 'Claude & GitHub Copilot' },
];

export const About = () => {
  const parallaxY = useParallaxTransform(0, 20); // Subtle Y movement
  const sidePanelParallax = useParallaxTransform(10, 30, true); // Side panel moves opposite

  return (
    <section id="about" className="relative py-24 md:py-32" style={{ transform: `translateY(${parallaxY}px)` }}>
      <div className="section-container" style={{ transform: `translateY(${parallaxY}px)` }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <span className="section-label">01 — About</span>
            <h2 className="section-title text-balance">
              Data scientist by craft, <span className="text-gradient-primary">systems thinker</span> by instinct
            </h2>
          </div>

          <div className="grid lg:grid-cols-[1.4fr,1fr] gap-12 items-start">
            {/* Narrative */}
            <div className="space-y-6 text-body text-muted-foreground">
              <p className="text-body-lg leading-relaxed">
                I'm Sailesh, a data scientist who finds the signal in financial datasets. My work sits at the
                intersection of <span className="text-foreground font-medium">statistical rigor</span> and
                <span className="text-foreground font-medium">production engineering</span> — turning hypotheses
                into pipelines that run reliably at scale.
              </p>
              <p className="leading-relaxed">
                Since 2024, I've been at <span className="text-primary font-semibold">Gramener (A Straive Company)</span>,
                partnering with <span className="text-primary font-semibold">PIMCO</span> to build analytical systems
                over large-scale financial data. My days span EDA and hypothesis testing, statistical validation,
                feature engineering, predictive modeling, and similarity matching — wrapped in automated
                data-quality, anomaly-detection, validation, and reporting workflows.
              </p>
              <p className="leading-relaxed">
                I care about what actually ships. That means Python/SQL pipelines that process 10K+ records per
                delivery, semantic and rule-based validation for 100K+ row datasets, and ML models that are
                explainable, not just accurate. When I'm not building, I'm pushing the frontier of
                AI-assisted development with <span className="text-foreground font-medium">Claude and GitHub Copilot</span>.
              </p>
            </div>

            {/* Side panel */}
            <div className="space-y-6" style={{ transform: `translateY(${sidePanelParallax}px) translateX(-10px)` }}>
              <div className="glass-card-strong p-6">
                <h3 className="font-display font-semibold text-foreground mb-5 flex items-center gap-2">
                  <Wrench size={18} className="text-primary" aria-hidden="true" />
                  What I focus on
                </h3>
                <ul className="space-y-3 text-body-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    Production-grade Python/SQL data pipelines
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    NLP, embeddings, semantic search & prompt engineering
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    Explainable ML: SHAP, LIME, feature selection
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    Data quality, governance & anomaly detection
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {highlights.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="glass-card p-4 flex items-center gap-4 transition-all duration-300 hover:border-primary/30 hover:shadow-elevation-1"
                    >
                      <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon size={22} className="text-primary" aria-hidden="true" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-foreground">{item.label}</div>
                        <div className="text-caption text-muted-foreground">{item.value}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};