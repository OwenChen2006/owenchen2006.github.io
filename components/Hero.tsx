import React from 'react';
import AnimatedCube from './AnimatedCube';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-left fade-in">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 glitch" data-text="Owen Chen">
              Owen Chen
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 font-semibold mb-8 neon-text">
              ML Engineer | Researcher | Full-Stack Developer
            </p>
            <p className="text-lg text-gray-400 max-w-xl">
              I build scalable, high-impact solutions at the intersection of machine learning, software engineering, and scientific discovery.
            </p>
             <a href="#projects" className="mt-8 inline-block bg-cyan-500/80 text-white font-bold py-3 px-8 rounded-md hover:bg-cyan-600/90 transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/50">
              View My Work
             </a>
          </div>
          <div className="flex justify-center items-center">
            <AnimatedCube />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
