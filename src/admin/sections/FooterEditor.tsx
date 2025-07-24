import React, { useState } from 'react';
import SectionEditor from '../../components/admin/SectionEditor';
import { useCMSContext } from '../../context/CMSContext';

const FooterEditor: React.FC = () => {
  const { content, updateSection } = useCMSContext();
  const footer = content.footer ?? {
    name: '',
    career: '',
    contact: {
      number: '',
      instagram: '',
      email: '',
    },
  };
  const [name, setName] = useState(footer.name);
  const [career, setCareer] = useState(footer.career);
  const [number, setNumber] = useState(footer.contact.number);
  const [instagram, setInstagram] = useState(footer.contact.instagram);
  const [email, setEmail] = useState(footer.contact.email);
  const [message, setMessage] = useState('');

  const handleSave = () => {
    updateSection('footer', {
      name,
      career,
      contact: { number, instagram, email },
    });
    setMessage('Saved!');
    setTimeout(() => setMessage(''), 2000);
  };
  const handlePublish = () => {
    updateSection('footer', {
      name,
      career,
      contact: { number, instagram, email },
    });
    setMessage('Published!');
    setTimeout(() => setMessage(''), 2000);
  };

  return (
    <SectionEditor title="Edit Footer Section">
      <form className="space-y-4" onSubmit={e => e.preventDefault()}>
        <input className="w-full border rounded px-3 py-2" placeholder="Full Name" value={name} onChange={e => setName(e.target.value)} />
        <input className="w-full border rounded px-3 py-2" placeholder="Career" value={career} onChange={e => setCareer(e.target.value)} />
        <input className="w-full border rounded px-3 py-2" placeholder="Phone Number" value={number} onChange={e => setNumber(e.target.value)} />
        <input className="w-full border rounded px-3 py-2" placeholder="Instagram URL" value={instagram} onChange={e => setInstagram(e.target.value)} />
        <input className="w-full border rounded px-3 py-2" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <div className="flex gap-4 mt-4">
          <button type="button" onClick={handleSave} className="bg-blue-600 text-white px-4 py-2 rounded">Save</button>
          <button type="button" onClick={handlePublish} className="bg-green-600 text-white px-4 py-2 rounded">Publish</button>
        </div>
        {message && <div className="text-green-600 mt-2">{message}</div>}
      </form>
    </SectionEditor>
  );
};

export default FooterEditor;
