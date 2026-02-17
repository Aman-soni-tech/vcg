import { useState, useRef, useEffect } from 'react';
import { ChevronRight, X } from 'lucide-react';

interface Course {
  name: string;
  subcourses?: string[];
  duration?: string;
  level?: string;
}

interface CourseCategory {
  name: string;
  courses: Course[];
}

interface CoursesDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CoursesDropdown({ isOpen, onClose }: CoursesDropdownProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (dropdownRef.current) {
        const rect = dropdownRef.current.getBoundingClientRect();
        const isInsideDropdown =
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom;

        if (!isInsideDropdown && isHovering) {
          setIsHovering(false);
          onClose();
        }
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [isHovering, onClose, isOpen]);

  // Auto-select first category on mobile when dropdown opens
  useEffect(() => {
    if (isOpen && !selectedCategory) {
      setSelectedCategory('Frontend Development');
    }
  }, [isOpen, selectedCategory]);

  const courseCategories: CourseCategory[] = [
    {
      name: 'Frontend Development',
      courses: [
        { name: 'HTML & CSS Basics', subcourses: ['HTML5', 'CSS3', 'Responsive Design'], duration: '4 weeks', level: 'Beginner' },
        { name: 'JavaScript Fundamentals', subcourses: ['ES6+', 'DOM Manipulation', 'Async Programming'], duration: '6 weeks', level: 'Beginner' },
        { name: 'React.js Mastery', subcourses: ['Components', 'Hooks', 'State Management', 'React Router'], duration: '8 weeks', level: 'Intermediate' },
        { name: 'Vue.js Framework', subcourses: ['Vue 3', 'Composition API', 'Vue Router', 'Pinia'], duration: '6 weeks', level: 'Intermediate' },
        { name: 'Angular Advanced', subcourses: ['Angular CLI', 'Decorators', 'RxJS', 'NgRx'], duration: '10 weeks', level: 'Advanced' },
        { name: 'TypeScript Pro', subcourses: ['Types', 'Interfaces', 'Generics', 'Advanced Types'], duration: '5 weeks', level: 'Intermediate' },
        { name: 'Tailwind CSS', subcourses: ['Utility Classes', 'Responsive', 'Dark Mode', 'Customization'], duration: '3 weeks', level: 'Beginner' },
        { name: 'Web Animation', subcourses: ['CSS Animations', 'SVG', 'Canvas', 'Three.js'], duration: '6 weeks', level: 'Advanced' },
      ],
    },
    {
      name: 'Backend Development',
      courses: [
        { name: 'Node.js & Express', subcourses: ['Express Server', 'Middleware', 'REST API', 'Error Handling'], duration: '8 weeks', level: 'Intermediate' },
        { name: 'Python Backend', subcourses: ['Django', 'Flask', 'FastAPI', 'Web Development'], duration: '10 weeks', level: 'Intermediate' },
        { name: 'Java Spring Boot', subcourses: ['Spring Framework', 'Hibernate', 'Microservices', 'Spring Cloud'], duration: '12 weeks', level: 'Intermediate' },
        { name: 'Database Design', subcourses: ['SQL Fundamentals', 'Query Optimization', 'Indexing', 'Transactions'], duration: '7 weeks', level: 'Intermediate' },
        { name: 'MongoDB NoSQL', subcourses: ['Document Model', 'Aggregation', 'Replication', 'Sharding'], duration: '5 weeks', level: 'Intermediate' },
        { name: 'RESTful API Design', subcourses: ['API Principles', 'Authentication', 'Rate Limiting', 'Versioning'], duration: '4 weeks', level: 'Intermediate' },
        { name: 'GraphQL Mastery', subcourses: ['Query Language', 'Mutations', 'Subscriptions', 'Apollo Server'], duration: '6 weeks', level: 'Advanced' },
        { name: 'System Design', subcourses: ['Scalability', 'Load Balancing', 'Caching', 'Microservices'], duration: '10 weeks', level: 'Advanced' },
      ],
    },
    {
      name: 'Full Stack Development',
      courses: [
        { name: 'MERN Stack', subcourses: ['MongoDB', 'Express', 'React', 'Node.js'], duration: '14 weeks', level: 'Intermediate' },
        { name: 'MEAN Stack', subcourses: ['MongoDB', 'Express', 'Angular', 'Node.js'], duration: '14 weeks', level: 'Intermediate' },
        { name: 'LAMP Stack', subcourses: ['Linux', 'Apache', 'MySQL', 'PHP'], duration: '12 weeks', level: 'Beginner' },
        { name: 'Django Full Stack', subcourses: ['Django Backend', 'React Frontend', 'Database Design', 'Deployment'], duration: '12 weeks', level: 'Intermediate' },
        { name: 'Next.js Complete', subcourses: ['SSR', 'API Routes', 'Database', 'Deployment'], duration: '10 weeks', level: 'Intermediate' },
        { name: 'Serverless Development', subcourses: ['AWS Lambda', 'Firebase', 'API Gateway', 'Databases'], duration: '8 weeks', level: 'Advanced' },
      ],
    },
    {
      name: 'Mobile Development',
      courses: [
        { name: 'React Native', subcourses: ['Components', 'Navigation', 'Native Modules', 'Performance'], duration: '10 weeks', level: 'Intermediate' },
        { name: 'Flutter Development', subcourses: ['Dart Language', 'Widgets', 'State Management', 'Firebase'], duration: '10 weeks', level: 'Intermediate' },
        { name: 'iOS Development', subcourses: ['Swift', 'UIKit', 'SwiftUI', 'Core Data'], duration: '12 weeks', level: 'Intermediate' },
        { name: 'Android Development', subcourses: ['Kotlin', 'Jetpack', 'Material Design', 'Room Database'], duration: '12 weeks', level: 'Intermediate' },
        { name: 'Cross-Platform Apps', subcourses: ['Xamarin', 'Cordova', 'Ionic', 'NativeScript'], duration: '10 weeks', level: 'Advanced' },
      ],
    },
    {
      name: 'DevOps & Cloud',
      courses: [
        { name: 'Docker & Containers', subcourses: ['Docker Basics', 'Images', 'Volumes', 'Docker Compose'], duration: '6 weeks', level: 'Intermediate' },
        { name: 'Kubernetes Orchestration', subcourses: ['K8s Architecture', 'Deployments', 'Services', 'Scaling'], duration: '8 weeks', level: 'Advanced' },
        { name: 'AWS Cloud Mastery', subcourses: ['EC2', 'S3', 'RDS', 'Lambda', 'CloudFront'], duration: '10 weeks', level: 'Intermediate' },
        { name: 'Azure Cloud', subcourses: ['VMs', 'App Services', 'SQL Database', 'Function Apps'], duration: '9 weeks', level: 'Intermediate' },
        { name: 'CI/CD Pipelines', subcourses: ['GitHub Actions', 'Jenkins', 'GitLab CI', 'Deployment'], duration: '6 weeks', level: 'Advanced' },
        { name: 'Linux & Bash', subcourses: ['Commands', 'Scripting', 'System Admin', 'Security'], duration: '7 weeks', level: 'Beginner' },
      ],
    },
    {
      name: 'Programming Languages',
      courses: [
        { name: 'JavaScript Pro', subcourses: ['Advanced Concepts', 'Design Patterns', 'Performance', 'Testing'], duration: '8 weeks', level: 'Advanced' },
        { name: 'Python Mastery', subcourses: ['Advanced OOP', 'Decorators', 'Generators', 'Async IO'], duration: '8 weeks', level: 'Advanced' },
        { name: 'Java Advanced', subcourses: ['Concurrency', 'Streams', 'Generics', 'Design Patterns'], duration: '10 weeks', level: 'Advanced' },
        { name: 'C++ Development', subcourses: ['OOP', 'STL', 'Memory Management', 'Competitive Programming'], duration: '12 weeks', level: 'Intermediate' },
        { name: 'Go Programming', subcourses: ['Goroutines', 'Channels', 'Web Dev', 'Microservices'], duration: '8 weeks', level: 'Intermediate' },
        { name: 'Rust Systems', subcourses: ['Ownership', 'Borrowing', 'Traits', 'Error Handling'], duration: '10 weeks', level: 'Advanced' },
      ],
    },
    {
      name: 'Data Science & AI',
      courses: [
        { name: 'Python for Data Science', subcourses: ['NumPy', 'Pandas', 'Matplotlib', 'Scikit-learn'], duration: '10 weeks', level: 'Intermediate' },
        { name: 'Machine Learning', subcourses: ['Algorithms', 'Supervised Learning', 'Unsupervised Learning', 'Model Evaluation'], duration: '12 weeks', level: 'Advanced' },
        { name: 'Deep Learning', subcourses: ['Neural Networks', 'TensorFlow', 'PyTorch', 'Computer Vision'], duration: '12 weeks', level: 'Advanced' },
        { name: 'Data Analytics', subcourses: ['SQL', 'Statistics', 'Visualization', 'Reporting'], duration: '10 weeks', level: 'Intermediate' },
        { name: 'NLP & LLMs', subcourses: ['Text Processing', 'Transformers', 'BERT', 'GPT Models'], duration: '10 weeks', level: 'Advanced' },
      ],
    },
    {
      name: 'Testing & QA',
      courses: [
        { name: 'Unit Testing', subcourses: ['Jest', 'Mocha', 'Pytest', 'JUnit'], duration: '5 weeks', level: 'Intermediate' },
        { name: 'Integration Testing', subcourses: ['API Testing', 'Database Testing', 'End-to-End'], duration: '6 weeks', level: 'Intermediate' },
        { name: 'Automation Testing', subcourses: ['Selenium', 'Cypress', 'Playwright', 'Appium'], duration: '8 weeks', level: 'Intermediate' },
        { name: 'Performance Testing', subcourses: ['Load Testing', 'Stress Testing', 'JMeter', 'Artillery'], duration: '6 weeks', level: 'Advanced' },
      ],
    },
  ];

  if (!isOpen) return null;

  const activeCategory = courseCategories.find(cat => cat.name === selectedCategory);

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 z-50 transition-opacity duration-300"
        onMouseLeave={() => {
          if (isHovering) {
            setIsHovering(false);
            onClose();
          }
        }}
      />
      {/* Dropdown Container */}
      <div 
        ref={dropdownRef}
        className="fixed top-16 md:top-20 left-0 md:left-1/2 md:-translate-x-1/2 right-0 md:right-auto z-60 bg-white shadow-xl w-full md:w-full md:max-w-6xl rounded-none md:rounded-2xl animate-fade-in overflow-hidden md:mx-0"
        onMouseEnter={() => setIsHovering(true)}
      >
        <div className="max-h-[85vh] md:max-h-[80vh] overflow-y-auto">
          <div className="flex items-center justify-between p-4 md:p-6 border-b border-gray-200 sticky top-0 bg-white z-10">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">All Courses</h2>
            <button onClick={onClose} className="p-1.5 hover:bg-gray-100 rounded-lg flex-shrink-0">
              <X className="w-6 h-6 md:w-6 md:h-6" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-0 min-h-[70vh] md:min-h-[60vh]">
            {/* Categories List */}
            <div className="md:col-span-4 border-b md:border-b-0 md:border-r border-gray-200">
              <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible bg-white">
                {courseCategories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`flex-shrink-0 md:flex-shrink text-left px-4 md:px-6 py-4 md:py-4 border-b-2 md:border-b md:border-r-0 border-gray-100 hover:bg-primary-50 transition-all flex items-center justify-between whitespace-nowrap md:whitespace-normal w-auto md:w-full min-w-max md:min-w-0 ${
                      selectedCategory === category.name ? 'bg-primary-50 md:border-l-4 md:border-l-primary-600 border-b-primary-600 text-primary-600 font-semibold' : ''
                    }`}
                  >
                    <span className="font-medium text-gray-700 text-sm md:text-sm">{category.name}</span>
                    <ChevronRight className="w-4 h-4 md:w-4 md:h-4 text-gray-400 ml-2 md:hidden flex-shrink-0" />
                  </button>
                ))}
              </div>
            </div>

            {/* Courses List */}
            <div className="md:col-span-8 bg-gray-50 p-4 md:p-6">
              {activeCategory ? (
                <div>
                  <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">{activeCategory.name}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    {activeCategory.courses.map((course) => (
                      <div
                        key={course.name}
                        className="bg-white rounded-lg p-3 md:p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
                      >
                        <h4 className="font-semibold text-sm md:text-sm text-gray-900 group-hover:text-primary-600 transition-colors mb-2">
                          {course.name}
                        </h4>
                        {course.duration && (
                          <p className="text-xs text-gray-500 mb-2">⏱️ {course.duration}</p>
                        )}
                        {course.level && (
                          <span className={`inline-block text-xs font-semibold px-2 py-1 rounded mb-2 ${
                            course.level === 'Beginner' ? 'bg-green-100 text-green-700' :
                            course.level === 'Intermediate' ? 'bg-blue-100 text-blue-700' :
                            'bg-purple-100 text-purple-700'
                          }`}>
                            {course.level}
                          </span>
                        )}
                        {course.subcourses && course.subcourses.length > 0 && (
                          <ul className="text-xs text-gray-600 space-y-1 my-2">
                            {course.subcourses.slice(0, 3).map((sub) => (
                              <li key={sub} className="text-xs text-gray-500">
                                • {sub}
                              </li>
                            ))}
                            {course.subcourses.length > 3 && (
                              <li className="text-xs text-gray-500 font-medium">
                                +{course.subcourses.length - 3} more
                              </li>
                            )}
                          </ul>
                        )}
                        <button className="mt-2 text-primary-600 text-xs md:text-sm font-medium group-hover:text-primary-700">
                          Enroll Now →
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center py-8">
                  <p className="text-gray-400 text-sm md:text-base text-center mb-4">Select a category to view courses</p>
                  <p className="text-xs text-gray-400 text-center">👉 Tap a category on the left to get started</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
