import { Mail, MapPin, Phone, Facebook, Linkedin, Twitter } from 'lucide-react';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 border-t border-gray-200">
      <div className="container-custom py-8 md:py-16 px-4 md:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 mb-8 md:mb-12">
          <div>
            <div className="flex items-center gap-3 mb-3 md:mb-4">
              <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
                <Logo />
              </div>
              <span className="font-bold text-base md:text-lg text-gray-900">Vidhya Code Gurukul</span>
            </div>
            <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
              Empowering the next generation of coders with practical skills and personality development.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-3 md:mb-4 text-sm md:text-base">Quick Links</h3>
            <ul className="space-y-1 md:space-y-2">
              {['Home', 'Courses', 'About'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-600 hover:text-primary-700 transition-colors text-xs md:text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-3 md:mb-4 text-sm md:text-base">Contact</h3>
            <ul className="space-y-2 md:space-y-3">
              <li className="flex items-center gap-2 text-gray-600 text-xs md:text-sm">
                <Phone className="w-4 h-4 text-primary-600 flex-shrink-0" />
                <a href="tel:+916232983739" className="hover:text-primary-700 transition-colors">
                  +91 6232 983 739
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-600 text-xs md:text-sm">
                <MapPin className="w-4 h-4 text-primary-600 flex-shrink-0" />
                <span>Indore, Madhya Pradesh</span>
              </li>
              <li className="flex items-center gap-2 text-gray-600 text-xs md:text-sm break-all">
                <Mail className="w-4 h-4 text-primary-600 flex-shrink-0" />
                <a href="mailto:info@vidhyacode.com" className="hover:text-primary-700 transition-colors">
                  info@vidhyacode.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-3 md:mb-4 text-sm md:text-base">Follow Us</h3>
            <div className="flex gap-2 md:gap-4">
              <a
                href="#"
                className="p-2 bg-white rounded-full shadow-card hover:shadow-medium transition-all hover:text-primary-700"
              >
                <Facebook className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-white rounded-full shadow-card hover:shadow-medium transition-all hover:text-primary-700"
              >
                <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-white rounded-full shadow-card hover:shadow-medium transition-all hover:text-primary-700"
              >
                <Twitter className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 md:pt-8">
          <p className="text-center text-gray-600 text-xs md:text-sm">
            © 2025 Vidhya Code Gurukul. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
