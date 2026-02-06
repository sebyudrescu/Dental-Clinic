'use client';

import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card } from './ui/Card';

const testimonials = [
  {
    id: 1,
    name: 'Maria Rossi',
    location: 'Milano',
    rating: 5,
    text: "Un'esperienza fantastica! Il team è stato professionale, gentile e molto attento. Il mio sorriso non è mai stato così bello. Consiglio vivamente Dental Estetic a chiunque cerchi un dentista di fiducia.",
    treatment: 'Sbiancamento dentale',
  },
  {
    id: 2,
    name: 'Giovanni Bianchi',
    location: 'Rho',
    rating: 5,
    text: "Dopo anni di paura del dentista, finalmente ho trovato uno studio dove mi sento a mio agio. Tecnologie moderne, ambiente pulito e personale eccezionale. Grazie per avermi restituito la voglia di sorridere!",
    treatment: 'Implantologia',
  },
  {
    id: 3,
    name: 'Laura Verdi',
    location: 'Legnano',
    rating: 5,
    text: 'Professionalità ai massimi livelli. Ho fatto un trattamento di ortodonzia invisibile e il risultato è straordinario. Studio moderno, attenzione al dettaglio e personale sempre disponibile.',
    treatment: 'Ortodonzia invisibile',
  },
  {
    id: 4,
    name: 'Marco Ferrari',
    location: 'Lainate',
    rating: 5,
    text: 'Servizio impeccabile dall\'inizio alla fine. Mi sono sentito seguito e coccolato in ogni fase del trattamento. Il risultato ha superato le mie aspettative. Consigliatissimo!',
    treatment: 'Faccette dentali',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-petrol-blue via-petrol-blue to-petrol-blue/90 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-luxury-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">
            Cosa dicono
            <span className="block font-semibold mt-2">i nostri pazienti</span>
          </h2>
          <div className="w-20 h-1.5 bg-luxury-gold mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-white/90 font-light leading-relaxed">
            La soddisfazione dei nostri pazienti è la nostra migliore ricompensa.
            Leggi le loro esperienze dirette.
          </p>
        </div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto">
          <Card glass className="p-8 lg:p-12 relative">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 opacity-10">
              <Quote className="w-16 h-16 text-luxury-gold" />
            </div>

            {/* Content */}
            <div className="relative space-y-8">
              {/* Stars */}
              <div className="flex justify-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 fill-luxury-gold text-luxury-gold"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl lg:text-2xl text-dark-gray font-light leading-relaxed text-center min-h-[120px] flex items-center justify-center">
                "{currentTestimonial.text}"
              </blockquote>

              {/* Author Info */}
              <div className="text-center space-y-2">
                <div className="inline-block px-4 py-2 bg-petrol-blue/10 rounded-full">
                  <p className="text-sm text-petrol-blue font-medium">
                    {currentTestimonial.treatment}
                  </p>
                </div>
                <p className="text-lg font-semibold text-dark-gray">
                  {currentTestimonial.name}
                </p>
                <p className="text-gray-600">{currentTestimonial.location}</p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 lg:-mx-20">
              <button
                onClick={goToPrevious}
                className="w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl flex items-center justify-center text-petrol-blue hover:bg-petrol-blue hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="Testimonianza precedente"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={goToNext}
                className="w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl flex items-center justify-center text-petrol-blue hover:bg-petrol-blue hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="Testimonianza successiva"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </Card>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(index);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-luxury-gold'
                    : 'w-2 bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Vai alla testimonianza ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20 max-w-5xl mx-auto">
          {[
            { number: '1000+', label: 'Pazienti soddisfatti' },
            { number: '98%', label: 'Recensioni positive' },
            { number: '15+', label: 'Anni di esperienza' },
            { number: '100%', label: 'Dedizione' },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center space-y-2 group cursor-default"
            >
              <p className="text-4xl lg:text-5xl font-bold text-white group-hover:text-luxury-gold transition-colors duration-300">
                {stat.number}
              </p>
              <p className="text-white/80 text-sm lg:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
