import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { getWhatsAppLink } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'الرئيسية', href: '#hero' },
    { name: 'لماذا نحن؟', href: '#features' },
    { name: 'الباقات', href: '#pricing' },
    { name: 'كيف نعمل', href: '#process' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      setIsOpen(false);
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <span className="text-2xl font-extrabold text-shark-900 tracking-tighter uppercase">
              SHARKS<span className="text-shark-500">VISION</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 space-x-reverse items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-gray-600 hover:text-shark-600 font-medium transition-colors cursor-pointer"
              >
                {link.name}
              </a>
            ))}
            <a
              href={getWhatsAppLink("مرحباً، أرغب في استشارة مجانية.")}
              target="_blank"
              rel="noreferrer"
              className="bg-shark-600 text-white px-5 py-2.5 rounded-full font-bold hover:bg-shark-800 transition-all flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              <Phone size={18} />
              <span>تواصل معنا</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-shark-900 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-shark-600 hover:bg-shark-50 rounded-md"
              >
                {link.name}
              </a>
            ))}
             <a
              href={getWhatsAppLink("مرحباً، أرغب في استشارة مجانية.")}
              target="_blank"
              rel="noreferrer"
              className="block w-full text-center mt-4 bg-shark-600 text-white px-5 py-3 rounded-lg font-bold"
            >
              تواصل عبر واتساب
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;