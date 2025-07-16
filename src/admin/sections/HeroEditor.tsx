import React, { useState } from 'react';
import SectionEditor from '../../components/admin/SectionEditor';
import { useCMSContext } from '../../context/CMSContext';

const HeroEditor: React.FC = () => {
  const { content, updateSection } = useCMSContext();
  const [name, setName] = useState(content.hero.name);
  const [career, setCareer] = useState(content.hero.career);
  const [image, setImage] = useState(content.hero.image);
  const [message, setMessage] = useState('');

  // Optional: handle image upload
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => setImage(ev.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    updateSection('hero', { name, career, image });
    setMessage('Saved!');
    setTimeout(() => setMessage(''), 2000);
  };

  const handlePublish = () => {
    updateSection('hero', { name, career, image });
    setMessage('Published!');
    setTimeout(() => setMessage(''), 2000);
    // Optionally, add logic to mark as published or trigger a deploy
  };

  return (
    <SectionEditor title="Edit Hero Section">
      <form className="space-y-4" onSubmit={e => e.preventDefault()}>
        <input
          className="w-full border rounded px-3 py-2"
          placeholder="Full Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          className="w-full border rounded px-3 py-2"
          placeholder="Career"
          value={career}
          onChange={e => setCareer(e.target.value)}
        />
        <input
          type="file"
          className="w-full"
          onChange={handleImageChange}
        />
        {image && <img src={image} alt="Preview" className="h-24 rounded" />}
        <div className="flex gap-4">
          <button type="button" onClick={handleSave} className="bg-blue-600 text-white px-4 py-2 rounded">Save</button>
          <button type="button" onClick={handlePublish} className="bg-green-600 text-white px-4 py-2 rounded">Publish</button>
        </div>
        {message && <div className="text-green-600 mt-2">{message}</div>}
      </form>
    </SectionEditor>
  );
};

export default HeroEditor;