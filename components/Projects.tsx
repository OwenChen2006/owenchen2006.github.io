
import React from 'react';
import type { ProjectItem } from '../types';
import AnimatedSection from './AnimatedSection';
import { GithubIcon } from './Icons';

const projectData: ProjectItem[] = [
  {
    title: 'Blue Devil Eats',
    tech: ['Python', 'Javascript', 'React', 'Flask', 'NLP'],
    date: 'January 2025 - Present',
    description: [
      'AI-driven full-stack web app leveraging NLP models and a custom Python/Flask backend.',
      'Generates personalized meal plans from Duke restaurants with real-time interactive nutrition insights.',
    ],
    githubLink: 'https://github.com/OwenChen2006'
  },
  {
    title: 'Custom MIPS-based Processor Core',
    tech: ['Logisim Evolution', 'Hardware Design'],
    date: 'March 2025 - April 2025',
    description: [
      'Engineered a 16-bit MIPS-style RISC processor in Logisim Evolution.',
      'Features a custom ALU, tri-state-buffered register file, and integrated I/O for keyboard and TTY display.',
    ],
    githubLink: 'https://github.com/OwenChen2006'
  },
  {
    title: 'Wind as Art',
    tech: ['C++', 'Arduino', 'Embedded Systems'],
    date: 'August 2024 - December 2024',
    description: [
      'Prototyped an Arduino-based system with flex sensor integration and custom circuitry.',
      'Embedded C++ firmware translates real-time wind variations into dynamic LED displays for an interactive art installation.',
    ],
    githubLink: 'https://github.com/OwenChen2006'
  },
  {
    title: 'Detection Efficiency Loophole Mitigation',
    tech: ['Python', 'Qiskit', 'Quantum Computing'],
    date: 'April 2023 - October 2023',
    description: [
      'Designed a quantum algorithm to close the detection efficiency loophole in Bell test experiments.',
      'Achieved a record-low percent error of 0.000109, culminating in a peer-reviewed publication at QIP 2024.',
    ],
    githubLink: 'https://github.com/OwenChen2006'
  },
  {
    title: 'VLSI Quantum Optimization',
    tech: ['Python', 'Qiskit'],
    date: 'June 2022',
    description: [
      'Won 2nd place at a national IBM-NTU hackathon for an optimized VLSI placement quantum algorithm.',
      'Doubled efficiency compared to traditional NumPy Eigensolver with varied quantum algorithms.',
    ],
    githubLink: 'https://github.com/OwenChen2006'
  },
];

const ProjectCard: React.FC<{ item: ProjectItem }> = ({ item }) => (
  <div className="bg-slate-800/80 backdrop-blur-sm p-6 rounded-lg border border-slate-700 h-full flex flex-col transition-all duration-300 hover:border-sky-500 hover:-translate-y-2">
    <div className="flex-grow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-sky-400">{item.title}</h3>
        {item.githubLink && (
          <a href={item.githubLink} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-400">
            <GithubIcon className="w-6 h-6" />
          </a>
        )}
      </div>
      <p className="text-sm text-slate-500 mb-4">{item.date}</p>
      <ul className="list-disc list-inside text-slate-400 space-y-2 mb-4">
        {item.description.map((d, i) => <li key={i}>{d}</li>)}
      </ul>
    </div>
    <div className="flex flex-wrap gap-2 mt-auto">
      {item.tech.map((t, i) => (
        <span key={i} className="bg-slate-700 text-sky-300 text-xs font-semibold px-2.5 py-1 rounded-full">
          {t}
        </span>
      ))}
    </div>
  </div>
);

const Projects: React.FC = () => {
  return (
    <AnimatedSection id="projects">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <ProjectCard key={index} item={project} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Projects;
