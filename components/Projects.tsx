
import React from 'react';
import type { ProjectItem } from '../types';
import AnimatedSection from './AnimatedSection';

const projectData: ProjectItem[] = [
  {
    title: 'Blue Devil Eats',
    tech: ['Python', 'Javascript', 'React', 'Flask', 'REST API', 'NLP'],
    date: 'January 2025 - Present',
    description: [
      'Create an AI-driven full-stack web application leveraging REST API and NLP models and a Python/Flask backend to generate personalized meal plans from Duke restaurants with real-time interactive nutrition insights.',
    ],
    githubLink: 'https://github.com/OwenChen2006',
    siteLink: 'https://dukebdeats.colab.duke.edu'
  },
  {
    title: 'Vertex Detector in Coded Apertures',
    tech: ['Python', 'YOLO', 'OpenCV', 'Computer Vision'],
    date: '2025',
    description: [
      'Engineered a Computer Vision Model that utilizes the YOLO model to detect center vertices of coded apertures or similar figures with high noise with ~100% accuracy.'
    ]
  },
  {
    title: 'Custom MIPS-based Processor Core',
    tech: ['Logisim Evolution', 'Hardware Design'],
    date: 'March 2025 - April 2025',
    description: [
      'Engineered a 16-bit MIPS-style RISC processor in Logisim Evolution, featuring a custom ALU, tri-state-buffered register file, word-addressed memory architecture, and integrated I/O for keyboard and TTY display.',
    ],
    githubLink: 'https://github.com/OwenChen2006'
  },
  {
    title: 'Wind as Art',
    tech: ['C++', 'Arduino', 'Embedded Systems'],
    date: 'August 2024 - December 2024',
    description: [
      'Prototyped an Arduino-based system with flex sensor integration, custom circuitry, and embedded C++ firmware to translate real-time wind variations into dynamic LED displays for an interactive art installation requested by Duke Arts professor.',
    ],
    githubLink: 'https://github.com/OwenChen2006'
  },
  {
    title: 'Detection Efficiency Loophole Mitigation',
    tech: ['Python', 'Qiskit', 'Quantum Computing'],
    date: 'April 2023 - October 2023',
    description: [
      "Built a Python/Qiskit pipeline using NumPy, Matplotlib, and Qiskit’s Aer simulator to test and optimize Bell test algorithms, reducing error rate to 0.0001%.",
      'Deployed/validated results on IBM Quantum hardware (Qiskit Runtime); published findings at QIP 2024.',
    ],
    githubLink: 'https://github.com/OwenChen2006'
  },
  {
    title: 'VLSI Quantum Optimization',
    tech: ['Python', 'Qiskit'],
    date: 'June 2022',
    description: [
      'Developed VLSI optimization engine with Qiskit (VQE, QAOA, Grover), integrated with SciPy optimizers (SLSQP) to achieve 2x efficiency over NumPy baseline.',
      'Designed benchmarking framework with Matplotlib visualizations. Earned 2nd place in IBM-NTU hackathon.',
    ],
    githubLink: 'https://github.com/OwenChen2006'
  },
];

const ProjectCard: React.FC<{ item: ProjectItem }> = ({ item }) => (
  <div className="relative overflow-hidden bg-slate-800/70 backdrop-blur-md p-6 rounded-xl border neon-border h-full flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_24px_rgba(34,211,238,0.35)]">
    <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60"></div>
    <div className="pointer-events-none absolute -inset-20 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.18),transparent_50%)]"></div>
    <div className="flex-grow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-sky-400">{item.title}</h3>
        <div className="flex items-center gap-3">
          {item.siteLink && (
            <a href={item.siteLink} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-400 text-sm font-medium">
              Live
            </a>
          )}
          {item.githubLink && (
            <a href={item.githubLink} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-400 text-sm font-medium">
              GitHub
            </a>
          )}
        </div>
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
