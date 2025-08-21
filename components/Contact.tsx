
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from './Icons';

const Contact: React.FC = () => {
    const contactInfo = {
        phone: '919-768-2648',
        email: 'owen.chen@duke.edu',
        linkedin: 'https://www.linkedin.com/in/owen-chen2006',
        github: 'https://github.com/OwenChen2006'
    };

    return (
        <AnimatedSection id="contact">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12 text-white neon-text">
                    Get In Touch
                </h2>
                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-lg text-slate-400 mb-8">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious team. Feel free to reach out.
                    </p>
                    <a href={`mailto:${contactInfo.email}`} className="mb-12 inline-block bg-cyan-500/80 text-white font-bold py-4 px-10 rounded-full hover:bg-cyan-600/90 transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/40">
                      Say Hello
                    </a>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
                        <a href={`tel:${contactInfo.phone}`} className="group flex items-center justify-center gap-3 p-4 rounded-xl bg-slate-800/60 backdrop-blur-sm neon-border shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/40 transition-all transform hover:-translate-y-1 hover:scale-[1.02]">
                            <PhoneIcon className="w-6 h-6 text-cyan-400" />
                            <span className="text-slate-200 group-hover:text-cyan-300 select-all">{contactInfo.phone}</span>
                        </a>
                        <a href={`mailto:${contactInfo.email}`} className="group flex items-center justify-center gap-3 p-4 rounded-xl bg-slate-800/60 backdrop-blur-sm neon-border shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/40 transition-all transform hover:-translate-y-1 hover:scale-[1.02]">
                            <MailIcon className="w-6 h-6 text-cyan-400" />
                            <span className="text-slate-200 group-hover:text-cyan-300 select-all">{contactInfo.email}</span>
                        </a>
                        <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-3 p-4 rounded-xl bg-slate-800/60 backdrop-blur-sm neon-border shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/40 transition-all transform hover:-translate-y-1 hover:scale-[1.02]">
                            <GithubIcon className="w-6 h-6 text-cyan-400" />
                            <span className="text-slate-200 group-hover:text-cyan-300">github.com/OwenChen2006</span>
                        </a>
                        <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-3 p-4 rounded-xl bg-slate-800/60 backdrop-blur-sm neon-border shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/40 transition-all transform hover:-translate-y-1 hover:scale-[1.02] sm:col-span-2 md:col-span-1">
                            <LinkedinIcon className="w-6 h-6 text-cyan-400" />
                            <span className="text-slate-200 group-hover:text-cyan-300">LinkedIn</span>
                        </a>
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
};

export default Contact;
