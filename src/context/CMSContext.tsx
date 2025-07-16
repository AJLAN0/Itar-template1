import React, { createContext, useContext, useState, useEffect } from 'react';
import type { CMSContent } from '../types'; // adjust path if needed
import { defaultCMSContent } from '../types'; // adjust path if needed

interface CMSContextType {
  content: CMSContent;
  updateSection: (section: keyof CMSContent, value: any) => void;
}

const CMSContext = createContext<CMSContextType | undefined>(undefined);

const CMSProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<CMSContent>(defaultCMSContent);

  useEffect(() => {
    const stored = localStorage.getItem('cmsContent');
    if (stored) setContent(JSON.parse(stored));
  }, []);

  const updateSection = (section: keyof CMSContent, value: any) => {
    const updated = { ...content, [section]: value };
    setContent(updated);
    localStorage.setItem('cmsContent', JSON.stringify(updated));
  };

  return (
    <CMSContext.Provider value={{ content, updateSection }}>
      {children}
    </CMSContext.Provider>
  );
};

export default CMSProvider;

export const useCMSContext = () => {
  const ctx = useContext(CMSContext);
  if (!ctx) throw new Error('useCMSContext must be used within CMSProvider');
  return ctx;
};