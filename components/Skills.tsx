
import React from 'react';
import type { SkillCategory } from '../types';
import AnimatedSection from './AnimatedSection';

const skillsData: SkillCategory[] = [
  {
    name: 'Languages',
    skills: ['Java', 'Python', 'C/C++', 'Assembly', 'HTML', 'CSS', 'Bash', 'Javascript'],
  },
  {
    name: 'Developer Tools & Frameworks',
    skills: ['PyTorch', 'TensorFlow', 'React', 'Flask', 'FastAPI', 'LangChain', 'Qiskit', 'Arduino', 'Git', 'Google Cloud', 'Colab'],
  },
  {
    name: 'Libraries & Data Science',
    skills: ['NumPy', 'Pandas', 'SciPy', 'Matplotlib', 'scikit-learn', 'Keras', 'OpenCV', 'FAISS'],
  },
  {
    name: 'Databases & Systems',
    skills: ['PostgreSQL', 'SQLite', 'CUDA', 'Linux', 'Docker', 'Azure ML'],
  },
  {
    name: 'Hardware & EDA',
    skills: ['Logisim Evolution', 'AutoCAD'],
  },
];

const Skills: React.FC = () => {
  return (
    <AnimatedSection id="skills" className="bg-slate-900/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Technical Skills
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skillsData.map((category) => (
            <div key={category.name} className="bg-slate-800/80 backdrop-blur-sm p-6 rounded-lg border border-slate-700">
              <h3 className="text-2xl font-bold text-sky-400 mb-4">{category.name}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span key={skill} className="bg-slate-700 text-slate-300 text-sm font-medium px-4 py-2 rounded-md shadow-md">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Skills;
