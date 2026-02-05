export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  instructorAvatar: string;
  thumbnail: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  lessons: number;
  students: number;
  rating: number;
  price: number;
  isFeatured?: boolean;
}

export interface Lesson {
  id: string;
  courseId: string;
  title: string;
  description: string;
  duration: string;
  videoUrl: string;
  order: number;
  isCompleted?: boolean;
}

export interface Quiz {
  id: string;
  lessonId: string;
  title: string;
  questions: QuizQuestion[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface UserProgress {
  courseId: string;
  lessonsCompleted: number;
  totalLessons: number;
  quizScores: { lessonId: string; score: number; total: number }[];
  lastAccessed: string;
}

export const courses: Course[] = [
  {
    id: '1',
    title: 'Complete Web Development Bootcamp',
    description: 'Learn HTML, CSS, JavaScript, React, Node.js and more. Build real-world projects and become a full-stack developer.',
    instructor: 'Sarah Johnson',
    instructorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&h=450&fit=crop',
    category: 'Development',
    level: 'Beginner',
    duration: '42 hours',
    lessons: 156,
    students: 45280,
    rating: 4.8,
    price: 89.99,
    isFeatured: true,
  },
  {
    id: '2',
    title: 'UI/UX Design Masterclass',
    description: 'Master the art of user interface and user experience design. Learn Figma, prototyping, and design systems.',
    instructor: 'Michael Chen',
    instructorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=450&fit=crop',
    category: 'Design',
    level: 'Intermediate',
    duration: '28 hours',
    lessons: 98,
    students: 32150,
    rating: 4.9,
    price: 79.99,
    isFeatured: true,
  },
  {
    id: '3',
    title: 'Data Science with Python',
    description: 'Dive into data analysis, machine learning, and AI with Python. Work with real datasets and build predictive models.',
    instructor: 'Dr. Emily Watson',
    instructorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop',
    category: 'Data Science',
    level: 'Advanced',
    duration: '56 hours',
    lessons: 210,
    students: 28900,
    rating: 4.7,
    price: 129.99,
    isFeatured: true,
  },
  {
    id: '4',
    title: 'Digital Marketing Essentials',
    description: 'Learn SEO, social media marketing, content strategy, and paid advertising to grow any business online.',
    instructor: 'Alex Rivera',
    instructorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop',
    category: 'Marketing',
    level: 'Beginner',
    duration: '18 hours',
    lessons: 64,
    students: 19500,
    rating: 4.6,
    price: 59.99,
  },
  {
    id: '5',
    title: 'Mobile App Development with React Native',
    description: 'Build cross-platform mobile apps for iOS and Android using React Native and JavaScript.',
    instructor: 'James Park',
    instructorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=450&fit=crop',
    category: 'Development',
    level: 'Intermediate',
    duration: '35 hours',
    lessons: 124,
    students: 22100,
    rating: 4.8,
    price: 94.99,
  },
  {
    id: '6',
    title: 'Photography Fundamentals',
    description: 'Master camera settings, composition, lighting, and post-processing to capture stunning photos.',
    instructor: 'Lisa Thompson',
    instructorAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&h=450&fit=crop',
    category: 'Photography',
    level: 'Beginner',
    duration: '22 hours',
    lessons: 78,
    students: 15800,
    rating: 4.7,
    price: 69.99,
  },
];

export const lessons: Lesson[] = [
  {
    id: 'l1',
    courseId: '1',
    title: 'Introduction to Web Development',
    description: 'Learn the basics of how the web works and set up your development environment.',
    duration: '12:30',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    order: 1,
  },
  {
    id: 'l2',
    courseId: '1',
    title: 'HTML Fundamentals',
    description: 'Master HTML tags, structure, and semantic elements.',
    duration: '18:45',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    order: 2,
  },
  {
    id: 'l3',
    courseId: '1',
    title: 'CSS Styling Basics',
    description: 'Learn how to style your web pages with CSS selectors and properties.',
    duration: '22:10',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    order: 3,
  },
  {
    id: 'l4',
    courseId: '1',
    title: 'CSS Flexbox Layout',
    description: 'Master modern layouts with CSS Flexbox.',
    duration: '25:00',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    order: 4,
  },
  {
    id: 'l5',
    courseId: '1',
    title: 'JavaScript Basics',
    description: 'Introduction to JavaScript programming and DOM manipulation.',
    duration: '30:15',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    order: 5,
  },
];

export const quizzes: Quiz[] = [
  {
    id: 'q1',
    lessonId: 'l1',
    title: 'Web Development Basics Quiz',
    questions: [
      {
        id: 'q1-1',
        question: 'What does HTML stand for?',
        options: [
          'Hyper Text Markup Language',
          'High Tech Modern Language',
          'Hyper Transfer Markup Language',
          'Home Tool Markup Language',
        ],
        correctAnswer: 0,
      },
      {
        id: 'q1-2',
        question: 'Which protocol is used to transfer web pages?',
        options: ['FTP', 'SMTP', 'HTTP', 'SSH'],
        correctAnswer: 2,
      },
      {
        id: 'q1-3',
        question: 'What is the role of CSS?',
        options: [
          'Server-side scripting',
          'Styling and layout',
          'Database management',
          'Network security',
        ],
        correctAnswer: 1,
      },
    ],
  },
  {
    id: 'q2',
    lessonId: 'l2',
    title: 'HTML Fundamentals Quiz',
    questions: [
      {
        id: 'q2-1',
        question: 'Which tag is used for the largest heading?',
        options: ['<h6>', '<heading>', '<h1>', '<head>'],
        correctAnswer: 2,
      },
      {
        id: 'q2-2',
        question: 'What is a semantic HTML tag?',
        options: [
          'A tag that describes its meaning',
          'A deprecated HTML tag',
          'A styling tag',
          'A JavaScript tag',
        ],
        correctAnswer: 0,
      },
      {
        id: 'q2-3',
        question: 'Which tag creates a hyperlink?',
        options: ['<link>', '<a>', '<href>', '<url>'],
        correctAnswer: 1,
      },
    ],
  },
];

export const userProgress: UserProgress[] = [
  {
    courseId: '1',
    lessonsCompleted: 3,
    totalLessons: 5,
    quizScores: [
      { lessonId: 'l1', score: 3, total: 3 },
      { lessonId: 'l2', score: 2, total: 3 },
    ],
    lastAccessed: '2024-01-15',
  },
  {
    courseId: '2',
    lessonsCompleted: 1,
    totalLessons: 4,
    quizScores: [],
    lastAccessed: '2024-01-14',
  },
];

export const categories = [
  'All',
  'Development',
  'Design',
  'Data Science',
  'Marketing',
  'Photography',
  'Business',
];
