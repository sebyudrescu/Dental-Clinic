# Dental Estetic - Landing Page

Landing page moderna e professionale per lo studio dentistico Dental Estetic a Mazzo Milanese.

## Caratteristiche

- ✨ Design premium medical luxury
- 📱 Completamente responsive
- ⚡ Sviluppato con Next.js 15 e React 19
- 🎨 Styled con Tailwind CSS
- ♿ Accessibile e SEO-friendly
- 🇮🇹 Contenuti in italiano

## Installazione e Avvio

```bash
# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev

# Build per produzione
npm run build

# Avvia il server di produzione
npm start
```

Apri [http://localhost:3000](http://localhost:3000) nel tuo browser per vedere il risultato.

## Struttura del Progetto

```
dental-estetic/
├── app/
│   ├── components/
│   │   ├── Hero.tsx          # Sezione hero con CTA
│   │   ├── Values.tsx        # Valori dello studio
│   │   ├── Services.tsx      # Servizi offerti
│   │   ├── WhyChooseUs.tsx   # Perché sceglierci
│   │   ├── Contact.tsx       # Sezione contatti
│   │   └── Footer.tsx        # Footer
│   ├── globals.css           # Stili globali
│   ├── layout.tsx            # Layout principale
│   └── page.tsx              # Homepage
├── public/                   # Asset statici
├── tailwind.config.ts        # Configurazione Tailwind
└── package.json
```

## Personalizzazione

### Colori

I colori del brand possono essere modificati in `tailwind.config.ts`:

```typescript
colors: {
  'luxury-gold': '#D4AF37',
  'petrol-blue': '#2C5F6F',
  'warm-gray': '#F5F5F0',
  'dark-gray': '#333333',
}
```

### Contenuti

Tutti i contenuti sono modificabili direttamente nei componenti nella cartella `app/components/`.

## Deployment

La landing page può essere deployata su qualsiasi piattaforma che supporta Next.js:

- **Vercel** (consigliato)
- Netlify
- AWS
- Google Cloud Platform

## Contatti Studio

- **Telefono**: +39 351 589 5953
- **Località**: Mazzo Milanese, Lombardia

## Licenza

© 2026 Dental Estetic. Tutti i diritti riservati.
