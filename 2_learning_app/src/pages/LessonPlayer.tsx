import { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Play, Pause, Volume2, VolumeX, Maximize, SkipBack, SkipForward,
  ChevronLeft, ChevronRight, CheckCircle, BookOpen, MessageSquare,
  Settings, List
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Slider } from '@/components/ui/slider';
import { courses, lessons, quizzes } from '@/data/mockData';
import { cn } from '@/lib/utils';

const LessonPlayer = () => {
  const { courseId, lessonId } = useParams();
  const course = courses.find((c) => c.id === courseId);
  const courseLessons = lessons.filter((l) => l.courseId === courseId);
  const currentLesson = courseLessons.find((l) => l.id === lessonId);
  const currentIndex = courseLessons.findIndex((l) => l.id === lessonId);
  const quiz = quizzes.find((q) => q.lessonId === lessonId);

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(100);
  const [showControls, setShowControls] = useState(true);
  const [currentTime, setCurrentTime] = useState('0:00');
  const [duration, setDuration] = useState('0:00');
  const [showSidebar, setShowSidebar] = useState(true);
  const [lessonCompleted, setLessonCompleted] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      const progress = (video.currentTime / video.duration) * 100;
      setProgress(progress);
      setCurrentTime(formatTime(video.currentTime));
      
      if (progress > 90 && !lessonCompleted) {
        setLessonCompleted(true);
      }
    };

    const handleLoadedMetadata = () => {
      setDuration(formatTime(video.duration));
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, [lessonCompleted]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (value: number[]) => {
    const video = videoRef.current;
    if (!video) return;
    video.volume = value[0] / 100;
    setVolume(value[0]);
    setIsMuted(value[0] === 0);
  };

  const handleSeek = (value: number[]) => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = (value[0] / 100) * video.duration;
    setProgress(value[0]);
  };

  const skip = (seconds: number) => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime += seconds;
  };

  const toggleFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      video.requestFullscreen();
    }
  };

  if (!course || !currentLesson) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Lesson not found</h1>
          <Link to="/courses">
            <Button>Browse Courses</Button>
          </Link>
        </div>
      </div>
    );
  }

  const prevLesson = currentIndex > 0 ? courseLessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < courseLessons.length - 1 ? courseLessons[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Top Bar */}
      <header className="h-14 bg-card border-b border-border flex items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <Link to={`/course/${courseId}`}>
            <Button variant="ghost" size="sm">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Course
            </Button>
          </Link>
          <div className="hidden md:block">
            <p className="text-sm text-muted-foreground">{course.title}</p>
            <p className="font-semibold">{currentLesson.title}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setShowSidebar(!showSidebar)}
            className="md:hidden"
          >
            <List className="h-5 w-5" />
          </Button>
          {lessonCompleted && (
            <div className="flex items-center gap-2 text-success text-sm font-medium">
              <CheckCircle className="h-4 w-4" />
              <span className="hidden sm:inline">Completed</span>
            </div>
          )}
        </div>
      </header>

      <div className="flex-1 flex">
        {/* Main Content */}
        <div className={cn("flex-1 flex flex-col", showSidebar && "lg:mr-80")}>
          {/* Video Player */}
          <div 
            className="relative bg-black aspect-video"
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => isPlaying && setShowControls(false)}
          >
            <video
              ref={videoRef}
              src={currentLesson.videoUrl}
              className="w-full h-full"
              onClick={togglePlay}
              poster={course.thumbnail}
            />

            {/* Play/Pause Overlay */}
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <Button
                  size="lg"
                  className="h-20 w-20 rounded-full bg-primary/90 hover:bg-primary hover:scale-110 transition-transform"
                  onClick={togglePlay}
                >
                  <Play className="h-10 w-10 ml-1" fill="currentColor" />
                </Button>
              </div>
            )}

            {/* Controls */}
            <div className={cn(
              "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transition-opacity",
              showControls ? "opacity-100" : "opacity-0"
            )}>
              {/* Progress Bar */}
              <div className="mb-4">
                <Slider
                  value={[progress]}
                  onValueChange={handleSeek}
                  max={100}
                  step={0.1}
                  className="cursor-pointer"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" onClick={() => skip(-10)} className="text-white hover:bg-white/20">
                    <SkipBack className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={togglePlay} className="text-white hover:bg-white/20">
                    {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => skip(10)} className="text-white hover:bg-white/20">
                    <SkipForward className="h-5 w-5" />
                  </Button>
                  <span className="text-white text-sm ml-2">
                    {currentTime} / {duration}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2 group">
                    <Button variant="ghost" size="icon" onClick={toggleMute} className="text-white hover:bg-white/20">
                      {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                    </Button>
                    <div className="w-24 hidden group-hover:block">
                      <Slider
                        value={[isMuted ? 0 : volume]}
                        onValueChange={handleVolumeChange}
                        max={100}
                      />
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                    <Settings className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={toggleFullscreen} className="text-white hover:bg-white/20">
                    <Maximize className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Content Below Video */}
          <div className="p-6 flex-1 overflow-auto">
            <div className="max-w-3xl">
              <h1 className="text-2xl font-bold mb-2">{currentLesson.title}</h1>
              <p className="text-muted-foreground mb-6">{currentLesson.description}</p>

              {/* Navigation Buttons */}
              <div className="flex gap-4 mb-8">
                {prevLesson && (
                  <Link to={`/course/${courseId}/lesson/${prevLesson.id}`}>
                    <Button variant="outline">
                      <ChevronLeft className="h-4 w-4 mr-2" />
                      Previous
                    </Button>
                  </Link>
                )}
                {quiz && !showQuiz && (
                  <Button variant="hero" onClick={() => setShowQuiz(true)}>
                    Take Quiz
                  </Button>
                )}
                {nextLesson && (
                  <Link to={`/course/${courseId}/lesson/${nextLesson.id}`}>
                    <Button>
                      Next Lesson
                      <ChevronRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                )}
              </div>

              {/* Quiz Section */}
              {showQuiz && quiz && (
                <QuizComponent quiz={quiz} onComplete={() => setShowQuiz(false)} />
              )}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className={cn(
          "fixed right-0 top-14 bottom-0 w-80 bg-card border-l border-border overflow-auto transition-transform",
          showSidebar ? "translate-x-0" : "translate-x-full",
          "hidden lg:block"
        )}>
          <div className="p-4">
            <h3 className="font-semibold mb-4">Course Content</h3>
            <div className="space-y-2">
              {courseLessons.map((lesson, index) => (
                <Link
                  key={lesson.id}
                  to={`/course/${courseId}/lesson/${lesson.id}`}
                  className={cn(
                    "flex items-center gap-3 p-3 rounded-lg transition-colors",
                    lesson.id === lessonId
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-muted"
                  )}
                >
                  <div className={cn(
                    "h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium",
                    lesson.id === lessonId
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  )}>
                    {index + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm truncate">{lesson.title}</p>
                    <p className="text-xs text-muted-foreground">{lesson.duration}</p>
                  </div>
                  {lesson.isCompleted && (
                    <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                  )}
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

// Quiz Component
interface QuizComponentProps {
  quiz: typeof quizzes[0];
  onComplete: () => void;
}

const QuizComponent = ({ quiz, onComplete }: QuizComponentProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    return quiz.questions.reduce((score, question, index) => {
      return score + (selectedAnswers[index] === question.correctAnswer ? 1 : 0);
    }, 0);
  };

  if (showResults) {
    const score = calculateScore();
    const percentage = Math.round((score / quiz.questions.length) * 100);

    return (
      <div className="bg-card rounded-xl border border-border p-6 animate-scale-in">
        <div className="text-center">
          <div className={cn(
            "h-24 w-24 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl font-bold",
            percentage >= 70 ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive"
          )}>
            {percentage}%
          </div>
          <h3 className="text-xl font-bold mb-2">
            {percentage >= 70 ? 'Great Job!' : 'Keep Practicing!'}
          </h3>
          <p className="text-muted-foreground mb-6">
            You scored {score} out of {quiz.questions.length} questions correctly.
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="outline" onClick={() => {
              setCurrentQuestion(0);
              setSelectedAnswers([]);
              setShowResults(false);
            }}>
              Retry Quiz
            </Button>
            <Button onClick={onComplete}>Continue</Button>
          </div>
        </div>
      </div>
    );
  }

  const question = quiz.questions[currentQuestion];

  return (
    <div className="bg-card rounded-xl border border-border p-6 animate-slide-up">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">{quiz.title}</h3>
        <span className="text-sm text-muted-foreground">
          Question {currentQuestion + 1} of {quiz.questions.length}
        </span>
      </div>

      <Progress value={((currentQuestion + 1) / quiz.questions.length) * 100} className="mb-6" />

      <p className="text-lg font-medium mb-6">{question.question}</p>

      <div className="space-y-3 mb-6">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(index)}
            className={cn(
              "w-full text-left p-4 rounded-lg border transition-all",
              selectedAnswers[currentQuestion] === index
                ? "border-primary bg-primary/10"
                : "border-border hover:border-primary/50 hover:bg-muted/50"
            )}
          >
            <div className="flex items-center gap-3">
              <div className={cn(
                "h-6 w-6 rounded-full border-2 flex items-center justify-center text-sm",
                selectedAnswers[currentQuestion] === index
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-muted-foreground"
              )}>
                {String.fromCharCode(65 + index)}
              </div>
              <span>{option}</span>
            </div>
          </button>
        ))}
      </div>

      <div className="flex justify-between">
        <Button
          variant="ghost"
          onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
          disabled={currentQuestion === 0}
        >
          Previous
        </Button>
        <Button
          onClick={handleNext}
          disabled={selectedAnswers[currentQuestion] === undefined}
        >
          {currentQuestion === quiz.questions.length - 1 ? 'Submit' : 'Next'}
        </Button>
      </div>
    </div>
  );
};

export default LessonPlayer;
