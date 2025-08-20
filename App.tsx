
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import Certificates from './components/Certificates';
import Publications from './components/Publications';
import FloatingCat from './components/FloatingCat';

const App: React.FC = () => {
  return (
    <div className="relative z-0 animated-gradient">
      <ParticleBackground />
      <FloatingCat />
      <div className="relative z-10 scanlines">
        <Header />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Certificates />
          <Publications />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
