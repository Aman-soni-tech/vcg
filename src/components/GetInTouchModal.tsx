import { useState, useEffect } from 'react';
import { X, Send, Phone, MapPin, Mail } from 'lucide-react';
import { submitContact, getCourses, Course } from '../lib/supabase';

interface GetInTouchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function GetInTouchModal({ isOpen, onClose }: GetInTouchModalProps) {
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
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 2000);
    } catch (err) {
      setError('Failed to submit form. Please try again.');
      console.error('Error submitting form:', err);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl my-4 md:my-8 animate-fade-in">
          <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between rounded-t-2xl">
            <h2 className="text-2xl font-semibold text-gray-900">Get in Touch</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          <div className="p-6 md:p-8">
          {/* Contact Info Cards - Hidden on Mobile */}
          <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 pb-4 md:pb-6 border-b border-gray-200">
            <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-lg p-3 md:p-4 text-center h-full">
              <div className="p-3 bg-gradient-primary rounded-lg text-white w-fit mx-auto mb-3">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 text-sm">Phone</h3>
              <a href="tel:+916232983739" className="text-primary-700 hover:text-primary-800 font-medium text-xs md:text-sm break-all">
                +91 6232 983 739
              </a>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-lg p-3 md:p-4 text-center h-full">
              <div className="p-3 bg-gradient-primary rounded-lg text-white w-fit mx-auto mb-3">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 text-sm">Location</h3>
              <p className="text-gray-600 text-xs md:text-sm">Indore, Madhya Pradesh</p>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-lg p-3 md:p-4 text-center h-full">
              <div className="p-3 bg-gradient-primary rounded-lg text-white w-fit mx-auto mb-3">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 text-sm">Email</h3>
              <a href="mailto:info@vidhyacode.com" className="text-primary-700 hover:text-primary-800 font-medium text-xs md:text-sm break-all">
                info@vidhyacode.com
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="pt-3 sm:pt-4 md:pt-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">Send us a Message</h3>

            {submitted && (
              <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm">
                Thank you! We've received your message and will get back to you soon.
              </div>
            )}

            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all text-sm"
                    placeholder="Your name"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all text-sm"
                    placeholder="Your phone number"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all text-sm"
                  placeholder="Your email"
                />
              </div>

              <div className="flex flex-col">
                <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-2">Interested Course</label>
                <select
                  name="course_interest"
                  value={formData.course_interest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all text-sm"
                >
                  <option value="">Select a course</option>
                  {courses.map((course) => (
                    <option key={course.id} value={course.name}>
                      {course.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col">
                <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all resize-none text-sm"
                  placeholder="Tell us about your interest..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed py-3 text-sm md:text-base"
              >
                <Send className="w-4 h-4" />
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
