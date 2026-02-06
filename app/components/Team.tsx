'use client';

import { Award, Heart, Sparkles, GraduationCap } from 'lucide-react';
import { Card } from './ui/Card';

const teamMembers = [
  {
    id: 1,
    name: 'Dr. Marco Dental',
    role: 'Direttore Sanitario',
    specialization: 'Odontoiatria Estetica & Implantologia',
    experience: '15+ anni',
    description:
      'Specializzato in odontoiatria estetica avanzata con un approccio orientato al risultato naturale e duraturo.',
    icon: Award,
  },
  {
    id: 2,
    name: 'Dr.ssa Elena Smile',
    role: 'Ortodonzista',
    specialization: 'Ortodonzia Invisibile',
    experience: '12+ anni',
    description:
      'Esperta in trattamenti ortodontici invisibili per adulti e bambini, con focus sul comfort del paziente.',
    icon: Sparkles,
  },
  {
    id: 3,
    name: 'Dr. Paolo Care',
    role: 'Igienista Dentale',
    specialization: 'Igiene e Prevenzione',
    experience: '10+ anni',
    description:
      'Dedicato alla prevenzione e alla cura della salute orale con protocolli personalizzati per ogni paziente.',
    icon: Heart,
  },
  {
    id: 4,
    name: 'Dr.ssa Sofia Tech',
    role: 'Protesista',
    specialization: 'Protesi Digitale',
    experience: '8+ anni',
    description:
      'Specialista in protesi dentali con tecnologie CAD/CAM per soluzioni estetiche e funzionali di alta qualità.',
    icon: GraduationCap,
  },
];

export default function Team() {
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
        <div className="grid md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => {
            const IconComponent = member.icon;
            return (
              <Card
                key={member.id}
                hover
                className="group p-8 relative overflow-hidden"
              >
                {/* Background Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-petrol-blue/0 to-luxury-gold/0 group-hover:from-petrol-blue/5 group-hover:to-luxury-gold/5 transition-all duration-500"></div>

                {/* Content */}
                <div className="relative space-y-6">
                  {/* Icon & Badge */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-petrol-blue to-luxury-gold p-[2px] group-hover:scale-110 transition-transform duration-300">
                        <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center">
                          <IconComponent className="w-8 h-8 text-petrol-blue" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-dark-gray group-hover:text-petrol-blue transition-colors duration-300">
                          {member.name}
                        </h3>
                        <p className="text-luxury-gold font-medium">{member.role}</p>
                      </div>
                    </div>
                  </div>

                  {/* Specialization */}
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-petrol-blue/10 rounded-full">
                      <GraduationCap className="w-4 h-4 text-petrol-blue" />
                      <span className="text-sm font-medium text-petrol-blue">
                        {member.specialization}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {member.description}
                  </p>

                  {/* Experience Badge */}
                  <div className="flex items-center gap-2 pt-4 border-t border-gray-100">
                    <Award className="w-5 h-5 text-luxury-gold" />
                    <span className="text-sm font-medium text-gray-700">
                      Esperienza: {member.experience}
                    </span>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-luxury-gold/20 rounded-xl transition-all duration-300"></div>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Card glass className="inline-block p-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-petrol-blue to-luxury-gold flex items-center justify-center">
                  <Heart className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-semibold text-dark-gray mb-2">
                  Vuoi conoscere il nostro team?
                </h3>
                <p className="text-gray-600">
                  Prenota una consulenza gratuita e scopri come possiamo prenderci cura del tuo sorriso.
                </p>
              </div>
              <div className="flex-shrink-0">
                <a
                  href="tel:+393515895953"
                  className="inline-flex items-center justify-center px-6 py-3 bg-petrol-blue text-white rounded-lg hover:bg-opacity-90 transition-all duration-300 hover:scale-105 shadow-lg font-medium"
                >
                  Contattaci
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
