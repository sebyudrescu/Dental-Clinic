'use client';

export default function Footer() {
  return (
    <footer className="bg-dark-gray text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-2">Dental Estetic</h3>
              <div className="w-12 h-1 bg-luxury-gold"></div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Studio dentistico di eccellenza a Mazzo Milanese. 
              Odontoiatria estetica avanzata per il tuo sorriso perfetto.
            </p>
          </div>

          {/* Contatti */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Contatti</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-luxury-gold mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="text-gray-300">Mazzo Milanese</p>
                  <p className="text-gray-400 text-sm">Lombardia, Italia</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-luxury-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a 
                  href="tel:+393515895953"
                  className="text-gray-300 hover:text-luxury-gold transition-colors"
                >
                  +39 351 589 5953
                </a>
              </div>
            </div>
          </div>

          {/* Orari */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Orari di Apertura</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex justify-between">
                <span>Lunedì - Venerdì</span>
                <span className="text-gray-300">9:00 - 19:00</span>
              </div>
              <div className="flex justify-between">
                <span>Sabato</span>
                <span className="text-gray-300">9:00 - 13:00</span>
              </div>
              <div className="flex justify-between">
                <span>Domenica</span>
                <span className="text-gray-500">Chiuso</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              © {new Date().getFullYear()} Dental Estetic. Tutti i diritti riservati.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-luxury-gold transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-luxury-gold transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
