'use client';

import { Award, GraduationCap } from 'lucide-react';
import { Card } from './ui/Card';

const teamMembers = [
  {
    id: 1,
    name: 'Dr. Marco Dental',
    role: 'Direttore Sanitario',
    specialization: 'Odontoiatria Estetica & Implantologia',
    experience: '15+ anni',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80',
    description: 'Specializzato in odontoiatria estetica avanzata con un approccio orientato al risultato naturale e duraturo.',
  },
  {
    id: 2,
    name: 'Dr.ssa Elena Smile',
    role: 'Ortodonzista',
    specialization: 'Ortodonzia Invisibile',
    experience: '12+ anni',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80',
    description: 'Esperta in trattamenti ortodontici invisibili per adulti e bambini, con focus sul comfort del paziente.',
  },
  {
    id: 3,
    name: 'Dr. Paolo Care',
    role: 'Igienista Dentale',
    specialization: 'Igiene e Prevenzione',
    experience: '10+ anni',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80',
    description: 'Dedicato alla prevenzione e alla cura della salute orale con protocolli personalizzati per ogni paziente.',
  },
  {
    id: 4,
    name: 'Dr.ssa Sofia Tech',
    role: 'Protesista',
    specialization: 'Protesi Digitale',
    experience: '8+ anni',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80',
    description: 'Specialista in protesi dentali con tecnologie CAD/CAM per soluzioni estetiche e funzionali di alta qualità.',
  },
];

export default function TeamWithImages() {
  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-warm-gray rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-warm-gray rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-dark-gray mb-6">
            Il nostro
            <span className="block font-semibold mt-2 bg-gradient-to-r from-petrol-blue to-luxury-gold bg-clip-text text-transparent">
              Team di esperti
            </span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-luxury-gold to-petrol-blue mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 font-light leading-relaxed">
            Professionisti qualificati e appassionati, costantemente aggiornati sulle
            ultime tecniche odontoiatriche per offrirti il meglio.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <Card
              key={member.id}
              hover
              className="group overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-gray-200">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%23f0f0f0" width="400" height="400"/%3E%3Ctext fill="%23666" x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-size="24"%3E' + member.name + '%3C/text%3E%3C/svg%3E';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-dark-gray group-hover:text-petrol-blue transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-luxury-gold font-medium">{member.role}</p>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-petrol-blue/10 rounded-full">
                  <GraduationCap className="w-4 h-4 text-petrol-blue" />
                  <span className="text-xs font-medium text-petrol-blue">
                    {member.specialization}
                  </span>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                  {member.description}
                </p>

                <div className="flex items-center gap-2 pt-2 border-t border-gray-100">
                  <Award className="w-4 h-4 text-luxury-gold" />
                  <span className="text-sm font-medium text-gray-700">
                    {member.experience}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
