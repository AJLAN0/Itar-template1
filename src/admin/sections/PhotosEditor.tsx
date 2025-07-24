import React, { useState } from 'react';
import SectionEditor from '../../components/admin/SectionEditor';
import { useCMSContext } from '../../context/CMSContext';
import { uploadImage } from '../../utils/imageUpload';

const PhotosEditor: React.FC = () => {
  const { content, updateSection } = useCMSContext();
  const featured = content.featured ?? { images: [] };
  const [images, setImages] = useState(featured.images);
  const [message, setMessage] = useState('');

  const handleImageChange = async (idx: number, file: File) => {
    const url = await uploadImage(file);
    setImages(images.map((img, i) => (i === idx ? url : img)));
  };

  const handleSave = () => {
    updateSection('featured', { images });
    setMessage('Saved!');
    setTimeout(() => setMessage(''), 2000);
  };
  const handlePublish = () => {
    updateSection('featured', { images });
    setMessage('Published!');
    setTimeout(() => setMessage(''), 2000);
  };

  return (
    <SectionEditor title="Edit Featured Photos Section">
      <form className="space-y-4" onSubmit={e => e.preventDefault()}>
        {images.map((img, idx) => (
          <div key={idx} className="flex items-center gap-4 mb-2">
            <img src={img} alt={`Featured ${idx + 1}`} className="h-24 rounded" />
            <input
              type="file"
              onChange={e => {
                if (e.target.files?.[0]) handleImageChange(idx, e.target.files[0]);
              }}
            />
          </div>
        ))}
        <div className="flex gap-4 mt-4">
          <button type="button" onClick={handleSave} className="bg-blue-600 text-white px-4 py-2 rounded">Save</button>
          <button type="button" onClick={handlePublish} className="bg-green-600 text-white px-4 py-2 rounded">Publish</button>
        </div>
        {message && <div className="text-green-600 mt-2">{message}</div>}
      </form>
    </SectionEditor>
  );
};

export default PhotosEditor;
