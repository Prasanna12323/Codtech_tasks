import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Home, Stethoscope } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Wonderlust',
    description:
      'Full stack web development project for renting homes and rooms. Users can list properties, post reviews, and give ratings with a focus on user experience and real-world functionality.',
    icon: Home,
    tech: ['Node.js', 'Express', 'MongoDB', 'EJS', 'Bootstrap'],
    gradient: 'from-orange-400 to-red-500',
    bgGradient: 'from-orange-50 to-red-50',
  },
  {
    title: 'Holistic AI',
    description:
      'Online healthcare platform where users can book doctor appointments, order medicines online, and get AI-powered predictions for possible health issues based on symptoms.',
    icon: Stethoscope,
    tech: ['React', 'Node.js', 'AI/ML', 'MongoDB', 'Tailwind'],
    gradient: 'from-blue-400 to-indigo-500',
    bgGradient: 'from-blue-50 to-indigo-50',
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="section relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 blob blob-primary opacity-20" />
      <div className="absolute bottom-0 right-0 w-80 h-80 blob blob-accent opacity-20" />

      <div className="container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Portfolio</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in full stack development
            and creating user-centric applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              className="group relative bg-card rounded-3xl overflow-hidden shadow-medium hover:shadow-large transition-all duration-500"
            >
              {/* Project header with gradient */}
              <div className={`relative h-48 bg-gradient-to-br ${project.bgGradient} p-6 flex items-center justify-center`}>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${project.gradient} shadow-glow flex items-center justify-center`}
                >
                  <project.icon className="w-12 h-12 text-white" />
                </motion.div>

                {/* Floating decorations */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/30 animate-float" />
                <div className="absolute bottom-4 left-4 w-6 h-6 rounded-lg bg-white/20 rotate-45 animate-bounce-soft animation-delay-200" />
              </div>

              {/* Project content */}
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary text-sm font-medium text-secondary-foreground rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    className="flex-1 rounded-full hover:bg-secondary group/btn"
                  >
                    <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                    Code
                  </Button>
                  <Button className="flex-1 btn-primary-gradient rounded-full">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </div>

              {/* Hover border effect */}
              <div className={`absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-primary/20 transition-colors pointer-events-none`} />
            </motion.div>
          ))}
        </div>

        {/* View more hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground">
            More projects coming soon! Check out my{' '}
            <a
              href="https://github.com/Prasanna12323"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:underline"
            >
              GitHub
            </a>{' '}
            for more.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
