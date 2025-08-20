import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';

type PublicationItem = {
  title: string;
  href: string;
};

const publications: PublicationItem[] = [
  {
    title: 'Detection Efficiency Loophole Mitigation — Main Article',
    href: new URL("../src/assets/Detection Eff. Loophole Mitigation_Owen Chen_Main Article copy.pdf", import.meta.url).href,
  },
  {
    title: 'Enhancements and Applications of Series Acceleration',
    href: new URL('../src/assets/IJHSR_2023_55_38.pdf', import.meta.url).href,
  },
];

const Publications: React.FC = () => {
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
    <AnimatedSection id="publications">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Publications</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {publications.map((p, idx) => (
            <div key={idx} className="bg-slate-800/80 backdrop-blur-sm p-6 rounded-lg border border-slate-700">
              <div className="flex items-center justify-between">
                <div className="text-slate-200 font-medium pr-4">{p.title}</div>
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
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-sky-500/80 text-white font-bold py-2 px-4 rounded-md hover:bg-sky-600/90 transition-all"
                  >
                    Open
                  </a>
                  <a
                    href={p.href}
                    download
                    className="inline-block bg-slate-700 text-slate-100 font-bold py-2 px-4 rounded-md hover:bg-slate-600 transition-all"
                  >
                    Download
                  </a>
                </div>
              </div>
              {expandedSet.has(idx) && (
                <div className="mt-4">
                  <object data={p.href} type="application/pdf" width="100%" height="500">
                    <a href={p.href} target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline">Open PDF</a>
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

export default Publications;


