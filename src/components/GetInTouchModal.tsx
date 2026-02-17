import { useState } from 'react';
import { Send, Phone, MapPin, Mail } from 'lucide-react';
import { submitContact } from '../lib/supabase';

interface GetInTouchProps {
  onBackClick: () => void;
}

const AVAILABLE_COURSES = [
  { id: '1', name: 'C/C++' },
  { id: '2', name: 'Core Java' },
  { id: '3', name: 'Advanced Java' },
  { id: '4', name: 'Collection Framework' },
  { id: '5', name: 'Multithreading' },
  { id: '6', name: 'DSA' },
  { id: '7', name: 'SpringBoot' },
  { id: '8', name: 'MySql' },
];

export function GetInTouch({ onBackClick }: GetInTouchProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course_interest: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

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
      }, 2000);
    } catch (err) {
      setError('Failed to submit form. Please try again.');
      console.error('Error submitting form:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="pt-16 md:pt-24 pb-12 md:pb-16 bg-white px-4 md:px-0">
      <div className="container-custom">
        {/* Back Button */}
        <button
          onClick={onBackClick}
          className="mb-6 md:mb-8 flex items-center gap-2 text-primary-700 hover:text-primary-800 font-semibold transition-colors text-sm md:text-base"
        >
          <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </button>

        <div className="mb-8 md:mb-12 animate-fade-in">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 md:mb-12">Get in Touch</h2>

          <div className="grid md:grid-cols-1 gap-8 mb-12">
            {/* Contact Info Cards - Hidden on Mobile */}
            <div className="hidden md:grid grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-xl md:rounded-2xl p-4 md:p-6 text-center border border-gray-200 hover:border-primary-300 hover:shadow-medium transition-all duration-300">
                <div className="p-3 bg-gradient-primary rounded-lg text-white w-fit mx-auto mb-4">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-3 text-base">Phone</h3>
                <a href="tel:+916232983739" className="text-primary-700 hover:text-primary-800 font-medium text-sm break-all">
                  +91 6232 983 739
                </a>
              </div>

              <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-xl md:rounded-2xl p-4 md:p-6 text-center border border-gray-200 hover:border-primary-300 hover:shadow-medium transition-all duration-300">
                <div className="p-3 bg-gradient-primary rounded-lg text-white w-fit mx-auto mb-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-3 text-base">Location</h3>
                <p className="text-gray-600 text-sm">Indore, Madhya Pradesh</p>
              </div>

              <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-xl md:rounded-2xl p-4 md:p-6 text-center border border-gray-200 hover:border-primary-300 hover:shadow-medium transition-all duration-300">
                <div className="p-3 bg-gradient-primary rounded-lg text-white w-fit mx-auto mb-4">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-3 text-base">Email</h3>
                <a href="mailto:info@vidhyacode.com" className="text-primary-700 hover:text-primary-800 font-medium text-sm break-all">
                  info@vidhyacode.com
                </a>
              </div>
            </div>

            {/* Contact Info for Mobile */}
            <div className="md:hidden space-y-3">
              <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-lg p-4 border border-gray-200">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-gradient-primary rounded-lg text-white">
                    <Phone className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Phone</h3>
                </div>
                <a href="tel:+916232983739" className="text-primary-700 hover:text-primary-800 font-medium text-sm ml-11 break-all">
                  +91 6232 983 739
                </a>
              </div>

              <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-lg p-4 border border-gray-200">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-gradient-primary rounded-lg text-white">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Location</h3>
                </div>
                <p className="text-gray-600 text-sm ml-11">Indore, Madhya Pradesh</p>
              </div>

              <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-lg p-4 border border-gray-200">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-gradient-primary rounded-lg text-white">
                    <Mail className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                </div>
                <a href="mailto:info@vidhyacode.com" className="text-primary-700 hover:text-primary-800 font-medium text-sm ml-11 break-all">
                  info@vidhyacode.com
                </a>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="border-t border-gray-200 pt-8 md:pt-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">Send us a Message</h3>

            {submitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm md:text-base">
                Thank you! We've received your message and will get back to you soon.
              </div>
            )}

            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm md:text-base">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 max-w-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
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
                  {AVAILABLE_COURSES.map((course) => (
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
    </section>
  );
}
