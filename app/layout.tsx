import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Dental Estetic | Studio Dentistico a Mazzo Milanese",
  description: "Studio dentistico di eccellenza a Mazzo Milanese. Odontoiatria estetica avanzata, tecnologie moderne e attenzione al paziente. Prenota la tua visita.",
  keywords: "dentista, studio dentistico, odontoiatria estetica, Mazzo Milanese, Lombardia, igiene dentale",
  openGraph: {
    title: "Dental Estetic | Studio Dentistico a Mazzo Milanese",
    description: "Studio dentistico di eccellenza a Mazzo Milanese. Odontoiatria estetica avanzata e tecnologie moderne.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
