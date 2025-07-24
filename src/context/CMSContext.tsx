import React, { createContext, useContext, useState, useEffect } from 'react';
import type { CMSContent } from '../types';
import { defaultCMSContent } from '../types';
import { doc, updateDoc, setDoc,onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';

interface CMSContextType {
  content: CMSContent;
  updateSection: (section: keyof CMSContent, value: any) => Promise<void>;
}

const CMSContext = createContext<CMSContextType | undefined>(undefined);

const CMSProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<CMSContent>(defaultCMSContent);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const docRef = doc(db, 'cms', 'homepage');
    const unsubscribe = onSnapshot(
      docRef,
      (docSnap) => {
        if (docSnap.exists()) {
          setContent(docSnap.data() as CMSContent);
          setLoading(false);
        }
      },
      (err) => {
        setError(err.message);
        setLoading(false);
      }
    );
    return () => unsubscribe();
  }, []);

  const updateSection = async (section: keyof CMSContent, value: any) => {
    const docRef = doc(db, 'cms', 'homepage');
    await setDoc(docRef, { [section]: value }, { merge: true });
    console.log("Saving:", section, value);
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