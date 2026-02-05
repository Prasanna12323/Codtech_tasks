import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero opacity-90" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0tNiA2aC0ydi00aDJ2NHptMC02aC0ydi00aDJ2NHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-6 backdrop-blur-sm">
            <Sparkles className="h-4 w-4" />
            Start your learning journey today
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Skills?
          </h2>
          
          <p className="text-lg md:text-xl text-white/80 mb-8">
            Get unlimited access to all courses, exclusive content, and personalized learning paths. 
            Start with a free trial today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="xl" className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 shadow-xl">
                Start Free Trial
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/courses">
              <Button size="xl" variant="outline" className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10">
                Browse Courses
              </Button>
            </Link>
          </div>
          
          <p className="text-white/60 text-sm mt-6">
            No credit card required • Cancel anytime • 7-day free trial
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
