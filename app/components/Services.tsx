'use client';

const services = [
  {
    title: "Odontoiatria Estetica",
    description: "Sbiancamento professionale, faccette dentali e ricostruzioni estetiche per un sorriso perfetto e naturale.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    gradient: 'from-amber-400 to-yellow-300',
    iconBg: 'bg-gradient-to-br from-amber-400 to-yellow-300',
    hoverGlow: 'group-hover:shadow-amber-400/50',
  },
  {
    title: "Implantologia",
    description: "Soluzioni implantari moderne e mini-invasive per sostituire uno o più denti mancanti con risultati duraturi.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    gradient: 'from-rose-500 to-orange-400',
    iconBg: 'bg-gradient-to-br from-rose-500 to-orange-400',
    hoverGlow: 'group-hover:shadow-rose-500/50',
  },
  {
    title: "Ortodonzia Invisibile",
    description: "Allineamento dentale con tecniche moderne e discrete, per correggere la posizione dei denti senza apparecchi visibili.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    gradient: 'from-emerald-500 to-teal-400',
    iconBg: 'bg-gradient-to-br from-emerald-500 to-teal-400',
    hoverGlow: 'group-hover:shadow-emerald-500/50',
  },
  {
    title: "Igiene e Prevenzione",
    description: "Pulizia professionale, detartrasi e controlli periodici per mantenere denti e gengive sani nel tempo.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    gradient: 'from-blue-500 to-cyan-400',
    iconBg: 'bg-gradient-to-br from-blue-500 to-cyan-400',
    hoverGlow: 'group-hover:shadow-blue-500/50',
  },
  {
    title: "Protesi Dentali",
    description: "Corone, ponti e protesi fisse o mobili realizzate con materiali di alta qualità per funzionalità ed estetica.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    gradient: 'from-purple-500 to-pink-500',
    iconBg: 'bg-gradient-to-br from-purple-500 to-pink-500',
    hoverGlow: 'group-hover:shadow-purple-500/50',
  },
  {
    title: "Conservativa",
    description: "Trattamento delle carie con tecniche mini-invasive e materiali estetici di ultima generazione.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    gradient: 'from-red-500 to-pink-500',
    iconBg: 'bg-gradient-to-br from-red-500 to-pink-500',
    hoverGlow: 'group-hover:shadow-red-500/50',
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
              className={`group relative bg-white p-6 sm:p-8 rounded-3xl hover:shadow-2xl ${service.hoverGlow} transition-all duration-700 border border-gray-100 hover:border-transparent hover:-translate-y-3 hover:scale-[1.02] overflow-hidden cursor-pointer`}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`
              }}
            >
              {/* Animated gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-all duration-700`}></div>
              
              {/* Decorative animated orbs */}
              <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${service.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-all duration-700`}></div>
              <div className={`absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br ${service.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-15 transition-all duration-700 delay-100`}></div>
              
              <div className="relative z-10">
                {/* Icon with pulsing effect */}
                <div className="mb-6 relative">
                  <div className={`absolute inset-0 ${service.iconBg} rounded-2xl blur-xl opacity-0 group-hover:opacity-60 animate-pulse`}></div>
                  <div className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl ${service.iconBg} flex items-center justify-center text-white shadow-2xl group-hover:shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-700`}>
                    <div className="transform group-hover:scale-110 transition-transform duration-500">
                      {service.icon}
                    </div>
                  </div>
                </div>
                
                {/* Title with gradient on hover */}
                <h3 className={`text-lg sm:text-xl font-bold text-dark-gray mb-3 sm:mb-4 leading-tight group-hover:bg-gradient-to-r group-hover:${service.gradient} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500`}>
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-sm mb-6 group-hover:text-gray-700 transition-colors">
                  {service.description}
                </p>
                
                {/* Animated CTA with arrow */}
                <div className="flex items-center gap-2 text-transparent bg-gradient-to-r bg-clip-text from-gray-400 to-gray-400 group-hover:from-current group-hover:to-current font-semibold text-sm opacity-50 group-hover:opacity-100 transition-all duration-500">
                  <span className={`bg-gradient-to-r ${service.gradient} bg-clip-text`}>Scopri di più</span>
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-current transform group-hover:translate-x-2 transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
                
                {/* Progress bar indicator */}
                <div className={`mt-6 h-1 w-0 bg-gradient-to-r ${service.gradient} rounded-full group-hover:w-full transition-all duration-1000 shadow-lg`}></div>
              </div>
              
              {/* Shimmer effect overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
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
