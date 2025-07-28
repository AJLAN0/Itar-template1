import React from 'react';
import { useCMSContext } from '../context/CMSContext';

const WorkGallery: React.FC = () => {
  const { content } = useCMSContext();
  const images = content?.gallery?.images ?? [];
  console.log('Gallery Images →', images);
  return (
    <section className="py-16 px-4 bg-white" id="work">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Work Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {images.map((src, idx) => (
            src && <img key={idx} src={src} alt={`Gallery ${idx + 1}`} className="h-24 rounded" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkGallery;
