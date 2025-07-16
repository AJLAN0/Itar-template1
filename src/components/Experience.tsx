import React from 'react';

const Experience: React.FC = () => (
  <section className="py-16 px-4 bg-white" id="experience">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Work History</h3>
        <ul className="space-y-2">
          <li>Company A – Photographer (2020-2022)</li>
          <li>Company B – Lead Photographer (2018-2020)</li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">Gear</h3>
        <ul className="space-y-2">
          <li>Canon EOS R5 – Camera</li>
          <li>Sony A7 III – Camera</li>
          <li>DJI Mavic Air 2 – Drone</li>
        </ul>
      </div>
    </div>
  </section>
);

export default Experience; 