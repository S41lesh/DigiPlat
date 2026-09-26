import { BrainCircuit, Database, Cloud, Code, Gauge, Cog, Bot } from 'lucide-react';
import { useParallaxTransform } from '@/hooks/use-scroll';

const skillCategories = [
  {
    title: 'Core ML & Data Science',
    icon: BrainCircuit,
    skills: ['Python', 'SQL', 'NumPy', 'Pandas', 'Scikit-learn', 'TensorFlow', 'PyTorch', 'LSTM', 'Random Forest', 'XGBoost'],
    color: 'from-cyan-500 to-blue-500',
    count: 30,
  },
  {
    title: 'NLP & GenAI',
    icon: Bot,
    skills: ['NLP', 'LLMs', 'Embeddings', 'Semantic Search', 'Text Analytics', 'Prompt Engineering', 'LangChain'],
    color: 'from-emerald-500 to-teal-500',
    count: 25,
  },
  {
    title: 'Data Engineering',
    icon: Database,
    skills: ['SQL', 'Hive', 'PostgreSQL', 'MongoDB', 'Redis', 'PySpark', 'SQLAlchemy'],
    color: 'from-purple-500 to-pink-500',
    count: 20,
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    skills: ['AWS', 'GCP', 'Snowflake', 'Docker', 'Kubernetes', 'Git', 'CI/CD'],
    color: 'from-green-500 to-emerald-500',
    count: 22,
  },
  {
    title: 'AI-Assisted Dev',
    icon: Cog,
    skills: ['Claude', 'GitHub Copilot', 'GitHub Actions', 'Jupyter', 'VS Code', 'Docker'],
    color: 'from-orange-500 to-amber-500',
    count: 18,
  },
  {
    title: 'Visualization & BI',
    icon: Gauge,
    skills: ['Power BI', 'Plotly', 'Matplotlib', 'Seaborn', 'Dashboarding', 'Tableau'],
    color: 'from-red-500 to-rose-500',
    count: 15,
  },
];

export const Skills = () => {
  const sectionParallax = useParallaxTransform(0, 20);

  return (
    <section id="skills" className="relative py-24 md:py-32" style={{ transform: `translateY(${sectionParallax}px)` }}>
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <span className="section-label">04 — Skills & Expertise</span>
            <h2 className="section-title text-balance">
              Technical <span className="text-gradient-primary">capabilities</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <SkillCard
                  key={index}
                  category={category}
                  index={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({
  category,
  index,
}: {
  category: typeof skillCategories[0];
  index: number;
}) => {
  const Icon = category.icon;
  return (
    <div
      className="group relative h-full"
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      <div className="glass-card h-full p-6 text-center transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-elevation-2">
        {/* Header */}
        <div className="mb-6">
          <div
            className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${category.color} p-0.5 transition-all duration-300 group-hover:scale-110`}
          >
            <div className="w-full h-full bg-card rounded-[inherit] flex items-center justify-center">
              <Icon size={32} className="text-foreground" aria-hidden="true" />
            </div>
          </div>
          <h3 className="text-lg font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
            {category.title}
          </h3>
          <div className="flex justify-center items-center gap-2 text-caption text-muted-foreground">
            <span>{category.count}+</span>
            <span className="text-border">•</span>
            <span>skills</span>
          </div>
        </div>

        {/* Skills list with hover preview */}
        <div className="space-y-3">
          {category.skills.slice(0, 5).map((skill, i) => (
            <div
              key={i}
              className="relative overflow-hidden"
              style={{
                transitionDelay: `${(index * 100) + (i * 50)}ms`,
              }}
            >
              <div className="flex items-center justify-between text-caption">
                <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                  {skill}
                </span>
                <div className="ml-2 h-1 bg-muted rounded-full w-16 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{
                      width: category.skills.length === 5 ? `${85 + Math.random() * 15}%` : `${90 + Math.random() * 10}%`,
                      transitionDelay: `${(index * 100) + (i * 50)}ms`,
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
          {category.skills.length > 5 && (
            <div className="text-caption text-primary/60 font-medium mt-2">
              +{category.skills.length - 5} more
            </div>
          )}
        </div>

        {/* Hover glow */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`}
        />
      </div>
    </div>
  );
};