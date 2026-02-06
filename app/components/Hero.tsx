'use client';

import { Phone, Calendar, Sparkles, Award, Shield, Users, ChevronDown } from 'lucide-react';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/studio-dentistico-delnegro-segrate.jpg" 
          alt="Studio Dentistico Del Negro Segrate"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient Overlay - più leggero su desktop, più scuro su mobile per leggibilità */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/85 to-white/75 sm:from-white/90 sm:via-white/75 sm:to-white/60"></div>
        {/* Subtle colored overlay per mantenere i colori del brand */}
        <div className="absolute inset-0 bg-gradient-to-br from-petrol-blue/5 via-transparent to-luxury-gold/5"></div>
      </div>
      
      {/* Decorative Background Elements - ridotti per non competere con l'immagine */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-luxury-gold/3 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-petrol-blue/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left animate-fade-in">
            {/* Badge */}
            <div className="inline-flex animate-slide-down">
              <Badge variant="secondary" icon={<Sparkles className="w-4 h-4" />}>
                Studio Dentistico di Eccellenza
              </Badge>
            </div>

            {/* Heading */}
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-dark-gray leading-tight animate-slide-up">
                Il tuo sorriso,
                <span className="block font-semibold mt-2 bg-gradient-to-r from-petrol-blue to-luxury-gold bg-clip-text text-transparent">
                  la nostra arte
                </span>
              </h1>
              <div className="w-20 h-1.5 bg-gradient-to-r from-luxury-gold to-petrol-blue mx-auto lg:mx-0 rounded-full"></div>
            </div>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 font-light leading-relaxed max-w-xl mx-auto lg:mx-0 animate-fade-in-delay px-4 sm:px-0">
              Odontoiatria estetica avanzata con tecnologie di ultima generazione. 
              Un'esperienza di cura personalizzata per il tuo benessere.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4 animate-fade-in-delay-2">
              <Button
                variant="primary"
                size="lg"
                icon={<Phone className="w-5 h-5" />}
                onClick={() => window.location.href = 'tel:+393515895953'}
              >
                Chiama ora
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                icon={<Calendar className="w-5 h-5" />}
                onClick={() => document.getElementById('contatti')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Prenota una visita
              </Button>
            </div>

            {/* Trust Elements - Hidden on mobile, visible on desktop */}
            <div className="hidden lg:grid grid-cols-3 gap-6 pt-8 animate-fade-in-delay-3">
              <div className="flex flex-col items-start gap-2 group">
                <div className="w-12 h-12 rounded-full bg-luxury-gold/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-6 h-6 text-luxury-gold" />
                </div>
                <span className="text-sm font-medium text-gray-700">Tecnologie Avanzate</span>
              </div>
              <div className="flex flex-col items-start gap-2 group">
                <div className="w-12 h-12 rounded-full bg-petrol-blue/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-6 h-6 text-petrol-blue" />
                </div>
                <span className="text-sm font-medium text-gray-700">Massima Igiene</span>
              </div>
              <div className="flex flex-col items-start gap-2 group">
                <div className="w-12 h-12 rounded-full bg-luxury-gold/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-6 h-6 text-luxury-gold" />
                </div>
                <span className="text-sm font-medium text-gray-700">Team Qualificato</span>
              </div>
            </div>
          </div>

          {/* Visual Element - Enhanced */}
          <div className="relative hidden lg:block animate-fade-in-delay">
            {/* Main Visual Card with Image */}
            <div className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
              {/* High Quality Background Image */}
              <div className="absolute inset-0">
                <img 
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=90" 
                  alt="Moderno studio dentistico con attrezzature all'avanguardia"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to alternative high-quality image
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=1200&q=90';
                    e.currentTarget.onerror = null;
                  }}
                />
              </div>
              
              {/* Subtle Overlay for better readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              
              {/* Review Card at Bottom */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-6 border border-luxury-gold/20 max-w-md">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-petrol-blue to-luxury-gold flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        MR
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 text-luxury-gold fill-current" viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed mb-2 italic">
                        "Professionalità e cura del paziente al primo posto. Ambiente moderno e accogliente. Sono molto soddisfatta del risultato!"
                      </p>
                      <div className="flex items-center justify-between">
                        <p className="text-xs font-semibold text-dark-gray">Maria Rossi</p>
                        <p className="text-xs text-gray-500">Verificata ✓</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Enhanced */}
      <button
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 hover:text-petrol-blue transition-colors group"
        aria-label="Scorri verso il basso"
      >
        <span className="text-sm font-medium">Scopri di più</span>
        <ChevronDown className="w-6 h-6 animate-bounce group-hover:text-petrol-blue" />
      </button>

    </section>
  );
}
