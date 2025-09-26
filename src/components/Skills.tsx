import { BrainCircuit, Database, Cloud, Code } from 'lucide-react';
import { useEffect, useState } from 'react';

const skillCategories = [
  {
    title: 'Data Science & ML',
    icon: BrainCircuit,
    skills: ['Python', 'Pandas', 'TensorFlow', 'Scikit-learn', 'LSTM', 'NLP'],
    color: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['MySQL', 'MongoDB', 'Hive', 'DynamoDB', 'PostgreSQL', 'Redis'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    skills: ['AWS', 'GCP', 'Docker', 'Git', 'Firebase', 'Azure'],
    color: 'from-green-500 to-teal-500',
  },
  {
    title: 'Web & Frameworks',
    icon: Code,
    skills: ['React', 'Flask', 'Power BI', 'HTML/CSS', 'Node.js', 'FastAPI'],
    color: 'from-orange-500 to-red-500',
  },
];

export const Skills = () => {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('skills');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-gradient font-mono">&lt;skills /&gt;</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="relative group"
                  onMouseEnter={() => setHoveredCategory(index)}
                  onMouseLeave={() => setHoveredCategory(null)}
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="glass-card glass-card-hover h-full p-6 text-center">
                    <div
                      className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${category.color} p-0.5`}
                    >
                      <div className="w-full h-full bg-background rounded-full flex items-center justify-center">
                        <Icon size={32} className="text-foreground" />
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-foreground mb-4">
                      {category.title}
                    </h3>

                    <div className="space-y-2">
                      {category.skills.map((skill, i) => (
                        <div
                          key={i}
                          className="relative"
                          style={{
                            animationDelay: `${(index * 100) + (i * 50)}ms`,
                          }}
                        >
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">{skill}</span>
                          </div>
                          {isVisible && (
                            <div className="mt-1 h-1 bg-muted rounded-full overflow-hidden">
                              <div
                                className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                                style={{
                                  width: `${85 + Math.random() * 15}%`,
                                  transitionDelay: `${(index * 100) + (i * 50)}ms`,
                                }}
                              />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {hoveredCategory === index && (
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-10 blur-xl -z-10`} />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};