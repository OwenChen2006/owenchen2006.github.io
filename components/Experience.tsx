
import React from 'react';
import type { ExperienceItem } from '../types';
import AnimatedSection from './AnimatedSection';
import { BriefcaseIcon, HelpCircleIcon } from './Icons';

const experienceData: ExperienceItem[] = [
  {
    role: 'Applied AI/ML Software Engineering Intern',
    company: 'Microsoft AI (MAI)',
    date: 'June 2026 - August 2026',
    location: 'Redmond, WA',
    description: [
      'Shipped a production AKS ingestion service for Microsoft Cashback — six affiliate APIs plus CRM, watermarked dedup on Azure Service Bus and SQL — covering 25,000+ merchants and replacing a 12-vendor manual workflow.',
      'Built a budget-capped Azure OpenAI triage layer with deterministic fallbacks that extracts deal terms from unstructured catalogs: 90% less manual entry, and a human-reviewed PR for every update.',
      'Replaced full-catalog rebuilds with incremental sync and single-blob serialization, cutting memory 50% and latency from 8 minutes to seconds.',
    ],
    iconName: 'briefcase',
  },
  {
    role: 'Head of ML Systems and Backend',
    company: 'Echolon',
    date: 'November 2025 - Present',
    location: 'Portland, OR',
    description: [
      'Own forecasting ML, LLM inference, and backend for an AI business-intelligence platform built so small and mid-size companies can decide faster.',
    ],
    iconName: 'briefcase',
  },
  {
    role: 'Technical Consultant',
    company: 'Tesla',
    date: 'August 2025 - January 2026',
    location: 'Remote',
    description: [
      'Prototyped a LangGraph supply-chain multi-agent system over 40,000+ operational records with 94%+ intent accuracy.',
      'Routed queries through entity extraction and deterministic handlers (FAISS and control flow) instead of text-to-SQL, with end-to-end decisions under 500ms.',
      'Built LLM-as-a-judge evals for hallucination, intent, and usefulness, cutting critical-failure root-cause time by 35%.',
    ],
    iconName: 'briefcase',
  },
  {
    role: 'Undergraduate Researcher',
    company: 'The Wang Lab @ Duke University',
    date: 'January 2025 - Present',
    location: 'Durham, NC',
    description: [
      'Led an ML sub-team on Raman spectroscopy automation — AsLS baseline correction, Savitzky–Golay denoising, and 1D-CNNs — taking analysis from hours to minutes and cutting environment spin-up by 60%.',
      'Containerized training and deployment with Docker and CI/CD, holding 99.5% test reproducibility across machines.',
    ],
    iconName: 'briefcase',
  },
  {
    role: 'AI Software Developer Intern',
    company: 'Calidar Medical',
    date: 'June 2025 - September 2025',
    location: 'Durham, NC',
    description: [
      'Designed a multi-input 1D-CNN for breast cancer classification on spectral and spatial channels: 0.99 ROC AUC and >0.90 recall with Focal Loss and PR-curve thresholding.',
      'Shipped a two-stage vision pipeline — YOLOv8 localization, then EfficientNetV2 classification — for high-throughput clinical datasets.',
    ],
    iconName: 'briefcase',
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
