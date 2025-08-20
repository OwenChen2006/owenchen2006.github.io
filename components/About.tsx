
import React from 'react';
import AnimatedSection from './AnimatedSection';

const About: React.FC = () => {
  return (
    <AnimatedSection id="about">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          About Me
        </h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1 flex justify-center">
                <img src="https://picsum.photos/seed/owenchen/400/400" alt="Owen Chen" className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover border-4 border-sky-500 shadow-lg"/>
            </div>
            <div className="md:col-span-2 text-lg text-slate-400 space-y-4">
                <p>
                    I thrive on turning ambitious ideas into systems people can trust. As a dual major in Electrical & Computer Engineering and Computer Science at Duke University, I'm passionate about the intersection of hardware, software, and problem-solving.
                </p>
                <p>
                    From designing AI-powered nutrition platforms to engineering MIPS-based processors from the ground up, I approach every challenge with curiosity, precision, and a drive to deliver scalable solutions. My experience spans from academic research in material science to developing cancer detection platforms that exceed medical benchmarks.
                </p>
                <p>
                    I bring not just strong technical skills, but the initiative to take ideas from whiteboard sketches to production-ready code. I'm excited to contribute that same problem-solving energy to build software that's not only functional but transformative.
                </p>
            </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default About;
