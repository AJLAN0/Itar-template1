import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase';

export const uploadImage = async (file: File): Promise<string> => {
  const fileRef = ref(storage, `images/${file.name}`);
  await uploadBytes(fileRef, file);
  const url = await getDownloadURL(fileRef);
  return url; // Save this URL in Firestore as part of your content
};

export default uploadImage;