import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Logo } from './Logo';

interface HeaderProps {
  onDemoClick?: () => void;
  onCoursesClick?: () => void;
  onContactClick?: () => void;
  onAboutClick?: () => void;
  onHomeClick?: () => void;
  onResultsClick?: () => void;
  onResultsLoginClick?: () => void;
}

export function Header({ onDemoClick, onCoursesClick, onContactClick, onAboutClick, onHomeClick, onResultsClick, onResultsLoginClick }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = ['Home', 'Courses', 'About'];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (id === 'Home') {
      e.preventDefault();
      onHomeClick?.();
    } else if (id === 'Courses') {
      e.preventDefault();
      onCoursesClick?.();
    } else if (id === 'About') {
      e.preventDefault();
      onAboutClick?.();
    } else {
      e.preventDefault();
      const element = document.getElementById(id.toLowerCase());
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-medium' : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-3 min-w-0">
            <Logo />
            <span className="text-base md:text-lg font-bold text-gray-900 truncate">
              Vidhya Code Gurukul
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleSmoothScroll(e, item)}
                className="text-gray-700 hover:text-primary-700 font-medium transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2 lg:gap-3">
            <button 
              onClick={onCoursesClick} 
              className="flex items-center gap-1 lg:gap-2 px-3 lg:px-4 py-2 rounded-lg bg-blue-50 text-primary-700 hover:bg-blue-100 font-semibold text-sm lg:text-base transition-all duration-200 border border-primary-200 hover:border-primary-400 shadow-sm hover:shadow-md whitespace-nowrap"
            >
              All Courses
              <ChevronDown className="w-4 h-4" />
            </button>
            <button onClick={onContactClick} className="flex items-center px-3 lg:px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 font-semibold text-sm lg:text-base transition-all duration-200 border border-gray-300 hover:border-gray-400 shadow-sm hover:shadow-md whitespace-nowrap">
              Get in Touch
            </button>
            <button onClick={onResultsClick} className="flex items-center px-3 lg:px-4 py-2 rounded-lg bg-green-50 text-green-700 hover:bg-green-100 font-semibold text-sm lg:text-base transition-all duration-200 border border-green-300 hover:border-green-400 shadow-sm hover:shadow-md whitespace-nowrap">
              Results
            </button>
            <button onClick={onResultsLoginClick} className="flex items-center px-3 lg:px-4 py-2 rounded-lg bg-orange-50 text-orange-700 hover:bg-orange-100 font-semibold text-sm lg:text-base transition-all duration-200 border border-orange-300 hover:border-orange-400 shadow-sm hover:shadow-md whitespace-nowrap">
              Login
            </button>
          </div>

          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="py-4 space-y-3">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => handleSmoothScroll(e, item)}
                  className="block px-4 py-2 text-gray-700 hover:text-primary-700 font-medium transition-colors"
                >
                  {item}
                </a>
              ))}
              <button 
                onClick={() => {
                  setIsOpen(false);
                  onCoursesClick?.();
                }}
                className="flex items-center justify-between gap-2 w-full px-4 py-3 text-primary-700 hover:bg-blue-50 font-semibold text-sm transition-colors rounded-lg border border-primary-200 bg-blue-50"
              >
                All Courses
                <ChevronDown className="w-4 h-4 flex-shrink-0" />
              </button>
              <button 
                onClick={() => {
                  setIsOpen(false);
                  onContactClick?.();
                }}
                className="w-full px-4 py-3 text-gray-700 hover:bg-gray-100 font-semibold text-sm transition-colors rounded-lg border border-gray-300 bg-gray-100"
              >
                Get in Touch
              </button>
              <button 
                onClick={() => {
                  setIsOpen(false);
                  onResultsClick?.();
                }}
                className="w-full px-4 py-3 text-green-700 hover:bg-green-100 font-semibold text-sm transition-colors rounded-lg border border-green-300 bg-green-50"
             >
                Results
              </button>
              <button 
                onClick={() => {
                  setIsOpen(false);
                  onResultsLoginClick?.();
                }}
                className="w-full px-4 py-3 text-orange-700 hover:bg-orange-100 font-semibold text-sm transition-colors rounded-lg border border-orange-300 bg-orange-50"
              >
Login
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
