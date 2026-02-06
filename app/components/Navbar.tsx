'use client';

import { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, Sparkles } from 'lucide-react';
import { Button } from './ui/Button';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'Servizi', id: 'servizi' },
    { label: 'Chi Siamo', id: 'chi-siamo' },
    { label: 'Testimonianze', id: 'testimonianze' },
    { label: 'Team', id: 'team' },
    { label: 'Contatti', id: 'contatti' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg py-3'
          : 'bg-white/95 backdrop-blur-lg shadow-md py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-petrol-blue to-luxury-gold flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-tight text-dark-gray transition-colors">
                Dental Estetic
              </span>
              <span className="text-xs font-light text-gray-600 transition-colors">
                Studio di Eccellenza
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-sm font-medium text-gray-700 transition-colors hover:text-luxury-gold"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              icon={<Phone className="w-4 h-4" />}
              onClick={() => window.location.href = 'tel:+393515895953'}
            >
              Chiama
            </Button>
            <Button
              variant="primary"
              size="sm"
              icon={<Calendar className="w-4 h-4" />}
              onClick={() => scrollToSection('contatti')}
            >
              Prenota
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl rounded-b-2xl overflow-hidden animate-slide-down">
            <div className="px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full text-left px-4 py-3 text-gray-700 font-medium hover:bg-warm-gray rounded-lg transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-4 space-y-3 border-t border-gray-200">
                <Button
                  variant="outline"
                  size="sm"
                  icon={<Phone className="w-4 h-4" />}
                  onClick={() => window.location.href = 'tel:+393515895953'}
                  className="w-full justify-center"
                >
                  Chiama ora
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  icon={<Calendar className="w-4 h-4" />}
                  onClick={() => scrollToSection('contatti')}
                  className="w-full justify-center"
                >
                  Prenota visita
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
