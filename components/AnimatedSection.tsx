
import React from 'react';
import type { ReactNode } from 'react';
import { useOnScreen } from '../hooks/useOnScreen';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className = '', id }) => {
  const [ref, isVisible] = useOnScreen<HTMLDivElement>({
    threshold: 0.1,
  });

  return (
    <section 
      id={id} 
      ref={ref} 
      className={`py-20 md:py-32 transition-all duration-1000 transform ${className} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      {children}
    </section>
  );
};

export default AnimatedSection;
