import React from 'react';

const images = Array.from({ length: 10 }, (_, i) => `https://placehold.co/300x200?text=Photo+${i+1}`);

const WorkGallery: React.FC = () => (
  <section className="py-16 px-4 bg-white" id="work">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Work Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {images.map((src, idx) => (
          <img key={idx} src={src} alt={`Work ${idx+1}`} className="rounded-lg shadow-md object-cover w-full h-40" />
        ))}
      </div>
    </div>
  </section>
);

export default WorkGallery; 