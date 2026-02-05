import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Target, Code2, Sparkles } from 'lucide-react';

const highlights = [
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'Pursuing B.E. in Artificial Intelligence & Data Science',
  },
  {
    icon: Target,
    title: 'Focus',
    description: 'Full Stack & Frontend Development',
  },
  {
    icon: Code2,
    title: 'Passion',
    description: 'Building real-world web applications',
  },
  {
    icon: Sparkles,
    title: 'Vision',
    description: 'Creating scalable, user-friendly solutions',
  },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-secondary/50 to-transparent" />

      <div className="container relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - decorative */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main card */}
              <div className="bg-card rounded-3xl p-8 shadow-large">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <Code2 className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold">Designing Solutions</h3>
                      <p className="text-muted-foreground">Not Just Code</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {[
                      { label: 'Full Stack Development', value: 85 },
                      { label: 'Frontend & UI/UX', value: 90 },
                      { label: 'AI Integration', value: 75 },
                    ].map((skill) => (
                      <div key={skill.label}>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">{skill.label}</span>
                          <span className="text-sm text-primary font-semibold">{skill.value}%</span>
                        </div>
                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.value}%` } : {}}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="h-full rounded-full"
                            style={{ background: 'var(--gradient-primary)' }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -top-8 -right-8 w-20 h-20 bg-accent rounded-2xl rotate-12 shadow-medium flex items-center justify-center"
              >
                <span className="text-3xl">🚀</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 3, delay: 0.5 }}
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-primary rounded-full shadow-glow flex items-center justify-center"
              >
                <span className="text-2xl">💻</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Me</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-6">
              Building Digital Experiences with{' '}
              <span className="gradient-text">Passion & Precision</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-6">
              I'm <strong className="text-foreground">Prasanna Prakash Holambe</strong>, an engineering 
              student specializing in Artificial Intelligence & Data Science. My passion lies in 
              creating full stack and frontend applications that solve real-world problems.
            </p>

            <p className="text-muted-foreground mb-8">
              With a strong foundation in modern web technologies, I focus on building scalable, 
              user-friendly, and visually engaging applications. I believe in writing clean code 
              and creating experiences that users love.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-card rounded-xl shadow-soft hover:shadow-medium transition-shadow"
                >
                  <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
