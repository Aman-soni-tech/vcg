import { useState, useEffect } from 'react';
import { Phone, MapPin, Mail, Send } from 'lucide-react';
import { submitContact, getCourses, Course } from '../lib/supabase';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course_interest: '',
    message: '',
  });
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadCourses = async () => {
      try {
        const data = await getCourses();
        setCourses(data);
      } catch (error) {
        console.error('Error loading courses:', error);
      }
    };

    loadCourses();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await submitContact(formData);
      setSubmitted(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        course_interest: '',
        message: '',
      });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError('Failed to submit form. Please try again.');
      console.error('Error submitting form:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-spacing bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in hidden">
          <h2 className="text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600">Have questions? We're here to help and guide you!</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-soft hover:shadow-medium transition-all text-center animate-fade-in">
            <div className="p-4 bg-gradient-primary rounded-lg text-white w-fit mx-auto mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
            <a href="tel:+916232983739" className="text-primary-700 hover:text-primary-800 font-medium">
              +91 6232 983 739
            </a>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-soft hover:shadow-medium transition-all text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="p-4 bg-gradient-primary rounded-lg text-white w-fit mx-auto mb-4">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Location</h3>
            <p className="text-gray-600">Indore, Madhya Pradesh</p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-soft hover:shadow-medium transition-all text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="p-4 bg-gradient-primary rounded-lg text-white w-fit mx-auto mb-4">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
            <a href="mailto:info@vidhyacode.com" className="text-primary-700 hover:text-primary-800 font-medium">
              info@vidhyacode.com
            </a>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-medium p-8 md:p-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send us a Message</h3>

            {submitted && (
              <div className="mb-6 p-4 bg-accent-50 border border-accent-200 rounded-lg text-accent-800">
                Thank you! We've received your message and will get back to you soon.
              </div>
            )}

            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                    placeholder="Your phone number"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                  placeholder="Your email"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Interested Course</label>
                <select
                  name="course_interest"
                  value={formData.course_interest}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                >
                  <option value="">Select a course</option>
                  {courses.map((course) => (
                    <option key={course.id} value={course.name}>
                      {course.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all resize-none"
                  placeholder="Tell us about your interest..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
