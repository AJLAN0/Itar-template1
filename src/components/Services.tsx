import React from 'react';

const services = [
  { title: 'Portrait Photography', description: 'Professional portraits for individuals and families.' },
  { title: 'Event Photography', description: 'Capturing special moments at events and celebrations.' },
  { title: 'Landscape Photography', description: 'Stunning landscapes and nature shots.' },
];

const Services: React.FC = () => (
  <section className="py-16 px-4 bg-gray-100" id="services">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Services</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-md p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services; 