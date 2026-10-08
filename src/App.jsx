import Footer from './components/Footer';
import Hero from './components/Hero';
import Launch from './components/Launch';
import Navbar from './components/Navbar';
import Services from './components/Services';
import WhyUs from './components/WhyUs';

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-[60] rounded-full bg-ink-900 px-5 py-3 text-sm font-semibold text-white focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Services />
        <WhyUs />
        <Launch />
      </main>
      <Footer />
    </>
  );
}
