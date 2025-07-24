import React from 'react';
import { useCMSContext } from '../context/CMSContext';

const Footer: React.FC = () => {
  const { content } = useCMSContext();
  const footer = content?.footer ?? {
    name: '',
    career: '',
    contact: { number: '', instagram: '', email: '' },
  };

  return (
    <footer className="bg-gray-900 text-white py-8 px-4 mt-16" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <div className="font-bold text-lg mb-2">{footer.name}</div>
        <div className="mb-2">{footer.career}</div>
        <div className="space-x-4">
          <span>📞 {footer.contact.number}</span>
          <span>📸 <a href={footer.contact.instagram} className="underline" target="_blank" rel="noopener noreferrer">Instagram</a></span>
          <span>✉️ {footer.contact.email}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
