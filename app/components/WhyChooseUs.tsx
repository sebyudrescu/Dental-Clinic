'use client';

export default function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-20 lg:py-32 bg-gradient-to-br from-warm-gray/30 via-white to-warm-gray/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-dark-gray mb-4 sm:mb-6 leading-tight">
                Un'esperienza di cura
                <span className="block font-semibold mt-2">che fa la differenza</span>
              </h2>
              <div className="w-16 h-1 bg-luxury-gold mb-4 sm:mb-6"></div>
            </div>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              In Dental Estetic crediamo che ogni paziente meriti un'attenzione personalizzata 
              e un'esperienza di cura confortevole e rassicurante. Dal primo appuntamento, 
              ti accompagneremo con professionalità e dedizione verso il sorriso che desideri.
            </p>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-petrol-blue to-petrol-blue/80 flex items-center justify-center shadow-lg">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-semibold text-dark-gray mb-1 sm:mb-2">
                    Tecnologie all'avanguardia
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Investiamo nelle migliori attrezzature per garantire diagnosi precise 
                    e trattamenti minimamente invasivi.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-luxury-gold to-luxury-gold/80 flex items-center justify-center shadow-lg">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-semibold text-dark-gray mb-1 sm:mb-2">
                    Ambiente accogliente
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Uno studio moderno e curato nei minimi dettagli, pensato per farti sentire 
                    a tuo agio in ogni momento.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-petrol-blue to-luxury-gold flex items-center justify-center shadow-lg">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-semibold text-dark-gray mb-1 sm:mb-2">
                    Team esperto e attento
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Professionisti qualificati che mettono al centro le tue esigenze, 
                    ascoltandoti e guidandoti verso le migliori soluzioni.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-petrol-blue via-petrol-blue to-petrol-blue/90 p-8 sm:p-10 lg:p-16">
              <div className="relative z-10 text-white space-y-6 sm:space-y-8">
                <div className="space-y-3 sm:space-y-4">
                  <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium">
                    La tua salute dentale
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">
                    Prevenzione e cura personalizzata
                  </h3>
                  <p className="text-base sm:text-lg text-white/90 leading-relaxed">
                    Crediamo nell'importanza della prevenzione. I nostri protocolli di igiene 
                    e controllo periodico ti aiutano a mantenere un sorriso sano e luminoso nel tempo.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 sm:pt-8 border-t border-white/20">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">15+</div>
                    <div className="text-xs sm:text-sm text-white/80 leading-tight">Anni di esperienza</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">1000+</div>
                    <div className="text-xs sm:text-sm text-white/80 leading-tight">Pazienti soddisfatti</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">100%</div>
                    <div className="text-xs sm:text-sm text-white/80 leading-tight">Dedizione</div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-luxury-gold/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
