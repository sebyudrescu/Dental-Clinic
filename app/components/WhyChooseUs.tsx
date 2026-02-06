'use client';

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-light text-dark-gray mb-6">
                Un'esperienza di cura
                <span className="block font-semibold mt-2">che fa la differenza</span>
              </h2>
              <div className="w-16 h-1 bg-luxury-gold mb-6"></div>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              In Dental Estetic crediamo che ogni paziente meriti un'attenzione personalizzata 
              e un'esperienza di cura confortevole e rassicurante. Dal primo appuntamento, 
              ti accompagneremo con professionalità e dedizione verso il sorriso che desideri.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-petrol-blue/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-petrol-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-dark-gray mb-2">
                    Tecnologie all'avanguardia
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Investiamo nelle migliori attrezzature per garantire diagnosi precise 
                    e trattamenti minimamente invasivi.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-petrol-blue/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-petrol-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-dark-gray mb-2">
                    Ambiente accogliente e confortevole
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Uno studio moderno e curato nei minimi dettagli, pensato per farti sentire 
                    a tuo agio in ogni momento.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-petrol-blue/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-petrol-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-dark-gray mb-2">
                    Team esperto e attento
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Professionisti qualificati che mettono al centro le tue esigenze, 
                    ascoltandoti e guidandoti verso le migliori soluzioni.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-petrol-blue to-petrol-blue/80 p-12 lg:p-16">
              <div className="relative z-10 text-white space-y-8">
                <div className="space-y-4">
                  <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
                    La tua salute dentale
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-semibold">
                    Prevenzione e cura personalizzata
                  </h3>
                  <p className="text-lg text-white/90 leading-relaxed">
                    Crediamo nell'importanza della prevenzione. I nostri protocolli di igiene 
                    e controllo periodico ti aiutano a mantenere un sorriso sano e luminoso nel tempo.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">15+</div>
                    <div className="text-sm text-white/80">Anni di esperienza</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">1000+</div>
                    <div className="text-sm text-white/80">Pazienti soddisfatti</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">100%</div>
                    <div className="text-sm text-white/80">Dedizione</div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-luxury-gold/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
