'use client';

const services = [
  {
    title: "Odontoiatria Estetica",
    description: "Sbiancamento professionale, faccette dentali e ricostruzioni estetiche per un sorriso perfetto e naturale.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    )
  },
  {
    title: "Implantologia",
    description: "Soluzioni implantari moderne e mini-invasive per sostituire uno o più denti mancanti con risultati duraturi.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    title: "Ortodonzia Invisibile",
    description: "Allineamento dentale con tecniche moderne e discrete, per correggere la posizione dei denti senza apparecchi visibili.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    )
  },
  {
    title: "Igiene e Prevenzione",
    description: "Pulizia professionale, detartrasi e controlli periodici per mantenere denti e gengive sani nel tempo.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: "Protesi Dentali",
    description: "Corone, ponti e protesi fisse o mobili realizzate con materiali di alta qualità per funzionalità ed estetica.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  },
  {
    title: "Conservativa",
    description: "Trattamento delle carie con tecniche mini-invasive e materiali estetici di ultima generazione.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  }
];

export default function Services() {
  return (
    <section className="py-16 sm:py-20 lg:py-32 bg-warm-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-dark-gray mb-4 sm:mb-6 leading-tight">
            I nostri
            <span className="block font-semibold mt-2">Servizi</span>
          </h2>
          <div className="w-16 h-1 bg-luxury-gold mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg text-gray-600 font-light leading-relaxed px-4">
            Una gamma completa di trattamenti odontoiatrici per prenderci cura 
            del tuo sorriso in ogni sua esigenza.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white p-6 sm:p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-luxury-gold/50 hover:-translate-y-2 overflow-hidden"
            >
              {/* Background gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-petrol-blue/0 to-luxury-gold/0 group-hover:from-petrol-blue/5 group-hover:to-luxury-gold/5 transition-all duration-500"></div>
              
              <div className="relative">
                <div className="flex items-start gap-4 sm:gap-5 mb-4 sm:mb-5">
                  <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-petrol-blue to-petrol-blue/80 flex items-center justify-center text-white shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500">
                    {service.icon}
                  </div>
                  <div className="flex-1 pt-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold text-dark-gray mb-1 sm:mb-2 group-hover:text-petrol-blue transition-colors leading-tight">
                      {service.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed text-sm mb-4 sm:mb-6">
                  {service.description}
                </p>
                
                {/* CTA Link - Hidden on mobile for cleaner look */}
                <div className="hidden sm:flex items-center gap-2 text-petrol-blue font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span>Scopri di più</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                
                {/* Decorative corner */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-luxury-gold/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <a
            href="#contatti"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-white bg-petrol-blue rounded-lg hover:bg-opacity-90 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Richiedi maggiori informazioni
          </a>
        </div>
      </div>
    </section>
  );
}
