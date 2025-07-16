import React from 'react';
import { useCMSContext } from '../context/CMSContext';

const Hero: React.FC = () => {
  const { content } = useCMSContext();
  const { image, name, career } = content.hero;

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-50 pt-24" id="hero">
      <img src={image} alt="Photographer" className="rounded-full w-48 h-48 object-cover mb-6 shadow-lg" />
      <h1 className="text-4xl font-bold mb-2">{name}</h1>
      <p className="text-xl text-gray-600">{career}</p>
    </section>
  );
};

export default Hero; 