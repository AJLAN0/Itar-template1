import React, { useState } from 'react';
import SectionEditor from '../../components/admin/SectionEditor';
import { useCMSContext } from '../../context/CMSContext';

const ExperienceEditor: React.FC = () => {
  const { content, updateSection } = useCMSContext();
  const experience = content.experience ?? {
    work: [],
    gear: [],
  };
  const [work, setWork] = useState(experience.work);
  const [gear, setGear] = useState(experience.gear);
  const [message, setMessage] = useState('');

  // Work history handlers
  const handleWorkChange = (idx: number, field: string, value: string) => {
    setWork(work.map((w, i) => i === idx ? { ...w, [field]: value } : w));
  };
  const addWork = () => setWork([...work, { company: '', position: '', year: '' }]);
  const removeWork = (idx: number) => setWork(work.filter((_, i) => i !== idx));

  // Gear handlers
  const handleGearChange = (idx: number, field: string, value: string) => {
    setGear(gear.map((g, i) => i === idx ? { ...g, [field]: value } : g));
  };
  const addGear = () => setGear([...gear, { name: '', type: '' }]);
  const removeGear = (idx: number) => setGear(gear.filter((_, i) => i !== idx));

  const handleSave = () => {
    updateSection('experience', { work, gear });
    setMessage('Saved!');
    setTimeout(() => setMessage(''), 2000);
  };
  const handlePublish = () => {
    updateSection('experience', { work, gear });
    setMessage('Published!');
    setTimeout(() => setMessage(''), 2000);
  };

  return (
    <SectionEditor title="Edit Experience + Gear Section">
      <form className="space-y-6" onSubmit={e => e.preventDefault()}>
        <div>
          <h3 className="font-semibold mb-2">Work History</h3>
          {work.map((item, idx) => (
            <div key={idx} className="flex gap-2 mb-2 items-center">
              <input className="border rounded px-2 py-1" placeholder="Company" value={item.company} onChange={e => handleWorkChange(idx, 'company', e.target.value)} />
              <input className="border rounded px-2 py-1" placeholder="Position" value={item.position} onChange={e => handleWorkChange(idx, 'position', e.target.value)} />
              <input className="border rounded px-2 py-1" placeholder="Year" value={item.year} onChange={e => handleWorkChange(idx, 'year', e.target.value)} />
              <button type="button" onClick={() => removeWork(idx)} className="text-red-500 px-2">Remove</button>
            </div>
          ))}
          <button type="button" onClick={addWork} className="bg-gray-200 px-3 py-1 rounded">Add Work</button>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Gear</h3>
          {gear.map((item, idx) => (
            <div key={idx} className="flex gap-2 mb-2 items-center">
              <input className="border rounded px-2 py-1" placeholder="Name" value={item.name} onChange={e => handleGearChange(idx, 'name', e.target.value)} />
              <input className="border rounded px-2 py-1" placeholder="Type" value={item.type} onChange={e => handleGearChange(idx, 'type', e.target.value)} />
              <button type="button" onClick={() => removeGear(idx)} className="text-red-500 px-2">Remove</button>
            </div>
          ))}
          <button type="button" onClick={addGear} className="bg-gray-200 px-3 py-1 rounded">Add Gear</button>
        </div>
        <div className="flex gap-4 mt-4">
          <button type="button" onClick={handleSave} className="bg-blue-600 text-white px-4 py-2 rounded">Save</button>
          <button type="button" onClick={handlePublish} className="bg-green-600 text-white px-4 py-2 rounded">Publish</button>
        </div>
        {message && <div className="text-green-600 mt-2">{message}</div>}
      </form>
    </SectionEditor>
  );
};

export default ExperienceEditor;
