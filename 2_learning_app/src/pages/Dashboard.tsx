import { Link } from 'react-router-dom';
import { 
  BookOpen, Clock, Award, TrendingUp, Play, ChevronRight,
  BarChart3, Target, Calendar, Star
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { courses, userProgress } from '@/data/mockData';

const Dashboard = () => {
  const enrolledCourses = courses.filter((course) =>
    userProgress.some((p) => p.courseId === course.id)
  );

  const totalLessonsCompleted = userProgress.reduce((acc, p) => acc + p.lessonsCompleted, 0);
  const totalQuizzesTaken = userProgress.reduce((acc, p) => acc + p.quizScores.length, 0);
  const averageScore = userProgress.flatMap((p) => p.quizScores).length > 0
    ? Math.round(
        userProgress.flatMap((p) => p.quizScores).reduce((acc, q) => acc + (q.score / q.total) * 100, 0) /
        userProgress.flatMap((p) => p.quizScores).length
      )
    : 0;

  const stats = [
    { icon: BookOpen, label: 'Courses Enrolled', value: enrolledCourses.length, color: 'text-primary' },
    { icon: Target, label: 'Lessons Completed', value: totalLessonsCompleted, color: 'text-success' },
    { icon: BarChart3, label: 'Quizzes Taken', value: totalQuizzesTaken, color: 'text-accent' },
    { icon: Star, label: 'Average Score', value: `${averageScore}%`, color: 'text-warning' },
  ];

  const recentActivity = [
    { type: 'lesson', title: 'Completed "CSS Styling Basics"', course: 'Web Development', time: '2 hours ago' },
    { type: 'quiz', title: 'Scored 100% on HTML Quiz', course: 'Web Development', time: '3 hours ago' },
    { type: 'lesson', title: 'Started "UI/UX Fundamentals"', course: 'Design Masterclass', time: '1 day ago' },
  ];

  return (
    <Layout>
      <div className="bg-muted/30 min-h-screen">
        {/* Header */}
        <section className="py-8 border-b border-border bg-card">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold mb-1">Welcome back, Learner! 👋</h1>
                <p className="text-muted-foreground">Track your progress and continue learning</p>
              </div>
              <Link to="/courses">
                <Button variant="hero">
                  Explore More Courses
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {stats.map((stat) => (
              <Card key={stat.label} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2 rounded-lg bg-muted ${stat.color}`}>
                      <stat.icon className="h-5 w-5" />
                    </div>
                  </div>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Continue Learning */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Play className="h-5 w-5 text-primary" />
                    Continue Learning
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {enrolledCourses.map((course) => {
                    const progress = userProgress.find((p) => p.courseId === course.id);
                    const progressPercent = progress
                      ? Math.round((progress.lessonsCompleted / progress.totalLessons) * 100)
                      : 0;

                    return (
                      <Link
                        key={course.id}
                        to={`/course/${course.id}`}
                        className="flex gap-4 p-4 rounded-xl border border-border hover:border-primary/50 hover:bg-muted/30 transition-all group"
                      >
                        <img
                          src={course.thumbnail}
                          alt={course.title}
                          className="w-32 h-20 object-cover rounded-lg"
                        />
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                            {course.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-2">
                            {progress?.lessonsCompleted} of {progress?.totalLessons} lessons completed
                          </p>
                          <div className="flex items-center gap-3">
                            <Progress value={progressPercent} className="flex-1 h-2" />
                            <span className="text-sm font-medium">{progressPercent}%</span>
                          </div>
                        </div>
                        <ChevronRight className="h-5 w-5 text-muted-foreground self-center opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    );
                  })}

                  {enrolledCourses.length === 0 && (
                    <div className="text-center py-8">
                      <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground mb-4">
                        You haven't enrolled in any courses yet
                      </p>
                      <Link to="/courses">
                        <Button>Browse Courses</Button>
                      </Link>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Learning Goals */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    Weekly Goals
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Lessons</span>
                        <span className="text-sm text-muted-foreground">3/5</span>
                      </div>
                      <Progress value={60} className="h-2" />
                    </div>
                    <div className="p-4 rounded-xl bg-success/5 border border-success/20">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Quizzes</span>
                        <span className="text-sm text-muted-foreground">2/3</span>
                      </div>
                      <Progress value={66} className="h-2" />
                    </div>
                    <div className="p-4 rounded-xl bg-accent/5 border border-accent/20">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Hours</span>
                        <span className="text-sm text-muted-foreground">4/6</span>
                      </div>
                      <Progress value={66} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    Recent Activity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="flex gap-3">
                        <div className={`h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                          activity.type === 'lesson' 
                            ? 'bg-primary/10 text-primary' 
                            : 'bg-success/10 text-success'
                        }`}>
                          {activity.type === 'lesson' ? (
                            <Play className="h-4 w-4" />
                          ) : (
                            <Award className="h-4 w-4" />
                          )}
                        </div>
                        <div className="min-w-0">
                          <p className="font-medium text-sm">{activity.title}</p>
                          <p className="text-xs text-muted-foreground">
                            {activity.course} • {activity.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Achievements */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { emoji: '🏆', label: 'First Course' },
                      { emoji: '⭐', label: 'Quiz Master' },
                      { emoji: '🔥', label: '7 Day Streak' },
                    ].map((badge) => (
                      <div
                        key={badge.label}
                        className="text-center p-3 rounded-xl bg-muted/50"
                      >
                        <span className="text-2xl">{badge.emoji}</span>
                        <p className="text-xs mt-1 text-muted-foreground">{badge.label}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Upcoming */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    Upcoming
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg bg-muted/50">
                      <p className="text-sm font-medium">JavaScript Quiz</p>
                      <p className="text-xs text-muted-foreground">Tomorrow at 10:00 AM</p>
                    </div>
                    <div className="p-3 rounded-lg bg-muted/50">
                      <p className="text-sm font-medium">Live Workshop: React Hooks</p>
                      <p className="text-xs text-muted-foreground">Friday at 2:00 PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
