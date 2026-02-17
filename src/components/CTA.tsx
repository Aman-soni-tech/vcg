import { MessageCircle, Calendar } from 'lucide-react';

interface CTAProps {
  onDemoClick?: () => void;
}

export function CTA({ onDemoClick }: CTAProps) {
  const handleWhatsApp = () => {
    const message = encodeURIComponent('Hi, I am interested in knowing more about Vidhya Code Gurukul courses.');
    window.open(`https://wa.me/916232983739?text=${message}`, '_blank');
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-r from-primary-700 via-primary-600 to-primary-800 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl -mr-40 -mt-40" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl -ml-40 -mb-40" />

      <div className="container-custom relative z-10">
        <div className="text-center max-w-2xl mx-auto animate-fade-in">
          <h2 className="text-white mb-6">Start Your Coding Journey Today</h2>

          <p className="text-lg text-white/90 mb-12">
            Join hundreds of students who have transformed their careers through Vidhya Code Gurukul. Whether you're a beginner or looking to advance, we have the right course for you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={onDemoClick} className="btn-primary flex items-center justify-center gap-2 group">
              <Calendar className="w-5 h-5" />
              Book Free Demo
            </button>

            <button
              onClick={handleWhatsApp}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-primary-700 font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 group"
            >
              <MessageCircle className="w-5 h-5" />
              Contact on WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
