import Header from './components/Header';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import Services from './components/Services';
import Automation from './components/Automation';
import Diferenciais from './components/Diferenciais';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import useReveal from './hooks/useReveal';

export default function App() {
  useReveal();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Ticker />
        <Services />
        <Automation />
        <Diferenciais />
        <Process />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
