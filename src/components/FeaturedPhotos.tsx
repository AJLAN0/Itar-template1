import React from 'react';
import { useCMSContext } from '../context/CMSContext';

const FeaturedPhotos: React.FC = () => {
  const { content } = useCMSContext();
  const images = content?.featured?.images ?? [];

  return (
    <section className="py-16 px-4 bg-gray-100" id="featured">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Photos</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {images.map((img, idx) => (
            <img key={idx} src={img} alt={`Featured ${idx + 1}`} className="rounded-lg shadow-md object-cover w-full md:w-1/2" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPhotos;
