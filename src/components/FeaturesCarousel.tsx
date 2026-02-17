import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Zap, Smile, Sparkles } from 'lucide-react';

interface FeatureCard {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export function FeaturesCarousel() {
  const features: FeatureCard[] = [
    {
      id: 1,
      title: 'Fast',
      description: 'Learn at your own pace with quick, efficient lessons designed to fit your schedule.',
      icon: <Zap className="w-12 h-12 text-blue-500" />,
    },
    {
      id: 2,
      title: 'Easy',
      description: 'Simple and intuitive interface makes learning enjoyable for everyone, regardless of experience.',
      icon: <Smile className="w-12 h-12 text-blue-500" />,
    },
    {
      id: 3,
      title: 'Fun',
      description: 'Engaging content and interactive exercises keep you motivated throughout your learning journey.',
      icon: <Sparkles className="w-12 h-12 text-blue-500" />,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % features.length);
    }, 2000); // Change slide every 2 seconds

    return () => clearInterval(interval);
  }, [isAutoPlay, features.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % features.length);
    setIsAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + features.length) % features.length);
    setIsAutoPlay(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
  };

  const handleMouseEnter = () => {
    setIsAutoPlay(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlay(true);
  };

  return (
    <section className="section-spacing bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl">
      <div className="container-custom">
        <div
          className="relative w-full"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Cards Container */}
          <div className="relative">
            <div className="relative h-80 md:h-96 overflow-hidden">
              {features.map((feature, index) => (
                <div
                  key={feature.id}
                  className={`absolute w-full h-full transition-all duration-1000 ease-in-out ${
                    index === currentSlide
                      ? 'translate-x-0 opacity-100'
                      : index < currentSlide
                      ? '-translate-x-full opacity-0'
                      : 'translate-x-full opacity-0'
                  }`}
                >
                  <div className="h-full bg-white/10 backdrop-blur-sm p-8 md:p-12 rounded-2xl flex flex-col justify-between text-white border border-white/20">
                    <div>
                      <div className="mb-6">{feature.icon}</div>
                      <h3 className="text-3xl md:text-4xl font-bold mb-4">{feature.title}</h3>
                      <p className="text-lg text-white/90 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-blue-600 p-3 rounded-full transition-all duration-200 hover:shadow-lg"
              aria-label="Previous slide"
            >
              <ChevronLeft size={28} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-blue-600 p-3 rounded-full transition-all duration-200 hover:shadow-lg"
              aria-label="Next slide"
            >
              <ChevronRight size={28} />
            </button>

            {/* Dot indicators */}
            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 z-10 flex gap-2">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-white w-8'
                      : 'bg-white/50 hover:bg-white/70 w-3'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Slide counter */}
          <div className="text-center mt-20 text-white text-sm font-medium">
            {currentSlide + 1} / {features.length}
          </div>
        </div>
      </div>
    </section>
  );
}
