import { Star, Quote } from 'lucide-react';

const TestimonialSection = () => {
  const testimonials = [
    {
      name: 'Amanda Foster',
      role: 'Software Developer at Google',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      content: 'EduStream transformed my career. The web development bootcamp gave me the skills I needed to land my dream job at a top tech company.',
      rating: 5,
    },
    {
      name: 'David Kim',
      role: 'Freelance Designer',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      content: 'The UI/UX design courses are incredibly comprehensive. I went from beginner to confidently working with clients in just 3 months.',
      rating: 5,
    },
    {
      name: 'Rachel Martinez',
      role: 'Data Analyst at Amazon',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
      content: 'The data science track helped me transition from marketing to analytics. The hands-on projects were invaluable for building my portfolio.',
      rating: 5,
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            What Our Students Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join thousands of satisfied learners who have transformed their careers
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="relative p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/10 group-hover:text-primary/20 transition-colors" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-warning text-warning" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
