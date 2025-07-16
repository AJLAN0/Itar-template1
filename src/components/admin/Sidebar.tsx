import React from 'react';

const sections = [
  { id: 'hero', label: 'Hero' },
  { id: 'about', label: 'About' },
  { id: 'photos', label: 'Photos' },
  { id: 'experience', label: 'Experience + Gear' },
  { id: 'services', label: 'Services' },
  { id: 'work', label: 'Work Gallery' },
  { id: 'footer', label: 'Footer' },
];

const Sidebar: React.FC<{ active: string; onSelect: (id: string) => void }> = ({ active, onSelect }) => (
  <aside className="h-full w-64 bg-white border-r flex flex-col">
    <div className="p-6 font-bold text-xl">Admin</div>
    <nav className="flex-1">
      {sections.map(section => (
        <button
          key={section.id}
          className={`block w-full text-left px-6 py-3 hover:bg-gray-100 transition ${
            active === section.id ? 'bg-gray-200 font-semibold' : ''
          }`}
          onClick={() => onSelect(section.id)}
        >
          {section.label}
        </button>
      ))}
    </nav>
  </aside>
);

export default Sidebar;