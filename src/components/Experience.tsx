import { Calendar, Building2, ChevronRight } from 'lucide-react';
import { useParallaxTransform } from '@/hooks/use-scroll';

const experiences = [
  {
    title: 'Data Scientist',
    company: 'Gramener (A Straive Company)',
    client: 'PIMCO',
    period: '2024 – Present',
    achievements: [
      'Build production-grade Python/SQL data pipelines and analytical systems for large-scale financial datasets, processing 10K+ records per delivery and reducing manual effort by 60%',
      'Perform EDA, hypothesis testing, statistical validation, feature engineering, predictive modeling, and similarity matching on financial data',
      'Build automated data-quality, anomaly-detection, validation, and reporting workflows, reducing reporting turnaround time by 70%',
      'Build a Data Quality & Governance Platform POC using semantic/rule-based validation, SQL pipelines, and REST APIs for 100K+ row datasets — approved by the client',
    ],
  },
];

export const Experience = () => {
  const parallaxY = useParallaxTransform(0, 30);
  const timelineParallax = useParallaxTransform(6, 20, true);

  return (
    <section id="experience" className="relative py-24 md:py-32" style={{ transform: `translateY(${parallaxY}px)` }}>
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <span className="section-label">02 — Experience</span>
            <h2 className="section-title text-balance">
              Production impact at <span className="text-gradient-primary">scale</span>
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div
              className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/60 via-primary/20 to-transparent hidden md:block"
              style={{ transform: `translateX(${timelineParallax}px)` }}
              aria-hidden="true"
            />

            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 md:ml-16">
                {/* Timeline dot */}
                <div
                  className="absolute -left-[26px] w-5 h-5 bg-primary rounded-full shadow-glow border-2 border-background hidden md:block"
                  aria-hidden="true"
                />

                <div className="glass-card glass-card-hover p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-3">
                    <div>
                      <h3 className="text-heading-lg font-display font-bold text-foreground mb-1">
                        {exp.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 text-caption text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <Building2 size={14} className="text-primary" aria-hidden="true" />
                          {exp.company}
                        </span>
                        <span className="hidden sm:inline text-border">·</span>
                        <span className="flex items-center gap-1.5">
                          <span className="text-primary font-medium">{exp.client}</span>
                        </span>
                        <span className="hidden sm:inline text-border">·</span>
                        <span className="flex items-center gap-1.5">
                          <Calendar size={14} className="text-primary" aria-hidden="true" />
                          {exp.period}
                        </span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-4" role="list">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex gap-3 group">
                        <ChevronRight
                          size={20}
                          className="text-primary flex-shrink-0 mt-0.5 transition-transform group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                        <span className="text-caption text-muted-foreground leading-relaxed">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};