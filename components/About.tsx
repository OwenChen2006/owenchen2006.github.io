
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
                    I’m Owen Chen — an ECE/CS builder who got hooked on tech after spending way too many nights modding video games and realizing I could change how the world worked, even if it was just on screen. That curiosity turned into a love for building systems that actually do things — the kind that make hard problems feel easy for everyone else.
                </p>
                <p>
                    Most recently I shipped production ingestion at Microsoft AI: a fault-tolerant cashback pipeline, LLM triage with hard fallbacks, and pull requests a human still approves. Before that, a 16-bit MIPS CPU, spectroscopy models in Duke’s Wang Lab, and full-stack tools like Blue Devil Eats. I like the middle of the stack — data, models, and the interface — until something messy feels obvious.
                </p>
                <p>
                    For me, reliable software is a quiet kind of art — it earns trust without asking for attention. I build that kind of work; things that help teams move faster, make products feel dependable, and turn intelligence into something people can use every day.
                </p>
            </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default About;
