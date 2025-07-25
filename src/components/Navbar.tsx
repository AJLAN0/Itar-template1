import React from 'react';
import { useCMSContext } from '../context/CMSContext';

const Navbar: React.FC = () => {
  const { content } = useCMSContext();
  const hero = content?.hero ?? { name: 'Photographer Name' };

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md fixed w-full z-10">
      <div className="font-bold text-xl">{hero.name}</div>
      <ul className="flex space-x-6">
        <li><a href="#services" className="hover:text-blue-500">Services</a></li>
        <li><a href="#work" className="hover:text-blue-500">Work</a></li>
        <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
