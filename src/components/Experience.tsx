import React from 'react';
import { useCMSContext } from '../context/CMSContext';

const Experience: React.FC = () => {
  const { content } = useCMSContext();
  const experience = content?.experience ?? { work: [], gear: [] };

  return (
    <section className="py-16 px-4 bg-white" id="experience">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Work History</h3>
          <ul className="space-y-2">
            {experience.work.map((item, idx) => (
              <li key={idx}>{item.company} – {item.position} ({item.year})</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Gear</h3>
          <ul className="space-y-2">
            {experience.gear.map((item, idx) => (
              <li key={idx}>{item.name} – {item.type}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
