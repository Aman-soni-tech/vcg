import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Do I need prior coding knowledge?',
      answer: 'No, our courses are designed for beginners. We start from the basics and gradually progress to advanced topics. Our experienced mentors will guide you through every step.',
    },
    {
      question: 'What is the job guarantee after completion?',
      answer: 'We provide 100% placement support including resume building, interview preparation, and job referrals. While we don\'t guarantee jobs, we ensure you\'re job-ready with real-world project experience.',
    },
    {
      question: 'What certifications will I get?',
      answer: 'You\'ll receive an industry-recognized certificate upon completion. Your projects and portfolio will be even more valuable for job applications.',
    },
    {
      question: 'What is the batch size?',
      answer: 'We maintain small batch sizes of maximum 15 students per batch to ensure personalized attention and better learning outcomes.',
    },
    {
      question: 'What if I miss a class?',
      answer: 'Consistency is important for your learning journey. If a student takes a holiday or misses classes, they will be removed from the batch. We maintain strict attendance to ensure quality learning for all students in the cohort.',
    },
  ];

  return (
    <section className="section-spacing bg-white">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions? We've got answers. Check out our FAQs below.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden hover:border-primary-300 transition-colors"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="text-left font-semibold text-gray-900">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-primary-600 transition-transform duration-300 flex-shrink-0 ml-4 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {activeIndex === index && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
