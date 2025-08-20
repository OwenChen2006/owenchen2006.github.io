
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
                <h2 className="text-4xl font-bold text-center mb-12 text-white">
                    Get In Touch
                </h2>
                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-lg text-slate-400 mb-8">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious team. Feel free to reach out.
                    </p>
                    <a href={`mailto:${contactInfo.email}`} className="mb-12 inline-block bg-sky-500 text-white font-bold py-4 px-10 rounded-full hover:bg-sky-600 transition-all transform hover:scale-105">
                      Say Hello
                    </a>
                    <div className="flex justify-center space-x-6">
                        <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-400 transition-colors">
                            <GithubIcon className="w-8 h-8"/>
                        </a>
                        <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-400 transition-colors">
                            <LinkedinIcon className="w-8 h-8"/>
                        </a>
                        <a href={`mailto:${contactInfo.email}`} className="text-slate-400 hover:text-sky-400 transition-colors">
                            <MailIcon className="w-8 h-8"/>
                        </a>
                        <a href={`tel:${contactInfo.phone}`} className="text-slate-400 hover:text-sky-400 transition-colors">
                            <PhoneIcon className="w-8 h-8"/>
                        </a>
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
};

export default Contact;
