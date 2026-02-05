import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.jpg';

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{ background: 'var(--gradient-hero)' }}
    >
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 blob blob-primary animate-pulse-soft" />
      <div className="absolute bottom-20 right-10 w-96 h-96 blob blob-accent animate-float animation-delay-400" />
      <div className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full border-4 border-primary/20 animate-spin-slow" />
      <div className="absolute bottom-1/3 left-1/4 w-12 h-12 bg-accent/40 rounded-lg rotate-45 animate-bounce-soft" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6"
            >
              👋 Welcome to my portfolio
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6"
            >
              Hello, I'm{' '}
              <span className="gradient-text block">Prasanna Prakash</span>
              <span className="text-3xl sm:text-4xl lg:text-5xl">
                Full Stack Developer
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground text-lg max-w-xl mx-auto lg:mx-0 mb-8"
            >
              Engineering student in AI & Data Science, passionate about building
              scalable, user-friendly web applications with modern technologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <Button className="btn-primary-gradient rounded-full px-8 py-6 text-lg">
                Get Started
              </Button>
              <Button
                variant="outline"
                className="rounded-full px-8 py-6 text-lg border-2 hover:bg-secondary"
              >
                View Projects
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4 mt-8 justify-center lg:justify-start"
            >
              {[
                { icon: Github, href: 'https://github.com/Prasanna12323' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/prasanna-holambe-a1b281322/' },
                { icon: Mail, href: 'mailto:prasannaholambe2005@gmail.com' },
              ].map(({ icon: Icon, href }) => (
                <motion.a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-card rounded-full shadow-soft hover:shadow-medium transition-all hover:-translate-y-1"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-5 h-5 text-foreground" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-4 border-dashed border-primary/30 animate-spin-slow" style={{ padding: '20px' }} />
              
              {/* Image container */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-card shadow-large">
                <img
                  src={profilePhoto}
                  alt="Prasanna Prakash Holambe"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Experience badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -right-4 top-1/4 bg-card p-4 rounded-2xl shadow-medium"
              >
                <div className="text-center">
                  <span className="text-3xl font-bold gradient-text">2027</span>
                  <p className="text-xs text-muted-foreground">Expected<br/>Graduation</p>
                </div>
              </motion.div>

              {/* Tech badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 }}
                className="absolute -left-4 bottom-1/4 bg-card p-4 rounded-2xl shadow-medium"
              >
                <div className="text-center">
                  <span className="text-3xl font-bold gradient-text">AI/DS</span>
                  <p className="text-xs text-muted-foreground">Engineering<br/>Student</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-sm">Scroll Down</span>
            <ArrowDown className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
