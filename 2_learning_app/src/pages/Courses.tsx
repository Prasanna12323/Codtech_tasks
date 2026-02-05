import { useState } from 'react';
import { Search, Filter, ChevronDown } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import CourseCard from '@/components/courses/CourseCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { courses, categories } from '@/data/mockData';
import { cn } from '@/lib/utils';

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const levels = ['Beginner', 'Intermediate', 'Advanced'];

  const filteredCourses = courses.filter((course) => {
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesLevel = !selectedLevel || course.level === selectedLevel;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesLevel && matchesSearch;
  });

  return (
    <Layout>
      <div className="bg-muted/30">
        {/* Header */}
        <section className="py-12 border-b border-border">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Explore Courses</h1>
            <p className="text-muted-foreground text-lg">
              Discover {courses.length}+ courses taught by industry experts
            </p>
          </div>
        </section>

        {/* Filters & Search */}
        <section className="py-6 border-b border-border bg-card sticky top-16 z-40">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              {/* Search */}
              <div className="relative w-full md:w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search courses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Filter Toggle (Mobile) */}
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden w-full"
              >
                <Filter className="h-4 w-4 mr-2" />
                Filters
                <ChevronDown className={cn("h-4 w-4 ml-auto transition-transform", showFilters && "rotate-180")} />
              </Button>

              {/* Categories (Desktop) */}
              <div className="hidden md:flex items-center gap-2 flex-wrap">
                {categories.map((category) => (
                  <Badge
                    key={category}
                    variant={selectedCategory === category ? 'default' : 'outline'}
                    className={cn(
                      "cursor-pointer transition-all hover:scale-105",
                      selectedCategory === category && "bg-primary"
                    )}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Mobile Filters */}
            {showFilters && (
              <div className="mt-4 pt-4 border-t border-border md:hidden animate-slide-up">
                <p className="text-sm font-medium mb-2">Categories</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {categories.map((category) => (
                    <Badge
                      key={category}
                      variant={selectedCategory === category ? 'default' : 'outline'}
                      className="cursor-pointer"
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </Badge>
                  ))}
                </div>
                <p className="text-sm font-medium mb-2">Level</p>
                <div className="flex flex-wrap gap-2">
                  {levels.map((level) => (
                    <Badge
                      key={level}
                      variant={selectedLevel === level ? 'default' : 'outline'}
                      className="cursor-pointer"
                      onClick={() => setSelectedLevel(selectedLevel === level ? null : level)}
                    >
                      {level}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Course Grid */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            {/* Results Count */}
            <p className="text-muted-foreground mb-6">
              Showing {filteredCourses.length} of {courses.length} courses
            </p>

            {/* Grid */}
            {filteredCourses.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCourses.map((course, index) => (
                  <div
                    key={course.id}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <CourseCard course={course} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-2xl font-semibold mb-2">No courses found</p>
                <p className="text-muted-foreground">
                  Try adjusting your filters or search query
                </p>
              </div>
            )}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Courses;
