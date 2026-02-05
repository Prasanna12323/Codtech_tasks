import { Link } from 'react-router-dom';
import { Code, Palette, BarChart3, Megaphone, Camera, Briefcase, Music, Heart } from 'lucide-react';

const CategorySection = () => {
  const categories = [
    { icon: Code, name: 'Development', count: 320, color: 'bg-blue-500/10 text-blue-500' },
    { icon: Palette, name: 'Design', count: 180, color: 'bg-pink-500/10 text-pink-500' },
    { icon: BarChart3, name: 'Data Science', count: 145, color: 'bg-green-500/10 text-green-500' },
    { icon: Megaphone, name: 'Marketing', count: 98, color: 'bg-orange-500/10 text-orange-500' },
    { icon: Camera, name: 'Photography', count: 76, color: 'bg-purple-500/10 text-purple-500' },
    { icon: Briefcase, name: 'Business', count: 210, color: 'bg-yellow-500/10 text-yellow-500' },
    { icon: Music, name: 'Music', count: 54, color: 'bg-red-500/10 text-red-500' },
    { icon: Heart, name: 'Health', count: 88, color: 'bg-teal-500/10 text-teal-500' },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Explore Categories
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Browse our wide range of topics and find the perfect course for you
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <Link
              key={category.name}
              to={`/courses?category=${category.name}`}
              className="group p-6 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className={`w-14 h-14 rounded-xl ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <category.icon className="h-7 w-7" />
              </div>
              <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                {category.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {category.count} courses
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
