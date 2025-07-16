import React from 'react';

const Navbar: React.FC = () => (
  <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md fixed w-full z-10">
    <div className="font-bold text-xl">Photographer Name</div>
    <ul className="flex space-x-6">
      <li><a href="#services" className="hover:text-blue-500">Services</a></li>
      <li><a href="#work" className="hover:text-blue-500">Work</a></li>
      <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
    </ul>
  </nav>
);

export default Navbar; 