import React from 'react';

const FeaturedPhotos: React.FC = () => (
  <section className="py-16 px-4 bg-gray-100" id="featured">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Featured Photos</h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center">
        <img src="https://placehold.co/400x300" alt="Featured 1" className="rounded-lg shadow-md object-cover w-full md:w-1/2" />
        <img src="https://placehold.co/400x300" alt="Featured 2" className="rounded-lg shadow-md object-cover w-full md:w-1/2" />
      </div>
    </div>
  </section>
);

export default FeaturedPhotos; 