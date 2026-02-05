import { Link } from 'react-router-dom';
import { ArrowRight, Play, Users, BookOpen, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const stats = [
    { icon: Users, value: '250K+', label: 'Active Learners' },
    { icon: BookOpen, value: '1,200+', label: 'Courses' },
    { icon: Award, value: '98%', label: 'Success Rate' },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="absolute top-20 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-slow" />
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              New courses added weekly
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Unlock Your Potential with{' '}
              <span className="gradient-text">Online Learning</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Join millions of learners worldwide. Access expert-led courses, 
              interactive quizzes, and track your progress—all in one place.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Link to="/courses">
                <Button variant="hero" size="xl" className="w-full sm:w-auto">
                  Explore Courses
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" size="xl" className="w-full sm:w-auto gap-2">
                <Play className="h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                    <stat.icon className="h-5 w-5 text-primary" />
                    <span className="text-2xl md:text-3xl font-bold">{stat.value}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-up">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop"
                alt="Students learning together"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-xl border border-border animate-float">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full gradient-success flex items-center justify-center">
                  <Award className="h-6 w-6 text-success-foreground" />
                </div>
                <div>
                  <p className="font-semibold">Certificate Ready</p>
                  <p className="text-sm text-muted-foreground">Upon completion</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 bg-card p-4 rounded-xl shadow-xl border border-border animate-float" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop" className="w-8 h-8 rounded-full border-2 border-card" alt="" />
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop" className="w-8 h-8 rounded-full border-2 border-card" alt="" />
                  <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop" className="w-8 h-8 rounded-full border-2 border-card" alt="" />
                </div>
                <div>
                  <p className="font-semibold text-sm">50K+ Reviews</p>
                  <div className="flex text-warning">
                    {'★★★★★'.split('').map((star, i) => (
                      <span key={i} className="text-xs">{star}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
