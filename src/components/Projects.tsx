import { ArrowRight, Brain, BatteryCharging, ShieldCheck } from 'lucide-react';
import { useParallaxTransform } from '@/hooks/use-scroll';

const projects = [
  {
    id: 1,
    title: 'Text Analytics & Semantic Search',
    description: 'End-to-end NLP pipeline for unstructured financial text: preprocessing, embedding generation, similarity search, and clustering. Built with Python, transformers, and vector databases for scalable semantic understanding.',
    technologies: ['Python', 'NLP', 'Embeddings', 'Semantic Search', 'Transformers', 'Vector DB', 'REST API'],
    impact: 'Processed 50K+ documents, enabling similarity matching and insight extraction from earnings reports and filings',
    featured: true,
  },
  {
    id: 2,
    title: 'Real-Time Energy Prediction & Anomaly Detection',
    description: 'Streaming ML system for power grid monitoring: LSTM-based forecasting with real-time anomaly detection, concept drift handling, and alerting. Deployed on AWS with Kubernetes orchestration.',
    technologies: ['Python', 'LSTM', 'Time Series', 'Anomaly Detection', 'AWS', 'Kubernetes', 'Docker', 'Prometheus'],
    impact: 'Reduced false positives by 40%, enabling proactive grid maintenance and cost savings',
    featured: true,
  },
  {
    id: 3,
    title: 'Explainable ML-based Software Defect Prediction',
    description: 'ML pipeline predicting software defects with full explainability: Random Forest & XGBoost models, SHAP/LIME interpretations, feature selection via RFE, and PyExplainer integration for stakeholder communication.',
    technologies: ['Python', 'Random Forest', 'XGBoost', 'SHAP', 'LIME', 'RFE', 'PyExplainer', 'Scikit-learn', 'Pandas'],
    impact: 'Improved defect prediction accuracy by 25%, providing actionable insights for development teams',
    featured: true,
  },
];

export const Projects = () => {
  const sectionParallax = useParallaxTransform(0, 25);

  return (
    <section id="projects" className="relative py-24 md:py-32" style={{ transform: `translateY(${sectionParallax}px)` }}>
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <span className="section-label">03 — Projects</span>
            <h2 className="section-title text-balance">
              Building <span className="text-gradient-accent">intelligent systems</span>
            </h2>
          </div>

          <div className="space-y-12 md:space-y-16">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                highlighted={project.featured}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({
  project,
  highlighted = false,
}: {
  project: typeof projects[0];
  highlighted?: boolean;
}) => {
  return (
    <article
      className={`
        relative group
        hover:z-20
        transition-all duration-500
        ${highlighted ? 'border-primary/20' : 'border-border/30'}
        ${highlighted ? 'shadow-elevation-2' : 'shadow-elevation-1'}
      `}
    >
      <div className="glass-card-strong p-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 gap-4">
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 flex-shrink-0">
              <div className="flex h-full w-full items-center justify-center rounded-xl bg-primary/10">
                {project.title.includes('Text') ? (
                  <Brain size={24} className="text-primary" aria-hidden="true" />
                ) : project.title.includes('Energy') ? (
                  <BatteryCharging size={24} className="text-primary" aria-hidden="true" />
                ) : (
                  <ShieldCheck size={24} className="text-primary" aria-hidden="true" />
                )}
              </div>
            </div>
            <div>
              <h3 className="text-heading-lg font-display font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-caption text-muted-foreground mb-2">
                {project.technologies.slice(0, 3).join(' • ')}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-caption text-primary/60">
            {project.featured && (
              <span className="px-2 py-0.5 bg-primary/20 text-primary text-xs font-medium rounded-full">
                Featured
              </span>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-body text-muted-foreground mb-6 line-clamp-4">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="tech-tag hover:border-primary/30 hover:text-foreground transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Impact */}
        <div className="pt-4 border-t border-border/30">
          <p className="text-caption text-foreground font-medium mb-2">
            Impact
          </p>
          <p className="text-body text-muted-foreground">
            {project.impact}
          </p>
        </div>

        {/* CTA */}
        <div className="mt-6 pt-4 border-t border-border/30">
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`/project/${project.id}`}
              className="btn-ghost link-underline"
            >
              Details
              <ArrowRight className="ml-1 h-3 w-3" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      {/* Glow effect on hover */}
      {highlighted && (
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      )}
    </article>
  );
};