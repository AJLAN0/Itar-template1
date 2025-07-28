import React, { createContext, useContext, useState, useEffect } from 'react';
import type { CMSContent } from '../types';
import { defaultCMSContent } from '../types';
import { doc, setDoc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';

interface CMSContextType {
  content: CMSContent;
  updateSection: (section: keyof CMSContent, value: any) => Promise<void>;
  siteId: string;
}

const CMSContext = createContext<CMSContextType | undefined>(undefined);

const getSubdomain = () => {
  if (typeof window !== 'undefined') {
    const [sub] = window.location.hostname.split('.');
    return sub;
  }
  return 'default'; // fallback for SSR/local dev
};

const CMSProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<CMSContent>(defaultCMSContent);
  const siteId = getSubdomain();

  useEffect(() => {
    const docRef = doc(db, 'cms', siteId);
    const unsubscribe = onSnapshot(
      docRef,
      (docSnap) => {
        if (docSnap.exists()) {
          setContent(docSnap.data() as CMSContent);
        }
      }
    );
    return () => unsubscribe();
  }, [siteId]);

  const updateSection = async (section: keyof CMSContent, value: any) => {
    const docRef = doc(db, 'cms', siteId);
    await setDoc(docRef, { [section]: value }, { merge: true });
    console.log("Saving:", section, value);
  };

  return (
    <CMSContext.Provider value={{ content, updateSection, siteId }}>
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