import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skills = [
  {
    name: 'JavaScript',
    icon: '⚡',
    color: 'from-yellow-400 to-yellow-600',
    description: 'ES6+, DOM, Async',
  },
  {
    name: 'React',
    icon: '⚛️',
    color: 'from-cyan-400 to-blue-500',
    description: 'Hooks, Context, Router',
  },
  {
    name: 'Node.js',
    icon: '🟢',
    color: 'from-green-400 to-green-600',
    description: 'Express, APIs, Auth',
  },
  {
    name: 'Databases',
    icon: '🗄️',
    color: 'from-purple-400 to-purple-600',
    description: 'MongoDB, SQL',
  },
  {
    name: 'GitHub',
    icon: '🐙',
    color: 'from-gray-600 to-gray-800',
    description: 'Version Control, CI/CD',
  },
  {
    name: 'Bootstrap',
    icon: '🅱️',
    color: 'from-violet-500 to-purple-600',
    description: 'Responsive Design',
  },
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="section bg-secondary/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full border-2 border-primary/20 animate-spin-slow" />
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-accent/20 rounded-2xl rotate-45 animate-float" />

      <div className="container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">My Skills</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
            Technologies I <span className="gradient-text">Work With</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm constantly learning and expanding my skill set. Here are the core technologies
            I use to bring ideas to life.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 md:grid-cols-3 gap-6"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-card rounded-2xl p-6 shadow-soft hover:shadow-large transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-5 bg-gradient-to-br ${skill.color} transition-opacity duration-300`}
              />

              <div className="relative z-10">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-1">
                  {skill.name}
                </h3>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </div>

              {/* Decorative corner */}
              <div
                className={`absolute -bottom-2 -right-2 w-16 h-16 rounded-tl-3xl bg-gradient-to-br ${skill.color} opacity-10 group-hover:opacity-20 transition-opacity`}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Additional skills list */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {['HTML5', 'CSS3', 'Tailwind CSS', 'TypeScript', 'REST APIs', 'Git', 'Responsive Design', 'UI/UX'].map(
            (skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-card rounded-full text-sm font-medium text-muted-foreground hover:text-primary hover:shadow-soft transition-all cursor-default"
              >
                {skill}
              </span>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
};
