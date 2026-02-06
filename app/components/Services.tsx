'use client';

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const services = [
  {
    id: 1,
    title: "Odontoiatria Estetica",
    description: "Sbiancamento professionale, faccette dentali e ricostruzioni estetiche per un sorriso perfetto e naturale. Utilizziamo tecniche avanzate per migliorare l'aspetto dei tuoi denti mantenendo la massima naturalezza.",
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Implantologia",
    description: "Soluzioni implantari moderne e mini-invasive per sostituire uno o più denti mancanti con risultati duraturi. Gli impianti dentali rappresentano la soluzione più avanzata per ripristinare la funzionalità e l'estetica del tuo sorriso.",
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Ortodonzia Invisibile",
    description: "Allineamento dentale con tecniche moderne e discrete, per correggere la posizione dei denti senza apparecchi visibili. Perfetto per adulti e ragazzi che desiderano un sorriso perfetto senza rinunciare all'estetica.",
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Igiene e Prevenzione",
    description: "Pulizia professionale, detartrasi e controlli periodici per mantenere denti e gengive sani nel tempo. La prevenzione è la chiave per evitare problemi futuri e mantenere un sorriso sano e luminoso.",
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Protesi Dentali",
    description: "Corone, ponti e protesi fisse o mobili realizzate con materiali di alta qualità per funzionalità ed estetica. Ogni protesi è personalizzata per garantire comfort, durata e un aspetto naturale.",
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Conservativa",
    description: "Trattamento delle carie con tecniche mini-invasive e materiali estetici di ultima generazione. Preserviamo il più possibile la struttura naturale del dente, garantendo risultati duraturi e invisibili.",
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  }
];

export default function Services() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleService = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 sm:py-20 lg:py-32 relative overflow-hidden">
      {/* Rich Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-warm-gray/30 via-30% to-white"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-petrol-blue/5 via-transparent via-50% to-luxury-gold/5"></div>
      
      {/* Geometric Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        {/* Diagonal lines */}
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 60px,
            #1a4d4d 60px,
            #1a4d4d 61px
          )`
        }}></div>
        
        {/* Circles pattern */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circles" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="30" fill="none" stroke="#d4a574" strokeWidth="1"/>
              <circle cx="50" cy="50" r="15" fill="none" stroke="#1a4d4d" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circles)" />
        </svg>
      </div>
      
      {/* Decorative gradient orbs */}
      <div className="absolute top-10 sm:top-20 right-5 sm:right-10 w-48 h-48 sm:w-64 sm:h-64 bg-luxury-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 sm:bottom-20 left-5 sm:left-10 w-56 h-56 sm:w-80 sm:h-80 bg-petrol-blue/5 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-dark-gray mb-4 sm:mb-6 leading-tight">
            I nostri
            <span className="block font-semibold mt-2 bg-gradient-to-r from-petrol-blue to-luxury-gold bg-clip-text text-transparent">
              Servizi
            </span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-luxury-gold to-petrol-blue mx-auto mb-4 sm:mb-6 rounded-full"></div>
          <p className="text-base sm:text-lg text-gray-600 font-light leading-relaxed px-4">
            Una gamma completa di trattamenti odontoiatrici per prenderci cura 
            del tuo sorriso in ogni sua esigenza.
          </p>
        </div>

        {/* Services Accordion */}
        <div className="space-y-3">
          {services.map((service, index) => {
            const isOpen = openId === service.id;
            
            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-2xl border-2 border-gray-100 hover:border-petrol-blue/20 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-md"
                style={{
                  animation: `fadeInUp 0.5s ease-out ${index * 0.08}s backwards`
                }}
              >
                {/* Accent line - sempre visibile quando aperto */}
                <div 
                  className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-petrol-blue to-luxury-gold transition-all duration-300 ${
                    isOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
                  }`}
                />
                
                {/* Header - Always visible */}
                <button
                  onClick={() => toggleService(service.id)}
                  className="w-full text-left p-4 sm:p-5 md:p-6 flex items-center gap-3 sm:gap-4 focus:outline-none active:scale-[0.99] transition-transform"
                  aria-expanded={isOpen}
                  aria-label={`${isOpen ? 'Chiudi' : 'Apri'} ${service.title}`}
                >
                  {/* Icon */}
                  <div className={`flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center transition-all duration-300 p-2 sm:p-2.5 md:p-3 ${
                    isOpen 
                      ? 'bg-gradient-to-br from-petrol-blue to-luxury-gold text-white shadow-lg scale-110' 
                      : 'bg-gradient-to-br from-petrol-blue/10 to-luxury-gold/10 text-petrol-blue'
                  }`}>
                    {service.icon}
                  </div>
                  
                  {/* Title */}
                  <div className="flex-1 min-w-0">
                    <h3 className={`text-base sm:text-lg md:text-xl font-semibold transition-colors duration-300 leading-tight ${
                      isOpen ? 'text-petrol-blue' : 'text-dark-gray'
                    }`}>
                      {service.title}
                    </h3>
                  </div>
                  
                  {/* Chevron */}
                  <div className="flex-shrink-0">
                    <ChevronDown 
                      className={`w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300 ${
                        isOpen 
                          ? 'text-petrol-blue rotate-180' 
                          : 'text-gray-400 group-hover:text-petrol-blue'
                      }`}
                    />
                  </div>
                </button>
                
                {/* Content - Expandable */}
                <div 
                  className={`transition-all duration-500 ease-in-out ${
                    isOpen 
                      ? 'max-h-96 opacity-100' 
                      : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6 pt-0">
                    <div className="pl-0 sm:pl-14 md:pl-[72px]">
                      {/* Divider */}
                      <div className="h-px bg-gradient-to-r from-petrol-blue/20 via-luxury-gold/20 to-transparent mb-3 sm:mb-4"></div>
                      
                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                        {service.description}
                      </p>
                      
                      {/* Optional CTA */}
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          document.getElementById('contatti')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="mt-3 sm:mt-4 inline-flex items-center gap-2 text-sm font-medium text-petrol-blue hover:text-luxury-gold active:scale-95 transition-all group/cta touch-manipulation"
                        aria-label={`Richiedi informazioni su ${service.title}`}
                      >
                        <span>Richiedi informazioni</span>
                        <svg className="w-4 h-4 transform group-hover/cta:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10 sm:mt-12">
          <p className="text-gray-600 mb-4 text-sm sm:text-base">
            Non trovi il servizio che cerchi?
          </p>
          <a
            href="#contatti"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-white bg-gradient-to-r from-petrol-blue to-petrol-blue/90 rounded-xl hover:shadow-xl hover:shadow-petrol-blue/20 transition-all duration-300 hover:scale-105"
          >
            Contattaci per maggiori informazioni
          </a>
        </div>
      </div>
    </section>
  );
}
