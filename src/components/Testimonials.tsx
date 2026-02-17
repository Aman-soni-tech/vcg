import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { getTestimonials, Testimonial } from '../lib/supabase';

function StudentAvatar({ name }: { name: string }) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();

  const colors = [
    'bg-gradient-to-br from-primary-400 to-primary-600',
    'bg-gradient-to-br from-accent-400 to-accent-600',
    'bg-gradient-to-br from-blue-400 to-blue-600',
  ];

  const colorIndex = name.charCodeAt(0) % colors.length;

  return (
    <div className={`${colors[colorIndex]} rounded-full w-16 h-16 flex items-center justify-center text-white font-bold text-xl`}>
      {initials}
    </div>
  );
}

export function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTestimonials = async () => {
      try {
        const data = await getTestimonials();
        setTestimonials(data);
      } catch (error) {
        console.error('Error loading testimonials:', error);
      } finally {
        setLoading(false);
      }
    };

    loadTestimonials();
  }, []);

  if (loading) {
    return (
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">What Students Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-64 bg-gray-200 rounded-xl animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-spacing bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-gray-900 mb-4">What Students Say</h2>
          <p className="text-lg text-gray-600">Hear from our successful graduates</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 stagger-children">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 flex flex-col border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 flex-grow leading-relaxed text-base font-medium">
                "{testimonial.feedback}"
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <StudentAvatar name={testimonial.student_name} />
                <div>
                  <h4 className="font-bold text-gray-900 text-base">{testimonial.student_name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.course}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
