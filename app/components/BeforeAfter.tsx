'use client';

import { useState } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';

const treatments = [
  {
    id: 1,
    title: 'Sbiancamento Dentale',
    description: 'Risultato naturale e luminoso in una sola seduta',
    category: 'Estetica',
    // Immagini reali caricate per sbiancamento dentale
    beforeImage: '/whitening-before.png',
    afterImage: '/whitening-after.png',
  },
  {
    id: 2,
    title: 'Faccette Dentali',
    description: 'Trasformazione completa del sorriso con faccette in ceramica',
    category: 'Estetica',
    // Stesse immagini per tutti i servizi come richiesto
    beforeImage: '/whitening-before.png',
    afterImage: '/whitening-after.png',
  },
  {
    id: 3,
    title: 'Ortodonzia Invisibile',
    description: 'Allineamento perfetto senza apparecchi visibili',
    category: 'Ortodonzia',
    // Stesse immagini per tutti i servizi come richiesto
    beforeImage: '/whitening-before.png',
    afterImage: '/whitening-after.png',
  },
  {
    id: 4,
    title: 'Implantologia',
    description: 'Sostituzione naturale e duratura dei denti mancanti',
    category: 'Implantologia',
    // Stesse immagini per tutti i servizi come richiesto
    beforeImage: '/whitening-before.png',
    afterImage: '/whitening-after.png',
  },
];

export default function BeforeAfter() {
  const [selectedTreatment, setSelectedTreatment] = useState(0);

  return (
    <section className="py-16 sm:py-20 lg:py-32 bg-warm-gray relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-1/4 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-petrol-blue/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-l from-luxury-gold/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Badge variant="secondary" icon={<Sparkles className="w-4 h-4" />}>
            I nostri risultati
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-dark-gray mb-4 sm:mb-6 mt-4 sm:mt-6 leading-tight px-4">
            Trasformazioni
            <span className="block font-semibold mt-2 bg-gradient-to-r from-petrol-blue to-luxury-gold bg-clip-text text-transparent">
              che parlano da sole
            </span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-luxury-gold to-petrol-blue mx-auto mb-4 sm:mb-6 rounded-full"></div>
          <p className="text-base sm:text-lg text-gray-600 font-light leading-relaxed px-4">
            Ogni sorriso è unico. Guarda alcuni dei risultati straordinari
            che abbiamo ottenuto per i nostri pazienti.
          </p>
        </div>

        {/* Treatment Selector */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10 sm:mb-12 px-4">
          {treatments.map((treatment, index) => (
            <button
              key={treatment.id}
              onClick={() => setSelectedTreatment(index)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 ${
                selectedTreatment === index
                  ? 'bg-petrol-blue text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg'
              }`}
            >
              {treatment.title}
            </button>
          ))}
        </div>

        {/* Before/After Display */}
        <div className="max-w-5xl mx-auto">
          <Card hover className="p-6 sm:p-8 lg:p-12">
            <div className="space-y-6 sm:space-y-8">
              {/* Treatment Info */}
              <div className="text-center space-y-3 sm:space-y-4">
                <Badge variant="outline">
                  {treatments[selectedTreatment].category}
                </Badge>
                <h3 className="text-2xl sm:text-3xl font-semibold text-dark-gray px-4 leading-tight">
                  {treatments[selectedTreatment].title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
                  {treatments[selectedTreatment].description}
                </p>
              </div>

              {/* Before/After Images */}
              <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
                {/* Before */}
                <div className="group relative">
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-block px-4 py-2 bg-red-500 text-white text-sm font-semibold rounded-lg shadow-lg">
                      Prima
                    </span>
                  </div>
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02]">
                    <img
                      src={treatments[selectedTreatment].beforeImage}
                      alt={`${treatments[selectedTreatment].title} - Prima del trattamento`}
                      className="w-full h-full object-cover object-center"
                      style={{ objectFit: 'cover' }}
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=90';
                      }}
                    />
                    {/* Subtle overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>

                {/* After */}
                <div className="group relative">
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-block px-4 py-2 bg-green-500 text-white text-sm font-semibold rounded-lg shadow-lg">
                      Dopo
                    </span>
                  </div>
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02]">
                    <img
                      src={treatments[selectedTreatment].afterImage}
                      alt={`${treatments[selectedTreatment].title} - Dopo il trattamento`}
                      className="w-full h-full object-cover object-center"
                      style={{ objectFit: 'cover' }}
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=90';
                      }}
                    />
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-luxury-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>

              {/* Transformation Arrow */}
              <div className="flex justify-center px-4">
                <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-petrol-blue to-luxury-gold rounded-full text-white text-sm sm:text-base font-medium shadow-lg">
                  <span>Trasformazione completa</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>

              {/* Features List */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-gray-100">
                <div className="flex items-center gap-3 justify-center">
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-luxury-gold flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700 font-medium">Risultato veloce</span>
                </div>
                <div className="flex items-center gap-3 justify-center">
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-petrol-blue flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700 font-medium">Precisione massima</span>
                </div>
                <div className="flex items-center gap-3 justify-center">
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-luxury-gold flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700 font-medium">Qualità premium</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center mt-10 sm:mt-12 px-4">
          <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
            Vuoi ottenere risultati simili per il tuo sorriso?
          </p>
          <a
            href="#contatti"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-petrol-blue text-white rounded-lg hover:bg-opacity-90 transition-all duration-300 hover:scale-105 shadow-lg font-medium text-base sm:text-lg"
          >
            Prenota una consulenza gratuita
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
