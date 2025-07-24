import React, { useState, useEffect } from 'react';
import SectionEditor from '../../components/admin/SectionEditor';
import { useCMSContext } from '../../context/CMSContext';
import { uploadImage } from '../../utils/imageUpload';

const WorkGalleryEditor: React.FC = () => {
  const { content, updateSection } = useCMSContext();
  const gallery = content.gallery ?? { images: [] };
  const [images, setImages] = useState(gallery.images);
  const [message, setMessage] = useState('');

  // Sync with CMS context if content changes externally
  useEffect(() => {
    setImages(content.gallery.images);
  }, [content.gallery.images]);

  const handleImageChange = async (idx: number, file: File) => {
    const url = await uploadImage(file);
    setImages(images.map((img, i) => (i === idx ? url : img)));
  };

  const handleAddImage = () => {
    setImages([...images, '']);
  };

  const handleRemoveImage = (idx: number) => {
    setImages(images.filter((_, i) => i !== idx));
  };

  const handleSave = () => {
    updateSection('gallery', { images });
    setMessage('Saved!');
    setTimeout(() => setMessage(''), 2000);
  };
  const handlePublish = () => {
    updateSection('gallery', { images });
    setMessage('Published!');
    setTimeout(() => setMessage(''), 2000);
  };

  return (
    <SectionEditor title="Edit Work Gallery Section">
      <form className="space-y-4" onSubmit={e => e.preventDefault()}>
        {images.map((img, idx) => (
          <div key={idx} className="flex items-center gap-4 mb-2">
            <img src={img} alt={`Gallery ${idx + 1}`} className="h-24 rounded" />
            <input
              type="file"
              onChange={e => {
                if (e.target.files?.[0]) handleImageChange(idx, e.target.files[0]);
              }}
            />
            <button type="button" onClick={() => handleRemoveImage(idx)} className="text-red-500 px-2">Remove</button>
          </div>
        ))}
        <button type="button" onClick={handleAddImage} className="bg-gray-200 px-3 py-1 rounded">Add Image</button>
        <div className="flex gap-4 mt-4">
          <button type="button" onClick={handleSave} className="bg-blue-600 text-white px-4 py-2 rounded">Save</button>
          <button type="button" onClick={handlePublish} className="bg-green-600 text-white px-4 py-2 rounded">Publish</button>
        </div>
        {message && <div className="text-green-600 mt-2">{message}</div>}
      </form>
    </SectionEditor>
  );
};

export default WorkGalleryEditor;
