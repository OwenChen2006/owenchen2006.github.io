import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';

type CertificateItem = {
  title: string;
  href: string;
};

const certificates: CertificateItem[] = [
  {
    title: 'IBM Quantum Qubit & Qubit Certificate (2020-2021)',
    href: new URL('../src/assets/2_2020-2021 IBM Qutuam Computer Qubit & Qubit Certificate-OwenChen.pdf', import.meta.url).href,
  },
  {
    title: 'IBM Quantum Challenge Fall 2022 — Advanced Badge',
    href: new URL('../src/assets/IBM_Quantum_Challenge_Fall_2022_Achievement___Advanced_Badge20221128-30-bmiuuu.pdf', import.meta.url).href,
  },
];

const Certificates: React.FC = () => {
  const [expandedSet, setExpandedSet] = useState<Set<number>>(new Set());

  const toggleExpanded = (index: number) => {
    setExpandedSet(prev => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <AnimatedSection id="certificates">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Certificates</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certificates.map((c, idx) => (
            <div key={idx} className="bg-slate-800/80 backdrop-blur-sm p-6 rounded-lg border border-slate-700">
              <div className="flex items-center justify-between">
                <div className="text-slate-200 font-medium pr-4">{c.title}</div>
                <div className="flex gap-3">
                  <button
                    type="button"
                    aria-expanded={expandedSet.has(idx)}
                    onClick={() => toggleExpanded(idx)}
                    className="inline-block bg-slate-700 text-slate-100 font-bold py-2 px-4 rounded-md hover:bg-slate-600 transition-all"
                  >
                    {expandedSet.has(idx) ? 'Hide Preview' : 'Preview'}
                  </button>
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 inline-block bg-sky-500/80 text-white font-bold py-2 px-4 rounded-md hover:bg-sky-600/90 transition-all"
                  >
                    View
                  </a>
                </div>
              </div>
              {expandedSet.has(idx) && (
                <div className="mt-4">
                  <object data={c.href} type="application/pdf" width="100%" height="500">
                    <a href={c.href} target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline">Open PDF</a>
                  </object>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Certificates;


