import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-gray-900 text-white py-8 px-4 mt-16" id="contact">
    <div className="max-w-4xl mx-auto text-center">
      <div className="font-bold text-lg mb-2">Full Name</div>
      <div className="mb-2">Professional Photographer</div>
      <div className="space-x-4">
        <span>📞 123-456-7890</span>
        <span>📸 <a href="https://instagram.com/yourprofile" className="underline" target="_blank" rel="noopener noreferrer">Instagram</a></span>
        <span>✉️ your@email.com</span>
      </div>
    </div>
  </footer>
);

export default Footer; 