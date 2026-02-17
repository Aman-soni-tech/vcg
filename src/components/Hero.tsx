import { ArrowRight, Code, Zap } from 'lucide-react';
import { ImageCarousel } from './ImageCarousel';

interface HeroProps {
  onDemoClick?: () => void;
  onCoursesClick?: () => void;
}

export function Hero({ onDemoClick, onCoursesClick }: HeroProps) {
  return (
    <section id="home" className="pt-24 pb-12 md:pt-40 md:pb-24 lg:py-48 bg-gradient-to-br from-white via-primary-50 to-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
              Code, Communicate,{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">Conquer</span>
            </h1>

            <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-6 md:mb-8 leading-relaxed max-w-lg">
              Practical coding education with personality development and real-world projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 md:mb-8">
              <button onClick={onDemoClick} className="btn-primary flex items-center justify-center gap-2 group py-3 text-sm md:text-base">
                Join Free Demo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 md:gap-8 text-xs md:text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-accent-100 rounded-lg flex-shrink-0">
                  <Code className="w-5 h-5 text-accent-600" />
                </div>
                <span>Live Coding Sessions</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-2 bg-accent-100 rounded-lg flex-shrink-0">
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
