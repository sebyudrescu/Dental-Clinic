'use client';

const values = [
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Innovazione e Tecnologia",
    description: "Utilizziamo le tecnologie più avanzate per garantire trattamenti precisi, confortevoli e risultati duraturi."
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Cura Personalizzata",
    description: "Ogni paziente è unico. Creiamo piani di trattamento su misura per le tue esigenze specifiche e i tuoi obiettivi."
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Massima Igiene e Sicurezza",
    description: "Protocolli di sterilizzazione rigorosi e ambienti sicuri per la tua tranquillità e il tuo benessere."
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "Esperienza e Professionalità",
    description: "Un team di professionisti altamente qualificati, in continua formazione per offrirti il meglio dell'odontoiatria moderna."
  }
];

export default function Values() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-dark-gray mb-6">
            Perché scegliere
            <span className="block font-semibold mt-2">Dental Estetic</span>
          </h2>
          <div className="w-16 h-1 bg-luxury-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 font-light leading-relaxed">
            La nostra missione è offrirti un'esperienza di cura dentale eccellente, 
            dove tecnologia, competenza e attenzione umana si incontrano.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-white to-warm-gray hover:from-white hover:to-white hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-luxury-gold/30 hover:-translate-y-2"
            >
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-luxury-gold/10 to-transparent rounded-bl-full rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative">
                <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-petrol-blue to-petrol-blue/80 flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-dark-gray mb-4 group-hover:text-petrol-blue transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {value.description}
                </p>
                
                {/* Progress indicator */}
                <div className="mt-6 h-1 w-0 bg-gradient-to-r from-petrol-blue to-luxury-gold rounded-full group-hover:w-full transition-all duration-700"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
