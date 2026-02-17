import { ArrowRight, Code, Zap } from 'lucide-react';
import { ImageCarousel } from './ImageCarousel';

interface HeroProps {
  onDemoClick?: () => void;
  onCoursesClick?: () => void;
}

export function Hero({ onDemoClick, onCoursesClick }: HeroProps) {
  return (
    <section id="home" className="pt-32 pb-16 md:pt-40 md:pb-24 lg:py-48 bg-gradient-to-br from-white via-primary-50 to-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Code, Communicate,{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">Conquer</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
              Practical coding education with personality development and real-world projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button onClick={onDemoClick} className="btn-primary flex items-center justify-center gap-2 group">
                Join Free Demo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-accent-100 rounded-lg">
                  <Code className="w-5 h-5 text-accent-600" />
                </div>
                <span>Live Coding Sessions</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-2 bg-accent-100 rounded-lg">
                  <Zap className="w-5 h-5 text-accent-600" />
                </div>
                <span>Real-World Projects</span>
              </div>
            </div>
          </div>

          <div className="animate-fade-in">
            <ImageCarousel />
          </div>
        </div>
      </div>
    </section>
  );
}
