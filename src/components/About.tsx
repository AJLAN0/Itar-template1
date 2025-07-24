import React from 'react';
import { useCMSContext } from '../context/CMSContext';

const About: React.FC = () => {
  const { content } = useCMSContext();
  const about = content?.about ?? { name: '', text: '', paragraph: '' };

  return (
    <section className="py-16 px-4 bg-white" id="about">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">{about.text || 'About Me'}</h2>
        <p className="mb-2 text-lg">Hi, I'm <span className="font-semibold">{about.name}</span>.</p>
        <p className="text-gray-600">{about.paragraph}</p>
      </div>
    </section>
  );
};

export default About;
