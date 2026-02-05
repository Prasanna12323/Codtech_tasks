import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CourseCard from '@/components/courses/CourseCard';
import { courses } from '@/data/mockData';

const FeaturedCourses = () => {
  const featuredCourses = courses.filter((course) => course.isFeatured);

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Featured Courses
            </h2>
            <p className="text-muted-foreground text-lg">
              Hand-picked courses to help you achieve your goals
            </p>
          </div>
          <Link to="/courses">
            <Button variant="ghost" className="group">
              View All Courses
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCourses.map((course, index) => (
            <div
              key={course.id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CourseCard course={course} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
