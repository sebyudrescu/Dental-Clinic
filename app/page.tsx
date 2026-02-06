import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Values from './components/Values';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import TeamWithImages from './components/TeamWithImages';
import BeforeAfter from './components/BeforeAfter';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <div id="chi-siamo">
        <Values />
      </div>
      <div id="servizi">
        <Services />
      </div>
      <WhyChooseUs />
      <BeforeAfter />
      <div id="testimonianze">
        <Testimonials />
      </div>
      <div id="team">
        <TeamWithImages />
      </div>
      <div id="contatti">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
