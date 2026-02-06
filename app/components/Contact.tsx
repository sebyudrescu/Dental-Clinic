'use client';

import ContactForm from './ContactForm';
import { Phone, MapPin, Clock, Mail } from 'lucide-react';
import { Card } from './ui/Card';

export default function Contact() {
  return (
    <section id="contatti" className="py-20 lg:py-32 bg-warm-gray">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-dark-gray mb-6">
            Prenota la tua
            <span className="block font-semibold mt-2">Visita</span>
          </h2>
          <div className="w-16 h-1 bg-luxury-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 font-light leading-relaxed">
            Contattaci per fissare un appuntamento o per qualsiasi informazione. 
            Siamo qui per rispondere alle tue domande e prenderci cura del tuo sorriso.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="order-2 lg:order-1">
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div className="space-y-8 order-1 lg:order-2">
            <Card hover className="p-8 group">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-petrol-blue flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-7 h-7" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-dark-gray mb-3">Telefono</h3>
                  <a 
                    href="tel:+393515895953"
                    className="text-lg text-petrol-blue hover:text-petrol-blue/80 transition-colors font-medium"
                  >
                    +39 351 589 5953
                  </a>
                  <p className="text-gray-600 mt-2">
                    Chiamaci per prenotare o richiedere informazioni
                  </p>
                </div>
              </div>
            </Card>

            <Card hover className="p-8 group">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-petrol-blue flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-7 h-7" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-dark-gray mb-3">Sede</h3>
                  <p className="text-lg text-gray-700">
                    Dental Estetic<br />
                    Mazzo Milanese<br />
                    Lombardia, Italia
                  </p>
                </div>
              </div>
            </Card>

            <Card hover className="p-8 group">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-petrol-blue flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-7 h-7" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-dark-gray mb-3">Orari</h3>
                  <div className="space-y-2 text-gray-700">
                    <p>Lunedì - Venerdì: 9:00 - 19:00</p>
                    <p>Sabato: 9:00 - 13:00</p>
                    <p className="text-gray-500">Domenica: Chiuso</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card glass className="p-10 bg-gradient-to-br from-petrol-blue to-petrol-blue/90 border-none text-white">
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl lg:text-4xl font-semibold mb-4">
                    Inizia il tuo percorso verso un sorriso perfetto
                  </h3>
                  <p className="text-lg text-white/90 leading-relaxed">
                    Il primo passo verso un sorriso sano e luminoso è semplice. 
                    Contattaci oggi stesso per una consulenza personalizzata.
                  </p>
                </div>

                <div className="space-y-4 pt-4">
                  <a
                    href="tel:+393515895953"
                    className="block w-full text-center px-8 py-4 text-lg font-medium text-petrol-blue bg-white rounded-lg hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <Phone className="w-5 h-5" />
                      Chiama +39 351 589 5953
                    </span>
                  </a>

                  <div className="flex items-center gap-4 pt-4">
                    <div className="flex-1 h-px bg-white/20"></div>
                    <span className="text-sm text-white/70">oppure</span>
                    <div className="flex-1 h-px bg-white/20"></div>
                  </div>

                  <div className="text-center text-white/90">
                    <p className="text-sm">Risposta rapida garantita</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/20">
                  <div className="text-center">
                    <Clock className="w-8 h-8 mx-auto mb-2 text-luxury-gold" />
                    <p className="text-xs text-white/80">Appuntamenti flessibili</p>
                  </div>
                  <div className="text-center">
                    <svg className="w-8 h-8 mx-auto mb-2 text-luxury-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <p className="text-xs text-white/80">Massima sicurezza</p>
                  </div>
                  <div className="text-center">
                    <svg className="w-8 h-8 mx-auto mb-2 text-luxury-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-xs text-white/80">Risultati garantiti</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
