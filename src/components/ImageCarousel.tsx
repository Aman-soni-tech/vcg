import { useState, useEffect } from 'react';

interface CarouselImage {
  src: string;
  alt: string;
}

export function ImageCarousel() {
  const images: CarouselImage[] = [
    { src: '/images/one.png', alt: 'Slide 1' },
    { src: '/images/two.png', alt: 'Slide 2' },
    { src: '/images/three.png', alt: 'Slide 3' },
    { src: '/images/four.png', alt: 'Slide 4' },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 2000); // Change slide every 2 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="bg-transparent">
      <div className="container-custom px-0">
        <div className="relative w-full">
          {/* Main carousel container */}
          <div className="relative bg-gray-100 rounded-lg md:rounded-xl overflow-hidden shadow-lg w-full">
            {/* Images */}
            <div className="relative w-full aspect-square sm:aspect-video md:aspect-[16/9] overflow-hidden">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute w-full h-full transition-all duration-1000 ease-in-out ${
                    index === currentSlide 
                      ? 'translate-x-0 opacity-100' 
                      : index < currentSlide 
                      ? '-translate-x-full opacity-0' 
                      : 'translate-x-full opacity-0'
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Dot indicators */}
            <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-1.5 md:gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`h-1.5 md:h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-white w-5 md:w-6'
                      : 'bg-white/50 w-1.5 md:w-2'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
