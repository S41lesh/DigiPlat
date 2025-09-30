import { Github, ExternalLink, Folder } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const projects = [
  {
    title: 'Smart Meter Energy Monitoring',
    description: 'End-to-end IoT system for real-time power monitoring, featuring an AWS pipeline and LSTM-based anomaly detection with Sagemaker.',
    technologies: ['IoT', 'AWS', 'Sagemaker', 'LSTM', 'Python'],
    github: 'https://github.com/S41lesh/Smart-Energy-Monitoring-System--NNDL-Model',
    live: 'https://github.com/S41lesh/Smart-Energy-Monitoring-System--NNDL-Model',
    featured: true,
  },
  {
    title: 'Cloud-Native MERN App',
    description: 'Scalable MERN stack application deployed on Azure, using Functions, VMs, and CosmosDB for a highly available, low-latency platform.',
    technologies: ['MERN', 'Azure', 'CosmosDB', 'Node.js', 'React'],
    featured: true,
  },
  {
    title: 'Faculty Analytics Dashboard',
    description: 'Full-stack Flask dashboard providing real-time metrics and reporting on faculty workload, with a secure authentication system.',
    technologies: ['Flask', 'Python', 'MySQL', 'Chart.js', 'Bootstrap'],
    github: '#',
    live: '#',
    featured: true,
  },
];

export const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-gradient font-mono">&lt;projects /&gt;</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className={cn(
                    'glass-card h-full p-6 transition-all duration-300',
                    hoveredIndex === index && 'scale-105 border-primary/50 shadow-glow'
                  )}
                >
                  {/* Project header */}
                  <div className="flex justify-between items-start mb-4">
                    <Folder
                      size={40}
                      className={cn(
                        'text-primary transition-all duration-300',
                        hoveredIndex === index && 'text-primary-glow'
                      )}
                    />
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="GitHub"
                      >
                        <Github size={20} />
                      </a>
                      <a
                        href={project.live}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>

                  {/* Project content */}
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs font-mono px-2 py-1 rounded bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover glow effect */}
                {hoveredIndex === index && (
                  <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent blur-xl -z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};