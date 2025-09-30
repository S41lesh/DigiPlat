import { Calendar, Building2, ChevronRight } from 'lucide-react';

const experiences = [
  {
    title: 'Data Scientist',
    company: 'Gramener',
    period: '2024 - Present',
    achievements: [
      'Architected Python microservices for processing 10k+ portfolio records, boosting data accuracy to 95% and cutting manual effort by 60%',
      'Developed a fuzzy matching pipeline with Rapid Fuzz, achieving 90%+ precision in de-duplicating entities and enhancing data quality KPIs',
      'Built a geospatial engine using Haversine logic to tag 500k+ GPS points, enriching datasets for traffic analysis',
      'Automated a critical Excel reporting framework, slashing delivery times by 70% and embedding a full audit trail for client QC',
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-gradient font-mono">&lt;experience /&gt;</span>
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 ml-16">
                {/* Timeline dot */}
                <div className="absolute -left-[52px] w-4 h-4 bg-primary rounded-full shadow-glow" />
                
                <div className="glass-card glass-card-hover p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-4 text-muted-foreground">
                        <span className="flex items-center gap-2">
                          <Building2 size={16} className="text-primary" />
                          <span className="text-primary font-semibold">{exp.company}</span>
                        </span>
                        <span className="flex items-center gap-2">
                          <Calendar size={16} />
                          {exp.period}
                        </span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex gap-3">
                        <ChevronRight size={20} className="text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground leading-relaxed">
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