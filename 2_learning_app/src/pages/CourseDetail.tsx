import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Play, Clock, Users, Star, BookOpen, Award, CheckCircle, 
  Lock, ChevronDown, ChevronUp, Share2, Heart
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { courses, lessons } from '@/data/mockData';
import { cn } from '@/lib/utils';

const CourseDetail = () => {
  const { id } = useParams();
  const course = courses.find((c) => c.id === id);
  const courseLessons = lessons.filter((l) => l.courseId === id);
  const [expandedSection, setExpandedSection] = useState<string | null>('section-1');
  const [isWishlisted, setIsWishlisted] = useState(false);

  if (!course) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Course not found</h1>
          <Link to="/courses">
            <Button>Browse Courses</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const sections = [
    {
      id: 'section-1',
      title: 'Getting Started',
      lessons: courseLessons.slice(0, 2),
    },
    {
      id: 'section-2',
      title: 'Core Concepts',
      lessons: courseLessons.slice(2, 4),
    },
    {
      id: 'section-3',
      title: 'Advanced Topics',
      lessons: courseLessons.slice(4),
    },
  ].filter((s) => s.lessons.length > 0);

  const features = [
    { icon: Clock, text: `${course.duration} of content` },
    { icon: BookOpen, text: `${course.lessons} lessons` },
    { icon: Award, text: 'Certificate of completion' },
    { icon: Users, text: 'Access to community' },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Course Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="secondary">{course.category}</Badge>
                <Badge variant="outline" className={cn(
                  course.level === 'Beginner' && 'border-success/50 text-success',
                  course.level === 'Intermediate' && 'border-warning/50 text-warning',
                  course.level === 'Advanced' && 'border-accent/50 text-accent',
                )}>
                  {course.level}
                </Badge>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>
              <p className="text-lg text-muted-foreground mb-6">{course.description}</p>

              {/* Instructor */}
              <div className="flex items-center gap-3 mb-6">
                <img
                  src={course.instructorAvatar}
                  alt={course.instructor}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm text-muted-foreground">Created by</p>
                  <p className="font-semibold">{course.instructor}</p>
                </div>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 fill-warning text-warning" />
                  <span className="font-semibold">{course.rating}</span>
                  <span className="text-muted-foreground">
                    ({course.students.toLocaleString()} students)
                  </span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  {course.duration}
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <BookOpen className="h-4 w-4" />
                  {course.lessons} lessons
                </div>
              </div>
            </div>

            {/* Sidebar Card */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-2xl shadow-xl border border-border overflow-hidden sticky top-24">
                {/* Preview Image */}
                <div className="relative aspect-video">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <Button size="lg" className="rounded-full h-16 w-16 bg-white/90 hover:bg-white text-primary">
                      <Play className="h-8 w-8 ml-1" fill="currentColor" />
                    </Button>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-bold">${course.price}</span>
                    <span className="text-muted-foreground line-through">$199.99</span>
                  </div>

                  <div className="space-y-3">
                    <Link to={`/course/${course.id}/lesson/l1`}>
                      <Button variant="hero" size="lg" className="w-full">
                        Start Learning
                      </Button>
                    </Link>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        className="flex-1"
                        onClick={() => setIsWishlisted(!isWishlisted)}
                      >
                        <Heart className={cn("h-4 w-4", isWishlisted && "fill-destructive text-destructive")} />
                        Wishlist
                      </Button>
                      <Button variant="outline" size="icon">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-border space-y-3">
                    {features.map((feature) => (
                      <div key={feature.text} className="flex items-center gap-3 text-sm">
                        <feature.icon className="h-5 w-5 text-primary" />
                        <span>{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold mb-6">Course Content</h2>
            <p className="text-muted-foreground mb-6">
              {sections.length} sections • {courseLessons.length} lessons • {course.duration} total
            </p>

            <div className="space-y-4">
              {sections.map((section) => (
                <div
                  key={section.id}
                  className="border border-border rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedSection(
                      expandedSection === section.id ? null : section.id
                    )}
                    className="w-full flex items-center justify-between p-4 bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <BookOpen className="h-5 w-5 text-primary" />
                      <span className="font-semibold">{section.title}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-muted-foreground">
                        {section.lessons.length} lessons
                      </span>
                      {expandedSection === section.id ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </div>
                  </button>

                  {expandedSection === section.id && (
                    <div className="divide-y divide-border">
                      {section.lessons.map((lesson, index) => (
                        <Link
                          key={lesson.id}
                          to={`/course/${course.id}/lesson/${lesson.id}`}
                          className="flex items-center gap-4 p-4 hover:bg-muted/30 transition-colors"
                        >
                          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium text-primary">
                            {index === 0 ? (
                              <Play className="h-4 w-4" />
                            ) : (
                              <Lock className="h-4 w-4 text-muted-foreground" />
                            )}
                          </div>
                          <div className="flex-1">
                            <p className="font-medium">{lesson.title}</p>
                            <p className="text-sm text-muted-foreground">
                              {lesson.duration}
                            </p>
                          </div>
                          {lesson.isCompleted && (
                            <CheckCircle className="h-5 w-5 text-success" />
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CourseDetail;
