
import React from 'react';
import { BrainCircuitIcon, CodeXmlIcon, DnaIcon, CpuIcon, RocketIcon, AtomIcon } from './Icons';

const AnimatedCube: React.FC = () => {
  const faces = [
    { position: 'front', icon: <BrainCircuitIcon className="w-16 h-16" /> },
    { position: 'back', icon: <CodeXmlIcon className="w-16 h-16" /> },
    { position: 'right', icon: <DnaIcon className="w-16 h-16" /> },
    { position: 'left', icon: <CpuIcon className="w-16 h-16" /> },
    { position: 'top', icon: <RocketIcon className="w-16 h-16" /> },
    { position: 'bottom', icon: <AtomIcon className="w-16 h-16" /> },
  ];

  return (
    <div className="perspective-container w-[200px] h-[200px] hidden md:block">
      <div className="cube">
        {faces.map(face => (
          <div key={face.position} className={`cube-face ${face.position}`}>
            {face.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCube;
