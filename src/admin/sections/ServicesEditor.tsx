import React, { useState } from 'react';
import SectionEditor from '../../components/admin/SectionEditor';
import { useCMSContext } from '../../context/CMSContext';

const ServicesEditor: React.FC = () => {
  const { content, updateSection } = useCMSContext();
  const [services, setServices] = useState(content.services);
  const [message, setMessage] = useState('');

  const handleServiceChange = (idx: number, field: string, value: string) => {
    const updated = services.map((s, i) => i === idx ? { ...s, [field]: value } : s);
    setServices(updated);
  };

  const handleAdd = () => setServices([...services, { title: '', description: '' }]);
  const handleRemove = (idx: number) => setServices(services.filter((_, i) => i !== idx));

  const handleSave = () => {
    updateSection('services', services);
    setMessage('Saved!');
    setTimeout(() => setMessage(''), 2000);
  };

  const handlePublish = () => {
    updateSection('services', services);
    setMessage('Published!');
    setTimeout(() => setMessage(''), 2000);
  };

  return (
    <SectionEditor title="Edit Services Section">
      <form className="space-y-4" onSubmit={e => e.preventDefault()}>
        {services.map((service, idx) => (
          <div key={idx} className="flex gap-2 items-center">
            <input
              className="border rounded px-2 py-1 flex-1"
              placeholder="Title"
              value={service.title}
              onChange={e => handleServiceChange(idx, 'title', e.target.value)}
            />
            <input
              className="border rounded px-2 py-1 flex-1"
              placeholder="Description"
              value={service.description}
              onChange={e => handleServiceChange(idx, 'description', e.target.value)}
            />
            <button type="button" onClick={() => handleRemove(idx)} className="text-red-500 px-2">Remove</button>
          </div>
        ))}
        <button type="button" onClick={handleAdd} className="bg-gray-200 px-3 py-1 rounded">Add Service</button>
        <div className="flex gap-4 mt-4">
          <button type="button" onClick={handleSave} className="bg-blue-600 text-white px-4 py-2 rounded">Save</button>
          <button type="button" onClick={handlePublish} className="bg-green-600 text-white px-4 py-2 rounded">Publish</button>
        </div>
        {message && <div className="text-green-600 mt-2">{message}</div>}
      </form>
    </SectionEditor>
  );
};

export default ServicesEditor;
