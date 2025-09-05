import React from 'react';
import AnimatedSection from './AnimatedSection';

const Education: React.FC = () => {
  return (
    <AnimatedSection id="education">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Education</h2>
        <div className="max-w-4xl mx-auto bg-slate-800/80 backdrop-blur-sm p-6 rounded-lg border border-slate-700">
          <div className="flex flex-col md:flex-row md:items-baseline md:justify-between">
            <div>
              <h3 className="text-2xl font-bold text-sky-400">Duke University</h3>
              <p className="text-slate-300 italic">Bachelor of Science in Engineering</p>
            </div>
            <div className="text-slate-400 mt-2 md:mt-0">Durham, NC — Expected May 2027</div>
          </div>
          <div className="mt-4 text-slate-300">
            <p>Double Major in Electrical and Computer Engineering and Computer Science — <span className="font-semibold">GPA: 3.7/4.0</span></p>
            <p className="mt-3"><span className="font-semibold">Relevant coursework:</span> Data Structures and Algorithms, Computer Architecture, Linear Algebra, Fundamentals of ECE, Signals and Systems, Multivariable Calculus, Probability</p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Education;


