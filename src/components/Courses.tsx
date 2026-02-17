import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import { getCourses, Course } from '../lib/supabase';

export function Courses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCourses = async () => {
      try {
        const data = await getCourses();
        setCourses(data);
      } catch (error) {
        console.error('Error loading courses:', error);
      } finally {
        setLoading(false);
      }
    };

    loadCourses();
  }, []);

  const getIcon = (iconName: string) => {
    const IconComponent = Icons[iconName as keyof typeof Icons] as React.ComponentType<{ className: string }>;
    return IconComponent ? <IconComponent className="w-8 h-8" /> : null;
  };

  return (
    <section id="courses" className="section-spacing bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-gray-900 mb-4">Our Courses</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our carefully designed courses crafted to build practical skills and professional growth
          </p>
        </div>

        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-64 bg-gray-200 rounded-xl animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {courses.map((course) => (
              <div
                key={course.id}
                className="card-glass p-6 rounded-xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-gradient-primary rounded-lg text-white">
                    {getIcon(course.icon)}
                  </div>
                  <span className="text-xs font-semibold text-accent-600 bg-accent-50 px-3 py-1 rounded-full">
                    {course.category}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">{course.name}</h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{course.description}</p>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-gray-500 font-medium">{course.duration}</span>
                </div>

                <button className="flex items-center justify-center gap-2 w-full py-2 text-primary-700 font-semibold hover:text-primary-800 transition-colors group">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
