
import React from 'react';
import AnimatedSection from './AnimatedSection';

const headshotUrl = new URL('../src/assets/headshot.jpeg', import.meta.url).href;

const About: React.FC = () => {
  return (
    <AnimatedSection id="about">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          About Me
        </h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1 flex justify-center">
                <img src={headshotUrl} alt="Owen Chen" className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover border-4 border-sky-500 shadow-lg"/>
            </div>
            <div className="md:col-span-2 text-lg text-slate-300 space-y-4">
                <p>
                    I’m Owen Chen, an ECE/CS builder who lives where ML and software meets systems.
                </p>
                <p>
                    I turn messy signals into tools people trust— from a 16-bit MIPS CPU and reproducible ML pipelines in Duke’s Wang Lab to full-stack, agentic apps like BlueDevilEats and an NBA RAG chatbot.
                </p>
                <p>
                    My default mode is end-to-end: clean data contracts, observable backends, tight latency, simple UIs—so ideas survive first contact with real users.
                </p>
                <p>
                    I do this because shipping reliable software is my favorite kind of respect: it makes hard things feel easy and lets people focus on what matters, not the machinery underneath.
                </p>
                <p>
                    In short: I build glue and engines—so teams move faster, products feel dependable, and intelligence becomes usable every day.
                </p>
            </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default About;
