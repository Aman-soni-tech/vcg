import { useState } from 'react';
import { X } from 'lucide-react';
import { submitDemoRequest } from '../lib/supabase';

interface JoinDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function JoinDemoModal({ isOpen, onClose }: JoinDemoModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    courseInterest: '',
    experience: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    setSuccessMessage('');

    try {
      // Submit demo request to Supabase
      await submitDemoRequest({
        name: formData.fullName,
        email: formData.email,
        phone: formData.phoneNumber,
        course_interest: formData.courseInterest,
        message: `Experience Level: ${formData.experience}`,
      });

      setSuccessMessage('✓ Thank you! Your demo request has been received. We will contact you shortly.');
      
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phoneNumber: '',
        courseInterest: '',
        experience: '',
      });

      // Close modal after 2 seconds
      setTimeout(() => {
        onClose();
        setSuccessMessage('');
      }, 2000);
    } catch (error) {
      console.error('Error submitting form:', error);
      const errorMsg = error instanceof Error ? error.message : 'Failed to submit form';
      setErrorMessage(`✗ ${errorMsg}. Please try again.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-0">
        <div className="bg-white rounded-xl md:rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto animate-fade-in">
          {/* Header */}
          <div className="sticky top-0 bg-gradient-to-r from-primary-600 to-primary-700 px-4 md:px-6 py-4 md:py-6 flex items-center justify-between gap-3">
            <div className="flex-1">
              <h2 className="text-lg md:text-2xl font-bold text-white">Join Free Demo</h2>
              <p className="text-primary-100 text-xs md:text-sm mt-0.5 md:mt-1">Learn coding with personality development</p>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:bg-white/20 p-1.5 md:p-2 rounded-lg transition-colors flex-shrink-0"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-4 md:p-6 space-y-3 md:space-y-4">
            {/* Success Message */}
            {successMessage && (
              <div className="p-3 md:p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 text-xs md:text-sm font-medium">{successMessage}</p>
              </div>
            )}

            {/* Error Message */}
            {errorMessage && (
              <div className="p-3 md:p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800 text-xs md:text-sm font-medium">{errorMessage}</p>
              </div>
            )}

            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-xs md:text-sm font-semibold text-gray-700 mb-1.5 md:mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                placeholder="Enter your full name"
                className="w-full px-3 md:px-4 py-2.5 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all disabled:bg-gray-100 text-sm"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-xs md:text-sm font-semibold text-gray-700 mb-1.5 md:mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                placeholder="Enter your email"
                className="w-full px-3 md:px-4 py-2.5 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all disabled:bg-gray-100 text-sm"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phoneNumber" className="block text-xs md:text-sm font-semibold text-gray-700 mb-1.5 md:mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                placeholder="Enter your phone number"
                className="w-full px-3 md:px-4 py-2.5 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all disabled:bg-gray-100 text-sm"
              />
            </div>

            {/* Course Interest */}
            <div>
              <label htmlFor="courseInterest" className="block text-xs md:text-sm font-semibold text-gray-700 mb-1.5 md:mb-2">
                Course Interest *
              </label>
              <select
                id="courseInterest"
                name="courseInterest"
                value={formData.courseInterest}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full px-3 md:px-4 py-2.5 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all disabled:bg-gray-100 text-sm"
              >
                <option value="">Select a course</option>
                <option value="c-cpp">C/C++</option>
                <option value="core-java">Core Java</option>
                <option value="advanced-java">Advanced Java</option>
                <option value="collection-framework">Collection Framework</option>
                <option value="multithreading">Multithreading</option>
                <option value="dsa">DSA</option>
                <option value="springboot">SpringBoot</option>
                <option value="mysql">MySql</option>
              </select>
            </div>

            {/* Experience Level */}
            <div>
              <label htmlFor="experience" className="block text-xs md:text-sm font-semibold text-gray-700 mb-1.5 md:mb-2">
                Experience Level *
              </label>
              <select
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full px-3 md:px-4 py-2.5 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all disabled:bg-gray-100 text-sm"
              >
                <option value="">Select your level</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold py-2.5 md:py-3 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none mt-4 md:mt-6 text-sm md:text-base"
            >
              {isSubmitting ? 'Submitting...' : 'Book Your Free Demo'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
