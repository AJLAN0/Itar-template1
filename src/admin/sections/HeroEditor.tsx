import React, { useState, useEffect } from 'react';
import SectionEditor from '../../components/admin/SectionEditor';
import { useCMSContext } from '../../context/CMSContext';

const HeroEditor: React.FC = () => {
  const { content, updateSection } = useCMSContext();
  const hero = content.hero ?? { name: '', career: '', image: '' };
  const [name, setName] = useState(hero.name);
  const [career, setCareer] = useState(hero.career);
  const [image, setImage] = useState(hero.image);
  const [message, setMessage] = useState('');

  // Sync local state with CMS context when content.hero changes
  useEffect(() => {
    setName(content.hero.name);
    setCareer(content.hero.career);
    setImage(content.hero.image);
  }, [content.hero.name, content.hero.career, content.hero.image]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => setImage(ev.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    console.log('[CMS] Saving hero section:', { name, career, image });
    updateSection('hero', { name, career, image });
    setMessage('Saved!');
    setTimeout(() => setMessage(''), 2000);
  };

  const handlePublish = () => {
    console.log('[CMS] Publishing hero section:', { name, career, image });
    updateSection('hero', { name, career, image });
    setMessage('Published!');
    setTimeout(() => setMessage(''), 2000);
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