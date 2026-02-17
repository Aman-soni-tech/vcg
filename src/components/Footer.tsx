import { Mail, MapPin, Phone, Facebook, Linkedin, Twitter } from 'lucide-react';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 border-t border-gray-200">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 flex-shrink-0">
                <Logo />
              </div>
              <span className="font-bold text-lg text-gray-900">Vidhya Code Gurukul</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Empowering the next generation of coders with practical skills and personality development.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Courses', 'About', 'Enroll', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-600 hover:text-primary-700 transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-600 text-sm">
                <Phone className="w-4 h-4 text-primary-600" />
                <a href="tel:+916232983739" className="hover:text-primary-700 transition-colors">
                  +91 6232 983 739
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-600 text-sm">
                <MapPin className="w-4 h-4 text-primary-600" />
                <span>Indore, Madhya Pradesh</span>
              </li>
              <li className="flex items-center gap-2 text-gray-600 text-sm">
                <Mail className="w-4 h-4 text-primary-600" />
                <a href="mailto:info@vidhyacode.com" className="hover:text-primary-700 transition-colors">
                  info@vidhyacode.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 bg-white rounded-full shadow-card hover:shadow-medium transition-all hover:text-primary-700"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-white rounded-full shadow-card hover:shadow-medium transition-all hover:text-primary-700"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-white rounded-full shadow-card hover:shadow-medium transition-all hover:text-primary-700"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <p className="text-center text-gray-600 text-sm">
            © 2025 Vidhya Code Gurukul. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
