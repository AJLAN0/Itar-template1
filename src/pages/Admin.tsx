import React, { useState } from 'react';
import Sidebar from '../components/admin/Sidebar';
import Header from '../components/admin/Header';
// Import all section editors
import HeroEditor from '../admin/sections/HeroEditor';
import AboutEditor from '../admin/sections/AboutEditor';
import PhotosEditor from '../admin/sections/PhotosEditor';
import ExperienceEditor from '../admin/sections/ExperienceEditor';
import ServicesEditor from '../admin/sections/ServicesEditor';
import WorkGalleryEditor from '../admin/sections/WorkGalleryEditor';
import FooterEditor from '../admin/sections/FooterEditor';

const sectionComponents: Record<string, React.FC> = {
  hero: HeroEditor,
  about: AboutEditor,
  photos: PhotosEditor,
  experience: ExperienceEditor,
  services: ServicesEditor,
  work: WorkGalleryEditor,
  footer: FooterEditor,
};

const Admin: React.FC = () => {
  const [active, setActive] = useState('hero');
  const Section = sectionComponents[active];

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar active={active} onSelect={setActive} />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 overflow-y-auto p-8">
          <Section />
        </main>
      </div>
    </div>
  );
};

export default Admin;