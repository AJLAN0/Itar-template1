import React from 'react';

const SectionEditor: React.FC<{ children: React.ReactNode; title: string }> = ({ children, title }) => (
  <div className="bg-white rounded shadow p-6 mb-8">
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    {children}
  </div>
);

export default SectionEditor;