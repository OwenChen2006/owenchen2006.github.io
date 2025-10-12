
import React from 'react';
import type { ExperienceItem } from '../types';
import AnimatedSection from './AnimatedSection';
import { BriefcaseIcon, HelpCircleIcon } from './Icons';

const experienceData: ExperienceItem[] = [
  {
    role: 'Software Developer Intern',
    company: 'Calidar Medical',
    date: 'June 2025 - September 2025',
    location: 'Durham, NC',
    description: [
      'Developed CNN-based diagnostic algorithms that helped triple breast cancer detection rates through XRD imaging—because every earlier diagnosis matters.',
      'Engineered a spatially aware classifier trained on 3M+ datapoints, reaching 0.99 ROC AUC and surpassing medical benchmarks.',
      'Trained a 2-stage YOLO‑v8 CV model to classify coded aperture vertices with 1.00 recall; narrowed 3000+ to 38 potential investors using a transformer‑based NLP engine.',
    ],
    iconName: 'briefcase',
  },
  {
    role: 'Technical Consultant',
    company: 'Fortune 100 motor company (question-mark logo) via 180 Degrees Consulting',
    date: 'August 2025 - Present',
    location: 'Remote',
    description: [
      'Prototyped multi-agent AI workflows for global supply chain risk analysis—designing prompt orchestration and safe agent behaviors to turn noisy data into confident actions.',
      'Shipped as a versioned REST API with CI-backed quality checks; reduced time from ad‑hoc notebooks to reproducible analysis in minutes using LangChain, FAISS, and FastAPI.',
    ],
    iconName: 'help',
  },
  {
    role: 'Undergraduate Researcher',
    company: 'The Wang Lab @ Duke University',
    date: 'January 2025 - Present',
    location: 'Durham, NC',
    description: [
      'Lead ML sub-team building an automated pipeline for spectroscopy: denoising, feature engineering, and model evaluation delivered through a clean REST interface.',
      'Cut path from experimental data to decisions from hours to minutes—unlocking faster material discovery in atomic-layer deposition.',
    ],
    iconName: 'briefcase',
  },
  {
    role: 'Semiconductor Fab Intern',
    company: 'Energen Semiconductor',
    date: 'June 2023 - September 2023',
    location: 'Jinan',
    description: [
      'Executed semiconductor fabrication workflows, using SEM to identify nanoscale defects and optimize chip yields.',
      'Streamlined wafer inventories by analyzing fab data, eliminating non-qualifying batches and boosting throughput.',
    ],
  },
];

const ExperienceCard: React.FC<{ item: ExperienceItem }> = ({ item }) => (
  <div className="mb-8 flex justify-between items-center w-full">
    <div className="order-1 w-5/12"></div>
    <div className="z-20 flex items-center order-1 bg-cyan-500/90 shadow-xl w-12 h-12 rounded-full shadow-cyan-500/40">
      <h1 className="mx-auto text-white font-semibold text-lg">
        {item.iconName === 'help' ? (
          <HelpCircleIcon className="w-6 h-6" />
        ) : (
          <BriefcaseIcon className="w-6 h-6" />
        )}
      </h1>
    </div>
    <div className="order-1 bg-slate-800/80 backdrop-blur-sm rounded-lg shadow-xl w-5/12 px-6 py-4 border neon-border">
      <h3 className="mb-2 font-bold text-sky-400 text-xl">{item.role}</h3>
      <p className="text-sm font-medium leading-snug tracking-wide text-slate-300">{item.company} | {item.location}</p>
      <p className="text-sm text-slate-500">{item.date}</p>
      <ul className="mt-4 list-disc list-inside text-slate-400 space-y-1">
        {item.description.map((desc, i) => <li key={i}>{desc}</li>)}
      </ul>
    </div>
  </div>
);

const Experience: React.FC = () => {
  return (
    <AnimatedSection id="experience">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Experience
        </h2>
        <div className="relative wrap overflow-hidden h-full">
          <div className="border-2-2 absolute border-opacity-30 border-cyan-600 h-full border shadow-[0_0_12px_rgba(34,211,238,0.4)]" style={{ left: '50%' }}></div>
          {experienceData.map((item, index) => (
             <div key={index} className={`mb-8 flex justify-between ${index % 2 === 0 ? 'flex-row-reverse' : ''} items-center w-full`}>
                <div className="order-1 w-5/12"></div>
                <div className="z-20 flex items-center order-1 bg-sky-500 shadow-xl w-12 h-12 rounded-full">
                  <BriefcaseIcon className="mx-auto text-white w-6 h-6" />
                </div>
                <div className="order-1 bg-slate-800/80 backdrop-blur-sm rounded-lg shadow-xl w-5/12 px-6 py-4 border border-slate-700">
                  <h3 className="mb-2 font-bold text-sky-400 text-xl">{item.role}</h3>
                  <p className="text-sm font-medium leading-snug tracking-wide text-slate-300">{item.company} | {item.location}</p>
                  <p className="text-sm text-slate-500">{item.date}</p>
                  <ul className="mt-4 list-disc list-inside text-slate-400 space-y-1">
                    {item.description.map((desc, i) => <li key={i}>{desc}</li>)}
                  </ul>
                </div>
              </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Experience;
