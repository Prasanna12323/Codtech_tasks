import { Link } from 'react-router-dom';
import { Star, Clock, Users, BookOpen } from 'lucide-react';
import { Course } from '@/data/mockData';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface CourseCardProps {
  course: Course;
  className?: string;
}

const CourseCard = ({ course, className }: CourseCardProps) => {
  const levelColors = {
    Beginner: 'bg-success/10 text-success border-success/20',
    Intermediate: 'bg-warning/10 text-warning border-warning/20',
    Advanced: 'bg-accent/10 text-accent border-accent/20',
  };

  return (
    <Link to={`/course/${course.id}`}>
      <article
        className={cn(
          "group bg-card rounded-xl overflow-hidden border border-border/50 card-hover",
          className
        )}
      >
        {/* Thumbnail */}
        <div className="relative aspect-video overflow-hidden">
          <img
            src={course.thumbnail}
            alt={course.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          {course.isFeatured && (
            <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground border-0">
              Featured
            </Badge>
          )}
          <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <Badge variant="secondary" className="bg-black/50 text-white border-0 backdrop-blur-sm">
              {course.category}
            </Badge>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Level Badge */}
          <Badge
            variant="outline"
            className={cn("mb-3 text-xs", levelColors[course.level])}
          >
            {course.level}
          </Badge>

          {/* Title */}
          <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {course.title}
          </h3>

          {/* Instructor */}
          <div className="flex items-center gap-2 mb-3">
            <img
              src={course.instructorAvatar}
              alt={course.instructor}
              className="w-6 h-6 rounded-full object-cover"
            />
            <span className="text-sm text-muted-foreground">{course.instructor}</span>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <BookOpen className="h-4 w-4" />
              <span>{course.lessons} lessons</span>
            </div>
          </div>

          {/* Rating & Price */}
          <div className="flex items-center justify-between pt-3 border-t border-border">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-warning text-warning" />
                <span className="font-medium">{course.rating}</span>
              </div>
              <span className="text-sm text-muted-foreground">
                ({course.students.toLocaleString()} students)
              </span>
            </div>
            <span className="text-lg font-bold text-primary">
              ${course.price}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default CourseCard;
