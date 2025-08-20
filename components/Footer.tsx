
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900/50 py-6">
      <div className="container mx-auto px-6 text-center text-slate-500">
        <p>&copy; {new Date().getFullYear()} Owen Chen. All Rights Reserved.</p>
        <p className="text-sm mt-2">Designed & Built by Owen Chen</p>
      </div>
    </footer>
  );
};

export default Footer;
