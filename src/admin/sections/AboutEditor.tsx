import React, { useState } from 'react';
import SectionEditor from '../../components/admin/SectionEditor';
import { useCMSContext } from '../../context/CMSContext';

const AboutEditor: React.FC = () => {
  const { content, updateSection } = useCMSContext();
  const about = content.about ?? { name: '', text: '', paragraph: '' };
  const [name, setName] = useState(about.name);
  const [text, setText] = useState(about.text);
  const [paragraph, setParagraph] = useState(about.paragraph);
  const [message, setMessage] = useState('');

  const handleSave = () => {
    updateSection('about', { name, text, paragraph });
    setMessage('Saved!');
    setTimeout(() => setMessage(''), 2000);
  };

  const handlePublish = () => {
    updateSection('about', { name, text, paragraph });
    setMessage('Published!');
    setTimeout(() => setMessage(''), 2000);
  };

  return (
    <SectionEditor title="Edit About Section">
      <form className="space-y-4" onSubmit={e => e.preventDefault()}>
        <input
          className="w-full border rounded px-3 py-2"
          placeholder="Full Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          className="w-full border rounded px-3 py-2"
          placeholder="Welcome Text"
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <textarea
          className="w-full border rounded px-3 py-2"
          placeholder="About Paragraph"
          value={paragraph}
          onChange={e => setParagraph(e.target.value)}
        />
        <div className="flex gap-4">
          <button type="button" onClick={handleSave} className="bg-blue-600 text-white px-4 py-2 rounded">Save</button>
          <button type="button" onClick={handlePublish} className="bg-green-600 text-white px-4 py-2 rounded">Publish</button>
        </div>
        {message && <div className="text-green-600 mt-2">{message}</div>}
      </form>
    </SectionEditor>
  );
};

export default AboutEditor;
