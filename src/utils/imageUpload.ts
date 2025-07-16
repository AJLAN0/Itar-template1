export const uploadImage = async (file: File): Promise<string> => {
  // In production, upload to Cloudinary or similar
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => resolve(e.target?.result as string);
    reader.readAsDataURL(file);
  });
}; 